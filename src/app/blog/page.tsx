import BlogCardList from "@/src/components/cards/BlogCardList";

export default function Project() {
    return (
        <div className="">
            <h1 className="p-10 text-3xl font-bold">Blog</h1>
            <main className="relative flex justify-center items-center">
                <BlogCardList />
            </main>
        </div>
    );
}
