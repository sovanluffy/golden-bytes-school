import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AcademicsPage from "./pages/AcademicsPage";
import Career from "./pages/CareerCenter";
import EventsPage from "./pages/EventsPage";
import ContactPage from "./pages/ContactPage";
import ResourcesPage from "./pages/Resources";
import CareerPage from "./pages/CareerPage";
import NotFound from "./pages/NotFound";
import DepartmentPage from "./pages/DepartmentPage";
import ContactSection from "./components/ContactSection";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/academics" element={<AcademicsPage />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/career-center" element={<Career />} />
            <Route path="/contact-us" element={<ContactSection />} />
            <Route path="/:id" element={<DepartmentPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
