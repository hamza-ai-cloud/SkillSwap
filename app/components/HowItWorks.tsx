'use client';

import { motion } from 'framer-motion';
import NeonCard from './NeonCard';
import { FaUserPlus, FaSearch, FaHandshake } from 'react-icons/fa';

const steps = [
  {
    icon: FaUserPlus,
    number: '01',
    title: 'Post Your Skill',
    description: 'Create your profile and list the skills you can offer and want to learn',
    variant: 'cyan' as const,
  },
  {
    icon: FaSearch,
    number: '02',
    title: 'Find a Partner',
    description: 'Browse and connect with people who have skills you want and need yours',
    variant: 'magenta' as const,
  },
  {
    icon: FaHandshake,
    number: '03',
    title: 'Swap & Learn',
    description: 'Exchange knowledge through sessions and grow together',
    variant: 'yellow' as const,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#ff00ff] mb-4 font-[family-name:var(--font-orbitron)] neon-text-magenta">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 font-[family-name:var(--font-poppins)]">
            Get started in three simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <NeonCard variant={step.variant}>
                <div className="text-center">
                  {/* Step Number */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 border-2 border-current rounded-full bg-black flex items-center justify-center">
                      <span className="text-xl font-bold font-[family-name:var(--font-orbitron)]">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-20 h-20 mb-4 mt-8 border-2 border-current rounded-lg">
                    <step.icon className="text-5xl" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 font-[family-name:var(--font-orbitron)]">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 font-[family-name:var(--font-poppins)]">
                    {step.description}
                  </p>
                </div>
              </NeonCard>

              {/* Connector Arrow (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="text-4xl text-[#00ffff]">→</div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
