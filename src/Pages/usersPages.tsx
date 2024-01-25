// UsersPage.tsx
import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../services/usersService';
import { User } from '../utils/types/User.type'; // Asegúrate de que la ruta de importación sea correcta
import { AxiosResponse } from 'axios';
import ResponsiveAppBar from '../components/MenuLateral';

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const token = sessionStorage.getItem('sessionJWTToken');

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        try {
          const response = await getAllUsers(token) as AxiosResponse<User[]>;
          if (response && response.data) {
            setUsers(response.data);
          }
        } catch (error) {
          console.error('Error al obtener los usuarios:', error);
          // Manejar errores aquí
        }
      }
      setLoading(false);
    };

    fetchData();
  }, [token]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
        <ResponsiveAppBar />
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Password</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
