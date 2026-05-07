// src/components/ui/MDXComponents.tsx
import React from "react";
import Link from "next/link";
import ExternalArrow from "@/src/components/ui/ExternalArrow";

export const customMDXComponents = {

    img: (props: any) => (
        <span className="block my-10 group">
            {/* Image */}
            <span className="block overflow-hidden rounded-3xl border border-charbon/5 leading-none">
                <img
                    {...props}
                    className="block w-full h-auto !m-0 group-hover:scale-[1.01] transition-transform duration-500"
                    alt={props.alt || "Image du projet"}
                />
            </span>

            {/* Caption */}
            {props.alt && (
                <span className="block text-center mt-3 text-sm text-charbon/60 tracking-widest lowercase">
                    {props.alt}
                </span>
            )}
        </span>
    ),

    a: (props: any) => {
        const href = props.href;
        const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));
        // Style commun pour tous les liens
        const commonStyles = "text-terracotta transition-all hover:opacity-80 underline decoration-terracotta/30 underline-offset-4";

        if (isInternalLink) {
            return (
                <Link
                    href={href}
                    {...props}
                    className={commonStyles}
                >
                    {props.children}
                </Link>
            );
        }
        return (
            <a
                href={href}
                {...props}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center ${commonStyles} group/link`}
            >
                {props.children}

                <ExternalArrow/>
            </a>
        );
    }
};