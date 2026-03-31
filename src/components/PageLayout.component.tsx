import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar.component";
import { Location } from "@/components/Location.component";
import { Footer } from "@/components/Footer.component";
import { Schedule } from "@/components/Schedule.component";

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export const PageLayout = ({ 
  children, 
  title = "Dra. Monaliza Tercetti | Harmonização Facial e Ortodontia em Poços de Caldas",
  description = "Instituto Dra. Monaliza Tercetti - Especialista em Harmonização Facial, Ortodontia e Odontologia em Poços de Caldas, MG. Agende sua consulta."
}: PageLayoutProps) => (
  <div className="min-h-screen flex flex-col">
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
    <Navbar />
    <main className="flex-1 pt-16 lg:pt-20">{children}</main>
    <Location />
    <Schedule />
    <Footer />
  </div>
);
