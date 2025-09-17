import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const ScrollServices = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const services = [
    {
      id: "strategy",
      title: "Strategy",
      description: "Clear vision and high-level thinking to make a long-lasting (product) impact.",
      categories: [
        {
          title: "Growth",
          items: ["UX/UI Audits", "Accessibility Audits", "Conversion Optimization"]
        },
        {
          title: "Creative", 
          items: ["Brand Strategy", "Creative Direction", "Consulting", "Knowledge Sharing"]
        },
        {
          title: "Technical",
          items: ["Technical Strategy", "Architecture", "Technical Audits"]
        },
        {
          title: "Enablement",
          items: ["Operational advisory", "Process optimization", "Knowledge sharing"]
        }
      ],
      imageClass: "bg-gradient-to-br from-accent-pink/20 to-accent-blue/20"
    },
    {
      id: "design",
      title: "Design", 
      description: "From small incremental changes to full redesigns. Always designed with purpose.",
      categories: [
        {
          title: "Insights",
          items: ["(User) Research", "User Testing", "Information Architecture"]
        },
        {
          title: "Experience",
          items: ["UX/UI Design", "Product Design", "Mobile App Design", "Website Design"]
        },
        {
          title: "Visual",
          items: ["Graphics & Illustrations", "Marketing Assets", "Pitch Decks", "Interaction Design", "Motion & Animation"]
        },
        {
          title: "Systems", 
          items: ["Brand Identity Guidelines", "Design Systems"]
        }
      ],
      imageClass: "bg-gradient-to-br from-accent-blue/20 to-accent-yellow/20"
    },
    {
      id: "development",
      title: "Development",
      description: "Scalable, performant solutions built with modern technologies and best practices.",
      categories: [
        {
          title: "Frontend",
          items: ["React Applications", "Performance Optimization", "Responsive Design"]
        },
        {
          title: "Backend",
          items: ["API Development", "Database Design", "Cloud Integration"]
        },
        {
          title: "Mobile",
          items: ["React Native", "Progressive Web Apps", "Cross-platform Solutions"]
        },
        {
          title: "Infrastructure",
          items: ["DevOps", "CI/CD Pipelines", "Monitoring & Analytics"]
        }
      ],
      imageClass: "bg-gradient-to-br from-accent-yellow/20 to-accent-pink/20"
    }
  ];

  // Calculate active section based on scroll progress
  const activeSection = useTransform(scrollYProgress, (value) => {
    const sectionIndex = Math.floor(value * services.length);
    return Math.min(sectionIndex, services.length - 1);
  });

  return (
    <div ref={containerRef} className="relative">
      {/* Header Section */}
      <section className="py-24 bg-background">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
              Services
            </h2>
            <p className="text-body-large max-w-4xl mx-auto text-muted-foreground">
              From big ideas to fine details, we scale tech brands through strategy, design, and development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Scrolling Services */}
      <div style={{ height: `${services.length * 100}vh` }}>
        <div className="sticky top-0 h-screen flex items-center justify-center">
        {services.map((service, index) => {
          const current = useTransform(scrollYProgress, v => v * services.length);
          const isActive = useTransform(current, v => Math.floor(v) === index);
          const sectionOpacity = useTransform(current, v => {
            const distance = Math.abs(v - index);
            return distance < 0.5 ? 1 : 0;
          });

          return (
            <motion.div
              key={service.id}
              className="absolute inset-0 flex items-center justify-center"
              style={{
                opacity: sectionOpacity,
                zIndex: index === Math.floor(scrollYProgress.get() * services.length) ? 10 : 1
              }}
            >
                <div className="container-wide">
                  <div className="rounded-3xl bg-surface/95 supports-[backdrop-filter]:bg-surface/80 backdrop-blur border border-border-soft shadow-medium p-8 lg:p-12">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Content */}
                    <div>
                      <motion.h3 
                        className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                      >
                        {service.title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-body-large text-muted-foreground mb-12 max-w-2xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        {service.description}
                      </motion.p>

                      {/* Categories Grid */}
                      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {service.categories.map((category, categoryIndex) => (
                          <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                              duration: 0.5, 
                              delay: 0.3 + categoryIndex * 0.1 
                            }}
                          >
                            <h4 className="text-lg font-semibold text-foreground mb-4">
                              {category.title}
                            </h4>
                            <ul className="space-y-2">
                              {category.items.map((item, itemIndex) => (
                                <li 
                                  key={itemIndex}
                                  className="text-body text-muted-foreground"
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Image/Visual */}
                    <motion.div 
                      className={`hidden lg:block h-96 rounded-3xl ${service.imageClass} relative overflow-hidden`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-black/10"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                          <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};