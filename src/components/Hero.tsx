import heroImage from "@/assets/hero-school.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Students learning in classroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 overlay-dark" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 animate-fade-up">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-medium text-sm">Excellence in Education Since 2005</span>
          </div>

          {/* Main Title */}
          <div className="space-y-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Welcome to{" "}
              <span className="text-gradient-gold">Golden Future</span>{" "}
              School
            </h1>
            <p className="font-khmer text-2xl md:text-3xl lg:text-4xl text-white/90">
              សូមស្វាគមន៍មកកាន់សាលា <span className="text-primary">អនាគតមាស</span>
            </p>
          </div>

          {/* Tagline */}
          <div className="space-y-2 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Nurturing young minds to become tomorrow's leaders through quality education, 
              innovation, and character development.
            </p>
            <p className="font-khmer text-base md:text-lg text-white/70">
              ចិញ្ចឹមបីបាច់កុមារឱ្យក្លាយជាអ្នកដឹកនាំថ្ងៃស្អែក តាមរយៈការអប់រំប្រកបដោយគុណភាព
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button className="btn-primary text-lg px-8 py-6 rounded-full group" asChild>
              <a href="#about">
                <BookOpen className="w-5 h-5 mr-2" />
                Learn More
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              variant="outline"
              className="text-lg px-8 py-6 rounded-full border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all"
              asChild
            >
              <a href="#contact">
                <Users className="w-5 h-5 mr-2" />
                Contact Us · ទំនាក់ទំនង
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "20+", label: "Years of Excellence", labelKh: "ឆ្នាំនៃភាពឆ្នើម" },
              { value: "1,500+", label: "Happy Students", labelKh: "សិស្សរីករាយ" },
              { value: "100+", label: "Expert Teachers", labelKh: "គ្រូជំនាញ" },
              { value: "98%", label: "Success Rate", labelKh: "អត្រាជោគជ័យ" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/10 hover:border-primary/50 transition-all group"
              >
                <p className="text-3xl md:text-4xl font-bold text-primary group-hover:scale-110 transition-transform">
                  {stat.value}
                </p>
                <p className="text-white/80 text-sm mt-1">{stat.label}</p>
                <p className="font-khmer text-white/60 text-xs">{stat.labelKh}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
