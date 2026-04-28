
import { GraduationCap } from "lucide-react";
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="footer-bottom py-10 px-5">
            <div className="footer-bottom-container flex flex-col items-center text-center my-0 mx-auto gap-8">

                <div className="footer-bottom-left flex items-center gap-3">
                    <div className="footer-bottom-logo-icon flex items-center justify-center">
                        <GraduationCap size={18} />
                    </div>
                    <span className="footer-bottom-brand">
                        StudyMatch UNSTA
                    </span>
                </div>

                <div className="footer-bottom-center">
                    <p className="footer-bottom-info m-0">
                        UNSTA — Campus Yerba Buena
                    </p>
                </div>

                <div className="footer-bottom-right">
                    <p className="footer-bottom-copy m-0">
                        Proyecto Final · 2026
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;