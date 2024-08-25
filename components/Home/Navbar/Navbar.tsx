"use client";
import React from "react";
import Marquee from "./Marquee";
import "./Navbar.css";
export default function Navbar({ pageTitle }: { pageTitle: string }) {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="w-[35%] flex justify-start ">{pageTitle}</div>
      <div className="w-[30%] flex justify-center ">
        <Marquee />
      </div>
      <div className="w-[35%] flex justify-end gap-10 ">
        <p className="">2k24</p>
      </div>
    </div>
  );
}
