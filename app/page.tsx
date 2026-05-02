import Hero from "@/components/home/Hero";
import BlogCard from "@/components/BlogCard";
import BlogCardList from "@/components/BlogCardList";

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
