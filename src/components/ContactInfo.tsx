
import { Github, Linkedin, Twitter, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactInfo = () => {
  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/golu565453" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/goluprajapti5016/" },
    { name: "Twitter", icon: Twitter, url: "https://x.com/goluprajap5016" },
    { name: "YouTube", icon: Youtube, url: "https://youtube.com" },
  ];

  return (
    <div className="space-y-4 lg:space-y-6">
      <h3 className="text-xl sm:text-2xl font-semibold">Contact Information</h3>
      <p className="text-muted-foreground text-sm sm:text-base">
        Feel free to reach out through the contact form or via my social
        profiles. I'm currently open to freelance opportunities and
        interesting project collaborations.
      </p>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-base sm:text-lg font-medium mb-2">Email</h4>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary" />
            <a 
              href="mailto:gp1515151@gmail.com" 
              className="text-primary hover:underline text-sm sm:text-base"
            >
              gp1515151@gmail.com
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-base sm:text-lg font-medium mb-2">Mobile</h4>
          <a 
            href="tel:+917275565453" 
            className="text-primary hover:underline text-sm sm:text-base"
          >
            +91 7275565453
          </a>
        </div>
        
        <div>
          <h4 className="text-base sm:text-lg font-medium mb-2">Location</h4>
          <p className="text-sm sm:text-base">Rampur (Madhopatti) Kajgaon Jaunpur Uttar Pradesh</p>
        </div>
      </div>
      
      <div className="space-y-3">
        <h4 className="text-base sm:text-lg font-medium">Connect on Social Media</h4>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {socialLinks.map((link) => (
            <Button 
              key={link.name}
              variant="outline" 
              size="icon"
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors w-10 h-10 sm:w-12 sm:h-12" 
              asChild
            >
              <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                <link.icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
