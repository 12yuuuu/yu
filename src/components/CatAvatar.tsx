
import React from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";

interface CatAvatarProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
  heavenlyEffect?: boolean;
}

export function CatAvatar({ 
  className, 
  size = "md", 
  animated = true,
  heavenlyEffect = false
}: CatAvatarProps) {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  
  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-32 h-32",
    lg: "w-48 h-48",
    xl: "w-64 h-64",
  };

  return (
    <div className={cn(
      "relative group", 
      sizeClasses[size], 
      className
    )}>
      {/* Heavenly effects */}
      {heavenlyEffect && (
        <>
          {/* Halo effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-radial from-blue-200/50 to-transparent dark:from-blue-400/30 blur-xl transform scale-110 animate-pulse"></div>
          
          {/* Sparkle elements */}
          <div className="absolute -top-4 -right-2 w-4 h-4 bg-white dark:bg-blue-200 rounded-full blur-sm opacity-70 animate-pulse"></div>
          <div className="absolute top-1/4 -left-3 w-3 h-3 bg-blue-100 dark:bg-blue-300 rounded-full blur-sm opacity-60 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
          <div className="absolute bottom-1/3 -right-2 w-2 h-2 bg-blue-50 dark:bg-blue-200 rounded-full blur-sm opacity-70 animate-pulse" style={{ animationDelay: "1.2s" }}></div>
          
          {/* Cloud elements */}
          <div className="absolute -bottom-6 -left-8 w-16 h-8 bg-white dark:bg-blue-900/30 rounded-full blur-md opacity-30"></div>
          <div className="absolute -bottom-8 left-4 w-20 h-10 bg-white dark:bg-blue-900/30 rounded-full blur-md opacity-20"></div>
        </>
      )}
      
      <svg 
        viewBox="0 0 200 200" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md transition-all duration-500 ease-out-expo"
      >
        {/* Cat Body */}
        <path 
          d="M70 60 L130 60 L150 140 C150 160 130 180 100 180 C70 180 50 160 50 140 L70 60 Z" 
          className="fill-blue-800/20 dark:fill-blue-700/30 stroke-blue-800 dark:stroke-blue-500 stroke-[2]" 
        />
        
        {/* Ears */}
        <path 
          d="M70 60 L60 40 L80 50 L70 60" 
          className="fill-blue-800/20 dark:fill-blue-700/30 stroke-blue-800 dark:stroke-blue-500 stroke-[2]" 
        />
        <path 
          d="M130 60 L140 40 L120 50 L130 60" 
          className="fill-blue-800/20 dark:fill-blue-700/30 stroke-blue-800 dark:stroke-blue-500 stroke-[2]" 
        />
        
        {/* Centered tail with animation */}
        <path 
          d="M100 170 C100 140, 110 120, 100 100" 
          className={cn(
            "stroke-blue-800 dark:stroke-blue-500 stroke-[3] fill-transparent",
            animated && isDarkMode ? "animate-cat-tail" : ""
          )}
          transform-origin="100 170" 
        />
      </svg>
    </div>
  );
}
