import Image from "next/image";

const projets = [
    {
        id: 1,
        titre: "Stage - Direction Générale des Finances Publiques",
        sousTitre:
            "Développement de tests automatisés et gestion du pipeline CI/CD",
        description:
            "Durant mon stage de 8 semaines à la Direction Générale des Finances Publiques, j'ai travaillé sur l'automatisation des tests pour une application nommée Baltic qui permet de visualiser des données cadastrales. J'ai utilisé Selenium pour créer des tests automatisés suivant le design pattern Page Object Model, assurant ainsi la qualité et la fiabilité de l'application. De plus, j'ai contribué à la mise en place d'un pipeline CI/CD avec Jenkins, permettant des déploiements plus rapides et plus sûrs.",
        tags: ["Java", "Selenium", "Jenkins"],
        image: "/projets/DGFIP.png",
        annee: "19 Janvier - 13 Mars 2026",
        status: "Terminé",
    },
    {
        id: 2,
        titre: "MonCovoitJV",
        sousTitre: "Application de covoiturage pour les étudiants de l'UPJV",
        description:
            "MonCovoitJV est une application de covoiturage destinée aux étudiants de l'UPJV. Cette application permet aux étudiants de trouver facilement d'autres étudiants pour se rendre à l'université. L'application permet aux étudiants de réserver ou de proposer un trajet tout en simplifiant les échanges avec un système de messagerie.",
        tags: ["HTML", "CSS", "JavaScript", "Smarty", "PHP", "MySQL"],
        lien: "https://github.com/erwan-cht/sae-covoiturage",
        image: "/projets/moncovoitjv.png",
        annee: "Mai - Juin 2025",
        status: "Terminé",
    },
];

export default function Projets() {
    return (
        <div className="min-h-screen pt-16">
            <div className="max-w-5xl mx-auto px-6 py-20">
                {/* Header */}
                <div className="mb-20">
                    <div className="section-label mb-3">
                        <span className="font-mono text-xs text-accent uppercase tracking-widest">
                            02 — Projets
                        </span>
                    </div>
                    <h1 className="font-display text-5xl md:text-6xl font-bold text-light leading-none mb-6">
                        Mes projets et{" "}
                        <span className="gradient-text">expériences</span>
                    </h1>
                    <p className="font-body text-muted text-lg max-w-xl leading-relaxed">
                        Une sélection de projets réalisés durant ma formation et
                        en autonomie.
                    </p>
                </div>

                {/* Liste des projets */}
                <div className="space-y-28">
                    {projets.map((projet, i) => (
                        <article key={projet.id}>
                            {/* Séparateur stylisé */}
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-8 h-8 rounded-lg gradient-btn flex items-center justify-center flex-shrink-0 shadow-glow-sm">
                                    <span className="font-mono text-white text-xs font-bold">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                </div>
                                <div className="flex-1 gradient-line" />
                                <span className="font-mono text-xs text-muted px-2">
                                    {projet.annee}
                                </span>
                                <span
                                    className={`font-mono text-xs px-3 py-1 rounded-full ${
                                        projet.status === "En cours"
                                            ? "bg-accent-dim text-accent border border-accent/30"
                                            : "bg-surface text-muted border border-border"
                                    }`}
                                >
                                    {projet.status}
                                </span>
                            </div>

                            {/* Contenu */}
                            <div className="grid md:grid-cols-2 gap-12 items-start">
                                {/* Texte */}
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="font-display text-3xl font-bold text-light leading-tight mb-3">
                                            {projet.titre}
                                        </h2>
                                        <p className="font-mono text-sm gradient-text font-medium">
                                            {projet.sousTitre}
                                        </p>
                                    </div>

                                    <p className="font-body text-muted leading-relaxed">
                                        {projet.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {projet.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="tag-pill"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Lien GitHub */}
                                    {projet.lien && (
                                        <a
                                            href={projet.lien}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="glass-card inline-flex items-center gap-3 px-5 py-3 !rounded-lg font-mono text-sm text-muted hover:text-accent group"
                                        >
                                            <span>Voir sur GitHub</span>
                                            <span className="group-hover:translate-x-1 transition-transform">
                                                →
                                            </span>
                                        </a>
                                    )}
                                </div>

                                {/* Image */}
                                <div className="relative">
                                    {/* Halo derrière */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-accent/15 to-transparent translate-x-3 translate-y-3 rounded-xl blur-sm" />
                                    <div className="relative rounded-xl overflow-hidden aspect-video glass-card border-0 shadow-card-hover">
                                        <Image
                                            src={projet.image}
                                            alt={projet.titre}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                        {/* Overlay subtil en bas */}
                                        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/20 to-transparent" />
                                    </div>
                                    {/* Badge coin */}
                                    <div className="absolute -bottom-3 -right-3 gradient-btn rounded-lg px-2.5 py-1 shadow-glow-sm">
                                        <span className="font-mono text-white text-xs">
                                            {projet.tags[0]}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Pied de page */}
                <div className="mt-24">
                    <div className="gradient-line mb-8" />
                    <p className="font-mono text-xs text-muted/50 text-center">
                        Plus de projets sur{" "}
                        <a
                            href="https://github.com/erwan-cht"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gradient-text hover:underline font-semibold"
                        >
                            GitHub
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
