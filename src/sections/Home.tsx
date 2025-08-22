import HeroSlider from "../components/HeroSlider";
import SugarEdge from "../components/SugarEdge";
import OurStory from "../components/OurStory";
import TeamSection from "../components/TeamSection";
import CapabilitiesSection from "../components/CapabilitiesSection";
import ClientsSection from "../components/ClientsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";

export default function Home(){
  return (
    <>
      <section id="hero">
        <HeroSlider />
      </section>
      <section id="sugar-edge">
        <SugarEdge />
      </section>
      <section id="story">
        <OurStory />
      </section>
      <section id="team">
        <TeamSection />
      </section>
      <section id="capabilities">
        <CapabilitiesSection />
      </section>
      <section id="clients">
        <ClientsSection />
      </section>
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <Footer />
    </>
  );
}
