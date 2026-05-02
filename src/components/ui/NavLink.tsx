import React from "react"
import Link from "next/link";
import { NavItem } from "@/src/types"

export default function NavLink({href, isExternal, children}: NavItem) {
    const external = isExternal !== undefined ? isExternal : href.startsWith("http");

    return (
        <Link
            href={href}
            className="hover:text-terracotta transition-colors cursor-pointer"
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
        >
            {children}
        </Link>
    )
}