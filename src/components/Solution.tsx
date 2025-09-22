import { Search, Handshake, TrendingUp } from "lucide-react";

export function Solution() {
  const steps = [
    {
      icon: Search,
      title: "Discover",
      description: "AI-powered matching connects brands with verified creators based on audience, engagement, and brand fit."
    },
    {
      icon: Handshake,
      title: "Collaborate",
      description: "Streamlined workflow tools handle negotiations, contracts, and project management in one place."
    },
    {
      icon: TrendingUp,
      title: "Succeed",
      description: "Secure escrow payments and detailed analytics ensure successful campaigns and fair compensation."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to the Future
          </h2>
          <p className="text-xl text-gray-600">
            A seamless, secure platform that works for everyone
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="relative mb-6 inline-block">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 right-0 transform translate-x-1/2 w-1/2 border-t-2 border-dashed border-purple-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
