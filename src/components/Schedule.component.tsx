import { Phone, Clock, CreditCard } from "lucide-react";
import { useInView } from "./useInView";

export const Schedule = () => {
  const { ref, isVisible } = useInView();

  return (
    <section id="agendamento" className="min-h-screen flex items-center py-20 lg:py-32">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div className={`max-w-3xl mx-auto text-center ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Agendamento</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Agende sua Consulta
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Entre em contato para agendar sua consulta.
          </p>
        </div>

        <div className={`max-w-lg mx-auto mt-12 bg-card rounded-2xl p-8 sm:p-10 border border-border/50 shadow-lg shadow-primary/5 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
          <a
            href="https://wa.me/5535997058234?text=Olá! Gostaria de agendar uma consulta."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contato via WhatsApp"
            className="flex items-center justify-center gap-3 bg-primary text-primary-foreground w-full py-4 rounded-xl text-lg font-semibold hover:bg-secondary transition-colors duration-300 shadow-lg shadow-primary/20"
          >
            <Phone size={22} />
            (35) 99705-8234
          </a>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <Clock className="text-primary mt-0.5 shrink-0" size={18} />
              <div>
                <p className="font-medium text-foreground text-sm">Horário de Atendimento</p>
                <p className="text-muted-foreground text-sm">Segunda a Sexta das 9h às 18h</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CreditCard className="text-primary mt-0.5 shrink-0" size={18} />
              <div>
                <p className="font-medium text-foreground text-sm">Convênios</p>
                <p className="text-muted-foreground text-sm">Convênios e Particular</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};