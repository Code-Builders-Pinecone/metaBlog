import { MetaBlogLogoFull } from "@/assets/metaBlog-logo-full";
import { LuMenu, LuSearch } from "react-icons/lu";
import { MainContainer } from "./main-container";

export const MainHeader = () => {
    return (
        <MainContainer background="bg-white">
            <header className="p-5 xl:pr-20 xl:pl-0 xl:py-8 flex justify-between">
                <MetaBlogLogoFull />
                <div className="xl:flex hidden relative">
                    <ul className="flex gap-10 items-center px-56">
                        <li>Home</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                    <input type="text" className="px-4 py-2 bg-gray-200 text-sm rounded-lg w-40" placeholder="Search" />
                    <LuSearch className="absolute right-2 top-[10px]"></LuSearch>
                </div>
                <LuMenu fontSize="2em" className="xl:hidden"></LuMenu>
            </header >
        </MainContainer>
    )
}