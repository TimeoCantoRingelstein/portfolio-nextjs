import {Notes} from "@/src/types/content";

export type NavItem = {
    children: React.ReactNode;
    href: string;
    isExternal?: boolean; // Pour savoir s'il faut ouvrir dans un nouvel onglet (ex: LinkedIn)
}

export type BadgeProperties = {
    children: React.ReactNode;
};

export interface ButtonProperties {
    children: React.ReactNode;           // Ta variable texte obligatoire
    onClick?: () => void;    // Une variable optionnelle pour l'action du clic
}


export interface ContentCardProperties {
    item: Notes;
    type: "blog" | "projects"; // Le type définit le design et l'URL
}

export interface ContentListProperties {
    type: "blog" | "projects";
}