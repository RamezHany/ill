import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If we're not on homepage, navigate to home first
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    }
  };

  // Handle scrolling after navigation
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
      // Clear the state
      navigate('/', { replace: true, state: {} });
    }
  }, [location, navigate]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              navigate('/');
            }} 
            className="flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <img src="/logo.svg" alt="illustraV Logo" className="h-16 w-32" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-foreground/80 hover:text-foreground">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground/80 hover:text-foreground">
              About
            </button>
            <button onClick={() => scrollToSection('partners')} className="text-foreground/80 hover:text-foreground">
              Partners
            </button>
            <button onClick={() => navigate("/contact")} className="text-foreground/80 hover:text-foreground">
              Contact
            </button>
            <Button 
              onClick={() => window.open('https://calendly.com/illustrav/free-business-consultation?month=2024-12', '_blank')}
              className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25"
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('services')} 
              className="block w-full text-left text-foreground/80 hover:text-foreground py-2"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="block w-full text-left text-foreground/80 hover:text-foreground py-2"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('partners')} 
              className="block w-full text-left text-foreground/80 hover:text-foreground py-2"
            >
              Partners
            </button>
            <button 
              onClick={() => {
                navigate("/contact");
                setIsOpen(false);
              }} 
              className="block w-full text-left text-foreground/80 hover:text-foreground py-2"
            >
              Contact
            </button>
            <Button 
              onClick={() => {
                window.open('https://calendly.com/illustrav/free-business-consultation?month=2024-12', '_blank');
                setIsOpen(false);
              }}
              className="w-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25"
            >
              Book Consultation
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};