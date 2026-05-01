import React from 'react';
import MyButton from "@/components/MyButton";
import Logo from "@/components/Logo";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center w-full py-6 px-12 border-b border-charbon/10">
            <Logo />
            <div className="
                hidden md:flex
                gap-8 text-sm tracking-widest uppercase
                text-charbon/80"
            >
                <a className="hover:text-terracotta transition-colors cursor-pointer">Projets</a>
                <a className="hover:text-terracotta transition-colors cursor-pointer">Experiences</a>
                <a className="hover:text-terracotta transition-colors cursor-pointer">Blog</a>
                <a className="hover:text-terracotta transition-colors cursor-pointer">À propos</a>
            </div>
            <MyButton
            label = "Me contacter"
            />
        </nav>
    );
};

export default Navbar;
