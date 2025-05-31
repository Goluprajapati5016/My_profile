
import { Button } from "@/components/ui/button";
import CodeSnippet from "./CodeSnippet";

const Hero = () => {
  const pythonCode = `# Hello, World! I'm Golu Prajapati - Python Developer
def introduce_myself():
    name = "Golu Prajapati"
    skills = ["Python", "Data Science", "Web Development", "Machine Learning"]
    experience = 5  # Years of coding
    
    print(f"Hi there! I'm {name}, passionate about creating")
    print("innovative solutions with clean, efficient code.")
    
    return {
        "open_to_opportunities": True,
        "loves_to_collaborate": True
    }

# Let's connect and build something amazing together!
profile = introduce_myself()`;

  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto py-8 sm:py-12 lg:py-16 grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
        <div className="animate-fade-in text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Hi, I'm <span className="text-primary">Golu Prajapati</span> <br />
            <span className="text-primary">Python</span> Developer <br />
            & Problem Solver
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
            I build robust applications and analyze complex data, 
            turning challenges into elegant solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
        
        <div className="animate-fade-in animate-delay-200 order-1 lg:order-2">
          <CodeSnippet code={pythonCode} className="shadow-lg text-xs sm:text-sm" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 flex justify-center pb-8">
        <a 
          href="#about" 
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors animate-fade-in animate-delay-300"
        >
          <span className="mb-2 text-sm">Scroll Down</span>
          <svg 
            className="w-6 h-6 animate-bounce" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
