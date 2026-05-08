import React from 'react';
import { TimelineItemProps } from '@/src/types';

export const TimelineItem = ({ period, title, description, isActive = false }: TimelineItemProps) => {
    return (
        <div className="relative pl-8 border-l-2 border-terracotta/30">
            <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full ${isActive ? 'bg-terracotta' : 'bg-terracotta/50'}`}></div>
            <span className={`text-sm font-bold tracking-wider uppercase mb-1 block ${isActive ? 'text-terracotta' : 'text-charbon/50'}`}>
                {period}
            </span>
            <h3 className="text-2xl font-serif mb-2">{title}</h3>
            <p className="text-charbon/70">{description}</p>
        </div>
    );
};
