
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { BackgroundAnimation } from "@/components/BackgroundAnimation";
import { useEffect, useRef, useState } from "react";
import { DailyRecordsList } from "@/components/sections/DailyRecordsList";
import recordsData from "@/data/records.json";

/**
 * DailyRecords page component
 * Features a list of daily record entries with infinite scroll
 */
const DailyRecords = () => {
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
      <BackgroundAnimation />
      <NavBar />
      <main className="min-h-screen pt-24">
        <section className="py-12 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Standardized section header height - 15vh */}
            <div className="section-header h-[15vh] flex flex-col items-center justify-center mb-16 opacity-0 animate-fade-in">
              <span className="inline-block px-3 py-1 bg-blue-100/70 dark:bg-blue-900/30 text-[#1E3A8A] dark:text-[#A3BFFA] text-sm font-medium rounded-full font-quantico mb-2">
                Updates
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[#1E3A8A] dark:text-[#A3BFFA] font-quantico">
                Daily Records
              </h1>
              <p className="text-lg text-[#4B5EAA] dark:text-[#D6E0FA] max-w-2xl mx-auto text-balance font-share-tech-mono opacity-80">
                A log of my daily activities and project updates
              </p>
              <div className="mx-auto h-1 w-0 bg-gradient-to-r from-[#1E3A8A] to-[#A3BFFA] mt-6 animate-heading-underline"></div>
            </div>

            <DailyRecordsList allRecords={recordsData} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default DailyRecords;
