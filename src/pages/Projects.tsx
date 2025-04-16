
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { projects } from "@/lib/projects";
import { useState } from "react";
import { BackgroundAnimation } from "@/components/BackgroundAnimation";

/**
 * Projects page component
 * Features a filterable grid of project cards
 */
const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  // Get unique tags from all projects
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  ).sort();
  
  // Filter projects based on selected tag
  const filteredProjects = filter
    ? projects.filter((project) => project.tags.includes(filter))
    : projects;

  return (
    <>
      <BackgroundAnimation />
      <NavBar />
      <main className="pt-24 min-h-screen">
        <section className="py-12 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Standardized section header height - 15vh */}
            <div className="section-header h-[15vh] flex flex-col items-center justify-center mb-16 opacity-0 animate-fade-in">
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">
                My Work
              </span>
              <h1 className="mt-2 text-4xl md:text-5xl font-bold text-[#1E3A8A] dark:text-[#A3BFFA] font-quantico">
                Projects
              </h1>
              <p className="mt-4 text-lg text-[#4B5EAA] dark:text-[#D6E0FA] max-w-2xl mx-auto text-balance font-share-tech-mono">
                A collection of my side projects and experiments. Each project represents my passion for creating meaningful digital experiences.
              </p>
              <div className="mx-auto h-1 w-0 bg-gradient-to-r from-[#1E3A8A] to-[#A3BFFA] mt-6 animate-heading-underline"></div>
            </div>
            
            {/* Filter Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-16 opacity-0 animate-fade-in animate-delay-100">
              <button
                onClick={() => setFilter(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === null
                    ? "bg-blue-500 text-white transform scale-105 shadow-md"
                    : "bg-blue-100/70 dark:bg-blue-900/30 text-[#4B5EAA] dark:text-[#D6E0FA] hover:bg-blue-200/70 dark:hover:bg-blue-800/50"
                }`}
              >
                All
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setFilter(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === tag
                      ? "bg-blue-500 text-white transform scale-105 shadow-md"
                      : "bg-blue-100/70 dark:bg-blue-900/30 text-[#4B5EAA] dark:text-[#D6E0FA] hover:bg-blue-200/70 dark:hover:bg-blue-800/50"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
            
            {/* Projects Grid */}
            <div className="opacity-0 animate-fade-in animate-delay-200">
              <FeaturedProjects projects={filteredProjects} showViewAll={false} />
            </div>
            
            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-12 glass rounded-xl p-8 animate-fade-in">
                <p className="text-[#4B5EAA] dark:text-[#D6E0FA] font-share-tech-mono text-lg">
                  No projects found with the selected filter.
                </p>
                <button
                  onClick={() => setFilter(null)}
                  className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-quantico button-hover overflow-hidden"
                >
                  Clear filter
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
