import type { NavItem, HeroSlide, Service, Client, Testimonial } from '../types';

// Navigation items
export const navigationItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Sugar Comms', href: '/services/sugar-comms' },
      { label: 'Sugar Xperience', href: '/services/sugar-xperience' },
      { label: 'Sugar Content', href: '/services/sugar-content' },
      { label: 'Sugar Retail', href: '/services/sugar-retail' },
      { label: 'Sugar Digiverse', href: '/services/sugar-digiverse' },
    ]
  },
  { label: 'About', href: '/about' },
  { label: 'Team', href: '/team' },
  { label: 'Work', href: '/work' },
  { label: 'Clients', href: '/clients' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

// Hero slides for homepage
export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Creative Marketing Solutions",
    subtitle: "Transforming brands with innovative strategies that drive real results",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop",
    cta: "Discover More"
  },
  {
    id: 2,
    title: "Digital Excellence",
    subtitle: "Cutting-edge digital experiences that engage and convert",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop",
    cta: "Get Started"
  },
  {
    id: 3,
    title: "Brand Innovation",
    subtitle: "Building memorable brands that stand out in the marketplace",
    image: "https://images.unsplash.com/photo-1553028826-f4804151e0b0?w=1920&h=1080&fit=crop",
    cta: "Learn More"
  },
  {
    id: 4,
    title: "Strategic Growth",
    subtitle: "Data-driven strategies that accelerate business growth",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop",
    cta: "Explore Services"
  }
];

// Services overview
export const services: Service[] = [
  {
    id: 1,
    title: "Sugar Comms",
    description: "Comprehensive communications strategy and execution",
    icon: "MessageSquare",
    features: [
      "Strategic Communication Planning",
      "Content Strategy & Creation",
      "Media Relations",
      "Crisis Communication"
    ],
    image: "/images/services/sugar-comms.jpg"
  },
  {
    id: 2,
    title: "Sugar Xperience",
    description: "User experience design that delights and converts",
    icon: "Users",
    features: [
      "User Experience Design",
      "User Interface Design",
      "Prototyping & Testing",
      "Design Systems"
    ],
    image: "/images/services/sugar-xperience.jpg"
  },
  {
    id: 3,
    title: "Sugar Content",
    description: "Compelling content that tells your brand story",
    icon: "FileText",
    features: [
      "Content Strategy",
      "Copywriting & Editing",
      "Video Production",
      "Photography"
    ],
    image: "/images/services/sugar-content.jpg"
  },
  {
    id: 4,
    title: "Sugar Retail",
    description: "Retail marketing solutions that drive sales",
    icon: "ShoppingBag",
    features: [
      "Retail Strategy",
      "Point of Sale Materials",
      "In-store Experiences",
      "E-commerce Solutions"
    ],
    image: "/images/services/sugar-retail.jpg"
  },
  {
    id: 5,
    title: "Sugar Digiverse",
    description: "Digital marketing that reaches your audience",
    icon: "Globe",
    features: [
      "Digital Strategy",
      "Social Media Marketing",
      "Search Engine Optimization",
      "Paid Advertising"
    ],
    image: "/images/services/sugar-digiverse.jpg"
  }
];

// Client logos (placeholder data)
export const clients: Client[] = [
  { id: 1, name: "Tech Corp", logo: "/images/clients/client-1.png" },
  { id: 2, name: "Fashion Brand", logo: "/images/clients/client-2.png" },
  { id: 3, name: "Food Co", logo: "/images/clients/client-3.png" },
  { id: 4, name: "Health Plus", logo: "/images/clients/client-4.png" },
  { id: 5, name: "Finance Pro", logo: "/images/clients/client-5.png" },
  { id: 6, name: "Travel World", logo: "/images/clients/client-6.png" },
  { id: 7, name: "Education Hub", logo: "/images/clients/client-7.png" },
  { id: 8, name: "Sports Zone", logo: "/images/clients/client-8.png" },
  { id: 9, name: "Beauty Care", logo: "/images/clients/client-9.png" },
  { id: 10, name: "Auto Drive", logo: "/images/clients/client-10.png" },
  { id: 11, name: "Real Estate", logo: "/images/clients/client-11.png" },
  { id: 12, name: "Entertainment", logo: "/images/clients/client-12.png" },
];

// Testimonials
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "Tech Corp",
    content: "Sugar Branch transformed our brand presence completely. Their creative approach and strategic thinking delivered results beyond our expectations.",
    image: "/images/testimonials/testimonial-1.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CEO",
    company: "Fashion Brand",
    content: "The team at Sugar Branch understood our vision perfectly and brought it to life with exceptional creativity and professionalism.",
    image: "/images/testimonials/testimonial-2.jpg"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Brand Manager",
    company: "Food Co",
    content: "Working with Sugar Branch was a game-changer for our marketing efforts. They delivered innovative solutions that drove real business results.",
    image: "/images/testimonials/testimonial-3.jpg"
  }
];

// Company statistics
export const statistics = [
  { label: "Projects Completed", value: 250, suffix: "+" },
  { label: "Happy Clients", value: 150, suffix: "+" },
  { label: "Team Members", value: 25, suffix: "" },
  { label: "Years Experience", value: 8, suffix: "" }
];

// Social media links
export const socialLinks = [
  { platform: "facebook", url: "https://facebook.com/sugarbranch", icon: "Facebook" },
  { platform: "twitter", url: "https://twitter.com/sugarbranch", icon: "Twitter" },
  { platform: "instagram", url: "https://instagram.com/sugarbranch", icon: "Instagram" },
  { platform: "linkedin", url: "https://linkedin.com/company/sugarbranch", icon: "Linkedin" },
];

// Company values
export const companyValues = [
  {
    title: "Innovation",
    description: "We push the boundaries of creativity to deliver unique solutions that set our clients apart from the competition.",
    icon: "Lightbulb"
  },
  {
    title: "Excellence",
    description: "We maintain the highest standards in everything we do, ensuring exceptional quality in every project and interaction.",
    icon: "Award"
  },
  {
    title: "Collaboration",
    description: "We believe in the power of partnership, working closely with our clients to achieve shared success.",
    icon: "Users"
  },
  {
    title: "Results",
    description: "We focus on delivering measurable results that drive real business growth and meaningful impact.",
    icon: "Target"
  }
];
