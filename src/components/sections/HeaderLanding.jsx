import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../ui/Button";
import '../../styles/HeaderLanding.css';

function HeaderLanding() {
    return (
        <header className="header-wrapper">
            <div className="header-container">

                {/* Logo */}
                <Link to="/" className="header-logo-group">
                    <div className="header-logo-icon-bg">
                        <GraduationCap
                            className="header-logo-lucide"
                            size={22}
                        />
                    </div>

                    <div>
                        <h1 className="header-logo-title">
                            StudyMatch
                        </h1>

                        <span className="header-logo-subtitle">
                            UNSTA
                        </span>
                    </div>
                </Link>

                {/* Actions */}
                <div className="header-actions">
                    <Link to="/login">
                        <button className="header-login-btn">
                            Ingresar
                        </button>
                    </Link>

                    <Link to="/register" className="header-register-wrapper">
                        <Button className="header-register-btn">
                            Registrarse
                        </Button>
                    </Link>
                </div>

            </div>
        </header>
    );
}

export default HeaderLanding;