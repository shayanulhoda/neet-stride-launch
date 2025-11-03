import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Monthly Plan",
    price: "₹999",
    period: "/month",
    features: [
      "Access to all NEET courses",
      "Unlimited mock tests",
      "Performance analytics",
      "Community access",
      "Download study materials",
      "Email support"
    ],
    popular: false
  },
  {
    name: "Quarterly Plan",
    price: "₹2,499",
    period: "/3 months",
    originalPrice: "₹2,997",
    features: [
      "Everything in Monthly Plan",
      "Priority doubt resolution",
      "Live doubt sessions (4/month)",
      "Personalized study plan",
      "Previous year papers",
      "WhatsApp support"
    ],
    popular: true
  },
  {
    name: "Yearly Plan",
    price: "₹7,999",
    period: "/year",
    originalPrice: "₹11,988",
    features: [
      "Everything in Quarterly Plan",
      "1-on-1 mentorship sessions",
      "Exclusive masterclasses",
      "Priority support 24/7",
      "Custom test series",
      "Career counseling"
    ],
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Choose Your Plan and Start Learning Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            Simple, affordable subscription options to fit your preparation goals
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`p-8 relative ${plan.popular ? 'border-primary border-2 shadow-xl' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  {plan.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through mr-2">
                      {plan.originalPrice}
                    </span>
                  )}
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                {plan.originalPrice && (
                  <span className="text-sm text-primary font-medium">
                    Save {Math.round((1 - parseInt(plan.price.replace(/[₹,]/g, '')) / parseInt(plan.originalPrice.replace(/[₹,]/g, ''))) * 100)}%
                  </span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? "hero" : "default"} 
                className="w-full"
                size="lg"
              >
                Subscribe Now
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 max-w-2xl mx-auto">
          <p className="text-sm text-muted-foreground">
            All plans include a 7-day money-back guarantee. Cancel anytime, no questions asked.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
