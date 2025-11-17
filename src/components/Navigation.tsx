import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

export function Navigation({ 
  currentPage, 
  setCurrentPage 
}: { 
  currentPage: "home" | "about" | "projects";
  setCurrentPage: (page: "home" | "about" | "projects") => void;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleNavigation = (page: "home" | "about" | "projects", section?: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    
    if (section) {
      setTimeout(() => scrollToSection(section), 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleServiceClick = (section: string) => {
    if (currentPage !== "home") {
      setCurrentPage("home");
      setTimeout(() => scrollToSection(section), 100);
    } else {
      scrollToSection(section);
    }
    setIsServicesOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button 
              onClick={() => handleNavigation("home")}
              className="text-emerald-600 cursor-pointer"
            >
              NAKPRI
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <button
              onClick={() => handleNavigation("home")}
              className={`transition-colors ${
                currentPage === "home" 
                  ? "text-emerald-600" 
                  : "text-gray-700 hover:text-emerald-600"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("about")}
              className={`transition-colors ${
                currentPage === "about" 
                  ? "text-emerald-600" 
                  : "text-gray-700 hover:text-emerald-600"
              }`}
            >
              About
            </button>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className="text-gray-700 hover:text-emerald-600 transition-colors flex items-center"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                  <button
                    onClick={() => handleServiceClick("it-consultancy")}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                  >
                    IT Services
                  </button>
                  <button
                    onClick={() => handleServiceClick("facility-management")}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                  >
                    Facility Management
                  </button>
                  <button
                    onClick={() => handleServiceClick("agriculture")}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                  >
                    Agriculture
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavigation("projects")}
              className={`transition-colors ${
                currentPage === "projects" 
                  ? "text-emerald-600" 
                  : "text-gray-700 hover:text-emerald-600"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => handleNavigation("home")}
                className="text-gray-700 hover:text-emerald-600 transition-colors py-2 text-left"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation("about")}
                className="text-gray-700 hover:text-emerald-600 transition-colors py-2 text-left"
              >
                About
              </button>
              
              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="text-gray-700 hover:text-emerald-600 transition-colors py-2 text-left w-full flex items-center justify-between"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    <button
                      onClick={() => handleServiceClick("it-consultancy")}
                      className="text-gray-600 hover:text-emerald-600 transition-colors py-2 text-left w-full"
                    >
                      IT Services
                    </button>
                    <button
                      onClick={() => handleServiceClick("facility-management")}
                      className="text-gray-600 hover:text-emerald-600 transition-colors py-2 text-left w-full"
                    >
                      Facility Management
                    </button>
                    <button
                      onClick={() => handleServiceClick("agriculture")}
                      className="text-gray-600 hover:text-emerald-600 transition-colors py-2 text-left w-full"
                    >
                      Agriculture
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNavigation("projects")}
                className="text-gray-700 hover:text-emerald-600 transition-colors py-2 text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-emerald-600 transition-colors py-2 text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}