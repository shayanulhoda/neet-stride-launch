import { Card } from "@/components/ui/card";
import { Activity, BookMarked, Calendar, Trophy } from "lucide-react";

const DashboardSection = () => {
  return (
    <section id="features" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Track Your Journey to Success
          </h2>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            Get a complete overview of your progress — from completed lessons to test performance and time spent on each topic.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="p-8 mb-8">
            <div className="grid gap-6 md:grid-cols-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <BookMarked className="h-4 w-4" />
                  <span className="text-sm">Courses Enrolled</span>
                </div>
                <p className="text-3xl font-bold">12</p>
                <p className="text-sm text-muted-foreground">8 in progress</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Trophy className="h-4 w-4" />
                  <span className="text-sm">Tests Completed</span>
                </div>
                <p className="text-3xl font-bold">156</p>
                <p className="text-sm text-primary">+12 this week</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Activity className="h-4 w-4" />
                  <span className="text-sm">Average Score</span>
                </div>
                <p className="text-3xl font-bold">84%</p>
                <p className="text-sm text-primary">↑ 5% from last month</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">Study Hours</span>
                </div>
                <p className="text-3xl font-bold">247h</p>
                <p className="text-sm text-muted-foreground">This month</p>
              </div>
            </div>
          </Card>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                Learning Progress Tracker
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Visual representation of completed chapters, ongoing lessons, and upcoming topics
              </p>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Physics</span>
                    <span className="font-medium">75%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '75%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Chemistry</span>
                    <span className="font-medium">62%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '62%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Biology</span>
                    <span className="font-medium">88%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '88%' }} />
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                Score Improvement Graph
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Track your test scores over time to see consistent improvement
              </p>
              <div className="h-40 flex items-end justify-between gap-2">
                {[65, 70, 68, 75, 80, 78, 85, 84].map((height, i) => (
                  <div key={i} className="flex-1 bg-primary rounded-t" style={{ height: `${height}%` }} />
                ))}
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>Week 1</span>
                <span>Week 8</span>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Time Management Stats
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Analyze how you spend your study time across different subjects
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Video Lectures</span>
                  <span className="font-medium">45%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Practice Tests</span>
                  <span className="font-medium">30%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Notes & PDFs</span>
                  <span className="font-medium">15%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Doubt Sessions</span>
                  <span className="font-medium">10%</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
