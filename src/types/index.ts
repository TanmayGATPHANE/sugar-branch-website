export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  cta: string;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  bio?: string;
  social: {
    platform: string;
    url: string;
  }[];
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image: string;
}

export interface Client {
  id: number;
  name: string;
  logo: string;
  website?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  image: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  gallery: string[];
  client: string;
  date: string;
  technologies: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
}

export interface JobListing {
  id: number;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance';
  description: string;
  requirements: string[];
  responsibilities: string[];
  postedDate: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  contact: {
    phone: string;
    email: string;
    website: string;
  };
  social: SocialLink[];
}
