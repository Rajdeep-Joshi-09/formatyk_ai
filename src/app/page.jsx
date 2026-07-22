"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-[1200px] px-5 md:px-10 py-24 md:py-32 lg:py-40 flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-low border border-black/5 dark:border-white/5 mb-8">
            <Sparkles className="w-4 h-4 text-accent-electric" />
            <span className="text-sm font-medium">Introducing Formatyk 2.0</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-8 text-balance">
            The next generation of <br className="hidden md:block" />
            <span className="text-accent-electric">predictive intelligence</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-text-secondary max-w-2xl mb-12 text-balance leading-relaxed">
            Formatyk seamlessly integrates with your existing infrastructure to unlock deep insights, automate complex decisions, and secure your future.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/contact" className="h-12 px-8 rounded-full bg-accent-electric text-white font-medium flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95 w-full sm:w-auto">
              Start Free Trial <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services" className="h-12 px-8 rounded-full bg-surface-container-low hover:bg-surface-container text-text-primary font-medium flex items-center justify-center transition-colors w-full sm:w-auto">
              Explore Platform
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Feature Grid */}
      <section className="w-full bg-surface-container-lowest border-y border-black/5 dark:border-white/5 py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Enterprise-grade capabilities</h2>
            <p className="text-text-secondary">Engineered for scale, security, and uncompromising performance.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Lightning Fast', desc: 'Process millions of data points in milliseconds with our optimized infrastructure.', icon: Zap },
              { title: 'Bank-grade Security', desc: 'End-to-end encryption and compliance with global data protection standards.', icon: Shield },
              { title: 'Intelligent Automation', desc: 'Deploy autonomous agents that learn and adapt to your unique workflows.', icon: Sparkles },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-surface p-8 rounded-2xl border border-black/5 dark:border-white/5 flex flex-col items-start hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-accent-electric/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-accent-electric" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
