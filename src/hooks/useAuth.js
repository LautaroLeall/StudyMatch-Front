import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function useAuth() {
    // useContext(AuthContext) devuelve el objeto 'value' del AuthContext.Provider
    return useContext(AuthContext);
}

export default useAuth;