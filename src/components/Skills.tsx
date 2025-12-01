import { Code2, Brain, Eye, Globe, Database, Wrench } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: Code2,
      skills: ["Python", "Java", "C", "C++"],
      color: "cyan",
      iconBg: "bg-cyan-500/20",
      badgeClass: "bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30",
    },
    {
      category: "AI/ML Frameworks & Libraries",
      icon: Brain,
      skills: ["LangChain", "GPT4All", "Keras", "TensorFlow"],
      color: "pink",
      iconBg: "bg-pink-500/20",
      badgeClass: "bg-pink-500/20 text-pink-300 hover:bg-pink-500/30",
    },
    {
      category: "Computer Vision",
      icon: Eye,
      skills: ["OpenCV", "MediaPipe"],
      color: "cyan",
      iconBg: "bg-cyan-500/20",
      badgeClass: "bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30",
    },
    {
      category: "Web Development",
      icon: Globe,
      skills: ["Angular", "React", "Flask", "HTML", "CSS", "JavaScript"],
      color: "pink",
      iconBg: "bg-pink-500/20",
      badgeClass: "bg-pink-500/20 text-pink-300 hover:bg-pink-500/30",
    },
    {
      category: "Database Query Languages",
      icon: Database,
      skills: ["MySQL", "SQLite", "SQL"],
      color: "cyan",
      iconBg: "bg-cyan-500/20",
      badgeClass: "bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30",
    },
    {
      category: "AI/ML Concepts",
      icon: Brain,
      skills: ["Machine Learning", "NLP", "Generative AI", "RAG", "Neural Networks"],
      color: "pink",
      iconBg: "bg-pink-500/20",
      badgeClass: "bg-pink-500/20 text-pink-300 hover:bg-pink-500/30",
    },
    {
      category: "Software Engineering",
      icon: Code2,
      skills: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)"],
      color: "cyan",
      iconBg: "bg-cyan-500/20",
      badgeClass: "bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30",
    },
    {
      category: "Methodologies & Practices",
      icon: Wrench,
      skills: ["Exploratory Data Analysis", "Agile Collaboration", "Git/GitHub"],
      color: "pink",
      iconBg: "bg-pink-500/20",
      badgeClass: "bg-pink-500/20 text-pink-300 hover:bg-pink-500/30",
    },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-12 h-12 rounded-xl ${category.iconBg} flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${category.color === 'cyan' ? 'text-cyan-400' : 'text-pink-400'}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{category.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`${category.badgeClass} px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-default hover:scale-105`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
