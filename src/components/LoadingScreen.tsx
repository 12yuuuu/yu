
import React, { useEffect, useState, useRef } from "react";
import { useTheme } from "@/hooks/useTheme";
import { CatAvatar } from "./CatAvatar";
import "./LoadingScreen.css";

interface LoadingScreenProps {
  isLoading: boolean;
}

export const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(isLoading);
  const [animationState, setAnimationState] = useState("initial");
  const starsRef = useRef<HTMLDivElement>(null);
  
  // Generate random star positions
  const generateStars = () => {
    if (!starsRef.current) return;
    
    starsRef.current.innerHTML = "";
    
    // Create stars that will form the constellation
    for (let i = 0; i < 50; i++) {
      const star = document.createElement("div");
      star.classList.add("constellation-star");
      
      // Distribute stars in a rough cat shape
      const angle = Math.random() * Math.PI * 2;
      const distance = 30 + Math.random() * 100;
      
      // Position stars in a circular pattern
      const x = Math.cos(angle) * distance + 50;
      const y = Math.sin(angle) * distance + 50;
      
      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      star.style.animationDelay = `${Math.random() * 0.3}s`;
      
      starsRef.current.appendChild(star);
    }
  };
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    // If loading, show the animation
    if (isLoading) {
      setIsVisible(true);
      generateStars();
      
      // Start animation sequence
      setAnimationState("stars-appear");
      
      // Sequence the animation states
      timeout = setTimeout(() => {
        setAnimationState("constellation-form");
        
        setTimeout(() => {
          setAnimationState("cat-pulse");
          
          setTimeout(() => {
            setAnimationState("dissolve");
            
            // Final timeout to hide the loading screen
            setTimeout(() => {
              setIsVisible(false);
              setAnimationState("initial");
            }, 300); // Fade out duration
            
          }, 300); // Cat pulse duration
        }, 300); // Constellation form duration
      }, 300); // Stars appear duration
    } else {
      // Skip animations if we're hiding without showing first
      timeout = setTimeout(() => {
        setIsVisible(false);
      }, 900); // Total animation duration
    }
    
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [isLoading]);
  
  if (!isVisible) return null;
  
  return (
    <div
      className={`loading-screen ${!isLoading ? "exit" : ""} ${
        theme === "light" 
          ? "bg-white/90" 
          : "bg-gray-900/90"
      }`}
    >
      <div className="loading-content relative flex flex-col items-center justify-center">
        {/* Stars container */}
        <div 
          ref={starsRef}
          className={`absolute w-full h-full constellation-container
            ${animationState === "stars-appear" ? "stars-visible" : ""}
            ${animationState === "constellation-form" ? "constellation-visible" : ""}
          `}
        />
        
        {/* Cat silhouette */}
        <div 
          className={`absolute w-48 h-48 transition-all duration-300
            ${theme === "light" ? "cat-silhouette-light" : "cat-silhouette-dark"}
            ${animationState === "initial" || animationState === "stars-appear" ? "opacity-0 scale-90" : ""}
            ${animationState === "constellation-form" ? "opacity-50 scale-95" : ""}
            ${animationState === "cat-pulse" ? "opacity-90 scale-110 cat-pulse" : ""}
            ${animationState === "dissolve" ? "opacity-0 scale-125 dissolve" : ""}
          `}
        >
          <CatAvatar size="lg" animated={false} heavenlyEffect={false} />
        </div>
        
        {/* Burst effect */}
        <div 
          className={`absolute w-64 h-64 rounded-full 
            ${theme === "light" ? "bg-blue-200/0" : "bg-blue-500/0"}
            transition-all duration-300
            ${animationState === "dissolve" ? "scale-150 opacity-0 burst-effect" : "scale-0 opacity-0"}
          `}
        />
        
        {/* Loading text */}
        <p className={`mt-32 text-lg font-quantico
          ${theme === "light" ? "text-blue-800" : "text-blue-300"}
          ${animationState === "initial" || animationState === "stars-appear" ? "opacity-0" : ""}
          ${animationState === "constellation-form" || animationState === "cat-pulse" ? "opacity-100 animate-pulse" : ""}
          ${animationState === "dissolve" ? "opacity-0" : ""}
        `}>
          Loading...
        </p>
      </div>
    </div>
  );
}
