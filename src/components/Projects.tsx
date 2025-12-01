import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "FinTrackAI: AI-Powered Expense Categorisation and Forecasting",
      description:
        "Engineered an end-to-end machine learning system to automate expense categorization and spending forecasting, reducing manual data entry by 80%. Achieved 96.4% accuracy with Random Forest for categorization and R² = 0.998 with XGBoost Regressor.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Random Forest", "XGBoost", "Flask", "SQLite", "Matplotlib"],
      tags: ["Machine Learning", "Full-Stack", "Data Science"],
      githubLink: "https://github.com/HarshithaK-18/FinTrackAI",
      demoLink: "https://drive.google.com/file/d/1PZN7ds4hFWAiMdjP_0TKyL5l5iFb04fk/view",
    },
    {
      title: "Sketch2Sense: AI-Powered Virtual Drawing System",
      description:
        "Developed an interactive vision-based system enabling users to draw in mid-air using hand gestures and instantly recognizes sketches using a custom-trained CNN model. Achieved 71.88% accuracy with real-time hand tracking via MediaPipe.",
      technologies: ["Python", "OpenCV", "MediaPipe", "TensorFlow/Keras"],
      tags: ["Computer Vision", "Deep Learning", "Real-Time AI"],
      githubLink: "https://github.com/HarshithaK-18/Sketch2Sense",
      demoLink: "https://drive.google.com/file/d/1ETIVV5LTrgBk2ZupA2HkPknKPa6NgZT0/view", 
    },
    {
      title: "DocuChat: Intelligent PDF Query System",
      description:
        "Designed and deployed a fully offline document intelligence platform that enables users to upload PDFs and ask natural-language questions—without relying on cloud APIs or external LLMs. Integrated LangChain with GPT4All to build a RAG pipeline.",
      technologies: ["Python", "LangChain", "GPT4All", "Flask", "SQLite"],
      tags: ["RAG", "NLP", "Generative AI"],
      githubLink: "https://github.com/HarshithaK-18/DocuChat",
      demoLink: null,
      videoDemo: null,
    },
    {
      title: "Job Application Portal: Dual-Role Hiring Platform with Real-Time Tracking",
      description:
        "Engineered a full-stack job portal supporting job seekers and admins with real-time notifications. Designed a normalized MySQL database schema from scratch and implemented complex CRUD operations for users, job postings, and applications.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      tags: ["Full-Stack", "Database Design", "Real-Time"],
      githubLink: "https://github.com/HarshithaK-18/Job-Application-Portal",
      demoLink: null,
      videoDemo: null,
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing innovation through AI-powered solutions and intelligent systems
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-card/30 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 flex flex-col overflow-hidden group"
              >
                <CardContent className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-3 text-primary">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          className="bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-all duration-300 px-3 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-sm font-semibold mb-3 text-accent">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 text-accent border border-accent/30 hover:from-pink-500/20 hover:to-purple-500/20 transition-all duration-300 px-3 py-1"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto flex gap-4">
                    <Button
                      variant="outline"
                      className="flex-1 border-border/50 text-foreground hover:bg-card hover:border-primary/50 transition-all duration-300"
                      asChild
                    >
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                    {project.demoLink && (
                      <Button
                        className="flex-1 bg-gradient-to-r from-primary to-accent text-background hover:opacity-90 transition-all duration-300"
                        asChild
                      >
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Explore Project
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
