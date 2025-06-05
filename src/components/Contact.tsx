
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
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
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
