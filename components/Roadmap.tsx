'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Circle, Clock } from 'lucide-react';

const roadmapItems = [
  {
    quarter: 'Q4 2025',
    status: 'in-progress',
    milestone: 'Testnet Launch',
    description: 'Telegram bot beta & core platform features',
    items: ['Custodial wallet system', 'Group creation & management', 'Basic trading proposals'],
  },
  {
    quarter: 'Q1 2026',
    status: 'upcoming',
    milestone: 'Governance & Gamification',
    description: 'Advanced voting & reputation system',
    items: ['On-chain voting mechanism', 'XP & badge system', 'Group leaderboards'],
  },
  {
    quarter: 'Q2 2026',
    status: 'upcoming',
    milestone: 'Mainnet Release',
    description: 'Production launch with full features',
    items: ['Performance analytics', 'Advanced trading strategies', 'Mobile app beta'],
  },
  {
    quarter: 'Q3 2026',
    status: 'future',
    milestone: 'Multi-chain Expansion',
    description: 'Wormhole integration & cross-chain trading',
    items: ['Ethereum support', 'Cross-chain liquidity', 'Advanced DeFi integrations'],
  },
];

export default function Roadmap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-white/80" />;
      case 'in-progress':
        return <Clock className="w-6 h-6 text-white/80" />;
      default:
        return <Circle className="w-6 h-6 text-zinc-600" />;
    }
  };

  const badgeClass = 'border border-zinc-800 bg-zinc-950';

  return (
  <section ref={ref} className="relative py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-semibold text-white mb-6 tracking-tight">
            Our Roadmap
          </h2>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            The journey from testnet to multi-chain trading platform
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-zinc-900 transform -translate-x-1/2"></div>

          <div className="space-y-16">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="group relative">
                    {/* Card */}
                    <div className="relative bg-zinc-950 rounded-3xl p-8 border border-zinc-900 group-hover:border-zinc-800 transition-all duration-300">
                      {/* Quarter badge */}
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 ${badgeClass}`}>
                        {getStatusIcon(item.status)}
                        <span className="text-sm font-bold text-white">{item.quarter}</span>
                      </div>

                      <h3 className="text-3xl font-medium text-white mb-2 tracking-tight">{item.milestone}</h3>
                      <p className="text-lg text-zinc-400 mb-6">{item.description}</p>

                      {/* Feature list */}
                      <ul className={`space-y-2 ${index % 2 === 0 ? 'md:ml-auto md:text-right' : ''}`}>
                        {item.items.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-zinc-300">
                            {index % 2 === 0 ? (
                              <>
                                <span className="md:order-2">{feature}</span>
                                <span className="w-1.5 h-1.5 bg-zinc-700 rounded-full md:order-1"></span>
                              </>
                            ) : (
                              <>
                                <span className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></span>
                                <span>{feature}</span>
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:block relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className={`w-14 h-14 bg-zinc-950 rounded-full border border-zinc-900 flex items-center justify-center`}
                  >
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center border border-zinc-800">
                      {getStatusIcon(item.status)}
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alignment */}
                <div className="hidden md:block flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-20"
        >
          <p className="text-gray-400 italic">
            * Timelines are subject to change based on community feedback and development progress
          </p>
        </motion.div>
      </div>
    </section>
  );
}
