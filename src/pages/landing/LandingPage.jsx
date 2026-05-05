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

    return (
        <div className="landing-page-wrapper">
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