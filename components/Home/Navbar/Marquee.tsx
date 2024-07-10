"use client"
import { useEffect } from 'react';
import gsap from 'gsap';

const Marquee = () => {
  useEffect(() => {
    let currentScroll = 0;
    let isScrollingDown = true;
    const arrows = document.querySelectorAll(".arrow");
  
    const tween = gsap
      .to(".marquee__part", {
        xPercent: -100,
        repeat: -1,
        duration: 10,
        ease: "linear",
      })
      ;
  
    gsap.set(".marquee__inner", { xPercent: -50 });
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > currentScroll) {
        isScrollingDown = true;
      } else {
        isScrollingDown = false;
      }
  
      gsap.to(tween, {
        timeScale: isScrollingDown ? 1 : -1,
      });
  
      arrows.forEach((arrow) => {
        if (isScrollingDown) {
          arrow.classList.remove("active");
        } else {
          arrow.classList.add("active");
        }
      });
  
      currentScroll = window.scrollY;
    });
  }, []);

  return (
    <div className="marquee text-center text-[10px] lg:text-[14px] xl:text-[16px]" style={{ color: '#916DCF' }}>
      <div className="marquee__inner">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="marquee__part">
            for hire
            <div className="arrow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 100">
                <path d="M70.4,58.9L70.1,57l-0.2-0.9c0,0,0,0,0,0l-0.2-0.9c-18.7,3.4-27.6,13.4-31.9,22.7V3h-0.9H35h-0.9v75.3c-4.2-9.7-13.2-20.2-31.9-23.2L1.9,57L1.7,58c0,0,0,0,0,0l-0.1,0.9c28.7,4.5,32.2,27.6,32.5,35.3c-0.1,1.7,0,2.7,0,2.8l0.9-0.1v0l0.5,0l2.4,0.1c0,0,0-0.6,0-1.5v-2.5C38.4,84.4,42.5,63.9,70.4,58.9z" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
