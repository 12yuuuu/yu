
import React from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";

interface CatAvatarProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
}

export function CatAvatar({ 
  className, 
  size = "md", 
  animated = true
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
        
        {/* Single curved tail - centered horizontally & only animated in dark mode - adjusted position */}
        <path 
          d="M100 150 C100 120, 110 100, 100 80" 
          className={cn(
            "stroke-blue-800 dark:stroke-blue-500 stroke-[3] fill-transparent",
            isDarkMode && animated ? "animate-cat-tail" : ""
          )}
          transform-origin="100 150" 
        />
      </svg>
    </div>
  );
}
