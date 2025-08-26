import { Link } from "wouter";
import { Bot, Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Github } from "lucide-react";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: "/about" },
  { name: "Consultation", path: "/consultation" },
  { name: "Blog", path: "/blog" },
  { name: "Brochure", path: "/brochure" },
];

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
  { name: "GitHub", icon: Github, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <Bot className="h-8 w-8 text-accent mr-3" />
              <span className="text-xl font-bold">AI Solutions Pro</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of end-to-end artificial intelligence solutions. We transform
              businesses through innovative AI technologies and expert consulting services.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-700 hover:bg-accent rounded-lg flex items-center justify-center transition-colors duration-300"
                  data-testid={`social-${social.name.toLowerCase()}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-gray-300 hover:text-accent transition-colors duration-300"
                    data-testid={`footer-${link.name.toLowerCase().replace(" ", "-")}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-accent mr-3" />
                <span className="text-gray-300 text-sm">contact@aisolutionspro.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-accent mr-3" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-accent mr-3 mt-1" />
                <span className="text-gray-300 text-sm">
                  123 AI Street, Tech Valley<br />
                  San Francisco, CA 94102
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 AI Solutions Pro. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-accent text-sm transition-colors duration-300"
                data-testid="privacy-policy-link"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-accent text-sm transition-colors duration-300"
                data-testid="terms-of-service-link"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-accent text-sm transition-colors duration-300"
                data-testid="cookie-policy-link"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
