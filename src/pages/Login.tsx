import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo.component";
import { LoginForm } from "@/components/auth/LoginForm";
import { useLogin } from "@/hooks/useLogin";
import { authData } from "@/data/authData";
import { useSEO } from "@/hooks/useSEO";

export const Login = () => {
  useSEO({
    title: "Login | Instituto Monaliza Tercetti",
    description: "Acesse sua conta no Instituto Monaliza Tercetti.",
    url: "https://monalizatarcetti.com.br/login"
  });

  const { email, setEmail, password, setPassword, isLoading, handleSubmit } = useLogin();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-surface p-4">
      <div className="w-full max-w-md bg-card rounded-2xl shadow-elegant border border-border/50 p-8 animate-fade-up">
        <div className="flex flex-col items-center text-center mb-8">
          <Link to="/">
            <Logo className="mb-6 hover:opacity-80 transition-opacity" />
          </Link>
          <h1 className="text-2xl font-bold font-serif text-foreground tracking-tight">
            {authData.login.title}
          </h1>
          <p className="text-muted-foreground text-sm mt-2 max-w-[280px]">
            {authData.login.description}
          </p>
        </div>

        <LoginForm
          emailValue={email}
          passwordValue={password}
          onEmailChange={setEmail}
          onPasswordChange={setPassword}
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />

        <div className="mt-8 text-center text-sm text-muted-foreground">
          {authData.login.footerText}{" "}
          <Link to="/#agendamento" className="font-medium text-primary hover:underline hover:text-primary/80 transition-colors">
            {authData.login.footerLink}
          </Link>
        </div>
      </div>
    </div>
  );
};
