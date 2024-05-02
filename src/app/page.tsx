import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects"
import Footer from "@/components/Footer"
export default function Home() {
  return (
    <main className="light:bg-[#fcfcfc] dark:bg-[#1f2021]">
      <Hero />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}
