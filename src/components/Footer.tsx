import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-muted/50 py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <a href="mailto:info@illustraV.com" className="flex items-center gap-2 text-gray-400 hover:text-secondary">
                <Mail className="w-5 h-5" />
                info@illustraV.com
              </a>
              <a href="tel:+201552210065" className="flex items-center gap-2 text-gray-400 hover:text-secondary">
                <Phone className="w-5 h-5" />
                +20 155 221 0065
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/#about" className="text-gray-400 hover:text-secondary">About Us</a></li>
              <li><a href="/#services" className="text-gray-400 hover:text-secondary">Services</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-secondary">Contact</a></li>
            </ul>
          </div>

          {/* Book Consultation */}
          <div>
            <h3 className="text-xl font-bold mb-4">Book a Free Consultation</h3>
            <p className="text-gray-400 mb-6">Ready to transform your business? Let's talk about how we can help.</p>
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg relative group overflow-hidden"
              onClick={() => window.open('https://calendly.com/illustrav/free-business-consultation?month=2024-12', '_blank')}
            >
              <span className="relative z-10">Schedule Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 illustraV. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};