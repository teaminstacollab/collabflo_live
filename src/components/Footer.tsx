import { Instagram, Linkedin, Youtube } from "lucide-react";

// Custom X (Twitter) Icon
function XIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 1227"
      className={className}
      fill="currentColor"
    >
      <path d="M714.163 519.284L1160.89 0H1055.3L668.882 450.887L356.859 0H0l468.087 681.821L0 1226.55h105.589l406.06-479.89l332.41 479.89H1200L714.163 519.284zM559.651 684.469l-47.04-67.294L144.011 79.599h162.552l299.346 428.45l47.04 67.293l390.228 558.56H880.625L559.651 684.469z"/>
    </svg>
  );
}

export function Footer() {
  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "DMCA", href: "#" },
  ];

  const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "#" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const supportLinks = [
    { label: "Help Center", href: "#" },
    { label: "Community", href: "#" },
    { label: "Safety", href: "#" },
    { label: "Creator Resources", href: "#" },
    { label: "Brand Resources", href: "#" },
  ];

  const socialLinks = [
    { icon: XIcon, href: "https://x.com/Collabflo", label: "X" },
    { icon: Instagram, href: "https://www.instagram.com/collabflo", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com/@insta-collab?si=XGJNxpI9kXdXE3A4", label: "YouTube" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold mb-4">Collabflo</div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Where brands and creators actually connect. Seamless, secure influencer collaborations.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:col-span-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Collabflo. All rights reserved.
          </p>
          <p className="text-gray-400 mt-4 md:mt-0">
            Made with love for creators and brands worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
