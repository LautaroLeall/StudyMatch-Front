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
        <header className={`header-wrapper fixed py-5 px-0 ${isScrolled ? 'scrolled' : ''}`}>

            <div className="header-container relative flex items-center justify-between my-0 py-0 mx-auto px-8">
                <a href="/" className="header-logo-group flex items-center gap-3" onClick={handleLogoClick}>
                    <div className="header-logo-icon-bg flex items-center justify-center">
                        <GraduationCap className="header-logo-lucide" size={22} />
                    </div>
                    <div>
                        <h1 className="header-logo-title m-0">
                            StudyMatch
                        </h1>
                        <span className="header-logo-subtitle block mt-0.5">
                            UNSTA
                        </span>
                    </div>
                </a>

                {/* Navegación desktop >= 1024px (lg) */}
                <nav className="header-nav absolute items-center py-2 px-8 gap-12">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="header-nav-link relative py-1 px-0">
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Botones de acción desktop >= 1024px */}
                <div className="header-actions items-center gap-6">
                    <Link to="/login">
                        <button className="header-login-btn py-3 px-7">
                            Ingresar
                        </button>
                    </Link>
                    <Link to="/register" className="header-register-wrapper">
                        <Button className="header-register-btn py-3 px-7">
                            Registrarse
                        </Button>
                    </Link>
                </div>

                {/* Botón hamburguesa móvil < 1024px */}
                <button
                    className="header-mobile-toggle items-center justify-center"
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
                        className="header-mobile-menu fixed py-8 px-5"
                    >
                        <nav className="header-mobile-nav flex flex-col items-center text-center gap-2">
                            {navLinks.map((link) => (
                                <motion.div key={link.name} variants={itemVariants}>
                                    <a
                                        href={link.href}
                                        className="header-mobile-link block py-2 px-5"
                                        onClick={(e) => handleNavItemClick(e, link.href)}
                                    >
                                        {link.name}
                                    </a>
                                </motion.div>
                            ))}

                            <motion.div variants={itemVariants} className="header-mobile-actions flex flex-col items-center gap-5 mt-5 pt-5">
                                <Link to="/login" className="w-full">
                                    <button className="header-mobile-action-link py-3 px-7 w-full">
                                        Ingresar
                                    </button>
                                </Link>
                                <Link to="/register" className="w-full">
                                    <Button className="header-register-btn py-3 px-7 w-full">
                                        Registrarse
                                    </Button>
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