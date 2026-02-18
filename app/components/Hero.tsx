'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import NeonButton from '../components/NeonButton';
import dynamic from 'next/dynamic';

const Logo3D = dynamic(() => import('../components/Logo3D'), { ssr: false });

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 font-[family-name:var(--font-orbitron)]"
            >
              <span className="neon-text-cyan">Skill</span>
              <span className="neon-text-magenta">Swap</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-[#ffdd00] mb-4 font-[family-name:var(--font-orbitron)] neon-text-yellow"
            >
              Exchange skills, not money
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-gray-300 mb-8 font-[family-name:var(--font-poppins)]"
            >
              Join the ultimate skill-sharing platform. Connect with talented individuals
              and swap your expertise for new skills. No money required.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/auth/signup">
                <NeonButton variant="cyan" size="lg">
                  Get Started Free
                </NeonButton>
              </Link>
              <Link href="#how-it-works">
                <NeonButton variant="magenta" size="lg">
                  Learn More
                </NeonButton>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-3 gap-4 mt-12"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-[#00ffff] font-[family-name:var(--font-orbitron)]">10K+</div>
                <div className="text-sm text-gray-400 font-[family-name:var(--font-poppins)]">Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#ff00ff] font-[family-name:var(--font-orbitron)]">5K+</div>
                <div className="text-sm text-gray-400 font-[family-name:var(--font-poppins)]">Skills</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#ffdd00] font-[family-name:var(--font-orbitron)]">50K+</div>
                <div className="text-sm text-gray-400 font-[family-name:var(--font-poppins)]">Swaps</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - 3D Logo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-[600px]"
          >
            <Logo3D />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
