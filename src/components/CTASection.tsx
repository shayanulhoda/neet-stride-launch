import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-12 text-center text-primary-foreground shadow-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
              Ready to Ace Your NEET Preparation?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Start your learning journey today and experience the smarter way to prepare. Join 10,000+ successful students.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="xl"
                className="group bg-background text-foreground hover:bg-background/90"
              >
                Join Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <BookOpen className="mr-2 h-4 w-4" />
                Explore Courses
              </Button>
            </div>

            <p className="text-sm mt-6 opacity-75">
              No credit card required • 7-day money-back guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
