import React from "react";
import BlogCardList from "@/src/components/BlogCardList";
import ContentList from "@/src/components/cards/ContentList";

const ProjectsFrame = () => {
    return (
        <div>
            <h1>Projects</h1>
            <ContentList type={"projects"}></ContentList>
        </div>
    );
};

export default ProjectsFrame;