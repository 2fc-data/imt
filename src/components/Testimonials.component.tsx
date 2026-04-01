import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana Cláudia Silva',
    location: 'Poços de Caldas - MG',
    content: 'A Dra. Monaliz é uma profissional impecável. Fiz minha harmonização facial e o resultado ficou super natural, exatamente como eu queria. O atendimento é muito humano e atencioso.',
  },
  {
    name: 'Roberto Mendes',
    location: 'Pouso Alegre - MG',
    content: 'Minha experiência com o tratamento ortodôntico foi excelente. Tecnologia de ponta e um cuidado que faz toda a diferença no dia a dia. Recomendo a todos!',
  },
  {
    name: 'Juliana Ferreira',
    location: 'Andradas - MG',
    content: 'O Instituto Monaliza Tercetti superou todas as minhas expectativas. O ambiente é acolhedor e a equipe é extremamente qualificada. Meu sorriso nunca esteve tão bonito.',
  },
  {
    name: 'Carla Souza',
    location: 'Poços de Caldas - MG',
    content: 'O que mais me encantou foi o olhar individualizado. A Dra. não vê apenas o dente ou a face, ela vê a pessoa. O equilíbrio que ela busca nos tratamentos é fascinante.',
  }
];

export const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());

    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 bg-surface lg:py-32 bg-destructive-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Histórias Reais</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">Depoimentos</h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden px-4 py-10" ref={emblaRef}>
            <div className="flex -ml-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4">
                  <motion.div
                    animate={{
                      scale: selectedIndex === index ? 1.1 : 0.9,
                      opacity: selectedIndex === index ? 1 : 0.4,
                      y: selectedIndex === index ? 0 : 10
                    }}
                    transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                    className={`h-full bg-card p-8 md:p-10 rounded-3xl border border-border/50 shadow-2xl transition-all duration-300 flex flex-col items-center text-center ${selectedIndex === index ? "ring-2 ring-primary/20 shadow-primary/10" : "shadow-transparent"
                      }`}
                  >
                    <Quote className={`mb-6 transition-colors duration-300 ${selectedIndex === index ? "text-primary" : "text-primary/10"}`} size={40} />
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8 italic">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div className="mt-auto">
                      <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">{testimonial.name}</h4>
                      <p className="text-xs text-primary/60 mt-1 font-medium">{testimonial.location}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="hidden md:block">
            <button
              className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-background border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 shadow-xl z-10"
              onClick={scrollPrev}
              aria-label="Anterior"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-background border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 shadow-xl z-10"
              onClick={scrollNext}
              aria-label="Próximo"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2.5 transition-all duration-500 rounded-full ${selectedIndex === index
                  ? "w-8 bg-primary"
                  : "w-2.5 bg-primary/20 hover:bg-primary/40"
                  }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

