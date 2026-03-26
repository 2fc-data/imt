import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { authData } from "@/data/authData";
import { Link } from "react-router-dom";

export interface LoginFormProps {
  readonly emailValue: string;
  readonly passwordValue: string;
  readonly onEmailChange: (value: string) => void;
  readonly onPasswordChange: (value: string) => void;
  readonly onSubmit: (e: React.FormEvent) => void;
  readonly isLoading: boolean;
}

export const LoginForm = ({
  emailValue,
  passwordValue,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  isLoading
}: LoginFormProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4 w-full">
      <div className="space-y-2 text-left">
        <Label htmlFor="email">{authData.login.emailLabel}</Label>
        <Input
          id="email"
          type="email"
          placeholder={authData.login.emailPlaceholder}
          value={emailValue}
          onChange={(e) => onEmailChange(e.target.value)}
          disabled={isLoading}
          required
        />
      </div>
      <div className="space-y-2 text-left">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">{authData.login.passwordLabel}</Label>
          <Link to="/esqueci-senha" className="text-sm font-medium text-primary hover:underline hover:text-primary/80 transition-colors" tabIndex={-1}>
            {authData.login.forgotPasswordText}
          </Link>
        </div>
        <Input
          id="password"
          type="password"
          placeholder={authData.login.passwordPlaceholder}
          value={passwordValue}
          onChange={(e) => onPasswordChange(e.target.value)}
          disabled={isLoading}
          required
        />
      </div>
      <Button type="submit" className="w-full mt-6 transition-all" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="animate-spin mr-2 h-4 w-4" />
            {authData.login.loadingText}
          </>
        ) : (
          authData.login.submitButton
        )}
      </Button>
    </form>
  );
};
