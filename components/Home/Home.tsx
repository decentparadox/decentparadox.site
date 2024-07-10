"use client"
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";
import LoadingScreen from "../LoadingScreen";
import { useState, useEffect } from 'react';
export default function () {
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
        <div className="divide-accent-foreground dark:divide-accent text-[#98C0B5]">
            <Hero />
            <About />
            <Projects />
            <Footer />
        </div>
    )
}