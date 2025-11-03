import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Rocket, CheckCircle2 } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <Sparkles className="h-16 w-16 mx-auto mb-6 animate-pulse" />
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 leading-tight">
                Ready to Level Up Your NEET Game? 🎮
              </h2>
              <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join 10,000+ students who are already crushing their prep goals. Your dream college is just a click away! ✨
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  variant="secondary" 
                  size="xl"
                  className="group bg-white text-primary hover:bg-white/90 shadow-2xl"
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                </Button>
                <Button 
                  variant="outline" 
                  size="xl"
                  className="border-2 border-white text-white hover:bg-white/20"
                >
                  Watch Demo Video
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm opacity-90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>7-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>No credit card needed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
