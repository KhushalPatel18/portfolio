import { Orbitron, Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  title: "Khushal Patel | Futuristic Developer Portfolio",
  description: "Advanced 3D Portfolio showcasing creative development work in Next.js, Three.js, and WebGL.",
  keywords: ["Frontend Developer", "3D Portfolio", "React Three Fiber", "Next.js", "Creative Developer", "Cyberpunk UI"],
  authors: [{ name: "Khushal Patel" }],
  openGraph: {
    title: "Khushal Patel | Futuristic Developer",
    description: "Immersive 3D Portfolio Experience",
    type: "website",
    locale: "en_US",
    url: "https://khushalpatel.com", // Placeholder
    siteName: "Khushal Patel Portfolio",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${poppins.variable} ${spaceGrotesk.variable} antialiased bg-brand-black text-brand-white relative`}
      >
        {children}
      </body>
    </html>
  );
}
