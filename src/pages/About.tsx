
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { CatAvatar } from "@/components/CatAvatar";
import { Code, BookOpen, Monitor, Zap, Award, Coffee } from "lucide-react";

// Combine all skills into a single array
const allSkills = [
  "Python", "JavaScript", "TypeScript", "C/C++", "Verilog",
  "React", "Node.js", "TensorFlow", "Scikit-learn",
  "Git", "Docker", "LINE API",
  "D3.js", "Chart.js"
];

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => (
  <div className={`glass-card p-6 rounded-xl opacity-0 animate-fade-in animate-delay-${delay}`}>
    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-quantico">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 text-balance font-share-tech-mono">{description}</p>
  </div>
);

const About = () => {
  return (
    <>
      <NavBar />
      <main className="pt-24 min-h-screen">
        <section className="page-container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
            <div className="w-full lg:w-3/5 space-y-6 opacity-0 animate-slide-right">
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full font-quantico">
                About Me
              </span>
              <h1 className="page-header font-quantico">Hi, I'm a Developer & Designer</h1>
              <p className="text-lg text-[#4B5EAA] dark:text-[#D6E0FA] text-balance font-share-tech-mono">
                I'm Yu, a passionate developer dedicated to crafting innovative digital solutions through creative side projects. 
                With a keen eye for design and a love for experimenting with emerging technologies, I enjoy bringing ideas to life 
                through clean, efficient code and intuitive interfaces.
              </p>
              <p className="text-lg text-[#4B5EAA] dark:text-[#D6E0FA] text-balance font-share-tech-mono">
                My journey as a developer has led me to explore various frameworks and languages, always seeking the perfect tool 
                for each unique challenge. When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sketching ideas for my next creation.
              </p>
            </div>
            <div className="w-full lg:w-2/5 flex justify-center opacity-0 animate-slide-left">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 rounded-full blur opacity-60 transition duration-1000 animate-pulse"></div>
                <div className="relative bg-white dark:bg-gray-900 rounded-full p-6">
                  <CatAvatar size="lg" animated={true} />
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-16">
            <div className="text-center mb-12 opacity-0 animate-fade-in">
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full font-quantico">
                What I Do
              </span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#1E3A8A] dark:text-[#A3BFFA] font-quantico">
                Services & Expertise
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Code className="h-6 w-6" />}
                title="Web Development"
                description="Building responsive, performant websites and web applications with modern frameworks and best practices."
                delay={100}
              />
              <FeatureCard
                icon={<Monitor className="h-6 w-6" />}
                title="UI/UX Design"
                description="Creating intuitive, visually appealing interfaces that provide exceptional user experiences across all devices."
                delay={200}
              />
              <FeatureCard
                icon={<BookOpen className="h-6 w-6" />}
                title="Content Strategy"
                description="Developing comprehensive content strategies that align with business goals and engage target audiences."
                delay={300}
              />
              <FeatureCard
                icon={<Zap className="h-6 w-6" />}
                title="Performance Optimization"
                description="Optimizing websites and applications for speed, efficiency, and improved search engine rankings."
                delay={400}
              />
              <FeatureCard
                icon={<Award className="h-6 w-6" />}
                title="Branding & Identity"
                description="Establishing cohesive brand identities with consistent visual elements and messaging across all platforms."
                delay={500}
              />
              <FeatureCard
                icon={<Coffee className="h-6 w-6" />}
                title="Consultation"
                description="Providing expert advice and guidance on development strategies, technology choices, and design decisions."
                delay={600}
              />
            </div>
          </div>

          {/* Skills Section - Enhanced with badge-like styling */}
          <div>
            <div className="text-center mb-12 opacity-0 animate-fade-in">
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full font-quantico">
                My Toolkit
              </span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#1E3A8A] dark:text-[#A3BFFA] font-quantico">
                Skills & Technologies
              </h2>
            </div>
            <div className="max-w-4xl mx-auto glass-card rounded-xl p-8 opacity-0 animate-fade-in animate-delay-200">
              <div className="flex flex-wrap gap-3">
                {allSkills.map((skill, index) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 bg-blue-100/50 dark:bg-blue-900/30 text-[#4B5EAA] dark:text-[#D6E0FA] rounded-full text-sm font-medium transition-all duration-200 cursor-default font-share-tech-mono opacity-0 animate-slide-up hover:bg-blue-200/70 dark:hover:bg-blue-800/50 hover:scale-105 hover:text-blue-600 dark:hover:text-blue-300"
                    style={{ animationDelay: `${(index + 1) * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
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
