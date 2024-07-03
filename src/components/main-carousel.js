// import React, { useState } from 'react';
import { MainContainer } from "./main-container";
import { MainButton } from "./main-button";
import { BiSolidLeftArrowSquare, BiSolidRightArrowSquare } from "react-icons/bi";

export const MainCarousel = ({ articles }) => {
    // const [persent, setPersent] = useState(100);
    const arr = [];

    if (articles.length === 0) {
        return <div>No articles available.</div>;
    }

    articles.map((item) => {
        arr.push([item, item.published_at])
    })
    arr.sort()
    const articleOne = arr[arr.length - 1][0]
    const articleTwo = arr[arr.length - 2][0]
    const articleThree = arr[arr.length - 5][0]
    const articleFour = arr[arr.length - 4][0]
    // const date = carouse.published_at
    // const published_at = parseISO(date)
    // let index = 1;
    // let translateX = `-translate-x-[${persent}%]`
    // console.log(persent)
    // useEffect(() => {
    //     persent == 0 ? setPersent(400) : null
    // }, [persent])
    // const clickNext = () => { persent == 400 ? setPersent(100) : setPersent(persent + 100) }
    // const clickPrev = () => { persent == 0 ? setPersent(400) : setPersent(persent - 100) }
    return (
        <MainContainer>
            <div className="w-full h-[37.5rem] rounded-lg relative overflow-hidden">
                <div className="absolute bg-green-200 w-full h-full duration-1000 flex bg-cover">
                    <img className="w-full h-full" src={articleFour.cover_image} alt="" />

                    <img className="w-full h-full" src={articleOne.cover_image} alt="" />
                    <img className="w-full h-full" src={articleTwo.cover_image} alt="" />
                    <img className="w-full h-full" src={articleThree.cover_image} alt="" />
                    <img className="w-full h-full" src={articleFour.cover_image} alt="" />

                    <img className="w-full h-full" src={articleOne.cover_image} alt="" />
                </div>
                <div className="xl:w-[37.5rem] bg-white absolute bottom-3 right-3 left-3 rounded-xl p-10 flex flex-col gap-6">
                    <MainButton btnContent="Technology" />
                    <h1 className="text-black text-4xl">{articleOne.title}</h1>
                    {/* Uncomment and use when date formatting is needed */}
                    {/* <p>{format(parseISO(ben.published_at), 'LLLL d, yyyy')}</p> */}
                </div>
            </div>
            <div className="flex justify-center text-4xl xl:justify-end">
                <BiSolidLeftArrowSquare />
                <BiSolidRightArrowSquare />
            </div>
        </MainContainer>
    );
};


