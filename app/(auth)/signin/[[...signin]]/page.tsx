'use client'

import Image from 'next/image'
import React from 'react'
import logo from '../../../../assets/logo.png'
import bg from '../../../../assets/bg.jpg'
import AnimatedText from '@/components/animation/animatedText'
import { SignIn } from '@clerk/nextjs'
import { motion } from 'framer-motion'

const page = () => {
  return (
    <motion.div
      className="relative min-h-screen w-screen bg-black"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { duration: 1, ease: 'easeOut' } }}
      exit={{ x: 100, opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
    >
      {/* Background Image */}
      <Image
        src={bg}
        alt="Background"
        fill
      />
      {/* Content Overlay */}
      <div className="flex min-h-screen relative">
        {/* Left Side */}
        <div className="w-1/2 flex flex-col items-center pt-2">
          <Image src={logo} alt="Logo" className="w-50" />
          <h1 className="text-3xl font-bold text-center leading-snug pt-12">
            Welcome to <br />
            <AnimatedText text="BONE BANK MODULE!" />
          </h1>
        </div>
        {/* Right Side */}
        <div className="w-1/2 flex justify-center pt-5 pb-5 px-4 items-center bg-black/25">
          <SignIn />
        </div>
      </div>
    </motion.div>
  )
}

export default page
