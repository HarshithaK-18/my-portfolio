import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Briefcase } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AI/ML Engineer crafting the future with cutting-edge technology
            </p>
          </div>

          {/* Professional Summary */}
          <Card className="mb-12 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Highly analytical MCA candidate (CGPA: 9.27) with hands-on experience building end-to-end AI-powered 
                applications using Python, Flask. Proven ability to design machine learning pipelines (XGBoost, NLP), develop 
                full-stack web interfaces, and deploy intelligent systems (including offline LLM chatbots). Certified in Machine 
                Learning (365 Data Science) and Generative AI (Oracle). Passionate about transforming complex data into clear, 
                client-ready insights that drive efficiency, reduce costs, and accelerate decision-making in real-world business 
                environments.
              </p>
            </CardContent>
          </Card>

          {/* Education, Experience, Achievements Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Education */}
            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors group">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Education</h3>
                </div>
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="font-semibold text-foreground">Master of Computer Applications</div>
                    <div className="text-muted-foreground">PES University</div>
                    <div className="text-primary font-semibold">CGPA: 9.27</div>
                    <div className="text-muted-foreground">2024 - 2026</div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Bachelor of Computer Applications</div>
                    <div className="text-muted-foreground">Vishwa Chethana Degree College</div>
                    <div className="text-primary font-semibold">CGPA: 9.58/10</div>
                    <div className="text-muted-foreground">2021 - 2024</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors group">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <Briefcase className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold">Experience</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-semibold text-foreground">Website Developer Intern</div>
                    <div className="text-accent font-semibold">Techxonic Innovation</div>
                    <div className="text-muted-foreground">Bangalore</div>
                    <div className="text-muted-foreground">Mar 2024 - Jun 2024</div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Enhanced client websites using full-stack technologies. Optimized backend data handling, 
                    reducing data retrieval time by 40%.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors group">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6 text-background" />
                  </div>
                  <h3 className="text-xl font-bold">Achievements</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5" />
                    <div>
                      <div className="font-semibold text-foreground">University Rank Holder (BCA)</div>
                      <div className="text-muted-foreground">Top 0.1% - Bangalore University</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent mt-1.5" />
                    <div>
                      <div className="font-semibold text-foreground">2× Gold Medalist</div>
                      <div className="text-muted-foreground">Bangalore University</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5" />
                    <div>
                      <div className="font-semibold text-foreground">2× Cash Award Recipient</div>
                      <div className="text-muted-foreground">Academic Excellence</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
