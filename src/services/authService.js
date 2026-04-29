// COMUNICARSE CON EL BACKEND (la API del servidor).
export const loginUser = async (data) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: "Lauty",
                email: data.email,
                token: "fake-jwt-token",
            });
        }, 1500);
    });
};

// MOCK: Simula una petición POST /auth/register al backend.
// Actualmente resuelve siempre con éxito, devolviendo un mensaje de confirmación.
export const registerUser = async (data) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                message: "Usuario registrado correctamente",
                user: data,
            });
        }, 1500);
    });
};