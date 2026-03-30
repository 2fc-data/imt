import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageLayout } from "../components/PageLayout.component";
import heroImage from "@/assets/clinic-hero.png";
import { Phone } from "lucide-react";

export const Index = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-warm">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6 z-10"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight" style={{ textWrap: "balance" }}>
              <span className="text-gradient-brand">Instituto Monaliza Tercetti</span>
            </h1>
            <p className="text-xl md:text-2xl font-display text-accent italic">
              Harmonização Facial · Ortodontia · Odontologia
            </p>
            <p className="text-foreground/70 text-lg max-w-lg leading-relaxed">
              Excelência em tratamentos estéticos e odontológicos com tecnologia de ponta
              e uma equipe altamente especializada.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="https://wa.me/553597058234?text=Olá! Gostaria de agendar uma consulta."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contato via WhatsApp"
                // className="bg-gradient-brand text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                className="flex items-center justify-center bg-primary gap-3 text-primary-foreground px-8 py-3 rounded-xl text-lg font-semibold hover:bg-secondary transition-colors duration-300 shadow-lg shadow-primary/20"
              >
                <Phone size={22} aria-hidden="true" />
                (35) 99705-8234
              </Link>
              <Link
                to="/sobre"
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors"
              >
                Saiba mais
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src={heroImage}
              width={600}
              height={600}
              fetchPriority="high"
              alt="Clínica Dra. Monaliza Tercetti"
              className="w-full max-w-lg lg:max-w-xl object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Harmonização Facial",
                desc: "Tratamentos personalizados para equilíbrio e rejuvenescimento facial.",
                link: "/harmonizacaoFacial",
              },
              {
                title: "Odontologia Avançada",
                desc: "Serviços clínicos com foco funcional, estético e preventivo.",
                link: "/odontologiaAvancada",
              },
              {
                title: "Ortodontia Especializada",
                desc: "Tratamentos modernos para correção dentária e estrutura facial.",
                link: "/ortodontia",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                <Link
                  to={item.link}
                  className="block p-8 rounded-xl border border-border bg-background hover:border-primary/40 hover:shadow-xl transition-all duration-300 group h-full"
                >
                  <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
