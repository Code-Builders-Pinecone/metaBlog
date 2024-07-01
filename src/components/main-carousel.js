import { MainContainer } from "./main-container"
import { MainButton } from "./main-button"
import { BiSolidLeftArrowSquare, BiSolidRightArrowSquare } from "react-icons/bi";

export const MainCarousel = () => {
    return (
        <MainContainer>
            <div className={`w-full h-[37.5rem] bg-blue-300 rounded-lg relative`}>
                <div className="xl:w-[37.5rem]   bg-white absolute bottom-3 right-3 left-3 rounded-xl p-10 flex flex-col gap-6">
                    <MainButton children="Technology"></MainButton>
                    <h1 className="text-black text-4xl">Grid system for better Design User Interface</h1>
                    <p>August 20, 2022</p>
                </div>
            </div>
            <div className="flex justify-center xl:justify-end">
                <BiSolidLeftArrowSquare />
                <BiSolidRightArrowSquare />
            </div>
        </MainContainer>
    )
}