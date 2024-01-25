// src/routes/Routes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from '../Pages/logginForm';
// Importa tus componentes aquí. Ejemplo:
// import Home from '../components/Home';
// import About from '../components/About';

const AppRoutes = () => {
  return (
    <Routes>
   <Route path="/login" element={<LoginForm />}></Route>
    </Routes>
  );
};

export default AppRoutes;
