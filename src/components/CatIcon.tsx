
import React from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";

interface CatIconProps {
  className?: string;
  size?: number;
}

export function CatIcon({ className, size = 30 }: CatIconProps) {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={cn("transition-transform duration-300 hover:scale-110", className)}
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
      
      {/* Single curved tail - centered horizontally & only animated in dark mode */}
      <path 
        d="M100 140 C100 110, 110 90, 100 70" 
        className={cn(
          "stroke-blue-800 dark:stroke-blue-500 stroke-[3] fill-transparent", 
          isDarkMode ? "animate-cat-tail" : ""
        )}
        transform-origin="100 140"
      />
    </svg>
  );
}
