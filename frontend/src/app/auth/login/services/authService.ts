// services/authService.ts
export const checkAuth = async () => {
  try {
    const response = await fetch('/api/auth/check', {
      method: 'GET',
      credentials: 'include',
    });

    if (!response.ok) {
      return { authenticated: false };
    }

    return await response.json();
  } catch {
    return { authenticated: false };
  }
};

export const login = async (credentials: {
  email: string;
  password: string;
}) => {
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const error = await response.json();
      return { error: error.detail || 'Login failed' };
    }

    return await response.json();
  } catch {
    return { error: 'Unexpected error occurred during login.' };
  }
};

export const register = async (data: {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  rut: string;
}) => {
  try {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      return { error: error.detail || 'Registration failed' };
    }

    return await response.json();
  } catch {
    return { error: 'Unexpected error occurred during registration.' };
  }
};

export const logout = async () => {
  try {
    const response = await fetch('/api/auth/logout', {
      method: 'POST',
      credentials: 'include',
    });

    if (!response.ok) {
      const error = await response.json();
      return { success: false, error: error.detail || 'Logout failed' };
    }

    return { success: true };
  } catch {
    return {
      success: false,
      error: 'Unexpected error occurred during logout.',
    };
  }
};
