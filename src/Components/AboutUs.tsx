import React from 'react'
import AboutUsPic from "../assets/Images/aboutUs.jpeg"

const AboutUs = () => {
  return (
    <div className="bg-primary-brown  content-center text-center px-3 pt-8 text-white">
      <h2 className="py-4 font-bold text-3xl">ABOUT US</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-16 pt-10'>
      <div className="p-4 md:col-span-1 grid place-content-center">
      <p className="text-base px-16 text-center md:text-xl">At Your Doggie Den, we are passionate about all things canine. Specializing in breeding top-notch purebred dogs, we take pride in raising healthy, well-tempered puppies that make wonderful companions. Our dedication to excellence extends beyond breeding; we offer a full range of grooming services to keep your dogs looking their best and comprehensive veterinary care to ensure their ongoing health and happiness. With a team of experienced professionals committed to the highest standards of care, Doggie Den is your trusted partner in all aspects of your dog's life.</p>
      </div>
      <div className='md:col-span-1'>
        <img src={AboutUsPic} alt="aboutUs" />
      </div>
    </div>
    </div>
  )
}

export default AboutUs