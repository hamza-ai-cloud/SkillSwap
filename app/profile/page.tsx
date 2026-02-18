'use client';

import { motion } from 'framer-motion';
import Header from '../components/Header';
import NeonCard from '../components/NeonCard';
import NeonButton from '../components/NeonButton';
import { currentUser, reviews } from '../data/dummyData';
import { FaStar, FaEdit } from 'react-icons/fa';
import Image from 'next/image';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - User Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <NeonCard variant="cyan">
                <div className="text-center">
                  {/* Avatar */}
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full border-4 border-[#00ffff] overflow-hidden shadow-[0_0_20px_#00ffff]">
                    <Image
                      src={currentUser.avatar}
                      alt={currentUser.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Name & Email */}
                  <h1 className="text-2xl font-bold text-[#00ffff] mb-1 font-[family-name:var(--font-orbitron)]">
                    {currentUser.name}
                  </h1>
                  <p className="text-gray-400 mb-4 font-[family-name:var(--font-poppins)]">
                    {currentUser.email}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center text-2xl font-bold text-[#ffdd00] mb-1">
                        <FaStar className="mr-1" />
                        {currentUser.rating}
                      </div>
                      <div className="text-sm text-gray-400">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#ff00ff]">
                        {currentUser.totalSwaps}
                      </div>
                      <div className="text-sm text-gray-400">Swaps</div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-gray-300 mb-6 font-[family-name:var(--font-poppins)]">
                    {currentUser.bio}
                  </p>

                  {/* Edit Button */}
                  <NeonButton variant="cyan" className="w-full">
                    <FaEdit className="inline mr-2" />
                    Edit Profile
                  </NeonButton>
                </div>
              </NeonCard>
            </motion.div>
          </div>

          {/* Right Column - Skills & Reviews */}
          <div className="lg:col-span-2 space-y-8">
            {/* Skills Offered */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold text-[#ff00ff] mb-4 font-[family-name:var(--font-orbitron)] neon-text-magenta">
                Skills I Offer
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentUser.skillsOffered.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <NeonCard variant="magenta" hover3D={true}>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold font-[family-name:var(--font-orbitron)]">
                          {skill}
                        </span>
                        <div className="flex items-center text-[#ffdd00]">
                          <FaStar />
                        </div>
                      </div>
                    </NeonCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills Wanted */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-[#ffdd00] mb-4 font-[family-name:var(--font-orbitron)] neon-text-yellow">
                Skills I Want to Learn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentUser.skillsWanted.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                  >
                    <NeonCard variant="yellow" hover3D={true}>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold font-[family-name:var(--font-orbitron)]">
                          {skill}
                        </span>
                        <div className="flex items-center text-[#ffdd00]">
                          <FaStar />
                        </div>
                      </div>
                    </NeonCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Reviews */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-[#00ffff] mb-4 font-[family-name:var(--font-orbitron)] neon-text-cyan">
                Reviews
              </h2>
              <div className="space-y-4">
                {reviews.map((review, index) => (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <NeonCard variant="cyan">
                      <div className="flex items-start space-x-4">
                        <div className="relative w-12 h-12 rounded-full border-2 border-[#00ffff] overflow-hidden">
                          <Image
                            src={review.userAvatar}
                            alt={review.userName}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold font-[family-name:var(--font-orbitron)]">
                              {review.userName}
                            </h4>
                            <div className="flex items-center text-[#ffdd00]">
                              {[...Array(Math.floor(review.rating))].map((_, i) => (
                                <FaStar key={i} className="text-sm" />
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-300 mb-2 font-[family-name:var(--font-poppins)]">
                            {review.comment}
                          </p>
                          <p className="text-sm text-gray-500">
                            {new Date(review.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </NeonCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
