
import { useState, useEffect } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

interface FeaturedProjectsProps {
  projects: Project[];
  showViewAll?: boolean;
}

/**
 * Featured projects section with vertical timeline layout
 */
export function FeaturedProjects({ projects, showViewAll = true }: FeaturedProjectsProps) {
  // State to track which cards have been animated in
  const [visibleItems, setVisibleItems] = useState<boolean[]>(Array(projects.length).fill(false));
  
  // Stagger the animation of cards
  useEffect(() => {
    const timers = projects.map((_, index) => {
      return setTimeout(() => {
        setVisibleItems(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, 300 * index); // Stagger each card by 300ms
    });
    
    // Cleanup timers
    return () => timers.forEach(timer => clearTimeout(timer));
  }, [projects.length]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="mb-16">
        <span className="inline-block px-3 py-1 bg-blue-100/50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full font-quantico">
          Latest Work
        </span>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#1E3A8A] dark:text-[#A3BFFA] font-quantico">
          Featured Projects
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-center text-lg text-[#4B5EAA] dark:text-[#D6E0FA] font-share-tech-mono">
          A selection of my recent work
        </p>
        <div className="mx-auto h-1 w-0 bg-gradient-to-r from-[#1E3A8A] to-[#A3BFFA] mt-6 animate-heading-underline"></div>
      </div>

      {/* Vertical Timeline Layout */}
      <div className="relative">
        {/* Central timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#1E3A8A] dark:bg-[#A3BFFA] z-0"></div>
        
        {/* Projects list */}
        <div className="relative z-10">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={project.id} 
                className={`mb-16 flex ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col items-center`}
              >
                {/* Timeline marker */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#1E3A8A] dark:bg-[#A3BFFA] z-20 border-2 border-white dark:border-gray-900"></div>
                
                {/* Project card with slide-in animation */}
                <div 
                  className={`w-full md:w-5/12 ${
                    isEven ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                  } transition-all duration-500 ${
                    visibleItems[index] 
                      ? 'opacity-100' 
                      : 'opacity-0 ' + (isEven ? 'md:-translate-x-20' : 'md:translate-x-20')
                  }`}
                >
                  <ProjectCard
                    {...project}
                    className="h-full transform transition-all duration-300 hover:translate-y-[-5px] hover:scale-[1.03] hover:shadow-md border border-[#E5E7EB] dark:border-[#4B5EAA] hover:border-blue-300 dark:hover:border-blue-500"
                  />
                </div>
                
                {/* Empty space for opposite side */}
                <div className="w-full md:w-5/12"></div>
              </div>
            );
          })}
        </div>
      </div>
      
      {showViewAll && (
        <div className="mt-12">
          <Link
            to="/projects"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors link-hover"
          >
            View All Projects
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
