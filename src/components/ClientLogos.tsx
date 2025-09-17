export const ClientLogos = () => {
  const clients = [
    { name: "Argyle", logo: "ARGYLE" },
    { name: "Spider Strategies", logo: "SPIDER" },
    { name: "Vio.com", logo: "VIO" },
    { name: "Miro", logo: "MIRO" },
    { name: "Studytube", logo: "STUDYTUBE" },
    { name: "The Feed", logo: "THE FEED" },
    { name: "Tiqets", logo: "TIQETS" },
    { name: "Employes", logo: "EMPLOYES" },
    { name: "TechCorp", logo: "TECHCORP" },
    { name: "InnovateLab", logo: "INNOVATE" },
    { name: "DataFlow", logo: "DATAFLOW" },
    { name: "CloudSync", logo: "CLOUDSYNC" },
  ];

  // Duplicate clients array for seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-24 overflow-hidden" style={{ backgroundColor: '#0E0E0E' }}>
      <div className="container-wide">
        <div className="text-center mb-20 fade-in">
          <p className="text-sm text-gray-400 mb-4 tracking-wider uppercase">A few of our clients</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Ambitious companies we've<br />
            helped scale up
          </h2>
        </div>

        {/* Infinite scrolling logos */}
        <div className="relative">
          <div className="flex animate-scroll">
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 mx-8 group cursor-pointer transition-all duration-300 hover:scale-110"
              >
                <div className="w-40 h-20 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 group-hover:shadow-lg group-hover:shadow-white/10 transition-all duration-300">
                  <span className="text-white/70 font-semibold text-sm tracking-wide group-hover:text-white transition-colors duration-300">
                    {client.logo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust indicator */}
        <div className="text-center mt-20 fade-in">
          <p className="text-gray-400 text-sm tracking-wide">
            Trusted by 50+ scaling tech companies worldwide
          </p>
        </div>
      </div>
    </section>
  );
};