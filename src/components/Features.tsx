import {
  BarChart3,
  Shield,
  Zap,
  Workflow,
  HeadphonesIcon,
  Users,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function Features() {
  const features = [
    {
      icon: BarChart3,
      title: "Verified Analytics",
      description:
        "Real engagement metrics and audience insights you can trust, not inflated vanity numbers.",
    },
    {
      icon: Shield,
      title: "Secure Escrow",
      description:
        "Protected payments that release only when campaign milestones are met, ensuring fair deals for everyone.",
    },
    {
      icon: Zap,
      title: "AI Discovery",
      description:
        "Smart matching algorithm finds the perfect creator-brand partnerships based on audience fit and values.",
    },
    {
      icon: Workflow,
      title: "Streamlined Workflow",
      description:
        "End-to-end project management from initial contact to campaign completion, all in one platform.",
    },
    {
      icon: Users,
      title: "Community Hub",
      description:
        "Connect with other professionals, share insights, and discover new opportunities in our exclusive community.",
    },
    {
      icon: HeadphonesIcon,
      title: "Dedicated Support",
      description:
        "Expert support team available to help resolve issues and optimize your collaboration experience.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            An All-In-One Platform
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need for successful influencer
            collaborations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all duration-300"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
