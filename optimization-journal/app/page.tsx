import Hero from "@/components/Hero";
import FeaturedArticles from "@/components/FeaturedArticles";
import CategoryStrip from "@/components/CategoryStrip";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedArticles />
      <CategoryStrip />
      <Newsletter />
    </>
  );
}
