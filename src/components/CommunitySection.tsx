import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Users, CheckCircle2 } from "lucide-react";

const CommunitySection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Never Get Stuck — Learn Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            Ask questions, clear your doubts, and interact with mentors and peers in our student community. Get answers fast, stay confident.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                Recent Discussions
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-accent rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-medium">
                        SK
                      </div>
                      <div>
                        <p className="font-medium text-sm">Sanjay Kumar</p>
                        <p className="text-xs text-muted-foreground">2 hours ago</p>
                      </div>
                    </div>
                    <span className="text-xs bg-background px-2 py-1 rounded">Physics</span>
                  </div>
                  <p className="text-sm mb-2">Can someone explain the concept of angular momentum in circular motion?</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3 text-primary" />
                      Answered by Faculty
                    </span>
                    <span>12 responses</span>
                  </div>
                </div>

                <div className="p-4 bg-accent rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-medium">
                        PM
                      </div>
                      <div>
                        <p className="font-medium text-sm">Priya Mehta</p>
                        <p className="text-xs text-muted-foreground">5 hours ago</p>
                      </div>
                    </div>
                    <span className="text-xs bg-background px-2 py-1 rounded">Chemistry</span>
                  </div>
                  <p className="text-sm mb-2">Need help with organic chemistry nomenclature rules</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3 text-primary" />
                      Answered by Faculty
                    </span>
                    <span>8 responses</span>
                  </div>
                </div>

                <div className="p-4 bg-accent rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-medium">
                        RT
                      </div>
                      <div>
                        <p className="font-medium text-sm">Rahul Tiwari</p>
                        <p className="text-xs text-muted-foreground">1 day ago</p>
                      </div>
                    </div>
                    <span className="text-xs bg-background px-2 py-1 rounded">Biology</span>
                  </div>
                  <p className="text-sm mb-2">Difference between DNA and RNA structure?</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3 text-primary" />
                      Answered by Faculty
                    </span>
                    <span>15 responses</span>
                  </div>
                </div>
              </div>
            </Card>

            <Button variant="hero" size="lg" className="w-full">
              Ask Your Doubt Now
            </Button>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-accent">
              <h3 className="text-xl font-semibold mb-6">Community Features</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Raise a Doubt</h4>
                    <p className="text-sm text-muted-foreground">
                      Link your questions directly to specific chapters or test questions for context-aware answers
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Faculty & Peer Responses</h4>
                    <p className="text-sm text-muted-foreground">
                      Get verified answers from expert faculty and learn from peer discussions
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Moderated Discussions</h4>
                    <p className="text-sm text-muted-foreground">
                      Safe, focused learning environment with faculty moderation
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-3xl font-bold mb-2">10,000+</p>
                <p className="text-sm text-muted-foreground">Active students in our community</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
