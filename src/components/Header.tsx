import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Shield, Clock, Droplets } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Emergency', href: '#emergency' },
    { label: 'Commercial', href: '#commercial' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Service Areas', href: '#service-areas' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* WCAG AA Skip Navigation Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#D95A2B] focus:text-white focus:rounded-xl focus:shadow-2xl focus:font-bold focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>

      <header
        className={`sticky top-0 z-50 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-[#1C1F22]/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-[#1C1F22] py-3.5 sm:py-4'
        } border-b border-[#282C30] text-white`}
      >
        <div className="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo & Identity */}
          <a
            href="#top"
            className="flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D95A2B] rounded-lg shrink-0"
            aria-label="DesertFlow Plumbing Home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#D95A2B] flex items-center justify-center text-white shadow-sm shadow-[#D95A2B]/20 transition-transform duration-200 group-hover:scale-105 shrink-0">
              <Droplets className="w-4 h-4 sm:w-5 sm:h-5 text-white" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-extrabold text-base sm:text-xl tracking-tight text-white leading-none whitespace-nowrap">
                  DesertFlow
                </span>
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#D95A2B] bg-[#D95A2B]/15 px-1.5 py-0.5 rounded border border-[#D95A2B]/30 whitespace-nowrap hidden md:inline-block">
                  Phoenix, AZ
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-[#9CA3AF] tracking-normal font-medium mt-0.5 sm:mt-1 whitespace-nowrap">
                Plumbing & Drain
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links (Clean Single-Line Alignment) */}
          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-2"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-150 whitespace-nowrap py-2 px-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D95A2B]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Direct Call CTA & Mobile/Tablet Menu Button */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Direct Call Button: Adaptive for Mobile Screen Width */}
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="flex items-center gap-2 sm:gap-3 bg-[#D95A2B] hover:bg-[#BF491E] active:bg-[#A33D17] text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl font-semibold text-sm transition-all duration-150 shadow-md shadow-[#D95A2B]/20 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C1F22] min-h-[44px]"
              aria-label={`Call DesertFlow Plumbing at ${BUSINESS_INFO.phone}`}
            >
              <div className="w-7 h-7 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white animate-pulse" aria-hidden="true" />
              </div>
              <div className="flex flex-col text-left leading-none">
                {/* On smallest mobile screens, show clear Call label; on sm+ show complete telephone */}
                <span className="text-xs sm:text-sm font-bold tracking-tight text-white whitespace-nowrap sm:inline hidden">
                  {BUSINESS_INFO.phone}
                </span>
                <span className="text-xs font-bold tracking-tight text-white whitespace-nowrap sm:hidden inline">
                  Call Now
                </span>
                <span className="text-[9px] sm:text-[10px] text-white/90 font-semibold tracking-wider uppercase whitespace-nowrap mt-0.5 hidden xs:inline-block">
                  24/7 Live Response
                </span>
              </div>
            </a>

            {/* Tablet & Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center p-2 text-gray-300 hover:text-white hover:bg-[#282C30] rounded-xl border border-gray-700/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D95A2B] transition-colors"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1C1F22] border-t border-[#282C30] px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150 shadow-2xl max-h-[calc(100vh-70px)] overflow-y-auto">
            <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleNavClick}
                  className="px-3.5 py-3 text-base font-semibold text-gray-200 hover:bg-[#282C30] hover:text-white rounded-xl transition-colors min-h-[48px] flex items-center"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-[#282C30] space-y-2.5">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="w-full flex items-center justify-center gap-2.5 bg-[#D95A2B] hover:bg-[#BF491E] text-white py-3 rounded-xl font-bold text-base shadow-sm"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                <span>Call Dispatch: {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href="#contact"
                onClick={handleNavClick}
                className="w-full flex items-center justify-center gap-2 bg-[#282C30] hover:bg-[#383D43] text-gray-200 py-3 rounded-xl font-semibold text-sm border border-gray-700"
              >
                <span>Schedule Online Diagnostic</span>
              </a>

              <div className="flex items-center justify-center gap-4 text-xs text-gray-400 pt-2">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#D95A2B]" /> ROC Licensed
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#D95A2B]" /> 24/7 Valley Dispatch
                </span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
