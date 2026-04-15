// crear y manejar estado local en el componente
import { useState } from "react";
import { AuthContext } from "./AuthContext";
import {
    loginUser,    // POST /auth/login
    registerUser, // POST /auth/register
} from "../services/authService";

function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user"); // Lee la clave "user" del storage

        // Si storedUser existe (no es null/undefined) → lo convierte de string JSON a objeto JS
        // Si no existe → el usuario comienza como null
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const [loading] = useState(false);

    const login = async (credentials) => {
        // Espera a que el backend responda con los datos del usuario
        const data = await loginUser(credentials);

        // Actualiza el estado de React → todos los componentes que usen useAuth()
        setUser(data);

        // Persiste en localStorage: convierte el objeto JS a string JSON para guardarlo
        localStorage.setItem(
            "user",
            JSON.stringify(data)
        );

        return data;
    };

    const register = async (userData) => {
        const data = await registerUser(userData);

        return data;
    };

    const logout = () => {
        setUser(null); // Limpia el estado → la UI se actualiza automáticamente

        localStorage.removeItem("user"); // Elimina la sesión guardada en el browser
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                register,
                logout,
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;