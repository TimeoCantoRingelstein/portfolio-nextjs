import React from "react";
import ContentList from "@/src/components/cards/ContentList";

const BlogFrame = () => {
    return (
        <section className="w-full py-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <h2 className="mb-8">Derniers Articles</h2>
            </div>
            <ContentList type={"blog"}></ContentList>
        </section>
    );
};


export default BlogFrame;