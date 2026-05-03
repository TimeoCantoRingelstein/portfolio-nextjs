import React from "react";
import Link from "next/link";
import {Notes} from "@/src/types";
import Badge from "@/src/components/ui/Badge";

const BlogCard = ({ article }: { article: Notes }) => {
    return (
        <Link
            href={`/blog/${article.id}`}
            className="group flex flex-col justify-between bg-white border border-charbon/10 rounded-2xl p-7 no-underline text-inherit transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(28,25,23,0.08)] h-full"
        >
        <div className="flex-1">
            <article className="flex flex-col h-full">
                <p className="text-charbon/50 uppercase text-xs pb-4">
                    {article.date}
                </p>

                <h4 className="font-bold text-xl">
                    {article.title}
                </h4>
                <h5 className={"text-charbon/70"}>
                    {article.description}
                </h5>
                <div>{article.tags && article.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-5 pt-3">
                        {article.tags.map((tag) => (
                            <span key={tag}>
                                <Badge>{tag}</Badge>
                            </span>
                        ))}
                    </div>
                )}</div>

                <p className={"text-terracotta cursor-pointer hover:text-terracotta/60 transition-colors text-xs pt-5"}>
                    Lire la suite &rarr;
                </p>
            </article>
        </div>
    </Link>
)
    ;
};

export default BlogCard;
