import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/harshitha-k-12b8222bb",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View GitHub Profile",
      href: "https://github.com/HarshithaK-18",
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's connect and discuss how we can work together
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors group"
                >
                  <CardContent className="p-6">
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                        <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {item.value}
                        </div>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA Card */}
          <Card className="bg-gradient-to-br from-primary/10 via-card/50 to-accent/10 backdrop-blur-sm border-primary/50">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Build Something <span className="gradient-text">Amazing</span>?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                I'm currently open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent text-background hover:opacity-90"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/harshitha-k-12b8222bb" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href="https://github.com/HarshithaK-18" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
