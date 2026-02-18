'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import NeonButton from '@/app/components/NeonButton';
import NeonInput from '@/app/components/NeonInput';
import NeonCard from '@/app/components/NeonCard';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    setIsLoading(true);

    // Simulate signup
    setTimeout(() => {
      toast.success('Account created successfully!');
      router.push('/dashboard');
    }, 1500);
  };

  const handleSocialSignup = (provider: string) => {
    toast.success(`Signing up with ${provider}...`);
    setTimeout(() => {
      router.push('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4 py-12">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <h1 className="text-4xl font-bold font-[family-name:var(--font-orbitron)]">
              <span className="neon-text-cyan">Skill</span>
              <span className="neon-text-magenta">Swap</span>
            </h1>
          </Link>
          <p className="text-gray-400 mt-2 font-[family-name:var(--font-poppins)]">
            Create your account and start swapping skills
          </p>
        </div>

        <NeonCard variant="magenta">
          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-[#ff00ff] font-[family-name:var(--font-orbitron)]">
                Full Name
              </label>
              <NeonInput
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                variant="magenta"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-[#ff00ff] font-[family-name:var(--font-orbitron)]">
                Email
              </label>
              <NeonInput
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                variant="magenta"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-[#ff00ff] font-[family-name:var(--font-orbitron)]">
                Password
              </label>
              <NeonInput
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                variant="magenta"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-[#ff00ff] font-[family-name:var(--font-orbitron)]">
                Confirm Password
              </label>
              <NeonInput
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                variant="magenta"
              />
            </div>

            <div className="text-sm text-gray-400">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2" required />
                I agree to the{' '}
                <Link href="#" className="text-[#ff00ff] hover:text-[#dd00dd] ml-1">
                  Terms of Service
                </Link>
              </label>
            </div>

            <NeonButton
              type="submit"
              variant="magenta"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Creating account...' : 'Create Account'}
            </NeonButton>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-[#ff00ff]/30"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-black text-gray-400">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button
                onClick={() => handleSocialSignup('Google')}
                className="flex items-center justify-center px-4 py-2 border-2 border-[#00ffff] rounded-lg text-[#00ffff] hover:bg-[#00ffff] hover:text-black transition-all duration-300 hover:shadow-[0_0_15px_#00ffff]"
              >
                <FaGoogle className="mr-2" />
                Google
              </button>
              <button
                onClick={() => handleSocialSignup('GitHub')}
                className="flex items-center justify-center px-4 py-2 border-2 border-[#00ffff] rounded-lg text-[#00ffff] hover:bg-[#00ffff] hover:text-black transition-all duration-300 hover:shadow-[0_0_15px_#00ffff]"
              >
                <FaGithub className="mr-2" />
                GitHub
              </button>
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-gray-400">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-[#00ffff] hover:text-[#00dddd] font-semibold">
              Login
            </Link>
          </div>
        </NeonCard>
      </motion.div>
    </div>
  );
}
