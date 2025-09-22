import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <ImageWithFallback
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Modern workspace collaboration"
              className="w-full h-80 object-cover rounded-2xl shadow-xl"
            />
          </div>
          
          <div className="text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Ready to Unlock <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">Limitless Opportunity?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join thousands of brands and creators who've transformed their collaboration experience with Collabflo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white border-0 px-8 py-4 text-lg"
              >
                  <a 
      href="https://Collabflo.flutterflow.app" 
      target="_blank"   // remove this line if you want to open in the same tab
      rel="noopener noreferrer"
    >
      Get Started Now
      </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
