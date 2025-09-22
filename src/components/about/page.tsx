import { Users, Shield, Rocket } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          We're on a Mission to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">
            Revolutionize
          </span>{" "}
          Creator Collaborations
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Collabflo was founded by a dynamic team of engineers united by a
          passion for technology and a vision for the future of the creator
          economy. We bring transparency, security, and efficiency to brand-influencer partnerships.
        </p>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Story
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The platform was co-founded by{" "}
              <span className="font-semibold text-gray-900">
                Aditya Gupta
              </span>{" "}
              and{" "}
              <span className="font-semibold text-gray-900">
                Harshit Kumar Jha
              </span>
              , both 2025 graduates in Electrical and Electronics Engineering
              from the prestigious UIET, Panjab University.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Recognizing that the current influencer marketing landscape is
              fragmented and inefficient, they came together to build the
              definitive solution. Collabflo is the result of their shared
              commitment to empowering brands and influencers by streamlining
              the entire collaboration lifecycle in one secure, intuitive

              marketplace.
            </p>
          </div>
          <div className="order-1 md:order-2">
             {/* You can place an image of the founders or the team here */}
             <div className="bg-gradient-to-br from-orange-100 to-purple-200 w-full h-80 rounded-2xl flex items-center justify-center">
                <span className="text-gray-500">Team Image Placeholder</span>
             </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">The Values That Drive Us</h2>
            <p className="text-gray-600 mt-4">We are committed to building a platform that is not only powerful but also principled.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white mb-5">
                    <Users className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl mb-2 text-gray-900">Community First</h3>
                <p className="text-gray-600 text-base">
                    Building a trusted, supportive, and collaborative space for brands and creators worldwide.
                </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 text-white mb-5">
                    <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl mb-2 text-gray-900">Uncompromising Security</h3>
                <p className="text-gray-600 text-base">
                    Ensuring every collaboration is safe, transparent, and reliable through secure escrow and verified profiles.
                </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 text-white mb-5">
                    <Rocket className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl mb-2 text-gray-900">Constant Innovation</h3>
                <p className="text-gray-600 text-base">
                    Leveraging modern, scalable technology to streamline workflows and continuously improve the user experience.
                </p>
            </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Join the Movement</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Whether you’re a brand or a creator, Collabflo is your gateway to
            seamless, secure, and impactful collaborations.
            </p>
            <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-orange-500 to-purple-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:opacity-90 transition-opacity"
            >
            Get in Touch
            </a>
        </div>
      </section>
    </div>
  );
}
