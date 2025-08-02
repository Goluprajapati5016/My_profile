
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Menu, X, Instagram } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-mono font-bold hover:text-primary transition-colors duration-300 hover:scale-105 inline-block">
          <span className="syntax-keyword">def</span>{" "}
          <span className="syntax-function">developer</span>():
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-110 relative group"
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute inset-0 bg-primary/20 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex space-x-3">
            <Button variant="ghost" size="icon" className="hover:scale-110 hover:bg-primary/20 transition-all duration-300 group" asChild>
              <a href="https://github.com/golu565453" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 group-hover:animate-bounce" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-110 hover:bg-primary/20 transition-all duration-300 group" asChild>
              <a href="https://www.linkedin.com/in/goluprajapti5016/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 group-hover:animate-bounce" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-110 hover:bg-primary/20 transition-all duration-300 group" asChild>
              <a href="https://www.instagram.com/mr._kuhu5016/?__pwa=1" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 group-hover:animate-bounce" />
              </a>
            </Button>
          </div>
          
          <Button className="hover:scale-105 hover:shadow-lg hover:animate-glow transition-all duration-300" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 bg-muted hover:bg-muted/80 rounded-md hover:scale-110 transition-all duration-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border md:hidden animate-slide-in-left">
            <ul className="flex flex-col p-4">
              {navLinks.map((link) => (
                <li key={link.name} className="py-2">
                  <a 
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105 hover:pl-2"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="py-2 mt-2">
                <Button className="w-full hover:scale-105 transition-all duration-300" asChild>
                  <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact Me</a>
                </Button>
              </li>
              <li className="py-2 flex space-x-2">
                <Button variant="outline" size="icon" className="hover:scale-110 transition-all duration-300 group" asChild>
                  <a href="https://github.com/golu565453" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5 group-hover:animate-bounce" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="hover:scale-110 transition-all duration-300 group" asChild>
                  <a href="https://www.linkedin.com/in/goluprajapti5016/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5 group-hover:animate-bounce" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="hover:scale-110 transition-all duration-300 group" asChild>
                  <a href="https://www.instagram.com/mr._kuhu5016/?__pwa=1" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-5 w-5 group-hover:animate-bounce" />
                  </a>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
