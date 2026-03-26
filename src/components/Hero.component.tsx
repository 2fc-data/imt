import { Phone } from "lucide-react";
import heroImage from "@/assets/clinic-hero.png";

export const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Clínica ortopédica moderna" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 pt-24 pb-16">
        <div className="max-w-2xl">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Ortodontista especialista em Bioprogressiva e Autoligados{" "}
            <span className="text-primary">e Harmonizadora facial</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg animate-fade-up" style={{ animationDelay: "0.5s" }}>
            Atendimento humanizado e focado em seu bem estar<br />
            <strong className="text-foreground">Dra. Monaliza Tercetti</strong>
            <span className="block text-sm mt-1 text-muted-foreground"></span>
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.7s" }}>
            <a
              href="https://wa.me/553597058234?text=Olá! Gostaria de agendar uma consulta."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contato via WhatsApp"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold hover:bg-secondary transition-colors duration-300 shadow-lg shadow-primary/20"
            >
              <Phone size={18} />
              Agendar Consulta via WhatsApp
            </a>
            <button
              onClick={() => document.querySelector("#sobre")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-base font-medium border border-border text-foreground hover:bg-muted transition-colors duration-300"
            >
              Saiba Mais
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
