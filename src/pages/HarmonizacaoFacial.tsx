import { PageLayout } from "@/components/PageLayout.component";
import { ServiceCard } from "@/components/ServiceCard.component";
import { motion } from "framer-motion";
import { Smile } from "lucide-react";

const servicos = [
  { icon: Smile, title: "Ácido Hialurônico", description: "Preenchimentos para hidratação, volume e contorno facial." },
  { icon: Smile, title: "Bioestimuladores", description: "Indução de colágeno com substâncias como Sculptra e Radiesse." },
  { icon: Smile, title: "Toxina Botulínica / Botox", description: "Relaxamento muscular para suavizar linhas de expressão." },
  { icon: Smile, title: "Colágeno e Cuidados Pós-Harmonização", description: "Protocolos que mantêm e otimizam resultados." },
  { icon: Smile, title: "Enzimas", description: "Redução de gordura localizada e tratamento de fibroses." },
  { icon: Smile, title: "Rinomodelação, Lábios e Queixo", description: "Correções específicas com técnicas não cirúrgicas." },
  { icon: Smile, title: "Nano Lift / Hidrolifting", description: "Lifting facial e hidratação profunda sem cortes." },
  { icon: Smile, title: "Hidroxiapatita", description: "Bioestimulador com efeito tensor e de preenchimento leve." },
  { icon: Smile, title: "Rejuvenescimento e Prevenção", description: "Combinação de tratamentos para retardar o envelhecimento." },
];

export const HarmonizacaoFacial = () => {
  return (
    <PageLayout 
      title="Harmonização Facial em Poços de Caldas | Dra. Monaliza Tercetti"
      description="Tratamentos de Harmonização Facial: Botox, Ácido Hialurônico, Bioestimuladores e fios de PDO para rejuvenescimento natural."
    >
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
              <ServiceCard key={s.title} icon={s.icon} title={s.title} description={s.description} index={i} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
