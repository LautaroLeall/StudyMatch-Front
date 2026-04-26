import { z } from "zod";

export const loginSchema = z.object({
    email: z
        .email("Debe ser un email válido"),

    password: z
        .string()
        .min(6, "La contraseña debe tener mínimo 6 caracteres"),
});

export const registerSchema = z.object({
    name: z
        .string()
        .min(2, "El nombre debe tener al menos 2 caracteres"),

    lastname: z
        .string()
        .min(2, "El apellido debe tener al menos 2 caracteres"),

    email: z
        .email("Debe ser un email válido"),

    password: z
        .string()
        .min(6, "La contraseña debe tener mínimo 6 caracteres"),
});