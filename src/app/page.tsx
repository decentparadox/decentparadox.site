"use client"
import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects"
import Footer from "@/components/Footer"
import { useState, useEffect } from 'react';
import LoadingScreen from "@/components/LoadingScreen";
export default function Home() {
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
    
    <main className="light:bg-[#fcfcfc] dark:bg-[#1f2021]">
      <Hero />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}
