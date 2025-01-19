import Link from "next/link";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Badge from "@/components/Badge";
import { Button } from "@/components/ui/button";

import { RiArrowDownSLine, RiMacbookFill, RiTodoFill, RiCodeSSlashFill } from "react-icons/ri";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh]">
        <div className="container mx-auto px-4 lg:px-10">
            <div className="flex justify-center gap-x-44">
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
                    <div>
                        <Link href='/contact' className="">
                            <Button className="text-base mb-8">
                                Contact me
                            </Button>
                        </Link> 
                    </div>
                    {/* Socials */}
                    <Socials
                     containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                     iconStyles="text-2xl hover:text-primary/80 transition-all" />
                </div>
                {/* Image */}
                <div className="hidden xl:flex relative">
                    {/* Badge One */}
                    <Badge
                      containerStyles="absolute top-[15%] -left-[7rem]"
                      icon={<RiMacbookFill />}
                      endCountNum={2}
                      badgeText="Years of Experience" />
                    {/* Badge Two */}
                    <Badge
                      containerStyles="absolute top-[85%] -left-[1rem]"
                      icon={<RiTodoFill />}
                      endCountNum={3}
                      badgeText="Finished Projects" />
                    {/* Badge Three */}
                    <Badge
                      containerStyles="absolute top-[50%] -right-[8rem]"
                      icon={<RiCodeSSlashFill />}
                      endCountNum={7}
                      badgeText="My Skills" />
                    {/* Photo */}
                    <Photo
                     containerStyles="w-full h-full relative"
                     imageStyles="w-[348px] h-[348px] absolute top-2"
                     circleStyles="w-[350px] h-[350px]" />
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