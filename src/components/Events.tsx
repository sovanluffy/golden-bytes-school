import graduationImg from "@/assets/event-graduation.jpg";
import sportsImg from "@/assets/event-sports.jpg";
import cultureImg from "@/assets/event-culture.jpg";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const events = [
  {
    title: "Annual Graduation Ceremony",
    titleKh: "ពិធីប្រគល់សញ្ញាបត្រប្រចាំឆ្នាំ",
    date: "March 15, 2026",
    dateKh: "១៥ មីនា ២០២៦",
    location: "Main Auditorium",
    locationKh: "សាលប្រជុំធំ",
    description: "Celebrate the achievements of our graduating class with families and distinguished guests.",
    descriptionKh: "អបអរសាទរសមិទ្ធផលរបស់ថ្នាក់បញ្ចប់ការសិក្សារបស់យើងជាមួយក្រុមគ្រួសារ និងភ្ញៀវកិត្តិយស។",
    image: graduationImg,
    featured: true,
  },
  {
    title: "Inter-School Sports Festival",
    titleKh: "មហោស្រពកីឡារវាងសាលា",
    date: "February 20-22, 2026",
    dateKh: "២០-២២ កុម្ភៈ ២០២៦",
    location: "Sports Complex",
    locationKh: "បរិវេណកីឡា",
    description: "Three days of athletic competition featuring students from schools across the region.",
    descriptionKh: "បីថ្ងៃនៃការប្រកួតកីឡាដែលមានសិស្សពីសាលានានាទូទាំងតំបន់។",
    image: sportsImg,
    featured: false,
  },
  {
    title: "Khmer Cultural Festival",
    titleKh: "ពិធីបុណ្យវប្បធម៌ខ្មែរ",
    date: "April 13-16, 2026",
    dateKh: "១៣-១៦ មេសា ២០២៦",
    location: "School Campus",
    locationKh: "បរិវេណសាលា",
    description: "Experience traditional Khmer arts, dance, music, and culinary traditions during New Year celebrations.",
    descriptionKh: "ស្វែងយល់សិល្បៈ រាំ តន្ត្រី និងប្រពៃណីធ្វើម្ហូបខ្មែរក្នុងពេលបុណ្យចូលឆ្នាំថ្មី។",
    image: cultureImg,
    featured: false,
  },
];

const Events = () => {
  return (
    <section id="events" className="section-padding section-alt">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Upcoming Events · ព្រឹត្តិការណ៍នាពេលខាងមុខ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            School <span className="text-gradient-gold">Events</span>
          </h2>
          <p className="font-khmer text-xl text-muted-foreground mb-4">
            ព្រឹត្តិការណ៍សាលា
          </p>
          <p className="text-muted-foreground">
            Stay connected with our vibrant school community through exciting events and celebrations.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Event */}
          <div className="lg:row-span-2 group bg-card rounded-2xl overflow-hidden card-shadow card-hover">
            <div className="relative h-72 lg:h-96 overflow-hidden">
              <img
                src={events[0].image}
                alt={events[0].title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full gold-gradient text-primary-foreground text-sm font-medium">
                  Featured · សំខាន់
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl font-bold text-white mb-1">{events[0].title}</h3>
                <p className="font-khmer text-white/80">{events[0].titleKh}</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{events[0].date}</span>
                  <span className="font-khmer text-sm">({events[0].dateKh})</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{events[0].location}</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-3">{events[0].description}</p>
              <p className="font-khmer text-muted-foreground text-sm">{events[0].descriptionKh}</p>
            </div>
          </div>

          {/* Other Events */}
          {events.slice(1).map((event, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden card-shadow card-hover flex flex-col sm:flex-row"
            >
              <div className="relative w-full sm:w-48 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1">
                <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                <p className="font-khmer text-primary text-sm mb-3">{event.titleKh}</p>
                <div className="flex flex-wrap gap-3 mb-3 text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View All Events · មើលព្រឹត្តិការណ៍ទាំងអស់
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;
