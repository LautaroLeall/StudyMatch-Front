/**
 * ============================================================
 * ¿QUÉ ES useContext?
 * ============================================================
 * useContext(AuthContext) es la forma de "consumir" un contexto en React.
 * Recibe el objeto de contexto (el creado con createContext) y devuelve
 * el valor actual del context (lo que se puso en el 'value' del Provider).
 *
 * Si el valor del contexto cambia (ej: el usuario hace login),
 * el componente que uso useContext se RE-RENDERIZA automáticamente.
 */

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function useAuth() {
    // useContext(AuthContext) devuelve el objeto 'value' del AuthContext.Provider
    return useContext(AuthContext);
}

export default useAuth;