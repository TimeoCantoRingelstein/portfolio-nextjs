import React from 'react';
import CremeButton from "@/src/components/ui/CremeButton";
import Logo from "@/src/components/ui/Logo";
import NavLink from "@/src/components/ui/NavLink";

const Footer = () => {
    return (
        <nav className="
            relative flex justify-between items-center
            w-full py-6 px-12
            border-t border-charbon/10"
        >
            <Logo />
            <div className="
                hidden md:flex absolute left-1/2 -translate-x-1/2
                gap-8 text-sm tracking-widest
                text-charbon/80 font-medium"
            >
                <NavLink href="https://github.com/TimeoCantoRingelstein">GitHub</NavLink>
                <NavLink href="https://www.linkedin.com/in/timeo-canto-ringelstein-55409137b/">LinkedIn</NavLink>
                <NavLink href="mailto:timeo.caring@gmail.com" isExternal={true}>Email</NavLink>
            </div>
            <p className="text-charbon/40">© 2026 – Fait avec NextJS</p>
        </nav>
    );
};

export default Footer;
