"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useTheme } from "next-themes";
import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";
import Marquee from "./Marquee";
import "./Navbar.css";
export default function Navbar({ pageTitle }: { pageTitle: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-between items-center">
      <div className="w-[35%] flex justify-start ">{pageTitle}</div>
      <div className="w-[30%] flex justify-center ">
        {/* Marquee */}
        <Marquee />
        {/* Marquee End */}
      </div>
      <div className="w-[35%] flex justify-end gap-10 ">
        {/* Themeswitch */}
        {/* <ThemeSwitch /> */}
        {/* Themeswitch End */}
        <p className="">2k24</p>

      </div>
    </div>
  );
}
