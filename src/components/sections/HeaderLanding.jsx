// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import '../../styles/HeaderLanding.css';

function HeaderLanding() {
    // Estado booleano: controla si el menú móvil está abierto (true) o cerrado (false)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Estado booleano: controla si el usuario hizo scroll más de 20px
    // Cuando es true, se agrega la clase 'scrolled' que activa el Glassmorphism
    const [isScrolled, setIsScrolled] = useState(false);

    // useEffect: se ejecuta UNA SOLA VEZ al montar el componente (array vacío [])
    // Registra un event listener para detectar el scroll de la página
    useEffect(() => {
        const handleScroll = () => {
            // Si el scroll vertical supera 20px, activa el estado 'scrolled'
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup: cuando el componente se desmonta, elimina el listener
        // Evita memory leaks (fugas de memoria)
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: "Características", href: "#features" },
        { name: "Funcionamiento", href: "#how-it-works" },
    ];

    // Maneja el click en los links del menú móvil.
    // El delay de 100ms es CRÍTICO: permite que el navegador procese
    // el scroll al ancla (#id) ANTES de que el menú se cierre.
    // Sin este delay, la animación de cierre del menú cancela el scroll.
    const handleNavItemClick = (e, href) => {
        if (href.startsWith('#')) {
            setTimeout(() => {
                setIsMenuOpen(false);
            }, 100);
        } else {
            setIsMenuOpen(false);
        }
    };

    // Al hacer click en el logo:
    // 1. Previene la navegación default del <a href="/">
    // 2. Usa scroll nativo con comportamiento suave para ir al tope
    // 3. Cierra el menú móvil si estaba abierto
    const handleLogoClick = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    // Variantes de animación para el contenedor principal del menú móvil.
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

    // Variantes de animación para cada item individual del menú.
    // Se aplican a los <motion.div> hijos del contenedor del menú.
    const itemVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <header className={`header-wrapper ${isScrolled ? 'scrolled' : ''}`}>

            <div className="header-container">
                <a href="/" className="header-logo-group" onClick={handleLogoClick}>
                    <div className="header-logo-icon-bg">
                        <GraduationCap className="header-logo-lucide" size={22} />
                    </div>
                    <div>
                        <h1 className="header-logo-title">StudyMatch</h1>
                        <span className="header-logo-subtitle">UNSTA</span>
                    </div>
                </a>

                {/* Navegación desktop - Solo visible en pantallas >= 1024px (lg) */}
                <nav className="header-nav">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="header-nav-link">
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Botones de acción desktop - Solo visibles en pantallas >= 1024px */}
                <div className="header-actions">
                    <Link to="/login">
                        <button className="header-login-btn">Ingresar</button>
                    </Link>
                    <Link to="/register" className="header-register-wrapper">
                        <Button className="header-register-btn">Registrarse</Button>
                    </Link>
                </div>

                {/* Botón hamburguesa móvil - Solo visible en pantallas < 1024px */}
                <button
                    className="header-mobile-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Menú móvil - Panel desplegable animado */}
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