'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  phone?: string; // Opcional
  rut: string;
}

export default function Dashboard() {
  // const router = useRouter();
  // const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(true);

  // // Fetch user data
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const response = await fetch('/api/auth/check', {
  //         method: 'GET',
  //         credentials: 'include', // Include cookies in the request
  //       });

  //       if (response.ok) {
  //         const userData = await response.json();
  //         setUser(userData);
  //       } else {
  //         router.push('/auth/login'); // Redirect to login if not authenticated
  //       }
  //     } catch (error) {
  //       console.error('Error fetching user data:', error);
  //       router.push('/auth/login');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchUser();
  // }, [router]);

  // const handleLogout = async () => {
  //   try {
  //     const response = await fetch('/api/auth/logout', {
  //       method: 'POST',
  //       credentials: 'include',
  //     });

  //     if (response.ok) {
  //       router.push('/auth/login'); // Redirect to login after successful logout
  //     } else {
  //       const error = await response.json();
  //       console.error('Logout error:', error.detail);
  //     }
  //   } catch (error) {
  //     console.error('Error during logout:', error);
  //   }
  // };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null); // Especificamos el tipo del estado
  const [loading, setLoading] = useState(true);

  // Obtener solo la primera palabra del primer nombre
  const getFirstWord = (name: string) => name.split(' ')[0];

  useEffect(() => {
    const validateSession = async () => {
      try {
        // Validar sesión con /api/auth/check
        const checkResponse = await fetch('/api/auth/check', {
          method: 'GET',
          credentials: 'include',
        });

        if (!checkResponse.ok) {
          router.push('/auth/login');
          return;
        }

        // Obtener datos del usuario con /api/auth/user
        const userResponse = await fetch('/api/auth/user', {
          method: 'GET',
          credentials: 'include',
        });

        if (userResponse.ok) {
          const userData: User = await userResponse.json(); // Forzamos el tipo de la respuesta
          setUser(userData);
        } else {
          router.push('/auth/login');
        }
      } catch (error) {
        console.error('Error validating session or fetching user:', error);
        router.push('/auth/login');
      } finally {
        setLoading(false);
      }
    };

    validateSession();
  }, [router]);

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {
        router.push('/auth/login');
      } else {
        const error = await response.json();
        console.error('Logout error:', error.detail);
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container account-container custom-account-container">
      <div className="row">
        {/* Sidebar */}
        <div className="sidebar widget widget-dashboard mb-lg-0 mb-3 col-lg-3 order-0">
          <h2 className="text-uppercase">My Account</h2>
          <ul className="nav nav-tabs list flex-column mb-0" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="dashboard-tab"
                data-bs-toggle="tab"
                href="#dashboard"
                role="tab"
                aria-controls="dashboard"
                aria-selected="true"
              >
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="order-tab"
                data-bs-toggle="tab"
                href="#order"
                role="tab"
                aria-controls="order"
                aria-selected="true"
              >
                Orders
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="download-tab"
                data-bs-toggle="tab"
                href="#download"
                role="tab"
                aria-controls="download"
                aria-selected="false"
              >
                Downloads
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="address-tab"
                data-bs-toggle="tab"
                href="#address"
                role="tab"
                aria-controls="address"
                aria-selected="false"
              >
                Addresses
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="edit-tab"
                data-bs-toggle="tab"
                href="#edit"
                role="tab"
                aria-controls="edit"
                aria-selected="false"
              >
                Account details
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="shop-address-tab"
                data-bs-toggle="tab"
                href="#shipping"
                role="tab"
                aria-controls="shipping"
                aria-selected="false"
              >
                Shopping Address
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="wishlist.html">
                Wishlist
              </a>
            </li>

            <li className="nav-item">
              <Link
                href="#"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault(); // Evitar el comportamiento predeterminado del enlace
                  handleLogout();
                }}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>

        {/* Main content */}
        <div className="col-lg-9 order-lg-last order-1 tab-content">
          <div
            className="tab-pane fade show active"
            id="dashboard"
            role="tabpanel"
          >
            <div className="dashboard-content">
              <p>
                Hello{' '}
                <strong className="text-dark">
                  {user && getFirstWord(user.first_name)}
                </strong>{' '}
                (No eres{' '}
                <strong className="text-dark">{user?.first_name}</strong>?{' '}
                <Link
                  href="#"
                  className="btn btn-link p-0 text-decoration-none"
                  onClick={handleLogout}
                >
                  Log out
                </Link>
                )
              </p>
              <p>
                From your account dashboard you can view your{' '}
                <a className="btn btn-link link-to-tab" href="#order">
                  recent orders
                </a>
                , manage your{' '}
                <a className="btn btn-link link-to-tab" href="#address">
                  shipping and billing addresses
                </a>
                , and{' '}
                <a className="btn btn-link link-to-tab" href="#edit">
                  edit your password and account details.
                </a>
              </p>

              <div className="mb-4"></div>

              <div className="row">
                <div className="col-6 col-md-4">
                  <div className="feature-box text-center pb-4">
                    <a href="#order" className="link-to-tab">
                      <i className="sicon-social-dropbox"></i>
                    </a>
                    <div className="feature-box-content">
                      <h3>ORDERS</h3>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="feature-box text-center pb-4">
                    <a href="#download" className="link-to-tab">
                      <i className="sicon-cloud-download"></i>
                    </a>
                    <div className="feature-box-content">
                      <h3>DOWNLOADS</h3>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="feature-box text-center pb-4">
                    <a href="#address" className="link-to-tab">
                      <i className="sicon-location-pin"></i>
                    </a>
                    <div className="feature-box-content">
                      <h3>ADDRESSES</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Add other tabs as necessary */}
        </div>
      </div>
    </div>
  );
}
