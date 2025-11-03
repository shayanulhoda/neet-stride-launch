import { Card } from "@/components/ui/card";
import { Bell, Calendar, Trophy, BookOpen } from "lucide-react";

const NotificationSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Stay on Track, Always
          </h2>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            Receive automatic reminders for upcoming tests, new course uploads, and score releases — so you never miss a step in your prep.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-accent rounded-lg">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Trophy className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold">Mock Test Results Available</h4>
                    <span className="text-xs text-muted-foreground">2 hours ago</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Your results for Physics Mock Test #12 are ready. You scored 85% - Great improvement!
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-accent rounded-lg">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold">Upcoming Test Reminder</h4>
                    <span className="text-xs text-muted-foreground">1 day ago</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Chemistry Full Length Test scheduled for tomorrow at 10:00 AM. Prepare well!
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-accent rounded-lg">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold">New Course Content Added</h4>
                    <span className="text-xs text-muted-foreground">2 days ago</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    New chapters added to Biology - Human Physiology. Check them out now!
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-accent rounded-lg">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Bell className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold">Study Streak Milestone</h4>
                    <span className="text-xs text-muted-foreground">3 days ago</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Congratulations! You've maintained a 30-day study streak. Keep it up!
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Get notifications via email, SMS, and in-app alerts. Customize your preferences in settings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotificationSection;
