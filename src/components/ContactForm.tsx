
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";
import { useContactForm } from "@/hooks/useContactForm";

const ContactForm = () => {
  const { formData, isSubmitting, handleChange, handleSubmit } = useContactForm();

  return (
    <form action="https://formspree.io/f/xblylplb" method="POST" onSubmit={handleSubmit} className="space-y-4 lg:space-y-6 bg-card/60 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-border/50 hover:bg-card/80 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
      <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800 hover:scale-105 transition-all duration-300 animate-fade-in">
        <p className="text-sm text-blue-700 dark:text-blue-300">
          <Mail className="inline h-4 w-4 mr-1 animate-bounce" />
          Send me a message directly through this form!
        </p>
      </div>
      
      <div className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2 group">
            <Label htmlFor="name" className="text-sm sm:text-base group-hover:text-primary transition-colors duration-300">Name</Label>
            <Input 
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="text-sm sm:text-base hover:border-primary focus:border-primary transition-all duration-300 hover:shadow-md"
            />
          </div>
          <div className="space-y-2 group">
            <Label htmlFor="email" className="text-sm sm:text-base group-hover:text-primary transition-colors duration-300">Email</Label>
            <Input 
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
              className="text-sm sm:text-base hover:border-primary focus:border-primary transition-all duration-300 hover:shadow-md"
            />
          </div>
        </div>
        
        <div className="space-y-2 group">
          <Label htmlFor="subject" className="text-sm sm:text-base group-hover:text-primary transition-colors duration-300">Subject</Label>
          <Input 
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What's this regarding?"
            required
            className="text-sm sm:text-base hover:border-primary focus:border-primary transition-all duration-300 hover:shadow-md"
          />
        </div>
        
        <div className="space-y-2 group">
          <Label htmlFor="message" className="text-sm sm:text-base group-hover:text-primary transition-colors duration-300">Message</Label>
          <Textarea 
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message..."
            rows={5}
            required
            className="text-sm sm:text-base resize-none hover:border-primary focus:border-primary transition-all duration-300 hover:shadow-md"
          />
        </div>
      </div>
      
      <Button type="submit" className="w-full text-sm sm:text-base hover:scale-105 hover:shadow-lg hover:animate-glow transition-all duration-300" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
