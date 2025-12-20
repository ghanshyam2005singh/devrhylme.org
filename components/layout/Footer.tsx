import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  organization: [
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Partners", href: "/partners" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Projects", href: "/projects" },
    { name: "Documentation", href: "/docs" },
    { name: "Blog", href: "/blog" },
    { name: "Events", href: "/events" },
  ],
  community: [
    { name: "Get Involved", href: "/community" },
    { name: "GitHub", href: "https://github.com/devrhylme" },
    { name: "Discord", href: "#" },
    { name: "Twitter", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">
              DevRhylme Foundation
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Building open-source solutions for a better tomorrow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Organization Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Organization</h4>
            <ul className="space-y-2">
              {footerLinks.organization.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} DevRhylme Foundation. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}