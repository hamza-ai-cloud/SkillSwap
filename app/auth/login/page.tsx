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

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login
    setTimeout(() => {
      toast.success('Welcome back!');
      router.push('/dashboard');
    }, 1500);
  };

  const handleSocialLogin = (provider: string) => {
    toast.success(`Logging in with ${provider}...`);
    setTimeout(() => {
      router.push('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4 py-12">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>

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
            Welcome back! Login to your account
          </p>
        </div>

        <NeonCard variant="cyan">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-[#00ffff] font-[family-name:var(--font-orbitron)]">
                Email
              </label>
              <NeonInput
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                variant="cyan"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-[#00ffff] font-[family-name:var(--font-orbitron)]">
                Password
              </label>
              <NeonInput
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                variant="cyan"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-gray-400 cursor-pointer">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <Link href="#" className="text-[#00ffff] hover:text-[#00dddd]">
                Forgot password?
              </Link>
            </div>

            <NeonButton
              type="submit"
              variant="cyan"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </NeonButton>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-[#00ffff]/30"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-black text-gray-400">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button
                onClick={() => handleSocialLogin('Google')}
                className="flex items-center justify-center px-4 py-2 border-2 border-[#ff00ff] rounded-lg text-[#ff00ff] hover:bg-[#ff00ff] hover:text-black transition-all duration-300 hover:shadow-[0_0_15px_#ff00ff]"
              >
                <FaGoogle className="mr-2" />
                Google
              </button>
              <button
                onClick={() => handleSocialLogin('GitHub')}
                className="flex items-center justify-center px-4 py-2 border-2 border-[#ff00ff] rounded-lg text-[#ff00ff] hover:bg-[#ff00ff] hover:text-black transition-all duration-300 hover:shadow-[0_0_15px_#ff00ff]"
              >
                <FaGithub className="mr-2" />
                GitHub
              </button>
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-gray-400">
            Don't have an account?{' '}
            <Link href="/auth/signup" className="text-[#ff00ff] hover:text-[#dd00dd] font-semibold">
              Sign up
            </Link>
          </div>
        </NeonCard>
      </motion.div>
    </div>
  );
}
