"use client"
import { MetaBlogLogoFull } from "@/assets/metaBlog-logo-full";
import { LuMenu, LuSearch } from "react-icons/lu";
import { MainContainer } from "./main-container";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MainMenu } from "./main-menu";
const pages = [
    "Home",
    "Blog",
    "Contact"
]
export const MainHeader = ({ route }) => {
    const [page, setPage] = useState('Home');
    const handlePage = (clickpage, index) => {
        setPage(clickpage)
    }
    useEffect(() => {
        setPage(route);
    }, [route])
    return (
        <MainContainer background="bg-white">
            <header className="p-5 xl:pr-20 xl:pl-0 xl:py-8 flex justify-between">
                <MetaBlogLogoFull />
                <div className="xl:flex hidden relative">
                    <ul className="flex gap-10 items-center px-56">
                        {
                            pages.map((item, index) => (
                                <li key={index} className={page == item ? "text-yellow-300" : ""} onClick={() => handlePage(item, index)}><Link href={item == 'Contact' ? "/contact" : item == 'Blog' ? "/blog" : "/"}>{item}</Link></li>
                            ))
                        }
                    </ul>
                    <input type="text" className="px-4 py-2 bg-gray-200 text-sm rounded-lg w-40" placeholder="Search" />
                    <LuSearch className="absolute right-2 top-[10px]"></LuSearch>
                </div>
                <LuMenu fontSize="2em" className="xl:hidden"></LuMenu>
            </header >
            <MainMenu />
        </MainContainer>
    )
}