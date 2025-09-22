import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const pricingTiers = [
  {
    name: "Hobby",
    price: "$0",
    period: "/month",
    description: "For personal projects and learning.",
    features: [
      "1 Concurrent Environment",
      "2 GB RAM / 1 vCPU",
      "5 GB Storage",
      "Community Support",
    ],
    cta: "Start for Free",
    variant: "outline",
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "For professional developers and small teams.",
    features: [
      "5 Concurrent Environments",
      "8 GB RAM / 2 vCPUs",
      "50 GB Storage",
      "AI Code Assistant",
      "Priority Email Support",
    ],
    cta: "Get Started with Pro",
    variant: "default",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with custom needs.",
    features: [
      "Unlimited Environments",
      "Customizable Resources",
      "Advanced Security & SSO",
      "Dedicated Support & SLA",
      "On-premise option",
    ],
    cta: "Contact Sales",
    variant: "outline",
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 sm:py-32 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Pricing That Scales With You
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Choose the perfect plan for your needs. No hidden fees, cancel anytime.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-start">
          {pricingTiers.map((tier) => (
            <Card key={tier.name} className={`relative flex flex-col ${tier.popular ? 'border-primary shadow-lg shadow-primary/10' : ''}`}>
              {tier.popular && (
                <Badge className="absolute -top-3 right-6">Most Popular</Badge>
              )}
              <CardHeader>
                <CardTitle>{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
                <div>
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground">{tier.period}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={tier.variant as any}>{tier.cta}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
