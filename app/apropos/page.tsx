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
                            <div className="glass-card p-7">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="px-4 py-2 rounded-xl gradient-btn flex items-center justify-center flex-shrink-0 shadow-glow-sm">
                                        <span className="font-body text-white text-sm font-semibold whitespace-nowrap">
                                            {v.icone}
                                        </span>
                                    </div>
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
                            <div className="glass-card p-6">
                                <div className="px-4 py-2 rounded-xl gradient-btn inline-flex items-center justify-center mb-4 shadow-glow-sm">
                                    <span className="font-body text-white text-sm font-semibold whitespace-nowrap">
                                        {q.icone}
                                    </span>
                                </div>
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
                        <p className="font-body text-muted leading-relaxed">
                            Mon défi actuel, c&apos;est de moins ruminer mes
                            décisions. Je passe souvent trop de temps à peser le
                            pour et le contre avant d&apos;agir.
                            Aujourd&apos;hui, je m&apos;efforce de raccourcir
                            cette phase de réflexion : j&apos;apprends à faire
                            un choix, à l&apos;assumer, et à passer à la suite
                            sans regarder en arrière.
                        </p>
                    </div>
                </div>

                {/* ── RÉFLEXION & PRISE DE RECUL ── */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex-1 gradient-line" />
                        <span className="font-mono text-xs text-accent px-2">
                            // réflexion
                        </span>
                        <div className="flex-1 gradient-line" />
                    </div>

                    <h2 className="font-display text-3xl font-bold text-light mb-8">
                        Ma <span className="gradient-text">réflexion</span> &
                        prise de recul
                    </h2>

                    <div className="space-y-5">
                        {/* Card 1 */}
                        <div className="glass-card p-7 border-l-4 border-accent">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="px-4 py-2 rounded-xl gradient-btn inline-flex items-center justify-center shadow-glow-sm">
                                    <span className="font-body text-white text-sm font-semibold whitespace-nowrap">
                                        Technique
                                    </span>
                                </div>
                            </div>
                            <p className="font-body text-muted leading-relaxed text-sm">
                                La rigueur que j'ai développée en maths expertes
                                m'a directement servi en informatique.
                                Comprendre un problème avant de le coder,
                                décomposer une tâche complexe en étapes simples,
                                tester avant de valider, ce sont des réflexes
                                que j'ai forgés bien avant d'écrire mes
                                premières lignes de PHP ou de Java. La technique
                                s'apprend, la méthode se construit.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="glass-card p-7 border-l-4 border-accent">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="px-4 py-2 rounded-xl gradient-btn inline-flex items-center justify-center shadow-glow-sm">
                                    <span className="font-body text-white text-sm font-semibold whitespace-nowrap">
                                        Parcours
                                    </span>
                                </div>
                            </div>
                            <p className="font-body text-muted leading-relaxed text-sm">
                                Mon parcours, NSI au lycée, BUT Informatique,
                                stage en entreprise, m&apos;a appris que chaque
                                étape a une valeur propre, même si elle ne
                                semble pas spectaculaire sur le moment. Les
                                maths expertes m&apos;ont appris à raisonner. Le
                                BUT m&apos;a appris à produire. Le stage
                                m&apos;a appris à m&apos;adapter. Je commence à
                                comprendre que ce n&apos;est pas la vitesse du
                                parcours qui compte, mais la cohérence de ce
                                qu&apos;on construit au fil du temps.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="glass-card p-7 border-l-4 border-accent">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="px-4 py-2 rounded-xl gradient-btn inline-flex items-center justify-center shadow-glow-sm">
                                    <span className="font-body text-white text-sm font-semibold whitespace-nowrap">
                                        Humain
                                    </span>
                                </div>
                            </div>
                            <p className="font-body text-muted leading-relaxed text-sm">
                                Ce que j&apos;ai le plus appris en deux ans, ce
                                n&apos;est pas un langage ou un framework,
                                c&apos;est à travailler avec les autres. Que ce
                                soit sur MonCovoitJV en équipe ou en stage dans
                                un service informatique structuré, j&apos;ai
                                réalisé que la qualité d&apos;un projet dépend
                                autant des relations humaines que du code
                                produit. La communication, l&apos;écoute, savoir
                                dire quand on est bloqué, ce sont des
                                compétences aussi importantes que la maîtrise
                                technique, et elles se travaillent tout autant.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
