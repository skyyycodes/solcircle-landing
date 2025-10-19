'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Zap, Gem, Trophy } from 'lucide-react';

const badges = [
  {
    icon: Award,
    title: 'Alpha Caller',
    description: 'Top profit contributor',
  },
  {
    icon: Gem,
    title: 'Diamond Hands',
    description: 'Long-term holder',
  },
  {
    icon: Zap,
    title: 'Fast Vote',
    description: 'Early governance responder',
  },
];

export default function Gamification() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-32 px-6 bg-black">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-950 mb-8">
              <Trophy className="w-4 h-4 text-white/80" />
              <span className="text-xs font-medium text-zinc-300">Engagement System</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-semibold text-white mb-6 tracking-tight">
              Trade Smart.
              <br />
              <span className="text-white/70">Earn Reputation.</span>
            </h2>

            <p className="text-lg text-zinc-400 leading-relaxed mb-3">
              Every member and group earns XP for performance, accuracy, and participation.
            </p>
            <p className="text-base text-zinc-500 leading-relaxed mb-8">
              Unlock NFTs, ranks, and special badges — make trading social and fun again.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Award, label: 'Badges', value: '50+' },
                { icon: Zap, label: 'XP Levels', value: '100' },
                { icon: Gem, label: 'NFT Rewards', value: 'Soon' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-zinc-950 rounded-2xl p-4 border border-zinc-900"
                >
                  <stat.icon className="w-6 h-6 text-white/80 mb-2" />
                  <div className="text-2xl font-medium text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-zinc-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Badges Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="space-y-6">
              {badges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, x: -10 }}
                  className="group relative"
                >
                  {/* Badge Card */}
                  <div className="relative bg-zinc-950 rounded-2xl p-6 border border-zinc-900 hover:border-zinc-800 transition-all duration-300 flex items-center gap-6">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-zinc-900 border border-zinc-800">
                      <badge.icon className="w-7 h-7 text-white/80" />
                    </div>
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-medium text-white mb-2">
                        {badge.title}
                      </h3>
                      <p className="text-zinc-400">
                        {badge.description}
                      </p>
                    </div>

                    {/* Minimalist: arrow indicator removed */}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative floating elements */}
            {/* Minimalist: remove decorative blobs */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
