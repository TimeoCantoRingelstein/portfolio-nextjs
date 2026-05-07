import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ContentCardProperties } from "@/src/types";
import Badge from "@/src/components/ui/Badge";

const ContentCard = ({ item, type }:ContentCardProperties) => {
    return (
        <Link
            href={`/${type}/${item.id}`}
            className="group flex flex-col justify-between bg-white border border-charbon/10 rounded-2xl no-underline text-inherit transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(28,25,23,0.08)] h-full overflow-hidden"
        >

        {type === "projects" && item.image && (
            <div className="relative w-full h-56 shrink-0  bg-creme">
                <Image
                    src={item.image}
                    alt={`Aperçu de ${item.title}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
        )}

        <article className="flex flex-col flex-1 p-6">
            <p className="text-charbon/50 uppercase text-xs mb-4">
                {item.date}
            </p>

            <h4 className="mb-2 font-normal">
                {item.title}
            </h4>
            <h5 className="mb-4 line-clamp-2 break-words">
                {item.description}
            </h5>

            {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.tags.map((tag) => (
                        <span key={tag}>
                            <Badge>{tag}</Badge>
                        </span>
                    ))}
                </div>
            )}

            <p className="mt-auto text-terracotta cursor-pointer hover:text-terracotta/60 transition-colors text-xs pt-4">
                Lire la suite &rarr;
            </p>
        </article>
    </Link>
)
    ;
};

export default ContentCard;
