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