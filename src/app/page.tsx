import HeroFrame from "@/src/components/home/HeroFrame";
import BlogFrame from "@/src/components/home/BlogFrame";
import ProjectsFrame from "@/src/components/home/ProjectsFrame";

export default function Home() {
    return (
        <main className="relative flex justify-center items-center">
            <div className="">
                <HeroFrame />
                <ProjectsFrame></ProjectsFrame>
                <BlogFrame></BlogFrame>
            </div>
        </main>
    );
}
