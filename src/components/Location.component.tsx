import { useState } from "react";
import { MapPin, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "./useInView";

const locations = [
  {
    name: "Instituto Monaliza Tercetti",
    address: "Av. Dr. David Benedito Otoni, 277 - Jardim dos Estados",
    city: "Poços de Caldas, MG",
    cep: "37701-069",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3716.174743563839!2d-46.563017!3d-21.783522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b03090a92e03e9%3A0x55a40dab8e1e2200!2sAv.%20Dr.%20David%20Benedito%20Otoni%2C%20277%20-%20Jardim%20dos%20Estados%2C%20Po%C3%A7os%20de%20Caldas%20-%20MG%2C%2037701-069!5e0!3m2!1spt-BR!2sbr!4v1680000000000",
  },
];

export const Location = () => {
  const { ref, isVisible } = useInView();
  const [activeMap, setActiveMap] = useState<number | null>(null);

  return (
    <section
      id="localizacao"
      className="relative min-h-screen flex items-center bg-surface py-20 lg:py-32 overflow-hidden"
    >
      {/* Content — fades out when map is open */}
      <motion.div
        ref={ref}
        animate={{ opacity: activeMap !== null ? 0.08 : 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 lg:px-8 relative z-10 pointer-events-none"
        style={{ pointerEvents: activeMap !== null ? "none" : "auto" }}
      >
        <div
          className={`max-w-3xl mx-auto text-center mb-16 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
            Onde Atendemos
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Nossa Localização
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">Poços de Caldas - MG</p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onHoverStart={() => setActiveMap(i)}
              className={`bg-destructive-foreground rounded-xl p-8 border border-border/50 shadow-sm cursor-pointer ${
                isVisible
                  ? i === 0
                    ? "animate-slide-in-left"
                    : "animate-slide-in-right"
                  : "opacity-0"
              }`}
              style={{ animationDelay: `${0.3 + i * 0.15}s`, pointerEvents: "auto" }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <MapPin className="text-primary" size={22} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {loc.name}
              </h3>
              <p className="text-muted-foreground text-sm">{loc.address}</p>
              <p className="text-muted-foreground text-sm">{loc.city}</p>
              <p className="text-xs text-muted-foreground/60 mt-1">{loc.cep}</p>
              <p className="mt-4 text-xs text-primary/70 font-medium tracking-wide flex items-center gap-1">
                <MapPin size={12} /> Passe o mouse para ver no mapa
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Map overlay — slides in over the section */}
      <AnimatePresence>
        {activeMap !== null && (
          <motion.div
            key="map-overlay"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 z-20"
            onMouseLeave={() => setActiveMap(null)}
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 0.2 }}
              onClick={() => setActiveMap(null)}
              className="absolute top-5 right-5 z-30 flex items-center gap-2 bg-card/90 backdrop-blur-sm text-foreground px-4 py-2 rounded-full shadow-lg border border-border hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-pointer"
              aria-label="Fechar mapa"
            >
              <X size={16} />
              <span className="text-sm font-medium">Fechar mapa</span>
            </motion.button>

            <iframe
              src={locations[activeMap].mapSrc}
              title={`Mapa — ${locations[activeMap].name}`}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
