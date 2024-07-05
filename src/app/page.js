"use client"
import { MainBlogs, MainCarousel, MainFooter, MainHeader, MainTrending } from "@/components";
import { useEffect, useState } from "react";

const getArticle = async () => {
  const res = await fetch("https://dev.to/api/articles?pages=1&per_page=9");
  const articles = await res.json();
  return articles
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadMore, setLoadMore] = useState(true);
  const [articles, setArticle] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      const data = await getArticle();
      setArticle(data)
      setIsLoading(false)
    };
  }, []);

  return (
    <main className="space-y-24">
      <MainHeader route={'Home'} />
      <MainCarousel articles={articles} />
      <MainTrending />
      <MainBlogs />
      <MainFooter />
    </main>
  );
}
