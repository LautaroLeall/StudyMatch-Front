// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../ui/Button";

function HeroSection() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

                {/* Left */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                >
                    <span className="inline-block bg-blue-100 text-[#1D4BA0] px-4 py-2 rounded-full text-sm font-semibold">
                        Plataforma académica UNSTA
                    </span>

                    <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
                        Encontrá tu{" "}
                        <span className="text-[#1D4BA0]">
                            grupo de estudio ideal
                        </span>
                    </h2>

                    <p className="text-lg text-slate-600 max-w-xl">
                        Conectá con estudiantes de tu misma carrera,
                        organizá grupos de estudio y preparate mejor
                        para rendir tus materias.
                    </p>

                    <div className="flex gap-4 flex-wrap">
                        <Link to="/register">
                            <Button>
                                Comenzar Ahora
                            </Button>
                        </Link>

                        <a href="#features">
                            <button className="px-6 py-3 border rounded-lg font-semibold hover:bg-slate-50 transition">
                                Saber Más
                            </button>
                        </a>
                    </div>
                </motion.div>

                {/* Right */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-3xl shadow-xl border p-8"
                >
                    <div className="grid grid-cols-2 gap-4">

                        {[
                            "Programación I",
                            "Matemática I",
                            "Base de Datos",
                            "Redes"
                        ].map((materia, index) => (
                            <div
                                key={index}
                                className="p-4 border rounded-xl bg-slate-50"
                            >
                                <h4 className="font-semibold">
                                    {materia}
                                </h4>

                                <p className="text-sm text-slate-500 mt-1">
                                    Grupo Disponible
                                </p>
                            </div>
                        ))}

                    </div>
                </motion.div>

            </div>
        </section>
    );
}

export default HeroSection;