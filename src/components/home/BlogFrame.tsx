import React from "react";
import ContentList from "@/src/components/cards/ContentList";

const BlogFrame = () => {
    return (
        <div>
            <h1>Blog</h1>
            <ContentList type={"blog"}></ContentList>
        </div>
    );
};

export default BlogFrame;