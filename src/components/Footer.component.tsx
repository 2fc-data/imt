import { Link } from "react-router-dom";
import logo from "/icon.png";

export const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-12 border-t border-primary/10">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex flex-col items-center text-center space-y-6">
        {/* Logo */}
        <div className="flex flex-col items-center gap-4">
          <img 
            src={logo} 
            alt="Instituto Monaliza Tercetti Logo" 
            width={80} 
            height={80} 
            className="w-20 h-20 rounded-full border-2 border-primary-foreground/20 shadow-lg object-contain bg-white/10" 
          />
          <div className="space-y-1">
            <h2 className="font-serif text-2xl font-bold tracking-tight">Instituto Monaliza Tercetti</h2>
            <p className="text-sm font-medium opacity-90">Harmonização Facial · Ortodontia · Odontologia</p>
          </div>
        </div>

        {/* Sitemap */}
        <nav className="w-full max-w-4xl pt-8 pb-4">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium">
            <li>
              <Link to="/" className="opacity-80 hover:opacity-100 transition-opacity underline-offset-4 hover:underline">
                Início
              </Link>
            </li>
            <li>
              <Link to="/sobre" className="opacity-80 hover:opacity-100 transition-opacity underline-offset-4 hover:underline">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/especialidades" className="opacity-80 hover:opacity-100 transition-opacity underline-offset-4 hover:underline">
                Especialidades
              </Link>
            </li>
            <li>
              <Link to="/harmonizacaoFacial" className="opacity-80 hover:opacity-100 transition-opacity underline-offset-4 hover:underline">
                Harmonização Facial
              </Link>
            </li>
            <li>
              <Link to="/ortodontia" className="opacity-80 hover:opacity-100 transition-opacity underline-offset-4 hover:underline">
                Ortodontia
              </Link>
            </li>
            <li>
              <Link to="/odontologiaAvancada" className="opacity-80 hover:opacity-100 transition-opacity underline-offset-4 hover:underline">
                Odontologia Avançada
              </Link>
            </li>
          </ul>
        </nav>

        {/* Copyright */}
        <div className="w-full border-t border-primary-foreground/10 pt-8">
          <p className="text-xs opacity-60">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  </footer>
);