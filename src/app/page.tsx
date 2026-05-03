import Hero from "@/src/components/home/Hero";
import BlogCardList from "@/src/components/cards/BlogCardList";

export default function Home() {
    return (
        <main className="relative flex justify-center items-center">
            <div className="">
                <Hero />
                <BlogCardList />
            </div>
        </main>
    );
}
