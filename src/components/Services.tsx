import { Heart, Layers, Globe } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Brands",
      description: "Your brand is the essence of your company's identity. It must reflect your vision, values, and voice to set you apart from competitors and build trust."
    },
    {
      icon: Layers,
      title: "Platforms",
      description: "Your platform, app, dashboard — or whatever you call it — is probably your bread and butter. It needs to be highly usable, intuitive, load fast and look amazing."
    },
    {
      icon: Globe,
      title: "Websites",
      description: "Your digital front door should tell your story, have the look and feel that is consistent with your vision. And most of all, turn visitors into paying users."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-20 fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 leading-tight">
            Everything you'd <span className="font-semibold">need</span>
          </h2>
          <p className="text-body-large max-w-4xl mx-auto text-muted-foreground">
            Scaling up is exciting, but it also brings along challenges like outdated design, technical 
            debt and so on. You need a digital product agency that helps you take your platform — and 
            beyond — to the next level.
          </p>
        </div>

        {/* Services Grid */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 md:space-x-[-120px] lg:space-x-[-100px]">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group p-8 lg:p-10 rounded-3xl border border-border-soft bg-surface transition-all duration-500 fade-in shadow-[0_0_40px_rgba(236,72,153,0.15)] ${
                index === 0 
                  ? 'transform -rotate-6 translate-y-8 z-10 scale-95 md:scale-90' 
                  : index === 1 
                  ? 'z-30 scale-100 md:scale-110' 
                  : 'transform rotate-6 translate-y-8 z-10 scale-95 md:scale-90'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-accent-pink flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon 
                    className="w-8 h-8 text-primary" 
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-body text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};