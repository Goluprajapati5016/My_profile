
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";
import { useContactForm } from "@/hooks/useContactForm";

const ContactForm = () => {
  const { formData, isSubmitting, handleChange, handleSubmit } = useContactForm();

  return (
    <form action="https://formspree.io/f/xblylplb" method="POST" onSubmit={handleSubmit} className="space-y-4 lg:space-y-6 bg-card/60 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-border/50">
      <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
        <p className="text-sm text-blue-700 dark:text-blue-300">
          <Mail className="inline h-4 w-4 mr-1" />
          Send me a message directly through this form!
        </p>
      </div>
      
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
  );
};

export default ContactForm;
