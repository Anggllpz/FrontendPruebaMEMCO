// src/routes/Routes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from '../Pages/logginForm';
import UsersPage from '../Pages/usersPages';
// Importa tus componentes aquí. Ejemplo:
// import Home from '../components/Home';
// import About from '../components/About';

const AppRoutes = () => {
  return (
    <Routes>
   <Route path="/" element={<LoginForm />}></Route>
   <Route path="/users" element={<UsersPage />}></Route>

    </Routes>
  );
};

export default AppRoutes;
