import { HeartPulse } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  readonly className?: string;
  readonly iconClassName?: string;
  readonly textClassName?: string;
}

export const Logo = ({ className, iconClassName, textClassName }: LogoProps = {}) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className={cn("flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10", iconClassName)}>
        <HeartPulse className="h-6 w-6 text-primary" />
      </div>
      <span className={cn("font-serif text-xl font-bold tracking-tight text-foreground", textClassName)}>
        Instituto Monaliza Tercetti
      </span>
    </div>
  );
};
