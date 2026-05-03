import React from "react";
import BlogCard from "@/src/components/cards/BlogCard";
import {Notes} from "@/src/types";
import {getSortedPostsData} from "@/src/lib/posts";

const BlogCardList = () => {
    const articles: Notes[] = getSortedPostsData("blog");
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 items-stretch p-6">
            {articles.map((article) => (
                <BlogCard
                    key={article.id}
                    article={article}
                />
            ))}
        </div>
    );
};

export default BlogCardList;
