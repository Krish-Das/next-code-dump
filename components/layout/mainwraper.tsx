import { cn } from "@/lib/utils";

export const Main = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => (
  <main className={cn("container", className)} {...props} />
);

Main.displayName = "main";
