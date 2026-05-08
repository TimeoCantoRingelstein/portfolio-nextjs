import React from 'react';
import { TimelineProps } from '@/src/types';

export const Timeline = ({ children }: TimelineProps) => {
    return (
        <div className="space-y-12">
            {children}
        </div>
    );
};
