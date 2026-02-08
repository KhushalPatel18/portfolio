"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-orange-100 to-blue-100 rounded-full blur-[100px] -z-10 opacity-50"></div>

            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-6 text-charcoal-900"
                >
                    Get In Touch
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-xl text-gray-600 mb-12"
                >
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-10"
                >
                    <a
                        href="https://github.com/KhushalPatel18"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-3 text-gray-600 hover:text-orange-600 transition-colors group"
                    >
                        <div className="p-5 bg-white shadow-lg rounded-2xl group-hover:shadow-xl group-hover:scale-110 transition-all border border-gray-100">
                            <Github size={36} />
                        </div>
                        <span className="text-sm font-semibold">GitHub</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/khushal-patel-b2040b350"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-3 text-gray-600 hover:text-blue-700 transition-colors group"
                    >
                        <div className="p-5 bg-white shadow-lg rounded-2xl group-hover:shadow-xl group-hover:scale-110 transition-all border border-gray-100">
                            <Linkedin size={36} />
                        </div>
                        <span className="text-sm font-semibold">LinkedIn</span>
                    </a>
                    <a
                        href="mailto:khushalpatel1805@gmail.com?subject=Hello%20Khushal&body=I%20came%20across%20your%20portfolio..."
                        className="flex flex-col items-center gap-3 text-gray-600 hover:text-red-500 transition-colors group"
                    >
                        <div className="p-5 bg-white shadow-lg rounded-2xl group-hover:shadow-xl group-hover:scale-110 transition-all border border-gray-100">
                            <Mail size={36} />
                        </div>
                        <span className="text-sm font-semibold">Email</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
