import scienceImg from "@/assets/academics-science.jpg";
import languageImg from "@/assets/academics-language.jpg";
import techImg from "@/assets/academics-tech.jpg";
import sportsImg from "@/assets/academics-sports.jpg";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    title: "Science & Mathematics",
    titleKh: "វិទ្យាសាស្ត្រ និង គណិតវិទ្យា",
    description: "Comprehensive STEM curriculum with hands-on laboratory experiences and real-world applications.",
    descriptionKh: "កម្មវិធីសិក្សា STEM ដ៏ទូលំទូលាយជាមួយនឹងបទពិសោធន៍មន្ទីរពិសោធន៍ជាក់ស្តែង។",
    image: scienceImg,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Languages & Literature",
    titleKh: "ភាសា និង អក្សរសាស្ត្រ",
    description: "Bilingual education in Khmer and English with additional French and Chinese language options.",
    descriptionKh: "ការអប់រំពីរភាសាជាភាសាខ្មែរ និងអង់គ្លេស ជាមួយនឹងជម្រើសភាសាបារាំង និងចិន។",
    image: languageImg,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Technology & Innovation",
    titleKh: "បច្ចេកវិទ្យា និង ការច្នៃប្រឌិត",
    description: "Modern computer labs with coding, robotics, and digital literacy programs for all ages.",
    descriptionKh: "មន្ទីរពិសោធន៍កុំព្យូទ័រទំនើបជាមួយកម្មវិធីសរសេរកូដ រ៉ូបូត និងសមត្ថភាពឌីជីថល។",
    image: techImg,
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Sports & Physical Education",
    titleKh: "កីឡា និង ការអប់រំកាយសម្បទា",
    description: "Diverse sports programs including football, volleyball, basketball, and traditional Khmer sports.",
    descriptionKh: "កម្មវិធីកីឡាចម្រុះ រួមទាំងបាល់ទាត់ បាល់ទះ បាល់បោះ និងកីឡាបែបខ្មែរ។",
    image: sportsImg,
    color: "from-orange-500 to-red-500",
  },
];

const Academics = () => {
  return (
    <section id="academics" className="section-padding">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Academic Programs · កម្មវិធីសិក្សា
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Discover Our <span className="text-gradient-gold">Programs</span>
          </h2>
          <p className="font-khmer text-xl text-muted-foreground mb-4">
            ស្វែងយល់ពីកម្មវិធីសិក្សារបស់យើង
          </p>
          <p className="text-muted-foreground">
            We offer a comprehensive curriculum designed to prepare students for success 
            in higher education and beyond.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden card-shadow card-hover"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-20 transition-opacity`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">{program.title}</h3>
                  <p className="font-khmer text-white/80 text-sm">{program.titleKh}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-3">{program.description}</p>
                <p className="font-khmer text-muted-foreground text-sm mb-4">{program.descriptionKh}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-primary font-medium hover:gap-3 gap-2 transition-all"
                >
                  Learn More · ស្វែងយល់បន្ថែម
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-primary/5 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Join Our <span className="text-gradient-gold">Family</span>?
          </h3>
          <p className="font-khmer text-muted-foreground mb-6">
            ត្រៀមខ្លួនចូលរួមជាមួយគ្រួសាររបស់យើង?
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Enroll your child today and give them the gift of quality education. 
            Our admissions team is ready to guide you through the process.
          </p>
          <a href="#contact" className="btn-primary inline-flex items-center gap-2 rounded-full">
            Apply Now · ដាក់ពាក្យឥឡូវនេះ
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Academics;
