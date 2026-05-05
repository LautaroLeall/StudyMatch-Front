import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GraduationCap, ArrowRight, Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sileo } from "sileo";

import useAuth from "../../hooks/useAuth";
import { loginSchema } from "../../utils/validators";
import "../../styles/LoginPage.css";

function LoginPage() {
    const { login } = useAuth();

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(loginSchema) });

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            await login(data);
            sileo.success({ title: "Bienvenido nuevamente" });
            navigate("/dashboard/inicio");
        } catch {
            sileo.error({ title: "Email o contraseña incorrectos" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-layout relative flex items-center justify-center py-8 px-4">
            <div className="login-container relative flex flex-col items-center gap-0">

                {/* Logo */}
                <Link to="/" className="login-logo flex items-center gap-3 mb-9">
                    <div className="login-logo-icon flex items-center justify-center">
                        <GraduationCap size={20} />
                    </div>
                    <div className="login-logo-text flex flex-col">
                        <h1 className="login-logo-title m-0">
                            StudyMatch
                        </h1>
                        <span className="login-logo-subtitle">
                            UNSTA
                        </span>
                    </div>
                </Link>

                {/* Card */}
                <div className="login-card p-10">

                    <div className="login-header text-center mb-8">
                        <h2 className="login-title m-0 mb-1">
                            Bienvenido
                        </h2>
                        <p className="login-desc m-0">
                            Ingresá con tu cuenta de StudyMatch.
                        </p>
                    </div>

                    <form className="login-form flex flex-col gap-6"
                        onSubmit={handleSubmit(onSubmit)} noValidate>

                        {/* Email */}
                        <div className="login-field flex flex-col gap-1">
                            <div className={`login-input-wrapper relative ${errors.email ? "error" : ""}`}>
                                <input
                                    type="email"
                                    className="login-input relative block pb-2 pt-5 px-4"
                                    placeholder=" "
                                    autoComplete="email"
                                    {...register("email")}
                                />
                                <label className="login-label">Email</label>
                            </div>
                            {errors.email && <span className="login-error mt-1 pl-1">{errors.email.message}</span>}
                        </div>

                        {/* Contraseña */}
                        <div className="login-field flex flex-col gap-1">
                            <div className={`login-input-wrapper relative ${errors.password ? "error" : ""}`}>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="login-input relative block pb-2 pt-5 px-4"
                                    placeholder=" "
                                    autoComplete="current-password"
                                    {...register("password")}
                                />
                                <label className="login-label">Contraseña</label>
                                <button
                                    type="button"
                                    className="login-eye-btn absolute flex items-center justify-center p-0"
                                    onClick={() => setShowPassword(p => !p)}
                                    aria-label={showPassword ? "Ocultar contraseña" : "Ver contraseña"}
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                            {errors.password && <span className="login-error mt-1 pl-1">{errors.password.message}</span>}
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="login-btn flex justify-center items-center gap-2 py-4 px-5 mt-2"
                            disabled={loading}
                        >
                            {loading ? "Iniciando sesión..." : "Iniciar sesión"}
                            {!loading && <ArrowRight size={16} />}
                        </button>
                    </form>
                </div>

                {/* Link registro */}
                <p className="login-register-link text-center mt-8">
                    ¿No tenés cuenta?{" "}
                    <Link to="/register">Crear cuenta gratis</Link>
                </p>

            </div>
        </div>
    );
}

export default LoginPage;