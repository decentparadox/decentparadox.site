import Bordered from "@/components/Layouts/Bordered";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import Marquee from "./Marquee";
import Image from "next/image";
export default function Hero() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="w-full flex justify-between items-center">
        <div className="w-[35%] flex justify-start ">Folio 2k24</div>
        <div className="w-[30%] flex justify-center ">
          <Marquee />
        </div>
        <div className="w-[35%] flex justify-end ">
          {" "}
          <ThemeSwitch />
        </div>
      </div>
      <div className="w-full  h-auto overflow-hidden">
        <Bordered>
          <div className="h-[300px]">
            <div className="w-full h-full flex justify-center items-center">
              <h1 className="absolute font-vaxen xl:text-[240px] 2xl:text-[300px] md:text-[150px] sm:text-[124px] text-[82px]  fg-primary">
                2024
              </h1>
              <p className="z-10 font-kleemax xl:text-[64px] 2xl:text-[76px] md:text-[40px] sm:text-[32px] text-[20px] fg-accent">
                DECENTPARADOX
              </p>
            </div>
          </div>
        </Bordered>
        <div className="w-full flex justify-between items-center py-3">
          <div className="w-[35%] flex justify-start ">
            <Link href="/blog">blog </Link>
          </div>
          <div className="w-[30%] flex justify-center text-center">
            Game Developer
          </div>
          <div className="w-[35%] flex justify-end ">
            <Link href="/projects">projects</Link>
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex justify-between items-center ">
        <div className="w-[30%]">
          <Image
            src="./KeepScrolling.svg"
            width={0}
            height={0}
            style={{ width: "auto", height: "32px" }}
            alt="keepScrolling"
          />
        </div>
        <div className="flex items-center justify-center w-[40%]">
          <div className="hidden sm:block">
            <Image
              src="./Restricted.svg"
              width={0}
              height={0}
              style={{ width: "auto", height: "32px" }}
              alt="keepScrolling"
            />
          </div>

          <Image
            src="./logoAccent.svg"
            width={0}
            height={0}
            style={{ width: "auto", height: "32px" }}
            alt="keepScrolling"
          />
          <div className="hidden sm:block">
            <Image
              src="./International.svg"
              width={0}
              height={0}
              style={{ width: "auto", height: "32px" }}
              alt="keepScrolling"
            />
          </div>
        </div>
        <div className="flex w-[30%] justify-end">
          <Image
            src="./BarcodeIG.svg"
            width={0}
            height={0}
            style={{ width: "auto", height: "32px" }}
            alt="keepScrolling"
          />
        </div>
      </div>
    </main>
  );
}
