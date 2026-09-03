import React, { useState } from 'react';
import { Header } from './components/Header';
import { StickyMobileCallBar } from './components/StickyMobileCallBar';
import { Hero } from './components/Hero';
import { EmergencyBanner } from './components/EmergencyBanner';
import { ServicesSection } from './components/ServicesSection';
import { CommercialSection } from './components/CommercialSection';
import { WhyUsSection } from './components/WhyUsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ServiceAreasSection } from './components/ServiceAreasSection';
import { ContactFormSection } from './components/ContactFormSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>(
    'Water Heater Repair & Replacement'
  );

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#14171A] font-sans antialiased flex flex-col selection:bg-[#D95A2B] selection:text-white">
      {/* Sticky Header with Navigation & Call Action */}
      <Header />

      {/* Main Content Hub */}
      <main id="main-content" className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Emergency Triage Banner */}
        <EmergencyBanner />

        {/* 3. Priority Services Section (4 Pillars) */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 4. Commercial Property Module */}
        <CommercialSection />

        {/* 5. Why Us: Owner Accountability & Zero Commission Guarantee */}
        <WhyUsSection />

        {/* 6. Verified Customer Feedback */}
        <ReviewsSection />

        {/* 7. Phoenix Metro Service Areas */}
        <ServiceAreasSection />

        {/* 8. Contact & Online Diagnostic Intake Form */}
        <ContactFormSection preselectedService={selectedService} />

        {/* 9. Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Comprehensive Footer with NAP & ROC Notice */}
      <Footer />

      {/* Persistent Mobile 1-Tap Dialer Bar */}
      <StickyMobileCallBar />
    </div>
  );
}
