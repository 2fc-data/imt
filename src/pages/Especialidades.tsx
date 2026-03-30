import { PageLayout } from "@/components/PageLayout.component";
import { ServiceCard } from "@/components/ServiceCard.component";
import { motion } from "framer-motion";

const cursos = [
  { title: "Arco de Cobre, Níquel e Titânio", description: "Aplicações ortodônticas para correções complexas com maior controle biomecânico." },
  { title: "Autólogos", description: "Procedimentos com substâncias do próprio corpo (como PRP) para regeneração e estética." },
  { title: "Bio Reconexão", description: "Abordagem holística entre estética, biologia e saúde integrativa." },
  { title: "Bioestimulação Nutritiva", description: "Técnicas de rejuvenescimento com ativos que estimulam colágeno e nutrem a pele." },
  { title: "Caneta Protopen", description: "Técnica minimamente invasiva para entrega transdérmica de ativos." },
  { title: "Clínica", description: "Prática supervisionada de técnicas estéticas e odontológicas." },
  { title: "Cosmetologia", description: "Estudo de dermocosméticos, princípios ativos e suas aplicações clínicas." },
  { title: "DTM", description: "Diagnóstico e tratamento de disfunções temporomandibulares." },
  { title: "Estética Regenerativa", description: "Uso de terapias biológicas para restauração funcional e estética." },
  { title: "Exames Séricos", description: "Interpretação de exames laboratoriais aplicados à estética e à odontologia." },
  { title: "Facehof", description: "Harmonização facial com foco anatômico e funcional." },
  { title: "Fenol", description: "Técnica de peeling profundo com ácido fenol para rejuvenescimento." },
  { title: "Fios de PDO", description: "Lifting facial com fios absorvíveis para tração e bioestimulação." },
  { title: "Harmonização Facial", description: "Abordagem global da face, unindo estética, proporção e funcionalidade." },
  { title: "Planejamento e Preenchimento Labial", description: "Técnicas para lábios naturais, seguros e simétricos." },
  { title: "Protocolos Revive e Alive", description: "Protocolos autorais voltados para revitalização e prevenção do envelhecimento." },
  { title: "Protocolos de Tratamento", description: "Organização e aplicação de técnicas combinadas para melhores resultados." },
  { title: "Volumização Facial", description: "Técnicas de reposição de volume com foco em rejuvenescimento tridimensional." },
];

export const Especialidades = () => {
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
              Especialidades
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Cursos de capacitação e especialização feitos pelos profissionais do Instituto Monaliza Tercetti.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cursos.map((curso, i) => (
              <ServiceCard key={curso.title} title={curso.title} description={curso.description} index={i} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};