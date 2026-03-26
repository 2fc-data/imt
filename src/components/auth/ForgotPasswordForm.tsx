import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Loader2, MailCheck } from "lucide-react";
import { authData } from "@/data/authData";

export interface ForgotPasswordFormProps {
  readonly emailValue: string;
  readonly onEmailChange: (value: string) => void;
  readonly onSubmit: (e: React.FormEvent) => void;
  readonly isLoading: boolean;
  readonly isSuccess: boolean;
}

export const ForgotPasswordForm = ({
  emailValue,
  onEmailChange,
  onSubmit,
  isLoading,
  isSuccess
}: ForgotPasswordFormProps) => {
  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-6 animate-fade-in text-center">
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <MailCheck className="h-6 w-6 text-primary" />
        </div>
        <p className="text-foreground font-medium">{authData.forgotPassword.successMsg}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 w-full">
      <div className="space-y-2 text-left">
        <Label htmlFor="recovery-email">{authData.forgotPassword.emailLabel}</Label>
        <Input
          id="recovery-email"
          type="email"
          placeholder={authData.forgotPassword.emailPlaceholder}
          value={emailValue}
          onChange={(e) => onEmailChange(e.target.value)}
          disabled={isLoading}
          required
        />
      </div>
      <Button type="submit" className="w-full mt-6 transition-all" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="animate-spin mr-2 h-4 w-4" />
            {authData.forgotPassword.loadingText}
          </>
        ) : (
          authData.forgotPassword.submitButton
        )}
      </Button>
    </form>
  );
};
