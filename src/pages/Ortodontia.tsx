import { PageLayout } from "@/components/PageLayout.component";
import { ServiceCard } from "@/components/ServiceCard.component";
import { motion } from "framer-motion";
import { CircuitBoard } from "lucide-react";

const servicos = [
  { icon: CircuitBoard, title: "Aparelhos Convencionais e Invisíveis", description: "Opções estéticas e funcionais para diversas faixas etárias." },
  { icon: CircuitBoard, title: "Aparelho Lingual", description: "Correção discreta com bráquetes colocados na face interna dos dentes." },
  { icon: CircuitBoard, title: "Autoligados", description: "Aparelhos que dispensam ligaduras, com maior conforto e eficiência." },
  { icon: CircuitBoard, title: "Mini Implantes e Microparafusos IZC", description: "Ancoragem para movimentações dentárias mais complexas." },
  { icon: CircuitBoard, title: "Correção de Atresia Palatal, Mordida Aberta e Overbite", description: "Abordagem multidisciplinar para equilíbrio esquelético e funcional." },
  { icon: CircuitBoard, title: "Mesolifting Ortodôntico", description: "Técnica complementar com estímulo de colágeno durante o tratamento." },
  { icon: CircuitBoard, title: "Resina Composta Estratificada", description: "Restaurações estéticas com naturalidade e durabilidade." },
];

export const Ortodontia = () => {
  return (
    <PageLayout
      title="Ortodontia Especializada | Aparelhos Invisíveis e Autoligados"
      description="Tratamentos ortodônticos modernos: Aparelhos autoligados, invisíveis (Invisalign), mini implantes e correção funcional."
    >
      <section className="min-h-screen py-12 bg-destructive-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-display font-bold text-gradient-brand mb-4">
              Ortodontia
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Tratamentos modernos para correção do posicionamento dentário e estrutura facial.
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