import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Video } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const courses = [
  {
    title: "Physics - Mechanics & Thermodynamics",
    progress: 65,
    lessons: 48,
    duration: "24 hours",
    category: "Physics"
  },
  {
    title: "Chemistry - Organic Chemistry",
    progress: 40,
    lessons: 52,
    duration: "28 hours",
    category: "Chemistry"
  },
  {
    title: "Biology - Human Physiology",
    progress: 80,
    lessons: 45,
    duration: "22 hours",
    category: "Biology"
  },
  {
    title: "Chemistry - Inorganic Chemistry",
    progress: 25,
    lessons: 38,
    duration: "20 hours",
    category: "Chemistry"
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Learn from the Best – Anytime, Anywhere
          </h2>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            Browse structured NEET courses with chapter-wise videos, PDFs, and notes. Learn at your own pace with expert-curated study material.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 bg-card border-border">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full mb-2">
                      {course.category}
                    </span>
                    <h3 className="text-lg font-semibold">{course.title}</h3>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Video className="h-4 w-4" />
                    <span>{course.lessons} lessons</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FileText className="h-4 w-4" />
                    <span>PDF Notes</span>
                  </div>
                </div>

                <Button className="w-full" variant="default">
                  Continue Learning
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Browse All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
