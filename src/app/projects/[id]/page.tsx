import React from "react";
import {Notes} from "@/src/types";
import {getPostedData} from "@/src/lib/posts";
import Link from "next/link";
import Image from "next/image";
import Badge from "@/src/components/ui/Badge";
import { MDXRemote } from 'next-mdx-remote/rsc';

export default async function FullProjectPage({ params } : { params : Promise<{ id : string }> }) {
    // Exactement comme pour la modale, on récupère l'ID
    const resolvedParams = await params;
    const projectId = resolvedParams.id;
    const projectData: Notes = await getPostedData('projects', projectId);

    return (
        <main className="min-h-screen bg-creme pb-24">

            {/* --- EN-TÊTE --- */}
            <header className="max-w-4xl mx-auto px-6 pt-32 pb-16 text-center">
                <p className="text-terracotta tracking-widest uppercase text-sm font-medium mb-6">
                    {projectData.date} {/* Utilisation de la date */}
                </p>
                <h1 className="font-serif text-5xl md:text-7xl text-charbon capitalize leading-tight">
                    {projectData.title} {/* Utilisation du vrai titre */}
                </h1>

                {/* Affichage des Tags s'il y en a */}
                {projectData.tags && projectData.tags.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-3 mt-8">
                        {projectData.tags.map((tag, index) => (
                            <span key={index}>
                                <Badge variant="prominent">{tag}</Badge>
                            </span>
                        ))}
                    </div>
                )}
            </header>

            {/* --- IMAGE DE COUVERTURE --- */}
            {projectData.image && (
                <div className="max-w-6xl mx-auto px-6 mb-16">
                    <div className="relative w-full h-[50vh] md:h-[70vh] rounded-3xl overflow-hidden shadow-xl">
                        <Image
                            src={projectData.image}
                            alt={`Visuel du projet ${projectData.title}`}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            )}

            {/* --- CONTENU & DESCRIPTION --- */}
            <article className="prose max-w-2xl mx-auto px-6 prose prose-lg prose-headings:font-serif prose-p:text-charbon/80">
                {projectData.description && (
                    <p className="text-xl leading-relaxed text-charbon font-medium mb-12 text-center">
                        {projectData.description}
                    </p>
                )}

                {projectData.content && (
                    <MDXRemote source={projectData.content} />
                )}
            </article>

            {/* --- LIENS EXTERNES (GitHub / Site) --- */}
            {(projectData.github || projectData.link) && (
                <div className="max-w-2xl mx-auto px-6 mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
                    {projectData.link && (
                        <a href={projectData.link} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-charbon text-creme rounded-full text-sm tracking-widest uppercase hover:bg-terracotta transition-colors">
                            Visiter le site
                        </a>
                    )}
                    {projectData.github && (
                        <a href={projectData.github} target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-charbon text-charbon rounded-full text-sm tracking-widest uppercase hover:bg-charbon/5 transition-colors">
                            Voir sur GitHub
                        </a>
                    )}
                </div>
            )}

            {/* --- BOUTON RETOUR --- */}
            <div className="max-w-2xl mx-auto px-6 mt-24 text-center">
                <Link
                    href="/projects"
                    className="inline-block text-charbon hover:text-terracotta transition-colors text-sm tracking-widest uppercase border-b border-transparent hover:border-terracotta pb-1"
                >
                    &larr; Retour aux projets
                </Link>
            </div>
        </main>
    );
}