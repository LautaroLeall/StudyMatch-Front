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
        <section id="how-it-works" className="how-it-works-section">
            {/* Soft grid background */}
            <div className="how-it-works-bg-grid"></div>

            <div className="how-it-works-container">

                {/* Left Column Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="how-header">
                        <span className="how-badge">
                            Como funciona
                        </span>
                        <h2 className="how-title">Empezá en minutos</h2>
                        <p className="how-description">
                            Sin complicaciones.
                            <br />
                            Te guiamos paso a paso para armar tu perfil académico completo.
                        </p>
                    </div>

                    <div className="how-steps">
                        {steps.map((step) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: step.number * 0.1 }}
                                className="how-step-item"
                            >
                                <div className="how-step-number">{step.number}</div>
                                <div className="how-step-content">
                                    <h4 className="how-step-title">{step.title}</h4>
                                    <p className="how-step-text">{step.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="how-action">
                        <Link to="/register">
                            <Button className="hero-btn-primary">
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
                    className="how-visual"
                >
                    <div className="dashboard-preview">
                        <div className="dashboard-header">Vista del Dashboard</div>

                        <div className="dashboard-list">
                            <div className="dashboard-row">
                                <span className="dashboard-row-title">Programación I</span>
                                <div className="dashboard-status">
                                    <span className="status-dot dot-warning"></span>
                                    Cursando
                                </div>
                            </div>
                            <div className="dashboard-row">
                                <span className="dashboard-row-title">Base de Datos I</span>
                                <div className="dashboard-status">
                                    <span className="status-dot dot-danger"></span>
                                    Debe rendir
                                </div>
                            </div>
                            <div className="dashboard-row">
                                <span className="dashboard-row-title">Matemática I</span>
                                <div className="dashboard-status">
                                    <span className="status-dot dot-success"></span>
                                    Aprobada
                                </div>
                            </div>
                            <div className="dashboard-row">
                                <span className="dashboard-row-title">Sistemas Operativos</span>
                                <div className="dashboard-status">
                                    <span className="status-dot dot-muted"></span>
                                    No cursada
                                </div>
                            </div>
                        </div>

                        <div className="suggestion-header">Grupos sugeridos para vos</div>
                        <div className="suggestion-card">
                            <div className="suggestion-icon">P1</div>
                            <div className="suggestion-info">
                                <span className="suggestion-title">Final Prog I — Jueves 18hs</span>
                                <span className="suggestion-meta">4 integrantes · Virtual</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default HowItWorksSection;
