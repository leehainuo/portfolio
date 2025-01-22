"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const Photo = ({containerStyles, imageStyles, circleStyles, url}) => {
  return (
    <div className={`${containerStyles}`}>
            {/* Image */}
            <motion.div
            initial={{ opacity: 0}}
            animate={{opacity: 1}}
            transition={{ duration: 0.5, delay: 0.8}}
            // 这里的top以及left与crile不一致是因为图片本身的布局中 进行了微调  
            className={`${imageStyles}`}>
              <Image src={`${url}`} priority quality={100} fill
                alt="" className="object-contain" />
            </motion.div>
            {/* Crile */}
            <motion.svg
            className={`${circleStyles}`}
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg">
            <motion.circle cx="253" cy="253" r="220" 
              stroke="#71717a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" 
              initial={{strokeDasharray: "24 10 0 0"}}
              animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4, 250, 22, 22"],
                rotate: [120, 360]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse"
              }}/>
            </motion.svg>
    </div>
  )
}

export default Photo