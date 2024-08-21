"use client"
import { useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import fitty from "fitty"
import gsap from "gsap"
import SplitType from "split-type"
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
    var fitties = fitty("#tobefitted");
    // fitties[0].fit({ sync: true });
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollTrigger);

    const split = new SplitType("#about-col p", {
  types: "words, chars",
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#about",
      start: "top 50%",
      end: "+=125%",
      scrub: 0.5,
    },
  })
  .set(
    split.chars,
    {
      duration: 0.3,
      color: "#98C0B5",
      stagger: 0.1,
    },
    0.1
  );


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
    <main className='w-[calc(100vw-20px)] ml-[calc(-50vw+50%+10px)] py-12' id="about">
      {/* <section className="leading-8 mt-[96px] px-4">
        <FitWrap>BANGALORE - BASED</FitWrap>
        <FitWrap>DESIGNER & DEVELOPER</FitWrap>
        <FitWrap> ਂ CRAFTING DIGITAL MARVELS</FitWrap>
        <FitWrap>DESIGNS THAT ↑ I MADE WITH ♥</FitWrap>
        <FitWrap>AND PROJECTS THAT IAM REALLY PROUD ↭ OF</FitWrap>
        <FitWrap>CONSTANTLY EVOLVING ✺ AND PUSHING THE BOUNDARIES✦</FitWrap>
        <FitWrap>COMBINING ↠ CREATIVITY AND TECHNOLOGY ↞ SEAMLESSLY</FitWrap>
      </section> */}
      <section className="w-full mt-[96px] uppercase text-[#98C0B5]/40" >
      <div className=" container w-full flex flex-col md:w-[70%] md:flex-row gap-16 mb-16">
        <div className="flex-[2]">
          <p>
            Businesses should not only generate profit but also enrich lives:
            address real problems, inspire, and foster a sense of community.
          </p>
        </div>
        <div className="flex-[5] text-justify text-[32px]" id="about-col">
          <p>
            Everything I do daily is focused on one goal - to infuse people's
            lives with visual and functional beauty.
          </p>
          <br />
          <p>
            The overall impression of a product is made up of the details to
            which we dedicate considerable time.
          </p>
          <br />
          <p>
            Elegant animations on a website or an intuitive interface that feels
            effortless - that's the essence of true aesthetics.
          </p>
        </div>
      </div>
    </section>
    </main>

  );
};

export default DesignerComponent;
