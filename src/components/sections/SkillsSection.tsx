
import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  proficiency: number;
}

export function SkillsSection() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    // In a real app, we'd fetch from an API
    // For demo, we'll load from the JSON file
    import("@/data/skills.json")
      .then(data => {
        setSkills(data.default);
        setLoading(false);
        
        // Start animation after a short delay
        setTimeout(() => {
          setAnimate(true);
        }, 300);
      })
      .catch(err => {
        console.error("Failed to load skills data:", err);
        setLoading(false);
      });
  }, []);
  
  if (loading) {
    return (
      <div className="py-8 text-center text-[#4B5EAA] dark:text-[#D6E0FA]">
        Loading skills...
      </div>
    );
  }
  
  return (
    <div className="space-y-6 py-6">
      <h2 className="text-2xl font-bold text-[#1E3A8A] dark:text-[#A3BFFA] text-center mb-8">
        My Toolkit
      </h2>
      
      <div className="grid gap-6">
        {skills.map((skill, index) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-[#1E3A8A] dark:text-[#A3BFFA]">
                {skill.name}
              </h3>
              <span className="text-sm text-[#4B5EAA] dark:text-[#D6E0FA]">
                {animate ? skill.proficiency : 0}%
              </span>
            </div>
            <Progress 
              value={animate ? skill.proficiency : 0} 
              className="h-2 bg-blue-100 dark:bg-blue-900/30"
              style={{
                transition: "all 1s ease-out",
                transitionDelay: `${index * 0.1}s`
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
