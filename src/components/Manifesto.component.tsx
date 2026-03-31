import { motion } from "framer-motion";

export const Manifesto = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-card to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          {/* Decorative Quote Mark */}
          <span className="text-8xl font-serif text-primary/10 leading-none block h-8 select-none">
            &ldquo;
          </span>

          <h2 className="text-3xl md:text-5xl font-serif italic text-foreground leading-relaxed text-balance">
            A verdadeira beleza nasce do equilíbrio entre um sorriso saudável e a sua própria essência.
          </h2>

          <div className="flex items-center justify-center gap-4 pt-4">
            <div className="h-[1px] w-12 bg-primary/30" />
            <span className="text-sm font-sans tracking-[0.3em] uppercase text-primary font-medium">
              Dra. Monaliz Tercetti
            </span>
            <div className="h-[1px] w-12 bg-primary/30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
