import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import academicsScience from "@/assets/academics-science.jpg";
import academicsLanguage from "@/assets/academics-language.jpg";
import academicsTech from "@/assets/academics-tech.jpg";
import academicsSports from "@/assets/academics-sports.jpg";

const programs = [
  {
    title: "Science & Mathematics",
    titleKh: "វិទ្យាសាស្ត្រ និង គណិតវិទ្យា",
    description: "Comprehensive STEM education with hands-on laboratory experiences and problem-solving skills.",
    descriptionKh: "ការអប់រំ STEM ដ៏ទូលំទូលាយជាមួយនឹងបទពិសោធន៍មន្ទីរពិសោធន៍ និងជំនាញដោះស្រាយបញ្ហា។",
    image: academicsScience,
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Languages & Literature",
    titleKh: "ភាសា និង អក្សរសាស្ត្រ",
    description: "Bilingual education in Khmer and English with focus on communication and creative writing.",
    descriptionKh: "ការអប់រំពីរភាសាជាភាសាខ្មែរ និងអង់គ្លេស ដោយផ្តោតលើការប្រាស្រ័យទាក់ទង និងការសរសេរច្នៃប្រឌិត។",
    image: academicsLanguage,
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Technology & Innovation",
    titleKh: "បច្ចេកវិទ្យា និង ការច្នៃប្រឌិត",
    description: "Modern computer skills, coding, and digital literacy for the 21st century learners.",
    descriptionKh: "ជំនាញកុំព្យូទ័រទំនើប ការសរសេរកូដ និងចំណេះដឹងឌីជីថលសម្រាប់អ្នកសិក្សាសតវត្សទី២១។",
    image: academicsTech,
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Sports & Physical Education",
    titleKh: "កីឡា និង អប់រំកាយ",
    description: "Physical fitness, team sports, and healthy lifestyle education for all students.",
    descriptionKh: "សមត្ថភាពកាយ កីឡាក្រុម និងការអប់រំអំពីរបៀបរស់នៅប្រកបដោយសុខភាពល្អសម្រាប់សិស្សទាំងអស់។",
    image: academicsSports,
    gradient: "from-orange-500/20 to-red-500/20",
  },
];

const AcademicsPage = () => {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              {t("Our Programs", "កម្មវិធីរបស់យើង")}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("Academic Programs", "កម្មវិធីសិក្សា")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t(
                "Discover our comprehensive curriculum designed to nurture young minds and prepare students for future success.",
                "ស្វែងយល់ពីកម្មវិធីសិក្សាដ៏ទូលំទូលាយរបស់យើងដែលត្រូវបានរចនាឡើងដើម្បីចិញ្ចឹមបីបាច់ចិត្តវ័យក្មេង និងរៀបចំសិស្សឱ្យទទួលបានជោគជ័យនាពេលអនាគត។"
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${program.gradient} to-transparent`} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {t(program.title, program.titleKh)}
                  </h3>
                  <p className="text-muted-foreground">
                    {t(program.description, program.descriptionKh)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-primary/10 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {t("Ready to Join Us?", "ត្រៀមខ្លួនចូលរួមជាមួយយើង?")}
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              {t(
                "Enroll your child today and give them the foundation for a bright future.",
                "ចុះឈ្មោះកូនរបស់អ្នកថ្ងៃនេះ ហើយផ្តល់ឱ្យពួកគេនូវគ្រឹះសម្រាប់អនាគតដ៏ភ្លឺស្វាង។"
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

export default AcademicsPage;
