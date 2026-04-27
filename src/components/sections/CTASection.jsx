import { GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import '../../styles/CTASection.css';

function CTASection() {
    return (
        <section className="footer-cta flex justify-center text-center py-25 px-5">
            <div className="footer-cta-content flex flex-col items-center gap-5">
                <div className="footer-cta-icon-wrapper mb-2">
                    <GraduationCap className="footer-cta-icon" size={48} />
                </div>

                <h3 className="footer-cta-title m-0">
                    ¿Listo para estudiar mejor?
                </h3>

                <p className="footer-cta-subtitle m-0">
                    Uníte a la plataforma de matching académico de UNSTA. Sin costo, sin complicaciones.
                </p>

                <Link to="/register">
                    <button className="footer-cta-btn flex items-center gap-2 mt-3">
                        Crear mi cuenta gratis
                        <ArrowRight size={20} />
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default CTASection;