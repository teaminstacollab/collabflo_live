import { X } from "lucide-react";

export function Problems() {
  const brandProblems = [
    "Endless searching for the right creators",
    "No way to verify authentic engagement",
    "Complex negotiations and unclear pricing"
  ];

  const influencerProblems = [
    "Limited visibility to quality brands",
    "Delayed or missing payments",
    "Time-consuming back-and-forth communications"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The Old Way is Broken
          </h2>
          <p className="text-xl text-gray-600">
            Traditional influencer marketing is plagued with inefficiencies that hurt everyone
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Brand Problems */}
          <div className="bg-red-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Brand Challenges
            </h3>
            <div className="space-y-4">
              {brandProblems.map((problem, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-red-100 rounded-full p-1 mt-1">
                    <X className="w-4 h-4 text-red-600" />
                  </div>
                  <p className="text-gray-700">{problem}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Influencer Problems */}
          <div className="bg-red-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Creator Challenges
            </h3>
            <div className="space-y-4">
              {influencerProblems.map((problem, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-red-100 rounded-full p-1 mt-1">
                    <X className="w-4 h-4 text-red-600" />
                  </div>
                  <p className="text-gray-700">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
