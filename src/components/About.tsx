import { Award, BookOpen, Heart, Target } from "lucide-react";
import teacher1 from "@/assets/teacher-1.jpg";
import teacher2 from "@/assets/teacher-2.jpg";
import teacher3 from "@/assets/teacher-3.jpg";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    titleKh: "បេសកកម្មរបស់យើង",
    description: "To provide quality education that empowers students to achieve their full potential and become responsible global citizens.",
    descriptionKh: "ផ្តល់ការអប់រំប្រកបដោយគុណភាព ដើម្បីផ្តល់អំណាចដល់សិស្សឱ្យសម្រេចបាននូវសក្តានុពលពេញលេញ។",
  },
  {
    icon: BookOpen,
    title: "Our Vision",
    titleKh: "ចក្ខុវិស័យរបស់យើង",
    description: "To be a leading educational institution recognized for excellence in academics, innovation, and character development.",
    descriptionKh: "ក្លាយជាស្ថាប័នអប់រំឈានមុខគេ ដែលទទួលស្គាល់នូវភាពឆ្នើមក្នុងការសិក្សា ការច្នៃប្រឌិត។",
  },
  {
    icon: Heart,
    title: "Our Values",
    titleKh: "គុណតម្លៃរបស់យើង",
    description: "Integrity, Excellence, Respect, Innovation, and Community form the foundation of everything we do.",
    descriptionKh: "សុចរិតភាព ភាពឆ្នើម ការគោរព ការច្នៃប្រឌិត និងសហគមន៍ ជាគ្រឹះនៃអ្វីគ្រប់យ៉ាងដែលយើងធ្វើ។",
  },
  {
    icon: Award,
    title: "Our Excellence",
    titleKh: "ភាពឆ្នើមរបស់យើង",
    description: "Award-winning programs and dedicated faculty committed to nurturing the leaders of tomorrow.",
    descriptionKh: "កម្មវិធីដែលទទួលបានពានរង្វាន់ និងគណៈគ្រូដែលប្តេជ្ញាចិត្តក្នុងការចិញ្ចឹមអ្នកដឹកនាំថ្ងៃស្អែក។",
  },
];

const teachers = [
  {
    name: "Dr. Sok Vichet",
    nameKh: "បណ្ឌិត សុខ វិចេត",
    role: "School Principal",
    roleKh: "នាយកសាលា",
    image: teacher1,
  },
  {
    name: "Mrs. Chan Sreymom",
    nameKh: "អ្នកស្រី ចាន់ ស្រីមុំ",
    role: "Academic Director",
    roleKh: "នាយកវិទ្យាសាស្ត្រ",
    image: teacher2,
  },
  {
    name: "Mr. Phan Dara",
    nameKh: "លោក ផាន់ តារា",
    role: "Head of Languages",
    roleKh: "ប្រធានផ្នែកភាសា",
    image: teacher3,
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding section-alt">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            About Us · អំពីយើង
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Building Tomorrow's <span className="text-gradient-gold">Leaders</span>
          </h2>
          <p className="font-khmer text-xl text-muted-foreground mb-4">
            កសាងអ្នកដឹកនាំថ្ងៃស្អែក
          </p>
          <p className="text-muted-foreground">
            Founded in 2005, Golden Future School has been dedicated to providing exceptional 
            education that combines academic excellence with character development.
          </p>
          <p className="font-khmer text-muted-foreground mt-2">
            បង្កើតឡើងក្នុងឆ្នាំ ២០០៥ សាលាអនាគតមាសបានប្តេជ្ញាចិត្តក្នុងការផ្តល់ការអប់រំពិសេស។
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 card-shadow card-hover group"
            >
              <div className="w-14 h-14 gold-gradient rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <value.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-1">{value.title}</h3>
              <p className="font-khmer text-sm text-primary mb-3">{value.titleKh}</p>
              <p className="text-muted-foreground text-sm mb-2">{value.description}</p>
              <p className="font-khmer text-muted-foreground text-xs">{value.descriptionKh}</p>
            </div>
          ))}
        </div>

        {/* Teachers Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            Meet Our <span className="text-gradient-gold">Leaders</span>
          </h3>
          <p className="font-khmer text-muted-foreground">ជួបជាមួយអ្នកដឹកនាំរបស់យើង</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden card-shadow card-hover group"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold">{teacher.name}</h4>
                <p className="font-khmer text-muted-foreground text-sm mb-2">{teacher.nameKh}</p>
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  {teacher.role}
                </div>
                <p className="font-khmer text-xs text-muted-foreground mt-1">{teacher.roleKh}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
