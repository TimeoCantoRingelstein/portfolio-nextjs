import React from 'react';
import Image from 'next/image';

const AboutHero = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-lg text-charbon/80 font-sans leading-relaxed">
                <p>
                    Bonjour, je m'appelle Timeo. Je suis un développeur passionné par la création
                    d'expériences web modernes, performantes et esthétiques.
                </p>
                <p>
                    Mon parcours m'a amené à explorer diverses technologies et frameworks,
                    mais mon cœur penche actuellement vers l'écosystème React et Next.js.
                    J'accorde une importance particulière aux détails, à l'accessibilité
                    et à l'expérience utilisateur.
                </p>
                <p>
                    En dehors du code, j'aime explorer de nouvelles idées, contribuer à
                    des projets open-source et partager mes connaissances à travers mon blog.
                </p>
            </div>

            <div className="relative aspect-square w-full">
                <Image
                    src="/chibi/chill.png"
                    alt="Illustration de profil"
                    fill
                    className="object-contain drop-shadow-2xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>
        </div>
    );
};

export default AboutHero;
