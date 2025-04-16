
import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

interface ProjectCarouselProps {
  projects: Project[];
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  return (
    <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-0">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {projects.map((project) => (
            <CarouselItem key={project.id} className="md:basis-1/3 lg:basis-1/3 pl-4 sm:pl-6">
              <div className="p-1">
                <ProjectCard
                  {...project}
                  className="transform transition-all duration-300 hover:scale-105"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 sm:-left-12" />
        <CarouselNext className="right-0 sm:-right-12" />
      </Carousel>
    </div>
  );
}
