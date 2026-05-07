import React from "react";

const ExternalArrow = () => {
    return (
        <svg
            width="11"
            height="11"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            // Micro-animation : la flèche se déplace légèrement en haut à droite au survol
            className="ml-1 opacity-70 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200"
        >
            <path
                d="M3.5 3H9V8.5M9 3L3 9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default ExternalArrow;