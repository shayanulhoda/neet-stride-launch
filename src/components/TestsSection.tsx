import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Clock, Target, TrendingUp } from "lucide-react";

const TestsSection = () => {
  return (
    <section id="tests" className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Test Your Knowledge with Real Exam Simulations
          </h2>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            Attempt topic-wise and full-length mock tests to assess your readiness. Get instant results with detailed analytics and explanations.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto items-center">
          <div className="space-y-6">
            <Card className="p-6 bg-accent border-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Recent Test Performance</h3>
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                  <div>
                    <p className="font-medium">Physics Mock Test #12</p>
                    <p className="text-sm text-muted-foreground">Completed 2 days ago</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">85%</p>
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
