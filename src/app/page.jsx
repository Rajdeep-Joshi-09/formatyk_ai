"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, BarChart3, TrendingUp, CheckCircle2, AlertCircle, Layers, Shield, User, ListChecks } from 'lucide-react';

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
    <div className="w-full flex flex-col items-center relative overflow-hidden dark:bg-[#03050B] min-h-screen">
      
      {/* Deep Space Background Overlay */}
      <div className="absolute inset-0 pointer-events-none hidden dark:block">
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-accent-electric/20 rounded-full blur-[120px] mix-blend-screen opacity-50" />
        <div className="absolute top-[40%] left-[-10%] w-[600px] h-[600px] bg-accent-purple/10 rounded-full blur-[120px] mix-blend-screen opacity-30" />
      </div>

      {/* Full Background Earth Image */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 right-0 w-full lg:w-[70%] h-[500px] md:h-[800px] lg:h-[1000px] pointer-events-none mix-blend-screen overflow-hidden" 
        style={{ maskImage: 'radial-gradient(circle at center, black 20%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle at center, black 20%, transparent 70%)' }}
      >
        <Image 
          src="/earth_network.png"
          alt="Global Network"
          fill
          className="object-cover object-right md:object-center"
          priority
        />
      </motion.div>

      {/* Hero Section */}
      <section className="w-full max-w-[1400px] mx-auto px-5 md:px-10 py-16 md:py-24 flex flex-col lg:flex-row items-center justify-between relative z-10">
        
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-[45%] flex flex-col items-start mt-10 lg:mt-0"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#38bdf8]" />
            <span className="text-sm font-medium text-white/90">Formatyk — IT Services & Automation</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance leading-[1.1] text-white">
            Custom software, automation, and ERP — <br />
            <span className="text-gradient">built around your business</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-text-secondary dark:text-slate-300 max-w-xl mb-10 text-balance leading-relaxed">
            Formatyk designs and builds custom software, business automation, and ERP systems for companies ready to move from manual, disconnected processes to systems that actually work — without the overhead of a large agency.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link href="/contact" className="relative group h-12 px-8 rounded-full bg-gradient-to-r from-[#0059b5] via-[#3b82f6] to-[#8b5cf6] text-white font-medium flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-95 w-full sm:w-auto">
              <span className="absolute inset-0 rounded-full blur-md bg-gradient-to-r from-[#0059b5] via-[#3b82f6] to-[#8b5cf6] opacity-0 group-hover:opacity-70 transition-opacity duration-500"></span>
              <span className="relative flex items-center gap-2">Get a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
            </Link>
            <Link href="/services" className="h-12 px-8 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-medium flex items-center justify-center gap-2 transition-all w-full sm:w-auto backdrop-blur-md group">
              See Our Services
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
            <p className="text-sm text-slate-400">Direct access to the team building your solution — no account managers, no middlemen.</p>
          </motion.div>
        </motion.div>

        {/* Right Visuals (Cards) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="w-full lg:w-[55%] h-[350px] md:h-[600px] lg:h-[800px] relative mt-10 lg:mt-0"
        >
          {/* Floating Cards */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[5%] md:top-[10%] right-[0%] md:right-[10%] w-[220px] md:w-[260px] glass-panel rounded-2xl p-3 md:p-4 z-20 scale-90 md:scale-100"
          >
            <p className="text-[10px] md:text-xs text-slate-400 mb-1">Ownership</p>
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">100%</h3>
            <p className="text-[10px] md:text-xs text-emerald-400 flex items-center gap-1">
              <Shield className="w-3 h-3" /> Yours after final payment
            </p>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[40%] right-[-5%] w-[260px] glass-panel rounded-2xl p-4 hidden lg:block z-20"
          >
            <p className="text-xs text-slate-400 mb-1">Point of Contact</p>
            <h3 className="text-2xl font-semibold text-white mb-2">1</h3>
            <p className="text-xs text-emerald-400 flex items-center gap-1">
              <User className="w-3 h-3" /> Single contact, start to finish
            </p>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[10%] md:bottom-[20%] left-[0%] md:left-[10%] w-[240px] md:w-[260px] glass-panel rounded-2xl p-4 md:p-5 z-20 scale-90 md:scale-100"
          >
            <p className="text-[10px] md:text-xs text-slate-400 mb-1">Our Process</p>
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3 md:mb-4">7</h3>
            <p className="text-[10px] md:text-xs text-emerald-400 flex items-center gap-1 mb-2 md:mb-3">
              <ListChecks className="w-3 h-3" /> Transparent steps from day one
            </p>
            <div className="flex items-end gap-1.5 h-6 md:h-8">
              {[40, 60, 45, 80, 55, 90, 75].map((h, i) => (
                <div key={i} className="w-full bg-accent-electric/30 rounded-sm" style={{ height: `${h}%` }}>
                  <div className="w-full bg-accent-electric rounded-sm transition-all duration-1000 shadow-[0_0_5px_rgba(59,130,246,0.5)]" style={{ height: '100%' }} />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="relative z-10 flex flex-col items-center justify-center mt-[-40px] pb-20"
      >
        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-4">Scroll to discover</p>
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-500/50 to-transparent" />
        <div className="w-1.5 h-1.5 rounded-full bg-accent-electric/50 mt-1 animate-pulse" />
      </motion.div>

      {/* Dashboard Preview Section */}
      <section className="w-full max-w-[1200px] mx-auto px-5 md:px-10 py-24 relative z-10 flex flex-col items-center">
        
        {/* Glow floor effect */}
        <div className="absolute bottom-[-10%] w-[150%] max-w-[1400px] h-[300px] flex items-center justify-center pointer-events-none opacity-60">
           <div className="absolute w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent shadow-[0_0_20px_5px_rgba(59,130,246,0.6)]" />
           <div className="absolute w-[60%] h-[100px] bg-[#3b82f6]/20 rounded-[100%] blur-[40px]" />
           <div className="absolute w-[40%] h-[50px] bg-[#38bdf8]/30 rounded-[100%] blur-[20px]" />
           {/* Elliptical rings */}
           <div className="absolute w-[70%] h-[80px] rounded-[100%] border border-[#3b82f6]/30 shadow-[0_0_15px_rgba(59,130,246,0.4)]" />
           <div className="absolute w-[50%] h-[50px] rounded-[100%] border border-[#8b5cf6]/40 shadow-[0_0_20px_rgba(139,92,246,0.5)]" />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center w-full mt-10 md:mt-0">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/5 flex flex-col items-start px-2"
          >
            <div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-3 py-1 rounded-full border border-accent-purple/30 bg-accent-purple/10 text-accent-purple text-[10px] md:text-xs font-semibold uppercase tracking-wider">
              <Layers className="w-3 h-3 md:w-4 md:h-4" />
              How We Work
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 md:mb-8 text-white text-balance leading-[1.15]">
              Built around how you <span className="text-gradient font-extrabold">actually</span> work
            </h2>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-md">
              We start with a discovery call to understand your business, then design, build, and test your solution in phases with regular updates — then deploy it and support it after launch.
            </p>
            
            <Link href="/services" className="flex items-center gap-4 cursor-pointer group">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#050811] border border-[#3b82f6]/50 shadow-[0_0_20px_rgba(59,130,246,0.4)] flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_35px_rgba(59,130,246,0.6)] transition-all duration-300">
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-medium text-sm md:text-base">See our services</span>
                <span className="text-slate-400 text-xs md:text-sm">Explore what we build</span>
              </div>
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-3/5 relative z-10 px-2"
          >
            {/* Outer glowing border container */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-3xl md:rounded-[2.5rem] p-[1px] md:p-[2px] bg-gradient-to-br from-[#3b82f6]/50 via-[#0a0f1d] to-[#8b5cf6]/50 shadow-[0_0_30px_-5px_rgba(59,130,246,0.4)] md:shadow-[0_0_50px_-10px_rgba(59,130,246,0.5)] rotate-0 lg:rotate-[2deg] hover:rotate-0 transition-transform duration-700 ease-out"
            >
              <div className="bg-[#030612] rounded-[1.4rem] md:rounded-[2.4rem] p-4 sm:p-6 md:p-8 relative overflow-hidden backdrop-blur-xl">
                
                {/* Dashboard Mockup Top Bar */}
                <div className="flex items-center justify-between mb-6 md:mb-8 pb-3 md:pb-4 border-b border-white/5">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                      <span className="text-white font-bold text-xs md:text-sm">F</span>
                    </div>
                    <span className="font-semibold text-white tracking-wide text-sm md:text-lg">FORMATYK</span>
                  </div>
                  <div className="text-xs md:text-sm text-slate-300 font-medium flex items-center gap-2">
                    <span className="hidden sm:inline">Overview</span> <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#38bdf8] shadow-[0_0_8px_rgba(56,189,248,0.8)] animate-pulse" />
                  </div>
                </div>

                {/* Dashboard Mockup Content */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 mb-5 md:mb-6">
                  {[
                    { label: 'Projects Delivered', val: '12+', change: 'Growing', color: 'text-[#38bdf8]' },
                    { label: 'Client Satisfaction', val: '100%', change: 'Always', color: 'text-emerald-400' },
                    { label: 'Services Offered', val: '8', change: 'Full stack', color: 'text-[#8b5cf6]', hideOnMobile: true },
                  ].map((stat, i) => (
                    <div key={i} className={`bg-[#070b1a] rounded-xl md:rounded-2xl p-3 md:p-5 border border-white/5 shadow-inner ${stat.hideOnMobile ? 'hidden sm:block' : ''}`}>
                      <p className="text-[10px] md:text-xs text-slate-400 mb-1 md:mb-2">{stat.label}</p>
                      <div className="flex items-end justify-between">
                        <span className="text-xl md:text-3xl font-bold text-white">{stat.val}</span>
                        <span className={`text-[9px] md:text-xs ${stat.color} mb-0.5 md:mb-1 font-medium`}>{stat.change}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Charts Mockup */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <div className="bg-[#070b1a] rounded-xl md:rounded-2xl p-4 md:p-5 border border-white/5 h-32 md:h-40 relative flex flex-col justify-between overflow-hidden">
                    <div className="flex justify-between items-start">
                      <p className="text-[10px] md:text-xs text-slate-400">Performance</p>
                      <div className="px-1.5 py-0.5 md:px-2 md:py-1 bg-white/5 rounded border border-white/10 flex flex-col items-end">
                        <span className="text-[10px] md:text-xs text-[#38bdf8] font-medium">↑ 24%</span>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-[60%] flex items-end">
                      <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full text-[#3b82f6] drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">
                        <path d="M0,50 L0,30 Q10,15 20,35 T40,25 T60,40 T80,20 T100,5 L100,50 Z" fill="url(#grad)" />
                        <path d="M0,30 Q10,15 20,35 T40,25 T60,40 T80,20 T100,5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                        <defs>
                          <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="rgba(59,130,246,0.3)" />
                            <stop offset="100%" stopColor="rgba(59,130,246,0)" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="bg-[#070b1a] rounded-xl md:rounded-2xl p-4 md:p-5 border border-white/5 flex flex-col justify-center gap-4 md:gap-5">
                    <p className="text-[10px] md:text-xs text-slate-400 mb-1">Our Strengths</p>
                    <div className="space-y-3 md:space-y-4">
                      <div>
                        <div className="flex justify-between text-[10px] md:text-xs mb-1.5 md:mb-2">
                          <span className="text-slate-200">On-Time Delivery</span>
                          <span className="text-[#38bdf8] font-medium">98.9%</span>
                        </div>
                        <div className="w-full bg-white/5 rounded-full h-1.5 md:h-2 shadow-inner"><div className="bg-[#38bdf8] h-1.5 md:h-2 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.8)]" style={{ width: '98.9%' }}></div></div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[10px] md:text-xs mb-1.5 md:mb-2">
                          <span className="text-slate-200">Client Retention</span>
                          <span className="text-[#8b5cf6] font-medium">97.2%</span>
                        </div>
                        <div className="w-full bg-white/5 rounded-full h-1.5 md:h-2 shadow-inner"><div className="bg-[#8b5cf6] h-1.5 md:h-2 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.8)]" style={{ width: '97.2%' }}></div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* How We Work — Numbered Steps */}
      <section className="w-full max-w-[1200px] mx-auto px-5 md:px-10 py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-3 py-1 rounded-full border border-accent-purple/30 bg-accent-purple/10 text-accent-purple text-[10px] md:text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3 h-3 md:w-4 md:h-4" />
            Our Process
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">How We Work</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="group relative bg-surface-container-lowest p-8 rounded-2xl border border-black/5 dark:border-white/5 hover:border-accent-electric/30 transition-colors"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center group-hover:bg-accent-electric group-hover:text-white transition-colors text-accent-electric font-bold text-lg">
                01
              </div>
              <span className="text-5xl font-bold text-white/5 group-hover:text-accent-electric/10 transition-colors select-none">01</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Discover & Propose</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              We start with a discovery call to understand your business, current systems, and goals — then share a tailored proposal with clear scope, timeline, and pricing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative bg-surface-container-lowest p-8 rounded-2xl border border-black/5 dark:border-white/5 hover:border-accent-electric/30 transition-colors"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center group-hover:bg-accent-electric group-hover:text-white transition-colors text-accent-electric font-bold text-lg">
                02
              </div>
              <span className="text-5xl font-bold text-white/5 group-hover:text-accent-electric/10 transition-colors select-none">02</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Build, Test & Deliver</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              From there we design, build, and test your solution in phases with regular updates, then deploy it and hand over full documentation — with support to follow.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
