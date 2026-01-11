import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    titleKh: "អាសយដ្ឋាន",
    value: "123 Education Street, Phnom Penh, Cambodia",
    valueKh: "១២៣ ផ្លូវអប់រំ រាជធានីភ្នំពេញ កម្ពុជា",
  },
  {
    icon: Phone,
    title: "Phone",
    titleKh: "ទូរស័ព្ទ",
    value: "+855 23 456 789",
    valueKh: "+៨៥៥ ២៣ ៤៥៦ ៧៨៩",
  },
  {
    icon: Mail,
    title: "Email",
    titleKh: "អ៊ីមែល",
    value: "info@goldenfuture.edu.kh",
    valueKh: "info@goldenfuture.edu.kh",
  },
  {
    icon: Clock,
    title: "Office Hours",
    titleKh: "ម៉ោងការិយាល័យ",
    value: "Mon - Fri: 7:00 AM - 5:00 PM",
    valueKh: "ច័ន្ទ - សុក្រ: ៧:០០ - ១៧:០០",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you soon. សារត្រូវបានផ្ញើដោយជោគជ័យ!",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Contact Us · ទំនាក់ទំនង
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get in <span className="text-gradient-gold">Touch</span>
          </h2>
          <p className="font-khmer text-xl text-muted-foreground mb-4">
            ទំនាក់ទំនងមកយើងខ្ញុំ
          </p>
          <p className="text-muted-foreground">
            Have questions? We'd love to hear from you. Send us a message and we'll 
            respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Contact Information · ព័ត៌មានទំនាក់ទំនង
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">
                      {info.title} · <span className="font-khmer">{info.titleKh}</span>
                    </p>
                    <p className="text-muted-foreground">{info.value}</p>
                    <p className="font-khmer text-muted-foreground text-sm">{info.valueKh}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden card-shadow h-64 bg-muted relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250152.59827520987!2d104.74891736328125!3d11.568767399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0x9c010ee85ab525bb!2sPhnom%20Penh%2C%20Cambodia!5e0!3m2!1sen!2s!4v1704460800000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="School Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 card-shadow">
            <h3 className="text-2xl font-bold mb-2">
              Send us a Message
            </h3>
            <p className="font-khmer text-muted-foreground mb-6">ផ្ញើសារមកយើងខ្ញុំ</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name · <span className="font-khmer">ឈ្មោះរបស់អ្នក</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name..."
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12 rounded-xl"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address · <span className="font-khmer">អាសយដ្ឋានអ៊ីមែល</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email..."
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12 rounded-xl"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message · <span className="font-khmer">សារ</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="rounded-xl resize-none"
                />
              </div>

              <Button
                type="submit"
                className="btn-primary w-full h-12 rounded-xl text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message · ផ្ញើសារ
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
