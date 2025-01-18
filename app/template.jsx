'use client'

import { motion } from "framer-motion";

const Template = ({children}) => {
    return (
        <motion.div
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         transition={{type: "linear",delay: 0.2, duration: 0.4}}
         >
        {children}
        </motion.div>
    )
}

export default Template;

