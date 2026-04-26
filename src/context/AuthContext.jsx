// Este archivo crea el "canal" (el contexto) de autenticación.
// este archivo define el enchufe.
// AuthProvider.jsx pone la electricidad (los datos).
// useAuth.js permite que cualquier componente se conecte al enchufe.

import { createContext } from "react";

// Se crea el contexto sin valor inicial (undefined por defecto).
export const AuthContext = createContext();