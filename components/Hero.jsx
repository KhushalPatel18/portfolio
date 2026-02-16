"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 pt-20 gap-10 overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full blur-[100px] opacity-30 -z-10 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full blur-[100px] opacity-30 -z-10 animate-pulse delay-700"></div>

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 space-y-8 z-10"
            >
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-block px-4 py-1.5 rounded-full bg-orange-50 text-orange-600 font-medium tracking-wide text-sm border border-orange-100"
                >
                    👋 Hi, I am Khushal
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black text-charcoal-900 tracking-tight leading-[1.1]"
                >
                    Creative <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600 animate-gradient-x">
                        Developer.
                    </span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="max-w-xl text-lg text-gray-600 leading-relaxed font-light"
                >
                    I craft accessible, pixel-perfect, and performant web experiences with a focus on details and user experience.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap gap-4"
                >
                    <a href="#projects" className="px-8 py-4 bg-charcoal-900 text-white rounded-full font-bold hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">View My Work</a>
                    <a href="/Khushal resume.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-600 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">Resume</a>
                    <a href="#contact" className="px-8 py-4 bg-white border border-gray-200 rounded-full font-bold text-gray-700 hover:border-charcoal-900 hover:bg-gray-50 transition-all shadow-sm hover:shadow-md">Contact Me</a>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 relative w-full flex justify-center md:justify-end pr-0 md:pr-10"
            >
                <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
                    <div className="absolute inset-0 bg-gradient-to-tr from-orange-400 to-blue-500 rounded-full blur-[60px] opacity-40 animate-pulse"></div>
                    <div className="absolute inset-4 bg-white rounded-full z-0"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-[8px] border-white shadow-2xl z-10 rotate-3 transition-transform hover:rotate-0 duration-500">
                        <Image
                            src="/myDP.jpeg"
                            alt="Khushal"
                            fill
                            className="object-cover scale-110"
                            priority
                        />
                    </div>

                    {/* Floating Badges */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-20"
                    >
                        <span className="text-2xl">🚀</span>
                    </motion.div>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-10 -left-8 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-20"
                    >
                        <span className="text-2xl">💻</span>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
