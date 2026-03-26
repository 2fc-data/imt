import { About } from "../components/About.component";
import { Footer } from "../components/Footer.component";
import { Hero } from "../components/Hero.component";
import { Location } from "../components/Location.component";
import { Navbar } from "../components/Navbar.component";
import { Schedule } from "../components/Schedule.component";
import { Services } from "../components/Services.component";
import { useSEO } from "../hooks/useSEO";

export const Index = () => {
  useSEO({
    title: "Dra. Monaliza Tercetti | Ortodontista especialista em Bioprogressiva e Autoligados e Harmonizadora facial em Poços de Caldas",
    description: "Dra. Monaliza Tercetti - Ortodontista especialista em Bioprogressiva e Autoligados e Harmonizadora facial em Poços de Caldas, MG. Agende sua consulta.",
    url: "https://monalizatarcetti.com.br/"
  });
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Location />
      <Schedule />
      <Footer />
    </>
  );
};
