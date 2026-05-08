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
                    period="2025 - Aujourd'hui"
                    title="Polytech Nice Sophia Antipolis"
                    description="Élève ingénieur spécialisé en génie informatique."
                />
                <TimelineItem 
                    period="2023 - 2025"
                    title="Lycée Voltaire, Paris"
                    description="Classes préparatoires aux grandes écoles, filière PTSI puis PT."
                />
                <TimelineItem 
                    period="2022 - 2023"
                    title="Lycée des Petits Champs, Paris"
                    description="Baccalauréat scientifique spécialité physique-chimie et mathématiques (option maths expertes), mention assez bien."
                />
                <TimelineItem 
                    period="2020 - 2022"
                    title="Lycée Bossuet Notre Dame, Paris"
                    description="Baccalauréat scientifique spécialité physique-chimie, mathématiques et SVT, mention bien."
                />
            </Timeline>
        </div>
    );
};

export default AboutTimeline;
