
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { CatIcon } from "./CatIcon";

// Moved navigation links to a separate constant for better maintainability
const NavLinks = [
  { name: "About Me", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Extracted NavLink component for better code organization and DRY principle
  const NavLink = ({ link }: { link: { name: string; path: string } }) => (
    <Link
      to={link.path}
      className={cn(
        "font-medium transition-all duration-200 hover:text-blue-600 dark:hover:text-blue-300 font-quantico",
        location.pathname === link.path
          ? "text-[#1E3A8A] dark:text-[#A3BFFA]"
          : "text-[#4B5EAA] dark:text-[#D6E0FA]"
      )}
    >
      {link.name}
    </Link>
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out-expo",
        isScrolled 
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            to="/yu"
            className="text-[#1E3A8A] dark:text-[#A3BFFA] transition-colors hover:text-blue-600 dark:hover:text-blue-200"
            aria-label="Home"
          >
            <CatIcon />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NavLinks.map((link) => (
              <NavLink key={link.path} link={link} />
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#4B5EAA] dark:text-[#D6E0FA] hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-[62px] bg-white dark:bg-gray-900 z-40 md:hidden transition-all duration-300 ease-out-expo transform",
          mobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        )}
      >
        <div className="p-4 pt-8 space-y-6">
          {NavLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "block py-2 px-4 text-lg font-medium transition-colors rounded-lg font-quantico",
                location.pathname === link.path
                  ? "bg-blue-50 dark:bg-blue-900/30 text-[#1E3A8A] dark:text-[#A3BFFA]"
                  : "text-[#4B5EAA] dark:text-[#D6E0FA] hover:bg-gray-50 dark:hover:bg-gray-800"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
