
import { useEffect, useState } from "react";

export function CurrentlyWorkingOn() {
  const [currentText, setCurrentText] = useState("Currently working on something cool...");
  
  useEffect(() => {
    // In a real app, we'd fetch from an API
    // For demo, we'll load from the JSON file
    import("@/data/currentlyWorkingOn.json")
      .then((data) => setCurrentText(data.text))
      .catch((err) => console.error("Failed to load current work text:", err));
  }, []);
  
  return (
    <div className="relative max-w-md mx-auto mt-12 mb-4 px-6 py-3 rounded-lg bg-blue-50/20 dark:bg-blue-900/20 backdrop-blur-sm border border-blue-200/30 dark:border-blue-700/30">
      <div className="flex items-center">
        {/* Animated sparkle */}
        <div className="relative mr-3">
          <div className="w-3 h-3 rounded-full bg-blue-400 dark:bg-blue-300 opacity-80 animate-pulse"></div>
          <div className="absolute inset-0 w-3 h-3 rounded-full bg-blue-400 dark:bg-blue-300 opacity-40 animate-ping"></div>
        </div>
        
        <p className="text-[#4B5EAA] dark:text-[#D6E0FA] font-share-tech-mono">
          {currentText}
        </p>
      </div>
    </div>
  );
}
