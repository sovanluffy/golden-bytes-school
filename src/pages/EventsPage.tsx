import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, MapPin } from "lucide-react";
import eventGraduation from "@/assets/event-graduation.jpg";
import eventSports from "@/assets/event-sports.jpg";
import eventCulture from "@/assets/event-culture.jpg";

const events = [
  {
    title: "Graduation Ceremony 2024",
    titleKh: "ពិធីប្រគល់សញ្ញាបត្រ ២០២៤",
    date: "March 15, 2024",
    dateKh: "១៥ មីនា ២០២៤",
    location: "Main Auditorium",
    locationKh: "សាលប្រជុំធំ",
    description: "Celebrating the achievements of our graduating class with families and community.",
    descriptionKh: "អបអរសាទរសមិទ្ធផលរបស់សិស្សបញ្ចប់ការសិក្សារបស់យើងជាមួយគ្រួសារ និងសហគមន៍។",
    image: eventGraduation,
    featured: true,
  },
  {
    title: "Annual Sports Day",
    titleKh: "ទិវាកីឡាប្រចាំឆ្នាំ",
    date: "April 20, 2024",
    dateKh: "២០ មេសា ២០២៤",
    location: "School Sports Field",
    locationKh: "វាលកីឡាសាលា",
    description: "A day of athletic competitions, team spirit, and healthy fun for all students.",
    descriptionKh: "ថ្ងៃនៃការប្រកួតប្រជែងកីឡា ស្មារតីក្រុម និងភាពសប្បាយប្រកបដោយសុខភាពល្អសម្រាប់សិស្សទាំងអស់។",
    image: eventSports,
    featured: false,
  },
  {
    title: "Khmer New Year Celebration",
    titleKh: "ពិធីបុណ្យចូលឆ្នាំថ្មីខ្មែរ",
    date: "April 14, 2024",
    dateKh: "១៤ មេសា ២០២៤",
    location: "School Campus",
    locationKh: "បរិវេណសាលា",
    description: "Traditional games, performances, and cultural activities celebrating Khmer heritage.",
    descriptionKh: "ល្បែងប្រពៃណី ការសម្តែង និងសកម្មភាពវប្បធម៌អបអរសាទរបេតិកភណ្ឌខ្មែរ។",
    image: eventCulture,
    featured: false,
  },
];

const EventsPage = () => {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              {t("What's Happening", "មានអ្វីកើតឡើង")}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("School Events", "ព្រឹត្តិការណ៍សាលា")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t(
                "Stay updated with our upcoming events, celebrations, and activities throughout the academic year.",
                "ធ្វើបច្ចុប្បន្នភាពជាមួយព្រឹត្តិការណ៍ ការអបអរសាទរ និងសកម្មភាពនានារបស់យើងពេញមួយឆ្នាំសិក្សា។"
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className={`group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  event.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {event.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                      {t("Featured", "ពិសេស")}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">
                    {t(event.title, event.titleKh)}
                  </h3>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{t(event.date, event.dateKh)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{t(event.location, event.locationKh)}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    {t(event.description, event.descriptionKh)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              {t(
                "Want to know more about our events?",
                "ចង់ដឹងបន្ថែមអំពីព្រឹត្តិការណ៍របស់យើង?"
              )}
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 btn-primary px-8 py-3 rounded-full font-semibold"
            >
              {t("Contact Us", "ទំនាក់ទំនងយើង")}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default EventsPage;
