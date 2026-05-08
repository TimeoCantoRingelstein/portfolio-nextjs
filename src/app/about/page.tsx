import React from 'react';
import AboutHero from '@/src/components/about/AboutHero';
import AboutSkills from '@/src/components/about/AboutSkills';
import AboutTimeline from '@/src/components/about/AboutTimeline';

export const metadata = {
    title: 'À propos | Mon Portfolio',
    description: 'En savoir plus sur moi',
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-creme py-20 px-8 md:px-24">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-6xl md:text-8xl font-serif text-charbon mb-12">À propos</h1>
                <AboutHero />
                <AboutSkills />
                <AboutTimeline />
            </div>
        </main>
    );
}
