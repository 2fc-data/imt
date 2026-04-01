import { PageLayout } from "@/components/PageLayout.component";
import { ServiceCard } from "@/components/ServiceCard.component";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const servicos = [
  { icon: Heart, title: "Bruxismo (Adulto e Infantil)", description: "Diagnóstico e tratamento com placas, agulhamento e terapias auxiliares." },
  { icon: Heart, title: "Clareamento Dental", description: "Técnicas modernas com mínimo desconforto e alta eficácia." },
  { icon: Heart, title: "DTM Articular e Muscular", description: "Tratamento de dores, estalos e disfunções na articulação temporomandibular." },
  { icon: Heart, title: "Extração do Siso, Implantes e Restaurações", description: "Procedimentos cirúrgicos e restauradores de alta precisão." },
  { icon: Heart, title: "Limpeza e Prevenção", description: "Profilaxia a cada 6 meses com orientações de higiene." },
  { icon: Heart, title: "Lentes em Resina", description: "Revestimento estético minimamente invasivo." },
  { icon: Heart, title: "Mordida e Correções Oclusais", description: "Avaliação funcional para reabilitação oral." },
];

export const OdontologiaAvancada = () => {
  return (
    <PageLayout
      title="Odontologia Avançada e Estética | Instituto Monaliza Tercetti"
      description="Serviços de Odontologia Avançada: Clareamento dental, DTM, Bruxismo, Implantes e Lentes em Resina em Poços de Caldas."
    >
      <section className="min-h-screen py-12 bg-destructive-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-display font-bold text-gradient-brand mb-4">
              Odontologia Avançada
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Serviços clínicos com foco funcional, estético e preventivo.
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
