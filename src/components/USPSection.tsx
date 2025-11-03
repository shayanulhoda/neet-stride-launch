import { Card } from "@/components/ui/card";
import { GraduationCap, TrendingUp, Users, Shield, Clock, BarChart } from "lucide-react";

const usps = [
  {
    icon: GraduationCap,
    title: "Expert Faculty & Verified Content",
    description: "Learn from top NEET educators with years of teaching experience and proven track records"
  },
  {
    icon: TrendingUp,
    title: "Real-time Progress Tracking",
    description: "Monitor your learning journey with detailed analytics and performance insights"
  },
  {
    icon: BarChart,
    title: "Instant Test Results & Analytics",
    description: "Get immediate feedback with comprehensive analysis of your strengths and weaknesses"
  },
  {
    icon: Users,
    title: "Interactive Student Communities",
    description: "Connect with peers, share knowledge, and get your doubts cleared by experts"
  },
  {
    icon: Clock,
    title: "24/7 Accessible Platform",
    description: "Study anytime, anywhere with our cloud-based platform accessible on all devices"
  },
  {
    icon: Shield,
    title: "Proven Results & Success",
    description: "Join 10,000+ students who achieved their NEET goals with our platform"
  }
];

const USPSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Why Choose MESARA?
          </h2>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            Everything you need to excel in your NEET preparation, all in one platform
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {usps.map((usp, index) => {
            const Icon = usp.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{usp.title}</h3>
                <p className="text-sm text-muted-foreground">{usp.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default USPSection;
