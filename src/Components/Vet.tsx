import React from 'react';
import { Link } from 'react-scroll';
import VetPic from "../assets/Images/vet.jpg";
import { FaPlus, FaShieldAlt, FaSyringe, FaAmbulance } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Vet = () => {
  useScrollAnimation();

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-on-scroll">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
                Exceptional Veterinary Care
              </h2>
              <h3 className="text-3xl lg:text-4xl text-gray-600">
                For Your Furry Friends
              </h3>
            </div>

            <p className="text-gray-600 text-lg">
              At Doggie Den, we pride ourselves on providing top-notch veterinary care 
              for your beloved pets. Our experienced team is dedicated to ensuring the 
              health and well-being of your furry friends, offering comprehensive 
              services tailored to meet their unique needs.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
              <div className="bg-primary-dark-brown p-3 rounded-lg">
                <FaPlus className="text-white text-xl" />
              </div>
              <span className="text-gray-700">Routine Check-ups</span>
              </div>
              
              <div className="flex items-center gap-3">
              <div className="bg-primary-dark-brown p-3 rounded-lg">
                <FaShieldAlt className="text-white text-xl" />
              </div>
              <span className="text-gray-700">Advanced Medical Care</span>
              </div>
              
              <div className="flex items-center gap-3">
              <div className="bg-primary-dark-brown p-3 rounded-lg">
                <FaSyringe className="text-white text-xl" />
              </div>
              <span className="text-gray-700">Preventive Services</span>
              </div>
              
              <div className="flex items-center gap-3">
              <div className="bg-primary-dark-brown p-3 rounded-lg">
                <FaAmbulance className="text-white text-xl" />
              </div>
              <span className="text-gray-700">Emergency Support</span>
              </div>
            </div>

            <div className="mt-4">
              <Link
                to="ContactUs"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <button className="bg-primary-dark-brown text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
                  Book Appointment
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl animate-on-scroll animate-horizontal">
            <img 
              src={VetPic} 
              alt="Veterinarian caring for a pet" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vet;