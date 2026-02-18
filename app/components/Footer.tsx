'use client';

import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: '#', label: 'GitHub' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaDiscord, href: '#', label: 'Discord' },
  ];

  const footerLinks = [
    { name: 'About', href: '#' },
    { name: 'How it Works', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <footer className="bg-black/80 border-t-2 border-[#00ffff] mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-[#00ffff] font-[family-name:var(--font-orbitron)] mb-4 neon-text-cyan">
              SkillSwap
            </h3>
            <p className="text-gray-400 font-[family-name:var(--font-poppins)]">
              Exchange skills, not money. Join the ultimate skill-sharing platform.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#ff00ff] font-[family-name:var(--font-orbitron)] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#00ffff] transition-colors font-[family-name:var(--font-poppins)]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold text-[#ffdd00] font-[family-name:var(--font-orbitron)] mb-4">
              Connect With Us
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 border-2 border-[#00ffff] rounded-lg flex items-center justify-center text-[#00ffff] hover:bg-[#00ffff] hover:text-black transition-all duration-300 hover:shadow-[0_0_15px_#00ffff]"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t-2 border-[#00ffff]/30 mt-8 pt-8 text-center">
          <p className="text-gray-400 font-[family-name:var(--font-poppins)]">
            © {currentYear} SkillSwap. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
