"use client";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float, Cylinder, MeshDistortMaterial } from "@react-three/drei";
import { useState, Suspense } from "react";
import { FaPaperPlane } from "react-icons/fa";

const FloatingMail = () => {
    return (
        <Canvas camera={{ position: [0, 0, 5] }}>
            <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 5, 2]} intensity={1} color="#bc13fe" />
                <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                    <Cylinder args={[1, 1, 0.2, 32]} rotation={[1.5, 0, 0]}>
                        <meshStandardMaterial color="#00f3ff" wireframe />
                    </Cylinder>
                    {/* Represents an envelope shape roughly or a futuristic disc */}
                    <mesh position={[0, 0, 0.1]}>
                        <boxGeometry args={[1.4, 0.8, 0.1]} />
                        <MeshDistortMaterial color="#bc13fe" speed={2} distort={0.3} />
                    </mesh>
                </Float>
            </Suspense>
        </Canvas>
    )
}

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("Message sent successfully! 🚀");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("Failed to send message. Please try again.");
            }
        } catch (error) {
            setStatus("Error sending message. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-brand-white mb-8">
                        GET IN <span className="text-brand-cyan">TOUCH</span>
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="group">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Name"
                                required
                                className="w-full bg-brand-navy/50 border border-brand-glass rounded-lg p-4 text-brand-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan focus:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all"
                            />
                        </div>
                        <div className="group">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                required
                                className="w-full bg-brand-navy/50 border border-brand-glass rounded-lg p-4 text-brand-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan focus:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all"
                            />
                        </div>
                        <div className="group">
                            <textarea
                                rows="5"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Message"
                                required
                                className="w-full bg-brand-navy/50 border border-brand-glass rounded-lg p-4 text-brand-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan focus:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 bg-gradient-to-r from-brand-cyan to-brand-purple text-brand-black font-bold font-orbitron rounded-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(188,19,254,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? "SENDING..." : "SEND MESSAGE"} <FaPaperPlane />
                        </button>

                        {status && (
                            <p className={`text-center font-poppins ${status.includes("success") ? "text-brand-cyan" : "text-red-400"}`}>
                                {status}
                            </p>
                        )}
                    </form>
                </motion.div>

                {/* 3D Element & Info */}
                <div className="h-[400px] w-full relative hidden md:block">
                    <FloatingMail />
                </div>

            </div>
        </section>
    );
};

export default Contact;
