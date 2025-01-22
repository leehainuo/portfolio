import Image from "next/image";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Services from "@/components/Services/Services";
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
    </main>
  );
}
