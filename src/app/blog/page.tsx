import ContentList from "@/src/components/cards/ContentList";

export default function BlogPage() {
    return (
        <div className="">
            <h1 className="p-10 text-3xl font-bold">Blog</h1>
            <main className="relative flex justify-center items-center">
                <ContentList type={"blog"} />
            </main>
        </div>
    );
}
