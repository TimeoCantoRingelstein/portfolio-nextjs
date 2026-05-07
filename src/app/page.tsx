import HeroFrame from "@/src/components/home/HeroFrame";
import BlogFrame from "@/src/components/home/BlogFrame";
import ProjectsFrame from "@/src/components/home/ProjectsFrame";

export default function Home() {
    return (
        <main className="min-h-screen bg-creme">
            <HeroFrame />
            <ProjectsFrame />
            <BlogFrame />
        </main>
    );
}

