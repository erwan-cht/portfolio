"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const links = [
    { href: "/", label: "Accueil" },
    { href: "/projets", label: "Projets" },
    { href: "/competences", label: "Compétences" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-3">
            <nav className="max-w-6xl mx-auto glass rounded-xl px-5 h-14 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2.5 group">
                    <div className="w-8 h-8 rounded-lg gradient-btn flex items-center justify-center flex-shrink-0">
                        <span className="font-display font-bold text-white text-xs tracking-wider">
                            EC
                        </span>
                    </div>
                    <span className="font-display font-semibold text-light text-sm hidden sm:block">
                        Erwan Christ
                    </span>
                </Link>

                <div className="flex items-center gap-1">
                    <ul className="flex items-center gap-0.5">
                        {links.map(({ href, label }) => {
                            const isActive = pathname === href;
                            return (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className={`font-body text-sm px-3.5 py-1.5 rounded-lg transition-all duration-200 ${
                                            isActive
                                                ? "gradient-btn font-semibold"
                                                : "text-muted hover:text-light hover:bg-white/30 dark:hover:bg-white/5"
                                        }`}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="ml-2 pl-2 border-l border-border">
                        <ThemeToggle />
                    </div>
                </div>
            </nav>
        </header>
    );
}
