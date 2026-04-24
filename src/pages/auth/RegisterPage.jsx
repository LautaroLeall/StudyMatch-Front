import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BookOpen, Check, GraduationCap, Search, Users } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sileo } from "sileo";

import useAuth from "../../hooks/useAuth";
import { registerSchema } from "../../utils/validators";
import { carreras } from "../../data/carreras";
import "../../styles/RegisterPage.css";

const ESTADOS = [
    { value: "", label: "— Estado —" },
    { value: "no_cursada", label: "No cursada" },
    { value: "cursando", label: "Cursando" },
    { value: "debe_rendir", label: "Debe rendir" },
    { value: "recursando", label: "Recursando" },
    { value: "aprobada", label: "Aprobada" },
];

const NIVELES = [
    { value: "", label: "— Nivel —" },
    { value: "basico", label: "Básico" },
    { value: "intermedio", label: "Intermedio" },
    { value: "avanzado", label: "Avanzado" },
];

const nivelAplica = (estado) =>
    estado && estado !== "no_cursada";

const stepVariants = {
    enter: (dir) => ({ x: dir > 0 ? 48 : -48, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir < 0 ? 48 : -48, opacity: 0 }),
};

const transition = { duration: 0.28, ease: [0.4, 0, 0.2, 1] };

const STEPS = [
    { num: 1, label: "Datos" },
    { num: 2, label: "Carrera" },
    { num: 3, label: "Materias" },
    { num: 4, label: "Objetivo" },
];

function ProgressBar({ current }) {
    return (
        <nav className="reg-progress" aria-label="Progreso del registro">
            {STEPS.map((step, idx) => {
                const done = current > step.num;
                const active = current === step.num;
                return (
                    <div key={step.num} style={{ display: "flex", alignItems: "center" }}>
                        <div className="reg-step-item">
                            <div className={`reg-step-dot ${done ? "done" : active ? "active" : ""}`}>
                                {done ? <Check size={14} /> : step.num}
                            </div>
                            <span className={`reg-step-label ${done ? "done" : active ? "active" : ""}`}>
                                {step.label}
                            </span>
                        </div>
                        {idx < STEPS.length - 1 && (
                            <div className={`reg-step-line ${done ? "done" : ""}`} />
                        )}
                    </div>
                );
            })}
        </nav>
    );
}

// PASO 1: Datos Personales

function Step1({ onNext }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(registerSchema) });

    return (
        <form className="reg-form" onSubmit={handleSubmit(onNext)} noValidate>
            <div className="reg-step-header">
                <h2 className="reg-step-title">Datos personales</h2>
                <p className="reg-step-desc">Vas a usar este email para iniciar sesión.</p>
            </div>

            <div className="reg-row">
                <div className="reg-field">
                    <div className={`reg-input-wrapper ${errors.name ? "error" : ""}`}>
                        <input className="reg-input" placeholder=" " {...register("name")} />
                        <label className="reg-label">Nombre</label>
                    </div>
                    {errors.name && <span className="reg-error">{errors.name.message}</span>}
                </div>
                <div className="reg-field">
                    <div className={`reg-input-wrapper ${errors.lastname ? "error" : ""}`}>
                        <input className="reg-input" placeholder=" " {...register("lastname")} />
                        <label className="reg-label">Apellido</label>
                    </div>
                    {errors.lastname && <span className="reg-error">{errors.lastname.message}</span>}
                </div>
            </div>

            <div className="reg-field">
                <div className={`reg-input-wrapper ${errors.email ? "error" : ""}`}>
                    <input type="email" className="reg-input" placeholder=" " {...register("email")} />
                    <label className="reg-label">Email institucional</label>
                </div>
                {errors.email && <span className="reg-error">{errors.email.message}</span>}
            </div>

            <div className="reg-field">
                <div className={`reg-input-wrapper ${errors.password ? "error" : ""}`}>
                    <input type="password" className="reg-input" placeholder=" " {...register("password")} />
                    <label className="reg-label">Contraseña</label>
                </div>
                {errors.password && <span className="reg-error">{errors.password.message}</span>}
            </div>

            <div className="reg-actions" style={{ justifyContent: "flex-end" }}>
                <button type="submit" className="reg-btn-next">
                    Continuar <ArrowRight size={16} />
                </button>
            </div>
        </form>
    );

}

// PASO 2: Carrera y Año

function Step2({ data, onChange, onNext, onBack }) {
    const canContinue = data.carrera && data.año;

    return (
        <div>
            <div className="reg-step-header">
                <h2 className="reg-step-title">Tu carrera</h2>
                <p className="reg-step-desc">Seleccioná tu carrera y el año que estás cursando.</p>
            </div>

            <div className="reg-carrera-grid">
                {carreras.map((c) => (
                    <button
                        key={c.id}
                        type="button"
                        className={`reg-option-card ${data.carrera === c.id ? "selected" : ""}`}
                        onClick={() => onChange({ carrera: c.id, año: "" })}
                    >
                        <div className="reg-option-card-icon">
                            <GraduationCap size={18} />
                        </div>
                        <div className="reg-option-card-text">
                            <p className="reg-option-card-name">{c.nombre}</p>
                            <p className="reg-option-card-sub">{c.abreviatura} · {c.duracion} años</p>
                        </div>
                        <div className="reg-option-card-check">
                            {data.carrera === c.id && <Check size={10} color="white" />}
                        </div>
                    </button>
                ))}
            </div>

            {data.carrera && (
                <div style={{ marginTop: "1.5rem" }}>
                    <label className="reg-label" style={{ display: "block", marginBottom: "0.75rem" }}>
                        Año que cursás actualmente
                    </label>
                    <div className="reg-year-grid">
                        {Array.from(
                            { length: carreras.find(c => c.id === data.carrera)?.duracion || 5 },
                            (_, i) => i + 1
                        ).map((y) => (
                            <button
                                key={y}
                                type="button"
                                className={`reg-year-btn ${data.año === y ? "selected" : ""}`}
                                onClick={() => onChange({ año: y })}
                            >
                                {y}°
                                <span className="reg-year-label">año</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            <div className="reg-actions">
                <button type="button" className="reg-btn-back" onClick={onBack}>
                    <ArrowLeft size={15} /> Volver
                </button>
                <button
                    type="button"
                    className="reg-btn-next"
                    onClick={onNext}
                    disabled={!canContinue}
                >
                    Continuar <ArrowRight size={16} />
                </button>
            </div>
        </div>
    );
}

// PASO 3: Materias

function Step3({ data, onMateriaChange, onNext, onBack }) {
    const carrera = carreras.find(c => c.id === data.carrera);
    if (!carrera) return null;

    // Agrupar materias por año
    const porAño = {};
    carrera.materias.forEach((m) => {
        if (!porAño[m.año]) porAño[m.año] = [];
        porAño[m.año].push(m);
    });

    const años = Object.keys(porAño).map(Number).sort();

    // Verificar que todas las materias activas (hasta el año cursado) tengan estado
    const materiasActivas = carrera.materias.filter(m => m.año <= data.año);
    const todasCompletas = materiasActivas.every(m => {
        const val = data.materias?.[m.id];
        return val && val.estado;
    });

    return (
        <div>
            <div className="reg-step-header">
                <h2 className="reg-step-title">Tus materias</h2>
                <p className="reg-step-desc">
                    Indicá el estado de cada materia hasta {data.año}° año. Las del resto son opcionales.
                </p>
            </div>

            <div className="reg-materias-scroll">
                {años.map((año) => (
                    <div key={año}>
                        <div className="reg-año-label">
                            {año}° año
                            {año > data.año && " — bloqueado"}
                        </div>
                        {porAño[año].map((materia) => {
                            const locked = materia.año > data.año;
                            const val = data.materias?.[materia.id] || { estado: "", nivel: "" };
                            const showNivel = nivelAplica(val.estado);

                            return (
                                <div
                                    key={materia.id}
                                    className={`reg-materia-row ${locked ? "locked" : ""}`}
                                >
                                    <span className="reg-materia-name">{materia.nombre}</span>
                                    <div className="reg-materia-selects">
                                        <select
                                            className="reg-mini-select"
                                            value={val.estado}
                                            disabled={locked}
                                            onChange={(e) =>
                                                onMateriaChange(materia.id, "estado", e.target.value)
                                            }
                                        >
                                            {ESTADOS.map(o => (
                                                <option key={o.value} value={o.value}>{o.label}</option>
                                            ))}
                                        </select>
                                        <select
                                            className={`reg-mini-select nivel`}
                                            value={val.nivel}
                                            disabled={locked || !showNivel}
                                            onChange={(e) =>
                                                onMateriaChange(materia.id, "nivel", e.target.value)
                                            }
                                        >
                                            {NIVELES.map(o => (
                                                <option key={o.value} value={o.value}>{o.label}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>

            <p className="reg-materias-hint">
                Las materias en gris corresponden a años superiores al tuyo y no se pueden editar.
            </p>

            <div className="reg-actions">
                <button type="button" className="reg-btn-back" onClick={onBack}>
                    <ArrowLeft size={15} /> Volver
                </button>
                <button
                    type="button"
                    className="reg-btn-next"
                    onClick={onNext}
                    disabled={!todasCompletas}
                >
                    Continuar <ArrowRight size={16} />
                </button>
            </div>
        </div>
    );
}

// PASO 4: Intención

const INTENCIONES = [
    {
        value: "apoyo",
        Icon: Search,
        title: "Buscar apoyo",
        desc: "Quiero unirme a grupos de estudio y recibir ayuda de otros estudiantes.",
    },
    {
        value: "ayudar",
        Icon: BookOpen,
        title: "Ayudar a otros",
        desc: "Quiero sumarme a grupos de estudio para enseñar y guiar a mis compañeros.",
    },
    {
        value: "ambas",
        Icon: Users,
        title: "Ambas",
        desc: "Quiero aprender de otros y también enseñar lo que sé.",
    },
];

function Step4({ intencion, onChange, onSubmit, onBack, loading }) {
    return (
        <div>
            <div className="reg-step-header">
                <h2 className="reg-step-title">¿Qué buscás?</h2>
                <p className="reg-step-desc">Contanos cómo querés participar en StudyMatch.</p>
            </div>

            <div className="reg-intencion-grid">
                {INTENCIONES.map((op) => (
                    <button
                        key={op.value}
                        type="button"
                        className={`reg-intencion-card ${intencion === op.value ? "selected" : ""}`}
                        onClick={() => onChange(op.value)}
                    >
                        <div className="reg-intencion-icon"><op.Icon size={18} /></div>
                        <div className="reg-intencion-body">
                            <p className="reg-intencion-title">{op.title}</p>
                            <p className="reg-intencion-desc">{op.desc}</p>
                        </div>
                        <div className="reg-intencion-radio" />
                    </button>
                ))}
            </div>

            <div className="reg-actions">
                <button type="button" className="reg-btn-back" onClick={onBack}>
                    <ArrowLeft size={15} /> Volver
                </button>
                <button
                    type="button"
                    className="reg-btn-next"
                    onClick={onSubmit}
                    disabled={!intencion || loading}
                >
                    {loading ? "Creando cuenta..." : "Completar registro"} <Check size={16} />
                </button>
            </div>
        </div>
    );
}

// COMPONENTE PRINCIPAL

function RegisterPage() {
    const navigate = useNavigate();
    const { register: registerUser } = useAuth();

    const [step, setStep] = useState(1);
    const [direction, setDirection] = useState(1);
    const [loading, setLoading] = useState(false);

    // Estado global del formulario
    const [formData, setFormData] = useState({
        // Paso 1
        name: "", lastname: "", email: "", password: "",
        // Paso 2
        carrera: "", año: "",
        // Paso 3
        materias: {},
        // Paso 4
        intencion: "",
    });

    // Navegar entre pasos
    const goNext = () => { setDirection(1); setStep(s => s + 1); };
    const goBack = () => { setDirection(-1); setStep(s => s - 1); };

    // Paso 1 → guardar datos personales y avanzar
    const handleStep1 = (data) => {
        setFormData(prev => ({ ...prev, ...data }));
        goNext();
    };

    // Paso 2 → actualizar carrera/año
    const handleCarreraChange = (changes) => {
        setFormData(prev => ({
            ...prev,
            ...changes,
            // Resetear materias si cambia la carrera
            ...(changes.carrera ? { materias: {} } : {}),
        }));
    };

    // Paso 3 → actualizar estado/nivel de una materia
    const handleMateriaChange = (id, campo, valor) => {
        setFormData(prev => ({
            ...prev,
            materias: {
                ...prev.materias,
                [id]: {
                    ...prev.materias[id],
                    [campo]: valor,
                    // Si cambia el estado a "no cursada", limpiar nivel
                    ...(campo === "estado" && !nivelAplica(valor) ? { nivel: "" } : {}),
                },
            },
        }));
    };

    // Paso 4 → submit final
    const handleSubmit = async () => {
        setLoading(true);
        try {
            await registerUser(formData);
            sileo.success({
                title: "¡Cuenta creada!",
                description: "Ya podés iniciar sesión con tus credenciales."
            });
            navigate("/login");
        } catch {
            sileo.error({
                title: "Error al crear la cuenta",
                description: "Intentá de nuevo en unos segundos."
            });
        } finally {
            setLoading(false);
        }
    };

    const isStepWide = step === 3;

    return (
        <div className="reg-layout">
            <div className={`reg-container ${isStepWide ? "step-wide" : ""}`}>

                {/* Logo */}
                <Link to="/" className="reg-logo">
                    <div className="reg-logo-icon">
                        <GraduationCap size={20} />
                    </div>
                    <div className="reg-logo-text">
                        <h1 className="reg-logo-title">StudyMatch</h1>
                        <span className="reg-logo-subtitle">UNSTA</span>
                    </div>
                </Link>

                {/* Progress bar */}
                <ProgressBar current={step} />

                {/* Card con el paso actual */}
                <div className="reg-card reg-step-wrapper">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={step}
                            custom={direction}
                            variants={stepVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={transition}
                        >
                            {step === 1 && (
                                <Step1 onNext={handleStep1} />
                            )}
                            {step === 2 && (
                                <Step2
                                    data={formData}
                                    onChange={handleCarreraChange}
                                    onNext={goNext}
                                    onBack={goBack}
                                />
                            )}
                            {step === 3 && (
                                <Step3
                                    data={formData}
                                    onMateriaChange={handleMateriaChange}
                                    onNext={goNext}
                                    onBack={goBack}
                                />
                            )}
                            {step === 4 && (
                                <Step4
                                    intencion={formData.intencion}
                                    onChange={(val) =>
                                        setFormData(prev => ({ ...prev, intencion: val }))
                                    }
                                    onSubmit={handleSubmit}
                                    onBack={goBack}
                                    loading={loading}
                                />
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Link a login */}
                {step === 1 && (
                    <p className="reg-login-link">
                        ¿Ya tenés cuenta? <Link to="/login">Iniciar sesión</Link>
                    </p>
                )}
            </div>
        </div>
    );
}

export default RegisterPage;