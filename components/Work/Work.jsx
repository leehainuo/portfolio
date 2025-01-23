'use client'
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";

// import Swiper
import 'swiper/css';
import 'swiper/css/pagination';
// import Swiper core and required modules
import { Pagination } from 'swiper/modules';
// import Swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

const projectsData = [
    {
        image: "",
        category: "react js",
        name: "Project 1",
        description: "Description 1",
        link: "/"
    },
    {
        image: "",
        category: "react js",
        name: "Project 2",
        description: "Description 2",
        link: "/"
    },
    {
        image: "",
        category: "Vue js",
        name: "Project 3",
        description: "Description 3",
        link: "/"
    },
    {
        image: "",
        category: "Vue js",
        name: "Project 4",
        description: "Description 4",
        link: "/"
    }
]

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
        <div className="container mx-auto">
            {/* Text */}
            <div className="flex flex-col justify-center items-center max-w-[400px] mx-auto text-center  mb-12
            xl:mb-0 xl:h-[400px] xl:mx-0 xl:items-start xl:text-left">
                <h1 className="section-title mb-4">Latest Projects</h1>
                <p className="text-muted-foreground mb-8">Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit.</p>
                <Link href="/projects">
                    <Button>All Projects</Button>
                </Link>  
            </div>
            {/* Slider */}
            <div className="xl:max-w-[calc(100%-40vw)] xl:absolute right-0 top-0">
                <Swiper
                className="h-[480px]"
                slidesPerView={1}
                breakpoints={{
                    640: {slidesPerView: 2},
                }}
                spaceBetween={30}
                modules={[Pagination]}
                pagination={{clickable: true}}
                >
                    {/* Show new projects num:4 */}
                    {projectsData.slice(0, 4).map((project, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <ProjectCard project={project} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Work