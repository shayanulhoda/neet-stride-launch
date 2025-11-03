import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Video, TrendingUp, ArrowRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import studentsImage from "@/assets/students-studying.png";

const courses = [
  {
    title: "Physics - Mechanics & Thermodynamics",
    progress: 65,
    lessons: 48,
    duration: "24 hours",
    category: "Physics",
    emoji: "⚡"
  },
  {
    title: "Chemistry - Organic Chemistry",
    progress: 40,
    lessons: 52,
    duration: "28 hours",
    category: "Chemistry",
    emoji: "🧪"
  },
  {
    title: "Biology - Human Physiology",
    progress: 80,
    lessons: 45,
    duration: "22 hours",
    category: "Biology",
    emoji: "🧬"
  },
  {
    title: "Chemistry - Inorganic Chemistry",
    progress: 25,
    lessons: 38,
    duration: "20 hours",
    category: "Chemistry",
    emoji: "⚗️"
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-block px-4 py-2 bg-secondary/20 rounded-full mb-4">
            <span className="text-sm font-semibold text-secondary">📚 COURSES</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Learn from the <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Best Content</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            Binge-worthy video lessons, downloadable notes, and chapter-wise breakdowns. It's like Netflix, but you actually learn stuff 📖
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          <div className="order-2 lg:order-1">
            <img
              src={studentsImage}
              alt="Students learning together"
              className="rounded-3xl shadow-2xl border-4 border-primary/20"
            />
          </div>
          <div className="order-1 lg:order-2 grid gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="p-6 hover:shadow-2xl transition-all duration-300 bg-card border-2 border-primary/10 hover:border-primary/30 hover:scale-105">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{course.emoji}</span>
                      <div>
                        <span className="inline-block px-3 py-1 text-xs font-bold bg-gradient-to-r from-primary/20 to-secondary/20 text-primary rounded-full mb-2">
                          {course.category}
                        </span>
                        <h3 className="text-lg font-bold">{course.title}</h3>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground font-medium">Progress</span>
                      <span className="font-bold text-primary">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-3 bg-secondary/20" />
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Video className="h-4 w-4 text-primary" />
                      <span className="font-medium">{course.lessons} lessons</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-4 w-4 text-secondary" />
                      <span className="font-medium">{course.duration}</span>
                    </div>
                  </div>

                  <Button className="w-full" variant="default">
                    Continue Learning 🚀
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button variant="gradient" size="lg" className="group">
            Browse All Courses
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
