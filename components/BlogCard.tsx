import React from "react";
import Link from "next/link";
import {ProjectNotes} from "@/types";

const tagClass = "font-sans text-[11px] font-normal px-2.5 py-1 rounded-full bg-creme text-charbon hover:bg-terracotta hover:text-white transition-all duration-200";

const BlogCard = ({date, titre, description, tags}:ProjectNotes) => {
    return (
        <Link
            href={`/blog/${titre}`}
            className="group flex flex-col justify-between bg-white border border-charbon/10 rounded-2xl p-7 no-underline text-inherit transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(28,25,23,0.08)] h-full"
        >
        <div className="flex-1">
            <article className="flex flex-col h-full">
                <p className="text-charbon/50 uppercase text-xs pb-4">
                    {date}
                </p>

                <h4 className="font-bold text-xl">
                    {titre}
                </h4>
                <h5 className={"text-charbon/70"}>
                    {description}
                </h5>
                <div>{tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-5 pt-3">
                        {tags.map((tag) => (
                            <span key={tag} className={tagClass}>
                                {tag}
                            </span>
                        ))}
                    </div>
                )}</div>

                <p className={"text-terracotta cursor-pointer hover:text-terracotta/60 transition-colors text-xs"}>
                    Lire la suite &rarr;
                </p>
            </article>
        </div>
    </Link>
)
    ;
};

export default BlogCard;
