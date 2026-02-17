"use client";
import { motion } from "framer-motion";
import { FaCode, FaRocket, FaMobileAlt } from "react-icons/fa";

const features = [
    {
        icon: <FaCode className="text-4xl text-brand-cyan" />,
        title: "Full-Stack Dev",
        description: "Building scalable web applications with modern technologies like Next.js, Node.js, and specialized Backend systems."
    },
    {
        icon: <FaRocket className="text-4xl text-brand-purple" />,
        title: "Performance",
        description: "Optimizing for speed and efficiency. I believe in writing clean, maintainable, and high-performance code."
    },
    {
        icon: <FaMobileAlt className="text-4xl text-brand-blue" />,
        title: "Responsive UX",
        description: "Creating seamless experiences across all devices. Mobile-first approach with premium UI interactions."
    }
];

const About = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-brand-white mb-4">
                        ABOUT <span className="text-brand-cyan">ME</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-brand-cyan to-brand-purple mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            whileHover={{ scale: 1.05, borderColor: "#00f3ff", boxShadow: "0 0 20px rgba(0, 243, 255, 0.3)" }}
                            className="glass p-8 rounded-xl border border-transparent transition-all duration-300 flex flex-col items-center text-center group"
                        >
                            <div className="mb-6 p-4 rounded-full bg-brand-glass group-hover:bg-brand-cyan/10 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-orbitron font-bold text-brand-white mb-4 group-hover:text-brand-cyan transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 font-poppins leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Personal Bio */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="mt-20 glass p-8 md:p-12 rounded-2xl border border-brand-glass/50 max-w-4xl mx-auto"
                >
                    <p className="text-lg md:text-xl text-gray-300 font-poppins text-center leading-relaxed">
                        "I am a passionate developer who bridges the gap between design and engineering.
                        With a keen eye for detail and a love for cutting-edge technology,
                        I create immersive web experiences that not only look futuristic but function flawlessly."
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default About;
