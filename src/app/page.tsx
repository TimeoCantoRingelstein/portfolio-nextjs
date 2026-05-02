import Hero from "@/src/components/home/Hero";
import BlogCard from "@/src/components/BlogCard";
import BlogCardList from "@/src/components/BlogCardList";

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
