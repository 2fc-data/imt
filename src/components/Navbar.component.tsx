import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, UserCircle, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/Logo.component";

const menuItems = [
  { label: "Início", path: "/" },
  { label: "Sobre", path: "/sobre" },
  {
    label: "Especialidades",
    path: "/especialidades",
  },
  {
    label: "Atendimentos",
    path: "",
    children: [
      { label: "Harmonização Facial", path: "/harmonizacaoFacial" },
      { label: "Ortodontia", path: "/ortodontia" },
      { label: "Odontologia Avançada", path: "/odontologiaAvancada" },
    ],
  },
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 lg:h-20">
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={item.path}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${isActive(item.path)
                  ? "text-primary bg-primary/10"
                  : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                  }`}
              >
                {item.label}
                {item.children && <ChevronDown className="w-3.5 h-3.5" />}
              </Link>

              {/* Dropdown */}
              <AnimatePresence>
                {item.children && openDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-56 bg-card rounded-lg shadow-lg border border-border py-2"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <button
            onClick={() => {
              const isDark = document.documentElement.classList.toggle("dark");
              localStorage.setItem("theme", isDark ? "dark" : "light");
            }}
            className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
            aria-label="Alternar tema"
          >
            <Sun className="w-5 h-5 hidden dark:block" />
            <Moon className="w-5 h-5 block dark:hidden" />
          </button>
        </div>

        {/* Social & Contact */}
        <div className="hidden lg:flex items-center gap-3 ml-4 pl-4 border-l border-border">
          <a href="https://instagram.com/dra.monalizatercetti" target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors p-2 rounded-full" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram w-5 h-5" aria-hidden="true">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
          </a>
          <a href="https://facebook.com/Monaliza-Tercetti-Pereira-100054277160262/" target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors p-2 rounded-full" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook w-5 h-5" aria-hidden="true">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href="https://wa.me/5535997058234"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-primary hover:opacity-80 transition-opacity p-2 rounded-full hover:bg-primary/5" aria-label="Agendar consulta">
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span>Agendar</span>
          </a>
          <Link to="/login" className="ml-2 p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors" aria-label="Login">
            <UserCircle className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {menuItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.path}
                    onClick={() => !item.children && setMobileOpen(false)}
                    className={`block px-3 py-2.5 rounded-md text-sm font-medium ${isActive(item.path)
                      ? "text-primary bg-primary/10"
                      : "text-foreground/80"
                      }`}
                  >
                    <span className="flex items-center justify-between">
                      {item.label}
                      {item.children && (
                        <ChevronDown
                          className="w-4 h-4 cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setOpenDropdown(openDropdown === item.label ? null : item.label);
                          }}
                        />
                      )}
                    </span>
                  </Link>
                  <AnimatePresence>
                    {item.children && openDropdown === item.label && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden pl-4"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            onClick={() => setMobileOpen(false)}
                            className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              {/* Mobile social */}
              <div className="flex items-center gap-4 px-3 pt-4 mt-2 border-t border-border">
                <a href="https://instagram.com/dra.monalizatercetti" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram w-5 h-5" aria-hidden="true">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
                <a href="https://facebook.com/Monaliza-Tercetti-Pereira-100054277160262/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook w-5 h-5" aria-hidden="true">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="https://wa.me/5535997058234?text=Olá! Gostaria de agendar uma consulta."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium text-primary hover:bg-primary/5 p-2 rounded-md transition-colors"
                  aria-label="Agendar consulta (WhatsApp)">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>Agendar Consulta</span>
                </a>
                <Link to="/login" className="ml-2 p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors" aria-label="Login">
                  <UserCircle className="w-5 h-5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
