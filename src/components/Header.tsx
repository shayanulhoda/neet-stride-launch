import { Button } from "@/components/ui/button";
import { Menu, Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="text-2xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            MESARA
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <a href="#courses" className="text-sm font-semibold hover:text-primary transition-colors">
            Courses
          </a>
          <a href="#tests" className="text-sm font-semibold hover:text-primary transition-colors">
            Mock Tests
          </a>
          <a href="#features" className="text-sm font-semibold hover:text-primary transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-sm font-semibold hover:text-primary transition-colors">
            Pricing
          </a>
          <Button variant="ghost" size="sm">
            Login
          </Button>
          <Button variant="hero" size="sm">
            Get Started 🚀
          </Button>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </nav>
    </header>
  );
};

export default Header;
