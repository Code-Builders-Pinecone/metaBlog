
import { MainBlogs, MainCarousel, MainFooter, MainHeader, MainLoadMore, MainTrending } from "@/components";

export default function Home() {
  return (
    <main className="text-[#696A75] space-y-24">
      <MainHeader />
      <MainCarousel />
      <MainTrending />
      <MainBlogs />
      <MainLoadMore />
      <MainFooter />
    </main>
  );
}
