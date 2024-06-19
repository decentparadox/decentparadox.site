"use client";
import React,  { useEffect, useState } from "react";
import gsap from "gsap";
import { useTheme } from "next-themes";
import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";
import Marquee from "./Marquee";
import "./Navbar.css";
export default function Navbar({ pageTitle }: { pageTitle: string }) {
    const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const menuOpen = document.querySelector('.menu-open');
    const menuClose = document.querySelector('.menu-close');
    const menuImgContainer = document.querySelector('.menu-img');
    const images = document.querySelectorAll('.menu-img img');
    let mouse = { x: 0, y: 0 };
    let cx = window.innerWidth / 2;
    let cy = window.innerHeight / 2;

    const defaultEase = 'power4.inOut';
    const scales = [0.81, 0.84, 0.87, 0.9];

    const openMenu = () => {
      setIsOpen(true);
      gsap.to('.menu', {
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        pointerEvents: 'all',
        duration: 1.25,
        ease: defaultEase,
      });

      gsap.to('.hero', {
        top: '-50%',
        opacity: 0,
        duration: 1.25,
        ease: defaultEase,
      });

      gsap.to('.menu-logo img', {
        y: 0,
        duration: 1,
        delay: 0.75,
        ease: 'power3.out',
      });

      gsap.to('.menu-link p', {
        y: 0,
        duration: 1,
        stagger: 0.075,
        delay: 1,
        ease: 'power3.out',
      });

      gsap.to('.menu-sub-item p', {
        y: 0,
        duration: 0.75,
        stagger: 0.05,
        delay: 1,
        ease: 'power3.out',
      });

      gsap.to(['#img-2, #img-3, #img-4'], {
        top: '50%',
        duration: 1.25,
        ease: defaultEase,
        stagger: 0.1,
        delay: 0.25,
        onComplete: () => {
          gsap.set('.hero', { top: '50%' });
          setIsOpen(true);
          document.body.classList.add("no-scroll");
        },
      });
    };

    const closeMenu = () => {
      gsap.to('.menu', {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        pointerEvents: 'none',
        duration: 1.25,
        ease: defaultEase,
      });

      gsap.to('.menu-items', {
        top: '-300px',
        opacity: 0,
        duration: 1.25,
        ease: defaultEase,
      });

      gsap.to('.hero', {
        top: '0%',
        opacity: 1,
        duration: 1.25,
        ease: defaultEase,
        onComplete: () => {
          gsap.set('.menu', {
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
          });
          gsap.set('.menu-logo img', { y: 50 });
          gsap.set('.menu-link p', { y: 40 });
          gsap.set('.menu-sub-item p', { y: 12 });
          gsap.set('.menu-items', { opacity: 1, top: '0px' });
          gsap.set(['#img-2, #img-3, #img-4'], { top: '150%' });

          setIsOpen(false);
          document.body.classList.remove("no-scroll");
        },
      });
    };

    const update = () => {
      let dx = mouse.x - cx;
      let dy = mouse.y - cy;

      let tiltx = (dy / cy) * 20;
      let tilty = (dx / cx) * 20;

      gsap.to(menuImgContainer, {
        duration: 2,
        transform: `rotate3d(${tiltx}, ${tilty}, 0, 15deg)`,
        ease: 'power3.out',
      });

      images.forEach((img, index) => {
        let parallaxX = -(dx * (index + 1)) / 100;
        let parallaxY = -(dy * (index + 1)) / 100;

        let transformStyles = `translate(calc(-50% + ${parallaxX}px), calc(-50% + ${parallaxY}px)) scale(${scales[index]})`;
        gsap.to(img, {
          duration: 2,
          transform: transformStyles,
          ease: 'power3.out',
        });
      });
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      update();
    };

    const handleResize = () => {
      cx = window.innerWidth / 2;
      cy = window.innerHeight / 2;
    };

    if (menuOpen && menuClose) {
      menuOpen.addEventListener('click', openMenu);
      menuClose.addEventListener('click', closeMenu);
    }

    document.body.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      if (menuOpen && menuClose) {
        menuOpen.removeEventListener('click', openMenu);
        menuClose.removeEventListener('click', closeMenu);
      }
      document.body.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
        <ThemeSwitch />
        {/* Themeswitch End */}
        <p className="menu-open">Menu</p>
      <div className="menu">
        <div className="menu-nav">
          <p className="menu-close">Close</p>
        </div>

        <div className="menu-col menu-img">
          <img id="img-1" src="./assets/hero.jpg" alt="" />
          <img id="img-2" src="./assets/hero.jpg" alt="" />
          <img id="img-3" src="./assets/hero.jpg" alt="" />
          <img id="img-4" src="./assets/hero.jpg" alt="" />
        </div>

        <div className="menu-col menu-items">
          <div className="menu-logo">
            <img src="./assets/logo.png" alt="" />
          </div>

          <div className="menu-links">
            <div className="menu-link">
              <p><a href="#">About</a></p>
            </div>
            <div className="menu-link">
              <p><a href="#">Story</a></p>
            </div>
            <div className="menu-link">
              <p><a href="#">Projects</a></p>
            </div>
            <div className="menu-link">
              <p><a href="#">Releases</a></p>
            </div>
          </div>

          <div className="menu-footer">
            <div className="menu-sub-col">
              <div className="menu-sub-item"><p>Connect</p></div>
              <div className="menu-sub-item"><p>Break</p></div>
              <br />
              <div className="menu-sub-item"><p>Explore</p></div>
              <div className="menu-sub-item"><p>Break</p></div>
              <br />
              <div className="menu-sub-item"><p>Contact Us</p></div>
              <br />
              <div className="menu-sub-item"><p>Ocean City</p></div>
              <div className="menu-sub-item"><p>Rhythmic Sound</p></div>
              <div className="menu-sub-item"><p>2000 Coastal Hwy</p></div>
              <div className="menu-sub-item"><p>Ocean City, MD 21842</p></div>
              <br />
            </div>
            <div className="menu-sub-col">
              <div className="menu-sub-item"><p>Instagram</p></div>
              <div className="menu-sub-item"><p>Youtube</p></div>
              <br />
              <div className="menu-sub-item"><p>Spotify</p></div>
              <div className="menu-sub-item"><p>Mixcloud</p></div>
              <br />
              <div className="menu-sub-item"><p>Email</p></div>
              <br />
              <div className="menu-sub-item"><p>Vice City</p></div>
              <div className="menu-sub-item"><p>Echo Beats</p></div>
              <div className="menu-sub-item"><p>933 South View Ave</p></div>
              <div className="menu-sub-item"><p>Vice City, VC 3270</p></div>
              <br />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
