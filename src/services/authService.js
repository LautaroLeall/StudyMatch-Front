/**
 * COMUNICARSE CON EL BACKEND (la API del servidor).
 * Su responsabilidad es única: hacer peticiones HTTP y retornar los datos.
 *   - Componentes: se encargan de mostrar la UI
 *   - Context/Hooks: se encargan del estado global
 *   - Services: se encargan de la comunicación con el servidor
 *
 * Las funciones actuales NO hacen peticiones HTTP reales.
 * Usan Promise + setTimeout para SIMULAR una respuesta del servidor
 * (con 1500ms de delay para imitar la latencia de red).
 *
 * Esto es útil para desarrollar el frontend SIN depender del backend.
 * Cuando el backend esté listo, solo se reemplazan estas funciones
 * con llamadas reales usando axios (que ya está instalado).
 *
 * CÓMO SERÁ CON AXIOS (CUANDO EL BACKEND ESTÉ LISTO):
 * import axios from 'axios';
 *
 * const API_URL = 'https://api.studymatch.com';
 *
 * export const loginUser = async (data) => {
 *   const response = await axios.post(`${API_URL}/auth/login`, data);
 *   return response.data;  // { user, token }
 * };
 */

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

/**
 * MOCK: Simula una petición POST /auth/register al backend.
 * Actualmente resuelve siempre con éxito, devolviendo un mensaje de confirmación.
 *
 * En producción, esta función:
 *   1. Enviará los datos del nuevo usuario al backend
 *   2. El backend validará que el email no exista ya en la base de datos
 *   3. Hasheará la contraseña (NUNCA se guarda la contraseña en texto plano)
 *   4. Creará el usuario en la base de datos
 *   5. Puede enviar un email de verificación
 *   6. Retornará un mensaje de confirmación (o un error si el email ya existe)
 */

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