import { MetaBlogLogoFull } from "@/assets/metaBlog-logo-full";
import { LuMenu, LuSearch } from "react-icons/lu";
import { MainContainer } from "./main-container";

export const MainHeader = () => {
    return (
        <MainContainer background="bg-white">
            <header className="p-5 lg:pr-20 lg:pl-0 lg:py-8 flex justify-between">
                <MetaBlogLogoFull />
                <div className="lg:flex hidden relative">
                    <ul className="flex gap-10 items-center px-56">
                        <li>Home</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                    <input type="text" className="px-4 py-2 bg-gray-200 text-sm rounded-lg w-40" placeholder="Search" />
                    <LuSearch className="absolute right-2 top-2"></LuSearch>
                </div>
                <LuMenu fontSize="2em" className="lg:hidden"></LuMenu>
            </header >
        </MainContainer>
    )
}