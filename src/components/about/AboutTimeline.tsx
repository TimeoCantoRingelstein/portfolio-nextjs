import React from 'react';
import { Timeline } from '@/src/components/ui/Timeline';
import { TimelineItem } from '@/src/components/ui/TimelineItem';

const AboutTimeline = () => {
    return (
        <div className="mt-32 md:mt-40">
            <h2 className="text-4xl font-serif text-charbon mb-8">Mon parcours</h2>
            <Timeline>
                <TimelineItem 
                    isActive={true}
                    period="Aujourd'hui"
                    title="Développeur Freelance"
                    description="Création d'applications web sur mesure pour divers clients, en me concentrant sur la performance et le design."
                />
                <TimelineItem 
                    period="2023 - 2024"
                    title="Développeur Front-end"
                    description="Développement d'interfaces utilisateur interactives au sein d'une agence digitale, avec une forte utilisation de React."
                />
                <TimelineItem 
                    period="2021 - 2023"
                    title="Formation en Informatique"
                    description="Apprentissage des fondamentaux de la programmation, de l'algorithmique et des technologies du web."
                />
            </Timeline>
        </div>
    );
};

export default AboutTimeline;
