import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Users, Zap, MessageSquare, BookOpen } from "lucide-react";

export const ScrollTransition = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showSolutions, setShowSolutions] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const problems = [
    "Unscalable products",
    "Slow feature releases", 
    "Outdated look & feel",
    "Unusable interfaces",
    "Generic brand identity",
    "Technical debt",
    "Poor user experience",
    "Inconsistent branding",
    "User drop-off",
    "Lack of expertise",
    "Missed deadlines",
    "Budget overruns"
  ];

  const solutions = [
    {
      icon: Users,
      title: "Top-tier team of experts",
      description: "Even the best teams need help. Following industry standards and beyond, our team of experts knows exactly what tools, methods and stack works best in your situation."
    },
    {
      icon: Zap,
      title: "Proven powerful process",
      description: "Stop hitting snooze on updating your product's look and feel, launching that gold-nugget feature or shaking off technical debt. Our finely process is set up to make power moves."
    },
    {
      icon: MessageSquare,
      title: "Clear-cut comms",
      description: "Slow and foggy communication weighs down on your ability to scale efficiently. Whether it's a Slack message, a video call, or an on-site session, we value clarity."
    },
    {
      icon: BookOpen,
      title: "Sharing knowledge",
      description: "Building a quality and scalable product takes ongoing effort. After helping you level up we enable your in-house teams to keep up the pace. We hand-off our work *and* expertise."
    }
  ];

  // Transform scroll progress to trigger solution view
  const solutionTrigger = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);


  // Monitor scroll to trigger solutions
  useEffect(() => {
    const unsubscribe = solutionTrigger.on("change", (value) => {
      setShowSolutions(value > 0.5);
    });
    return unsubscribe;
  }, [solutionTrigger]);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-background">
      <div className="sticky top-0 h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          {!showSolutions ? (
            // "Say bye bye to" Section
            <motion.div
              key="problems"
              initial={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 bg-background flex items-center"
            >
              <div className="container-wide">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Left side - Prominent static text */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-left z-20 relative flex flex-col justify-center"
                  >
                    {/* Waving hand animation */}
                    <motion.div
                      animate={{ 
                        rotate: [0, 14, -8, 14, -4, 10, 0],
                        scale: [1, 1.05, 1, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "easeInOut"
                      }}
                      className="inline-block mb-8 text-6xl"
                    >
                      👋
                    </motion.div>
                    
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium text-foreground leading-tight drop-shadow-sm">
                      Say bye bye to
                    </h2>
                  </motion.div>

                  {/* Right side - Continuous scrolling problems with position-based blur */}
                  <div className="flex items-center justify-center">
                    <div className="relative h-96 w-full max-w-md" style={{ height: '384px' }}>
                      {/* Scrolling container */}
                      <motion.div
                        animate={{ y: [200, -600] }}
                        transition={{
                          duration: 40,
                          ease: "linear",
                          repeat: Infinity,
                          repeatType: "loop"
                        }}
                        className="absolute inset-x-0 flex flex-col items-center space-y-8"
                      >
                        {/* Render problems multiple times for seamless loop */}
                        {[...problems, ...problems, ...problems].map((problem, index) => (
                          <motion.div
                            key={`${problem}-${index}`}
                            className="px-6 py-3 bg-gray-200 rounded-full text-2xl md:text-3xl font-medium text-gray-700 whitespace-nowrap"
                            style={{
                              position: 'relative'
                            }}
                            animate={{
                              filter: 'blur(0px)',
                              opacity: 1
                            }}
                            transition={{
                              duration: 0.3
                            }}
                          >
                            {problem}
                          </motion.div>
                        ))}
                      </motion.div>
                      
                      {/* Position-based blur overlay */}
                      <div 
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: `linear-gradient(to bottom,
                            rgba(255,255,255,0.9) 0%,
                            rgba(255,255,255,0.7) 20%,
                            rgba(255,255,255,0) 40%,
                            rgba(255,255,255,0) 60%,
                            rgba(255,255,255,0.7) 80%,
                            rgba(255,255,255,0.9) 100%
                          )`,
                          backdropFilter: 'blur(3px)',
                          WebkitBackdropFilter: 'blur(3px)'
                        }}
                      />
                      
                      {/* Sharp center area */}
                      <div 
                        className="absolute left-0 right-0 pointer-events-none"
                        style={{
                          top: '40%',
                          height: '20%',
                          background: 'transparent',
                          backdropFilter: 'blur(0px)',
                          WebkitBackdropFilter: 'blur(0px)',
                          zIndex: 2
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            // "Say hello to" Section
            <motion.div
              key="solutions"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 bg-gray-900 text-white flex items-center"
            >
              <div className="container-wide">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-center mb-16"
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, 14, -8, 14, -4, 10, 0],
                      scale: [1, 1.05, 1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut"
                    }}
                    className="inline-block mb-8 text-6xl"
                  >
                    👋
                  </motion.div>
                  
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
                    Say hello to
                  </h2>
                </motion.div>

                {/* Solutions Grid */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                  {solutions.map((solution, index) => (
                    <motion.div
                      key={solution.title}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.6 + index * 0.2,
                        ease: "easeOut"
                      }}
                      className="group"
                    >
                      {/* Icon */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                          duration: 0.5,
                          delay: 0.8 + index * 0.2,
                          type: "spring",
                          stiffness: 200
                        }}
                        className="mb-6"
                      >
                        <div className="w-16 h-16 rounded-2xl bg-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <solution.icon 
                            className="w-8 h-8 text-white" 
                            strokeWidth={1.5}
                          />
                        </div>
                      </motion.div>

                      {/* Content */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                      >
                        <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-pink-300 transition-colors duration-300">
                          {solution.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {solution.description}
                        </p>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </div>
  );
};