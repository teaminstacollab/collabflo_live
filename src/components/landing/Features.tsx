import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Zap, Code, Cloud, Shield, GitBranch, Scaling } from "lucide-react";

const features = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Instant Environments",
    description: "Spin up fresh, pre-configured development environments in seconds. No more 'works on my machine' issues.",
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "AI-Powered Code Assistant",
    description: "Our integrated AI helps you write better code faster, with smart suggestions, debugging, and optimization.",
  },
  {
    icon: <Cloud className="h-8 w-8 text-primary" />,
    title: "Seamless Deployment",
    description: "Go from code to production with a single click. We handle the CI/CD pipeline, so you can focus on building.",
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Enterprise-Grade Security",
    description: "Your code and data are protected with industry-leading security protocols and automated vulnerability scanning.",
  },
  {
    icon: <GitBranch className="h-8 w-8 text-primary" />,
    title: "Collaborative Workflows",
    description: "Work with your team in real-time with shared environments, live code editing, and integrated reviews.",
  },
  {
    icon: <Scaling className="h-8 w-8 text-primary" />,
    title: "Auto-Scaling Infrastructure",
    description: "Our platform automatically scales resources to match your workload, ensuring optimal performance and cost.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Everything You Need to Build
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Quantum is packed with features designed to supercharge your development workflow.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="bg-background/50 border-border/50 hover:border-primary/50 hover:bg-muted/30 transition-all duration-300">
              <CardHeader>
                {feature.icon}
                <CardTitle className="mt-4">{feature.title}</CardTitle>
                <CardDescription className="mt-2">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
