export type NavItem = {
    children: React.ReactNode;
    href: string;
    isExternal?: boolean; // Pour savoir s'il faut ouvrir dans un nouvel onglet (ex: LinkedIn)
}

export type BadgeProps = {
    children: React.ReactNode;
};