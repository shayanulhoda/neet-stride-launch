import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Clock, Target, TrendingUp, Zap } from "lucide-react";
import testAnalytics from "@/assets/test-analytics.png";

const TestsSection = () => {
  return (
    <section id="tests" className="py-20 relative overflow-hidden">
      {/* Floating gradient blob */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" />
      
      <div className="container relative z-10">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-4">
            <span className="text-sm font-semibold text-primary">🎯 MOCK TESTS</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Practice Like It's the <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Real Deal</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            Realistic mock tests + instant results + detailed solutions = You crushing NEET 💪
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-2xl" />
            <img
              src={testAnalytics}
              alt="Test Analytics"
              className="relative rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Recent Performance 📊</h3>
                <TrendingUp className="h-6 w-6 text-primary animate-pulse" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-background/80 backdrop-blur-sm rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-colors">
                  <div>
                    <p className="font-bold">Physics Mock Test #12 ⚡</p>
                    <p className="text-sm text-muted-foreground">Completed 2 days ago</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">85%</p>
                    <p className="text-xs text-muted-foreground">Score</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                  <div>
                    <p className="font-medium">Chemistry Full Length Test</p>
                    <p className="text-sm text-muted-foreground">Completed 5 days ago</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">78%</p>
                    <p className="text-xs text-muted-foreground">Score</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                  <div>
                    <p className="font-medium">Biology Topic Test - Genetics</p>
                    <p className="text-sm text-muted-foreground">Completed 1 week ago</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">92%</p>
                    <p className="text-xs text-muted-foreground">Score</p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-3 gap-4">
              <Card className="p-4 text-center">
                <Target className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="text-2xl font-bold">156</p>
                <p className="text-sm text-muted-foreground">Tests Attempted</p>
              </Card>
              <Card className="p-4 text-center">
                <BarChart3 className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="text-2xl font-bold">84%</p>
                <p className="text-sm text-muted-foreground">Avg Score</p>
              </Card>
              <Card className="p-4 text-center">
                <Clock className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="text-2xl font-bold">45m</p>
                <p className="text-sm text-muted-foreground">Avg Time</p>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-accent p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-primary-foreground">✓</span>
                  </div>
                  <div>
                    <p className="font-medium">Auto-evaluated Results</p>
                    <p className="text-sm text-muted-foreground">Get instant scores and performance breakdown</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-primary-foreground">✓</span>
                  </div>
                  <div>
                    <p className="font-medium">Topic-wise Performance Tracking</p>
                    <p className="text-sm text-muted-foreground">Identify weak areas and improve strategically</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-primary-foreground">✓</span>
                  </div>
                  <div>
                    <p className="font-medium">Question-level Solutions</p>
                    <p className="text-sm text-muted-foreground">Detailed explanations for every question</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-primary-foreground">✓</span>
                  </div>
                  <div>
                    <p className="font-medium">Real Exam Simulation</p>
                    <p className="text-sm text-muted-foreground">Practice with authentic test interface and time limits</p>
                  </div>
                </li>
              </ul>
            </div>

            <Button variant="hero" size="lg" className="w-full">
              Attempt Mock Test Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestsSection;
