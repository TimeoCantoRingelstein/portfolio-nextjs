import React from 'react';
import MyButton from "@/components/MyButton";
import Logo from "@/components/Logo";

const Footer = () => {
    return (
        <nav className="flex justify-between items-center w-full py-6 px-12 border-t border-charbon/10">
            <Logo />
            <div className="
                hidden md:flex
                gap-8 text-sm tracking-widest
                text-charbon/80 font-medium"
            >
                <a className="hover:text-terracotta transition-colors cursor-pointer">Github</a>
                <a className="hover:text-terracotta transition-colors cursor-pointer">LinkedIn</a>
                <a className="hover:text-terracotta transition-colors cursor-pointer">Email</a>
            </div>
            <p className="text-charbon/40">© 2026 – Fait avec NextJS</p>
        </nav>
    );
};

export default Footer;
