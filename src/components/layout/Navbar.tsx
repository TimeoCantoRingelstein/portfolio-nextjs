import React from 'react';
import MyButton from "@/src/components/ui/MyButton";
import Logo from "@/src/components/ui/Logo";
import NavLink from "@/src/components/ui/NavLink";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center w-full py-6 px-12 border-b border-charbon/10">
            <Logo />
            <div className="
                hidden md:flex
                gap-8 text-sm tracking-widest uppercase
                text-charbon/80"
            >
                <NavLink href="/projects">Projets</NavLink>
                <NavLink href="/experiences">Experiences</NavLink>
                <NavLink href="/blog">Blog</NavLink>
                <NavLink href="/about">À propos</NavLink>
            </div>
            <MyButton label = "Me contacter"/>
        </nav>
    );
};

export default Navbar;
