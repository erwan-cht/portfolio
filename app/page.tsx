import Image from "next/image";
import Link from "next/link";

const formations = [
    {
        titre: "BUT Informatique - Parcours Réalisation d'applications",
        lieu: "IUT d'Amiens - Université de Picardie Jules Verne",
        periode: "2024 — 2027",
        description:
            "Formation complète couvrant le développement logiciel, l'architecture réseau, la gestion de bases de données et la conduite de projet.",
        acquis: "Au-delà de l'apprentissage de nouveaux langages, ce cursus m'apprend à concevoir des architectures logicielles robustes et à comprendre le cycle de vie complet d'une application. Le travail régulier en équipe, encadré par des méthodes agiles, m'a permis de développer une véritable posture professionnelle et d'apprendre à collaborer efficacement sur du code commun.",
    },
    {
        titre: "Baccalauréat général - Mention Bien",
        lieu: "Lycée Robert de Luzarches - Amiens",
        periode: "2021 — 2024",
        description:
            "Spécialités NSI (Numérique et Sciences de l'Informatique) et Mathématiques, complétées par l'option Mathématiques Expertes.",
        acquis: "Cette période a été décisive pour structurer mon esprit logique et ma rigueur d'analyse. Les mathématiques expertes m'ont habitué à la résolution méthodique de problèmes complexes, tandis que la spécialité NSI a posé mes toutes premières bases en algorithmique et a confirmé ma volonté d'en faire mon métier.",
    },
];

export default function Home() {
    return (
        <div className="min-h-screen pt-16">
            {/* ── HERO ── */}
            <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 tag-pill text-xs px-4 py-1.5 !rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        BUT 2 Informatique
                    </div>

                    {/* Titre métier — AJOUT ICI */}
                    <p className="font-mono text-xl text-muted tracking-widest uppercase">
                        Développeur Full Stack
                    </p>

                    {/* Nom */}
                    <div>
                        <h1 className="font-display text-6xl md:text-8xl font-bold leading-none tracking-tight">
                            <span className="text-light">Erwan</span>
                            <br />
                            <span className="gradient-text">Christ</span>
                            <span className="text-accent animate-blink ml-1">
                                _
                            </span>
                        </h1>
                    </div>

                    <p className="font-body text-muted text-lg leading-relaxed max-w-md">
                        Actuellement étudiant en 2ᵉ année de BUT Informatique,
                        je recherche une alternance de Développeur Fullstack
                        pour l&apos;année 2026/2027, avec la volonté de
                        poursuivre ensuite en Master.
                    </p>

                    {/* Citation glass */}
                    <div className="glass-card p-4 !rounded-xl border-l-4 border-accent">
                        <p className="font-body text-muted/80 text-base leading-tight italic">
                            « On ne change jamais les choses en combattant la
                            réalité existante. Pour changer quelque chose,
                            construisez un nouveau modèle qui rend l&apos;ancien
                            obsolète. »
                        </p>
                        <p className="font-body text-muted/60 text-sm mt-1.5">
                            - Buckminster Fuller
                        </p>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Link
                            href="/projets"
                            className="gradient-btn inline-flex items-center gap-2 font-display font-semibold px-6 py-3 rounded-lg text-sm tracking-wide"
                        >
                            Voir mes projets →
                        </Link>
                        <Link
                            href="/contact"
                            className="glass-card inline-flex items-center gap-2 border border-border/60 text-light font-body px-6 py-3 !rounded-lg hover:border-accent/40 transition-colors text-sm"
                        >
                            Contacts
                        </Link>
                    </div>
                </div>

                {/* Photo */}
                <div className="relative flex justify-center md:justify-end">
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        {/* Halo derrière */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 translate-x-4 translate-y-4 blur-sm" />
                        {/* Cadre décoratif */}
                        <div className="absolute inset-0 rounded-2xl border border-accent/30 translate-x-2 translate-y-2" />
                        {/* Photo */}
                        <div className="relative w-full h-full rounded-2xl overflow-hidden glass-card border-0">
                            <Image
                                src="/erwan.jpg"
                                alt="Erwan Christ"
                                fill
                                quality={100}
                                className="object-cover"
                            />
                        </div>
                        {/* Coin accent */}
                        <div className="absolute -bottom-3 -right-3 w-7 h-7 rounded-md gradient-btn flex items-center justify-center shadow-glow">
                            <span className="text-white text-xs font-mono">
                                ✓
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DIVIDER ── */}
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center gap-4">
                    <div className="flex-1 gradient-line" />
                    <span className="font-mono text-xs text-accent px-2">
                        // formation
                    </span>
                    <div className="flex-1 gradient-line" />
                </div>
            </div>

            {/* ── FORMATIONS ── */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <div className="section-label mb-8">
                    <span className="font-mono text-xs text-accent uppercase tracking-widest">
                        Formations
                    </span>
                </div>
                <p className="font-display text-3xl font-bold text-light mb-10">
                    Mon parcours
                </p>

                <div className="space-y-6">
                    {formations.map((f, i) => (
                        <div key={i} className="flex gap-6 group">
                            {/* Timeline */}
                            <div className="flex flex-col items-center pt-1 flex-shrink-0">
                                <div className="w-3 h-3 rounded-full gradient-btn shadow-glow-sm ring-4 ring-accent/10" />
                                {i < formations.length - 1 && (
                                    <div
                                        className="w-px flex-1 mt-2"
                                        style={{
                                            background:
                                                "linear-gradient(to bottom, var(--color-accent), transparent)",
                                        }}
                                    />
                                )}
                            </div>
                            {/* Card */}
                            <div className="glass-card p-6 flex-1 mb-2">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                                    <span className="font-mono text-xs gradient-text font-semibold">
                                        {f.periode}
                                    </span>
                                    <span className="font-mono text-xs text-muted">
                                        {f.lieu}
                                    </span>
                                </div>
                                <h3 className="font-display text-lg font-semibold text-light mb-2">
                                    {f.titre}
                                </h3>
                                <p className="font-body text-sm text-muted leading-relaxed">
                                    {f.description}
                                </p>

                                {/* PARTIE ACQUIS : Phrases explicatives */}
                                <div className="mt-5 pt-5 border-t border-border/40">
                                    <h3 className="font-display text-lg font-semibold text-light mb-2">
                                        Prise de recul :
                                    </h3>
                                    <p className="font-body text-sm text-light/90 leading-relaxed">
                                        {f.acquis}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── QUICK LINKS ── */}
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center gap-4 mb-10">
                    <div className="flex-1 gradient-line" />
                    <span className="font-mono text-xs text-accent px-2">
                        // navigation
                    </span>
                    <div className="flex-1 gradient-line" />
                </div>
            </div>

            <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-5">
                {[
                    {
                        href: "/projets",
                        num: "02",
                        title: "Projets",
                        desc: "Découvrez mes réalisations et travaux pratiques.",
                    },
                    {
                        href: "/competences",
                        num: "03",
                        title: "Compétences",
                        desc: "Langages, frameworks et outils que je maîtrise.",
                    },
                    {
                        href: "/contact",
                        num: "04",
                        title: "Contact",
                        desc: "Échangeons sur vos projets ou opportunités.",
                    },
                ].map(({ href, num, title, desc }) => (
                    <Link
                        key={href}
                        href={href}
                        className="glass-card p-6 group block"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <span className="font-mono text-xs text-accent">
                                {num} —
                            </span>
                            <span className="w-6 h-6 rounded-full bg-accent-dim flex items-center justify-center text-accent text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </div>
                        <h3 className="font-display text-xl font-semibold text-light group-hover:gradient-text transition-colors mb-2">
                            {title}
                        </h3>
                        <p className="font-body text-sm text-muted leading-relaxed">
                            {desc}
                        </p>
                    </Link>
                ))}
            </section>
        </div>
    );
}
