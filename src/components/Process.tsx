export const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We dive deep into your business goals, user needs, and technical requirements to create a comprehensive strategy.",
      icon: "🔍"
    },
    {
      number: "02", 
      title: "Design & Prototype",
      description: "Our team creates intuitive designs and interactive prototypes that bring your vision to life.",
      icon: "🎨"
    },
    {
      number: "03",
      title: "Development & Testing",
      description: "We build scalable, high-performance solutions with rigorous testing to ensure quality.",
      icon: "⚡"
    },
    {
      number: "04",
      title: "Launch & Optimize",
      description: "We help you launch successfully and continuously optimize based on real user data.",
      icon: "🚀"
    }
  ];

  return (
    <section id="process" className="py-24 bg-surface-soft">
      <div className="container-wide">
        <div className="text-center mb-20 fade-in">
          <h2 className="text-headline mb-6">Our Process</h2>
          <p className="text-body-large max-w-2xl mx-auto">
            A proven methodology that transforms good digital products into exceptional ones.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Connector Line - Hidden on mobile, shown on desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-8 h-px bg-border transform translate-x-4"></div>
              )}
              
              <div className="bg-surface rounded-2xl p-8 text-center hover:shadow-medium transition-all duration-300">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-pink rounded-full mb-6">
                  <span className="text-2xl font-bold text-primary">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="text-4xl mb-4">{step.icon}</div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {step.title}
                </h3>
                <p className="text-body">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="bg-surface rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Ready to unwrap your digital potential?
            </h3>
            <p className="text-body-large mb-8">
              Let's discuss how we can help take your platform from good to 'wow'.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-primary">
                Start Your Project
              </button>
              <button className="btn-ghost">
                Book a Strategy Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};