
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import { useState } from "react";
import { BackgroundAnimation } from "@/components/BackgroundAnimation";

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
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto text-center mb-12 opacity-0 animate-fade-in">
            <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">
              My Work
            </span>
            <h1 className="page-header">Projects</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-balance">
              A collection of my side projects and experiments. Each project represents my passion for creating meaningful digital experiences.
            </p>
          </div>
          
          {/* Filter Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 opacity-0 animate-fade-in animate-delay-100">
            <button
              onClick={() => setFilter(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === null
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === tag
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
          
          {/* Projects as Blog Feed */}
          <div className="space-y-12">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className={`bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in`}
                style={{ animationDelay: `${Math.min(index * 100, 500)}ms` }}
              >
                <div className="md:flex">
                  <div className="md:w-1/3 h-64 md:h-auto relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out-expo hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-balance">
                      {project.description}
                    </p>
                    <div className="flex space-x-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                        >
                          View Live
                        </a>
                      )}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">
                No projects found with the selected filter.
              </p>
              <button
                onClick={() => setFilter(null)}
                className="mt-4 button-secondary"
              >
                Clear filter
              </button>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Projects;
