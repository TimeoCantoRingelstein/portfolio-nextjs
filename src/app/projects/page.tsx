import ContentList from "@/src/components/cards/ContentList";

export default function ProjectPage() {
    return (
        <main className="min-h-screen bg-creme pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <h1 className="mb-12">Mes Projets</h1>
            </div>
            <ContentList type={"projects"} />
        </main>
    );
}