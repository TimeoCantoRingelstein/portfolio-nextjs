export interface Notes {
    id:string;
    title: string;
    date: string;
    description?: string;

    tags?: string[]; // technique ou personnels

    // Pour les projets
    github?: string;
    link?: string;
    image?: string;
}

export interface ContentCardProperties {
    item: Notes;
    type: "blog" | "projects"; // Le type définit le design et l'URL
}

export interface ContentListProperties {
    type: "blog" | "projects";
}