// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../ui/Button";
import '../../styles/HeroSection.css';

function HeroSection() {
    return (
        <section className="hero-section relative pt-25 px-5">
            <div className="hero-bg-overlay absolute" />

            <div className="hero-container relative grid items-center gap-10 mx-auto">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="hero-content flex flex-col text-center gap-8 mx-auto"
                >
                    <div className="hero-badge inline-flex items-center self-center gap-2 py-2 px-4">
                        <span className="hero-badge-dot" />
                        Plataforma UNSTA
                    </div>

                    <h2 className="hero-title m-0">
                        Encontrá tu{" "}
                        <span className="hero-title-highlight">
                            grupo de estudio
                        </span>{" "}
                        ideal
                    </h2>

                    <p className="hero-description mx-auto">
                        Conectá con estudiantes de tu misma carrera, organizá tu
                        tiempo y prepárate mejor para superar cada materia.
                    </p>

                    <div className="hero-actions flex flex-col justify-center gap-5 pt-2">
                        <Link to="/register" className="w-full sm:w-auto">
                            <Button className="hero-btn-primary flex items-center justify-center gap-2 py-4 px-8">
                                Comenzar Ahora
                                <ArrowRight className="hero-btn-icon" />
                            </Button>
                        </Link>

                        <a href="#features" className="w-full sm:w-auto">
                            <button className="hero-btn-secondary py-4 px-8">
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
                    className="hero-visual-wrapper relative mx-auto"
                >
                    <div className="hero-visual-card relative p-8">
                        <div className="hero-visual-header mb-8">
                            <h3 className="hero-visual-title flex items-center gap-2 m-0 p-0">
                                <BookOpen className="hero-subject-icon-main" />
                                Materias Destacadas
                            </h3>
                        </div>

                        <div className="hero-visual-grid grid gap-4">
                            {[
                                { title: "Programación I", students: 24, active: true },
                                { title: "Matemática I", students: 18, active: true },
                                { title: "Base de Datos", students: 12, active: false },
                                { title: "Redes", students: 8, active: true }
                            ].map((materia, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -2 }}
                                    className="hero-subject-item flex flex-col gap-3 p-4"
                                >
                                    <div className="hero-subject-header flex items-start justify-between">
                                        <div className={materia.active ? 'hero-subject-icon-active' : 'hero-subject-icon-inactive'}>
                                            <Users size={16} />
                                        </div>
                                        <span className="hero-subject-count py-1 px-2">
                                            {materia.students}
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="hero-subject-title m-0">
                                            {materia.title}
                                        </h4>
                                        <p className="hero-subject-status my-1 mb-0">
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
                        <div className="hero-floating-icon-wrapper flex items-center justify-center">
                            <Rocket className="hero-floating-icon" />
                        </div>
                        <div className="hero-floating-text-group flex flex-col">
                            <p className="hero-floating-label m-0">
                                Nuevo grupo en
                            </p>
                            <p className="hero-floating-value m-0">
                                Ingeniería de Software
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default HeroSection;