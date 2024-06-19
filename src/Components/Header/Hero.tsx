import React from 'react'
import Herovideo from "../../assets/HeroVideo.mp4"

function Hero() {
  return (
    <div className='w-full h-screen relative'>
     <video className="w-full h-full object-cover " src={Herovideo} autoPlay loop muted />
     <div className='absolute w-full h-full top-0 left-0 bg-black bg-opacity-50 '></div>
    <div className="absolute z-10 top-0 h-full text-white flex flex-col text-center justify-center items-center p-4">
      <h2 className=" text-2xl md:text-5xl font-bold py-2 sm:text-base">Your Starting Point For Furry Friendships!</h2>
      <p className="text-base md:text-2xl py-3 md:w-7/12">Start your journey into the wonderful world of dogs! Whether you're new to the dog world or a seasoned enthusiast,
        our team is here to guide you. Explore our range of premium breeds, expert services, and everything you need to 
        start your heartwarming adventure with a new furry family member."</p>
    </div>
    </div>
  )
}

export default Hero