
import React from "react";

export function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Rippling Line Animation */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`line-${i}`}
          className="absolute h-[1px] bg-gradient-to-r from-transparent via-blue-300/20 dark:via-blue-400/20 to-transparent"
          style={{
            width: `${Math.random() * 30 + 20}%`,
            left: `${Math.random() * 70}%`,
            top: `${Math.random() * 100}%`,
            animation: `rippleLine ${15 + Math.random() * 15}s linear infinite`,
            animationDelay: `${Math.random() * 15}s`,
            transform: `rotate(${Math.random() * 20 - 10}deg)`,
            opacity: 0.4 + (Math.random() * 0.4),
          }}
        />
      ))}
      
      {/* Additional curved lines for more visual interest */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`curve-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.2 + (Math.random() * 0.3),
          }}
        >
          <svg
            width={`${Math.random() * 200 + 100}`}
            height={`${Math.random() * 100 + 50}`}
            viewBox="0 0 200 100"
            className="text-blue-400/20 dark:text-blue-500/20"
          >
            <path
              d={`M0,${50 + Math.random() * 20} Q${50 + Math.random() * 50},${Math.random() * 20} ${150 + Math.random() * 50},${40 + Math.random() * 20}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              style={{
                animation: `waveLine ${10 + Math.random() * 20}s ease-in-out infinite`,
              }}
            />
          </svg>
        </div>
      ))}
      
      {/* Larger, Slower Cloud Drifting Effect */}
      {[...Array(6)].map((_, i) => {
        // Larger clouds (100-200px)
        const size = Math.random() * 100 + 100; 
        const top = Math.random() * 80; 
        // Slower animation (40-50s)
        const animationDuration = Math.random() * 10 + 40; 
        const delay = Math.random() * 20; 
        
        return (
          <div
            key={`cloud-${i}`}
            className="absolute cloud-element"
            style={{
              width: `${size}px`,
              height: `${size * 0.6}px`,
              top: `${top}%`,
              left: `-${size}px`,
              animation: `driftCloud ${animationDuration}s linear infinite`,
              animationDelay: `${delay}s`,
              // More faded clouds (0.2-0.4 opacity)
              opacity: 0.2 + (Math.random() * 0.2),
            }}
          >
            <svg
              viewBox="0 0 200 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-blue-100 dark:text-blue-800/30"
            >
              <path
                d="M30,90 
                   a30,30 0 1,1 40,0
                   a25,25 0 1,1 40,0
                   a20,20 0 1,1 30,0
                   a15,15 0 1,1 20,0
                   h-130 z"
                fill="currentColor"
              />
            </svg>
          </div>
        );
      })}
    </div>
  );
}
