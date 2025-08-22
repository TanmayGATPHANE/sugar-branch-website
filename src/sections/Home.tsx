import Hero from "../components/Hero";
import Edge from "../components/Edge";
import Story from "../components/Story";
import Team from "../components/Team";
import Capabilities from "../components/Capabilities";
import Clients from "../components/Clients";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import ImageSlider from "../components/ui/ImageSlider";

export default function Home(){
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="sugar-edge">
        <Edge />
      </section>
      <section id="story">
        <Story />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="capabilities">
        <Capabilities />
      </section>
      <section id="clients">
        <Clients />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <Footer />
    </>
  );
}
