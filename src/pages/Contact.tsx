
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { BackgroundAnimation } from "@/components/BackgroundAnimation";

/**
 * Contact page component
 * Features a contact form and social links
 */
const Contact = () => {
  return (
    <>
      <BackgroundAnimation />
      <NavBar />
      <main className="min-h-screen pt-24">
        <section className="py-12 md:py-24">
          <div className="px-4 sm:px-6 lg:px-8 text-center">
            {/* Standardized section header height - 15vh */}
            <div className="section-header h-[15vh] flex flex-col items-center justify-center mb-16 opacity-0 animate-fade-in">
              <span className="inline-block px-3 py-1 bg-blue-100/70 dark:bg-blue-900/30 text-[#1E3A8A] dark:text-[#A3BFFA] text-sm font-medium rounded-full font-quantico mb-2">
                Get in Touch
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[#1E3A8A] dark:text-[#A3BFFA] font-quantico">
                Contact Me
              </h1>
              <p className="text-lg text-[#4B5EAA] dark:text-[#D6E0FA] max-w-md mx-auto text-balance font-share-tech-mono opacity-80">
                Have a project in mind or just want to say hello?
              </p>
              <div className="mx-auto h-1 w-0 bg-gradient-to-r from-[#1E3A8A] to-[#A3BFFA] mt-6 animate-heading-underline"></div>
            </div>

            {/* Contact Form - Wider layout */}
            <div className="max-w-[500px] mx-auto glass rounded-xl p-6 opacity-0 animate-fade-in animate-delay-200 card-hover-effect">
              <ContactForm />

              <div className="mt-8 pt-4 border-t border-blue-100/20 dark:border-blue-900/20">
                <h3 className="text-xl font-semibold text-[#1E3A8A] dark:text-[#A3BFFA] mb-4 font-quantico">
                  Connect With Me
                </h3>
                
                <div className="flex flex-wrap justify-center gap-3 items-center">
                  <a 
                    href="mailto:yu1inge2@gmail.com"
                    className="flex items-center group hover:bg-blue-50/50 dark:hover:bg-blue-900/20 p-2 rounded-lg transition-all duration-300 hover-scale"
                    title="Email"
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-100/70 dark:bg-blue-900/30 text-[#1E3A8A] dark:text-[#A3BFFA] group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-4 h-4" />
                    </div>
                  </a>
                  
                  <a 
                    href="https://github.com/12yuuuu"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center group hover:bg-blue-50/50 dark:hover:bg-blue-900/20 p-2 rounded-lg transition-all duration-300 hover-scale"
                    title="GitHub"
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-100/70 dark:bg-blue-900/30 text-[#1E3A8A] dark:text-[#A3BFFA] group-hover:scale-110 transition-transform duration-300">
                      <Github className="w-4 h-4" />
                    </div>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/kuan-yu-liu-b24962301/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center group hover:bg-blue-50/50 dark:hover:bg-blue-900/20 p-2 rounded-lg transition-all duration-300 hover-scale"
                    title="LinkedIn"
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-100/70 dark:bg-blue-900/30 text-[#1E3A8A] dark:text-[#A3BFFA] group-hover:scale-110 transition-transform duration-300">
                      <Linkedin className="w-4 h-4" />
                    </div>
                  </a>
                  
                  <div 
                    className="flex items-center group hover:bg-blue-50/50 dark:hover:bg-blue-900/20 p-2 rounded-lg transition-all duration-300 hover-scale"
                    title="Location"
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-100/70 dark:bg-blue-900/30 text-[#1E3A8A] dark:text-[#A3BFFA] group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                
                <p className="mt-3 font-share-tech-mono text-[#4B5EAA] dark:text-[#D6E0FA] text-sm">
                  Tainan, Taiwan
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
