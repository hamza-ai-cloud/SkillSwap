'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import NeonButton from './NeonButton';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Profile', href: '/profile' },
    { name: 'Messages', href: '/messages' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b-2 border-[#00ffff] shadow-[0_0_20px_rgba(0,255,255,0.3)]"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 border-2 border-[#00ffff] rounded-lg flex items-center justify-center shadow-[0_0_15px_#00ffff]">
              <span className="text-2xl font-bold text-[#00ffff] font-[family-name:var(--font-orbitron)]">S</span>
            </div>
            <span className="text-xl font-bold text-[#00ffff] font-[family-name:var(--font-orbitron)] hidden sm:block neon-text-cyan">
              SkillSwap
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-[#00ffff] transition-colors font-[family-name:var(--font-poppins)] font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/auth/login">
              <NeonButton variant="cyan" size="sm">
                Login
              </NeonButton>
            </Link>
            <Link href="/auth/signup">
              <NeonButton variant="magenta" size="sm">
                Sign Up
              </NeonButton>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#00ffff] text-3xl"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 pb-4 border-t-2 border-[#00ffff]/30 pt-4"
          >
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-[#00ffff] transition-colors font-[family-name:var(--font-poppins)]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Link href="/auth/login">
                  <NeonButton variant="cyan" size="sm" className="w-full">
                    Login
                  </NeonButton>
                </Link>
                <Link href="/auth/signup">
                  <NeonButton variant="magenta" size="sm" className="w-full">
                    Sign Up
                  </NeonButton>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
