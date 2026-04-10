import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sileo } from "sileo";

import useAuth from "../../hooks/useAuth";

import Input from "../ui/Input";
import Button from "../ui/Button";

import { loginSchema } from "../../utils/validators";
import "../../styles/Forms.css";

function LoginForm() {
    const { login } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data) => {
        try {
            await login(data);

            sileo.success({
                title: "Bienvenido nuevamente",
            });
        } catch {
            sileo.error({
                title: "Error al iniciar sesión",
            });
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="form-container"
        >
            <Input
                label="Correo electrónico"
                type="email"
                placeholder="ejemplo@mail.com"
                name="email"
                register={register}
                error={errors.email}
            />

            <Input
                label="Contraseña"
                type="password"
                placeholder="********"
                name="password"
                register={register}
                error={errors.password}
            />

            <Button type="submit">
                Iniciar Sesión
            </Button>
        </form>
    );
}

export default LoginForm;