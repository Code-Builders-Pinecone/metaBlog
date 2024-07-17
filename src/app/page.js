"use client"
import { MainBlogs, MainCarousel, MainFooter, MainHeader, MainTrending } from "@/components";

export default function Home() {
  return (
    <main>
      <MainCarousel />
      <MainTrending />
      <MainBlogs />
    </main>
  );
}
