// authService.ts
import axios from '../axiosInstance'; // Asegúrate de que la ruta de importación sea correcta

export const login = (username: string, password: string) => {
  const body = {
    username,
    password,
  };

  return axios.post('/auth/login', body);
};

export const logoutService = () => {
  sessionStorage.removeItem('sessionJWTToken');
  sessionStorage.removeItem('userId');
  sessionStorage.removeItem('userRoles');
  window.location.href = '/login';
};

export const register = (
  username: string,
  password: string,
  email: string,
  address: string
) => {
  const body = {
    username,
    password,
    email,
    address,
  };

  return axios.post('/auth/register', body);
};

export const resetPassword = (email: string) => {
  const body = { email };
  return axios.post('/auth/reset-password', body);
};

export const sendOtpCode = (email: string) => {
  const body = { email };
  return axios.post('/auth/otp-password', body);
};

export const updatePassword = (email: string, newPassword: string) => {
  const body = {
    email,
    newPassword,
  };

  return axios.put('/auth/update-password', body);
};
