
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export function AdminCurrentWorkForm() {
  const [currentWork, setCurrentWork] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  
  useEffect(() => {
    setIsLoading(true);
    
    // In a real app, we'd fetch from an API
    // For demo, we'll load from the JSON file
    import("@/data/currentlyWorkingOn.json")
      .then(data => {
        setCurrentWork(data.text);
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Failed to load current work data:", err);
        setIsLoading(false);
      });
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // In a real app, we'd send this to an API endpoint
    // For demo, we'll just simulate a successful update
    setTimeout(() => {
      toast.success("Current work updated successfully!");
      setIsSaving(false);
    }, 500);
  };
  
  if (isLoading) {
    return <div className="text-center py-8">Loading current work data...</div>;
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="currentWork" className="text-[#1E3A8A] dark:text-[#A3BFFA]">
          Currently Working On
        </Label>
        <Input
          id="currentWork"
          placeholder="e.g., Currently working on: Improving my AI stock analysis model."
          value={currentWork}
          onChange={(e) => setCurrentWork(e.target.value)}
          className="border-blue-200 dark:border-blue-800"
          required
        />
        <p className="text-sm text-[#4B5EAA]/70 dark:text-[#D6E0FA]/70">
          This text appears on the homepage in the "Currently Working On" widget.
        </p>
      </div>
      
      <Button
        type="submit"
        className="bg-[#1E3A8A] hover:bg-[#2A4BAA] dark:bg-[#3D5DD8] dark:hover:bg-[#4B6BE6] text-white"
        disabled={isSaving}
      >
        {isSaving ? "Saving..." : "Update Current Work"}
      </Button>
    </form>
  );
}
