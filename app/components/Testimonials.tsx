'use client';

import { motion } from 'framer-motion';
import NeonCard from './NeonCard';
import { FaStar } from 'react-icons/fa';
import { testimonials } from '../data/dummyData';
import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#ffdd00] mb-4 font-[family-name:var(--font-orbitron)] neon-text-yellow">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-300 font-[family-name:var(--font-poppins)]">
            Real stories from our community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <NeonCard 
                variant={index % 3 === 0 ? 'cyan' : index % 3 === 1 ? 'magenta' : 'yellow'}
              >
                {/* Stars */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-[#ffdd00] text-xl" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-300 text-center mb-6 font-[family-name:var(--font-poppins)] italic">
                  "{testimonial.comment}"
                </p>

                {/* User Info */}
                <div className="flex items-center justify-center space-x-3">
                  <div className="relative w-12 h-12 rounded-full border-2 border-current overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold font-[family-name:var(--font-orbitron)]">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-400 font-[family-name:var(--font-poppins)]">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </NeonCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
