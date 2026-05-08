import React from 'react';
import Image from 'next/image';

const AboutHero = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-lg text-charbon/80 font-sans leading-relaxed">
                <p>
                    À 4 ans, je dessinais des machines en tout genre. 
                    Pour être honnête, c'était plus des gribouillages qu'autre chose, 
                    mais cette passion pour la mécanique et l'ingénierie ne m'a jamais quitté. 
                    Aujourd'hui, à 21 ans, je conçois des machines qui apprennent d'elles mêmes.
                </p>
                <p>
                    Pendant longtemps, j'ai cru que ma voie était l'ingénierie mécanique et la mécatronique. 
                    Mais en fin de compte, plutôt que de fabriquer le corps d'une machine, 
                    j'ai réalisé préférer de loin concevoir son cerveau.
                </p>
            </div>

            <div className="relative aspect-square w-full -mt-10">
                <Image
                    src="/chibi/tea.png"
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
