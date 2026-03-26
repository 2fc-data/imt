import { useState } from "react";
import { Menu, X, Phone, Sun, Moon, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "./theme-provider";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Localização", href: "#localizacao" },
  { label: "Agendamento", href: "#agendamento" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <button onClick={() => handleClick("#inicio")} className="font-serif text-xl font-semibold text-primary">
          Instituto Monaliza Tercetti
        </button>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleClick(item.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <Link
              to="/login"
              className="relative flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
              title="Acessar conta"
            >
              <User className="h-5 w-5" />
              <span className="sr-only">Acessar conta</span>
            </Link>
          </li>
          <li>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="relative flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
              title="Alternar tema"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Alternar tema</span>
            </button>
          </li>
          <li>
            <a
              href="https://wa.me/553597058234?text=Olá! Gostaria de agendar uma consulta."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contato via WhatsApp"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-secondary transition-colors duration-200"
            >
              <Phone size={14} />
              Agendar
            </a>
          </li>
        </ul>

        {/* Mobile toggle & Theme & User */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            to="/login"
            className="relative flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
            title="Acessar conta"
          >
            <User className="h-5 w-5" />
            <span className="sr-only">Acessar conta</span>
          </Link>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Alternar tema</span>
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <ul className="flex flex-col p-4 gap-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleClick(item.href)}
                  className="w-full text-left py-2 px-3 text-sm font-medium text-muted-foreground hover:text-primary rounded-md hover:bg-muted transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="w-full text-left py-2 px-3 text-sm font-medium text-muted-foreground hover:text-primary rounded-md hover:bg-muted transition-colors flex items-center gap-2"
              >
                <User size={16} />
                Acessar conta
              </Link>
            </li>
            <li>
              <a
                href="https://wa.me/553597058234?text=Olá! Gostaria de agendar uma consulta."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contato via WhatsApp"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-lg text-sm font-medium"
              >
                <Phone size={14} />
                Agendar Consulta
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};