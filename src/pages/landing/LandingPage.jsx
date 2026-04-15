// Hook para acceder al usuario autenticado desde el contexto global
import useAuth from "../../hooks/useAuth";

import HeaderLanding from "../../components/sections/HeaderLanding";
import HeroSection from "../../components/sections/HeroSection";
import HowItWorksSection from "../../components/sections/HowItWorksSection";
import FeaturesSection from "../../components/sections/FeaturesSection";
import CTASection from "../../components/sections/CTASection";

import Footer from "../../layouts/Footer";

import "../../styles/LandingPage.css";

function PageLanding() {
    // Extrae el objeto 'user' del contexto de autenticación global.
    // Si el usuario está logueado (user !== null), se muestra un mensaje de bienvenida.
    // Si no está logueado (user === null), el mensaje no se renderiza (&&  short-circuit).
    const { user } = useAuth();

    return (
        <div className="landing-page-wrapper">
            {user && (
                <p className="landing-welcome-user">
                    Bienvenido {user.name}
                </p>
            )}
            <HeaderLanding />
            <HeroSection />
            <FeaturesSection />
            <HowItWorksSection />
            <CTASection />
            <Footer />
        </div>
    );
}

export default PageLanding;