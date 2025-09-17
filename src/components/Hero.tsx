import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-accent-yellow rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-accent-pink rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container-wide text-center relative z-10">
        <div className="max-w-5xl mx-auto space-y-8 fade-in">
          {/* Logo/Brand at top */}
          <div className="slide-up mb-16">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-8 bg-foreground rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-background rounded-sm transform rotate-12"></div>
              </div>
              <span className="text-2xl font-bold tracking-wider">Neuvon Software</span>
            </div>
          </div>
          
          {/* Main Headline with dramatic spacing */}
          <h1 className="text-hero text-primary">
            <span className="block">Unwrap your</span>
            <span className="block">digital potential</span>
          </h1>
          
          {/* Subtitle */}
          <div className="space-y-4 slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-subheadline">
              Neuvon Software is a digital product agency.
            </p>
            <p className="text-body-large max-w-2xl mx-auto">
              We help scaling tech companies take their platform from good to 'wow'.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};