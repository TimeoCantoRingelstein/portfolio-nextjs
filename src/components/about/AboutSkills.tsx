import React from 'react';
import { FaJava } from "react-icons/fa";
import { 
    SiNextdotjs, 
    SiTypescript,
    SiJavascript,
    SiHtml5,
    SiCss,
    SiTailwindcss, 
    SiNodedotjs, 
    SiAngular,
    SiC,
    SiCplusplus,
    SiMysql,
    SiFigma,
    SiGit 
} from "react-icons/si";

const skills = [
    { name: "React & Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: SiJavascript },
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Angular", icon: SiAngular },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Java", icon: FaJava },
    { name: "C", icon: SiC },
    { name: "C++", icon: SiCplusplus },
    { name: "SQL", icon: SiMysql },
    { name: "Figma", icon: SiFigma },
    { name: "Git", icon: SiGit },
];

const AboutSkills = () => {
    return (
        <div className="mt-32 md:mt-40">
            <h2 className="text-4xl font-serif text-charbon mb-10">Mes compétences</h2>
            <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="group flex items-center gap-3 px-4 py-2.5 bg-terracotta/10 border border-terracotta/15 rounded-2xl hover:bg-terracotta/20 hover:border-terracotta/30 transition-all duration-300 cursor-default"
                    >
                        <skill.icon size={18} className="text-terracotta shrink-0" />
                        <span className="text-sm font-sans font-medium text-charbon/80 group-hover:text-charbon whitespace-nowrap transition-colors duration-300">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutSkills;
