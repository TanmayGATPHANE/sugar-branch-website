import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import TeamSection from '../components/sections/TeamSection';
import ClientsSection from '../components/sections/ClientsSection';
import ContactSection from '../components/sections/ContactSection';

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <ClientsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
