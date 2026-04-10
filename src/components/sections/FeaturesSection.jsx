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
            className="features-section"
        >
            {/* Soft grid background */}
            <div className="features-bg-grid"></div>

            <div className="features-container">

                {/* Header */}
                <div className="features-header">
                    <span className="features-badge">
                        Características
                    </span>
                    <h3 className="features-title">
                        ¿Cómo funciona StudyMatch?
                    </h3>

                    <p className="features-description">
                        Una plataforma pensada exclusivamente para potenciar el estudio colaborativo y ayudarte a alcanzar tus metas académicas.
                    </p>
                </div>

                {/* Cards */}
                <div className="features-grid">
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
                                className="feature-card"
                            >
                                {/* Hover background glow */}
                                <div className="feature-card-glow"></div>

                                <div className="feature-content">
                                    <div className="feature-icon-wrapper">
                                        <Icon
                                            className="feature-icon"
                                            size={32}
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    <h4 className="feature-title">
                                        {feature.title}
                                    </h4>

                                    <p className="feature-text">
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