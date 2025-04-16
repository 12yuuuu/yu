
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import projectsData from "@/data/projects.json";
import { Project } from "@/lib/projects";

// Form schema using Zod
const formSchema = z.object({
  id: z.string().min(1, { message: "ID is required" }),
  title: z.string().min(1, { message: "Title is required" }).max(100),
  description: z.string().min(1, { message: "Description is required" }).max(500),
  image: z.string().url({ message: "Must be a valid URL" }),
  tags: z.string().min(1, { message: "At least one tag is required" }),
  liveUrl: z.string().url({ message: "Must be a valid URL" }).optional().or(z.literal("")),
  repoUrl: z.string().url({ message: "Must be a valid URL" }).optional().or(z.literal(""))
});

type FormValues = z.infer<typeof formSchema>;

export function AdminProjectForm() {
  const [projects, setProjects] = useState<Project[]>([...projectsData]);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: `project-${projectsData.length + 1}`,
      title: "",
      description: "",
      image: "",
      tags: "",
      liveUrl: "",
      repoUrl: ""
    }
  });

  const onSubmit = async (data: FormValues) => {
    try {
      // In a real application, this would send data to a server
      // For this demo, we'll just update the state and show a toast notification
      
      const formattedProject: Project = {
        id: data.id,                // Ensure id is explicitly assigned
        title: data.title,          // Ensure title is explicitly assigned
        description: data.description, // Ensure description is explicitly assigned
        image: data.image,          // Ensure image is explicitly assigned
        tags: data.tags.split(',').map(tag => tag.trim()),
        liveUrl: data.liveUrl || undefined,
        repoUrl: data.repoUrl || undefined
      };
      
      // Add new project to the projects array
      const updatedProjects = [...projects, formattedProject];
      setProjects(updatedProjects);
      
      toast.success("Project added successfully", {
        description: "In a production environment, this would be saved to your database or JSON file."
      });
      
      // Reset form with incremented project ID
      form.reset({
        id: `project-${updatedProjects.length + 1}`,
        title: "",
        description: "",
        image: "",
        tags: "",
        liveUrl: "",
        repoUrl: ""
      });
    } catch (error) {
      toast.error("Failed to add project", {
        description: "There was an error saving your project. Please try again."
      });
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-blue-50/50 dark:bg-blue-900/10 p-4 rounded-lg border border-blue-100 dark:border-blue-900">
        <p className="text-sm text-blue-700 dark:text-blue-300 font-share-tech-mono">
          <strong>Note:</strong> In this demo, projects are stored in memory only. In a production environment, 
          you would connect this form to your backend to save projects permanently to your JSON file or database.
        </p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#1E3A8A] dark:text-[#A3BFFA] font-quantico">Project ID</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="project-6" 
                      className="border-blue-200 dark:border-blue-800 focus:border-blue-500"
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription className="text-[#4B5EAA]/70 dark:text-[#D6E0FA]/70 font-share-tech-mono text-xs">
                    A unique identifier for the project
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#1E3A8A] dark:text-[#A3BFFA] font-quantico">Title</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Project Title" 
                      className="border-blue-200 dark:border-blue-800 focus:border-blue-500"
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription className="text-[#4B5EAA]/70 dark:text-[#D6E0FA]/70 font-share-tech-mono text-xs">
                    The name of your project
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#1E3A8A] dark:text-[#A3BFFA] font-quantico">Description</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Describe your project..." 
                    className="min-h-[100px] border-blue-200 dark:border-blue-800 focus:border-blue-500 font-share-tech-mono"
                    {...field} 
                  />
                </FormControl>
                <FormDescription className="text-[#4B5EAA]/70 dark:text-[#D6E0FA]/70 font-share-tech-mono text-xs">
                  A detailed description of your project (max 500 characters)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#1E3A8A] dark:text-[#A3BFFA] font-quantico">Image URL</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="https://example.com/image.jpg" 
                    className="border-blue-200 dark:border-blue-800 focus:border-blue-500"
                    {...field} 
                  />
                </FormControl>
                <FormDescription className="text-[#4B5EAA]/70 dark:text-[#D6E0FA]/70 font-share-tech-mono text-xs">
                  URL to the project image (use Unsplash or similar for free images)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#1E3A8A] dark:text-[#A3BFFA] font-quantico">Tags</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="React, TypeScript, UI Design" 
                    className="border-blue-200 dark:border-blue-800 focus:border-blue-500"
                    {...field} 
                  />
                </FormControl>
                <FormDescription className="text-[#4B5EAA]/70 dark:text-[#D6E0FA]/70 font-share-tech-mono text-xs">
                  Comma-separated list of technologies used (e.g., React, TypeScript, UI Design)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="liveUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#1E3A8A] dark:text-[#A3BFFA] font-quantico">Live URL (Optional)</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="https://example.com" 
                      className="border-blue-200 dark:border-blue-800 focus:border-blue-500"
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription className="text-[#4B5EAA]/70 dark:text-[#D6E0FA]/70 font-share-tech-mono text-xs">
                    Link to the live project
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="repoUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#1E3A8A] dark:text-[#A3BFFA] font-quantico">Repository URL (Optional)</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="https://github.com/username/repo" 
                      className="border-blue-200 dark:border-blue-800 focus:border-blue-500"
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription className="text-[#4B5EAA]/70 dark:text-[#D6E0FA]/70 font-share-tech-mono text-xs">
                    Link to the GitHub repository
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="flex justify-end">
            <Button 
              type="submit" 
              className="bg-[#1E3A8A] hover:bg-blue-800 text-white dark:bg-[#A3BFFA] dark:text-gray-900 dark:hover:bg-blue-400"
            >
              Add Project
            </Button>
          </div>
        </form>
      </Form>
      
      <div className="mt-10">
        <h3 className="text-xl font-quantico text-[#1E3A8A] dark:text-[#A3BFFA] mb-4">Preview Projects</h3>
        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="p-4 border border-blue-100 dark:border-blue-900 rounded-lg bg-white/50 dark:bg-gray-800/50"
            >
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/placeholder.svg";
                    }}  
                  />
                </div>
                <div className="flex-1">
                  <div className="text-lg font-medium text-[#1E3A8A] dark:text-[#A3BFFA] font-quantico">{project.title}</div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {Array.isArray(project.tags) && project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-0.5 text-xs bg-blue-100/70 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
