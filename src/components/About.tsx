
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github } from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: ["Python", "JavaScript", "SQL", "Rust", "C++"]
    },
    {
      category: "Frameworks & Tools",
      items: ["Django", "Flask", "FastAPI", "React", "Pandas", "Numpy"]
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MongoDB", "SQLite", "Redis", "DynamoDB"]
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"]
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="mb-12 lg:mb-16 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">About Golu Prajapati</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Python enthusiast with a passion for creating elegant, efficient solutions
            to complex problems. I specialize in building robust applications and
            leveraging data to drive insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold">My Journey</h3>
            <p className="text-sm sm:text-base">
              With over 5 years of experience in Python development, I've worked across
              various domains including web development, data science, and automation.
              My approach combines technical expertise with a strong focus on delivering
              value through clean, maintainable code.
            </p>
            <p className="text-sm sm:text-base">
              I'm constantly expanding my knowledge and exploring new technologies
              to solve challenging problems efficiently. Whether it's building web
              applications, analyzing data, or architecting scalable systems, I bring
              a thoughtful and detail-oriented perspective.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button variant="outline" className="w-full sm:w-auto" asChild>
                <a href="/lovable-uploads/020c746f-83e2-439e-a66e-9797ea43126e.png" download="Golu_Prajapati_Resume.png">
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" className="flex items-center gap-2 w-full sm:w-auto" asChild>
                <a href="https://github.com/golu565453" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  GitHub Profile
                </a>
              </Button>
            </div>
          </div>

          <div id="skills">
            <h3 className="text-xl sm:text-2xl font-bold mb-6">My Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skillGroup, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20">
                  <CardContent className="p-4 sm:p-5">
                    <h4 className="text-base sm:text-lg font-semibold mb-3 text-primary">
                      {skillGroup.category}
                    </h4>
                    <ul className="space-y-2">
                      {skillGroup.items.map((skill, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm sm:text-base">
                          <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
