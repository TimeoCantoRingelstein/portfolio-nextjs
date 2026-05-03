"use client"
import React, { useEffect, useState } from "react";
import CremeButton from "@/src/components/ui/CremeButton";
import Logo from "@/src/components/ui/Logo";
import NavLink from "@/src/components/ui/NavLink";
import {useScrollDirection} from "@/src/lib/useScrollDirection";

const Header = () => {
    const isVisible = useScrollDirection();
    return (
        <header
            className={`
                flex justify-between items-center w-full 
                py-6 px-12 border-b border-charbon/10
                sticky top-0 z-50 bg-creme
                transition-transform duration-300 ease-in-out
                ${isVisible? "translate-y-0": "-translate-y-full"}
                md:translate-0
                
            `}
        >
            <Logo />
            <nav className="
                hidden md:flex absolute left-1/2 -translate-x-1/2
                gap-8 text-sm tracking-widest uppercase
                text-charbon/80 whitespace-nowrap"
            >
                <NavLink href="/projects">Projets</NavLink>
                <NavLink href="/experiences">Experiences</NavLink>
                <NavLink href="/blog">Blog</NavLink>
                <NavLink href="/about">À propos</NavLink>
            </nav>
            <CremeButton>Me contacter</CremeButton>
        </header>
    );
};

export default Header;
