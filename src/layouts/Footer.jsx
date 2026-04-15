
import { GraduationCap } from "lucide-react";
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="footer-bottom">
            <div className="footer-bottom-container">

                <div className="footer-bottom-left">
                    <div className="footer-bottom-logo-icon">
                        <GraduationCap size={16} />
                    </div>
                    <span className="footer-bottom-brand">StudyMatch UNSTA</span>
                </div>

                <div className="footer-bottom-center">
                    <p className="footer-bottom-info">
                        Universidad del Norte Santo Tomás de Aquino — Campus Yerba Buena
                    </p>
                </div>

                <div className="footer-bottom-right">
                    <p className="footer-bottom-copy">
                        Proyecto Final · 2026
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;