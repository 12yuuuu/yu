
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "rounded-full p-2 transition-all duration-300 ease-out-expo",
        theme === "dark" 
          ? "bg-blue-900/20 text-blue-300 hover:bg-blue-900/30" 
          : "bg-blue-100 text-blue-700 hover:bg-blue-200",
        className
      )}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 transition-transform duration-300 ease-out-expo rotate-90 animate-in" />
      ) : (
        <Moon className="h-5 w-5 transition-transform duration-300 ease-out-expo animate-in" />
      )}
    </button>
  );
}
