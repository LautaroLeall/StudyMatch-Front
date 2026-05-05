import HeaderLanding from "../../components/sections/HeaderLanding";
import HeroSection from "../../components/sections/HeroSection";
import HowItWorksSection from "../../components/sections/HowItWorksSection";
import FeaturesSection from "../../components/sections/FeaturesSection";
import CTASection from "../../components/sections/CTASection";

import Footer from "../../layouts/Footer";

import "../../styles/LandingPage.css";

function PageLanding() {
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