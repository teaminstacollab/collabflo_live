import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="border-b border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <a href="/" className="flex items-baseline text-2xl font-bold">
            <span className="text-gray-900">collab</span>
            <span className="relative">
              <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                flo
              </span>
              <span className="absolute -bottom-0.5 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-orange-500 to-purple-600" />
            </span>
          </a>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              How It Works
            </a>
          </nav>
        </div>

        <div className="flex items-center">
          <Button asChild className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white border-0">
            <a href="https://Collabflo.flutterflow.app">Get Started</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
