"use client"
import React from "react";
import Link from "next/link";
import Bordered from "@/layouts/Bordered"
import "./Footer.css"
const Footer = () => {
  return (
    <footer className="w-[calc(100vw-20px)] ml-[calc(-50vw+50%+10px)] p-4 justify-between flex flex-col md:flex-row">
      <div className="slide-copy">
        <div className="slide-index">
          <p>All rights reserved</p>
        </div>
        <div className="slide-name">
          <p>Sasank Reddy</p>
        </div>
        <button className="githubbtn">
          <Link href="https://github.com/decentparadox/Portfolio">
            <p>Github</p>
          </Link>
        </button>
      </div>
      <div className="slide-info py-4 md:py-0">
        <div className="year">
          <p>year</p>
          <p>2024</p>
        </div>
        <div className="agency">
          <p>agency</p>
          <p>Luminiscent Labs</p>
        </div>
        <div className="role">
          <p>role</p>
          <p>Web Developer</p>
          <p>UI/UX Designer</p>
          <p>CTF Player</p>
        </div>
      </div>
    </footer>
  );
};

const Home = () => {
  return (
    <section className="p-4 w-[calc(100vw-20px)] ml-[calc(-50vw+50%+10px)]">
      <Footer />
      <div className="w-full py-[60px] ">
        {/* <div className="bordered"> */}
        <Bordered >
        <div className="h-[300px]">
            <div className="w-full h-full flex justify-center items-center">
              <h1 className="absolute font-vaxen xl:text-[240px] 2xl:text-[300px] md:text-[150px] sm:text-[124px] text-[82px]  text-[#916DCF]">
                DDOX
              </h1>
              <p className="z-[2] font-kleemax xl:text-[64px] 2xl:text-[76px] md:text-[40px] sm:text-[32px] text-[20px] fg-accent">
                SASANK REDDY
              </p>
            </div>
          </div>
        </Bordered >
        {/* </div> kk */}
      </div>

    </section>
  );
};

export default Home;
