'use client'
import { motion } from 'framer-motion';

const FloatingCircle = ({styles}) => {
  return (
    <div className={`absolute ${styles}`}>
      <motion.svg
         className="w-32 h-32"
         viewBox="0 0 200 200"
         xmlns="http://www.w3.org/2000/svg" >
            <motion.circle
             cx="100"
             cy="100"
             r="75"
             initial={{ y: 0 }}
             animate={{
                y: [-10, 10]  // 在 -10px 和 10px 之间上下移动
             }}
             transition={{
                duration: 2,  // 动画持续2秒
                repeat: Infinity,  // 无限循环
                repeatType: "reverse",  // 来回移动
                ease: "easeInOut"  // 缓动效果，使动画更自然
             }}
        className="bg-primary"/>
        </motion.svg> 
    </div>
 
  );
}

export default FloatingCircle;