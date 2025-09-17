import { Button } from "@/components/ui/button";

export const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "VIO Platform Redesign",
      category: "SaaS Product",
      description: "Complete platform overhaul for a leading fintech company, focusing on user experience and conversion optimization.",
      image: "bg-accent-pink",
      metrics: "300% increase in user engagement"
    },
    {
      id: 2,
      title: "Spider Strategies",
      category: "Enterprise Software",
      description: "Strategic planning platform redesign with focus on data visualization and collaborative workflows.",
      image: "bg-accent-blue",
      metrics: "45% reduction in user onboarding time"
    },
    {
      id: 3,
      title: "On My Way",
      category: "Mobile App",
      description: "Modern transportation app with real-time tracking and seamless payment integration.",
      image: "bg-accent-yellow",
      metrics: "95% user satisfaction rating"
    },
    {
      id: 4,
      title: "Employes",
      category: "HR Platform",
      description: "Employee management platform with focus on user experience and workflow optimization.",
      image: "bg-surface-accent",
      metrics: "60% improvement in task completion"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container-wide">
        <div className="text-center mb-20 fade-in">
          <h2 className="text-headline mb-6">Featured Projects</h2>
          <p className="text-body-large max-w-2xl mx-auto">
            See how we've helped companies transform their digital products and achieve remarkable results.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group project-card slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image Placeholder */}
              <div className={`h-80 ${project.image} rounded-t-2xl relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/10"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-block bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-primary">
                    {project.category}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8 bg-surface rounded-b-2xl">
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  {project.title}
                </h3>
                <p className="text-body mb-6">
                  {project.description}
                </p>
                
                {/* Metrics */}
                <div className="mb-6 p-4 bg-surface-soft rounded-xl">
                  <p className="text-sm text-secondary font-medium">Key Result</p>
                  <p className="text-lg font-semibold text-primary">{project.metrics}</p>
                </div>

                {/* View Project Button */}
                <Button className="btn-ghost group">
                  View Project
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-16 fade-in" style={{ animationDelay: '0.8s' }}>
          <Button className="btn-primary">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};