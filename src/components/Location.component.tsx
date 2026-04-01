import { MapPin } from "lucide-react";
import { useInView } from "./useInView";

const locations = [
  {
    name: "Instituto Monaliza Tercetti",
    address: "Av. Dr. David Benedito Otoni, 277 - Jardim dos Estados",
    city: "Poços de Caldas, MG",
    cep: "37701-069",
  },
];

export const Location = () => {
  const { ref, isVisible } = useInView();

  return (
    <section id="localizacao" className="min-h-screen flex items-center bg-surface py-20 lg:py-32">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div className={`max-w-3xl mx-auto text-center mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Onde Atendemos</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Nossa Localização
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Poços de Caldas - MG
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
          {locations.map((loc, i) => (
            <div
              key={loc.name}
              className={`bg-destructive-foreground rounded-xl p-8 border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300 ${isVisible ? (i === 0 ? "animate-slide-in-left" : "animate-slide-in-right") : "opacity-0"}`}
              style={{ animationDelay: `${0.3 + i * 0.15}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <MapPin className="text-primary" size={22} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{loc.name}</h3>
              <p className="text-muted-foreground text-sm">{loc.address}</p>
              <p className="text-muted-foreground text-sm">{loc.city}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
