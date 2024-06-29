import React from 'react'
import AboutUsPic from "../assets/Images/aboutUs.jpeg"

const AboutUs = () => {
  return (
    <div className="bg-primary-brown grid grid-cols-1 content-center text-center px-3 text-white">
      <div className="p-4">
      <h2 className="py-4 font-bold text-3xl">ABOUT US</h2>
      <p className="text-base">At Your Doggie Den, we are passionate about all things canine. Specializing in breeding top-notch purebred dogs, we take pride in raising healthy, well-tempered puppies that make wonderful companions. Our dedication to excellence extends beyond breeding; we offer a full range of grooming services to keep your dogs looking their best and comprehensive veterinary care to ensure their ongoing health and happiness. With a team of experienced professionals committed to the highest standards of care, [Your Business Name] is your trusted partner in all aspects of your dog's life.</p>
      </div>
      <div>
        <img src={AboutUsPic} alt="aboutUs" />
      </div>
    </div>
  )
}

export default AboutUs