import React from "react";
import BlogCardList from "@/src/components/BlogCardList";
import ContentList from "@/src/components/cards/ContentList";

const ProjectsFrame = () => {
    return (
        <section className="w-full py-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <h2 className="mb-8">Mes Projets</h2>
            </div>
            <ContentList type={"projects"}></ContentList>
        </section>
    );
};


export default ProjectsFrame;