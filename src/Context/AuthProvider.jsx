import { useState } from "react";
import { AuthContext } from "./AuthContext";

import {
    loginUser,
    registerUser,
} from "../services/authService";

function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");

        return storedUser ? JSON.parse(storedUser) : null;
    });

    const [loading] = useState(false);

    const login = async (credentials) => {
        const data = await loginUser(credentials);

        setUser(data);

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
        setUser(null);

        localStorage.removeItem("user");
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