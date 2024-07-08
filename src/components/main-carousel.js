'use client';
import { MainContainer } from "./main-container";
import { BiSolidLeftArrowSquare, BiSolidRightArrowSquare } from "react-icons/bi";
import { useEffect, useState } from "react";
import { CarouselElement } from "./carousel-element";
import { parseISO } from "date-fns";

export const MainCarousel = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setloading] = useState(true);
    const [percent, setPercent] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);
    useEffect(() => {
        const getData = async () => {
            try {
                setloading(true)
                const res = await fetch(`https://dev.to/api/articles`)
                const data = await res.json();
                await setBlogs(data)
                setloading(false)
            } catch (error) {
                console.log(error)
            }
        }
        getData();
    }, [])

    const sortedArticles = [...blogs].sort((a, b) => parseISO(a.published_at) - parseISO(b.published_at));
    const carouselElements = sortedArticles.slice(-3);
    carouselElements.map((item)=>{item.cover_image==null ? item.cover_image="https://dev.to/social_previews/article/321665.png" : null})
    if (carouselElements.length == 0) {
        return (
            <div className="w-full h-[37.5rem] flex items-center justify-center">
                <div className="bg-white w-24 h-24 flex  animate-spin items-center justify-center rounded-full border-8 border-l-black">
                </div>
            </div>
        )
    }
    const clickNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setPercent((prevPercent) => (prevPercent + 1) % 5);
    };

    const clickPrev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setPercent((prevPercent) => (prevPercent - 1 + 5) % 5);
    };

    const handleTransitionEnd = () => {
        setIsTransitioning(false);
        if (percent === 0) {
            setPercent(3);
        } else if (percent === 4) {
            setPercent(1);
        }
    };

    return (
        <MainContainer>
            <div className="w-full h-[37.5rem] rounded-lg relative overflow-hidden shadow-lg">
                <div
                    className={`absolute bg-green-200 w-[500%] h-full flex ${isTransitioning ? 'duration-1000' : ''}`}
                    style={{ transform: `translateX(-${(percent * 100) / 5}%)` }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    <div className="w-full h-full" style={{ backgroundImage: `url(${carouselElements[2].cover_image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    <div className="w-full h-full" style={{ backgroundImage: `url(${carouselElements[0].cover_image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    <div className="w-full h-full" style={{ backgroundImage: `url(${carouselElements[1].cover_image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    <div className="w-full h-full" style={{ backgroundImage: `url(${carouselElements[2].cover_image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    <div className="w-full h-full" style={{ backgroundImage: `url(${carouselElements[0].cover_image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                </div>
                {carouselElements.map((item, index) =>
                    index + 1 === percent || percent === 4 || percent === 0 ? (
                        <CarouselElement
                            key={item.id}
                            title={item.title}
                            published_at={item.published_at}
                            tag_list={item.tag_list}
                        />
                    ) : null
                )}
            </div>
            <div className="flex justify-center bg-contain text-4xl xl:justify-end">
                <BiSolidLeftArrowSquare onClick={clickPrev} />
                <BiSolidRightArrowSquare onClick={clickNext} />
            </div>
        </MainContainer>
    );
};
