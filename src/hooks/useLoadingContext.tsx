
import { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: true,
  setIsLoading: () => null,
});

/**
 * Provider component for the loading state
 * Controls page transition animations
 */
export const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Set loading to true when route changes for the transition animation
  useEffect(() => {
    setIsLoading(true);
    
    // Set the loading time based on our constellation animation duration (0.9s)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 900);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
