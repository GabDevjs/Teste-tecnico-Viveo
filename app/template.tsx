"use client"
import { LazyMotion, domAnimation, motion } from "framer-motion"

const variants = {
  hidden: { opacity: 0, x: 0, y: 0, transition: { duration: 0.5 } },
  enter: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5 } },
}

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      <motion.main
        initial="hidden"
        animate="enter"
        variants={variants}
        className="flex flex-col items-center justify-center w-full min-h-screen bg-background text-foreground"
        
      >
        {children}
      </motion.main>
    </LazyMotion>
  )
}