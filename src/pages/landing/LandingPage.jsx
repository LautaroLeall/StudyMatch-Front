import useAuth from "../../hooks/useAuth";

import HeaderLanding from "../../components/sections/HeaderLanding";
import HeroSection from "../../components/sections/HeroSection";
import HowItWorksSection from "../../components/sections/HowItWorksSection";
import FeaturesSection from "../../components/sections/FeaturesSection";

import Footer from "../../layouts/Footer";
import "../../styles/LandingPage.css";

function PageLanding() {
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
            <Footer />
        </div>
    );
}

export default PageLanding;