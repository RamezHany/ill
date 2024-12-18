export const Partners = () => {
  const partners = [
    { name: "DataFlow", logo: "/placeholder.svg" },
    { name: "gmind", logo: "/gmind.svg" },
    { name: "ARAB YOUTH ENtREPRENURSHIP FORUM", logo: "/AYEF.png" },
    { name: "EnactusAlex", logo: "/EnactusAlex.svg" },

  ];

  return (
    <section id="partners" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Trusted by Industry Leaders
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner) => (
            <div key={partner.name} className="glass p-6 aspect-video flex items-center justify-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-[120px] opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};