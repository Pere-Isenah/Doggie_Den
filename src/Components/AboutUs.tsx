import React from 'react'
import AboutUsPic from "../assets/Images/aboutUs.jpeg"
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutUs = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen flex bg-primary-brown items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative animate-on-scroll">
            <img 
              src={AboutUsPic} 
              alt="Two happy dogs running" 
              className="w-full h-[600px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div className="space-y-8 animate-on-scroll animate-horizontal">
            <h2 className="text-5xl font-bold text-gray-100">
              ABOUT US
            </h2>
            <div className="space-y-6">
              <p className="text-gray-100 text-lg leading-relaxed">
                At Doggie Den, we are passionate about all things canine. 
                Specializing in breeding top-notch purebred dogs, we take pride 
                in raising healthy, well-tempered puppies that make wonderful 
                companions.
              </p>
              <p className="text-gray-100 text-lg leading-relaxed">
                Our dedication to excellence extends beyond breeding; we offer a 
                full range of grooming services to keep your dogs looking their 
                best and comprehensive veterinary care to ensure their ongoing 
                health and happiness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs