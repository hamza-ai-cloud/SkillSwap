'use client';

import { motion } from 'framer-motion';

export default function LoadingSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-4">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.6 }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="bg-black/40 border-2 border-[#00ffff]/30 rounded-xl p-6"
        >
          <div className="animate-pulse space-y-4">
            <div className="h-6 bg-[#00ffff]/20 rounded w-3/4"></div>
            <div className="h-4 bg-[#00ffff]/20 rounded w-full"></div>
            <div className="h-4 bg-[#00ffff]/20 rounded w-5/6"></div>
            <div className="flex space-x-2">
              <div className="h-8 bg-[#00ffff]/20 rounded w-20"></div>
              <div className="h-8 bg-[#00ffff]/20 rounded w-20"></div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
