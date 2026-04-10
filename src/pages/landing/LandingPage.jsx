import useAuth from "../../hooks/useAuth";

import HeaderLanding from "../../components/sections/HeaderLanding";
import HeroSection from "../../components/sections/HeroSection";
import FeaturesSection from "../../components/sections/FeaturesSection";

import Footer from "../../layouts/Footer";

function PageLanding() {
    const { user } = useAuth();

    return (
        <div className="min-h-screen bg-white">
            {user && <p>Bienvenido {user.name}</p>}
            <HeaderLanding />
            <HeroSection />
            <FeaturesSection />
            <Footer />
        </div>
    );
}

export default PageLanding;