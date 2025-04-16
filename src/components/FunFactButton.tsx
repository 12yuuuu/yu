
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function FunFactButton() {
  const [funFacts, setFunFacts] = useState<string[]>([]);
  const [currentFact, setCurrentFact] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  
  useEffect(() => {
    // In a real app, we'd fetch from an API
    // For demo, we'll load from the JSON file
    import("@/data/funFacts.json")
      .then(data => {
        setFunFacts(data.default);
      })
      .catch(err => {
        console.error("Failed to load fun facts data:", err);
      });
  }, []);
  
  const showRandomFact = () => {
    if (funFacts.length > 0) {
      const randomIndex = Math.floor(Math.random() * funFacts.length);
      setCurrentFact(funFacts[randomIndex]);
      setShowModal(true);
    }
  };
  
  const closeModal = () => {
    setShowModal(false);
  };
  
  return (
    <div className="mt-6 mb-12">
      <Button
        onClick={showRandomFact}
        className="bg-[#1E3A8A] hover:bg-[#2A4BAA] dark:bg-[#3D5DD8] dark:hover:bg-[#4B6BE6] text-white shadow-sm hover:shadow-[0_0_15px_rgba(163,191,250,0.7)] transition-all duration-300"
      >
        Random Fun Fact
      </Button>
      
      {/* Fun Fact Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm" onClick={closeModal}></div>
          
          <div className="relative glass max-w-md w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-xl p-6 shadow-xl animate-scale-in">
            {/* Cloud decoration elements */}
            <div className="absolute -top-4 -left-4 w-12 h-8 bg-white/50 dark:bg-blue-900/30 rounded-full blur-md opacity-70"></div>
            <div className="absolute -bottom-3 -right-3 w-14 h-10 bg-white/50 dark:bg-blue-900/30 rounded-full blur-md opacity-60"></div>
            
            <button 
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            
            <h3 className="text-xl font-bold text-[#1E3A8A] dark:text-[#A3BFFA] mb-4">
              Fun Fact
            </h3>
            
            <p className="text-[#4B5EAA] dark:text-[#D6E0FA] text-lg">
              {currentFact}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
