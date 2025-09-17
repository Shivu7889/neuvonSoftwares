import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const HorizontalProjects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const projects = [
    {
      id: 1,
      title: "VIO Platform",
      subtitle: "SaaS Redesign",
      description: "Complete platform overhaul for a leading fintech company, focusing on user experience and conversion optimization that resulted in 300% increase in user engagement.",
      image: "bg-gradient-to-br from-blue-500 to-purple-600",
      metric: "300% Engagement Boost"
    },
    {
      id: 2,
      title: "Spider Strategies",
      subtitle: "Enterprise Software",
      description: "Strategic planning platform redesign with focus on data visualization and collaborative workflows, achieving 45% reduction in user onboarding time.",
      image: "bg-gradient-to-br from-green-500 to-teal-600",
      metric: "45% Faster Onboarding"
    },
    {
      id: 3,
      title: "On My Way",
      subtitle: "Mobile App",
      description: "Modern transportation app with real-time tracking and seamless payment integration, delivering 95% user satisfaction rating.",
      image: "bg-gradient-to-br from-orange-500 to-red-600",
      metric: "95% User Satisfaction"
    },
    {
      id: 4,
      title: "Employes",
      subtitle: "HR Platform",
      description: "Employee management platform with focus on user experience and workflow optimization, improving task completion by 60%.",
      image: "bg-gradient-to-br from-pink-500 to-purple-600",
      metric: "60% Task Improvement"
    }
  ];

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(projects.length - 1) * 100}%`]);

  return (
    <div ref={containerRef} className="relative h-[500vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-gradient-to-r from-yellow-400 via-blue-900 to-pink-500">
        <motion.div 
          className="flex h-full"
          style={{ x }}
        >
          {projects.map((project, index) => (
            <div key={project.id} className="flex-none w-full h-full relative">
              {/* Background */}
              <div className={`absolute inset-0 ${project.image} opacity-20`} />
              
              {/* Content */}
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="container-wide">
                  <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Project Image/Visual */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className={`h-96 ${project.image} rounded-2xl relative overflow-hidden shadow-2xl`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/20" />
                      <div className="absolute bottom-8 left-8">
                        <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full">
                          <span className="text-black font-semibold">{project.subtitle}</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Project Info */}
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                      className="text-white"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                      >
                        <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                          {project.title}
                        </h2>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.7 }}
                      >
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                          {project.description}
                        </p>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.9 }}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                      >
                        <p className="text-sm text-gray-400 mb-2">Key Result</p>
                        <p className="text-2xl font-bold text-white">{project.metric}</p>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Project Number */}
              <div className="absolute top-8 right-8 text-white/30 text-8xl font-bold">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};