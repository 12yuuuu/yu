
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/useTheme";
import { LoadingProvider } from "@/hooks/useLoadingContext";
import { AuthProvider } from "@/hooks/useAuthContext";
import { LoadingScreen } from "@/components/LoadingScreen";
import { useLoading } from "@/hooks/useLoadingContext";
import { SideDecoration } from "@/components/SideDecoration";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import DailyRecords from "./pages/DailyRecords";
import Guestbook from "./pages/Guestbook";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import "./App.css";

// AppContent component to access context values
const AppContent = () => {
  const { isLoading } = useLoading();
  
  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <SideDecoration />
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/daily-records" element={<DailyRecords />} />
          <Route path="/guestbook" element={<Guestbook />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </>
  );
};

const App = () => {
  // Move QueryClient initialization inside the component
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light">
        <BrowserRouter>
          <LoadingProvider>
            <AuthProvider>
              <AppContent />
            </AuthProvider>
          </LoadingProvider>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
