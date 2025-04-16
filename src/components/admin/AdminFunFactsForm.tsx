
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

export function AdminFunFactsForm() {
  const [funFacts, setFunFacts] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  
  useEffect(() => {
    setIsLoading(true);
    
    // In a real app, we'd fetch from an API
    // For demo, we'll load from the JSON file
    import("@/data/funFacts.json")
      .then(data => {
        setFunFacts(data.default);
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Failed to load fun facts data:", err);
        setIsLoading(false);
      });
  }, []);
  
  const handleAddFact = () => {
    setFunFacts([...funFacts, ""]);
  };
  
  const handleRemoveFact = (index: number) => {
    const newFacts = [...funFacts];
    newFacts.splice(index, 1);
    setFunFacts(newFacts);
  };
  
  const handleFactChange = (index: number, value: string) => {
    const newFacts = [...funFacts];
    newFacts[index] = value;
    setFunFacts(newFacts);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // In a real app, we'd send this to an API endpoint
    // For demo, we'll just simulate a successful update
    setTimeout(() => {
      toast.success("Fun facts updated successfully!");
      setIsSaving(false);
    }, 500);
  };
  
  if (isLoading) {
    return <div className="text-center py-8">Loading fun facts data...</div>;
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <Label className="text-[#1E3A8A] dark:text-[#A3BFFA] text-lg">Fun Facts</Label>
          <Button
            type="button"
            onClick={handleAddFact}
            variant="outline"
            size="sm"
            className="flex items-center gap-1 border-blue-200 dark:border-blue-800"
          >
            <Plus className="h-4 w-4" />
            Add Fun Fact
          </Button>
        </div>
        
        {funFacts.length === 0 ? (
          <p className="text-center py-4 text-[#4B5EAA]/70 dark:text-[#D6E0FA]/70">
            No fun facts added yet. Add your first fact by clicking the button above.
          </p>
        ) : (
          <div className="space-y-4">
            {funFacts.map((fact, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-1">
                  <Textarea
                    placeholder="Enter a fun fact about yourself"
                    value={fact}
                    onChange={(e) => handleFactChange(index, e.target.value)}
                    className="border-blue-200 dark:border-blue-800 min-h-[80px]"
                    required
                  />
                </div>
                <Button
                  type="button"
                  onClick={() => handleRemoveFact(index)}
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
        
        <p className="text-sm text-[#4B5EAA]/70 dark:text-[#D6E0FA]/70">
          These fun facts will be displayed randomly when users click the "Fun Fact" button on the homepage.
        </p>
      </div>
      
      <Button
        type="submit"
        className="bg-[#1E3A8A] hover:bg-[#2A4BAA] dark:bg-[#3D5DD8] dark:hover:bg-[#4B6BE6] text-white"
        disabled={isSaving}
      >
        {isSaving ? "Saving..." : "Update Fun Facts"}
      </Button>
    </form>
  );
}
