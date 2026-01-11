import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Eye, Heart, Award } from "lucide-react";
import teacher1 from "@/assets/teacher-1.jpg";
import teacher2 from "@/assets/teacher-2.jpg";
import teacher3 from "@/assets/teacher-3.jpg";

const values = [
  {
    icon: Target,
    title: "Mission",
    titleKh: "បេសកកម្ម",
    description: "To provide quality education that empowers students to become lifelong learners and responsible citizens.",
    descriptionKh: "ផ្តល់ការអប់រំដែលមានគុណភាពដែលផ្តល់អំណាចដល់សិស្សឱ្យក្លាយជាអ្នកសិក្សាពេញមួយជីវិត និងជាពលរដ្ឋមានទំនួលខុសត្រូវ។",
  },
  {
    icon: Eye,
    title: "Vision",
    titleKh: "ចក្ខុវិស័យ",
    description: "To be the leading educational institution in Cambodia, nurturing future leaders with knowledge and values.",
    descriptionKh: "ក្លាយជាស្ថាប័នអប់រំឈានមុខគេនៅកម្ពុជា ចិញ្ចឹមបីបាច់អ្នកដឹកនាំអនាគតដោយចំណេះដឹង និងតម្លៃ។",
  },
  {
    icon: Heart,
    title: "Values",
    titleKh: "គុណតម្លៃ",
    description: "Integrity, excellence, respect, and compassion guide everything we do at Golden Future School.",
    descriptionKh: "សុចរិតភាព ភាពឆ្នើម ការគោរព និងមេត្តាករុណា ដឹកនាំអ្វីគ្រប់យ៉ាងដែលយើងធ្វើនៅសាលាអនាគតមាស។",
  },
  {
    icon: Award,
    title: "Excellence",
    titleKh: "ភាពឆ្នើម",
    description: "We strive for excellence in academics, character development, and community engagement.",
    descriptionKh: "យើងខិតខំសម្រេចភាពឆ្នើមក្នុងការសិក្សា ការអភិវឌ្ឍន៍ចរិតលក្ខណៈ និងការចូលរួមសហគមន៍។",
  },
];

const teachers = [
  {
    name: "Dr. Sokha Chanthy",
    nameKh: "បណ្ឌិត សុខា ចាន់ធី",
    role: "Principal",
    roleKh: "នាយកសាលា",
    image: teacher1,
  },
  {
    name: "Mr. Veasna Pich",
    nameKh: "លោក វាសនា ពេជ្រ",
    role: "Vice Principal",
    roleKh: "អនុប្រធានសាលា",
    image: teacher2,
  },
  {
    name: "Ms. Bopha Srey",
    nameKh: "កញ្ញា បុប្ផា ស្រី",
    role: "Head of Academics",
    roleKh: "ប្រធានផ្នែកសិក្សា",
    image: teacher3,
  },
];

const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              {t("Who We Are", "យើងជានរណា")}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("About Golden Future School", "អំពីសាលាអនាគតមាស")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t(
                "Founded in 2000, Golden Future School has been dedicated to providing quality education that combines academic excellence with character development. We believe in nurturing the whole child—intellectually, emotionally, and socially.",
                "បង្កើតឡើងក្នុងឆ្នាំ ២០០០ សាលាអនាគតមាសបានប្តេជ្ញាផ្តល់ការអប់រំដែលមានគុណភាពដែលរួមបញ្ចូលភាពឆ្នើមផ្នែកសិក្សាជាមួយនឹងការអភិវឌ្ឍន៍ចរិតលក្ខណៈ។ យើងជឿជាក់ក្នុងការចិញ្ចឹមបីបាច់កូនទាំងមូល—បញ្ញា អារម្មណ៍ និងសង្គម។"
              )}
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-16 h-16 gold-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold mb-2">
                  {t(value.title, value.titleKh)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(value.description, value.descriptionKh)}
                </p>
              </div>
            ))}
          </div>

          {/* Leadership Team */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {t("Our Leadership Team", "ក្រុមដឹកនាំរបស់យើង")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t(
                "Meet the dedicated educators who lead our school with passion and commitment.",
                "ស្គាល់គ្រូបង្រៀនដែលប្តេជ្ញាចិត្តដែលដឹកនាំសាលារបស់យើងដោយចំណង់ចំណូលចិត្ត និងការប្តេជ្ញាចិត្ត។"
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teachers.map((teacher, index) => (
              <div
                key={index}
                className="group text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-bold text-lg">
                  {t(teacher.name, teacher.nameKh)}
                </h3>
                <p className="text-primary font-medium">
                  {t(teacher.role, teacher.roleKh)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;
