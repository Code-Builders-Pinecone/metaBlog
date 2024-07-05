"use client"
import { MainBlogs, MainCarousel, MainFooter, MainHeader, MainTrending } from "@/components";

export default function Home() {
  return (
    <main className="space-y-24">
      <MainHeader route={'Home'} />
      <MainCarousel />
      <MainTrending />
      <MainBlogs />
      <MainFooter />
    </main>
  );
}
