'use client'

import ProjectCard from '@/components/Work/ProjectCard'

import { useState } from 'react'
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs'


// 项目数据
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
      category: "next js",
      name: "Project 2",
      description: "Description 2",
      link: "/"
  },
  {
      image: "",
      category: "react js",
      name: "Project 3",
      description: "Description 3",
      link: "/"
  },
  {
      image: "",
      category: "vue js",
      name: "Project 4",
      description: "Description 4",
      link: "/"
  },
  {
      image: "",
      category: "vue js",
      name: "Project 5",
      description: "Description 5",
      link: "/"
  }
]
// 解构出所有标签
const uniqueCategories = ['all projects', ...new Set(projectsData.map(item=> item.category))]


const Projects = () => {

  const [category, setCategory] = useState("all projects")

  //通过标签过滤项目
  const filteredProjects = projectsData.filter((project) => {
    return category === 'all projects'
    ? project
    : project.category === category
  })

  return (
    <section className="min-h-screen pt-12">
        <div className="container mx-auto">
          <h1 className="section-title text-center mb-8 xl:mb-16">My Projects</h1>
          {/* Tabs */}
          <Tabs defaultValue="all projects" className="flex flex-col mb-24 xl:mb-48">
            <TabsList className="w-fit self-center">
              {/* 从解构出来的标签遍历 */}
              {uniqueCategories.map((category, index) => {
                return (
                    <TabsTrigger
                     onClick={() => setCategory(category)}
                     key={index} value={category}
                     className="capitalize w-auto lg:w-[162px]">
                      {category}
                    </TabsTrigger>
                )
              })}
            </TabsList>
            {/* TabsContent */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 text-lg mt-12 xl:mt-8">
              {filteredProjects.map((project, index) => {
                return (
                  <TabsContent value={category} key={index}>
                    <ProjectCard project={project} />
                  </TabsContent>
                )
              })}
            </div>
          </Tabs>
        </div>
    </section>
  )
}

export default Projects