import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InstituteSection from "@/components/InstituteSection"; // Import the new component
import Testimonials from "@/components/Testimonials";
import HighlightedEvents from "@/components/HighlightedEvents";
import AcademicPrograms from "@/components/AcademicPrograms";  
import FacultySection from "@/components/FacultySection";    // Bachelor/Master/Scholarship
import ContactSection from '@/components/ContactSection';
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
       <HighlightedEvents />
        <Testimonials />
      <InstituteSection /> 
      <AcademicPrograms />
      <FacultySection />
      <ContactSection />
    
      <Footer />
    </main>
  );
};

export default HomePage;