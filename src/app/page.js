import { MainFooter } from "@/components/main-footer";
import { MainHeader } from "@/components/main-header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="text-[#696A75]">
      <MainHeader />
      <MainFooter />
    </main>
  );
}
