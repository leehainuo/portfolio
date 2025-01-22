'use client'
// Components
import Link from "next/link";
import ThemeToggler from "@/components/ThemeToggler";
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";
import { useState, useEffect } from "react";


const Header = () => {

  const [header, setHeader] = useState(false);
  useEffect(() => {                       
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    return () => {
      window.removeEventListener('scroll', scrollYPos);
    }
  }, []);

  return (
    <header className={`sticky top-0 z-30 transition-all bg-background
     ${header ? 'py-4 border-b' : 'py-4'}`}>
      <div className="px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            {/* 自定义字体渐变 */}
            <h1 className="text-3xl font-semibold -tracking-wider">
              Portfolio.
            </h1>
          </Link>
          {/* Nav */}
          <div className="hidden lg:flex xl:flex items-center gap-x-6">
            <Nav
             linkStyles="relative hover:text-primary transition-all text-sm"
             underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler/>   
          </div>
          {/* Mobile Nav */}
          <div className="lg:hidden xl:hidden">
            <MobileNav/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header