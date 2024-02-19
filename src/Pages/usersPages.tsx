// UsersPage.tsx
import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../services/usersService';
import { User } from '../utils/types/User.type'; // Asegúrate de que la ruta de importación sea correcta
import { AxiosResponse } from 'axios';
import ResponsiveAppBar from '../components/MenuLateral';
import './styles/usersPages.css'
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
    <div className="UsersPage-container">
        <ResponsiveAppBar />
      <h1 className='UsersPage-title'>Users</h1>
      <div  className="UsersPage-box">
      {users.map((user) => (
            <div key={user.id} className="UsersPage-user-page">
              <div className="UsersPage-overlap-group">
                <div className="UsersPage-username-value">{user.username || 'N/A'}</div>
                <div className="UsersPage-oid-value">{user.id || 'N/A'}</div>
                <img className="UsersPage-email-icon" alt="Email icon" src="email-icon.png" />
                <img className="UsersPage-location-icon" alt="Location icon" src="location-icon.png" />
                <div className="UsersPage-email-value">{user.email || 'N/A'}</div> {/* Mostrar "N/A" si el correo electrónico está ausente */}
                <div className="UsersPage-address-value">{user.address || 'N/A'}</div> {/* Mostrar "N/A" si la dirección está ausente */}
              </div>
            </div>
        ))}
        </div>

    </div>
  );
};

export default UsersPage;
