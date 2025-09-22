import { Button } from "@/components/ui/button";
import { CodeXml } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#" className="flex items-center gap-2">
          <CodeXml className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold tracking-tighter">Quantum</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#features" className="text-muted-foreground transition-colors hover:text-foreground">Features</a>
          <a href="#pricing" className="text-muted-foreground transition-colors hover:text-foreground">Pricing</a>
          <a href="#testimonials" className="text-muted-foreground transition-colors hover:text-foreground">Testimonials</a>
          <a href="#faq" className="text-muted-foreground transition-colors hover:text-foreground">FAQ</a>
        </nav>
        <Button size="sm">Get Started</Button>
      </div>
    </header>
  );
};
