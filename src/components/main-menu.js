import Link from "next/link";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
export const MainMenu = ({ paths, pathname, side, handleSide }) => {
  return (
    <div
      className={`fixed h-full text-xl bg-white w-80 -right-0 lg:hidden ${side ? "-right-0" : "-right-full"
        } p-4 z-10 top-0 shadow-2xl`}
    >
      <div className="flex items-center justify-between p-5 text-black">
        <div className="flex items-center gap-2 text-xl">
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
        <IoClose style={{ fontSize: "2em" }} onClick={handleSide} />
      </div>
      <ul className="p-5 border-y space-y-4">
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
    </div>
  );
};
