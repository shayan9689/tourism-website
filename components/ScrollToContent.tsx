"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Smooth scroll function with easing
function smoothScrollTo(targetY: number, duration: number = 600) {
  const startY = window.pageYOffset;
  const distance = targetY - startY;
  let startTime: number | null = null;

  // Easing function for smooth animation (ease-in-out-cubic)
  function easeInOutCubic(t: number): number {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

export default function ScrollToContent() {
  const pathname = usePathname();

  useEffect(() => {
    // Hide all images immediately when route changes
    const hideAllImages = () => {
      const images = document.querySelectorAll("img");
      images.forEach((img) => {
        (img as HTMLElement).style.opacity = "0";
        (img as HTMLElement).style.visibility = "hidden";
        (img as HTMLElement).style.transition = "opacity 0.2s ease-in-out";
      });
    };

    // Show images when they're loaded (check for new page images)
    const showImagesWhenReady = () => {
      // Use double requestAnimationFrame to ensure DOM is updated
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const images = document.querySelectorAll("main img");
          images.forEach((img) => {
            const imageElement = img as HTMLImageElement;
            
            const showImage = () => {
              (img as HTMLElement).style.opacity = "1";
              (img as HTMLElement).style.visibility = "visible";
            };
            
            if (imageElement.complete && imageElement.naturalHeight !== 0) {
              // Image already loaded
              showImage();
            } else {
              // Wait for image to load
              imageElement.addEventListener("load", showImage, { once: true });
              imageElement.addEventListener("error", showImage, { once: true });
              
              // Fallback: show after timeout if not loaded
              setTimeout(showImage, 500);
            }
          });
        });
      });
    };

    // Hide images immediately
    hideAllImages();

    // Skip auto-scroll for home page
    if (pathname === "/") {
      // Show images after DOM is ready
      setTimeout(() => {
        showImagesWhenReady();
      }, 300);
      return;
    }

    // Scroll to top immediately when route changes
    window.scrollTo({ top: 0, behavior: "instant" });

    // Start smooth scroll
    requestAnimationFrame(() => {
      // Show images after page renders
      setTimeout(() => {
        showImagesWhenReady();
      }, 300);

      // Find the first content section after hero/header
      const heroSelectors = [
        "section[class*='relative'][class*='h-']",
        "div[class*='relative'][class*='h-[400px]']",
        "div[class*='relative'][class*='h-[500px]']",
        "div[class*='relative'][class*='h-[70vh]']"
      ];
      
      let heroSection: Element | null = null;
      for (const selector of heroSelectors) {
        heroSection = document.querySelector(selector);
        if (heroSection) break;
      }

      // Find the first content section after hero
      if (heroSection) {
        const contentStart = heroSection.nextElementSibling;
        if (contentStart) {
          // Add a small offset to account for sticky navbar
          const navbarHeight = 64;
          const elementTop = (contentStart as HTMLElement).offsetTop - navbarHeight;
          
          // Use custom smooth scroll with smooth easing
          smoothScrollTo(Math.max(0, elementTop), 600);
        }
      } else {
        // If no hero found, scroll to first section or main content
        const firstSection = document.querySelector("main > section, main > div");
        if (firstSection) {
          const navbarHeight = 64;
          const elementTop = (firstSection as HTMLElement).offsetTop - navbarHeight;
          
          smoothScrollTo(Math.max(0, elementTop), 600);
        }
      }
    });
  }, [pathname]);

  return null;
}
