'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Importar useRouter para redirección
import { checkAuth, login, register } from './services/authService'; // Importar servicios

// Tipo de las claves del formulario
type FormFields =
  | 'loginEmail'
  | 'loginPassword'
  | 'registerEmail'
  | 'registerPassword'
  | 'registerFirstName'
  | 'registerLastName'
  | 'registerRut';

// Tipo del estado del formulario
type FormData = {
  [key in FormFields]: string; // Permite usar claves dinámicas
};

export default function LoginPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [formData, setFormData] = useState<FormData>({
    loginEmail: '',
    loginPassword: '',
    registerEmail: '',
    registerPassword: '',
    registerFirstName: '',
    registerLastName: '',
    registerRut: '',
  });
  const [error, setError] = useState<{ login: string; register: string }>({
    login: '',
    register: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter(); // Inicializar router

  useEffect(() => {
    let isMounted = true;

    const checkAuthentication = async () => {
      try {
        const response = await checkAuth();
        if (response.authenticated) {
          if (isMounted) {
            setIsAuthenticated(true);
            router.push('/dashboard'); // Redirigir al dashboard si está autenticado
          }
        } else {
          if (isMounted) setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
        if (isMounted) setIsAuthenticated(false);
      }
    };

    checkAuthentication();

    return () => {
      isMounted = false;
    };
  }, [router]); // Incluir router como dependencia

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError((prev) => ({ ...prev, login: '' }));
    setSuccessMessage('');
    try {
      const response = await login({
        email: formData.loginEmail,
        password: formData.loginPassword,
      });

      if (response.error) {
        setError((prev) => ({ ...prev, login: response.error }));
        return;
      }

      setSuccessMessage('Login successful!');
      setIsAuthenticated(true);
      router.push('/dashboard'); // Redirigir al dashboard tras un login exitoso
    } catch (error) {
      setError((prev) => ({
        ...prev,
        login: 'Unexpected error occurred during login.',
      }));
    }
  };

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError((prev) => ({ ...prev, register: '' }));
    setSuccessMessage('');
    try {
      const response = await register({
        email: formData.registerEmail,
        password: formData.registerPassword,
        first_name: formData.registerFirstName,
        last_name: formData.registerLastName,
        rut: formData.registerRut,
      });

      if (response.error) {
        setError((prev) => ({ ...prev, register: response.error }));
        return;
      }

      setSuccessMessage('Registration successful! Please log in.');
      setFormData({
        loginEmail: '',
        loginPassword: '',
        registerEmail: '',
        registerPassword: '',
        registerFirstName: '',
        registerLastName: '',
        registerRut: '',
      });
    } catch (error) {
      setError((prev) => ({
        ...prev,
        register: 'Unexpected error occurred during registration.',
      }));
    }
  };

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <div className="row">
            {/* Login Section */}
            <div className="col-md-6">
              <div className="heading mb-1">
                <h2 className="title">Login</h2>
              </div>
              <form onSubmit={handleLogin}>
                <label htmlFor="loginEmail">
                  Username or email address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  className="form-input form-wide"
                  id="loginEmail"
                  value={formData.loginEmail}
                  onChange={handleInputChange}
                  required
                />

                <label htmlFor="loginPassword">
                  Password <span className="required">*</span>
                </label>
                <input
                  type="password"
                  className="form-input form-wide"
                  id="loginPassword"
                  value={formData.loginPassword}
                  onChange={handleInputChange}
                  required
                />

                {error.login && (
                  <div className="alert alert-danger">{error.login}</div>
                )}
                {successMessage && (
                  <div className="alert alert-success">{successMessage}</div>
                )}

                <button type="submit" className="btn btn-dark btn-md w-100">
                  LOGIN
                </button>
              </form>
            </div>

            {/* Register Section */}
            <div className="col-md-6">
              <div className="heading mb-1">
                <h2 className="title">Register</h2>
              </div>
              <form onSubmit={handleRegister}>
                {[
                  'registerEmail',
                  'registerPassword',
                  'registerFirstName',
                  'registerLastName',
                  'registerRut',
                ].map((field, index) => (
                  <div key={index}>
                    <label htmlFor={field}>
                      {field.split(/(?=[A-Z])/).join(' ')}{' '}
                      <span className="required">*</span>
                    </label>
                    <input
                      type={field === 'registerPassword' ? 'password' : 'text'}
                      className="form-input form-wide"
                      id={field}
                      value={formData[field as keyof FormData]}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                ))}
                {error.register && (
                  <div className="alert alert-danger">{error.register}</div>
                )}
                {successMessage && (
                  <div className="alert alert-success">{successMessage}</div>
                )}

                <button type="submit" className="btn btn-dark btn-md w-100">
                  REGISTER
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
