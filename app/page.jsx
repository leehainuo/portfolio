import Image from "next/image";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
    </main>
  );
}
