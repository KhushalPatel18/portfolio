"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

const projects = [
    {
        title: "DoubtIQ",
        description: "An AI-powered educational platform built using the MERN stack (MongoDB, Express, React, Node.js) to provide instant answers to student queries. It leverages the Groq API for high-speed AI responses.",
        tags: ["MERN Stack", "Groq API", "AI", "Vercel"],
        color: "from-blue-500 to-indigo-600",
        github: "#", // Add GitHub link here if available
        demo: "https://doubt-iq.vercel.app/",
    },
    {
        title: "Internship Portal (SIH)",
        description: "The frontend for the Smart India Hackathon (SIH) project utilizes React.js for a responsive, mobile-first user interface and includes dynamic components for visualizing real-time data. Efficient global state management with Redux/Context API.",
        tags: ["React.js", "Redux", "REST API", "UI/UX"],
        color: "from-orange-400 to-red-500",
        github: "https://github.com/KhushalPatel18", // Placeholder to user profile as project link wasn't provided
        demo: "https://sih-lyart.vercel.app/",
    },
    {
        title: "Task Master",
        description: "A productivity application that helps users manage tasks, set goals, and track progress efficiently. Features a drag-and-drop interface and real-time updates.",
        tags: ["Next.js", "Firebase", "Tailwind CSS"],
        color: "from-green-400 to-emerald-600",
        github: "#",
        demo: "#",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 md:px-12 bg-cream-50 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-2 block">My Work</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-charcoal-900">Featured Projects</h2>
                    <p className="max-w-2xl mx-auto text-gray-600">Here are some of the projects I've worked on. Each one was a unique challenge that helped me grow as a developer.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 flex flex-col h-full"
                        >
                            <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-charcoal-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-blue-600 transition-all">{project.title}</h3>
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-4 flex-grow">{project.description}</p>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="bg-gray-50 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full border border-gray-200">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-4 pt-4 border-t border-gray-100">
                                        <a href={project.github} className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-charcoal-900 transition-colors">
                                            <Github size={18} /> Source Code
                                        </a>
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors ml-auto group-hover:translate-x-1 transition-transform">
                                            Live Demo <ArrowRight size={16} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
