"use client";
import { motion } from "framer-motion";
import {
  RiNextjsFill,
  RiReactjsFill,
  RiVuejsFill,
  RiTailwindCssFill,
  RiHtml5Fill,
  RiJavaFill,
  RiJavascriptFill,
} from "react-icons/ri";
import { SiSpring, SiFigma, SiIntellijidea } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { useState, useEffect } from "react";


const skillData = [
  {
    title: "Font-end Development",
    data: [
      {
        name: "Next.js",
        icon: <RiNextjsFill size={55} />,
      },
      {
        name: "React",
        icon: <RiReactjsFill size={55} />,
      },
      {
        name: "Vue",
        icon: <RiVuejsFill size={55} />,
      },
      {
        name: "TailwindCSS",
        icon: <RiTailwindCssFill size={55} />,
      },
      {
        name: "HTML",
        icon: <RiHtml5Fill size={55} />,
      },
    ],
  },
  {
    title: "Back-end Devlopment",
    data: [
      {
        name: "Spring",
        icon: <SiSpring size={55} />,
      },
      {
        name: "Java",
        icon: <RiJavaFill size={55} />,
      },
      {
        name: "JavaScript",
        icon: <RiJavascriptFill size={55} />,
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        name: "Figma",
        icon: <SiFigma size={55} />,
      },
      {
        name: "Vscode",
        icon: <VscVscode size={55} />,
      },
      {
        name: "IntellijIDEA",
        icon: <SiIntellijidea size={55} />,
      },
    ],
  },
];

const Skills = ({type}) => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  // 使用 useState 和 useEffect 来处理屏幕宽度
  const [isXlScreen, setIsXlScreen] = useState(false);

  useEffect(() => {
    // 初始检查
    setIsXlScreen(window.innerWidth >= 1280);

    // 添加窗口大小变化监听
    const handleResize = () => {
      setIsXlScreen(window.innerWidth >= 1280);
    };

    window.addEventListener('resize', handleResize);
    
    // 清理监听器
    return () => window.removeEventListener('resize', handleResize);
  }, []);  

  return (
    <div className="grid grid-cols-3 gap-4 xl:flex xl:gap-x-4">
      {getData(skillData, type).data.map((item, index) => {
        const { name, icon } = item;
        return (
          <motion.div
            className="flex items-center border rounded-md gap-x-2 overflow-hidden"
            initial={{ width: 80 }}
            whileHover={isXlScreen ? {
              width: 210,
              scale: 1.05,
              boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
            } : {}}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            key={index} >
              <div className="p-3">
                {icon}
              </div>
              <motion.span
               className="text-primary font-medium"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{
                duration: 0.3,
                ease: "easeInOut"
               }}>
                {name}
              </motion.span>   
          </motion.div>
        );
      })}
    </div>
  );
};

export default Skills;
