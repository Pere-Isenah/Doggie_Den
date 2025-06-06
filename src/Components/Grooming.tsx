import { Link } from 'react-scroll';
import grommerPic from "../assets/Images/grommer.webp"
import { FaCertificate, FaHeart } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import { PiPawPrintFill } from 'react-icons/pi';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Grooming = () => {
  useScrollAnimation();
  
  return (
    <div className="bg-primary-green min-h-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8">
        {/* Left Column - Image */}
        <div className="rounded-2xl overflow-hidden shadow-xl animate-on-scroll">
          <img 
            className="w-full h-[600px] object-cover"
            src={grommerPic} 
            alt="Professional pet grooming"
          />
        </div>

        {/* Right Column - Content */}
        <div className="space-y-8 animate-on-scroll animate-horizontal">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-black">
              Professional Pet Grooming Services
            </h2>
            <p className="text-xl text-gray-100">
              Give your furry friend the care they deserve
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-white p-3 rounded-lg">
                <FaCertificate className="text-2xl text-primary-black" />
              </div>
              <span className="text-gray-100">Certified groomers</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-white p-3 rounded-lg">
                <MdVerified className="text-2xl text-primary-black" />
              </div>
              <span className="text-gray-100">Premium products</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-white p-3 rounded-lg">
                <FaHeart className="text-2xl text-primary-black" />
              </div>
              <span className="text-gray-100">Stress-free environment</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-white p-3 rounded-lg">
                <PiPawPrintFill className="text-2xl text-primary-black" />
              </div>
              <span className="text-gray-100">Customized care</span>
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
              <button className="bg-primary-black text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Grooming