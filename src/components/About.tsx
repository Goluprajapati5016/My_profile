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
    <section id="about" className="py-20">
      <div className="container px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Golu Prajapati</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate <span className="text-primary font-semibold">Python Craftsman</span> with a love for creating elegant, efficient solutions
            to complex problems. I specialize in building robust applications and
            leveraging data to drive insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">My Journey as a <span className="text-primary">Code Artisan</span></h3>
            <p>
              With over 5 years of experience as a <span className="font-semibold text-primary">Python Enthusiast</span>, I've worked across
              various domains including web development, data science, and automation.
              My approach combines technical expertise with a strong focus on delivering
              value through clean, maintainable code.
            </p>
            <p>
              I'm constantly expanding my knowledge and exploring new technologies
              to solve challenging problems efficiently. Whether it's building web
              applications, analyzing data, or architecting scalable systems, I bring
              a thoughtful and detail-oriented perspective as a <span className="font-semibold text-primary">Digital Solution Architect</span>.
            </p>
            <div className="pt-4">
              <Button variant="outline" className="mr-4" asChild>
                <a href="/path-to-resume.pdf" download>
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" className="flex items-center gap-2" asChild>
                <a href="https://github.com/golu565453" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  GitHub Profile
                </a>
              </Button>
            </div>
          </div>

          <div id="skills">
            <h3 className="text-2xl font-bold mb-6">My Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skillGroup, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20">
                  <CardContent className="p-5">
                    <h4 className="text-lg font-semibold mb-3 text-primary">
                      {skillGroup.category}
                    </h4>
                    <ul className="space-y-2">
                      {skillGroup.items.map((skill, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
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
