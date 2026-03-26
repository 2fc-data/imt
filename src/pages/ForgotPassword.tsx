import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo.component";
import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";
import { useForgotPassword } from "@/hooks/useForgotPassword";
import { authData } from "@/data/authData";
import { ArrowLeft } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

export const ForgotPassword = () => {
  useSEO({
    title: "Recuperar Senha | Instituto Monaliza Tercetti",
    description: "Esqueceu sua senha? Recupere o acesso à sua conta do Instituto Monaliza Tercetti.",
    url: "https://monalizatarcetti.com.br/esqueci-senha"
  });

  const { email, setEmail, isLoading, isSuccess, handleSubmit } = useForgotPassword();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-surface p-4">
      <div className="w-full max-w-md bg-card rounded-2xl shadow-elegant border border-border/50 p-8 animate-fade-up">
        <div className="flex flex-col items-center text-center mb-8">
          <Link to="/">
            <Logo className="mb-6 hover:opacity-80 transition-opacity" />
          </Link>
          <h1 className="text-2xl font-bold font-serif text-foreground tracking-tight">
            {authData.forgotPassword.title}
          </h1>
          <p className="text-muted-foreground text-sm mt-2 max-w-[280px]">
            {authData.forgotPassword.description}
          </p>
        </div>

        <ForgotPasswordForm
          emailValue={email}
          onEmailChange={setEmail}
          onSubmit={handleSubmit}
          isLoading={isLoading}
          isSuccess={isSuccess}
        />

        <div className="mt-8 text-center text-sm">
          <Link to="/login" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {authData.forgotPassword.backToLoginText}
          </Link>
        </div>
      </div>
    </div>
  );
};
