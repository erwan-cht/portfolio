import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-space",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--font-jetbrains",
});

export const metadata: Metadata = {
    title: "Erwan Christ — Portfolio",
    description: "Étudiant en BUT 2 Informatique",
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="fr">
            <body
                className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
            >
                {/* Halo décoratif bas gauche */}
                <div className="halo-bottom" />
                <Navbar />
                <main>{children}</main>
                <footer className="relative z-10 mt-20">
                    <div className="gradient-line mx-6" />
                    <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-3">
                        <span className="font-body text-sm text-muted">
                            © {new Date().getFullYear()} Erwan Christ
                        </span>
                        <span className="font-mono text-xs text-muted">
                            BUT 2 Informatique
                        </span>
                    </div>
                </footer>
            </body>
        </html>
    );
}
