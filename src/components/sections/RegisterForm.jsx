import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sileo } from "sileo";

import useAuth from "../../hooks/useAuth";

import Input from "../ui/Input";
import Button from "../ui/Button";

import { registerSchema } from "../../utils/validators";

function RegisterForm() {
    const { register: registerUser } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = async (data) => {
        try {
            await registerUser(data);

            sileo.success({
                title: "Cuenta creada correctamente 🚀",
            });
        } catch {
            sileo.error({
                title: "Error al registrarse",
            });
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
        >
            <Input
                label="Nombre"
                placeholder="Tu nombre"
                name="name"
                register={register}
                error={errors.name}
            />

            <Input
                label="Apellido"
                placeholder="Tu apellido"
                name="lastname"
                register={register}
                error={errors.lastname}
            />

            <Input
                label="Correo"
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
                Registrarse
            </Button>
        </form>
    );
}

export default RegisterForm;