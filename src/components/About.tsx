"use client"
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import fitty from "fitty"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from './About.module.css'; // Assuming you have your styles in this CSS module

// const DesignSlider = dynamic(() => import('./DesignSlider'));

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
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Geist&display=swap" rel="stylesheet" />
      </Head>
      <section className={styles.leading}>
        <div className={`${styles.wrapper} ${styles.anim}`}>
          <div>
            <h1 id="tobefitted">Bangalore <span>-</span> based</h1>
          </div>
        </div>
        <div className={`${styles.wrapper} ${styles.leadingSmall}`}>
          <div>
            <h1 id="tobefitted">designer <span>&</span> developer</h1>
          </div>
        </div>
        <div className={`${styles.wrapper} ${styles.leading}`}>
          <div>
            <h1 id="tobefitted"><span> ਂ </span> crafting <span>digital</span> marvels</h1>
          </div>
        </div>
        {/* <DesignSlider /> */}
        <div className={`${styles.wrapper} ${styles.leadingLarge}`}>
          <div>
            <h1 id="tobefitted">designs <span> that ↑</span> i made <span>♥</span></h1>
          </div>
        </div>
        <div className={`${styles.wrapper} ${styles.leadingXSmall}`}>
          <div>
            <h1 id="tobefitted">and projects that iam really <span> proud ↭ </span> of</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default DesignerComponent;
