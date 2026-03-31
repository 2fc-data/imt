import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageLayout } from "../components/PageLayout.component";
import heroImage from "@/assets/clinic-hero.png";
import { Heart, CircuitBoard, Phone, Smile } from "lucide-react";

export const Index = () => {
  return (
    <PageLayout
      title="Dra. Monaliza Tercetti | Harmonização Facial e Ortodontia em Poços de Caldas"
      description="Instituto Dra. Monaliza Tercetti - Especialista em Harmonização Facial, Ortodontia e Odontologia em Poços de Caldas, MG. Agende sua consulta."
    >
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Instituto Dra. Monaliza Tercetti",
          "image": "https://institutomonalizatercetti.com.br/icon.png",
          "@id": "https://institutomonalizatercetti.com.br",
          "url": "https://institutomonalizatercetti.com.br",
          "telephone": "+5535997058234",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. Dr. David Benedito Otoni, 277",
            "addressLocality": "Poços de Caldas",
            "addressRegion": "MG",
            "postalCode": "37701-069",
            "addressCountry": "BR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -21.7835221,
            "longitude": -46.5610421
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "09:00",
            "closes": "19:00"
          },
          "sameAs": [
            "https://www.instagram.com/dra.monalizatercetti"
          ]
        })}
      </script>

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
              <span className="text-gradient-brand">Harmonização Facial · Ortodontia · Odontologia</span>
            </h1>
            <p className="text-xl md:text-2xl font-display text-accent italic">
              Excelência em tratamentos estéticos e odontológicos com tecnologia de ponta.
            </p>
            <p className="text-foreground/70 text-lg max-w-lg leading-relaxed">
              Equipe altamente especializada.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="https://wa.me/5535997058234?text=Olá! Gostaria de agendar uma consulta."
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
                icon: Smile,
                title: "Harmonização Facial",
                desc: "Tratamentos personalizados para equilíbrio e rejuvenescimento facial.",
                link: "/harmonizacaoFacial",
              },
              {
                icon: CircuitBoard,
                title: "Ortodontia Especializada",
                desc: "Tratamentos modernos para correção dentária e estrutura facial.",
                link: "/ortodontia",
              },
              {
                icon: Heart,
                title: "Odontologia Avançada",
                desc: "Serviços clínicos com foco funcional, estético e preventivo.",
                link: "/odontologiaAvancada",
              }

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
                  <item.icon className="text-primary mb-4" size={24} aria-hidden="true" />
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
