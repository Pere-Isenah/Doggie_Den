import { useEffect, useRef, useState, FormEvent } from 'react';
import ContactUsPic from "../assets/Images/contactUsPic.webp";
import { FaInstagram } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactUs = () => {
  const containerRef = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate left column items
      const leftItems = gsap.utils.toArray('.left-animate');
      leftItems.forEach((item) => {
        gsap.from(item as HTMLElement, {
          scrollTrigger: {
            trigger: item as Element,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2
        });
      });

      // Animate right column (form)
      gsap.from(rightColumnRef.current, {
        scrollTrigger: {
          trigger: rightColumnRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 0.8
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowModal(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Add Modal component
  const ThankYouModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-primary-black">Thank You!</h3>
        </div>
        <p className="text-gray-600">
          Thank you {formData.name} for contacting Doggie Den! We'll get back to you soon.
        </p>
        <button
          onClick={() => setShowModal(false)}
          className="mt-6 w-full bg-primary-black text-white py-2 rounded-lg hover:bg-opacity-90 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-primary-green p-8 pt-20">
      <div 
        ref={containerRef}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div ref={leftColumnRef} className="text-left left-animate">
          <h2 className="text-4xl font-bold mb-2 text-white ">Get in Touch</h2>
          <p className="text-lg mb-8 text-white left-animate">We're here to help with all your pet care needs</p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-white p-3 rounded-lg">
                <MdMailOutline className="text-2xl text-primary-black" />
              </div>
              <div className="text-white">
                <p className="font-medium">Email</p>
                <p>doggieden@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-white p-3 rounded-lg">
                <FaPhone className="text-2xl text-primary-black" />
              </div>
              <div className="text-white">
                <p className="font-medium">Phone</p>
                <p>+1 015 363 8493</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-white p-3 rounded-lg">
                <FaLocationDot className="text-2xl text-primary-black" />
              </div>
              <div className="text-white">
                <p className="font-medium">Location</p>
                <p>123 Paw Street, Pet City</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <a href="#" className="bg-primary-black p-2 rounded-full hover:bg-opacity-90">
              <FaInstagram className="text-white text-xl" />
            </a>
            <a href="#" className="bg-primary-black p-2 rounded-full hover:bg-opacity-90">
              <FaPhone className="text-white text-xl" />
            </a>
            <a href="#" className="bg-primary-black p-2 rounded-full hover:bg-opacity-90">
              <MdMailOutline className="text-white text-xl" />
            </a>
          </div>

          <div className="mt-8">
            <img 
              src={ContactUsPic} 
              alt="Contact Us" 
              className="w-auto h-auto"
            />
          </div>
        </div>

        <div ref={rightColumnRef} className="bg-white rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-primary-black">Send us a message</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm mb-1 text-gray-600">Your Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="John Doe"
                required
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary-black focus:border-primary-black"
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-gray-600">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@example.com"
                required
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary-black focus:border-primary-black"
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-gray-600">Phone Number</label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+1 (555) 000-0000"
                required
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary-black focus:border-primary-black"
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-gray-600">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="How can we help you?"
                rows={4}
                required
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary-black focus:border-primary-black"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-primary-black text-white py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      {showModal && <ThankYouModal />}
    </div>
  );
};

export default ContactUs;