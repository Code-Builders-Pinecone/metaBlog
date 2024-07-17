import { Inter } from "next/font/google";
import "./globals.css";
import { MainFooter, MainHeader } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Meta blog",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-[#696A75]`}>
        <MainHeader />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
