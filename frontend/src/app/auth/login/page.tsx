'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/UserContext';
import { register, checkAuth } from './services/authService';
import { Form, Button, Alert, InputGroup } from 'react-bootstrap';

type FormFields =
  | 'loginEmail'
  | 'loginPassword'
  | 'registerEmail'
  | 'registerPassword'
  | 'confirmPassword'
  | 'registerFirstName'
  | 'registerLastName'
  | 'registerRut';

type FormData = {
  [key in FormFields]: string;
};

export default function LoginPage() {
  const { login } = useUser();
  const [formData, setFormData] = useState<FormData>({
    loginEmail: '',
    loginPassword: '',
    registerEmail: '',
    registerPassword: '',
    confirmPassword: '',
    registerFirstName: '',
    registerLastName: '',
    registerRut: '',
  });
  const [touchedFields, setTouchedFields] = useState<Set<FormFields>>(
    new Set()
  );
  const [error, setError] = useState<{ login: string; register: string }>({
    login: '',
    register: '',
  });
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await checkAuth();

        if (response.authenticated) {
          router.push('/dashboard'); // Redirige si ya está autenticado
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
      }
    };

    checkAuthentication();
  }, [router]);

  const validatePassword = (
    password: string
  ): {
    isValid: boolean;
    rules: { [key: string]: boolean };
  } => {
    const rules = {
      length: password.length >= 8 && password.length <= 64,
      uppercase: /[A-Z]/.test(password),
      number: /\d/.test(password),
      specialChar: /[@$!%*?&]/.test(password),
    };

    const isValid = Object.values(rules).every((rule) => rule);
    return { isValid, rules };
  };

  const getPasswordValidationMessages = (password: string) => {
    const validation = validatePassword(password);
    return [
      {
        message: 'Must be 8-64 characters long',
        valid: validation.rules.length,
      },
      {
        message: 'Must contain at least one uppercase letter',
        valid: validation.rules.uppercase,
      },
      {
        message: 'Must contain at least one number',
        valid: validation.rules.number,
      },
      {
        message: 'Must contain at least one special character (@$!%*?&)',
        valid: validation.rules.specialChar,
      },
    ];
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleBlur = (field: FormFields) => {
    setTouchedFields((prev) => new Set(prev).add(field));
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError((prev) => ({ ...prev, login: '' }));
    setSuccessMessage(null);

    try {
      await login(formData.loginEmail, formData.loginPassword);
      router.push('/dashboard');
    } catch (err: any) {
      setError((prev) => ({
        ...prev,
        login: err.message || 'Invalid credentials.',
      }));
    }
  };

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError((prev) => ({ ...prev, register: '' }));
    setSuccessMessage(null);

    const { registerPassword, confirmPassword } = formData;
    const passwordValidation = validatePassword(registerPassword);

    if (!passwordValidation.isValid) {
      setError((prev) => ({
        ...prev,
        register: 'Password does not meet the required criteria.',
      }));
      return;
    }

    if (registerPassword !== confirmPassword) {
      setError((prev) => ({
        ...prev,
        register: 'Passwords do not match.',
      }));
      return;
    }

    try {
      const response = await register({
        email: formData.registerEmail,
        password: registerPassword,
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
        confirmPassword: '',
        registerFirstName: '',
        registerLastName: '',
        registerRut: '',
      });
    } catch (err) {
      setError((prev) => ({
        ...prev,
        register: 'Unexpected error occurred during registration.',
      }));
    }
  };

  const passwordValidationMessages = getPasswordValidationMessages(
    formData.registerPassword
  );

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <div className="row">
            {/* Login Section */}
            <div className="col-md-6">
              <h2 className="mb-3">Login</h2>
              <Form onSubmit={handleLogin}>
                <Form.Group controlId="loginEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={formData.loginEmail}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group controlId="loginPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={formData.loginPassword}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                {error.login && <Alert variant="danger">{error.login}</Alert>}
                <Button type="submit" variant="dark" className="w-100">
                  Login
                </Button>
              </Form>
            </div>

            {/* Register Section */}
            <div className="col-md-6">
              <h2 className="mb-3">Register</h2>
              <Form onSubmit={handleRegister}>
                <Form.Group controlId="registerEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={formData.registerEmail}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('registerEmail')}
                  />
                </Form.Group>

                <Form.Group controlId="registerPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      value={formData.registerPassword}
                      onChange={handleInputChange}
                      onBlur={() => handleBlur('registerPassword')}
                      isInvalid={
                        touchedFields.has('registerPassword') &&
                        !validatePassword(formData.registerPassword).isValid
                      }
                      isValid={
                        touchedFields.has('registerPassword') &&
                        validatePassword(formData.registerPassword).isValid
                      }
                    />
                  </InputGroup>
                  <ul className="mt-2 text-muted">
                    {passwordValidationMessages.map(
                      ({ message, valid }, index) => (
                        <li
                          key={index}
                          className={valid ? 'text-success' : 'text-danger'}
                        >
                          {message}
                        </li>
                      )
                    )}
                  </ul>
                </Form.Group>

                <Form.Group controlId="confirmPassword" className="mb-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('confirmPassword')}
                    isInvalid={
                      touchedFields.has('confirmPassword') &&
                      formData.registerPassword !== formData.confirmPassword
                    }
                    isValid={
                      touchedFields.has('confirmPassword') &&
                      formData.registerPassword === formData.confirmPassword
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Passwords do not match.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="registerFirstName" className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter first name"
                    value={formData.registerFirstName}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group controlId="registerLastName" className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter last name"
                    value={formData.registerLastName}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group controlId="registerRut" className="mb-3">
                  <Form.Label>RUT</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter RUT"
                    value={formData.registerRut}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                {error.register && (
                  <Alert variant="danger">{error.register}</Alert>
                )}
                {successMessage && (
                  <Alert variant="success">{successMessage}</Alert>
                )}

                <Button type="submit" variant="dark" className="w-100">
                  Register
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
