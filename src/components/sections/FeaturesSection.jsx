// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
    Users,
    BookOpen,
    MessageSquare,
} from "lucide-react";

const features = [
    {
        icon: Users,
        title: "Matching Inteligente",
        description:
            "Conectate con estudiantes de tu misma carrera, año y materias pendientes automáticamente.",
    },
    {
        icon: BookOpen,
        title: "Grupos de Estudio",
        description:
            "Creá o unite a grupos organizados para estudiar materias específicas y prepararte mejor.",
    },
    {
        icon: MessageSquare,
        title: "Chat Integrado",
        description:
            "Comunicate en tiempo real con tu grupo para coordinar horarios, resolver dudas y compartir material.",
    },
];

function FeaturesSection() {
    return (
        <section
            id="features"
            className="py-24 px-6 bg-slate-50"
        >
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <h3 className="text-4xl font-bold text-slate-900">
                        ¿Cómo funciona StudyMatch?
                    </h3>

                    <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
                        Una plataforma pensada para potenciar el estudio colaborativo
                        entre estudiantes universitarios.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.2,
                                }}
                                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border"
                            >
                                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                    <Icon
                                        className="text-[#1D4BA0]"
                                        size={28}
                                    />
                                </div>

                                <h4 className="text-xl font-bold text-slate-900 mb-4">
                                    {feature.title}
                                </h4>

                                <p className="text-slate-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}

export default FeaturesSection;