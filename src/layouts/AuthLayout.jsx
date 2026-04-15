import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import '../styles/AuthLayout.css';

function AuthLayout({ children }) {
    return (
        <main className="auth-layout-main">

            <div className="auth-bg-grid-1" />
            <div className="auth-bg-grid-2" />

            <section className="auth-card">
                <div className="auth-logo-wrapper">
                    <Link to="/" className="auth-logo-link">
                        <div className="auth-logo-icon">
                            <GraduationCap className="auth-logo-lucide" size={28} />
                        </div>
                        <div className="auth-logo-text">
                            <h1 className="auth-logo-title">StudyMatch</h1>
                            <span className="auth-logo-subtitle">UNSTA</span>
                        </div>
                    </Link>
                </div>

                {children}
            </section>
        </main>
    );
}

export default AuthLayout;