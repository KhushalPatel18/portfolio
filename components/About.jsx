"use client";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50 rounded-full blur-3xl -z-10 opacity-60 translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl -z-10 opacity-60 -translate-x-1/3 translate-y-1/3"></div>

            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-charcoal-900">About Me</h2>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 relative shadow-inner">
                            {/* Placeholder for another image or abstract graphic */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-blue-100 flex items-center justify-center">
                                <span className="text-6xl">👨‍💻</span>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-white p-6 rounded-xl shadow-xl border border-gray-50 flex flex-col justify-center items-center text-center">
                            <span className="text-4xl font-bold text-blue-600 mb-1">2+</span>
                            <span className="text-gray-600 text-sm font-medium">Years of Experience</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="prose prose-lg text-gray-600"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">I'm Khushal, a developer based in India.</h3>
                        <p className="mb-6 leading-relaxed">
                            I specialize in building high-quality websites and applications. Look, I haven't been able to read your resume yet, but I know you are awesome!
                        </p>
                        <p className="mb-6 leading-relaxed">
                            My expertise spans across **Frontend Development** (React, Next.js, Tailwind) and **Backend Systems**. I love solving real-world problems with code.
                        </p>

                        <div className="flex flex-wrap gap-3 mt-8">
                            {['JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'Git'].map((skill) => (
                                <span key={skill} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 shadow-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
