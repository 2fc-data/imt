import logo from "/icon.png";
import { cn } from "@/lib/utils";

interface LogoProps {
  readonly className?: string;
  readonly iconClassName?: string;
  readonly textClassName?: string;
}

export const Logo = ({ className, iconClassName, textClassName }: LogoProps = {}) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <img src={logo} alt="Logo" width={60} height={60} className={cn("w-15 h-15 rounded-full", iconClassName)} />
      <span className={cn("font-serif text-xl font-bold tracking-tight text-foreground", textClassName)}>
        Instituto Monaliza Tercetti
      </span>
    </div>
  );
};
