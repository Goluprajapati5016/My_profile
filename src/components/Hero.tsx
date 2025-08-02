
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto py-8 sm:py-12 lg:py-16 grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
        <div className="animate-slide-in-left text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight hover:text-primary transition-colors duration-300">
            Hi, I'm <span className="text-primary animate-pulse-slow hover:animate-glow">Golu Prajapati</span> <br />
            <span className="text-primary hover:scale-110 inline-block transition-transform duration-300">Python</span> Developer <br />
            & Problem Solver
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-in animate-delay-300 hover:text-foreground transition-colors duration-300">
            I build robust applications and analyze complex data, 
            turning challenges into elegant solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-in animate-delay-500">
            <Button asChild size="lg" className="w-full sm:w-auto hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:animate-glow">
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto hover:scale-105 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
        
        <div className="animate-slide-in-right animate-delay-200 order-1 lg:order-2">
          <img 
            src="/lovable-uploads/89d93173-49c5-4911-9016-cfe86e90a9fb.png" 
            alt="Golu Prajapati"
            className="w-full max-w-xs mx-auto rounded-lg shadow-lg hover:scale-110 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:rotate-2"
          />
        </div>
      </div>
      
      <div className="container mx-auto px-4 flex justify-center pb-8">
        <a 
          href="#about" 
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-all duration-300 animate-fade-in animate-delay-600 hover:scale-110 group"
        >
          <span className="mb-2 text-sm group-hover:animate-bounce">Scroll Down</span>
          <svg 
            className="w-6 h-6 animate-bounce group-hover:animate-bounce-slow group-hover:text-primary" 
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
