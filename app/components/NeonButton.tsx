'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface NeonButtonProps {
  children: ReactNode;
  variant?: 'cyan' | 'magenta' | 'yellow';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function NeonButton({ 
  children, 
  variant = 'cyan', 
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}: NeonButtonProps) {
  const variants = {
    cyan: 'border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff] hover:shadow-[0_0_20px_#00ffff]',
    magenta: 'border-[#ff00ff] text-[#ff00ff] hover:bg-[#ff00ff] hover:shadow-[0_0_20px_#ff00ff]',
    yellow: 'border-[#ffdd00] text-[#ffdd00] hover:bg-[#ffdd00] hover:shadow-[0_0_20px_#ffdd00]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative border-2 rounded-lg font-semibold 
        transition-all duration-300 overflow-hidden
        hover:text-black
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      <span className="relative z-10 font-[family-name:var(--font-orbitron)]">
        {children}
      </span>
    </motion.button>
  );
}
