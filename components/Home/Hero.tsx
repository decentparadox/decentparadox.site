"use client"
import Bordered from "@/layouts/Bordered";
import Link from "next/link";
import Image from "next/image";
import  { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
const titles = ["CTF Player", "Graphic Designer", "Web Developer", "Game Developer", "UI/UX Designer"];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main className="w-[calc(100vw-20px)] ml-[calc(-50vw+50%+10px)] mt-[calc(-100px)] flex min-h-screen flex-col items-center justify-between p-4">
      <Navbar pageTitle={"Folio"} />
      <div className="w-full  h-auto overflow-hidden">
        <Bordered>
          <div className="h-[300px]">
            <div className="w-full h-full flex justify-center items-center">
              <h1 className="absolute font-vaxen xl:text-[240px] 2xl:text-[300px] md:text-[150px] sm:text-[124px] text-[82px]  text-[#916DCF]">
                2024
              </h1>
              <p className="z-[2] font-kleemax xl:text-[64px] 2xl:text-[76px] md:text-[40px] sm:text-[32px] text-[20px] fg-accent">
                DECENTPARADOX
              </p>
            </div>
          </div>
        </Bordered>
        <div className="w-full flex justify-between items-center py-3">
          <div className="w-[35%] flex justify-start ">
            <Link href="/blog">BLOG </Link>
          </div>
          <div className="w-[30%] flex justify-center text-center">
          {titles[titleIndex]}
          </div>
          <div className="w-[35%] flex justify-end ">
            <Link href="/projects">PROJECTS</Link>
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex justify-between items-center ">
        <div className="w-[30%]">
          <Image
            src="./static/images/KeepScrolling.svg"
            width={0}
            height={0}
            style={{ width: "auto", height: "32px" }}
            alt="keepScrolling"
          />
        </div>
        <div className="flex items-center justify-center w-[40%] gap-[96px]">
          <div className="hidden sm:block">
            <Image
              src="./static/images/Restricted.svg"
              width={0}
              height={0}
              style={{ width: "auto", height: "32px" }}
              alt="keepScrolling"
              
            />
          </div>

          <Image
            src="./static/images/logoAccent.svg"
            width={0}
            height={0}
            style={{ width: "auto", height: "32px" }}
            alt="keepScrolling"
          />
          <div className="hidden sm:block">
            <Image
              src="./static/images/International.svg"
              width={0}
              height={0}
              style={{ width: "auto", height: "32px" }}
              alt="keepScrolling"
            />
          </div>
        </div>
        <div className="flex w-[30%] justify-end">
          <Image
            src="./static/images/BarcodeIG.svg"
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
