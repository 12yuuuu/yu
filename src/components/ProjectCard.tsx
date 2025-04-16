
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import { CSSProperties, useRef } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * Project card component with hover effect and expanding top line
 */
export function ProjectCard({
  title,
  description,
  image,
  tags,
  liveUrl,
  repoUrl,
  className,
  style,
}: ProjectCardProps) {
  const decorativeLineRef = useRef<HTMLDivElement>(null);
  
  const handleMouseEnter = () => {
    // Expand decorative line on hover
    if (decorativeLineRef.current) {
      decorativeLineRef.current.style.width = '100%';
    }
  };
  
  const handleMouseLeave = () => {
    // Reset decorative line
    if (decorativeLineRef.current) {
      decorativeLineRef.current.style.width = '30%';
    }
  };

  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden bg-white dark:bg-[#2D3748] shadow-sm transition-all duration-300",
        className
      )}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Decorative line at the top that expands on hover */}
      <div 
        ref={decorativeLineRef} 
        className="h-2 bg-[#1E3A8A] dark:bg-[#A3BFFA] transition-all duration-300 ease-out-expo"
        style={{ width: '30%' }}
      ></div>
      
      {/* Image section */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out-expo hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
          <div className="flex space-x-3">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/90 dark:bg-gray-900/90 p-2 rounded-full text-blue-600 dark:text-blue-300 hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200 hover:scale-110 transform"
                aria-label="View live project"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/90 dark:bg-gray-900/90 p-2 rounded-full text-blue-600 dark:text-blue-300 hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200 hover:scale-110 transform"
                aria-label="View GitHub repository"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Content section */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#1E3A8A] dark:text-[#A3BFFA] mb-2 font-quantico">
          {title}
        </h3>
        <p className="text-[#4B5EAA] dark:text-[#D6E0FA] mb-4 text-balance line-clamp-3 font-share-tech-mono">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex bg-blue-100 dark:bg-blue-900/30 text-[#1E3A8A] dark:text-[#A3BFFA] text-xs font-medium px-2.5 py-0.5 rounded-md font-share-tech-mono hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
