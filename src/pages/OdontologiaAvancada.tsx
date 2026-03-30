import { PageLayout } from "@/components/PageLayout.component";
import { ServiceCard } from "@/components/ServiceCard.component";
import { motion } from "framer-motion";

const servicos = [
  { title: "Bruxismo (Adulto e Infantil)", description: "Diagnóstico e tratamento com placas, agulhamento e terapias auxiliares." },
  { title: "Clareamento Dental", description: "Técnicas modernas com mínimo desconforto e alta eficácia." },
  { title: "DTM Articular e Muscular", description: "Tratamento de dores, estalos e disfunções na articulação temporomandibular." },
  { title: "Extração do Siso, Implantes e Restaurações", description: "Procedimentos cirúrgicos e restauradores de alta precisão." },
  { title: "Limpeza e Prevenção", description: "Profilaxia a cada 6 meses com orientações de higiene." },
  { title: "Lentes em Resina", description: "Revestimento estético minimamente invasivo." },
  { title: "Mordida e Correções Oclusais", description: "Avaliação funcional para reabilitação oral." },
];

export const OdontologiaAvancada = () => {
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
              Odontologia Avançada
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Serviços clínicos com foco funcional, estético e preventivo.
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
