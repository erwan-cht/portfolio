import Image from "next/image";

const valeurs = [
    {
        icone: "Ambition",
        description:
            "Je me fixe des objectifs élevés et cherche constamment à progresser. Poursuivre un Master après mon BUT en est la preuve : je veux aller le plus loin possible dans mon domaine.",
    },
    {
        icone: "Respect",
        description:
            "Le respect est une valeur fondamentale pour moi, que ce soit envers mes collègues, mes professeurs ou mes interlocuteurs. Je crois qu'un bon environnement de travail repose avant tout sur la considération mutuelle.",
    },
];

const qualites = [
    {
        icone: "Travail d'équipe",
        description:
            "J'apprécie travailler en groupe, partager les idées et avancer ensemble vers un objectif commun. Les projets collectifs sont pour moi source de motivation et d'apprentissage.",
    },
    {
        icone: "Rigueur",
        description:
            "Je porte une attention particulière à la qualité de mon travail. Que ce soit dans le code ou dans la rédaction, je veille à la précision et à la cohérence de ce que je produis.",
    },
    {
        icone: "Curiosité",
        description:
            "Je suis naturellement attiré par les nouvelles technologies et les sujets qui sortent de ma zone de confort. Cette curiosité me pousse à explorer, apprendre et rester à jour.",
    },
];

export default function Apropos() {
    return (
        <div className="min-h-screen pt-16">
            <div className="max-w-6xl mx-auto px-6 py-20">
                {/* ── HEADER ── */}
                <div className="mb-16">
                    <div className="section-label mb-3">
                        <span className="font-mono text-xs text-accent uppercase tracking-widest">
                            01 — À propos
                        </span>
                    </div>
                    <h1 className="font-display text-5xl md:text-6xl font-bold text-light leading-none mb-6">
                        En savoir plus sur{" "}
                        <span className="gradient-text">moi</span>
                    </h1>
                    <p className="font-body text-muted text-lg max-w-xl leading-relaxed">
                        Quelques mots sur qui je suis, ce que je valorise et
                        comment je travaille.
                    </p>
                </div>

                {/* ── VALEURS ── */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex-1 gradient-line" />
                        <span className="font-mono text-xs text-accent px-2">
                            // valeurs
                        </span>
                        <div className="flex-1 gradient-line" />
                    </div>

                    <h2 className="font-display text-3xl font-bold text-light mb-8">
                        Mes <span className="gradient-text">valeurs</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-5">
                        {valeurs.map((v) => (
                            <div key={v.titre} className="glass-card p-7">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="px-4 py-2 rounded-xl gradient-btn flex items-center justify-center flex-shrink-0 shadow-glow-sm">
                                        <span className="font-body text-white text-sm font-semibold whitespace-nowrap">
                                            {v.icone}
                                        </span>
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-light">
                                        {v.titre}
                                    </h3>
                                </div>
                                <p className="font-body text-muted leading-relaxed text-sm">
                                    {v.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── QUALITÉS ── */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex-1 gradient-line" />
                        <span className="font-mono text-xs text-accent px-2">
                            // qualités
                        </span>
                        <div className="flex-1 gradient-line" />
                    </div>

                    <h2 className="font-display text-3xl font-bold text-light mb-8">
                        Mes <span className="gradient-text">qualités</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-5">
                        {qualites.map((q) => (
                            <div key={q.titre} className="glass-card p-6">
                                <div className="px-4 py-2 rounded-xl gradient-btn inline-flex items-center justify-center mb-4 shadow-glow-sm">
                                    <span className="font-body text-white text-sm font-semibold whitespace-nowrap">
                                        {q.icone}
                                    </span>
                                </div>
                                <h3 className="font-display text-lg font-bold text-light mb-3">
                                    {q.titre}
                                </h3>
                                <p className="font-body text-muted leading-relaxed text-sm">
                                    {q.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── CE SUR QUOI JE TRAVAILLE ── */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex-1 gradient-line" />
                        <span className="font-mono text-xs text-accent px-2">
                            // en ce moment
                        </span>
                        <div className="flex-1 gradient-line" />
                    </div>

                    <h2 className="font-display text-3xl font-bold text-light mb-8">
                        Ce sur quoi je{" "}
                        <span className="gradient-text">travaille</span>
                    </h2>

                    <div className="glass-card p-8 border-l-4 border-accent">
                        <p className="font-body text-muted leading-relaxed mb-4">
                            Mon défi actuel, c'est de moins ruminer mes
                            décisions. Je passe souvent trop de temps à peser le
                            pour et le contre avant d'agir. Aujourd'hui, je
                            m'efforce de raccourcir cette phase de réflexion :
                            j'apprends à faire un choix, à l'assumer, et à
                            passer à la suite sans regarder en arrière.
                        </p>
                    </div>
                </div>

                {/* ── CV ── */}
                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex-1 gradient-line" />
                        <span className="font-mono text-xs text-accent px-2">
                            // curriculum vitae
                        </span>
                        <div className="flex-1 gradient-line" />
                    </div>

                    <h2 className="font-display text-3xl font-bold text-light mb-8">
                        Mon <span className="gradient-text">CV</span>
                    </h2>

                    {/* Aperçu image du CV */}
                    <div className="glass-card overflow-hidden mb-8 max-w-2xl mx-auto">
                        <div className="relative w-full aspect-[210/297]">
                            <Image
                                src="/cv.jpg"
                                alt="Aperçu du CV de Erwan Christ"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Bouton téléchargement */}
                    <div className="flex justify-center">
                        <a
                            href="/CHRIST-ERWAN-CV.pdf"
                            download
                            className="gradient-btn inline-flex items-center gap-3 px-8 py-4 rounded-xl font-body font-semibold text-white text-sm shadow-glow"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                                />
                            </svg>
                            Télécharger mon CV (PDF)
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
