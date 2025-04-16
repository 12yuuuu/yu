
import { useState } from "react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { BackgroundAnimation } from "@/components/BackgroundAnimation";
import { AdminRecordForm } from "@/components/admin/AdminRecordForm";
import { AdminProjectForm } from "@/components/admin/AdminProjectForm";
import { AdminCurrentWorkForm } from "@/components/admin/AdminCurrentWorkForm";
import { AdminSkillsForm } from "@/components/admin/AdminSkillsForm";
import { AdminFunFactsForm } from "@/components/admin/AdminFunFactsForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AdminLogin } from "@/components/admin/AdminLogin";
import { useAuth } from "@/hooks/useAuthContext";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Admin page component
 * Features forms for adding daily records and projects
 * Protected by password authentication
 */
const Admin = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <>
      <BackgroundAnimation />
      <NavBar />
      <main className="min-h-screen pt-24">
        <section className="py-12 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="section-header flex flex-col items-center justify-center mb-16 opacity-0 animate-fade-in">
              <span className="inline-block px-3 py-1 bg-blue-100/70 dark:bg-blue-900/30 text-[#1E3A8A] dark:text-[#A3BFFA] text-sm font-medium rounded-full font-quantico mb-2">
                Admin Panel
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[#1E3A8A] dark:text-[#A3BFFA] font-quantico">
                Content Management
              </h1>
              <p className="text-lg text-[#4B5EAA] dark:text-[#D6E0FA] max-w-2xl mx-auto text-center text-balance font-share-tech-mono opacity-80">
                Add and manage daily records, projects, and other content
              </p>
              <div className="mx-auto h-1 w-0 bg-gradient-to-r from-[#1E3A8A] to-[#A3BFFA] mt-6 animate-heading-underline"></div>
            </div>

            <div className="glass p-8 rounded-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-blue-200 dark:border-blue-800 shadow-lg">
              {isAuthenticated ? (
                <>
                  <div className="flex justify-end mb-6">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={logout}
                      className="text-[#4B5EAA] dark:text-[#D6E0FA] border-blue-200 dark:border-blue-800"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                  </div>
                  <Tabs defaultValue="records" className="w-full">
                    <TabsList className="grid w-full grid-cols-5 mb-8">
                      <TabsTrigger value="records">Daily Records</TabsTrigger>
                      <TabsTrigger value="projects">Projects</TabsTrigger>
                      <TabsTrigger value="current-work">Current Work</TabsTrigger>
                      <TabsTrigger value="skills">Skills</TabsTrigger>
                      <TabsTrigger value="fun-facts">Fun Facts</TabsTrigger>
                    </TabsList>
                    <TabsContent value="records">
                      <AdminRecordForm />
                    </TabsContent>
                    <TabsContent value="projects">
                      <AdminProjectForm />
                    </TabsContent>
                    <TabsContent value="current-work">
                      <AdminCurrentWorkForm />
                    </TabsContent>
                    <TabsContent value="skills">
                      <AdminSkillsForm />
                    </TabsContent>
                    <TabsContent value="fun-facts">
                      <AdminFunFactsForm />
                    </TabsContent>
                  </Tabs>
                </>
              ) : (
                <AdminLogin />
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Admin;
