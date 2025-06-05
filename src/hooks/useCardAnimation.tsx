import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useCardAnimation = () => {
  useEffect(() => {
    // Delay the animation setup slightly to ensure DOM elements are ready
    const timer = setTimeout(() => {
      const cards = document.querySelectorAll('.breed-card');
      
      if (cards.length > 0) {
        cards.forEach((card, index) => {
          // Set initial state
          gsap.set(card, {
            opacity: 0,
            y: 100,
            rotationX: 5
          });

          gsap.to(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top bottom-=100',
              end: 'bottom center',
              toggleActions: 'play none none reverse',
            },
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 1,
            delay: index * 0.2,
            ease: 'power3.out'
          });
        });
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};