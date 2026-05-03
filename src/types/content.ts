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