
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <NavBar />
      <main className="pt-24 min-h-screen flex items-center justify-center">
        <div className="max-w-xl mx-auto px-4 py-16 text-center">
          <div className="mb-8 text-blue-600 dark:text-blue-400">
            <svg
              className="w-24 h-24 mx-auto"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M15 9l-6 6M9 9l6 6" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            404
          </h1>
          <p className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8">
            Oops! Page not found
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="button-primary inline-flex items-center"
          >
            <Home className="mr-2 h-5 w-5" />
            Return Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
