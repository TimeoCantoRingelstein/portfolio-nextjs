import React from 'react';

interface ButtonProps {
    label: string;           // Ta variable texte obligatoire
    onClick?: () => void;    // Une variable optionnelle pour l'action du clic
}

const MyButton = ({ label, onClick }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="px-5 py-2 rounded-md border border-charbon/20 cursor-pointer">
            {label}
        </button>
    );
};

export default MyButton;
