import Link from "next/link";
import Socials from "@/components/Hero/Socials";
import Photo from "@/components/Hero/Photo";
import Badge from "@/components/Hero/Badge";
import { Button } from "@/components/ui/button";

import { RiArrowDownSLine, RiMacbookFill, RiTodoFill, RiCodeSSlashFill } from "react-icons/ri";

const Hero = () => {
  return (
    <section className="py-12 lg:py-24 h-[500px] lg:h-[700px] overflow-hidden
     bg-hero_background_light dark:bg-hero_background_dark bg-no-repeat bg-bottom">
        <div className="container mx-auto px-4 lg:px-10 ">
            <div className="flex flex-col lg:flex-row justify-center gap-x-44">
                {/* Text */}
                <div className="flex flex-col justify-center mx-auto lg:mx-0 max-x-[600px]
                 text-center lg:text-left">
                    <div className="primary-title mb-8">The Web Developer</div>
                    <h1 className="text-[#ccc] text-lg font-bold">
                        Hello, my name is <span className="text-primary">Lee Hainuo</span>
                    </h1>
                    <p className="text-muted-foreground text-lg mb-8
                     max-w-[490px] mx-auto lg:mx-0">
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
                     containerStyles="flex gap-x-6 mx-auto lg:mx-0"
                     iconStyles="text-2xl hover:text-primary/80 transition-all" />
                </div>
                {/* Image */}
                <div className="hidden lg:flex relative">
                    {/* Badge One */}
                    <Badge
                      containerStyles="absolute top-[15%] -left-[7rem]"
                      icon={<RiMacbookFill />}
                      endCountNum={2}
                      badgeText="Years of Experience" />
                    {/* Badge Two */}
                    <Badge
                      containerStyles="absolute top-[72%] xl:top-[85%] -left-[1rem]"
                      icon={<RiTodoFill />}
                      endCountNum={3}
                      badgeText="Finished Projects" />
                    {/* Badge Three */}
                    <Badge
                      containerStyles="absolute top-[40%] xl:top-[50%] -right-[8rem]"
                      icon={<RiCodeSSlashFill />}
                      endCountNum={7}
                      badgeText="My Skills" />
                    {/* Photo */}
                    <Photo
                     containerStyles="w-full h-full relative"
                     imageStyles="w-[298px] h-[298px] xl:w-[348px] xl:h-[348px] absolute top-2"
                     url="/photo.png"
                     circleStyles="w-[290px] h-[290px] xl:w-[350px] xl:h-[350px]" />
                </div>
            </div>
            {/* Icon */}
            <div className="hidden xl:flex absolute left-[calc(50%-1rem)] bottom-44
             animate-bounce">
                <RiArrowDownSLine className="text-3xl text-primary" />
            </div>
        </div>
    </section>
  )
}

export default Hero