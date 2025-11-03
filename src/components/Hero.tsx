import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";

const Hero = () => {
  return (
    <section className="container py-20 md:py-28">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm bg-secondary">
            <span className="text-accent-foreground">🎓 Trusted by 10,000+ NEET Aspirants</span>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Your NEET Preparation,{" "}
            <span className="text-primary">Simplified and Smarter</span>
          </h1>
          
          <p className="text-lg text-muted-foreground md:text-xl max-w-[600px]">
            Access courses, track progress, attempt mock tests, and clear your doubts — all in one place.
          </p>

          <div className="flex gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold text-foreground">95%</span>
              <span>Satisfaction Rate</span>
            </div>
            <div className="h-6 w-px bg-border" />
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold text-foreground">500+</span>
              <span>Expert Faculty</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="hero" size="xl" className="group">
              Start Learning Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="xl">
              <Play className="mr-2 h-4 w-4" />
              View Demo Dashboard
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl blur-3xl" />
          <img
            src={heroDashboard}
            alt="MESARA Student Dashboard showing progress tracking and analytics"
            className="relative rounded-2xl shadow-2xl border"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
