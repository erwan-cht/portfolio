import Image from "next/image";

const infos = [
    {
        label: "Email",
        valeur: "erwan.christ.10@gmail.com",
        lien: "mailto:erwan.christ.10@gmail.com",
        icone: "✉",
    },
    {
        label: "Téléphone",
        valeur: "+33 7 82 19 84 14",
        lien: "tel:+33782198414",
        icone: "☏",
    },
    {
        label: "LinkedIn",
        valeur: "linkedin.com/in/erwan-christ",
        lien: "https://linkedin.com/in/erwan-christ",
        icone: "in",
    },
    {
        label: "GitHub",
        valeur: "github.com/erwan-cht",
        lien: "https://github.com/erwan-cht",
        icone: "gh",
    },
    { label: "Localisation", valeur: "Amiens, France", lien: null, icone: "⌖" },
];

export default function Contact() {
    return (
        <div className="min-h-screen pt-16">
            <div className="max-w-6xl mx-auto px-6 py-20">
                <div className="mb-16">
                    <div className="section-label mb-3">
                        <span className="font-mono text-xs text-accent uppercase tracking-widest">
                            04 — Contact
                        </span>
                    </div>
                    <h1 className="font-display text-5xl md:text-6xl font-bold text-light leading-none mb-6">
                        <span className="gradient-text">Contacts</span>
                    </h1>
                </div>

                <div className="max-w-2xl space-y-6">
                    <div className="glass-card p-5 !rounded-xl border-l-4 border-accent">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-glow-sm" />
                            <span className="font-mono text-xs gradient-text font-semibold uppercase tracking-wider">
                                Disponible
                            </span>
                        </div>
                        <p className="font-body text-sm text-muted leading-relaxed">
                            Actuellement à la recherche d&apos;une alternance
                            pour la rentrée 2026 dans le domaine du
                            développement informatique.
                        </p>
                    </div>

                    <p className="font-body text-base text-muted">
                        Si vous souhaitez me contacter, voici les différentes
                        façons de me joindre :
                    </p>

                    <div className="space-y-3">
                        {infos.map((info) => (
                            <div
                                key={info.label}
                                className="glass-card p-5 group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl gradient-btn flex items-center justify-center flex-shrink-0 shadow-glow-sm text-white font-mono text-sm">
                                        {info.icone}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-mono text-xs text-muted mb-0.5">
                                            {info.label}
                                        </p>
                                        {info.lien ? (
                                            <a
                                                href={info.lien}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="font-body text-sm text-light group-hover:text-accent transition-colors break-all font-medium"
                                            >
                                                {info.valeur}
                                            </a>
                                        ) : (
                                            <p className="font-body text-sm text-light font-medium">
                                                {info.valeur}
                                            </p>
                                        )}
                                    </div>
                                    {info.lien && (
                                        <span className="text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-200 text-sm flex-shrink-0">
                                            →
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
