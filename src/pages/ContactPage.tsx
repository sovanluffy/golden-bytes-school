import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

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
    valueKh: "ច័ន្ទ - សុក្រ: ៧:០០ ព្រឹក - ៥:០០ ល្ងាច",
  },
];

const ContactPage = () => {
  const { t } = useLanguage();
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

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: t("Message Sent!", "សារត្រូវបានផ្ញើ!"),
      description: t(
        "Thank you for contacting us. We'll get back to you soon.",
        "សូមអរគុណសម្រាប់ការទាក់ទងមកយើងខ្ញុំ។ យើងនឹងឆ្លើយតបមកអ្នកឆាប់ៗ។"
      ),
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
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              {t("Get In Touch", "ទំនាក់ទំនង")}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("Contact Us", "ទំនាក់ទំនងយើង")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t(
                "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
                "មានសំណួរ? យើងចង់ស្តាប់ពីអ្នក។ ផ្ញើសារមកយើង ហើយយើងនឹងឆ្លើយតបឱ្យបានឆាប់តាមដែលអាចធ្វើទៅបាន។"
              )}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-card rounded-2xl shadow-sm"
                  >
                    <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center shrink-0">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        {t(info.title, info.titleKh)}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t(info.value, info.valueKh)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="h-80 bg-muted rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125406.08692282498!2d104.84891459726564!3d11.568867000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0x9c010ee85ab525bb!2sPhnom%20Penh%2C%20Cambodia!5e0!3m2!1sen!2sus!4v1647881234567!5m2!1sen!2sus"
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
            <div className="bg-card p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">
                {t("Send us a Message", "ផ្ញើសារមកយើង")}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t("Your Name", "ឈ្មោះរបស់អ្នក")}
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("Enter your name", "បញ្ចូលឈ្មោះរបស់អ្នក")}
                    required
                    className="h-12 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t("Email Address", "អាសយដ្ឋានអ៊ីមែល")}
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("Enter your email", "បញ្ចូលអ៊ីមែលរបស់អ្នក")}
                    required
                    className="h-12 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t("Message", "សារ")}
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("Write your message...", "សរសេរសាររបស់អ្នក...")}
                    required
                    rows={5}
                    className="rounded-xl resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full h-12 rounded-xl text-base font-semibold"
                >
                  {isSubmitting
                    ? t("Sending...", "កំពុងផ្ញើ...")
                    : t("Send Message", "ផ្ញើសារ")}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;
