'use client';
import React from 'react'
import { motion, Variants } from "framer-motion"

type MotionProps = {
  text: string;
  
};

const AnimatedText = ({ text }: MotionProps) => {
    const letters = Array.from(text);
    const container = {
        hidden: {opacity: 0},
        visible: (i=1) => ({
            opacity: 1,
            transition: {staggerChildren: 0.30, delayChildren: 0.04 * i},
        })
    }
    const child: Variants = {
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        },
        hidden: {
            opacity: 0,
            x: -20,
            y: 10,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            }
        }
    }
  return (
    <>
    <motion.div
    className="text-blue-900"
    style={{ overflow: "hidden", display: "flex", fontSize: "2rem"}}
    variants={container}
    initial = "hidden"
    animate = "visible"
    >
        {letters.map((letter, index) => (
            <motion.span variants={child} key={index} >
                {letter === " " ? "\u00A0" : letter}
            </motion.span>
        ))}

    </motion.div>
    </>
  )
}

export default AnimatedText