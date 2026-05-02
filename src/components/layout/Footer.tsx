import React from 'react';
import MyButton from "@/src/components/ui/MyButton";
import Logo from "@/src/components/ui/Logo";
import NavLink from "@/src/components/ui/NavLink";

const Footer = () => {
    return (
        <nav className="flex justify-between items-center w-full py-6 px-12 border-t border-charbon/10">
            <Logo />
            <div className="
                hidden md:flex
                gap-8 text-sm tracking-widest
                text-charbon/80 font-medium"
            >
                <NavLink href="https://github.com">GitHub</NavLink>
                <NavLink href="https://linkedin.com">LinkedIn</NavLink>
                <NavLink href="https://google.com">Email</NavLink>
            </div>
            <p className="text-charbon/40">© 2026 – Fait avec NextJS</p>
        </nav>
    );
};

export default Footer;
