'use client';

import { motion } from 'framer-motion';
import NeonCard from './NeonCard';
import { FaCode, FaPalette, FaVideo, FaGraduationCap } from 'react-icons/fa';

const features = [
  {
    icon: FaCode,
    title: 'Tech Skills',
    description: 'Learn programming, web development, and software engineering from experts',
    variant: 'cyan' as const,
  },
  {
    icon: FaPalette,
    title: 'Creative Arts',
    description: 'Master design, photography, video editing, and creative disciplines',
    variant: 'magenta' as const,
  },
  {
    icon: FaVideo,
    title: 'Content Creation',
    description: 'Develop skills in video production, writing, and digital marketing',
    variant: 'yellow' as const,
  },
  {
    icon: FaGraduationCap,
    title: 'Personal Growth',
    description: 'Learn languages, business, music, and enhance your personal skills',
    variant: 'cyan' as const,
  },
];

export default function Features() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#00ffff] mb-4 font-[family-name:var(--font-orbitron)] neon-text-cyan">
            Explore Skills
          </h2>
          <p className="text-xl text-gray-300 font-[family-name:var(--font-poppins)]">
            Thousands of skills to learn and share
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <NeonCard variant={feature.variant}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 border-2 border-current rounded-lg">
                    <feature.icon className="text-4xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-[family-name:var(--font-orbitron)]">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 font-[family-name:var(--font-poppins)]">
                    {feature.description}
                  </p>
                </div>
              </NeonCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
