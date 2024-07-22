"use client";
import { LuMenu, LuSearch } from "react-icons/lu";
import { MainContainer } from "./main-container";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MainMenu } from "./main-menu";
import { MainSearch } from "./main-search";
import { usePathname } from "next/navigation";
const paths = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "Blog",
    path: "/blog"
  },
  {
    name: "Contact",
    path: "/contact"
  }
]
export const MainHeader = () => {
  const [side, setSide] = useState(false);
  const [handleS, sethandleS] = useState(false);
  const pathname = usePathname();
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    sethandleS(!handleS)
  }
  const handleSide = () => {
    setSide(!side);
  };

  return (
    <MainContainer background="bg-white">
      <header className="p-5 lg:pr-20 lg:pl-0 lg:py-8 flex justify-between">
        <div className="flex items-center gap-2 text-2xl text-black">
          <Image
            src="/MetaBlogLogo.png"
            width={36}
            height={36}
            alt="Picture of the author"
          />
          <p>
            Meta<span className="font-bold">Blog</span>
          </p>
        </div>
        <div className="lg:flex hidden relative justify-between lg:w-[640px] ">
          <ul className="flex gap-10 items-center">
            {paths.map((item, index) => (
              <li
                key={index}
                className={item.path == pathname ? "text-yellow-300" : ""}
              >
                <Link
                  href={item.path}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <input
            type="text"
            className="px-4 py-2 bg-gray-200 text-lg rounded-lg w-40"
            placeholder="Search"
            onChange={e => setSearch(e.target.value)}
            onFocus={handleSearch}
            onBlur={handleSearch}
          />
          <LuSearch className="absolute right-2 top-[10px]" />
        </div>
        <LuMenu fontSize="2em" className="lg:hidden" onClick={handleSide} />
      </header>
      <MainSearch search={search} handleS={handleS} />
      <MainMenu
        paths={paths}
        handleSide={handleSide}
        pathname={pathname}
        side={side}
      />
    </MainContainer>
  );
};
