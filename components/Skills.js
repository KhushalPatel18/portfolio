"use client";
import React, { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, TrackballControls, Float } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

const skills = [
    "React", "Next.js", "Three.js", "Tailwind", "Node.js",
    "GraphQL", "TypeScript", "Python", "Framer Motion", "GSAP",
    "MongoDB", "PostgreSQL", "Git", "Docker", "AWS"
];

function Word({ children, ...props }) {
    const color = new THREE.Color();
    const fontProps = { font: '/fonts/Inter-Bold.woff', fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
    const ref = useRef();
    const [hovered, setHovered] = useState(false);

    const over = (e) => (e.stopPropagation(), setHovered(true));
    const out = () => setHovered(false);

    useEffect(() => {
        if (hovered) document.body.style.cursor = 'pointer'
        return () => (document.body.style.cursor = 'auto')
    }, [hovered])

    useFrame(({ camera }) => {
        // Make text always face the camera
        ref.current.quaternion.copy(camera.quaternion);
        // Animate color
        ref.current.material.color.lerp(color.set(hovered ? '#00f3ff' : '#ffffff'), 0.1);
    });

    return (
        <Text ref={ref} onPointerOver={over} onPointerOut={out} onClick={() => console.log('clicked')} {...props} {...fontProps}>
            {children}
        </Text>
    )
}

function Cloud({ count = 4, radius = 20 }) {
    // Create a cloud of words
    const words = useMemo(() => {
        const temp = [];
        const spherical = new THREE.Spherical();
        const phiSpan = Math.PI / (skills.length + 1);
        const thetaSpan = (Math.PI * 2) / skills.length;

        for (let i = 0; i < skills.length; i++) {
            // Distribute points on a sphere
            // Simple random distribution for now or spherical Fibonacci
            // Let's use simple spherical coords
            const phi = Math.acos(-1 + (2 * i) / skills.length);
            const theta = Math.sqrt(skills.length * Math.PI) * phi;

            spherical.set(radius, phi, theta);

            temp.push([new THREE.Vector3().setFromSpherical(spherical), skills[i]]);
        }
        return temp;
    }, [count, radius]);

    // Rotate the whole cloud
    const ref = useRef();
    useFrame((state, delta) => {
        ref.current.rotation.y += delta * 0.05;
        ref.current.rotation.x += delta * 0.02;
    });

    return (
        <group ref={ref}>
            {words.map(([pos, word], index) => (
                <Word key={index} position={pos} children={word} />
            ))}
        </group>
    )
}

const Skills = () => {
    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6 h-full flex flex-col md:flex-row items-center">
                {/* Text Content */}
                <div className="w-full md:w-1/3 mb-12 md:mb-0 z-10">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-orbitron font-bold text-brand-white mb-6"
                    >
                        MY <span className="text-brand-purple">SKILLS</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-300 font-poppins text-lg leading-relaxed"
                    >
                        An ever-expanding universe of technologies I use to bring ideas to life.
                        Interact with the cloud to explore my tech stack.
                    </motion.p>
                </div>

                {/* 3D Cloud */}
                <div className="w-full md:w-2/3 h-[500px] cursor-grab active:cursor-grabbing">
                    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
                        <fog attach="fog" args={['#050505', 0, 80]} />
                        <Cloud count={8} radius={20} />
                        <TrackballControls noZoom />
                    </Canvas>
                </div>
            </div>
        </section>
    );
};

export default Skills;
