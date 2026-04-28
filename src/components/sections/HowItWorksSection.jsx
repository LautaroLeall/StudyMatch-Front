// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import '../../styles/HowItWorksSection.css';

const steps = [
    {
        number: 1,
        title: "Creá tu perfil académico",
        text: "Registrate con tu código de alumno, elegí tu carrera y año actual."
    },
    {
        number: 2,
        title: "Configurá tus materias",
        text: "Indicá el estado de cada materia: cursando, debe rendir, aprobada, etc."
    },
    {
        number: 3,
        title: "Elegí tu intención",
        text: "¿Buscás apoyo, podés ayudar a otros, o ambos? Vos decidís."
    },
    {
        number: 4,
        title: "Encontrá compañeros y grupos",
        text: "El sistema te muestra estudiantes compatibles y grupos disponibles al instante."
    }
];

function HowItWorksSection() {
    return (
        <section id="how-it-works"
            className="how-it-works-section relative py-25 px-5">
            <div className="how-it-works-bg-grid absolute" />

            <div className="how-it-works-container relative grid items-center gap-15 mx-auto">

                {/* Left Column Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="how-header mb-4">
                        <span className="how-badge inline-block mb-1">
                            Como funciona
                        </span>
                        <h2 className="how-title">
                            Empezá en minutos
                        </h2>
                        <p className="how-description text-start p-4 mt-5 mx-auto">
                            Sin complicaciones.
                            <br />
                            Te guiamos paso a paso para armar tu perfil académico completo.
                        </p>
                    </div>

                    <div className="how-steps flex flex-col gap-3 mb-6">
                        {steps.map((step) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: step.number * 0.1 }}
                                className="how-step-item flex items-start gap-4 p-4"
                            >
                                <div className="how-step-number flex items-center justify-center">
                                    {step.number}
                                </div>
                                <div className="how-step-content flex flex-col">
                                    <h4 className="how-step-title m-0 mb-1">
                                        {step.title}
                                    </h4>
                                    <p className="how-step-text m-0">
                                        {step.text}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="how-action inline-flex">
                        <Link to="/register">
                            <Button className="hero-btn-primary flex items-center justify-center gap-2 py-4 px-8">
                                Comenzar ahora
                                <ArrowRight className="hero-btn-icon" />
                            </Button>
                        </Link>
                    </div>
                </motion.div>

                {/* Right Column Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="how-visual relative"
                >
                    <div className="dashboard-preview p-9">
                        <div className="dashboard-header mb-5">
                            Vista del Dashboard
                        </div>

                        <div className="dashboard-list flex flex-col gap-4 mb-8">
                            <div className="dashboard-row flex items-center justify-between p-4">
                                <span className="dashboard-row-title">
                                    Programación I
                                </span>
                                <div className="dashboard-status flex items-center gap-1">
                                    <span className="status-dot dot-warning" />
                                    Cursando
                                </div>
                            </div>
                            <div className="dashboard-row flex items-center justify-between p-4">
                                <span className="dashboard-row-title">
                                    Base de Datos I
                                </span>
                                <div className="dashboard-status flex items-center gap-1">
                                    <span className="status-dot dot-danger" />
                                    Debe rendir
                                </div>
                            </div>
                            <div className="dashboard-row flex items-center justify-between p-4">
                                <span className="dashboard-row-title">
                                    Matemática I
                                </span>
                                <div className="dashboard-status flex items-center gap-1">
                                    <span className="status-dot dot-success" />
                                    Aprobada
                                </div>
                            </div>
                            <div className="dashboard-row flex items-center justify-between p-4">
                                <span className="dashboard-row-title">
                                    Sistemas Operativos
                                </span>
                                <div className="dashboard-status flex items-center gap-1">
                                    <span className="status-dot dot-muted" />
                                    No cursada
                                </div>
                            </div>
                        </div>

                        <div className="suggestion-header mb-4">
                            Grupos sugeridos para vos
                        </div>
                        <div className="suggestion-card flex items-center gap-5 p-5">
                            <div className="suggestion-icon flex items-center justify-center">
                                P1
                            </div>
                            <div className="suggestion-info flex flex-col">
                                <span className="suggestion-title">
                                    Final Prog I — Jueves 18hs
                                </span>
                                <span className="suggestion-meta">
                                    4 integrantes · Virtual
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default HowItWorksSection;
