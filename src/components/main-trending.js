"use client"
import { useEffect, useState } from "react";
import { MainContainer } from "./main-container"
import { TrendingCard } from "./trending-card"

export const MainTrending = () => {
    const [perPage, setPerPage] = useState(5);
    const [trends, setTrends] = useState([]);
    const getData = async () => {
        try {
            const res = await fetch(`https://dev.to/api/articles?pages=2&per_page=${perPage}`)
            const data = await res.json();
            await setTrends(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <MainContainer>
            <h1 className="text-black font-bold text-xl mb-6">Trending</h1>
            <div className="overflow-x-auto">
                <div className="flex w-fit gap-[43px]">
                    {
                        trends.map((item, index) => (
                            <TrendingCard zur={item.cover_image} status={item.type_of} title={item.title} />
                        ))
                    }
                </div>
            </div>
        </MainContainer>
    )
}