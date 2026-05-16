import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: "var(--color-bg)",
                surface: "var(--color-surface)",
                border: "var(--color-border)",
                accent: "var(--color-accent)",
                "accent-2": "var(--color-accent-2)",
                "accent-dim": "var(--color-accent-dim)",
                muted: "var(--color-muted)",
                light: "var(--color-light)",
            },
            fontFamily: {
                display: ["var(--font-space)", "sans-serif"],
                mono: ["var(--font-jetbrains)", "monospace"],
                body: ["var(--font-space)", "sans-serif"],
            },
            borderRadius: {
                sm: "6px",
                md: "10px",
                lg: "16px",
                xl: "22px",
                full: "9999px",
            },
            boxShadow: {
                glass: "0 8px 32px rgba(0,96,152,0.12), inset 0 1px 0 rgba(255,255,255,0.6)",
                "glass-dark":
                    "0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.07)",
                glow: "0 0 20px rgba(0,112,168,0.4)",
                "glow-sm": "0 0 10px rgba(0,112,168,0.3)",
                card: "0 2px 16px rgba(0,96,152,0.08)",
                "card-hover": "0 8px 32px rgba(0,96,152,0.2)",
            },
            animation: {
                blink: "blink 1s step-end infinite",
                pulse: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
            },
            keyframes: {
                blink: {
                    "0%,100%": { opacity: "1" },
                    "50%": { opacity: "0" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
