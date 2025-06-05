import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const animateFrom = (elem: Element, direction: number, isHorizontal: boolean = false) => {
        const htmlElem = elem as HTMLElement;
        
        // Set initial state
        if (isHorizontal) {
          gsap.set(htmlElem, {
            opacity: 0,
            x: 100,
            rotationY: 5
          });
        } else {
          gsap.set(htmlElem, {
            opacity: 0,
            y: direction * 100,
            rotationX: 5
          });
        }
        
        // Animation configuration with split timing for opacity and movement
        gsap.to(htmlElem, {
          scrollTrigger: {
            trigger: htmlElem,
            start: 'top bottom-=100',
            end: 'bottom center',
            toggleActions: 'play none none reverse',
          },
          opacity: 1,
          x: isHorizontal ? 0 : 0,
          y: isHorizontal ? 0 : direction * 0,
          rotationX: 0,
          rotationY: 0,
          duration: 0.4,
          ease: 'power3.out',
          // Make opacity animate faster than the movement
          onStart: () => {
            gsap.to(htmlElem, {
              opacity: 1,
              duration: 0., // Faster opacity fade
              ease: 'power2.out'
            });
          }
        });
      }

      const hide = (elem: Element) => {
        gsap.set(elem, { opacity: 0 });
      }

      // Handle vertical animations
      const verticalElements = document.querySelectorAll('.animate-on-scroll:not(.animate-horizontal)');
      verticalElements.forEach((elem) => {
        hide(elem);
        animateFrom(elem, 1, false);
      });

      // Handle horizontal animations
      const horizontalElements = document.querySelectorAll('.animate-on-scroll.animate-horizontal');
      horizontalElements.forEach((elem) => {
        hide(elem);
        animateFrom(elem, 1, true);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};