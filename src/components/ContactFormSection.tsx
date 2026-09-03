import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/content';
import { ContactFormData } from '../types';

interface ContactFormSectionProps {
  preselectedService?: string;
}

export const ContactFormSection: React.FC<ContactFormSectionProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    serviceCategory: preselectedService || 'Water Heater Repair & Replacement',
    preferredTime: 'Morning (8:00 AM – 12:00 PM)',
    addressOrCity: '',
    description: '',
  });

  // Keep form dropdown in sync when user clicks "Request Diagnostic for This Issue" on any service card
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, serviceCategory: preselectedService }));
    }
  }, [preselectedService]);

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const serviceOptions = [
    'Water Heater Repair & Replacement',
    'Electronic Leak Detection & Slab Repair',
    'Precision Drain Cleaning & Camera Inspection',
    'Whole-Home Repiping & Pressure Regulation',
    'Commercial Property Plumbing',
    'Emergency / Urgent Plumbing Diagnostic',
    'General Plumbing Fixtures / Other',
  ];

  const timeWindows = [
    'Immediate / Urgent Same-Day Dispatch',
    'Morning (8:00 AM – 12:00 PM)',
    'Afternoon (12:00 PM – 4:00 PM)',
    'Next Business Day (Flexible)',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Form validation
    const trimmedName = formData.fullName.trim();
    const phoneDigits = formData.phone.replace(/\D/g, '');
    const trimmedEmail = formData.email.trim();

    if (!trimmedName) {
      setErrorMessage('Please enter your full name so our dispatcher can address you.');
      return;
    }
    if (!phoneDigits || phoneDigits.length < 10) {
      setErrorMessage('Please enter a valid 10-digit telephone number (e.g. 602-555-0199) for our dispatch team.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      setErrorMessage('Please enter a valid email address for your written appointment confirmation.');
      return;
    }

    setFormStatus('submitting');

    // Simulate reliable dispatch processing
    setTimeout(() => {
      setFormStatus('success');
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      serviceCategory: 'Water Heater Repair & Replacement',
      preferredTime: 'Morning (8:00 AM – 12:00 PM)',
      addressOrCity: '',
      description: '',
    });
    setFormStatus('idle');
    setErrorMessage('');
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white border-b border-[#E5DFD7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact & Business Credentials */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D95A2B] bg-[#D95A2B]/10 px-3 py-1 rounded-full mb-3">
                Schedule Diagnostic & Contact
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1F22] tracking-tight">
                Request Service or Speak With A Plumber
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                For immediate active water leaks or urgent hot water loss, call our dispatch line directly. For scheduled diagnostics, fill out our intake form below.
              </p>
            </div>

            {/* Direct Phone Highlight Card */}
            <div className="p-6 rounded-2xl bg-[#1C1F22] text-white space-y-3 shadow-md">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Fastest Response For Urgent Needs
              </span>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#D95A2B] flex items-center justify-center text-white">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneClean}`}
                    className="text-2xl font-extrabold text-white hover:text-[#D95A2B] transition-colors block"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <span className="text-xs text-gray-300">Live Valley Dispatch 24/7</span>
                </div>
              </div>
            </div>

            {/* Contact Details List */}
            <div className="space-y-4 pt-2 text-sm text-gray-700">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#D95A2B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#1C1F22] block">Service Email</span>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="text-gray-600 hover:text-[#D95A2B]">
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D95A2B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#1C1F22] block">Valley Headquarters</span>
                  <span className="text-gray-600 block">{BUSINESS_INFO.address}</span>
                  <span className="text-gray-600 block">{BUSINESS_INFO.cityStateZip}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#D95A2B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#1C1F22] block">Operating Hours</span>
                  <span className="text-gray-600 block">{BUSINESS_INFO.hoursRegular}</span>
                  <span className="text-[#D95A2B] font-semibold text-xs block mt-0.5">
                    {BUSINESS_INFO.hoursEmergency}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <ShieldCheck className="w-5 h-5 text-[#D95A2B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#1C1F22] block">Contractor License</span>
                  <span className="text-gray-600 block">Arizona Registrar of Contractors</span>
                  <span className="text-xs font-mono font-medium text-gray-800 bg-[#F3EFEA] px-2 py-0.5 rounded inline-block mt-1">
                    ROC: {BUSINESS_INFO.rocNumber}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Scheduling Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FBF9F5] border border-[#E5DFD7] rounded-3xl p-6 sm:p-8 shadow-sm">
              
              {formStatus === 'success' ? (
                <div className="text-center py-10 space-y-5 animate-in fade-in duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" aria-hidden="true" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-extrabold text-[#1C1F22]">
                      Diagnostic Request Received
                    </h3>
                    <p className="text-sm text-gray-600 max-w-md mx-auto">
                      Thank you, <strong className="text-[#1C1F22]">{formData.fullName}</strong>. Our on-duty dispatcher has received your request for{' '}
                      <strong className="text-[#1C1F22]">{formData.serviceCategory}</strong> during the{' '}
                      <strong className="text-[#1C1F22]">{formData.preferredTime}</strong> window.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-[#E5DFD7] max-w-md mx-auto text-left text-xs space-y-1.5 text-gray-700">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Contact Phone:</span>
                      <span className="font-semibold">{formData.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Service Location:</span>
                      <span className="font-semibold">{formData.addressOrCity || 'Phoenix Area'}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`tel:${BUSINESS_INFO.phoneClean}`}
                      className="w-full sm:w-auto bg-[#D95A2B] hover:bg-[#BF491E] text-white px-6 py-3 rounded-lg font-bold text-sm shadow-sm transition-colors"
                    >
                      Need Immediate Arrival? Call {BUSINESS_INFO.phone}
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full sm:w-auto bg-transparent hover:bg-gray-200 text-gray-700 px-5 py-3 rounded-lg font-medium text-xs transition-colors border border-gray-300"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="pb-2 border-b border-[#E5DFD7]">
                    <h3 className="text-xl font-bold text-[#1C1F22]">
                      Online Diagnostic Intake
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      No upfront payment required. We confirm your appointment time by phone or SMS.
                    </p>
                  </div>

                  {errorMessage && (
                    <div
                      role="alert"
                      aria-live="assertive"
                      className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Robert Davis"
                        required
                        aria-required="true"
                        className="w-full px-4 py-3 bg-white border border-[#D9D3CA] rounded-xl text-sm text-[#14171A] focus:outline-none focus:ring-2 focus:ring-[#D95A2B] focus:border-transparent transition-all placeholder:text-gray-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. (602) 555-0199"
                        required
                        aria-required="true"
                        className="w-full px-4 py-3 bg-white border border-[#D9D3CA] rounded-xl text-sm text-[#14171A] focus:outline-none focus:ring-2 focus:ring-[#D95A2B] focus:border-transparent transition-all placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  {/* Email & Suburb */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. robert@gmail.com"
                        required
                        aria-required="true"
                        className="w-full px-4 py-3 bg-white border border-[#D9D3CA] rounded-xl text-sm text-[#14171A] focus:outline-none focus:ring-2 focus:ring-[#D95A2B] focus:border-transparent transition-all placeholder:text-gray-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="addressOrCity" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Street Address or City
                      </label>
                      <input
                        id="addressOrCity"
                        type="text"
                        name="addressOrCity"
                        value={formData.addressOrCity}
                        onChange={handleChange}
                        placeholder="e.g. Scottsdale, AZ"
                        className="w-full px-4 py-3 bg-white border border-[#D9D3CA] rounded-xl text-sm text-[#14171A] focus:outline-none focus:ring-2 focus:ring-[#D95A2B] focus:border-transparent transition-all placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  {/* Service Category Selection */}
                  <div>
                    <label htmlFor="serviceCategory" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Primary Plumbing Issue
                    </label>
                    <select
                      id="serviceCategory"
                      name="serviceCategory"
                      value={formData.serviceCategory}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-[#D9D3CA] rounded-xl text-sm text-[#14171A] focus:outline-none focus:ring-2 focus:ring-[#D95A2B] focus:border-transparent transition-all"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Time Window Selection */}
                  <div>
                    <label htmlFor="preferredTime" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Preferred Arrival Window
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-[#D9D3CA] rounded-xl text-sm text-[#14171A] focus:outline-none focus:ring-2 focus:ring-[#D95A2B] focus:border-transparent transition-all"
                    >
                      {timeWindows.map((win) => (
                        <option key={win} value={win}>
                          {win}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Description Textarea */}
                  <div>
                    <label htmlFor="description" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Describe What Happened (Optional)
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={3}
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="e.g. Water heater is leaking from the base; floor around utility closet is damp."
                      className="w-full px-4 py-3 bg-white border border-[#D9D3CA] rounded-xl text-sm text-[#14171A] focus:outline-none focus:ring-2 focus:ring-[#D95A2B] focus:border-transparent transition-all placeholder:text-gray-400 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-[#D95A2B] hover:bg-[#BF491E] active:bg-[#A33D17] text-white py-4 rounded-xl font-bold text-base shadow-md transition-all flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D95A2B] focus-visible:ring-offset-2 disabled:opacity-75 cursor-pointer"
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Confirming Dispatch Slot...</span>
                      </>
                    ) : (
                      <span>Request Diagnostic Appointment</span>
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-500 pt-1">
                    Your details are confidential. We never sell contact information or spam your inbox.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
