"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollTo = (e, href) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            // Use Lenis instance if available, or fallback to native smooth scroll
            window.scrollTo({
                top: target.offsetTop,
                behavior: "smooth"
            });
        }
        setMobileMenuOpen(false); // Close mobile menu after navigation
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass py-4" : "py-6"
                    }`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-orbitron font-bold text-brand-white tracking-widest group">
                        KHUSH<span className="text-brand-cyan group-hover:text-brand-purple transition-colors duration-300">AL</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                onClick={(e) => handleScrollTo(e, link.href)}
                                className="relative text-brand-white font-poppins text-sm uppercase tracking-wider hover:text-brand-cyan transition-colors cursor-pointer"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-cyan transition-all duration-300 hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    {/* Social Icons (Desktop) */}
                    <div className="hidden md:flex space-x-4">
                        <a href="https://github.com/KhushalPatel18" target="_blank" className="text-brand-white hover:text-brand-cyan transition-colors text-xl">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/khushal-patel-b2040b350/" target="_blank" className="text-brand-white hover:text-brand-cyan transition-colors text-xl">
                            <FaLinkedin />
                        </a>
                        <a href="https://x.com/_Khushal_1805" target="_blank" className="text-brand-white hover:text-brand-cyan transition-colors text-xl">
                            <FaTwitter />
                        </a>
                    </div>

                    {/* Mobile Menu Button (Hamburger) */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-brand-white text-2xl z-50 relative"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? "✕" : "☰"}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: mobileMenuOpen ? 0 : "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed top-0 right-0 h-screen w-full md:hidden z-40 glass backdrop-blur-xl"
            >
                <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            onClick={(e) => handleScrollTo(e, link.href)}
                            className="text-brand-white font-orbitron text-2xl uppercase tracking-wider hover:text-brand-cyan transition-colors cursor-pointer"
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* Social Icons (Mobile) */}
                    <div className="flex space-x-6 pt-8">
                        <a href="https://github.com/KhushalPatel18" target="_blank" className="text-brand-white hover:text-brand-cyan transition-colors text-3xl">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/khushal-patel-b2040b350/" target="_blank" className="text-brand-white hover:text-brand-cyan transition-colors text-3xl">
                            <FaLinkedin />
                        </a>
                        <a href="https://x.com/_Khushal_1805" target="_blank" className="text-brand-white hover:text-brand-cyan transition-colors text-3xl">
                            <FaTwitter />
                        </a>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Navbar;
