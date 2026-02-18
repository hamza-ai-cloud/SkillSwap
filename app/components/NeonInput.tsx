'use client';

import { InputHTMLAttributes } from 'react';

interface NeonInputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'cyan' | 'magenta' | 'yellow';
}

export default function NeonInput({ 
  variant = 'cyan',
  className = '',
  ...props 
}: NeonInputProps) {
  const variants = {
    cyan: 'border-[#00ffff] focus:shadow-[0_0_15px_#00ffff]',
    magenta: 'border-[#ff00ff] focus:shadow-[0_0_15px_#ff00ff]',
    yellow: 'border-[#ffdd00] focus:shadow-[0_0_15px_#ffdd00]',
  };

  return (
    <input
      className={`
        w-full px-4 py-3 bg-black/60 border-2 rounded-lg
        text-white placeholder-gray-500
        focus:outline-none transition-all duration-300
        font-[family-name:var(--font-poppins)]
        ${variants[variant]}
        ${className}
      `}
      {...props}
    />
  );
}
