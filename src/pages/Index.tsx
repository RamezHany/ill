import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Partners } from "@/components/Partners";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { Separator } from "@/components/Separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Partners />
      <Newsletter />
      <Separator />
      <Footer />
    </div>
  );
};

export default Index;