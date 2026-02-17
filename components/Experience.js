"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const experiences = [
    {
        year: "2025",
        title: "Smart India Hackathon (SIH) 2025",
        company: "Participant",
        description: "Worked on internship suggestion goverment portal. Collaborated in a team to build impactful software using modern tech stacks."
    },
    {
        year: "2024 - 2025",
        title: "Personal Projects & Open Source",
        company: "Independent Developer",
        description: "Built several full-stack applications like Phantom Arena and DoubtIQ, focusing on performance, UI/UX, and scalability."
    },
    {
        year: "2023 - 2024",
        title: "Full Stack Development Journey",
        company: "Self-Driven Learning",
        description: "Mastered modern web technologies including React, Next.js, Node.js, and Three.js through hands-on project building."
    }
];

const ExperienceCard = ({ experience, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`flex flex-col md:flex-row items-center mb-16 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
        >
            <div className="w-full md:w-1/2 p-6 md:p-12">
                <div className={`text-center ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                    <span className="text-brand-cyan font-space-grotesk text-xl font-bold">{experience.year}</span>
                    <h3 className="text-3xl font-orbitron font-bold text-brand-white mt-2 mb-2">{experience.title}</h3>
                    <h4 className="text-brand-purple font-poppins text-lg mb-4">{experience.company}</h4>
                    <p className="text-gray-400 font-poppins leading-relaxed">{experience.description}</p>
                </div>
            </div>

            {/* Timeline Dot */}
            <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-brand-navy border-2 border-brand-cyan shadow-[0_0_15px_rgba(0,243,255,0.5)] z-10">
                <div className="w-3 h-3 bg-brand-white rounded-full"></div>
            </div>

            <div className="w-full md:w-1/2"></div>
        </motion.div>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Scale the line based on scroll
    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section id="experience" className="py-20 relative">
            <div className="container mx-auto px-6 relative" ref={ref}>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-orbitron font-bold text-brand-white mb-20 text-center"
                >
                    WORK <span className="text-brand-purple">EXPERIENCE</span>
                </motion.h2>

                {/* Vertical Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-brand-glass rounded-full overflow-hidden">
                    <motion.div
                        style={{ scaleY, transformOrigin: "top" }}
                        className="w-full h-full bg-gradient-to-b from-brand-cyan via-brand-purple to-brand-blue"
                    ></motion.div>
                </div>

                <div className="relative z-10">
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} experience={exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
