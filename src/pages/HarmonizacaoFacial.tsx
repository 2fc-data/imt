import { PageLayout } from "@/components/PageLayout.component";
import { ServiceCard } from "@/components/ServiceCard.component";
import { motion } from "framer-motion";

const servicos = [
  { title: "Ácido Hialurônico", description: "Preenchimentos para hidratação, volume e contorno facial." },
  { title: "Bioestimuladores", description: "Indução de colágeno com substâncias como Sculptra e Radiesse." },
  { title: "Toxina Botulínica / Botox", description: "Relaxamento muscular para suavizar linhas de expressão." },
  { title: "Colágeno e Cuidados Pós-Harmonização", description: "Protocolos que mantêm e otimizam resultados." },
  { title: "Enzimas", description: "Redução de gordura localizada e tratamento de fibroses." },
  { title: "Rinomodelação, Lábios e Queixo", description: "Correções específicas com técnicas não cirúrgicas." },
  { title: "Nano Lift / Hidrolifting", description: "Lifting facial e hidratação profunda sem cortes." },
  { title: "Hidroxiapatita", description: "Bioestimulador com efeito tensor e de preenchimento leve." },
  { title: "Rejuvenescimento e Prevenção", description: "Combinação de tratamentos para retardar o envelhecimento." },
];

export const HarmonizacaoFacial = () => {
  return (
    <PageLayout>
      <section className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-display font-bold text-gradient-brand mb-4">
              Harmonização Facial
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Tratamentos personalizados que promovem equilíbrio estético e rejuvenescimento.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicos.map((s, i) => (
              <ServiceCard key={s.title} title={s.title} description={s.description} index={i} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
