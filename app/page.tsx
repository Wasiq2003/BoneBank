'use client';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../assets/logo.png'
import bg from '../assets/bg.jpg'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' as const }
  }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5
    }
  }
};

const Page = () => {
  const router = useRouter();


  return (
    <div className='relative w-full h-screen flex items-center justify-center overflow-hidden'>
      {/* Background Image */}
      <Image
        src={bg}
        alt="Background"
        fill
      />

      {/* Overlay Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className='relative flex h-full w-full'
      >
        {/* Left Section */}
        <motion.section
          className='w-1/2 flex justify-center items-center px-12'
          initial={{ scale: 0.5, rotate: -10, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <Image
            src={logo}
            alt='logo'
            className='w-[350px] rounded-xl object-cover'
          />
        </motion.section>

        {/* Right Section */}
        <motion.section
          className='w-1/2 flex flex-col justify-center items-center px-12 bg-black/25 text-white'
          variants={fadeInUp}
        >
          <h1 className="text-5xl font-bold mb-10">Welcome</h1>

          <motion.div
            className="flex flex-col gap-6 w-full max-w-xs"
            variants={fadeInUp}
          >
            {/* Doctor Button */}

            <motion.button
              onClick={() => router.push('/signin')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-xl text-lg font-semibold shadow-md hover:bg-blue-700 transition-all duration-200"
            >

              I'm a Doctor
            </motion.button>


            {/* Admin Button */}
            <motion.button
              onClick={() => router.push('/signin')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 bg-green-600 text-white rounded-xl text-lg font-semibold shadow-md hover:bg-green-700 transition-all duration-200"
            >
              I'm an Administrator
            </motion.button>

          </motion.div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default Page;
