
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface Skill {
  name: string;
  proficiency: number;
}

export function AdminSkillsForm() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  
  useEffect(() => {
    setIsLoading(true);
    
    // In a real app, we'd fetch from an API
    // For demo, we'll load from the JSON file
    import("@/data/skills.json")
      .then(data => {
        setSkills(data.default);
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Failed to load skills data:", err);
        setIsLoading(false);
      });
  }, []);
  
  const handleAddSkill = () => {
    setSkills([...skills, { name: "", proficiency: 50 }]);
  };
  
  const handleRemoveSkill = (index: number) => {
    const newSkills = [...skills];
    newSkills.splice(index, 1);
    setSkills(newSkills);
  };
  
  const handleSkillChange = (index: number, field: keyof Skill, value: string | number) => {
    const newSkills = [...skills];
    newSkills[index] = { 
      ...newSkills[index], 
      [field]: field === 'proficiency' ? Number(value) : value 
    };
    setSkills(newSkills);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // In a real app, we'd send this to an API endpoint
    // For demo, we'll just simulate a successful update
    setTimeout(() => {
      toast.success("Skills updated successfully!");
      setIsSaving(false);
    }, 500);
  };
  
  if (isLoading) {
    return <div className="text-center py-8">Loading skills data...</div>;
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <Label className="text-[#1E3A8A] dark:text-[#A3BFFA] text-lg">Skills</Label>
          <Button
            type="button"
            onClick={handleAddSkill}
            variant="outline"
            size="sm"
            className="flex items-center gap-1 border-blue-200 dark:border-blue-800"
          >
            <Plus className="h-4 w-4" />
            Add Skill
          </Button>
        </div>
        
        {skills.length === 0 ? (
          <p className="text-center py-4 text-[#4B5EAA]/70 dark:text-[#D6E0FA]/70">
            No skills added yet. Add your first skill by clicking the button above.
          </p>
        ) : (
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex-1">
                  <Input
                    placeholder="Skill name"
                    value={skill.name}
                    onChange={(e) => handleSkillChange(index, 'name', e.target.value)}
                    className="border-blue-200 dark:border-blue-800"
                    required
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      min={0}
                      max={100}
                      value={skill.proficiency}
                      onChange={(e) => handleSkillChange(index, 'proficiency', e.target.value)}
                      className="border-blue-200 dark:border-blue-800"
                      required
                    />
                    <span className="text-[#4B5EAA] dark:text-[#D6E0FA]">%</span>
                  </div>
                </div>
                <Button
                  type="button"
                  onClick={() => handleRemoveSkill(index)}
                  variant="ghost"
                  size="sm"
                  className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <Button
        type="submit"
        className="bg-[#1E3A8A] hover:bg-[#2A4BAA] dark:bg-[#3D5DD8] dark:hover:bg-[#4B6BE6] text-white"
        disabled={isSaving}
      >
        {isSaving ? "Saving..." : "Update Skills"}
      </Button>
    </form>
  );
}
