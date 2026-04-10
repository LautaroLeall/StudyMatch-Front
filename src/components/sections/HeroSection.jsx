// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../ui/Button";
import '../../styles/HeroSection.css';

function HeroSection() {
    return (
        <section className="hero-section">
            {/* Soft Background Decoration */}
            <div className="hero-bg-overlay"></div>

            <div className="hero-container">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="hero-content"
                >
                    <div className="hero-badge">
                        <span className="hero-badge-dot"></span>
                        Plataforma UNSTA
                    </div>

                    <h2 className="hero-title">
                        Encontrá tu{" "}
                        <span className="hero-title-highlight">
                            grupo de estudio
                        </span>{" "}
                        ideal
                    </h2>

                    <p className="hero-description">
                        Conectá con estudiantes de tu misma carrera, organizá tu
                        tiempo y prepárate mejor para superar cada materia.
                    </p>

                    <div className="hero-actions">
                        <Link to="/register" className="w-full sm:w-auto">
                            <Button className="hero-btn-primary">
                                Comenzar Ahora
                                <ArrowRight className="hero-btn-icon" />
                            </Button>
                        </Link>

                        <a href="#features" className="w-full sm:w-auto">
                            <button className="hero-btn-secondary">
                                Saber Más
                            </button>
                        </a>
                    </div>
                </motion.div>

                {/* Right Visual Area */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="hero-visual-wrapper"
                >
                    <div className="hero-visual-card">
                        <div className="hero-visual-header">
                            <h3 className="hero-visual-title">
                                <BookOpen className="hero-subject-icon-main" />
                                Materias Destacadas
                            </h3>
                        </div>

                        <div className="hero-visual-grid">
                            {[
                                { title: "Programación I", students: 24, active: true },
                                { title: "Matemática I", students: 18, active: true },
                                { title: "Base de Datos", students: 12, active: false },
                                { title: "Redes", students: 8, active: true }
                            ].map((materia, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -2 }}
                                    className="hero-subject-item"
                                >
                                    <div className="hero-subject-header">
                                        <div className={materia.active ? 'hero-subject-icon-active' : 'hero-subject-icon-inactive'}>
                                            <Users size={16} />
                                        </div>
                                        <span className="hero-subject-count">{materia.students}</span>
                                    </div>
                                    <div>
                                        <h4 className="hero-subject-title">
                                            {materia.title}
                                        </h4>
                                        <p className="hero-subject-status">
                                            {materia.active ? 'Buscando grupo' : 'Cupo lleno'}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Floating decoration card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="hero-floating-card"
                    >
                        <div className="hero-floating-icon-wrapper">
                            <Rocket className="hero-floating-icon" />
                        </div>
                        <div className="hero-floating-text-group">
                            <p className="hero-floating-label">Nuevo grupo en</p>
                            <p className="hero-floating-value">Ingeniería de Software</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default HeroSection;