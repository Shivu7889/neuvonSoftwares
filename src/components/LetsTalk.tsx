import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

export const LetsTalk = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress for different animation phases - Let's talk completely disappears when content loads
  const textScale = useTransform(scrollYProgress, [0, 0.35, 0.65], [1, 0.6, 0.2]);
  const textY = useTransform(scrollYProgress, [0, 0.35, 0.65], [0, -50, -300]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 0.65], [1, 0.3, 0]);
  
  // Content reveal animations - Optimized for seamless transition
  const contentOpacity = useTransform(scrollYProgress, [0.35, 0.65], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.35, 0.65], [80, 0]);
  
  return (
    <div ref={containerRef} className="relative h-[300vh] bg-gradient-to-b from-background via-surface-soft to-background">

      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Large "Let's talk" text - Initial state */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ 
            scale: textScale, 
            y: textY,
            opacity: textOpacity
          }}
        >
          <div className="text-center">
            <motion.h1 
              className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold text-foreground leading-none"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Let's talk
            </motion.h1>
          </div>
        </motion.div>

        {/* Contact Content - Reveals after text shrinks */}
        <motion.div
          className="absolute inset-0 flex items-center"
          style={{ 
            opacity: contentOpacity,
            y: contentY 
          }}
        >
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left side - Contact content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.h2 
                  className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-8 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Find out how we can take your digital product from good to 'wow'.
                </motion.h2>

                {/* Contact Buttons */}
                <motion.div 
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="bg-surface hover:bg-surface-soft border-border text-foreground px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
                  >
                    Book a call
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="bg-surface hover:bg-surface-soft border-border text-foreground px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
                  >
                    Chat with Vince
                  </Button>
                  
                  <Button 
                    size="lg"
                    className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Send a message
                  </Button>
                </motion.div>

                {/* Additional info */}
                <motion.div
                  className="mt-8 space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <p className="text-body text-muted-foreground">
                    ✨ Free initial consultation
                  </p>
                  <p className="text-body text-muted-foreground">
                    🚀 Get a project proposal within 48 hours
                  </p>
                </motion.div>
              </motion.div>

              {/* Right side - Video/Image - Made smaller */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative max-w-sm mx-auto lg:mx-0"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-100">
                  {/* Video/Image placeholder - smaller aspect ratio */}
                  <div className="aspect-[3/4] bg-gray-200 relative overflow-hidden">
                    {/* Simulated person image */}
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-300 via-gray-200 to-gray-400 flex items-end justify-center">
                      {/* Simple person silhouette */}
                      <div className="w-full h-3/4 bg-gradient-to-t from-gray-500 via-gray-400 to-gray-300 rounded-t-full relative">
                        {/* Face area */}
                        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-gray-600 rounded-full"></div>
                        {/* Shirt area */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-blue-400 rounded-t-full"></div>
                      </div>
                    </div>
                    
                    {/* Play button overlay - smaller */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <div className="w-0 h-0 border-l-[12px] border-l-gray-800 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                      </motion.div>
                    </div>
                    
                    {/* Person info overlay - adjusted for smaller size */}
                    <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent">
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-base font-semibold">Vince</p>
                        <p className="text-xs opacity-90">Founder & Lead Designer</p>
                      </div>
                    </div>
                  </div>

                  {/* Sound indicator - smaller */}
                  <motion.div 
                    className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                  </motion.div>
                </div>

                {/* Floating elements - smaller */}
                <motion.div
                  className="absolute -top-3 -left-3 w-10 h-10 bg-accent-yellow rounded-full opacity-60"
                  animate={{ y: [0, -8, 0], rotate: [0, 180, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <motion.div
                  className="absolute -bottom-4 -right-4 w-8 h-8 bg-accent-pink rounded-full opacity-70"
                  animate={{ y: [0, 8, 0], x: [0, -3, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};