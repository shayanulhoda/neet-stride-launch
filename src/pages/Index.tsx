import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CoursesSection from "@/components/CoursesSection";
import TestsSection from "@/components/TestsSection";
import DashboardSection from "@/components/DashboardSection";
import CommunitySection from "@/components/CommunitySection";
import NotificationSection from "@/components/NotificationSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import USPSection from "@/components/USPSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CoursesSection />
        <TestsSection />
        <DashboardSection />
        <CommunitySection />
        <NotificationSection />
        <PricingSection />
        <TestimonialsSection />
        <USPSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
