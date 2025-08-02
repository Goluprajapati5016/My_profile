
import { Github, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card py-8 sm:py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="text-center lg:text-left">
            <h3 className="text-lg sm:text-xl font-mono font-semibold hover:text-primary transition-colors duration-300 hover:scale-105 inline-block">
              <span className="syntax-keyword">def</span>{" "}
              <span className="syntax-function">golu_prajapati</span>():
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-w-md hover:text-foreground transition-colors duration-300">
              Python developer specializing in data science, web development, and
              creating elegant solutions to complex problems.
            </p>
          </div>
          
          <div className="flex gap-3 sm:gap-4">
            <a 
              href="https://github.com/golu565453" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary hover:scale-125 hover:animate-bounce transition-all duration-300"
            >
              <Github className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/goluprajapti5016/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary hover:scale-125 hover:animate-bounce transition-all duration-300"
            >
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a 
              href="https://x.com/goluprajap5016" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-muted-foreground hover:text-primary hover:scale-125 hover:animate-bounce transition-all duration-300"
            >
              <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-muted-foreground hover:text-primary hover:scale-125 hover:animate-bounce transition-all duration-300"
            >
              <Youtube className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
            © {currentYear} Golu Prajapati - Python Developer Portfolio. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-1 sm:mt-2 hover:text-foreground transition-colors duration-300">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
