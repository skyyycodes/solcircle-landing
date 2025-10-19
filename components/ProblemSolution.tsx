'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

export default function ProblemSolution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
  <section ref={ref} className="relative py-32 px-6">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-semibold text-white mb-6 tracking-tight">
            Why It Matters
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Problem Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-zinc-950 rounded-3xl p-8 border border-zinc-900">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800">
                  <AlertCircle className="w-8 h-8 text-white/80" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-white mb-2 tracking-tight">The Problem</h3>
                  <div className="w-16 h-px bg-zinc-800 rounded-full"></div>
                </div>
              </div>

              <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                Crypto trading groups live on Telegram — but coordination is{' '}
                chaotic, risky, and trust-based.
              </p>

              <ul className="space-y-4">
                {[
                  'Manual coordination through endless messages',
                  'Zero accountability for bad calls',
                  'Trust issues with group fund management',
                  'No way to track real performance',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3 text-zinc-400"
                  >
                    <span className="text-zinc-600 mt-1">✗</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Arrow removed per request */}

          {/* Solution Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-zinc-950 rounded-3xl p-8 border border-zinc-900">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800">
                  <CheckCircle className="w-8 h-8 text-white/80" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-white mb-2 tracking-tight">The Solution</h3>
                  <div className="w-16 h-px bg-zinc-800 rounded-full"></div>
                </div>
              </div>

              <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                Solcircle gives these communities a trustless way to pool funds, trade collectively, and track performance — powered by Solana.
              </p>

              <ul className="space-y-4">
                {[
                  'One-click voting directly in Telegram',
                  'Gamified reputation system for accountability',
                  'Smart contracts secure all pooled funds',
                  'Full transparency with on-chain verification',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3 text-zinc-300"
                  >
                    <span className="text-zinc-600 mt-1">✓</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
