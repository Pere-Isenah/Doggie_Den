import React from 'react'
import grommerPic from "../assets/Images/grommer.png"

const Grooming = () => {
  return (
    <div className="bg-primary-green grid grid-cols-5">
    <img className="h-72 w-96 md:h-[30rem] md:w-[35rem] col-span-2"src={grommerPic} alt="image"/>
    <div className="col-span-3  grid content-center text-center">
      <h2 className="text-2xl md:text-6xl font-bold p-3">Top Quality Gromming Services</h2>
      <p className="text-xl p-2">get your dog looking all good and clean</p>
      <div className="p-4">
      <button className="bg-primary-black rounded-md p-2 w-32 md:w-40 md:p-4 text-white">Book Now</button>
      </div>
    </div>
    </div>
  )
}

export default Grooming