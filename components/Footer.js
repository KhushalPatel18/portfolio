"use client";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-brand-black border-t border-brand-glass py-12 relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-50"></div>

            <div className="container mx-auto px-6 flex flex-col items-center">

                <div className="flex space-x-8 mb-8">
                    <a href="https://github.com/KhushalPatel18" className="text-gray-400 hover:text-brand-cyan hover:shadow-[0_0_10px_#00f3ff] transition-all p-2 rounded-full"><FaGithub className="text-2xl" /></a>
                    <a href="https://www.linkedin.com/in/khushal-patel-b2040b350/" className="text-gray-400 hover:text-brand-purple hover:shadow-[0_0_10px_#bc13fe] transition-all p-2 rounded-full"><FaLinkedin className="text-2xl" /></a>
                    <a href="https://x.com/_Khushal_1805" className="text-gray-400 hover:text-brand-blue hover:shadow-[0_0_10px_#0066ff] transition-all p-2 rounded-full"><FaTwitter className="text-2xl" /></a>
                </div>

                <p className="text-brand-white font-orbitron text-sm tracking-wider mb-2">
                    © 2026 KHUSHAL PATEL. ALL RIGHTS RESERVED.
                </p>

                <p className="text-gray-500 font-poppins text-xs flex items-center gap-1">
                    BUILT WITH <FaHeart className="text-red-500" /> AND NEXT.JS
                </p>

            </div>
        </footer>
    );
};

export default Footer;
