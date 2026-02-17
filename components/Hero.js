"use client";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";
import { motion } from "framer-motion";
import { Suspense } from "react";

const Hero3D = () => {
    return (
        <Canvas camera={{ position: [0, 0, 3] }}>
            <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 5, 2]} intensity={1} color="#00f3ff" />
                <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                    <Sphere args={[1, 100, 200]} scale={1.2}>
                        <MeshDistortMaterial
                            color="#220033"
                            attach="material"
                            distort={0.5}
                            speed={2}
                            roughness={0}
                            metalness={0.8}
                        />
                    </Sphere>
                </Float>
            </Suspense>
        </Canvas>
    );
};

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden z-10 pt-20 md:pt-0">

            {/* 3D Element Layer - Absolute positioned to be behind/interact with text */}
            <div className="absolute inset-0 z-[-1] opacity-60">
                <Hero3D />
            </div>

            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-screen py-12 md:py-0">
                {/* Text Content */}
                <div className="text-left z-10">
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-brand-cyan font-space-grotesk text-xl font-bold tracking-widest mb-4"
                    >
                        HI, I'M KHUSHAL PATEL
                    </motion.h4>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-5xl md:text-7xl font-orbitron font-extrabold text-brand-white leading-tight mb-6"
                    >
                        BUILDING <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple neon-text">
                            THE FUTURE
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-gray-300 font-poppins text-lg max-w-lg mb-8"
                    >
                        A Full-Stack Developer specializing in 3D Web Experiences, Modern UI/UX, and Scalable Applications.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-brand-cyan text-brand-black font-bold font-orbitron rounded-sm hover:scale-105 transition-transform shadow-[0_0_15px_rgba(0,243,255,0.7)] text-center"
                        >
                            VIEW WORK
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 border border-brand-white/20 text-brand-white font-bold font-orbitron rounded-sm hover:bg-brand-white/10 transition-all text-center"
                        >
                            CONTACT ME
                        </a>
                        <a
                            href="/Khushal resume.pdf"
                            target="_blank"
                            className="px-8 py-3 border border-brand-cyan text-brand-cyan font-bold font-orbitron rounded-sm hover:bg-brand-cyan hover:text-brand-black transition-all text-center"
                        >
                            RESUME
                        </a>
                    </motion.div>
                </div>

                {/* Visual Content - Profile Picture with 3D Effect */}
                <div className="relative h-full w-full flex items-center justify-center mt-12 md:mt-0">
                    <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
                        {/* Glowing Ring - Reduced to single main ring */}
                        <div className="absolute inset-0 rounded-full border-2 border-brand-cyan/40 animate-[spin_10s_linear_infinite]"></div>

                        {/* Image Container */}
                        <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-brand-glass shadow-[0_0_30px_rgba(0,243,255,0.3)] group">
                            <div className="relative w-full h-full">
                                <img
                                    src="/myDP.jpeg"
                                    alt="Khushal Patel"
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
// Force re-render for hydration fix
