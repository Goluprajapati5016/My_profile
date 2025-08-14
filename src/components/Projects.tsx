import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubLink?: string;
  demoLink?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "HealthTracker - Wellness Dashboard",
      description: "Comprehensive health tracking application with real-time monitoring of weight, exercise, sleep, and blood pressure. Features interactive charts, progress tracking, and personalized health insights.",
      tags: ["React", "JavaScript", "Chart.js", "CSS3", "Responsive Design", "Health Analytics"],
      image: "/hh.png",
      githubLink: "https://github.com/Goluprajapati5016/HealthTracker",
      demoLink: "https://health-tracker-dusky.vercel.app/",
    },
    {
      title: "Library Management System",
      description: "This Library Management System is a robust and user-friendly solution developed using Python and MySQL. It simplifies the process of managing books, tracking user activities, and automating library operations—ideal for schools, colleges, and personal collections.",
      tags: ["Python", "MySQL", "Tkinter", "Database", "GUI", "Management System"],
      image: "/lovable-uploads/86e3ba4e-6eba-450e-850a-9f2f442f65f7.png",
      githubLink: "https://github.com/golu565453/library_management_system",
    },
    {
      title: "Blog Generator - AI Content Creator",
      description: "Intelligent blog content generation platform with AI-powered writing assistance. Features topic generation, tone selection, keyword optimization, and automated content creation for bloggers and content creators.",
      tags: ["React", "JavaScript", "AI Integration", "Content Generation", "Blog Platform", "SEO Optimization"],
      image: "/blog.png",
      githubLink: "https://github.com/Goluprajapati5016",
      demoLink: "https://blog-theta-olive.vercel.app/",
    },
    {
      title: "Quiz Game Application",
      description: "Interactive quiz game system with timer functionality, scoring system, and multiple choice questions. Features a clean user interface with NET-TECH Academy branding and comprehensive question management.",
      tags: ["Python", "Tkinter", "GUI", "Timer", "Quiz System", "Educational"],
      image: "/lovable-uploads/195624ac-9752-41e1-9999-936ab769d9c5.png",
      githubLink: "https://github.com/golu565453/quiz_game",
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-muted/20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="mb-12 lg:mb-16 text-center animate-fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 hover:text-primary transition-colors duration-300 hover:scale-105 inline-block">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 hover:w-32 transition-all duration-500 hover:animate-glow"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base hover:text-foreground transition-colors duration-300">
            A selection of my recent work. These projects showcase my skills in Python
            development, data analysis, and web application architecture.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`overflow-hidden border border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/50 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 group animate-fade-in animate-delay-${(index + 1) * 100}`}>
              <div className="h-40 sm:h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transform group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
                />
              </div>
              
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2 text-sm sm:text-base group-hover:text-foreground transition-colors duration-300">{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="bg-muted/80 text-xs sm:text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="gap-2 sm:gap-3 p-4 sm:p-6 pt-0">
                {project.githubLink && (
                  <Button variant="outline" size="sm" className="flex items-center gap-1 flex-1 sm:flex-none hover:scale-105 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/btn" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 group-hover/btn:animate-bounce" />
                      Code
                    </a>
                  </Button>
                )}
                {project.demoLink && (
                  <Button size="sm" className="flex-1 sm:flex-none hover:scale-105 hover:shadow-lg transition-all duration-300" asChild>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 lg:mt-12 text-center animate-fade-in animate-delay-600">
          <Button variant="outline" size="lg" className="w-full sm:w-auto hover:scale-105 hover:bg-primary hover:text-primary-foreground hover:shadow-lg transition-all duration-300" asChild>
            <a href="https://github.com/golu565453?tab=repositories" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
