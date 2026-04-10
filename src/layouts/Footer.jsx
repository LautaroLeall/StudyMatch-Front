import { GraduationCap } from "lucide-react";
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="footer-wrapper">
            <div className="footer-container">
                <div className="footer-logo-group">
                    <GraduationCap className="footer-icon" size={20} />
                    <span className="footer-title">StudyMatch UNSTA</span>
                </div>
                <p className="footer-text">© 2026 StudyMatch — UNSTA, Campus Yerba Buena
                </p>
            </div>
        </footer>
    );
}

export default Footer;