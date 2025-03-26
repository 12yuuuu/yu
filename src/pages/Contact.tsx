
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <>
      <NavBar />
      <main className="min-h-screen pt-24 bg-gradient-to-br from-blue-50/50 to-white dark:from-blue-950/20 dark:to-background">
        <section className="page-container">
          <div className="max-w-3xl mx-auto text-center mb-12 opacity-0 animate-fade-in">
            <span className="inline-block px-3 py-1 bg-blue-100/70 dark:bg-blue-900/30 text-[#1E3A8A] dark:text-[#A3BFFA] text-sm font-medium rounded-full font-quantico mb-2">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[#1E3A8A] dark:text-[#A3BFFA] font-quantico">
              Contact Me
            </h1>
            <p className="text-lg text-[#4B5EAA] dark:text-[#D6E0FA] max-w-2xl mx-auto text-balance font-share-tech-mono opacity-80">
              Have a project in mind or just want to say hello? Fill out the form or contact me directly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Information */}
            <Card className="lg:col-span-2 glass-card bg-white/40 dark:bg-black/20 border-0 shadow-sm overflow-hidden opacity-0 animate-fade-in animate-delay-100">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10"></div>
              
              <CardContent className="p-6 relative z-10">
                <h3 className="text-xl font-semibold text-[#1E3A8A] dark:text-[#A3BFFA] mb-6 font-quantico">
                  Contact Information
                </h3>
                
                <div className="space-y-5">
                  <a 
                    href="mailto:yu1inge2@gmail.com"
                    className="flex items-center group hover:bg-blue-50/50 dark:hover:bg-blue-900/20 p-2 rounded-lg transition-all duration-300"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100/70 dark:bg-blue-900/30 text-[#1E3A8A] dark:text-[#A3BFFA] mr-3 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-share-tech-mono text-[#4B5EAA] dark:text-[#D6E0FA] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        yu1inge2@gmail.com
                      </p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://github.com/12yuuuu"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center group hover:bg-blue-50/50 dark:hover:bg-blue-900/20 p-2 rounded-lg transition-all duration-300"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100/70 dark:bg-blue-900/30 text-[#1E3A8A] dark:text-[#A3BFFA] mr-3 group-hover:scale-110 transition-transform duration-300">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-share-tech-mono text-[#4B5EAA] dark:text-[#D6E0FA] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        github.com/12yuuuu
                      </p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/kuan-yu-liu-b24962301/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center group hover:bg-blue-50/50 dark:hover:bg-blue-900/20 p-2 rounded-lg transition-all duration-300"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100/70 dark:bg-blue-900/30 text-[#1E3A8A] dark:text-[#A3BFFA] mr-3 group-hover:scale-110 transition-transform duration-300">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-share-tech-mono text-[#4B5EAA] dark:text-[#D6E0FA] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        Kuan-Yu Liu
                      </p>
                    </div>
                  </a>
                  
                  <div className="flex items-center group hover:bg-blue-50/50 dark:hover:bg-blue-900/20 p-2 rounded-lg transition-all duration-300">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100/70 dark:bg-blue-900/30 text-[#1E3A8A] dark:text-[#A3BFFA] mr-3 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-share-tech-mono text-[#4B5EAA] dark:text-[#D6E0FA]">
                        Tainan, Taiwan
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="lg:col-span-3 glass-card bg-white/40 dark:bg-black/20 border-0 shadow-sm overflow-hidden opacity-0 animate-fade-in animate-delay-200">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10"></div>
              
              <CardContent className="p-6 sm:p-8 relative z-10">
                <h3 className="text-xl font-semibold text-[#1E3A8A] dark:text-[#A3BFFA] mb-6 font-quantico">
                  Send Me a Message
                </h3>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
