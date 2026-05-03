import ContentList from "@/src/components/cards/ContentList";

export default function ProjectPage() {
    return (
        <div className="px-10">
            <h1 className="pt-10 pb-12 text-6xl font-serif tracking-tighter font-semibold text-charbon">
                Projets
            </h1>
            <main className="relative flex justify-center items-center">
                <ContentList type={"projects"} />
            </main>
        </div>
    );
}