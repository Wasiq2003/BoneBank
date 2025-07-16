import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div className="flex flex-col gap-6 h-screen w-full items-center justify-center bg-[#f7f0e8]">
      <h1 className="text-5xl font-bold text-gray-800">Home</h1>


      <button className="px-6 py-3 bg-red-600 text-white rounded-xl text-lg font-semibold shadow-md hover:bg-red-700 hover:scale-105 transition-all duration-200">
        <Link href="/home" >
          Let's Go
        </Link>
      </button>

    </div>
  )
}

export default Page