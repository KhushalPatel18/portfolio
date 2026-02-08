import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Khushal-Portfolio",
  description: "A minimalist portfolio built with Next.js, showcasing my work and skills.",
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-cream-50 text-charcoal-900 font-[family-name:var(--font-inter)] relative`}
      >
        {children}
      </body>
    </html>
  );
}
