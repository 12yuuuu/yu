
import { useState, useEffect } from "react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { BackgroundAnimation } from "@/components/BackgroundAnimation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { format } from "date-fns";

interface GuestbookEntry {
  id: string;
  name: string;
  email?: string;
  message: string;
  timestamp: string;
}

function GuestbookEntries({ entries }: { entries: GuestbookEntry[] }) {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4 text-[#1E3A8A] dark:text-[#A3BFFA]">
        Messages
      </h2>
      
      {entries.length === 0 ? (
        <p className="text-center text-[#4B5EAA] dark:text-[#D6E0FA] opacity-70 py-8">
          No messages yet. Be the first to leave one!
        </p>
      ) : (
        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
          {entries.map((entry) => (
            <div 
              key={entry.id}
              className="p-4 rounded-lg bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50 animate-fade-in"
            >
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-[#1E3A8A] dark:text-[#A3BFFA]">
                  {entry.name}
                </h3>
                <span className="text-xs text-[#4B5EAA]/70 dark:text-[#D6E0FA]/70">
                  {format(new Date(entry.timestamp), "MMMM d, yyyy, h:mm a")}
                </span>
              </div>
              <p className="mt-2 text-[#4B5EAA] dark:text-[#D6E0FA] whitespace-pre-line">
                {entry.message}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Guestbook = () => {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  
  useEffect(() => {
    // In a real app, we'd fetch from an API
    // For demo, we'll load from the JSON file
    import("@/data/guestbook.json")
      .then((data) => setEntries(data.default))
      .catch((err) => console.error("Failed to load guestbook entries:", err));
  }, []);
  
  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    
    // Create new entry
    const newEntry: GuestbookEntry = {
      id: crypto.randomUUID(),
      ...data,
      timestamp: new Date().toISOString()
    };
    
    // In a real app, we'd send this to an API endpoint
    // For demo, we'll just update the state
    setTimeout(() => {
      setEntries([newEntry, ...entries]);
      toast.success("Message added to guestbook!");
      reset();
      setIsSubmitting(false);
    }, 500);
  };
  
  return (
    <>
      <BackgroundAnimation />
      <NavBar />
      <main className="min-h-screen pt-24">
        <section className="py-12 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="section-header flex flex-col items-center justify-center mb-16 opacity-0 animate-fade-in">
              <span className="inline-block px-3 py-1 bg-blue-100/70 dark:bg-blue-900/30 text-[#1E3A8A] dark:text-[#A3BFFA] text-sm font-medium rounded-full font-quantico mb-2">
                Leave a Message
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[#1E3A8A] dark:text-[#A3BFFA] font-quantico">
                Guestbook
              </h1>
              <p className="text-lg text-[#4B5EAA] dark:text-[#D6E0FA] max-w-2xl mx-auto text-center text-balance font-share-tech-mono opacity-80">
                Sign my virtual guestbook and leave a message about your visit
              </p>
              <div className="mx-auto h-1 w-0 bg-gradient-to-r from-[#1E3A8A] to-[#A3BFFA] mt-6 animate-heading-underline"></div>
            </div>
            
            <div className="glass p-8 rounded-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-blue-200 dark:border-blue-800 shadow-lg">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[#1E3A8A] dark:text-[#A3BFFA]">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    {...register("name", { required: "Name is required" })}
                    className="border-blue-200 dark:border-blue-800 focus:border-blue-400 dark:focus:border-blue-600"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#1E3A8A] dark:text-[#A3BFFA]">
                    Email (optional)
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    {...register("email", {
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className="border-blue-200 dark:border-blue-800 focus:border-blue-400 dark:focus:border-blue-600"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#1E3A8A] dark:text-[#A3BFFA]">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    {...register("message", { required: "Message is required" })}
                    className="min-h-[120px] border-blue-200 dark:border-blue-800 focus:border-blue-400 dark:focus:border-blue-600"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-[#1E3A8A] hover:bg-[#2A4BAA] dark:bg-[#3D5DD8] dark:hover:bg-[#4B6BE6] text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Sign Guestbook"}
                </Button>
              </form>
              
              <GuestbookEntries entries={entries} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Guestbook;
