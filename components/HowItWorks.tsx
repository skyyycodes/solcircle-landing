'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { UserPlus, Users, Vote } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    number: '01',
    title: 'Join the Platform',
    description: 'Register with your Telegram ID — a wallet is automatically created for you.',
  color: '#ffffff',
  },
  {
    icon: Users,
    number: '02',
    title: 'Join or Create a Group',
    description: 'Discover trading groups, deposit SOL, and apply to join them. Admins approve your entry.',
  color: '#ffffff',
  },
  {
    icon: Vote,
    number: '03',
    title: 'Trade Together',
    description: 'Vote on trade proposals directly inside Telegram. Smart contracts execute trades once the group agrees.',
  color: '#ffffff',
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
            How It Works
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Get started in three simple steps — no crypto expertise required
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-zinc-900 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                {/* Card */}
                <div className="relative bg-zinc-950 rounded-3xl p-8 border border-zinc-900 hover:border-zinc-800 transition-all duration-300">
                  {/* Number Badge */}
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-zinc-900 rounded-2xl border border-zinc-800 flex items-center justify-center text-2xl font-bold text-zinc-500 transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-zinc-900 border border-zinc-800">
                      <step.icon className="w-7 h-7 text-white/80" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-medium text-white mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{step.description}</p>

                  {/* Decorative element */}
                  <div className="absolute bottom-0 left-0 w-full h-px rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-zinc-900"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-base text-zinc-500">Every move is transparent, gamified, and trackable.</p>
        </motion.div>
      </div>
    </section>
  );
}
