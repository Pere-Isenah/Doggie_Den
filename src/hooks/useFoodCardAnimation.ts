import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useFoodCardAnimation = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animations for cards
      gsap.fromTo('.food-card',
        { 
          y: 60,
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.food-card',
            start: 'top bottom-=100',
          }
        }
      );

      // Hover animations
      const cards = gsap.utils.toArray('.food-card');
      cards.forEach((card) => {
        const element = card as HTMLElement;
        
        element.addEventListener('mouseenter', () => {
          if (!element.classList.contains('expanded')) {
            gsap.to(element, {
              y: -10,
              scale: 1.02,
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              duration: 0.3,
              ease: 'power2.out'
            });
          }
        });

        element.addEventListener('mouseleave', () => {
          if (!element.classList.contains('expanded')) {
            gsap.to(element, {
              y: 0,
              scale: 1,
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              duration: 0.3,
              ease: 'power2.out'
            });
          }
        });
      });
    });

    return () => ctx.revert();
  }, []);
};