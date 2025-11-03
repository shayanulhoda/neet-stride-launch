import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";

const Hero = () => {
  return (
    <section className="relative container py-20 md:py-32 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-primary/20 bg-primary/10 px-4 py-2 text-sm backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              10,000+ Students Crushing NEET 🔥
            </span>
          </div>
          
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl leading-tight">
            NEET Prep{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-glow">
              Made Easy
            </span>
            {" "}& Fun ✨
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Study smarter with AI-powered courses, mock tests that actually help, and a squad of 10k+ students all vibing together 🚀
          </p>

          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30">
              <Zap className="h-4 w-4 text-accent" />
              <span className="font-semibold">95% Success Rate</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30">
              <Sparkles className="h-4 w-4 text-secondary" />
              <span className="font-semibold">500+ Expert Tutors</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="hero" size="xl" className="group">
              Start Learning Free 🎯
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
            </Button>
            <Button variant="outline" size="xl" className="border-2 hover:border-primary">
              See How It Works
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 rounded-3xl blur-3xl animate-pulse" />
          <img
            src={heroDashboard}
            alt="MESARA Student Dashboard - Track your NEET prep like a boss"
            className="relative rounded-3xl shadow-2xl border-4 border-primary/20 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
