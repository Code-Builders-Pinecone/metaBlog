"use client"
import { set } from "date-fns";
import { useEffect, useState } from "react";
import { SearchItemIndex } from "./search-item-index";
import Link from "next/link";
export const MainSearch = ({ search, handleS }) => {
    const [blogs, setBlogs] = useState([]);
    const [cards, setCards] = useState([]);
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(`https://dev.to/api/articles`);
                const data = await res.json();
                await setBlogs(data);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, [cards]);
    useEffect(() => {
        const filteredCards = blogs.filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
        );
        setCards(filteredCards);
    }, [blogs, search]);


    return (
        <div className={handleS ? `z-30 w-1/3 bg-white rounded-lg shadow-inner absolute top-20 right-0 py-4 px-8 border-2 border-gray-400 flex flex-col gap-2 h-[25rem] overflow-y-scroll` : `hidden`}>
            {cards.length !== 0 ? cards.map((item, index) => (
                <Link key={index} href={`/blog/${item.id}`}><SearchItemIndex username={item.user.name} userProfile={item.user.profile_image} date={item.published_at} title={item.title} /></Link>
            )) : (<p>hello</p>)}
        </div>
    )
}