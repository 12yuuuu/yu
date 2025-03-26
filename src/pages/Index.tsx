
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { CatAvatar } from "@/components/CatAvatar";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BackgroundAnimation } from "@/components/BackgroundAnimation";

const Index = () => {
  // Show only 3 featured projects on the homepage
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <BackgroundAnimation />
      <NavBar />
      <main className="bg-transparent">
        {/* Hero Section - Maintained 40vh Height */}
        <section className="relative h-[40vh] flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center text-center gap-6">
              <div className="opacity-0 animate-slide-down">
                <CatAvatar size="lg" animated={true} />
              </div>
              <h1 className="text-4xl md:text-5xl font-normal tracking-tight text-blue-600 dark:text-blue-400 opacity-0 animate-slide-up font-turret-road">
                Yu
              </h1>
            </div>
          </div>
        </section>

        {/* Featured Projects Section - Seamless Transition with No Boundary */}
        <section className="py-20 bg-transparent backdrop-blur-sm relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="inline-block px-3 py-1 bg-blue-100/50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">
                  Latest Work
                </span>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-quantico">
                  Featured Projects
                </h2>
              </div>
              <Link
                to="/projects"
                className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                View All
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  {...project}
                  className={`animate-fade-in`}
                  style={{ animationDelay: `${Math.min(index * 100, 500)}ms` }}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Index;
