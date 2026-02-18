'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import NeonCard from '../components/NeonCard';
import NeonButton from '../components/NeonButton';
import NeonInput from '../components/NeonInput';
import LoadingSkeleton from '../components/LoadingSkeleton';
import { skills, categories } from '../data/dummyData';
import { FaSearch, FaFilter, FaStar } from 'react-icons/fa';
import Image from 'next/image';

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoading] = useState(false);

  const filteredSkills = skills.filter((skill) => {
    const matchesSearch = skill.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-[#00ffff] mb-2 font-[family-name:var(--font-orbitron)] neon-text-cyan">
            Explore Skills
          </h1>
          <p className="text-gray-400 font-[family-name:var(--font-poppins)]">
            Discover thousands of skills to learn and share with the community
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 space-y-4"
        >
          {/* Search Bar */}
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#00ffff]" />
            <NeonInput
              type="text"
              placeholder="Search for skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12"
              variant="cyan"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <FaFilter className="text-[#ff00ff]" />
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 font-[family-name:var(--font-poppins)] ${
                  selectedCategory === 'All'
                    ? 'border-[#ff00ff] bg-[#ff00ff] text-black shadow-[0_0_15px_#ff00ff]'
                    : 'border-[#ff00ff] text-[#ff00ff] hover:bg-[#ff00ff] hover:text-black'
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 font-[family-name:var(--font-poppins)] ${
                    selectedCategory === category
                      ? 'border-[#ff00ff] bg-[#ff00ff] text-black shadow-[0_0_15px_#ff00ff]'
                      : 'border-[#ff00ff] text-[#ff00ff] hover:bg-[#ff00ff] hover:text-black'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        {isLoading ? (
          <LoadingSkeleton count={6} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <NeonCard 
                  variant={index % 3 === 0 ? 'cyan' : index % 3 === 1 ? 'magenta' : 'yellow'}
                >
                  <div className="mb-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="relative w-12 h-12 rounded-full border-2 border-current overflow-hidden">
                        <Image
                          src={skill.userAvatar}
                          alt={skill.userName}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold font-[family-name:var(--font-orbitron)]">
                          {skill.userName}
                        </div>
                        <div className="text-sm text-gray-400 font-[family-name:var(--font-poppins)]">
                          {skill.category}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-2 font-[family-name:var(--font-orbitron)]">
                      {skill.title}
                    </h3>

                    <p className="text-gray-400 mb-3 font-[family-name:var(--font-poppins)]">
                      {skill.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full bg-black/60 text-sm border-2 border-current">
                        {skill.level}
                      </span>
                      <div className="flex items-center text-[#ffdd00]">
                        <FaStar className="mr-1" />
                        <span className="font-semibold">4.8</span>
                      </div>
                    </div>
                  </div>

                  <NeonButton 
                    variant={index % 3 === 0 ? 'cyan' : index % 3 === 1 ? 'magenta' : 'yellow'}
                    className="w-full"
                  >
                    Request Swap
                  </NeonButton>
                </NeonCard>
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && filteredSkills.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-[#00ffff] mb-2 font-[family-name:var(--font-orbitron)]">
              No skills found
            </h3>
            <p className="text-gray-400 font-[family-name:var(--font-poppins)]">
              Try adjusting your search or filters
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
