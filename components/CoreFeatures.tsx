'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Wallet, Vote, Shield, Trophy, BarChart3, Link2 } from 'lucide-react';
import { GL } from './gl';

const features = [
  {
    icon: Wallet,
    title: 'Pooled Trading',
    description: 'Groups can pool funds on Solana with transparent smart contracts.',
    gradient: 'from-[#6C2BF0] to-[#8B4FDB]',
  },
  {
    icon: Vote,
    title: 'Telegram Bot Governance',
    description: 'Vote, propose, and approve trades directly in your group chat.',
    gradient: 'from-[#8B4FDB] to-[#A76BE6]',
  },
  {
    icon: Shield,
    title: 'Custodial Wallets',
    description: 'Seamless onboarding — every user gets an auto-generated wallet.',
    gradient: 'from-[#A76BE6] to-[#C388F1]',
  },
  {
    icon: Trophy,
    title: 'Gamified XP System',
    description: 'Earn badges, levels, and ranks for successful trades and community participation.',
    gradient: 'from-[#C388F1] to-[#E043FF]',
  },
  {
    icon: BarChart3,
    title: 'Group Leaderboards',
    description: 'Compete with other Telegram groups for the best ROI or accuracy.',
    gradient: 'from-[#E043FF] to-[#F06AC8]',
  },
  {
    icon: Link2,
    title: 'On-chain Transparency',
    description: 'Every action is verifiable on Solana — no hidden control, no trust issues.',
    gradient: 'from-[#F06AC8] to-[#FF91DB]',
  },
];

export default function CoreFeatures() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [hovering, setHovering] = useState(false);

  return (
  <section ref={ref} className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <GL hovering={hovering} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-semibold text-white mb-6 tracking-tight">
            Core Features
          </h2>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            Everything you need to turn your Telegram group into a powerful trading collective
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              {/* Card */}
              <div className="relative h-full bg-zinc-950/80 backdrop-blur-sm rounded-3xl p-8 border border-zinc-900 hover:border-zinc-800 transition-all duration-300">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-zinc-900 border border-zinc-800`}>
                    <feature.icon className="w-7 h-7 text-white/80" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-medium text-white mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-800 bg-zinc-950">
            <span className="text-zinc-400">All features powered by Solana blockchain</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
