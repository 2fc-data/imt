import { Heart, Stethoscope, Syringe } from "lucide-react";
import { useInView } from "./useInView";

const highlights = [
  { icon: Heart, title: "Experiência Clínica", desc: "Anos de prática em tratamento odontológico." },
  { icon: Stethoscope, title: "Ortodontista Especialista", desc: "Bioprogressiva e Autoligados com técnicas modernas." },
  { icon: Syringe, title: "Harmonizadora facial", desc: "Procedimentos com produtos de última geração." },
];

export const About = () => {
  const { ref, isVisible } = useInView();

  return (
    <section id="sobre" className="min-h-screen flex items-center bg-surface py-20 lg:py-32">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div className={`max-w-3xl mx-auto text-center mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Sobre a Doutora</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Dra. Monaliza Tercetti
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Ortodontista especialista em Bioprogressiva, Autoligados e Harmonizadora facial
            Sua missão é oferecer atendimento completo, individualizado e humanizado para
            o seu bem-estar, em Poços de Caldas e região.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className={`bg-card rounded-xl p-8 shadow-sm border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-shadow duration-300 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.2 + i * 0.15}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <item.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
