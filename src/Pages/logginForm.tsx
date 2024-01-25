// LoginForm.tsx
import React, { useState } from 'react';
import { login } from '../services/authService'; // Ajusta la ruta de importación según sea necesario
import './styles/logginForm.css'

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await login(username, password);
      sessionStorage.setItem('sessionJWTToken', response.data.token); // Guarda el token en sessionStorage
      // Aquí puedes redirigir al usuario o hacer algo más después del inicio de sesión exitoso
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      // Manejo de errores de inicio de sesión
    }
  };

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        {/* Tabs Titles */}
        <h2 className="active"> Sign In </h2>
        <h2 className="inactive underlineHover">Sign Up </h2>

        {/* Icon */}
        <div className="fadeIn first">
          {/* Aquí puedes colocar un ícono o imagen si es necesario */}
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            id="login" 
            className="fadeIn second" 
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input 
            type="password" 
            id="password" 
            className="fadeIn third" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" className="fadeIn fourth" value="Log In" />
        </form>

        {/* Remind Password */}
        <div id="formFooter">
          <a className="underlineHover" href="#">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
