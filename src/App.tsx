import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { Index } from "@/pages/Index";
import { Login } from "@/pages/Login";
import { ForgotPassword } from "@/pages/ForgotPassword";
import { Especialidades } from "@/pages/Especialidades";
import { HarmonizacaoFacial } from "@/pages/HarmonizacaoFacial";
import { OdontologiaAvancada } from "@/pages/OdontologiaAvancada";
import { Ortodontia } from "@/pages/Ortodontia";
import { Sobre } from "@/pages/Sobre";
import { NotFound } from "@/pages/NotFound";

const queryClient = new QueryClient();

export const App = () => (
  <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/esqueci-senha" element={<ForgotPassword />} />
            <Route path="/especialidades" element={<Especialidades />} />
            <Route path="/harmonizacaoFacial" element={<HarmonizacaoFacial />} />
            <Route path="/odontologiaAvancada" element={<OdontologiaAvancada />} />
            <Route path="/ortodontia" element={<Ortodontia />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

