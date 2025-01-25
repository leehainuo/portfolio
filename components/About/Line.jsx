"use client"

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

// interface GridLineProps {
//   direction: 'left-to-right' | 'right-to-left'
// }

export default function Line({ position,direction,lineType }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const interval = 10 // update every 10ms
    const steps = duration / interval
    let step = 0

    const timer = setInterval(() => {
      step++
      setProgress(step / steps)
      if (step >= steps) {
        clearInterval(timer)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [])

  // 根据lineType计算容器类和动画属性
  const containerStyles = lineType === 'Y'
  ? {
      className: `absolute ${position === "left" ? "left-[0%]" : "right-[0%]"} w-[1px] overflow-hidden
      -top-2 lg:top-0 xl:-top-6 h-[calc(100%+16px)] lg:h-[calc(100%+64px)] xl:h-[calc(100%-32px)] `,
      animate: { scaleY: 0 },
      style: { originY: direction === 'top-to-bottom' ? 0 : 1 }
    }
  : {
      className: `absolute ${position === "top" ? "top-[0%]" : "bottom-[0%]"} h-[1px] overflow-hidden
      -left-12 w-[calc(100%+100px)]`,
      animate: { scaleX: 0 },
      style: { originX: direction === 'left-to-right' ? 1 : 0 }
    };

  return (
    <div className={containerStyles.className}>
      <div
        className="h-full w-full"
        style={{
          backgroundColor: 'rgb(250 250 250)',
          backgroundImage: lineType === 'Y' 
            ? 'linear-gradient(to bottom, rgb(220 220 220) 50%, rgba(255,255,255,0) 0%)'
            : 'linear-gradient(to right, rgb(220 220 220) 50%, rgba(255,255,255,0) 0%)',
          backgroundPosition: 'right',
          backgroundSize: lineType === 'Y' 
            ? '1px 8px'  // 竖直虚线
            : '8px 1px', // 水平虚线
          backgroundRepeat: lineType === 'Y' ? 'repeat-y' : 'repeat-x',
        }}
      />
      <motion.div
        className="absolute top-0 left-0 w-full bg-white"
        style={{
          backgroundColor: 'rgb(250 250 250)',
          height: '100%',
          ...containerStyles.style,
        }}
        initial={lineType === 'Y' ? { scaleY: 1 } : { scaleX: 1 }}
        animate={containerStyles.animate}
        transition={{ duration: 1, ease: "linear" }}
      >
      </motion.div>
    </div>
  )
}
// // 竖直虚线，从上到下
// <Line position="left" direction="top-to-bottom" lineType="vertical" />

// // 竖直虚线，从下到上
// <Line position="right" direction="bottom-to-top" lineType="vertical" />

// // 水平虚线，从左到右
// <Line position="top" direction="left-to-right" lineType="horizontal" />

// // 水平虚线，从右到左
// <Line position="bottom" direction="right-to-left" lineType="horizontal" />