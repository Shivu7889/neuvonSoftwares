import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    budget: "",
    message: ""
  });
  const { toast } = useToast();

  const budgetOptions = [
    "A$15.000 - $30.000",
    "B$30.000 - $70.000", 
    "C$70.000 - $120.000",
    "DI'm not sure yet"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request sent successfully!",
      description: "We'll get back to you within 24 hours.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: "",
      company: "",
      email: "",
      budget: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container-narrow">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-headline mb-6">Let's work together</h2>
          <p className="text-body-large">
            Tell us about your project and let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="slide-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-primary mb-2">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Your company"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="your.email@company.com"
                />
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-primary mb-2">
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-xl bg-input focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select your budget</option>
                  {budgetOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                  Project Details *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full resize-none"
                  placeholder="Tell us about your project, goals, and timeline..."
                />
              </div>

              <Button type="submit" className="btn-primary w-full">
                Send Project Request
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-surface-soft rounded-3xl p-8">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Ready to get started?
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-primary mb-2">Response Time</h4>
                  <p className="text-body">We typically respond within 24 hours</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-primary mb-2">Project Timeline</h4>
                  <p className="text-body">Most projects take 8-16 weeks from start to finish</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-primary mb-2">What's Next?</h4>
                  <ul className="text-body space-y-2">
                    <li>• Initial consultation call</li>
                    <li>• Project scope and timeline</li>
                    <li>• Detailed proposal</li>
                    <li>• Kick-off and discovery phase</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-small text-center">
                  Prefer to talk directly?
                </p>
                <div className="text-center mt-2">
                  <Button className="btn-ghost">
                    Book a Strategy Call
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};