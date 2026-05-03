import ContentList from "@/src/components/cards/ContentList";

export default function ProjectPage() {
    return (
        <div className="">
            <h1 className="p-10 text-3xl font-bold">Projects</h1>
            <main className="relative flex justify-center items-center">
                <ContentList type={"projects"} />
            </main>
        </div>
    );
}