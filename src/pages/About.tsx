
import { useEffect, useRef } from "react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { CatAvatar } from "@/components/CatAvatar";
import { 
  Code, BookOpen, Monitor, Zap, Award, Coffee, 
  ChevronRight, GitBranch, Palette, Star, Cloud,
  Sparkles, Moon, Sun, Heart
} from "lucide-react";

// Combine all skills into a single array
const allSkills = [
  "Python", "JavaScript", "TypeScript", "C/C++", "Verilog",
  "React", "Node.js", "TensorFlow", "Scikit-learn",
  "Git", "Docker", "LINE API",
  "D3.js", "Chart.js"
];

/**
 * About page component with heavenly tech aesthetic
 * Features ethereal design elements with technical precision
 */
const About = () => {
  // Reference for the mouse-tracking spotlight effect
  const spotlightRef = useRef<HTMLDivElement>(null);

  // Handle mouse movement for heavenly spotlight effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current) return;
      
      const { clientX, clientY } = e;
      spotlightRef.current.style.setProperty('--x', `${clientX}px`);
      spotlightRef.current.style.setProperty('--y', `${clientY}px`);
      spotlightRef.current.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      if (spotlightRef.current) {
        spotlightRef.current.style.opacity = "0";
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Handle scroll reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    // Observe all elements with reveal-on-scroll class
    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <NavBar />
      <main className="relative min-h-screen pt-16 overflow-hidden">
        {/* Ethereal background decorations */}
        <div className="fixed inset-0 -z-10">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100/70 dark:from-blue-950 dark:to-blue-900/70"></div>
          
          {/* Cloud elements */}
          <div className="absolute top-1/4 left-10 w-60 h-20 bg-white/30 dark:bg-white/5 rounded-full blur-xl animate-float" style={{ animationDuration: "15s" }}></div>
          <div className="absolute top-2/3 right-20 w-80 h-24 bg-white/40 dark:bg-white/5 rounded-full blur-xl animate-float" style={{ animationDuration: "18s", animationDelay: "2s" }}></div>
          <div className="absolute top-40 right-40 w-40 h-16 bg-white/20 dark:bg-white/5 rounded-full blur-xl animate-float" style={{ animationDuration: "12s", animationDelay: "1s" }}></div>
          
          {/* Stars and sparkles */}
          <div className="hidden dark:block">
            <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-blue-200 rounded-full animate-pulse"></div>
            <div className="absolute top-1/5 left-1/3 w-1 h-1 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
            <div className="absolute top-2/3 left-2/3 w-1.5 h-1.5 bg-blue-100 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
            <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-blue-200 rounded-full animate-pulse" style={{ animationDelay: "1.5s" }}></div>
          </div>
          
          {/* Light rays in dark mode */}
          <div className="hidden dark:block absolute inset-0">
            <div className="absolute top-0 left-1/4 w-px h-40 bg-gradient-to-b from-blue-400/0 via-blue-400/10 to-blue-400/0 blur-sm"></div>
            <div className="absolute top-0 left-2/3 w-px h-60 bg-gradient-to-b from-blue-500/0 via-blue-500/10 to-blue-500/0 blur-sm"></div>
            <div className="absolute top-0 left-1/3 w-0.5 h-80 bg-gradient-to-b from-blue-300/0 via-blue-300/5 to-blue-300/0 blur-sm"></div>
          </div>
        </div>

        {/* Mouse-following spotlight effect */}
        <div 
          ref={spotlightRef} 
          className="fixed inset-0 pointer-events-none opacity-0 transition-opacity duration-300 ease-out-expo"
          style={{ 
            background: 'radial-gradient(600px circle at var(--x) var(--y), rgba(163, 191, 250, 0.15), transparent 70%)',
          }}
        />

        <section className="relative py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section - Ethereal layout with heavenly elements */}
            <div className="mb-20">
              <div className="relative flex flex-col lg:flex-row items-center gap-12">
                {/* Left content - Heavenly Avatar */}
                <div className="lg:w-2/5 flex justify-center items-center reveal-on-scroll opacity-0 transform translate-y-8">
                  <div className="relative">
                    {/* Ethereal backdrop - outer glow */}
                    <div className="absolute inset-0 bg-gradient-conic from-blue-200/20 via-blue-300/30 to-blue-200/20 dark:from-blue-500/10 dark:via-blue-400/20 dark:to-blue-500/10 rounded-full blur-xl transform scale-150"></div>
                    
                    {/* Rotating cosmic ring */}
                    <div className="absolute inset-0 w-full h-full rounded-full border border-blue-300/50 dark:border-blue-500/30 animate-[spin_25s_linear_infinite]"></div>
                    
                    {/* Second rotating ring - opposite direction */}
                    <div className="absolute inset-0 w-full h-full rounded-full border-2 border-dashed border-blue-200/30 dark:border-blue-400/20 animate-[spin_40s_linear_reverse_infinite]"></div>
                    
                    {/* Heavenly cat avatar */}
                    <div className="relative w-72 h-72 flex items-center justify-center">
                      <CatAvatar size="xl" animated={true} heavenlyEffect={true} className="transform transition-all duration-500 ease-out-expo hover:scale-110" />
                    </div>
                  </div>
                </div>
                
                {/* Right content - Bio with ethereal styling */}
                <div className="lg:w-3/5 reveal-on-scroll opacity-0 transform translate-y-8" style={{ animationDelay: "200ms" }}>
                  <div className="relative backdrop-blur-sm rounded-3xl p-8 overflow-hidden">
                    {/* Ethereal card background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-blue-50/90 dark:from-blue-900/70 dark:to-blue-950/80 border border-white/50 dark:border-blue-800/50 rounded-3xl"></div>
                    
                    {/* Glowing edges */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 dark:via-blue-400 to-transparent"></div>
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-200 dark:via-blue-400 to-transparent"></div>
                    <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-blue-200 dark:via-blue-400 to-transparent"></div>
                    <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-blue-200 dark:via-blue-400 to-transparent"></div>
                    
                    {/* Content */}
                    <div className="relative">
                      <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="h-5 w-5 text-blue-400 dark:text-blue-300" />
                        <span className="inline-block px-3 py-1 bg-blue-100/70 dark:bg-blue-800/50 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">
                          Hello there
                        </span>
                      </div>
                      
                      <h1 className="mt-2 text-4xl lg:text-5xl font-bold text-[#1E3A8A] dark:text-[#A3BFFA] font-quantico leading-tight">
                        I'm Yu
                      </h1>
                      
                      <div className="mt-4 space-y-4">
                        <p className="text-lg text-[#4B5EAA] dark:text-[#D6E0FA] font-share-tech-mono leading-relaxed">
                          A creative developer focused on building experiences that blend aesthetic design with technical excellence, creating digital solutions that inspire like the vast horizon.
                        </p>
                        <p className="text-lg text-[#4B5EAA] dark:text-[#D6E0FA] font-share-tech-mono leading-relaxed">
                          My approach combines precision and innovation, producing work that balances form and function in a harmonious synthesis of art and engineering.
                        </p>
                      </div>
                      
                      {/* Ethereal divider */}
                      <div className="mt-6 h-0.5 w-24 bg-gradient-to-r from-blue-300/40 to-blue-500/40 dark:from-blue-400/60 dark:to-blue-300/60 rounded-full"></div>
                      
                      {/* Ethereal badges */}
                      <div className="mt-6 flex flex-wrap gap-3">
                        <div className="group px-4 py-2 rounded-full flex items-center gap-2 bg-white/70 dark:bg-blue-900/40 border border-blue-100/50 dark:border-blue-700/40 transform transition-all duration-300 hover:translate-y-[-3px] hover:shadow-md hover:shadow-blue-300/20 dark:hover:shadow-blue-400/10">
                          <Award className="h-4 w-4 text-blue-600 dark:text-blue-400 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors duration-300" />
                          <span className="text-sm font-quantico text-[#1E3A8A] dark:text-[#A3BFFA] group-hover:text-blue-700 dark:group-hover:text-blue-200 transition-colors duration-300">Creative Coder</span>
                        </div>
                        
                        <div className="group px-4 py-2 rounded-full flex items-center gap-2 bg-white/70 dark:bg-blue-900/40 border border-blue-100/50 dark:border-blue-700/40 transform transition-all duration-300 hover:translate-y-[-3px] hover:shadow-md hover:shadow-blue-300/20 dark:hover:shadow-blue-400/10">
                          <Heart className="h-4 w-4 text-blue-600 dark:text-blue-400 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors duration-300" />
                          <span className="text-sm font-quantico text-[#1E3A8A] dark:text-[#A3BFFA] group-hover:text-blue-700 dark:group-hover:text-blue-200 transition-colors duration-300">Passionate Engineer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Services Section with ethereal cards */}
            <div className="mb-24">
              <h2 className="text-2xl font-bold text-[#1E3A8A] dark:text-[#A3BFFA] font-quantico mb-8 reveal-on-scroll opacity-0 relative inline-flex items-center group">
                <span className="relative">
                  My Expertise
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-300 group-hover:w-full transition-all duration-300 ease-out-expo"></span>
                </span>
                <ChevronRight className="h-5 w-5 ml-2 text-blue-500 dark:text-blue-400 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300 ease-out-expo" />
              </h2>
              
              {/* Services grid with heavenly/ethereal styling */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {/* Service Card 1 */}
                <div className="group reveal-on-scroll opacity-0" style={{ animationDelay: "100ms" }}>
                  <div className="relative h-full backdrop-blur-sm rounded-2xl p-6 border border-white/50 dark:border-blue-800/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-300/10 dark:hover:shadow-blue-500/10 overflow-hidden">
                    {/* Card background - heavenly gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/70 to-blue-50/80 dark:from-blue-900/70 dark:to-blue-950/80 -z-10"></div>
                    
                    {/* Glowing edge - top */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 dark:via-blue-400 to-transparent"></div>
                    
                    {/* Icon container with ethereal glow */}
                    <div className="relative mb-4">
                      <div className="absolute -inset-1 bg-blue-100 dark:bg-blue-800/40 rounded-lg blur-sm opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                      <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50/80 dark:bg-blue-900/80 text-blue-600 dark:text-blue-300 transition-colors duration-300 group-hover:text-blue-500 dark:group-hover:text-blue-200">
                        <Code className="h-5 w-5" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-[#1E3A8A] dark:text-[#A3BFFA] mb-3 font-quantico group-hover:text-blue-700 dark:group-hover:text-blue-200 transition-colors duration-300">Web Development</h3>
                    <p className="text-[#4B5EAA] dark:text-[#D6E0FA] text-balance font-share-tech-mono group-hover:text-blue-800 dark:group-hover:text-blue-100 transition-colors duration-300">
                      Creating responsive, intuitive interfaces with React, TypeScript, and modern frontend frameworks.
                    </p>
                  </div>
                </div>
                
                {/* Service Card 2 */}
                <div className="group reveal-on-scroll opacity-0" style={{ animationDelay: "200ms" }}>
                  <div className="relative h-full backdrop-blur-sm rounded-2xl p-6 border border-white/50 dark:border-blue-800/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-300/10 dark:hover:shadow-blue-500/10 overflow-hidden">
                    {/* Card background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/70 to-blue-50/80 dark:from-blue-900/70 dark:to-blue-950/80 -z-10"></div>
                    
                    {/* Glowing edge - top */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 dark:via-blue-400 to-transparent"></div>
                    
                    {/* Icon container */}
                    <div className="relative mb-4">
                      <div className="absolute -inset-1 bg-blue-100 dark:bg-blue-800/40 rounded-lg blur-sm opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                      <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50/80 dark:bg-blue-900/80 text-blue-600 dark:text-blue-300 transition-colors duration-300 group-hover:text-blue-500 dark:group-hover:text-blue-200">
                        <Zap className="h-5 w-5" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-[#1E3A8A] dark:text-[#A3BFFA] mb-3 font-quantico group-hover:text-blue-700 dark:group-hover:text-blue-200 transition-colors duration-300">Performance Engineering</h3>
                    <p className="text-[#4B5EAA] dark:text-[#D6E0FA] text-balance font-share-tech-mono group-hover:text-blue-800 dark:group-hover:text-blue-100 transition-colors duration-300">
                      Optimizing code efficiency, improving loading times, and creating seamless user experiences.
                    </p>
                  </div>
                </div>
                
                {/* Service Card 3 */}
                <div className="group reveal-on-scroll opacity-0" style={{ animationDelay: "300ms" }}>
                  <div className="relative h-full backdrop-blur-sm rounded-2xl p-6 border border-white/50 dark:border-blue-800/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-300/10 dark:hover:shadow-blue-500/10 overflow-hidden">
                    {/* Card background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/70 to-blue-50/80 dark:from-blue-900/70 dark:to-blue-950/80 -z-10"></div>
                    
                    {/* Glowing edge - top */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 dark:via-blue-400 to-transparent"></div>
                    
                    {/* Icon container */}
                    <div className="relative mb-4">
                      <div className="absolute -inset-1 bg-blue-100 dark:bg-blue-800/40 rounded-lg blur-sm opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                      <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50/80 dark:bg-blue-900/80 text-blue-600 dark:text-blue-300 transition-colors duration-300 group-hover:text-blue-500 dark:group-hover:text-blue-200">
                        <Monitor className="h-5 w-5" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-[#1E3A8A] dark:text-[#A3BFFA] mb-3 font-quantico group-hover:text-blue-700 dark:group-hover:text-blue-200 transition-colors duration-300">UI/UX Design</h3>
                    <p className="text-[#4B5EAA] dark:text-[#D6E0FA] text-balance font-share-tech-mono group-hover:text-blue-800 dark:group-hover:text-blue-100 transition-colors duration-300">
                      Crafting beautiful, user-centered interfaces with attention to visual harmony and usability.
                    </p>
                  </div>
                </div>
                
                {/* Service Card 4 */}
                <div className="group reveal-on-scroll opacity-0" style={{ animationDelay: "400ms" }}>
                  <div className="relative h-full backdrop-blur-sm rounded-2xl p-6 border border-white/50 dark:border-blue-800/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-300/10 dark:hover:shadow-blue-500/10 overflow-hidden">
                    {/* Card background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/70 to-blue-50/80 dark:from-blue-900/70 dark:to-blue-950/80 -z-10"></div>
                    
                    {/* Glowing edge - top */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 dark:via-blue-400 to-transparent"></div>
                    
                    {/* Icon container */}
                    <div className="relative mb-4">
                      <div className="absolute -inset-1 bg-blue-100 dark:bg-blue-800/40 rounded-lg blur-sm opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                      <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50/80 dark:bg-blue-900/80 text-blue-600 dark:text-blue-300 transition-colors duration-300 group-hover:text-blue-500 dark:group-hover:text-blue-200">
                        <BookOpen className="h-5 w-5" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-[#1E3A8A] dark:text-[#A3BFFA] mb-3 font-quantico group-hover:text-blue-700 dark:group-hover:text-blue-200 transition-colors duration-300">Content Strategy</h3>
                    <p className="text-[#4B5EAA] dark:text-[#D6E0FA] text-balance font-share-tech-mono group-hover:text-blue-800 dark:group-hover:text-blue-100 transition-colors duration-300">
                      Developing cohesive content approaches that align with business objectives and user needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* My Toolkit section with ethereal design */}
            <div className="reveal-on-scroll opacity-0" style={{ animationDelay: "500ms" }}>
              <h2 className="text-2xl font-bold text-[#1E3A8A] dark:text-[#A3BFFA] font-quantico mb-8 relative inline-flex items-center group">
                <span className="relative">
                  My Toolkit
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-300 group-hover:w-full transition-all duration-300 ease-out-expo"></span>
                </span>
                <Star className="h-5 w-5 ml-2 text-blue-500 dark:text-blue-400 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300 ease-out-expo" />
              </h2>
              
              <div className="relative">
                {/* Ethereal container for skills */}
                <div className="relative backdrop-blur-md rounded-3xl p-8 border border-white/50 dark:border-blue-800/30 overflow-hidden">
                  {/* Container background with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white/80 to-blue-50/90 dark:from-blue-900/50 dark:via-blue-950/70 dark:to-blue-900/50 -z-10"></div>
                  
                  {/* Glowing edges */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 dark:via-blue-400 to-transparent"></div>
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-200 dark:via-blue-400 to-transparent"></div>
                  <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-blue-200 dark:via-blue-400 to-transparent"></div>
                  <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-blue-200 dark:via-blue-400 to-transparent"></div>
                  
                  {/* Animated beam effect */}
                  <div className="absolute top-0 left-0 right-0 h-1 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-r from-blue-300/0 via-blue-500/50 to-blue-300/0 animate-[rippleLine_3s_ease-in-out_infinite]"></div>
                  </div>
                  
                  {/* Skills display with ethereal styling */}
                  <div className="flex flex-wrap justify-center gap-4">
                    {allSkills.map((skill, index) => (
                      <div 
                        key={skill}
                        className="relative reveal-on-scroll opacity-0 group"
                        style={{ animationDelay: `${(index + 1) * 80}ms` }}
                      >
                        {/* Glowing effect on hover */}
                        <div className="absolute inset-0 bg-blue-200/0 group-hover:bg-blue-200/30 dark:group-hover:bg-blue-600/30 rounded-full blur-md transition-all duration-300"></div>
                        
                        <span 
                          className="relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-default font-share-tech-mono bg-white/80 dark:bg-blue-900/50 text-[#4B5EAA] dark:text-[#D6E0FA] border border-blue-100/50 dark:border-blue-700/30 transform group-hover:scale-110 group-hover:text-blue-600 dark:group-hover:text-blue-200 hover:shadow hover:shadow-blue-200/30 dark:hover:shadow-blue-500/20"
                          style={{ 
                            transform: `rotate(${Math.random() * 4 - 2}deg)` 
                          }}
                        >
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12">
                  <Cloud className="w-full h-full text-blue-200/50 dark:text-blue-700/30" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8">
                  <Moon className="w-full h-full text-blue-200/50 dark:text-blue-700/30 hidden dark:block" />
                  <Sun className="w-full h-full text-blue-300/50 dark:hidden" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
