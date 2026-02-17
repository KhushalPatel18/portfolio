"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        title: "Phantom Arena",
        category: "Gaming Tournament Platform",
        image: "/project1.png",
        tech: ["Next.js", "Node.js", "MongoDB", "Socket.io"],
        links: { github: "https://github.com/KhushalPatel18/Phantom-Arena", live: "https://phantom-arena.vercel.app/" }
    },
    {
        title: "DoubtIQ - AI chatbot",
        category: "Doubt Solving Platform",
        image: "/project2.png",
        tech: ["React", "Express.js", "MongoDB", "Tailwind CSS"],
        links: { github: "https://github.com/KhushalPatel18/DoubtIQ", live: "https://doubt-iq.vercel.app/" }
    },
    {
        title: "InternNexus",
        category: "Internship suggestion Platform",
        image: "/project3.png",
        tech: ["React", "Python", "Supabase", "Tailwind CSS"],
        links: { github: "https://github.com/Sneh0510/SIH", live: "https://sih-lyart.vercel.app/" }
    }
];

const ProjectCard = ({ project, index }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="relative h-96 w-full rounded-xl bg-brand-navy border border-brand-glass group perspective-1000"
        >
            <div
                style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
                className="absolute inset-4 rounded-lg bg-brand-navy border border-brand-glass overflow-hidden flex flex-col shadow-2xl"
            >
                {/* Image Section */}
                <div className="relative h-48 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy to-transparent z-10 opacity-60"></div>
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col justify-end relative z-20">
                    <h4 className="text-brand-cyan font-space-grotesk text-sm tracking-wider mb-2 uppercase">{project.category}</h4>
                    <h3 className="text-2xl font-orbitron font-bold text-brand-white mb-4 group-hover:text-brand-cyan transition-colors">{project.title}</h3>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((t, i) => (
                            <span key={i} className="px-2 py-1 text-[10px] font-poppins bg-brand-glass rounded-full text-gray-300 border border-brand-glass/30">
                                {t}
                            </span>
                        ))}
                    </div>

                    <div className="flex space-x-4">
                        <a href={project.links.github} className="text-gray-400 hover:text-brand-white transition-colors text-xl"><FaGithub /></a>
                        <a href={project.links.live} className="text-gray-400 hover:text-brand-cyan transition-colors text-xl"><FaExternalLinkAlt /></a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-orbitron font-bold text-brand-white mb-16 text-center"
                >
                    FEATURED <span className="text-brand-cyan">PROJECTS</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
