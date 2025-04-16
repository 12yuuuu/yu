
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { CatAvatar } from "@/components/CatAvatar";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleToggle = () => {
    setIsAnimating(true);
    
    // Delay the actual theme toggle to allow for animation
    setTimeout(() => {
      toggleTheme();
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }, 300);
  };
  
  return (
    <div className="relative">
      <button
        onClick={handleToggle}
        className={cn(
          "rounded-full p-2 transition-all duration-300 ease-out-expo relative z-10",
          theme === "dark" 
            ? "bg-blue-900/20 text-blue-300 hover:bg-blue-900/30" 
            : "bg-blue-100 text-blue-700 hover:bg-blue-200",
          "hover:shadow-[0_0_10px_rgba(163,191,250,0.7)] dark:hover:shadow-[0_0_10px_rgba(214,224,250,0.7)]",
          className
        )}
        aria-label="Toggle theme"
        disabled={isAnimating}
      >
        {theme === "dark" ? (
          <Sun className="h-5 w-5 transition-transform duration-300 ease-out-expo rotate-90 animate-in" />
        ) : (
          <Moon className="h-5 w-5 transition-transform duration-300 ease-out-expo animate-in" />
        )}
      </button>
      
      {isAnimating && (
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          style={{
            animation: "toggleAnimation 0.6s ease-in-out"
          }}
        >
          <div className="relative">
            {/* Initial cat avatar */}
            <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              <CatAvatar size="sm" animated={false} heavenlyEffect={true} />
            </div>
            
            {/* Glowing orb */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-blue-400/80 dark:bg-blue-300/80 shadow-[0_0_20px_rgba(163,191,250,0.8)]"
              style={{ 
                animation: "pulseOrb 0.6s ease-in-out"
              }}
            />
            
            {/* Sparkles */}
            <div className="absolute top-0 left-0 w-full h-full">
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-2 h-2 bg-blue-200 dark:bg-blue-100 rounded-full"
                  style={{
                    top: `${50 + Math.sin(i * Math.PI / 4) * 40}%`,
                    left: `${50 + Math.cos(i * Math.PI / 4) * 40}%`,
                    opacity: 0.8,
                    animation: `sparkle 0.6s ease-out ${i * 0.05}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Add keyframes for the animations */}
      <style>
        {`
        @keyframes toggleAnimation {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          50% { transform: translate(-50%, -50%) scale(1.3); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        }
        
        @keyframes pulseOrb {
          0% { transform: scale(0.2); opacity: 0; }
          50% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(0); opacity: 0; }
        }
        
        @keyframes sparkle {
          0% { transform: scale(0) translate(0, 0); opacity: 0; }
          50% { transform: scale(1.5) translate(var(--tx, 10px), var(--ty, 10px)); opacity: 1; }
          100% { transform: scale(0) translate(calc(var(--tx, 10px) * 2), calc(var(--ty, 10px) * 2)); opacity: 0; }
        }
        `}
      </style>
    </div>
  );
}
