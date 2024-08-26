"use client"
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";
import LoadingScreen from "../LoadingScreen";
import { useState, useEffect } from 'react';
export default function Home () {
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }, []);
  
    if (isLoading) {
      return <LoadingScreen />;
    }
    return (
        <div className="divide-accent-foreground dark:divide-accent text-foreground font-krypton uppercase">
            <Hero />
            {/* <About /> */}
            <Projects />
            <Footer />
        </div>
    )
}