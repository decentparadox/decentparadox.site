"use client"
import { useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import fitty from "fitty"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
//@ts-ignore
const FitWrap = ({children}) =>{
  return (
    <div className={`m-auto w-100 py-4 `}>
    <div>
      <h1 id="tobefitted">{children}</h1>
    </div>
  </div>
  )
}
const DesignerComponent = () => {
  useEffect(() => {

    const to_be_fitted = document.querySelectorAll("#tobefitted");
    fitty("#tobefitted");
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".anim4 div h1", {
      backgroundPositionX: "0%",
      stagger: 3,
      scrollTrigger: {
        trigger: ".anim4 div h1",
        scrub: 2,
        start: "top center",
        end: "bottom bottom",
      },
      duration: 5,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <main className='w-[calc(100vw-20px)] ml-[calc(-50vw+50%+10px)]'>
      <section className="leading-8 mt-[96px] px-4">
        <FitWrap>BANGALORE - BASED</FitWrap>
        <FitWrap>DESIGNER & DEVELOPER</FitWrap>
        <FitWrap> ਂ CRAFTING DIGITAL MARVELS</FitWrap>
        <FitWrap>DESIGNS THAT ↑ I MADE WITH ♥</FitWrap>
        <FitWrap>AND PROJECTS THAT IAM REALLY PROUD ↭ OF</FitWrap>
        <FitWrap>CONSTANTLY EVOLVING ✺ AND PUSHING THE BOUNDARIES✦</FitWrap>
        <FitWrap>COMBINING ↠ CREATIVITY AND TECHNOLOGY ↞ SEAMLESSLY</FitWrap>
      </section>
    </main>

  );
};

export default DesignerComponent;
