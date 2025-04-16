
import React, { useEffect, useRef } from "react";
import { useTheme } from "@/hooks/useTheme";

export function SideDecoration() {
  const { theme } = useTheme();
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  
  // Create particles dynamically
  useEffect(() => {
    if (!leftRef.current || !rightRef.current) return;
    
    const createParticles = (container: HTMLDivElement, count: number) => {
      // Clear existing particles
      container.innerHTML = '';
      
      for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        
        // Random size between 4-8px
        const size = 4 + Math.random() * 4;
        
        // Position randomly along the height and within the container width
        const top = Math.random() * 100;
        const left = Math.random() * 60 + 20; // 20%-80% horizontal position, more centered in the side areas
        
        // Set CSS properties with improved visibility
        Object.assign(particle.style, {
          position: 'absolute',
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '50%',
          backgroundColor: theme === 'light' ? 'rgba(163, 191, 250, 0.7)' : 'rgba(214, 224, 250, 0.7)', // Brighter colors
          top: `${top}%`,
          left: `${left}%`,
          opacity: '0',
          filter: 'blur(1px)',
          boxShadow: theme === 'light' 
            ? '0 0 12px rgba(163, 191, 250, 0.7)' // Increased glow
            : '0 0 10px rgba(214, 224, 250, 0.6)', // Increased glow
        });
        
        // Add animation with random delay and duration
        const delay = Math.random() * 8; // 0-8s delay (reduced from 10s)
        const duration = 6 + Math.random() * 6; // 6-12s duration (made slightly faster)
        
        particle.className = 'animate-particles';
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        // More vertical movement, less horizontal drift
        const angle = (Math.random() * 10 - 5) * (Math.PI / 180); // Reduced horizontal angle
        const speed = 40 + Math.random() * 30; // Increased speed slightly
        particle.style.setProperty('--x', `${Math.sin(angle) * speed * 0.3}px`); // Reduced horizontal movement
        particle.style.setProperty('--y', `${-Math.cos(angle) * speed}px`); // Maintained vertical movement
        
        container.appendChild(particle);
      }
    };
    
    // Create more particles for both sides
    createParticles(leftRef.current, 16);
    createParticles(rightRef.current, 16);
    
    // Recreate particles when theme changes
    return () => {
      if (leftRef.current) leftRef.current.innerHTML = '';
      if (rightRef.current) rightRef.current.innerHTML = '';
    };
  }, [theme]);
  
  return (
    <div className="hidden lg:block fixed inset-0 pointer-events-none -z-10">
      {/* Left side decoration */}
      <div className="absolute left-0 top-0 h-full w-36 overflow-hidden"> 
        {/* Vertical flowing lines - new implementation */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div 
              key={`left-line-${i}`}
              className="absolute left-0 h-full"
              style={{
                left: `${15 + i * 15}%`, // Distribute lines horizontally within the container
                width: '2.5px',
                background: theme === 'light' 
                  ? 'linear-gradient(to bottom, rgba(163, 191, 250, 0), rgba(163, 191, 250, 0.5) 20%, rgba(163, 191, 250, 0.5) 80%, rgba(163, 191, 250, 0))'
                  : 'linear-gradient(to bottom, rgba(107, 114, 128, 0), rgba(107, 114, 128, 0.5) 20%, rgba(107, 114, 128, 0.5) 80%, rgba(107, 114, 128, 0))',
                boxShadow: theme === 'light'
                  ? '0 0 8px rgba(163, 191, 250, 0.4)'
                  : '0 0 8px rgba(107, 114, 128, 0.4)',
                animation: `flowDown ${8 + i * 2}s linear infinite`,
                animationDelay: `${i * 0.8}s`,
                transform: 'translateY(-100%)',
              }}
            />
          ))}
        </div>
        
        {/* Particles container */}
        <div ref={leftRef} className="absolute inset-0"></div>
      </div>
      
      {/* Right side decoration */}
      <div className="absolute right-0 top-0 h-full w-36 overflow-hidden"> 
        {/* Vertical flowing lines - new implementation */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div 
              key={`right-line-${i}`}
              className="absolute right-0 h-full"
              style={{
                right: `${15 + i * 15}%`, // Distribute lines horizontally within the container
                width: '2.5px',
                background: theme === 'light' 
                  ? 'linear-gradient(to bottom, rgba(163, 191, 250, 0), rgba(163, 191, 250, 0.5) 20%, rgba(163, 191, 250, 0.5) 80%, rgba(163, 191, 250, 0))'
                  : 'linear-gradient(to bottom, rgba(107, 114, 128, 0), rgba(107, 114, 128, 0.5) 20%, rgba(107, 114, 128, 0.5) 80%, rgba(107, 114, 128, 0))',
                boxShadow: theme === 'light'
                  ? '0 0 8px rgba(163, 191, 250, 0.4)'
                  : '0 0 8px rgba(107, 114, 128, 0.4)',
                animation: `flowDown ${8 + i * 2}s linear infinite`,
                animationDelay: `${i * 0.8 + 0.4}s`,
                transform: 'translateY(-100%)',
              }}
            />
          ))}
        </div>
        
        {/* Particles container */}
        <div ref={rightRef} className="absolute inset-0"></div>
      </div>

      {/* Add the flowDown animation keyframes to the stylesheet */}
      <style>
        {`
        @keyframes flowDown {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        `}
      </style>
    </div>
  );
}
