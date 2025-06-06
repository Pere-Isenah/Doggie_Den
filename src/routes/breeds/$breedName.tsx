import { createFileRoute } from '@tanstack/react-router';
import { useScrollToTop } from '../../hooks/useScrollToTop';
import { dogAboutUs } from '../../Components/BreedData';
import { FaPaw, FaHeart, FaDog, FaArrowLeft } from 'react-icons/fa';
import { IoShieldCheckmark } from "react-icons/io5";
import { IoIosHappy } from "react-icons/io";
import { FaHouseChimneyUser } from "react-icons/fa6";
import { CgGym } from "react-icons/cg";
import { ImScissors } from "react-icons/im";
import { PiPersonArmsSpreadFill } from "react-icons/pi";
import { FaInstagram, FaFacebook, FaTwitter, FaPinterest, FaArrowRight } from 'react-icons/fa';
import { useImageCarousel } from '../../hooks/useImageCarousel';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Link } from '@tanstack/react-router';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const Route = createFileRoute('/breeds/$breedName')({
  component: BreedPage,
});

function BreedPage() {
  const { breedName } = Route.useParams();
  const breed = dogAboutUs.find(breed => breed.name === breedName);
  const images = Array.isArray(breed?.image) ? breed.image : [breed?.image || ''];
  const { carouselRef, imagesRef } = useImageCarousel(images);

  useScrollToTop();

  // Add refs for elements we want to animate
  const mainContentRef = useRef(null);
  const titleRef = useRef(null);
  const tagsRef = useRef(null);
  const infoCardsRef = useRef(null);
  const characteristicsRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const careSectionRef = useRef(null);
  const careCardsRef = useRef(null);
  const footerContainerRef = useRef(null); // Add this ref with your other refs
  const backArrowRef = useRef(null); // Add with other refs

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      // Initial animations
      tl.fromTo(mainContentRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8 }
      )
        .fromTo(titleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.4"
        )
        .fromTo(tagsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.3"
        )
        .fromTo(backArrowRef.current,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.5 },
          "-=0.3"
        );

      // Scroll-triggered animations
      const scrollAnimations = [
        {
          trigger: infoCardsRef.current,
          elements: ".info-card",
          from: { opacity: 0, y: 30 },
          to: { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }
        },
        {
          trigger: characteristicsRef.current,
          elements: ".characteristic-card",
          from: { opacity: 0, scale: 0.8 },
          to: { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1 }
        },
        {
          trigger: aboutSectionRef.current,
          elements: aboutSectionRef.current,
          from: { opacity: 0, y: 50 },
          to: { opacity: 1, y: 0, duration: 0.8 }
        },
        {
          trigger: careSectionRef.current,
          elements: ".care-card",
          from: {
            y: 100,
            duration: 0.8,
            ease: "power2.out"
          },
          to: {
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out"
          }
        },
        {
          trigger: footerContainerRef.current,
          elements: ".footer-container",
          from: {
            x: '100%',
            duration: 1,
            ease: "power2.out"
          },
          to: {
            x: 0,
            duration: 1,
            ease: "power2.out"
          }
        }
      ];

      scrollAnimations.forEach(({ elements, from, to }) => {
        ScrollTrigger.batch(elements, {
          start: "top 90%", // Adjust this value to trigger the animation sooner
          onEnter: batch => gsap.fromTo(batch, from, to)
        });
      });
    });

    return () => ctx.revert(); // Clean up all GSAP animations
  }, [breed]);

  // Separate effect for hover animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = {
        ".characteristic-card": {
          enter: { scale: 1.05, duration: 0.3 },
          leave: { scale: 1, duration: 0.3 }
        },
        ".info-card": {
          enter: { y: -5, duration: 0.3 },
          leave: { y: 0, duration: 0.3 }
        },
        ".care-card": {
          enter: {
            y: -10,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
          },
          leave: {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          }
        },
        ".back-arrow": {
          enter: { x: -10, duration: 0.3, ease: "power2.out" },
          leave: { x: 0, duration: 0.3, ease: "power2.out" }
        }
      };

      Object.entries(cards).forEach(([selector, animation]) => {
        gsap.utils.toArray(selector).forEach((card) => {
          const element = card as HTMLElement;
          const enter = () => gsap.to(element, animation.enter);
          const leave = () => gsap.to(element, animation.leave);

          element.addEventListener("mouseenter", enter);
          element.addEventListener("mouseleave", leave);

          return () => {
            element.removeEventListener("mouseenter", enter);
            element.removeEventListener("mouseleave", leave);
          };
        });
      });
    });

    return () => ctx.revert(); // Clean up all GSAP animations and listeners
  }, []);

  return (
    <div>
      <div className="bg-primary-brown min-h-screen text-black pr-4 pb-1 pt-6">
      <div ref={backArrowRef} className="max-w-7xl mx-auto px-4">
      <Link 
        to="/"
        className="back-arrow group inline-flex items-center text-white hover:text-secondary-light-brown transition-colors"
      >
        <FaArrowLeft className="mr-2" />
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Back to Home
        </span>
      </Link>
    </div>
        {breed && (
            <div ref={mainContentRef} className="max-w-7xl relative h-full mx-auto grid md:grid-cols-2 gap-2 md:pb-0 pb-6">
            {/* Image Carousel */}
            <div ref={carouselRef} className="relative h-[300px] md:h-[600px] overflow-hidden rounded-lg">
              {images.map((img, index) => (
              <img
                key={index}
                ref={el => el && (imagesRef.current[index] = el)}
                src={img}
                alt={`${breed.name} ${index + 1}`}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              ))}
            </div>

            {/* Content Section */}
            <div className="space-y-8 md:pl-0 pl-4">
              {/* Title and Description */}
                <div ref={titleRef}>
                <h1 className="text-4xl font-bold mb-4 text-white md:text-left text-center">{breed.name}</h1>
                </div>

              {/* Location and Group Tags */}
                <div ref={tagsRef} className="flex gap-4 md:justify-start justify-center">
                <span className="bg-primary-dark-brown text-white px-4 py-2 rounded-full text-sm font-medium info-card">
                  Tibet
                </span>
                <span className="bg-primary-dark-brown text-white px-4 py-2 rounded-full text-sm font-medium info-card">
                  {breed.Group}
                </span>
                </div>

              {/* Info Cards Grid */}
              <div ref={infoCardsRef} className="grid grid-cols-2 gap-4">
                {breed.Size && (
                  <div className="info-card bg-primary-dark-brown rounded-2xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-white font-semibold">Size</span>
                    </div>
                    <p className="text-white text-sm">{breed.Size}</p>
                  </div>
                )}
                {breed.Lifespan && (
                  <div className="info-card bg-primary-dark-brown rounded-2xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-white font-semibold">Lifespan</span>
                    </div>
                    <p className="text-white text-sm">{breed.Lifespan}</p>
                  </div>
                )}
                {breed.Coat && (
                  <div className="info-card bg-primary-dark-brown rounded-2xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-white font-semibold">Coat</span>
                    </div>
                    <p className="text-white text-sm">{breed.Coat}</p>
                  </div>
                )}
                {/*Dog Color */}
                <div className="bg-primary-dark-brown rounded-2xl p-4 info-card">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-white font-semibold">Colors</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="w-6 h-6 rounded-full bg-white"></span>
                    <span className="w-6 h-6 rounded-full bg-gray-200"></span>
                    <span className="w-6 h-6 rounded-full bg-yellow-200"></span>
                    <span className="w-6 h-6 rounded-full bg-black"></span>
                  </div>
                </div>
              </div>

              {/* Breed Characteristics */}
              <div ref={characteristicsRef} className="h-full">
                <h2 className="text-2xl font-bold mb-4 text-white md:text-left text-center">Breed Characteristics</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                  {breed.characteristics?.slice(0, 6).map((characteristic, idx) => (
                    <div
                      key={idx}
                      className="characteristic-card flex flex-col items-center p-4 bg-white rounded-xl"
                    >
                      <div className="w-12 h-12 bg-primary-dark-brown rounded-full flex items-center justify-center mb-2">
                        {idx === 0 && <IoShieldCheckmark className="text-white text-xl" />}
                        {idx === 1 && <FaPaw className="text-white text-xl" />}
                        {idx === 2 && <FaHeart className="text-white text-xl" />}
                        {idx === 3 && <IoIosHappy className="text-white text-xl" />}
                        {idx === 4 && <FaDog className="text-white text-xl" />}
                        {idx === 5 && <FaHouseChimneyUser className="text-white text-xl" />}
                      </div>
                      <span className="text-primary-dark-brown text-sm font-medium text-center">{characteristic.name}</span>
                      <div className="flex mt-2">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full mx-1 ${i < characteristic.rating ? 'bg-primary-dark-brown' : 'bg-gray-400'}`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {breed && (
        <div className="p-16">
          {/* About Section */}
          <div ref={aboutSectionRef} className="text-center max-w-3xl mx-auto pb-10">
            <h2 className="text-3xl font-bold mb-6">About {breed.name}</h2>
            <p className="text-gray-600 leading-relaxed">{breed.description}</p>
          </div>

          {/* Care Information */}
          <div>
            <h2 ref={careSectionRef} className="text-3xl font-bold mb-6 text-center">
              Care Information
            </h2>
            <div ref={careCardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="care-card bg-primary-dark-brown p-4 rounded-lg flex flex-col items-center text-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-2">
                  <CgGym className="text-primary-dark-brown text-xl" />
                </div>
                <h3 className="font-semibold text-white">Exercise Needs</h3>
                <p className="text-white text-sm mt-2">
                  {breed.exerciseNeeds || 'High energy dogs requiring regular exercise'}
                </p>
              </div>
              <div className="care-card bg-primary-dark-brown p-4 rounded-lg flex flex-col items-center text-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-2">
                  <ImScissors className="text-primary-dark-brown text-xl" />
                </div>
                <h3 className="font-semibold text-white">Grooming</h3>
                <p className="text-white text-sm mt-2">
                  {breed.grooming || 'Regular grooming required to maintain coat health'}
                </p>
              </div>
              <div className="care-card bg-primary-dark-brown p-4 rounded-lg flex flex-col items-center text-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-2">
                  <PiPersonArmsSpreadFill className="text-primary-dark-brown text-xl" />
                </div>
                <h3 className="font-semibold text-white">Training</h3>
                <p className="text-white text-sm mt-2">
                  {breed.training || 'High energy dogs requiring regular exercise'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer Section */}
      <div ref={footerContainerRef} className="footer-container w-full bg-primary-dark-brown">
        <footer className="text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-xl font-bold">About Us</h3>
            <p className="text-sm text-gray-300">Doggie Den is your trusted partner in finding and caring for your perfect canine companion. We specialize in premium dog breeds and expert care services.</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
          <li className="flex items-center gap-2 text-gray-300 hover:text-white justify-center md:justify-start">
            <FaArrowRight className="text-xs" />
            <a href="/">Home</a>
          </li>
          <li className="flex items-center gap-2 text-gray-300 hover:text-white justify-center md:justify-start">
            <FaArrowRight className="text's" />
            <a href="#breeds">Our Breeds</a>
          </li>
          <li className="flex items-center gap-2 text-gray-300 hover:text-white justify-center md:justify-start">
            <FaArrowRight className="text-xs" />
            <a href="#services">Services</a>
          </li>
          <li className="flex items-center gap-2 text-gray-300 hover:text-white justify-center md:justify-start">
            <FaArrowRight className="text-xs" />
            <a href="#contact">Contact</a>
          </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-xl font-bold">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
          <p>123 Pet Street</p>
          <p>Dogtown, DG 12345</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@doggieden.com</p>
            </div>
          </div>

          {/* Follow Us */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-xl font-bold">Follow Us</h3>
            <div className="flex gap-4 justify-center md:justify-start">
          <a href="#" className="hover:text-secondary-light-brown">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="hover:text-secondary-light-brown">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="hover:text-secondary-light-brown">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="hover:text-secondary-light-brown">
            <FaPinterest size={24} />
          </a>
            </div>
          </div>
        </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
