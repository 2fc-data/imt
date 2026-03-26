import { Award, CircuitBoard, Laugh, Smile } from "lucide-react";
import { useInView } from "./useInView";

const especialidades = [
  { icon: Award, title: "Autólogos", desc: "Procedimentos com substâncias do próprio corpo (como PRP) para regeneração e estética." },
  { icon: Award, title: "Bio Reconexão", desc: "Abordagem holística entre estética, biologia e saúde integrativa." },
  { icon: Award, title: "Bioestimulação Nutritiva", desc: "Técnicas de rejuvenescimento com ativos que estimulam colágeno e nutrem a pele" },
  { icon: Award, title: "Caneta Protopen", desc: "Técnica minimamente invasiva para entrega transdérmica de ativos." },
  { icon: Award, title: "Clínica", desc: "Prática supervisionada de técnicas estéticas e odontológicas." },
  { icon: Award, title: "Cosmetologia", desc: "Estudo de dermocosméticos, princípios ativos e suas aplicações clínicas." },
  { icon: Award, title: "DTM", desc: "Diagnóstico e tratamento de disfunções temporomandibulares." },
  { icon: Award, title: "Estética Regenerativa", desc: "Uso de terapias biológicas para restauração funcional e estética." },
  { icon: Award, title: "Exames Séricos", desc: "Interpretação de exames laboratoriais aplicados à estética e à odontologia." },
  { icon: Award, title: "Facehof", desc: "Harmonização facial com foco anatômico e funcional." },
  { icon: Award, title: "Fenol", desc: "Técnica de peeling profundo com ácido fenol para rejuvenescimento." },
  { icon: Award, title: "Fios de PDO", desc: "Lifting facial com fios absorvíveis para tração e bioestimulação" },
  { icon: Award, title: "Harmonização Facial", desc: "Abordagem global da face, unindo estética, proporção e funcionalidade." },
  { icon: Award, title: "Planejamento e  Preenchimento Labia", desc: "Técnicas para lábios naturais, seguros e simétricos." },
  { icon: Award, title: "Protocolos Revive e Alive", desc: "Protocolos autorais voltados para revitalização e prevenção do envelhecimento." },
  { icon: Award, title: "Protocolos de Tratamento", desc: "Organização e aplicação de técnicas combinadas para melhores resultados." },
  { icon: Award, title: "Volumização Facial", desc: "Técnicas de reposição de volume com foco em rejuvenescimento tridimensional." },
];

const services = [
  { icon: Smile, title: "Ácido Hialurônico", desc: "Preenchimentos para hidratação, volume e contorno facial." },
  { icon: Smile, title: "Bioestimuladores", desc: "Indução de colágeno com substâncias como Sculptra e Radiesse." },
  { icon: Smile, title: "Botox Centralizado / Toxina Botulínica", desc: "Relaxamento muscular para suavizar linhas de expressão" },
  { icon: Smile, title: "Colágeno e Cuidados Pós-Harmonização", desc: "Protocolos que mantêm e otimizam resultados." },
  { icon: Smile, title: "Enzimas", desc: "Redução de gordura localizada e tratamento de fibroses." },
  { icon: Smile, title: "Falta de Queixo, Rinomodelação, Lábios", desc: "Correções específicas com técnicas não cirúrgicas" },
  { icon: Smile, title: "Nano Lift, Hidrolifting, Protocolo Nano", desc: "Lifting facial e hidratação profunda sem cortes." },
  { icon: Smile, title: "Hidroxiapatita", desc: "Bioestimulador com efeito tensor e de preenchimento leve." },
  { icon: Smile, title: "Rejuvenescimento e Prevenção", desc: "Combinação de tratamentos para retardar o envelhecimento." },
];


const odontologia = [
  { icon: Laugh, title: "Bruxismo (Adulto e Infantil)", desc: "Diagnóstico e tratamento com placas, agulhamento e terapias auxiliares." },
  { icon: Laugh, title: "Clareamento Dental", desc: "Técnicas modernas com mínimo desconforto e alta eficácia." },
  { icon: Laugh, title: "DTM Articular e Muscular", desc: "Tratamento de dores, estalos e disfunções na articulação temporomandibular." },
  { icon: Laugh, title: "Extração do Siso, Implantes, Restaurações", desc: "Procedimentos cirúrgicos e restauradores de alta precisão." },
  { icon: Laugh, title: "Limpeza e Prevenção", desc: "Profilaxia a cada 6 meses com orientações de higiene." },
  { icon: Laugh, title: "Lentes em Resina", desc: "Revestimento estético minimamente invasivo." },
  { icon: Laugh, title: "Mordida e Correções Oclusais", desc: "Avaliação funcional para reabilitação oral" },
];

const ortodontia = [
  { icon: CircuitBoard, title: "Aparelhos Convencionais e Invisíveis", desc: "Opções estéticas e funcionais para diversas faixas etárias." },
  { icon: CircuitBoard, title: "Aparelho Lingual", desc: "Correção discreta com bráquetes colocados na face interna dos dentes." },
  { icon: CircuitBoard, title: "Autoligados (Convencional, Dual, Bidimensional)", desc: "Aparelhos que dispensam ligaduras, com maior conforto e eficiência." },
  { icon: CircuitBoard, title: "Mini Implantes, Microparafusos IZC", desc: "Ancoragem para movimentações dentárias mais complexas." },
  { icon: CircuitBoard, title: "Correção de Atresia Palatal, Mordida Aberta e Overbite", desc: "Abordagem multidisciplinar para equilíbrio esquelético e funcional." },
  { icon: CircuitBoard, title: "Mesolifting Ortodôntico", desc: "Técnica complementar com estímulo de colágeno durante o tratamento." },
  { icon: CircuitBoard, title: "Resina Composta Estratificada", desc: "Restaurações estéticas com naturalidade e durabilidade." },
];

export const Services = () => {
  const { ref, isVisible } = useInView();

  return (
    <section id="servicos" className="min-h-screen flex items-center py-20 lg:py-32">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div className={`max-w-3xl mx-auto text-center mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Serviços</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Especialidades e Atendimentos
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Atendimento completo em Harmonizadora facial, Odontologia Avançada, Ortodontia.
          </p>
        </div>

        <h5 className="font-serif text-xl sm:text-2xl lg:text-3xl mb-10 font-bold text-foreground text-balance">
          Especialidades
        </h5>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {especialidades.map((s, i) => (
            <div
              key={s.title}
              className={`group relative bg-card rounded-xl p-7 border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors duration-300">
                <s.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <h5 className="font-serif text-xl sm:text-2xl lg:text-3xl mb-10 mt-20 font-bold text-foreground text-balance">
          Harmonização Facial
        </h5>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group relative bg-card rounded-xl p-7 border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors duration-300">
                <s.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>


        <h5 className="font-serif text-xl sm:text-2xl lg:text-3xl mb-10 mt-20 font-bold text-foreground text-balance">
          Odontologia Avançada
        </h5>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {odontologia.map((s, i) => (
            <div
              key={s.title}
              className={`group relative bg-card rounded-xl p-7 border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors duration-300">
                <s.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>


        <h5 className="font-serif text-xl sm:text-2xl lg:text-3xl mb-10 mt-20 font-bold text-foreground text-balance">
          Ortodontia
        </h5>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {ortodontia.map((s, i) => (
            <div
              key={s.title}
              className={`group relative bg-card rounded-xl p-7 border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors duration-300">
                <s.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};