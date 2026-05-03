import Hero from "@/src/components/home/Hero";
import ContentList from "@/src/components/cards/ContentList";

export default function Home() {
    return (
        <main className="relative flex justify-center items-center">
            <div className="">
                <Hero />
                <ContentList type={"blog"}/>
            </div>
        </main>
    );
}
