import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Twitter, Youtube } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/golu565453" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/goluprajapti5016/" },
    { name: "Twitter", icon: Twitter, url: "https://x.com/goluprajap5016" },
    { name: "YouTube", icon: Youtube, url: "https://youtube.com" },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="mb-12 lg:mb-16 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Have a project in mind or want to discuss a potential collaboration?
            I'm always open to new opportunities and interesting conversations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
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
                <a 
                  href="mailto:goluprajapati565453@gmail.com" 
                  className="text-primary hover:underline text-sm sm:text-base"
                >
                  goluprajapati565453@gmail.com
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
          
          <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6 bg-card/60 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-border/50">
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm sm:text-base">Name</Label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="text-sm sm:text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm sm:text-base">Email</Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="text-sm sm:text-base"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-sm sm:text-base">Subject</Label>
                <Input 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this regarding?"
                  required
                  className="text-sm sm:text-base"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm sm:text-base">Message</Label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={5}
                  required
                  className="text-sm sm:text-base resize-none"
                />
              </div>
            </div>
            
            <Button type="submit" className="w-full text-sm sm:text-base" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
