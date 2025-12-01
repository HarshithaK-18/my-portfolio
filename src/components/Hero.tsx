import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    { value: "9.27", label: "CGPA (MCA)" },
    { value: "4+", label: "Projects Completed" },
    { value: "20+", label: "Technologies" },
    { value: "9+", label: "Certifications" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <Badge className="bg-card/50 backdrop-blur-sm border-primary/50 text-primary px-4 py-2 text-sm">
            <span className="w-2 h-2 bg-primary rounded-full inline-block mr-2 animate-pulse" />
            Available for opportunities
          </Badge>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="text-primary">Crafting</span>{" "}
            <span className="gradient-text">Intelligent</span>{" "}
            <span className="text-accent">Solutions</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            MCA candidate specializing in AI/ML, Full-Stack Development, and Building end-to-end intelligent systems. 
            Transforming complex data into actionable insights.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent text-background hover:opacity-90 px-8 py-6 text-lg"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 pt-8">
            <a
              href="https://github.com/HarshithaK-18"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-card hover:bg-primary/20 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/harshitha-k-12b8222bb"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-card hover:bg-primary/20 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border hover:border-primary/50 transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection("about")}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          >
            <ChevronDown className="w-8 h-8 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};
