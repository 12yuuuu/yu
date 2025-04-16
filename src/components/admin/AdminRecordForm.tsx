
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import recordsData from "@/data/records.json";

// Define the Record type to match the JSON structure
interface DailyRecord {
  date: string;
  title: string;
  description: string;
}

// Form schema using Zod
const formSchema = z.object({
  date: z.string().min(1, { message: "Date is required" }),
  title: z.string().min(1, { message: "Title is required" }).max(100),
  description: z.string().min(1, { message: "Description is required" }).max(500)
});

type FormValues = z.infer<typeof formSchema>;

export function AdminRecordForm() {
  const [records, setRecords] = useState<DailyRecord[]>([...recordsData]);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      title: "",
      description: ""
    }
  });

  const onSubmit = async (data: FormValues) => {
    try {
      // In a real application, this would send data to a server or database
      // For this demo, we'll just update the state and show a toast notification
      
      // Create a properly typed record object
      const newRecord: DailyRecord = {
        date: data.date,
        title: data.title,
        description: data.description
      };
      
      // Add new record to the beginning of the array
      const updatedRecords = [newRecord, ...records];
      setRecords(updatedRecords);
      
      toast.success("Daily record added successfully", {
        description: "In a production environment, this would be saved to your database or JSON file."
      });
      
      // Reset form
      form.reset({
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        title: "",
        description: ""
      });
    } catch (error) {
      toast.error("Failed to add record", {
        description: "There was an error saving your record. Please try again."
      });
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-blue-50/50 dark:bg-blue-900/10 p-4 rounded-lg border border-blue-100 dark:border-blue-900">
        <p className="text-sm text-blue-700 dark:text-blue-300 font-share-tech-mono">
          <strong>Note:</strong> In this demo, records are stored in memory only. In a production environment, 
          you would connect this form to your backend to save records permanently to your JSON file or database.
        </p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#1E3A8A] dark:text-[#A3BFFA] font-quantico">Date</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="April 10, 2025" 
                    className="border-blue-200 dark:border-blue-800 focus:border-blue-500"
                    {...field} 
                  />
                </FormControl>
                <FormDescription className="text-[#4B5EAA]/70 dark:text-[#D6E0FA]/70 font-share-tech-mono text-xs">
                  Format: Month Day, Year (e.g., April 10, 2025)
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
                    placeholder="What did you work on?" 
                    className="border-blue-200 dark:border-blue-800 focus:border-blue-500"
                    {...field} 
                  />
                </FormControl>
                <FormDescription className="text-[#4B5EAA]/70 dark:text-[#D6E0FA]/70 font-share-tech-mono text-xs">
                  A brief title for your daily activity (max 100 characters)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#1E3A8A] dark:text-[#A3BFFA] font-quantico">Description</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Describe what you worked on in detail..." 
                    className="min-h-[100px] border-blue-200 dark:border-blue-800 focus:border-blue-500 font-share-tech-mono"
                    {...field} 
                  />
                </FormControl>
                <FormDescription className="text-[#4B5EAA]/70 dark:text-[#D6E0FA]/70 font-share-tech-mono text-xs">
                  Detailed description of your activity (max 500 characters)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="flex justify-end">
            <Button 
              type="submit" 
              className="bg-[#1E3A8A] hover:bg-blue-800 text-white dark:bg-[#A3BFFA] dark:text-gray-900 dark:hover:bg-blue-400"
            >
              Add Record
            </Button>
          </div>
        </form>
      </Form>
      
      <div className="mt-10">
        <h3 className="text-xl font-quantico text-[#1E3A8A] dark:text-[#A3BFFA] mb-4">Preview Records</h3>
        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
          {records.map((record, index) => (
            <div 
              key={index} 
              className="p-4 border border-blue-100 dark:border-blue-900 rounded-lg bg-white/50 dark:bg-gray-800/50"
            >
              <div className="text-sm text-blue-600 dark:text-blue-400 font-quantico">{record.date}</div>
              <div className="text-lg font-medium text-[#1E3A8A] dark:text-[#A3BFFA] font-quantico">{record.title}</div>
              <div className="text-[#4B5EAA] dark:text-[#D6E0FA] font-share-tech-mono text-sm">{record.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
