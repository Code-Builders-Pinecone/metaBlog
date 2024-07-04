"use client"
import { MainContainer } from "./main-container";
import { MainButton } from "./main-button";
import { BiSolidLeftArrowSquare, BiSolidRightArrowSquare } from "react-icons/bi";
import { useState } from "react";
import { CarouselElement } from "./carousel-element";


export const MainCarousel = ({ articles }) => {
    const [persent, setPersent] = useState(1);
    const [transition, setTransition] = useState(false)
    const arr = [];
    if (articles.length === 0) {
        return <div>No articles available.</div>;
    }
    articles.map((item) => {
        arr.push([item, item.published_at])
    })
    arr.sort((a, b) => a[1] - b[1])
    const carouseElement = arr.slice(-4)
    // let index = 1;
    // useEffect(() => {
    //     persent == 0 ? setPersent(400) : null
    // }, [persent])
    const clickNext = () => {
        setPersent((persent + 1) % 4)
    }
    const clickPrev = () => {
        setPersent(persent === 0 ? 3 : (persent - 1) % 4)
    }
    return (
        <MainContainer>
            <div className="w-full h-[37.5rem] rounded-lg relative overflow-hidden">
                <div className={`absolute bg-green-200 w-full h-full -translate-x-[${persent * 100}%] transition duration-1000 flex`}>
                    {carouseElement.map((item, index) => (
                        <img className="w-full h-full" src={item[0].cover_image} />
                    ))}
                </div>
                {carouseElement.map((item, index) => index == persent ? <CarouselElement title={item[0].title} published_at={item[0].published_at} tag_list={item[0].tag_list} /> : (<></>))}
            </div>
            <div className="flex justify-center text-4xl xl:justify-end">
                <BiSolidLeftArrowSquare onClick={clickPrev} />
                <BiSolidRightArrowSquare onClick={clickNext} />
            </div>
        </MainContainer>
    );
};


