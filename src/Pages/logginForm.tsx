// LoginForm.tsx
import React, { useState } from 'react';
import { login } from '../services/authService'; // Asegúrate de que la ruta de importación sea correcta
import './styles/logginForm.css'
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await login(username, password);
      sessionStorage.setItem('sessionJWTToken', response.data.token);
      navigate('/users');
      // Redireccionar o manejar el inicio de sesión exitoso aquí
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      // Manejar error de inicio de sesión
    }
  };

  return (
    <div className="login">

      <form className="box" onSubmit={handleSubmit}>
        <div className="log-in-form">
          <div className="overlap-group">
            <div className="container" />
            <div className="signin-title">Sign In</div>
            <div className="signup-title">Sign Up</div>
            <div className="separator"/>
            <div className="username-title">username</div>
            <input
            className="username-input"
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <div className="password-title">password</div>
            <input 
            className="password-input"
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button className="login-button">Sign In</button>
            <div className="forgot-password">forgot password?</div>
          </div>
        </div>
      </form>

      
     
    </div>
  );
};

export default LoginForm;
