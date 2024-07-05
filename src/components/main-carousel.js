'use client';
import { MainContainer } from "./main-container";
import { BiSolidLeftArrowSquare, BiSolidRightArrowSquare } from "react-icons/bi";
import { useState } from "react";
import { CarouselElement } from "./carousel-element";

export const MainCarousel = ({ articles }) => {
    const [percent, setPercent] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);

    if (articles.length === 0) {
        return <div>No articles available.</div>;
    }

    const sortedArticles = [...articles].sort((a, b) => new Date(a.published_at) - new Date(b.published_at));
    const carouselElements = sortedArticles.slice(-3);

    const clickNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setPercent((prevPercent) => (prevPercent + 1) % 5);
    };

    const clickPrev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setPercent((prevPercent) => (prevPercent - 1 + 5) % 5); // Ensure percent is non-negative
    };

    const handleTransitionEnd = () => {
        setIsTransitioning(false);
        if (percent === 0) {
            setPercent(3);
        } else if (percent === 4) {
            setPercent(1);
        }
    };
    console.log(percent)
    return (
        <MainContainer>
            <div className="w-full h-[37.5rem] rounded-lg relative overflow-hidden">
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
