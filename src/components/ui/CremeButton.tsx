import React from 'react';
import { ButtonProps } from "@/src/types"

const CremeButton = ({ children, onClick }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="
                px-5 py-2 rounded-md border border-charbon/20
                cursor-pointer hover:bg-white/40 hover:text-terracotta hover:border-terracotta transition-colors duration-200"
        >
            {children}
        </button>
    );
};

export default CremeButton;
