export const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="glass aspect-video rounded-2xl overflow-hidden">
              <img 
                src="/main-logo.svg" 
                alt="Business Operations Excellence" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary rounded-full opacity-20 blur-2xl" />
          </div>
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Your Partner in Business Excellence</h2>
            <p className="text-lg text-gray-300 mb-6">
              We are business operations experts focused on one goal: helping companies reduce costs and increase efficiency. Our solutions deliver measurable ROI by streamlining your workflows and eliminating operational bottlenecks.
            </p>
            <p className="text-lg text-gray-300">
              With our proven track record, we transform complex business processes into smooth, efficient operations that save time, reduce errors, and boost your bottom line.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};