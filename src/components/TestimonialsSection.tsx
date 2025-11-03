import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ananya Sharma",
    rank: "AIR 145",
    image: "AS",
    quote: "The analytics helped me identify my weak areas and improve fast. The personalized dashboard was a game-changer for my preparation.",
    rating: 5
  },
  {
    name: "Rohan Patel",
    rank: "AIR 289",
    image: "RP",
    quote: "Best NEET learning platform — tests feel like the real exam. The instant feedback and detailed solutions helped me understand concepts better.",
    rating: 5
  },
  {
    name: "Kavya Reddy",
    rank: "AIR 412",
    image: "KR",
    quote: "The community support is incredible. Faculty members respond quickly and peers share helpful study tips. Never felt alone in my preparation.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Hear From Our Toppers
          </h2>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            Join thousands of students who achieved their NEET dreams with MESARA
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-sm mb-6 italic">"{testimonial.quote}"</p>
              
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-primary">{testimonial.rank}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-8 p-6 bg-accent rounded-2xl">
            <div className="text-center">
              <p className="text-3xl font-bold">95%</p>
              <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-center">
              <p className="text-3xl font-bold">10,000+</p>
              <p className="text-sm text-muted-foreground">Active Students</p>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-center">
              <p className="text-3xl font-bold">500+</p>
              <p className="text-sm text-muted-foreground">Expert Faculty</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
