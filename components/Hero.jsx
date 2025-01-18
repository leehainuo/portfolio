import Link from "next/link";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import { Button } from "@/components/ui/button";

import { RiArrowDownSLine } from "react-icons/ri";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh]">
        <div className="container mx-auto px-4 lg:px-10">
            <div className="flex justify-center gap-x-32">
                {/* Text */}
                <div className="flex flex-col justify-center mx-auto xl:mx-0 max-x-[600px]
                 text-center xl:text-left">
                    <div className="PrimaryTitle mb-8">The Web Developer</div>
                    <h1 className="text-[#ccc] text-lg font-bold">
                        Hello, my name is <span className="text-primary">Lee Hainuo</span>
                    </h1>
                    <p className="text-[#666] dark:text-[#a1a1a1] text-muted-foreground text-lg mb-8
                     max-w-[490px] mx-auto xl:mx-0">
                        Brief description with insights into myself, my vocational 
                        journey, and what I engage in professionally.
                    </p>
                    {/* Button */}
                    <Link href='/contact'>
                    <Button className="text-base">
                        Contact me
                    </Button>
                    </Link>
                    {/* Socials */}
                    <Socials/>
                </div>
                {/* Image */}
                <div className="hidden xl:flex relative">
                    <Photo />
                </div>
            </div>
            {/* Icon */}
            <div className="hidden md:flex absolute left-1/2 bottom-44 xl:bottom-12
             animate-bounce">
                <RiArrowDownSLine className="text-3xl text-primary" />
            </div>
        </div>
    </section>
  )
}

export default Hero