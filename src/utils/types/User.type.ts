// User.type.ts

export type User = {
    id: string; // Asumiendo que id es un string (ObjectId en MongoDB)
    username: string;
    password: string; // Considera si realmente necesitas exponer la contraseña en el frontend
    email: string;
    address: string;
  }
  