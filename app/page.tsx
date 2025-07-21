import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../assets/logo.png'
import bg from '../assets/bg.jpg'

const Page = () => {
  return (
    <div className='relative w-full h-screen flex items-center justify-center'>
      {/* Background Image */}
      <Image
        src={bg}
        alt="Background"
        fill
      />

      {/* Overlay Content */}
      <div className='relative flex h-full w-full'>
        {/* Left Section */}
        <section className='w-1/2 flex  justify-center items-center px-12   '>
          <Image
            src={logo}
            alt='Product'
            className='w-[350px] rounded-xl object-cover'
          />
        </section>

        {/* Right Section (Optional content) */}
        <section className='w-1/2 flex flex-col justify-center items-center px-12 bg-black/25 text-white'>
          <h1 className="text-5xl font-bold mb-10">Welcome</h1>

          <div className="flex flex-col gap-6 w-full max-w-xs">
            {/* Doctor Button */}
            <Link href="/signin">
               <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-xl text-lg font-semibold shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-200">
                I'm a Doctor
              </button>
            </Link>

            {/* Admin Button */}
            <Link href="/signin">
              <button className="w-full px-6 py-3 bg-green-600 text-white rounded-xl text-lg font-semibold shadow-md hover:bg-green-700 hover:scale-105 transition-all duration-200">
                I'm an Administrator
              </button>
            </Link>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Page
