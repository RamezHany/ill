import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden py-20 px-4">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4">
            <span className="glass px-4 py-2 rounded-full text-sm md:text-base text-secondary">
              Transform Your Business Operations
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary leading-tight">
            Streamline Your Business Operations
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your business with our expert efficiency solutions. We help you optimize workflows, automate processes, and boost productivity.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg relative group overflow-hidden"
              onClick={() => window.open('https://calendly.com/illustrav/free-business-consultation?month=2024-12', '_blank')}
            >
              <span className="relative z-10">Book a Free Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};