import React from "react";
import { BadgeProperties } from "@/src/types";
import { 
    SiNextdotjs, 
    SiTypescript, 
    SiTailwindcss, 
    SiMarkdown, 
    SiReact, 
    SiJavascript, 
    SiPython, 
    SiNodedotjs, 
    SiGit,
    SiHtml5,
    SiCss,
} from "react-icons/si";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    "next.js": SiNextdotjs,
    "nextjs": SiNextdotjs,
    "typescript": SiTypescript,
    "ts": SiTypescript,
    "react": SiReact,
    "tailwind v4": SiTailwindcss,
    "tailwindcss": SiTailwindcss,
    "tailwind": SiTailwindcss,
    "markdown": SiMarkdown,
    "javascript": SiJavascript,
    "js": SiJavascript,
    "python": SiPython,
    "node.js": SiNodedotjs,
    "nodejs": SiNodedotjs,
    "git": SiGit,
    "html": SiHtml5,
    "css": SiCss
};

const Badge = ({ children, variant = "default" }: BadgeProperties) => {
    const isProminent = variant === "prominent";
    
    // On essaye de trouver une icône correspondant au texte
    const textStr = typeof children === "string" ? children.toLowerCase() : "";
    const Icon = iconMap[textStr];

    return (
        <p className={`
            font-sans px-3 font-normal py-1 rounded-full transition-all duration-200 flex items-center gap-1.5 cursor-pointer
            ${isProminent
                ? "text-base bg-terracotta tracking-wider text-white px-5 py-2.5 hover:bg-white hover:text-terracotta border border-terracotta font-medium shadow-sm"
                : "text-[13px] bg-creme text-charbon hover:bg-terracotta hover:text-white hover:border-transparent group"
            }
        `}>
            {Icon && <Icon className="text-[1.2em]" />}
            <span>{children}</span>
        </p>
    );
};

export default Badge;