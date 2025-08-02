
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github } from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: ["Python", "JavaScript", "SQL", "C, C++"]
    },
    {
      category: "Frameworks & Tools",
      items: ["Django", "Flask", "FastAPI", "React", "Pandas", "Numpy"]
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MongoDB", "SQLite", "DynamoDB"]
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "Docker", "CI/CD", "Terraform"]
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="mb-12 lg:mb-16 text-center animate-fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 hover:text-primary transition-colors duration-300 hover:scale-105 inline-block">About Golu Prajapati</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 hover:w-32 transition-all duration-500 hover:animate-glow"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base hover:text-foreground transition-colors duration-300">
            Python enthusiast with a passion for creating elegant, efficient solutions
            to complex problems. I specialize in building robust applications and
            leveraging data to drive insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-4 lg:space-y-6 animate-slide-in-left animate-delay-200">
            <h3 className="text-xl sm:text-2xl font-bold hover:text-primary transition-colors duration-300 hover:scale-105 inline-block">My Digital Journey</h3>
            <p className="text-sm sm:text-base hover:text-foreground transition-colors duration-300">
              Hi, I'm Golu — a passionate coder and tech enthusiast on a journey to turn ideas into smart digital solutions. I've completed certifications like O Level, CCC, MDCA, and Tally ERP 9 with GST, and I've gained practical experience in programming languages including C, C++, HTML, CSS, JavaScript, and Python.
            </p>
            <p className="text-sm sm:text-base hover:text-foreground transition-colors duration-300">
              I love building user-friendly applications, automating tasks, and diving deep into both frontend and backend technologies. Whether it's designing a responsive web page or managing data with MySQL, I'm always exploring new ways to learn and grow.
            </p>

            <div className="space-y-4 lg:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold hover:text-primary transition-colors duration-300 hover:scale-105 inline-block">My Education</h3>
              <div className="space-y-3">
                <div className="border-l-2 border-primary pl-4 hover:border-l-4 hover:pl-6 transition-all duration-300 hover:bg-card/30 hover:rounded-r-lg hover:py-2 group">
                  <h5 className="font-semibold text-sm sm:text-base group-hover:text-primary transition-colors duration-300">MCA (Master of Computer Applications)</h5>
                  <p className="text-primary text-sm">Veer Bahadur Singh Purvanchal University</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">Jaunpur, Uttar Pradesh, India</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">Aug. 2024 - May 20xx</p>
                </div>
                <div className="border-l-2 border-primary pl-4 hover:border-l-4 hover:pl-6 transition-all duration-300 hover:bg-card/30 hover:rounded-r-lg hover:py-2 group">
                  <h5 className="font-semibold text-sm sm:text-base group-hover:text-primary transition-colors duration-300">BCA (Bachelor of Computer Applications)</h5>
                  <p className="text-primary text-sm">Veer Bahadur Singh Purvanchal University</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">Jaunpur, Uttar Pradesh, India</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">Aug. 2021 - May 2024</p>
                </div>
                <div className="border-l-2 border-primary pl-4 hover:border-l-4 hover:pl-6 transition-all duration-300 hover:bg-card/30 hover:rounded-r-lg hover:py-2 group">
                  <h5 className="font-semibold text-sm sm:text-base group-hover:text-primary transition-colors duration-300">O Level (Foundation Course in Computer Applications)</h5>
                  <p className="text-primary text-sm">National Institute of Electronics & Information Technology (NIELIT)</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">Completed on 7 May 2024</p>
                </div>
                <div className="border-l-2 border-primary pl-4 hover:border-l-4 hover:pl-6 transition-all duration-300 hover:bg-card/30 hover:rounded-r-lg hover:py-2 group">
                  <h5 className="font-semibold text-sm sm:text-base group-hover:text-primary transition-colors duration-300">Course on Computer Concepts (CCC)</h5>
                  <p className="text-primary text-sm">National Institute of Electronics & Information Technology (NIELIT)</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">Completed on 22 Nov 2021</p>
                </div>
                <div className="border-l-2 border-primary pl-4 hover:border-l-4 hover:pl-6 transition-all duration-300 hover:bg-card/30 hover:rounded-r-lg hover:py-2 group">
                  <h5 className="font-semibold text-sm sm:text-base group-hover:text-primary transition-colors duration-300">Tally ERP 9 with GST</h5>
                  <p className="text-primary text-sm">Net-Tech Academy of Computer Technology</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">Completed on 29 Feb 2020</p>
                </div>
                <div className="border-l-2 border-primary pl-4 hover:border-l-4 hover:pl-6 transition-all duration-300 hover:bg-card/30 hover:rounded-r-lg hover:py-2 group">
                  <h5 className="font-semibold text-sm sm:text-base group-hover:text-primary transition-colors duration-300">MDCA (Modern Diploma in Computer Applications)</h5>
                  <p className="text-primary text-sm">Sunrise Institute of Technology & Management</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">Completed on 10 Oct 2019</p>
                </div>
                <div className="border-l-2 border-primary pl-4 hover:border-l-4 hover:pl-6 transition-all duration-300 hover:bg-card/30 hover:rounded-r-lg hover:py-2 group">
                  <h5 className="font-semibold text-sm sm:text-base group-hover:text-primary transition-colors duration-300">Programming Skills (C & C++, HTML & CSS, JavaScript, Python)</h5>
                  <p className="text-primary text-sm">Coding Seekho Platform</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">Completed in Mar 2024</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in animate-delay-400">
              <Button variant="outline" className="w-full sm:w-auto hover:scale-105 hover:shadow-lg transition-all duration-300 hover:bg-primary hover:text-primary-foreground" asChild>
                <a href="/lovable-uploads/020c746f-83e2-439e-a66e-9797ea43126e.png" download="Golu_Prajapati_Resume.png">
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" className="flex items-center gap-2 w-full sm:w-auto hover:scale-105 hover:shadow-lg transition-all duration-300 hover:bg-primary hover:text-primary-foreground group" asChild>
                <a href="https://github.com/golu565453" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 group-hover:animate-bounce" />
                  GitHub Profile
                </a>
              </Button>
            </div>
          </div>

          <div id="skills" className="animate-slide-in-right animate-delay-300">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 hover:text-primary transition-colors duration-300 hover:scale-105 inline-block">My Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skillGroup, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20 hover:bg-card/80 hover:border-primary/40 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group">
                  <CardContent className="p-4 sm:p-5">
                    <h4 className="text-base sm:text-lg font-semibold mb-3 text-primary group-hover:animate-pulse">
                      {skillGroup.category}
                    </h4>
                    <ul className="space-y-2">
                      {skillGroup.items.map((skill, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm sm:text-base hover:text-primary transition-colors duration-300 group/item">
                          <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 group-hover/item:animate-pulse group-hover/item:scale-150 transition-all duration-300"></span>
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
