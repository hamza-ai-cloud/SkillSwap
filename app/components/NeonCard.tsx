'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface NeonCardProps {
  children: ReactNode;
  variant?: 'cyan' | 'magenta' | 'yellow';
  className?: string;
  hover3D?: boolean;
}

export default function NeonCard({ 
  children, 
  variant = 'cyan',
  className = '',
  hover3D = true,
}: NeonCardProps) {
  const variants = {
    cyan: 'border-[#00ffff] shadow-[0_0_15px_rgba(0,255,255,0.3)]',
    magenta: 'border-[#ff00ff] shadow-[0_0_15px_rgba(255,0,255,0.3)]',
    yellow: 'border-[#ffdd00] shadow-[0_0_15px_rgba(255,221,0,0.3)]',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={hover3D ? { 
        rotateX: 5,
        rotateY: 5,
        scale: 1.02,
        boxShadow: variant === 'cyan' 
          ? '0 0 30px rgba(0,255,255,0.5)' 
          : variant === 'magenta'
          ? '0 0 30px rgba(255,0,255,0.5)'
          : '0 0 30px rgba(255,221,0,0.5)',
      } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`
        relative bg-black/40 backdrop-blur-sm border-2 rounded-xl p-6
        ${variants[variant]}
        ${className}
      `}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </motion.div>
  );
}
