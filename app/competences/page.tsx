const categories = [
    {
        id: "langages",
        titre: "Langages",
        icone: "</>",
        competences: [
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "PHP",
            "Python",
            "Java",
            "SQL",
        ],
    },
    {
        id: "frameworks",
        titre: "Frameworks & Outils",
        icone: "{ }",
        competences: [
            "React",
            "Node.js",
            "Smarty",
            "Git",
            "GitHub / GitLab",
            "Docker",
        ],
    },
    {
        id: "bdd",
        titre: "Bases de données",
        icone: "[ ]",
        competences: ["MySQL", "PostgreSQL", "PhpMyAdmin"],
    },
    {
        id: "soft",
        titre: "Soft Skills",
        icone: "//",
        competences: [
            "Agilité / Scrum",
            "Gestion de projet",
            "Communication",
            "Travail en équipe",
        ],
    },
    {
        id: "langue",
        titre: "Langues",
        icone: "Aa",
        competences: ["Anglais (B1)", "Français (niveau natif)"],
    },
];

export default function Competences() {
    return (
        <div className="min-h-screen pt-16">
            <div className="max-w-6xl mx-auto px-6 py-20">
                {/* Header */}
                <div className="mb-16">
                    <div className="section-label mb-3">
                        <span className="font-mono text-xs text-accent uppercase tracking-widest">
                            03 — Compétences
                        </span>
                    </div>
                    <h1 className="font-display text-5xl md:text-6xl font-bold text-light leading-none mb-6">
                        Mon <span className="gradient-text">stack</span>
                    </h1>
                    <p className="font-body text-muted text-lg max-w-xl leading-relaxed">
                        Les technologies et compétences acquises au fil de ma
                        formation et de mes projets.
                    </p>
                </div>

                {/* Tableau glass */}
                <div className="glass-card overflow-hidden mb-20 !rounded-xl border-0 shadow-card">
                    {/* Header du tableau */}
                    <div className="gradient-btn px-6 py-3 flex items-center gap-3">
                        <span className="font-mono text-white/80 text-xs uppercase tracking-widest">
                            Catégorie
                        </span>
                        <div className="flex-1 h-px bg-white/20" />
                        <span className="font-mono text-white/80 text-xs uppercase tracking-widest">
                            Technologies
                        </span>
                    </div>

                    {/* Lignes */}
                    {categories.map((cat, i) => (
                        <div
                            key={cat.id}
                            className={`flex flex-col md:flex-row group transition-colors duration-200 hover:bg-accent-dim ${
                                i < categories.length - 1
                                    ? "border-b border-border/60"
                                    : ""
                            }`}
                        >
                            {/* Colonne titre */}
                            <div className="md:w-64 flex-shrink-0 flex items-center gap-3 px-6 py-5 border-b md:border-b-0 md:border-r border-border/60">
                                <span
                                    className="font-mono text-xs font-bold w-8 h-8 rounded-lg gradient-btn flex items-center justify-center flex-shrink-0 text-white shadow-glow-sm"
                                    style={{ fontSize: "9px" }}
                                >
                                    {cat.icone}
                                </span>
                                <span className="font-display font-semibold text-light text-base">
                                    {cat.titre}
                                </span>
                            </div>

                            {/* Colonne tags */}
                            <div className="flex flex-wrap gap-2 px-6 py-5 items-center">
                                {cat.competences.map((comp) => (
                                    <span key={comp} className="tag-pill">
                                        {comp}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
