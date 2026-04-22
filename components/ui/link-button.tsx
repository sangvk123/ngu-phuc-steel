import Link from "next/link";
import { cn } from "@/lib/utils";
import type { LinkProps } from "next/link";

interface LinkButtonProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline" | "ghost";
}

const variants = {
  primary: "inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-700 text-white font-medium text-sm rounded px-6 h-11 transition-colors",
  outline: "inline-flex items-center justify-center gap-2 border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium text-sm rounded px-6 h-11 transition-colors",
  ghost: "inline-flex items-center justify-center gap-2 text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors",
};

export function LinkButton({ children, className, variant = "primary", ...props }: LinkButtonProps) {
  return (
    <Link className={cn(variants[variant], className)} {...props}>
      {children}
    </Link>
  );
}

interface AnchorButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "outline" | "ghost";
}

export function AnchorButton({ children, className, variant = "primary", ...props }: AnchorButtonProps) {
  return (
    <a className={cn(variants[variant], className)} {...props}>
      {children}
    </a>
  );
}
