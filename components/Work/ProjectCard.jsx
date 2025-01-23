import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "@/components/ui/card";
import { Link2Icon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProjectCard = ({project}) => {
  return (
    <Card className="group overflow-hidden relative">
        <CardHeader className="p-0">
          <div className="flex justify-center items-center relative w-full h-[300px]
           bg-[#f7f7f7] dark:bg-[#1a1a1e]">
            {/* <Image
             className="absolute bottom-0"
             src="" alt=""
             width={247} height={250} /> */}
            <div className="w-[247px] h-[250px] absolute bottom-0
            flex justify-center items-center"></div>
            {/* Button Links */}
            <div>
              <Link
              href={project.link}
              className="flex justify-center items-center bg-secondary w-[54px] h-[54px]
                rounded-full scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100
                transition-all duration-200 ease-in-out">
                <Link2Icon />
              </Link>
            </div>
          </div>

        </CardHeader>
        <div className="h-full px-8 py-6">
          <Badge className="uppercase text-sm font-medium mb-2
           absolute top-4 left-5">{project.category}</Badge>
          <h1 className="text-xl font-semibold leading-none tracking-tight mb-1">{project.name}</h1>
          <p className="text-sm text-muted-foreground">{project.description}</p>
        </div>
    </Card>
  )
}

export default ProjectCard