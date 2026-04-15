import { GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import '../../styles/CTASection.css';

function CTASection() {
    return (
        <section className="footer-cta">
            <div className="footer-cta-content">
                <div className="footer-cta-icon-wrapper">
                    <GraduationCap className="footer-cta-icon" size={48} />
                </div>
                <h3 className="footer-cta-title">¿Listo para estudiar mejor?</h3>
                <p className="footer-cta-subtitle">
                    Uníte a la plataforma de matching académico de UNSTA. Sin costo, sin complicaciones.
                </p>
                <Link to="/register">
                    <button className="footer-cta-btn">
                        Crear mi cuenta gratis
                        <ArrowRight size={20} />
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default CTASection;
