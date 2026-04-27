// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
    Users,
    BookOpen,
    MessageSquare,
} from "lucide-react";
import '../../styles/FeaturesSection.css';

const features = [
    {
        icon: Users,
        title: "Matching Inteligente",
        description:
            "Conectate con estudiantes de tu misma carrera, año y materias pendientes automáticamente. Optimizá tu tiempo encontrando el grupo ideal.",
    },
    {
        icon: BookOpen,
        title: "Grupos de Estudio",
        description:
            "Creá o unite a grupos organizados para estudiar materias específicas y prepararte mejor. Colaboración académica al siguiente nivel.",
    },
    {
        icon: MessageSquare,
        title: "Chat Integrado",
        description:
            "Comunicate en tiempo real con tu grupo para coordinar horarios, resolver dudas y compartir material en una interfaz limpia y rápida.",
    },
];

function FeaturesSection() {
    return (
        <section
            id="features"
            className="features-section relative py-25 px-5"
        >
            <div className="features-bg-grid absolute" />

            <div className="features-container relative mx-auto">

                <div className="features-header text-center mb-15">
                    <span className="features-badge inline-block mb-4">
                        Características
                    </span>
                    <h3 className="features-title">
                        ¿Cómo funciona StudyMatch?
                    </h3>
                    <p className="features-description p-3 mt-6 mx-auto">
                        Una plataforma pensada exclusivamente para potenciar el estudio colaborativo y ayudarte a alcanzar tus metas académicas.
                    </p>
                </div>

                <div className="features-grid grid gap-8 px-3">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                    ease: "easeOut"
                                }}
                                className="feature-card relative p-8"
                            >

                                <div className="feature-content relative">
                                    <div className="feature-icon-wrapper flex items-center justify-center mb-8">
                                        <Icon
                                            className="feature-icon"
                                            size={32}
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    <h4 className="feature-title mt-0 mb-4">
                                        {feature.title}
                                    </h4>
                                    <p className="feature-text m-0">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}

export default FeaturesSection;