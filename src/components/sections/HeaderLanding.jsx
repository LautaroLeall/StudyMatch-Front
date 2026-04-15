// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../ui/Button";
import '../../styles/HeaderLanding.css';

function HeaderLanding() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: "Características", href: "#features" },
        { name: "Funcionamiento", href: "#how-it-works" },
    ];

    const handleNavItemClick = (e, href) => {
        // If it's an anchor link, allow some time before closing the menu
        if (href.startsWith('#')) {
            setTimeout(() => {
                setIsMenuOpen(false);
            }, 100);
        } else {
            setIsMenuOpen(false);
        }
    };

    const handleLogoClick = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    // Framer motion variants for staggered entrance
    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        },
        exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <header className={`header-wrapper ${isScrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                {/* Logo */}
                <a href="/" className="header-logo-group" onClick={handleLogoClick}>
                    <div className="header-logo-icon-bg">
                        <GraduationCap className="header-logo-lucide" size={22} />
                    </div>
                    <div>
                        <h1 className="header-logo-title">StudyMatch</h1>
                        <span className="header-logo-subtitle">UNSTA</span>
                    </div>
                </a>

                {/* Desktop Navigation Links */}
                <nav className="header-nav">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="header-nav-link">
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Actions (Desktop) */}
                <div className="header-actions">
                    <Link to="/login">
                        <button className="header-login-btn">Ingresar</button>
                    </Link>
                    <Link to="/register" className="header-register-wrapper">
                        <Button className="header-register-btn">Registrarse</Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="header-mobile-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="header-mobile-menu"
                    >
                        <nav className="header-mobile-nav">
                            {navLinks.map((link) => (
                                <motion.div key={link.name} variants={itemVariants}>
                                    <a
                                        href={link.href}
                                        className="header-mobile-link"
                                        onClick={(e) => handleNavItemClick(e, link.href)}
                                    >
                                        {link.name}
                                    </a>
                                </motion.div>
                            ))}
                            <motion.div variants={itemVariants} className="header-mobile-actions">
                                <Link to="/login" onClick={handleNavItemClick} className="header-mobile-action-link">
                                    Ingresar
                                </Link>
                                <Link to="/register" onClick={handleNavItemClick} className="w-full">
                                    <Button className="w-full">Registrarse</Button>
                                </Link>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

export default HeaderLanding;