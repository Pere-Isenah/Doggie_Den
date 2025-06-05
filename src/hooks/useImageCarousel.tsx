import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useImageCarousel = (images: string[], duration = 3) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    if (!carouselRef.current || images.length <= 1) return;

    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(imagesRef.current.slice(1), { 
        xPercent: 100,
        opacity: 0 
      });
      gsap.set(imagesRef.current[0], { 
        xPercent: 0,
        opacity: 1 
      });

      // Create the carousel animation
      const tl = gsap.timeline({ repeat: -1 });
      
      // Loop through images
      for (let i = 0; i < images.length; i++) {
        const currentImage = imagesRef.current[i];
        const nextImage = imagesRef.current[(i + 1) % images.length];
        
        tl
          .to(currentImage, {
            xPercent: -100,
            opacity: 0,
            duration: 1.5,
            ease: "power2.inOut"
          })
          .to(nextImage, {
            xPercent: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power2.inOut"
          }, "<") // Start at the same time
          .to({}, { duration }); // Pause between transitions
      }
    }, carouselRef);

    return () => ctx.revert();
  }, [images, duration]);

  return { carouselRef, imagesRef };
};