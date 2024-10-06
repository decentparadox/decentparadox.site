"use client"
import React from "react";
import Bordered from "@/layouts/Bordered"
import ContactForm from "./ContactForm";

const Home = () => {
  return (
    <section className="p-4 w-[calc(100vw-20px)] ml-[calc(-50vw+50%+10px)] px-[16px] pt-[2em]">
      <div className="w-100 opacity-50 py-4">
          <div className="w-100 mx-0 my-[0.75em] h-[2px] bg-foreground"></div>
      </div>
      <ContactForm />
      <div className="w-full py-[60px] ">
        <Bordered >
        <div className="h-[300px]">
            <div className="w-full h-full flex justify-center items-center">
              <h1 className="absolute font-vaxen xl:text-[240px] 2xl:text-[300px] md:text-[150px] sm:text-[124px] text-[64px]  ">
                DDOX
              </h1>
              <p className="z-[2] font-kleemax text-accent xl:text-[64px] 2xl:text-[76px] md:text-[40px] sm:text-[32px] text-[16px] fg-accent">
                SASANK REDDY
              </p>
            </div>
          </div>
        </Bordered >
      </div>

    </section>
  );
};

export default Home;
