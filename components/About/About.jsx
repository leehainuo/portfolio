import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RiUserLine, RiPhoneLine, RiMailLine, RiGraduationCapLine } from "react-icons/ri";
import { FiBriefcase } from "react-icons/fi";
import FloatingCircle from "../Test";
import Skills from "./Skills";


const infoData = [
    {
        icon: <RiUserLine />,
        text: "Lee Hainuo"
    },
    {
        icon: <RiPhoneLine />,
        text: "(+86) 173 3888 9216"
    },
    {
        icon: <RiGraduationCapLine />,
        text: "Bachelor of Computer Science"
    },
    {
        icon: <RiMailLine />,
        text: "lihainuo0502@gmail.com"
    }
]
const qualificationData = [
    {
        title: "experience",
        data: [
            {
                company: "ExampleOne",
                role: "Back - end Developer",
                years: "xxxx - Present"
            },
            {
                company: "ExampleTwo",
                role: "Front - end Developer",
                years: "xxxx - Present"
            },
        ]
    },
    {
        title: "education",
        data: [
            {
                university: "Example University",
                qualification: "Bachelor of Science",
                years: "2023 - Present"
            },
        ]
    },
]

const About = () => {

  const getData = (arr, title) => {
    return arr.find((item) => item.title === title)
  }

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
        <div className="container mx-auto">
          <h1 className="section-title text-center mb-8 xl:mb-16">About Me</h1>
          <div className="flex">
            {/* Image */}
            {/* <div className="hidden xl:flex flex-1 relative">
                  <div className="w-[505px] h-[505px] bg-no-repeat bg-about_shape_light dark:bg-about_shape_dark">
                    <div className="absolute w-[405px] h-[405px] top-4 left-1/2 -translate-x-1/2">
                        <Image src="/about.png" priority quality={100} fill
                         alt="" className="object-contain" />
                    </div>
                  </div>
            </div> */}
            {/* Tabs */}
            <div className="flex-1 text-center ">
                <Tabs defaultValue="personal">
                    <TabsList className="">
                        <TabsTrigger className="xl:w-36" value="personal">Personal Info</TabsTrigger>
                        <TabsTrigger className="xl:w-36" value="qualifications">Qualifications</TabsTrigger>
                        <TabsTrigger className="xl:w-36" value="skills">Skills</TabsTrigger>
                    </TabsList>
                    {/* Tabs Content */}
                    <div className="text-lg mt-12 xl:mt-8">
                        <TabsContent value="personal">
                            <div className="text-center ">
                                <h1 className="text-primary text-3xl font-bold mb-4">
                                    My Infos
                                </h1>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8">
                                    <div className="border rounded-md p-4">
                                        <h1 className="text-left text-primary text-3xl font-bold mb-4">
                                            Unmatched Service Quality
                                        </h1>
                                        <p className="text-left text-[#666] dark:text-[#a1a1a1] text-muted-foreground text-lg 
                                        max-w-[500px] mx-0 mb-4">
                                            I specialize in crafting intuitive websites with
                                            cutting-edge technology, delivering dynamic and engaging
                                            user experiences
                                        </p>
                                    </div>
                                    {/* InfoData */}
                                    <div className="flex flex-col xl:grid xl:grid-cols-2 gap-4 mb-10 font-medium
                                     border rounded-md p-4 pt-8 h-full">
                                        {infoData.map((item, index) => {
                                            return (
                                                <div
                                                key={index}
                                                className="flex items-center gap-x-4">
                                                    <div className="text-xl">{item.icon}</div>
                                                    <div className="text-base">{item.text}</div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>

                                {/* Languages */}
                                {/* <div className="flex flex-col gap-y-2">
                                    <div className="text-primary font-medium">Languages skills</div>
                                    <div className="border-b border-border"></div>
                                    <div className="text-[#666] dark:text-[#a1a1a1]">Chinese</div>
                                </div> */}
                            </div>
                        </TabsContent>
                        <TabsContent value="qualifications">
                            <div>
                                <h1 className="text-center text-primary text-3xl font-bold mb-4">
                                    My Awesome Journey
                                </h1>
                                {/* Experienxe & Education wrapper */}
                                <div className="grid md:grid-cols-2 gap-y-8 border rounded-md p-4 ">
                                    {/* Experience */}
                                    <div className="flex flex-col items-center gap-y-6 xl:items-start">
                                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                            <FiBriefcase size={24} />
                                            <h1 className="capitalize font-medium">
                                                {getData(qualificationData, "experience").title}
                                            </h1>
                                        </div>
                                        {/* List */}
                                        <div className="flex flex-col gap-y-8">
                                            {getData(qualificationData, "experience").data.map((item, 
                                             index) => {
                                                const {company, role, years} = item;
                                                return (
                                                    <div className="flex gap-x-8 group" key={index}>
                                                        {/* Line & Cricle */}
                                                        <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                            <div className="w-[11px] h-[11px] rounded-full bg-primary absolute
                                                             -left-[5px] group-hover:translate-y-20 transition-all duration-500" />
                                                        </div>
                                                        {/* Info */}
                                                            <div>
                                                            <div className="font-semibold text-xl leading-none mb-2">
                                                                {company}
                                                            </div>
                                                            <div className="text-lg leading-none text-muted-foreground mb-4">
                                                                {role}
                                                            </div>
                                                            <div className="text-base font-medium">
                                                                {years}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    {/* Education */}
                                    <div className="flex flex-col items-center gap-y-6 xl:items-start">
                                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                            <RiGraduationCapLine size={24} />
                                            <h1 className="capitalize font-medium">
                                                {getData(qualificationData, "education").title}
                                            </h1>
                                        </div>
                                        {/* List */}
                                        <div className="flex flex-col gap-y-8">
                                            {getData(qualificationData, "education").data.map((item, 
                                             index) => {
                                                const {university, qualification, years} = item;
                                                return (
                                                    <div className="flex gap-x-8 group" key={index}>
                                                        {/* Line & Cricle */}
                                                        <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                            <div className="w-[11px] h-[11px] rounded-full bg-primary absolute
                                                             -left-[5px] group-hover:translate-y-20 transition-all duration-500" />
                                                        </div>
                                                        {/* Info */}
                                                            <div>
                                                            <div className="font-semibold text-xl leading-none mb-2">
                                                                {university}
                                                            </div>
                                                            <div className="text-lg leading-none text-muted-foreground mb-4">
                                                                {qualification}
                                                            </div>
                                                            <div className="text-base font-medium">
                                                                {years}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills">
                            <div className="text-center">
                                <h1 className="text-primary text-3xl font-bold mb-4">
                                    Tools I Use Everyday
                                </h1>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8">
                                <div className="border rounded-md p-4">
                                    <h1 className="text-xl font-semibold mb-2">Skills</h1>
                                    <div className="border-b border-border w-full"></div>
                                    {/* Skill List */}
                                    <div className="flex flex-col gap-y-4 my-4">
                                    <Skills type="Font-end Development" />
                                    <Skills type="Back-end Devlopment" />
                                    </div>
                                </div>
                                <div className="border rounded-md p-4">
                                    <h1 className="text-xl font-semibold mb-2">Tools</h1>
                                    <div className="border-b border-border w-full mb-4"></div>
                                    <Skills type="tools" />
                                </div>

                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
          </div>
        </div>
    </section>
  )
}

export default About