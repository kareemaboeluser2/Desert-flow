export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  problemSolved: string;
  bullets: string[];
  icon: string;
  tag?: string;
}

export interface ReviewItem {
  id: string;
  quote: string;
  author: string;
  location: string;
  serviceType: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceArea {
  name: string;
  coverage: string;
  primaryFocus: string;
  responseTime: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  serviceCategory: string;
  preferredTime: string;
  addressOrCity: string;
  description: string;
}
