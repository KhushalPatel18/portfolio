"use client";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

// Dynamically import heavy 3D components
const ThreeBackground = dynamic(() => import("@/components/ThreeBackground"), { ssr: false });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: false });

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen text-brand-white selection:bg-brand-cyan selection:text-brand-black overflow-hidden">
        <ThreeBackground />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
