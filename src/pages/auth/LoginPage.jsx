import { useState } from "react";
import { Link } from "react-router-dom";
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

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            await login(data);
            sileo.success({ title: "Bienvenido nuevamente" });
        } catch {
            sileo.error({ title: "Email o contraseña incorrectos" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-layout">
            <div className="login-container">

                {/* Logo */}
                <Link to="/" className="login-logo">
                    <div className="login-logo-icon">
                        <GraduationCap size={20} />
                    </div>
                    <div className="login-logo-text">
                        <h1 className="login-logo-title">StudyMatch</h1>
                        <span className="login-logo-subtitle">UNSTA</span>
                    </div>
                </Link>

                {/* Card */}
                <div className="login-card">

                    <div className="login-header">
                        <h2 className="login-title">Bienvenido</h2>
                        <p className="login-desc">Ingresá con tu cuenta de StudyMatch.</p>
                    </div>

                    <form className="login-form" onSubmit={handleSubmit(onSubmit)} noValidate>

                        {/* Email */}
                        <div className="login-field">
                            <div className={`login-input-wrapper ${errors.email ? "error" : ""}`}>
                                <input
                                    type="email"
                                    className="login-input"
                                    placeholder=" "
                                    autoComplete="email"
                                    {...register("email")}
                                />
                                <label className="login-label">Email</label>
                            </div>
                            {errors.email && <span className="login-error">{errors.email.message}</span>}
                        </div>

                        {/* Contraseña */}
                        <div className="login-field">
                            <div className={`login-input-wrapper ${errors.password ? "error" : ""}`}>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="login-input"
                                    placeholder=" "
                                    autoComplete="current-password"
                                    {...register("password")}
                                />
                                <label className="login-label">Contraseña</label>
                                <button
                                    type="button"
                                    className="login-eye-btn"
                                    onClick={() => setShowPassword(p => !p)}
                                    aria-label={showPassword ? "Ocultar contraseña" : "Ver contraseña"}
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                            {errors.password && <span className="login-error">{errors.password.message}</span>}
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="login-btn"
                            disabled={loading}
                        >
                            {loading ? "Iniciando sesión..." : "Iniciar sesión"}
                            {!loading && <ArrowRight size={16} />}
                        </button>
                    </form>
                </div>

                {/* Link registro */}
                <p className="login-register-link">
                    ¿No tenés cuenta?{" "}
                    <Link to="/register">Crear cuenta gratis</Link>
                </p>

            </div>
        </div>
    );
}

export default LoginPage;