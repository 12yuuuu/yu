
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { projects } from "@/lib/projects";
import { BackgroundAnimation } from "@/components/BackgroundAnimation";
import { useEffect, useRef } from "react";

/**
 * Homepage component
 * Features the hero section and featured projects
 */
const Index = () => {
  // Show only 3 featured projects on the homepage
  const featuredProjects = projects.slice(0, 4);
  
  // Parallax effect for background
  const backgroundRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrollY = window.scrollY;
        backgroundRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div ref={backgroundRef} className="parallax fixed inset-0 -z-10">
        <BackgroundAnimation />
      </div>
      <NavBar />
      <main className="min-h-screen">
        {/* Hero Section - Vertically centered with reduced height */}
        <Hero />

        {/* Featured Projects Section - Now with grid layout */}
        <section className="py-24 relative">
          <FeaturedProjects projects={featuredProjects} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
