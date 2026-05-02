import React from "react";
import BlogCard from "@/components/BlogCard";

const BlogCardList = () => {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 items-stretch p-6">
            <BlogCard
                date={"Avril 2026"}
                titre={"Test"}
                description={"Ceci est une description"}
                tags={["hi", "hey", "hoy"]}
            />
            <BlogCard
                date={"Mai 2026"}
                titre={"Test"}
            />
            <BlogCard
                date={"Janvier 2026"}
                titre={"Test"}
            />
        </div>
    );
};

export default BlogCardList;
