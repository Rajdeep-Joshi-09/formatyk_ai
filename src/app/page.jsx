"use client";

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, Sparkles, BarChart3, TrendingUp, CheckCircle2, AlertCircle, 
  Layers, Shield, User, ListChecks, Search, PenTool, Headset, Code,
  Eye, Target, Check, Send, Loader2, Database, Bot, Workflow, Lock, Unlock,
  Zap, Cpu, Globe, Activity, Terminal, Sliders, XCircle, Server, Key,
  FileCode, Clock, PhoneCall, MessageSquare, Compass, Box, Network, GitBranch,
  CreditCard, LockKeyhole
} from 'lucide-react';
import toast from 'react-hot-toast';
import { sendContactEmail } from '../actions/sendEmail';
import data from '../data.json';

const serviceIconMap = {
  Code,
  Database,
  Bot,
  Workflow
};

export default function Home() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const dashboardRef = useRef(null);
  const pricingRef = useRef(null);
  const contactRef = useRef(null);
  const formRef = useRef(null);

  const [isPending, setIsPending] = useState(false);
  const [activeSection, setActiveSection] = useState('home-section');
  const [decrypted, setDecrypted] = useState(false);
  const [shattering, setShattering] = useState(false);
  const [activeArchTab, setActiveArchTab] = useState('erp');

  // Global Page scroll tracking
  const { scrollY } = useScroll();

  // Scroll tracking for Hero
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const yEarth = useTransform(heroScroll, [0, 1], [0, 200]);
  const scaleEarth = useTransform(heroScroll, [0, 1], [1, 1.08]);
  const opacityHero = useTransform(heroScroll, [0, 0.8], [1, 0]);
  const yHeroLeft = useTransform(heroScroll, [0, 1], [0, -80]);

  // Floating cards parallax
  const yCard1 = useTransform(heroScroll, [0, 1], [0, -140]);
  const yCard2 = useTransform(heroScroll, [0, 1], [0, -70]);
  const yCard3 = useTransform(heroScroll, [0, 1], [0, -200]);

  // Scroll tracking for About Section (Zipper Scroll Effect)
  const { scrollYProgress: aboutScroll } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });

  const yAboutHeader = useTransform(aboutScroll, [0, 0.2], [80, 0]);
  const opacityAboutHeader = useTransform(aboutScroll, [0, 0.2], [0, 1]);
  const xVision = useTransform(aboutScroll, [0.05, 0.3], [-100, 0]);
  const opacityVision = useTransform(aboutScroll, [0.05, 0.3], [0, 1]);
  const xMission = useTransform(aboutScroll, [0.05, 0.3], [100, 0]);
  const opacityMission = useTransform(aboutScroll, [0.05, 0.3], [0, 1]);
  const yWhyChoose = useTransform(aboutScroll, [0.15, 0.4], [60, 0]);
  const opacityWhyChoose = useTransform(aboutScroll, [0.15, 0.4], [0, 1]);
  const scaleStat = useTransform(aboutScroll, [0.25, 0.5], [0.96, 1]);
  const opacityStat = useTransform(aboutScroll, [0.25, 0.5], [0, 1]);
  const xWatermark = useTransform(aboutScroll, [0, 1], [-200, 180]);

  // Scroll tracking for Services Section (Zipper Scroll Effect)
  const { scrollYProgress: servicesScroll } = useScroll({
    target: servicesRef,
    offset: ["start end", "end start"]
  });

  const yServicesHeader = useTransform(servicesScroll, [0, 0.2], [60, 0]);
  const opacityServicesHeader = useTransform(servicesScroll, [0, 0.2], [0, 1]);

  const opacityService1 = useTransform(servicesScroll, [0.05, 0.25], [0, 1]);
  const yService1 = useTransform(servicesScroll, [0.05, 0.25], [40, 0]);
  const scaleService1 = useTransform(servicesScroll, [0.05, 0.25], [0.96, 1]);

  const opacityService2 = useTransform(servicesScroll, [0.1, 0.3], [0, 1]);
  const yService2 = useTransform(servicesScroll, [0.1, 0.3], [40, 0]);
  const scaleService2 = useTransform(servicesScroll, [0.1, 0.3], [0.96, 1]);

  const opacityService3 = useTransform(servicesScroll, [0.15, 0.35], [0, 1]);
  const yService3 = useTransform(servicesScroll, [0.15, 0.35], [40, 0]);
  const scaleService3 = useTransform(servicesScroll, [0.15, 0.35], [0.96, 1]);

  const opacityService4 = useTransform(servicesScroll, [0.2, 0.4], [0, 1]);
  const yService4 = useTransform(servicesScroll, [0.2, 0.4], [40, 0]);
  const scaleService4 = useTransform(servicesScroll, [0.2, 0.4], [0.96, 1]);

  // Scroll tracking for Dashboard Section
  const { scrollYProgress: dashboardScroll } = useScroll({
    target: dashboardRef,
    offset: ["start end", "end center"]
  });

  const xDashboardText = useTransform(dashboardScroll, [0, 0.4], [-80, 0]);
  const opacityDashboardText = useTransform(dashboardScroll, [0, 0.3], [0, 1]);
  const xDashboardCard = useTransform(dashboardScroll, [0, 0.4], [80, 0]);
  const opacityDashboardCard = useTransform(dashboardScroll, [0, 0.3], [0, 1]);
  const rotateDashboardCard = useTransform(dashboardScroll, [0, 0.4], [6, 0]);

  // Scroll tracking for Pricing Section (Zipper Scroll Effect)
  const { scrollYProgress: pricingScroll } = useScroll({
    target: pricingRef,
    offset: ["start end", "end start"]
  });

  const yPricingHeader = useTransform(pricingScroll, [0, 0.2], [60, 0]);
  const opacityPricingHeader = useTransform(pricingScroll, [0, 0.2], [0, 1]);
  const scalePricingCard = useTransform(pricingScroll, [0.05, 0.3], [0.94, 1]);
  const opacityPricingCard = useTransform(pricingScroll, [0.05, 0.3], [0, 1]);
  
  const yMilestonesHeader = useTransform(pricingScroll, [0.1, 0.35], [40, 0]);
  const opacityMilestonesHeader = useTransform(pricingScroll, [0.1, 0.35], [0, 1]);

  const yMilestone1 = useTransform(pricingScroll, [0.15, 0.4], [40, 0]);
  const opacityMilestone1 = useTransform(pricingScroll, [0.15, 0.4], [0, 1]);
  const scaleMilestone1 = useTransform(pricingScroll, [0.15, 0.4], [0.96, 1]);

  const yMilestone2 = useTransform(pricingScroll, [0.2, 0.45], [40, 0]);
  const opacityMilestone2 = useTransform(pricingScroll, [0.2, 0.45], [0, 1]);
  const scaleMilestone2 = useTransform(pricingScroll, [0.2, 0.45], [0.96, 1]);

  const yMilestone3 = useTransform(pricingScroll, [0.25, 0.5], [40, 0]);
  const opacityMilestone3 = useTransform(pricingScroll, [0.25, 0.5], [0, 1]);
  const scaleMilestone3 = useTransform(pricingScroll, [0.25, 0.5], [0.96, 1]);

  // Scroll tracking for Contact Section (Zipper Scroll Effect)
  const { scrollYProgress: contactScroll } = useScroll({
    target: contactRef,
    offset: ["start end", "end center"]
  });

  const xContactLeft = useTransform(contactScroll, [0, 0.4], [-80, 0]);
  const opacityContactLeft = useTransform(contactScroll, [0, 0.3], [0, 1]);
  const xContactRight = useTransform(contactScroll, [0, 0.4], [80, 0]);
  const opacityContactRight = useTransform(contactScroll, [0, 0.3], [0, 1]);

  // Background glows parallax
  const yGlow1 = useTransform(scrollY, [0, 3000], [0, 300]);
  const yGlow2 = useTransform(scrollY, [0, 3000], [0, -150]);

  useEffect(() => {
    const sections = ['home-section', 'about', 'services', 'overview', 'security', 'how-we-work', 'pricing', 'contact'];
    const handleScroll = () => {
      let current = 'home-section';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Shatter sequence trigger
  const handleShatter = () => {
    if (shattering || decrypted) return;
    setShattering(true);
    toast.success("Security bypass initiated...", { icon: "🔐" });
    
    setTimeout(() => {
      setDecrypted(true);
      setShattering(false);
      toast.success("System Decrypted!", { icon: "🔓" });
      
      // Auto-scroll to Roadmap
      setTimeout(() => {
        const el = document.getElementById('how-we-work');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }, 1000);
  };

  // Contact form submission
  async function handleSubmit(formData) {
    setIsPending(true);
    const emailPromise = sendContactEmail(null, formData);

    toast.promise(emailPromise, {
      loading: 'Sending your message...',
      success: (res) => {
        if (!res.success) throw new Error(res.error);
        return res.message;
      },
      error: (err) => err.message || 'Failed to send message',
    });

    try {
      await emailPromise;
      if (formRef.current) formRef.current.reset();
    } catch (e) {
      // Handled by toast
    } finally {
      setIsPending(false);
    }
  }

  return (
    <div ref={containerRef} className="w-full flex flex-col items-center relative overflow-hidden dark:bg-[#03050B] min-h-screen">
      
      {/* Background Parallax Glow Fields */}
      <motion.div style={{ y: yGlow1 }} className="absolute inset-0 pointer-events-none hidden dark:block z-0">
        <div className="absolute top-[-5%] right-[-10%] w-[1000px] h-[1000px] bg-accent-electric/15 rounded-full blur-[140px] mix-blend-screen opacity-65" />
        <div className="absolute top-[35%] left-[-15%] w-[800px] h-[800px] bg-accent-purple/10 rounded-full blur-[140px] mix-blend-screen opacity-45" />
        <div className="absolute bottom-[20%] right-[-10%] w-[900px] h-[900px] bg-emerald-500/5 rounded-full blur-[140px] mix-blend-screen opacity-35" />
      </motion.div>

      {/* Rotating Background Stars / Interactive Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none z-0" />

      {/* Full Background Earth Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5 }}
        style={{ 
          y: yEarth, 
          scale: scaleEarth,
          maskImage: 'radial-gradient(circle at center, black 25%, transparent 70%)', 
          WebkitMaskImage: 'radial-gradient(circle at center, black 25%, transparent 70%)' 
        }}
        className="absolute top-0 right-0 w-full lg:w-[70%] h-[600px] md:h-[900px] lg:h-[1100px] pointer-events-none mix-blend-screen overflow-hidden z-0"
      >
        <Image
          src="/earth_network.png"
          alt="Global Network"
          fill
          className="object-cover object-right md:object-center"
          priority
        />
      </motion.div>

      {/* ─── 1. HERO SECTION ─── */}
      <section ref={heroRef} id="home-section" className="w-full max-w-[1400px] mx-auto px-5 md:px-10 py-16 md:py-24 flex flex-col lg:flex-row items-center justify-between relative z-10 min-h-[90vh]">
        {/* Left Hero Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          style={{ y: yHeroLeft, opacity: opacityHero }}
          className="w-full lg:w-[45%] flex flex-col items-start mt-10 lg:mt-0"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-[#38bdf8] animate-pulse" />
            <span className="text-sm font-medium text-white/90">Formatyk — Software Engineering</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance leading-[1.1] text-white">
            Custom software, automation, and ERP — <br />
            <span className="text-gradient">built around your business</span>
          </h1>

          <p className="text-lg md:text-xl text-text-secondary dark:text-slate-300 max-w-xl mb-10 text-balance leading-relaxed">
            Formatyk designs and builds custom software, business automation, and ERP systems for companies ready to move from manual, disconnected processes to systems that actually work — without the overhead of a large agency.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link href="#contact" className="relative group h-12 px-8 rounded-full bg-gradient-to-r from-[#0059b5] via-[#3b82f6] to-[#8b5cf6] text-white font-medium flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-95 w-full sm:w-auto">
              <span className="absolute inset-0 rounded-full blur-md bg-gradient-to-r from-[#0059b5] via-[#3b82f6] to-[#8b5cf6] opacity-0 group-hover:opacity-70 transition-opacity duration-500"></span>
              <span className="relative flex items-center gap-2">Get a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
            </Link>
            <Link href="#services" className="h-12 px-8 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-medium flex items-center justify-center gap-2 transition-all w-full sm:w-auto backdrop-blur-md group">
              See Our Services
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
            <p className="text-sm text-slate-400">Direct access to the team building your solution — no account managers, no middlemen.</p>
          </div>
        </motion.div>

        {/* Right Hero Visuals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="w-full lg:w-[55%] h-[350px] md:h-[600px] lg:h-[800px] relative mt-10 lg:mt-0"
        >
          {/* Floating Cards */}
          <motion.div
            style={{ y: yCard1 }}
            className="absolute top-[5%] md:top-[10%] right-[0%] md:right-[10%] w-[220px] md:w-[260px] glass-panel rounded-2xl p-3 md:p-4 z-20 scale-90 md:scale-100"
          >
            <p className="text-[10px] md:text-xs text-slate-400 mb-1">Ownership</p>
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">100%</h3>
            <p className="text-[10px] md:text-xs text-emerald-400 flex items-center gap-1">
              <Shield className="w-3 h-3 animate-pulse" /> Yours after final payment
            </p>
          </motion.div>

          <motion.div
            style={{ y: yCard2 }}
            className="absolute top-[40%] right-[-5%] w-[260px] glass-panel rounded-2xl p-4 hidden lg:block z-20"
          >
            <p className="text-xs text-slate-400 mb-1">Point of Contact</p>
            <h3 className="text-2xl font-semibold text-white mb-2">1</h3>
            <p className="text-xs text-emerald-400 flex items-center gap-1">
              <User className="w-3 h-3" /> Single contact, start to finish
            </p>
          </motion.div>

          <motion.div
            style={{ y: yCard3 }}
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

      {/* ─── 2. ABOUT SECTION (Zipper Scroll Effect with 3D Core Object) ─── */}
      <section ref={aboutRef} id="about" className="w-full max-w-[1200px] mx-auto px-5 md:px-10 py-28 relative z-10">
        
        {/* Giant horizontal sliding watermark text */}
        <motion.div 
          style={{ x: xWatermark }}
          className="absolute top-[10%] left-0 text-[10vw] font-black text-white/[0.02] tracking-[0.25em] select-none uppercase pointer-events-none whitespace-nowrap"
        >
          Built Around You
        </motion.div>

        {/* Top Header with 3D Core Reactor Object */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-24 relative z-10">
          <motion.div
            style={{ y: yAboutHeader, opacity: opacityAboutHeader }}
            className="w-full lg:w-3/5"
          >
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-accent-purple/30 bg-accent-purple/10 text-accent-purple text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3 h-3" />
              Who We Are
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white leading-tight">About Formatyk</h2>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
              Formatyk is an IT services company built around one idea: software should fit your business, not the other way around. We design and build custom software, automate repetitive workflows, and develop tailor-made ERP systems for businesses of every size. Alongside our core development work, we bring AI automation into the mix wherever it saves you real time. We work directly with our clients, keep pricing transparent, and stay involved well past launch through ongoing support.
            </p>
          </motion.div>

          {/* 3D Holographic Core Matrix Object */}
          <motion.div
            style={{ y: yAboutHeader, opacity: opacityAboutHeader }}
            className="w-full lg:w-2/5 flex justify-center"
          >
            <AboutCoreObject />
          </motion.div>
        </div>

        {/* Vision & Mission Cards with Interactive 3D/SVG Visual Objects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-24 relative z-10">
          
          {/* Vision Card with Radar Scanner Object */}
          <motion.div
            style={{ x: xVision, opacity: opacityVision }}
            className="group relative bg-surface-container-lowest p-8 md:p-10 rounded-3xl border border-white/5 hover:border-accent-electric/30 transition-all duration-500 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center group-hover:bg-accent-electric group-hover:text-white transition-colors duration-300 text-accent-electric shadow-inner">
                  <Eye className="w-6 h-6 animate-pulse" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#38bdf8] bg-accent-electric/10 border border-accent-electric/20 px-3 py-1 rounded-full">
                  OBSERVATORY
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">Our Vision</h3>
              <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-6">
                To become the go-to technology partner for small and mid-sized businesses across India — the team companies call first when they're ready to move from manual processes to fully digital, automated operations.
              </p>
            </div>

            {/* Interactive Animated Holographic Radar Object */}
            <VisionScannerObject />
          </motion.div>

          {/* Mission Card with Isometric Architecture Core Object */}
          <motion.div
            style={{ x: xMission, opacity: opacityMission }}
            className="group relative bg-surface-container-lowest p-8 md:p-10 rounded-3xl border border-white/5 hover:border-accent-purple/30 transition-all duration-500 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center group-hover:bg-accent-purple group-hover:text-white transition-colors duration-300 text-accent-purple shadow-inner">
                  <Target className="w-6 h-6 animate-pulse" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-accent-purple bg-accent-purple/10 border border-accent-purple/20 px-3 py-1 rounded-full">
                  ENGINEERING CORE
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">Our Mission</h3>
              <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-6">
                To design and deliver custom software, automation, and ERP solutions built around each client's actual workflow — not templates — so every business we work with runs leaner, faster, and with fewer manual errors.
              </p>
            </div>

            {/* Interactive Isometric Architecture Engine Object */}
            <MissionCoreObject />
          </motion.div>
        </div>

        {/* Why Choose Formatyk */}
        <motion.div
          style={{ y: yWhyChoose, opacity: opacityWhyChoose }}
          className="mb-16 relative z-10"
        >
          <div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-3 py-1 rounded-full border border-accent-purple/30 bg-accent-purple/10 text-accent-purple text-[10px] md:text-xs font-semibold uppercase tracking-wider">
            <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" />
            Why Choose Formatyk
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white">Built Around You</h2>
          <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-3xl mb-8">
            We don't sell off-the-shelf software and hope it fits. Every engagement starts with understanding how you actually work, then we design, build, and automate around that — whether it's a custom ERP, a workflow automation, or a full digital transformation. You get a solution built for your business, not a template stretched to fit it.
          </p>

          {/* Interactive Off-The-Shelf vs Formatyk Architecture Comparison Object */}
          <TemplateVsFormatykVisual />

          {/* Interactive Custom Architecture Engine */}
          <CustomArchitectureEngine activeTab={activeArchTab} setActiveTab={setActiveArchTab} />
        </motion.div>

        {/* Stat Block */}
        <motion.div
          style={{ scale: scaleStat, opacity: opacityStat }}
          className="relative bg-surface-container-lowest p-8 md:p-12 rounded-3xl border border-white/5 mb-20 shadow-2xl overflow-hidden group"
        >
          <div className="absolute -inset-[10px] bg-gradient-to-r from-accent-electric/10 to-accent-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl pointer-events-none" />
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start relative z-10">
            <div className="shrink-0">
              <div className="text-6xl md:text-8xl font-bold text-gradient leading-none mb-2">100%</div>
              <p className="text-xl font-semibold text-white">Ownership Transfer</p>
            </div>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed">
              When you work with Formatyk, you're working directly with the team building your solution — not an account manager passing your project down the chain. Full ownership of the final code and design transfers to you once payment is complete, so there's no vendor lock-in. Every project runs on a clear, milestone-based process, so you always know exactly what stage you're at and what's coming next.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ─── 3. SERVICES SECTION (Zipper Scroll Effect) ─── */}
      <section ref={servicesRef} id="services" className="w-full max-w-[1200px] mx-auto px-5 md:px-10 py-28 relative z-10">
        <motion.div
          style={{ y: yServicesHeader, opacity: opacityServicesHeader }}
          className="max-w-2xl mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-accent-purple/30 bg-accent-purple/10 text-accent-purple text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3 h-3" />
            Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white leading-tight">Our Services</h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Individually or combined into one solution — everything we offer is built around your exact business process, not a one-size-fits-all package.
          </p>
        </motion.div>

        {/* 4 Cards Zipper Scroll Entrance with Live Interactive Micro-Visuals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {[
            { ...data.services[0], opacity: opacityService1, y: yService1, scale: scaleService1, typeId: 'it-services' },
            { ...data.services[1], opacity: opacityService2, y: yService2, scale: scaleService2, typeId: 'automation' },
            { ...data.services[2], opacity: opacityService3, y: yService3, scale: scaleService3, typeId: 'custom-erp' },
            { ...data.services[3], opacity: opacityService4, y: yService4, scale: scaleService4, typeId: 'ai-solutions' },
          ].map((service) => {
            const Icon = serviceIconMap[service.icon] || Code;
            return (
              <motion.div 
                key={service.id}
                style={{ opacity: service.opacity, y: service.y, scale: service.scale }}
                className="group relative bg-surface-container-lowest p-8 rounded-3xl border border-white/5 hover:border-accent-electric/30 transition-colors duration-500 hover:shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center group-hover:bg-accent-electric group-hover:text-white transition-colors duration-300 text-accent-electric shadow-inner">
                      <Icon className="w-6 h-6 animate-pulse" />
                    </div>
                    <span className="text-4xl font-bold text-white/5 group-hover:text-accent-electric/10 transition-colors select-none">{service.number}</span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-4">{service.description}</p>
                </div>

                {/* Micro Animated Object for each Service */}
                <ServiceMicroVisual type={service.typeId} />
                
                <div className="w-full h-[1px] bg-white/5 mt-4" />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ─── 4. DASHBOARD PREVIEW ─── */}
      <section ref={dashboardRef} id="overview" className="w-full max-w-[1200px] mx-auto px-5 md:px-10 py-24 relative z-10 flex flex-col items-center">
        {/* Glow floor effect */}
        <div className="absolute bottom-[-10%] w-[150%] max-w-[1400px] h-[300px] flex items-center justify-center pointer-events-none opacity-60">
          <div className="absolute w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent shadow-[0_0_20px_5px_rgba(59,130,246,0.6)]" />
          <div className="absolute w-[60%] h-[100px] bg-[#3b82f6]/20 rounded-[100%] blur-[40px]" />
          <div className="absolute w-[40%] h-[50px] bg-[#38bdf8]/30 rounded-[100%] blur-[20px]" />
          <div className="absolute w-[70%] h-[80px] rounded-[100%] border border-[#3b82f6]/30 shadow-[0_0_15px_rgba(59,130,246,0.4)]" />
          <div className="absolute w-[50%] h-[50px] rounded-[100%] border border-[#8b5cf6]/40 shadow-[0_0_20px_rgba(139,92,246,0.5)]" />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center w-full mt-10 md:mt-0">
          <motion.div
            style={{ x: xDashboardText, opacity: opacityDashboardText }}
            className="w-full lg:w-2/5 flex flex-col items-start px-2"
          >
            <div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-3 py-1 rounded-full border border-accent-purple/30 bg-accent-purple/10 text-accent-purple text-[10px] md:text-xs font-semibold uppercase tracking-wider">
              <Layers className="w-3 h-3 md:w-4 md:h-4" />
              Integrated Systems
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 md:mb-8 text-white text-balance leading-[1.15]">
              Built around how you <span className="text-gradient font-extrabold">actually</span> work
            </h2>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-md">
              We start with a discovery call to understand your business, then design, build, and test your solution in phases with regular updates — then deploy it and support it after launch.
            </p>

            <Link href="#services" className="flex items-center gap-4 cursor-pointer group">
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
            style={{ x: xDashboardCard, opacity: opacityDashboardCard, rotate: rotateDashboardCard }}
            className="w-full lg:w-3/5 relative z-10 px-2"
          >
            {/* Outer glowing border container */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-3xl md:rounded-[2.5rem] p-[1px] md:p-[2px] bg-gradient-to-br from-[#3b82f6]/50 via-[#0a0f1d] to-[#8b5cf6]/50 shadow-[0_0_30px_-5px_rgba(59,130,246,0.4)] md:shadow-[0_0_50px_-10px_rgba(59,130,246,0.5)] rotate-0 lg:rotate-[2deg] hover:rotate-0 transition-transform duration-700 ease-out"
            >
              <div className="bg-[#030612] rounded-[1.4rem] md:rounded-[2.4rem] p-4 sm:p-6 md:p-8 relative overflow-hidden backdrop-blur-xl">
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

      {/* ─── 5. INTERACTIVE SECURITY SHATTER LOCK ─── */}
      <section id="security" className="w-full py-24 relative z-10 flex flex-col items-center justify-center min-h-[60vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 max-w-xl"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-semibold uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5 animate-pulse" />
            Security Shield Active
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">Click to Decrypt Process</h2>
          <p className="text-slate-400 text-sm">
            Our delivery pipeline is secure and fully owned by you. Click the prism core below to unlock our detailed execution roadmap.
          </p>
        </motion.div>

        {/* The Decrypting Prism */}
        <div className="relative w-[300px] h-[300px] flex items-center justify-center cursor-pointer select-none" onClick={handleShatter}>
          <AnimatePresence>
            {!decrypted && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.2, opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* 3D Glass Hexagonal Prism using SVGs */}
                <svg className="w-[180px] h-[180px] filter drop-shadow-[0_0_30px_rgba(139,92,246,0.6)]" viewBox="0 0 100 100">
                  <motion.polygon
                    points="50,10 85,35 50,60"
                    fill="rgba(139,92,246,0.25)"
                    stroke="#8b5cf6"
                    strokeWidth="1.5"
                    animate={shattering ? { x: 30, y: -30, rotate: 45, opacity: 0 } : { y: [0, -3, 0] }}
                    transition={shattering ? { duration: 0.5 } : { repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  />
                  <motion.polygon
                    points="50,10 15,35 50,60"
                    fill="rgba(56,189,248,0.25)"
                    stroke="#38bdf8"
                    strokeWidth="1.5"
                    animate={shattering ? { x: -30, y: -30, rotate: -45, opacity: 0 } : { y: [0, 3, 0] }}
                    transition={shattering ? { duration: 0.5 } : { repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.2 }}
                  />
                  <motion.polygon
                    points="50,90 85,35 50,60"
                    fill="rgba(59,130,246,0.25)"
                    stroke="#3b82f6"
                    strokeWidth="1.5"
                    animate={shattering ? { x: 30, y: 30, rotate: -45, opacity: 0 } : { y: [0, -2, 0] }}
                    transition={shattering ? { duration: 0.5 } : { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.4 }}
                  />
                  <motion.polygon
                    points="50,90 15,35 50,60"
                    fill="rgba(236,72,153,0.25)"
                    stroke="#ec4899"
                    strokeWidth="1.5"
                    animate={shattering ? { x: -30, y: 30, rotate: 45, opacity: 0 } : { y: [0, 2, 0] }}
                    transition={shattering ? { duration: 0.5 } : { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.6 }}
                  />
                </svg>

                {/* Pulse Ring */}
                <div className="absolute w-[180px] h-[180px] rounded-full border border-accent-purple/30 animate-ping opacity-30 pointer-events-none" />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {decrypted && (
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute flex flex-col items-center gap-3 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                  <Unlock className="w-7 h-7" />
                </div>
                <span className="text-sm font-bold text-emerald-400 uppercase tracking-widest animate-pulse">DECRYPTION SUCCESSFUL</span>
                <span className="text-xs text-slate-400">Loading process roadmap...</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Interactive Core State text */}
          {!decrypted && !shattering && (
            <div className="absolute bottom-4 text-center">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.25em] animate-pulse">CLICK CORE TO DECRYPT</span>
            </div>
          )}
        </div>
      </section>

      {/* ─── 6. ROADMAP TIMELINE ─── */}
      <AnimatePresence>
        {decrypted && (
          <motion.section 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            id="how-we-work" 
            className="w-full relative z-10 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#060914] to-transparent pointer-events-none z-0" />
            <HowWeWorkTimeline />
          </motion.section>
        )}
      </AnimatePresence>

      {/* ─── 7. PRICING SECTION (Zipper Scroll Effect & Milestone Vault) ─── */}
      <section ref={pricingRef} id="pricing" className="w-full max-w-[1200px] mx-auto px-5 md:px-10 py-28 relative z-10 flex flex-col items-center">
        <motion.div
          style={{ y: yPricingHeader, opacity: opacityPricingHeader }}
          className="text-center max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-accent-electric/30 bg-accent-electric/10 text-accent-electric text-xs font-semibold uppercase tracking-wider">
            <BarChart3 className="w-3.5 h-3.5" />
            Pricing Architecture
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white leading-tight">Transparent Pricing</h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            No fixed packages or hidden fees. Every project is scoped and priced based on your exact requirements.
          </p>
        </motion.div>

        {/* Main Pricing Card with Glow Border */}
        <motion.div
          style={{ scale: scalePricingCard, opacity: opacityPricingCard }}
          className="relative w-full max-w-xl p-8 md:p-10 rounded-3xl bg-surface-container-lowest border-2 border-accent-electric shadow-[0_20px_60px_rgb(0,113,227,0.15)] mb-20 group overflow-hidden"
        >
          <div className="absolute -inset-[10px] bg-gradient-to-r from-accent-electric/10 via-accent-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl pointer-events-none" />
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent-electric text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
            Projects Starting From
          </div>

          <div className="text-center mt-4 relative z-10">
            <div className="flex items-baseline justify-center gap-1 mb-4">
              <span className="text-5xl md:text-6xl font-bold text-white tracking-tight">₹25,000/-</span>
            </div>
            <p className="text-text-secondary text-sm mb-6">
              Final pricing depends on your exact requirements and project scope.
            </p>
            <p className="text-text-secondary text-sm leading-relaxed mb-8 max-w-md mx-auto">
              Every project is different, so we don't work off fixed packages. Once we understand your requirement and walk you through a demo, we'll finalize the exact scope and pricing together.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center w-full h-12 rounded-full bg-accent-electric text-white font-medium transition-transform hover:scale-105 active:scale-95 gap-2 shadow-lg"
            >
              Book a Discovery Call <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <ul className="space-y-4 mt-8 pt-8 border-t border-white/5 relative z-10">
            {[
              '100% ownership transfer after final payment',
              'Single point of contact throughout the project',
              '7-step process, fully transparent from day one',
              'Optional retainer for ongoing support post-launch',
            ].map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                <Check className="w-5 h-5 shrink-0 text-accent-electric" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Interactive Payment Milestones Vault Visualizer */}
        <motion.div
          style={{ y: yMilestonesHeader, opacity: opacityMilestonesHeader }}
          className="w-full mb-6"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-center mb-12 text-white">Payment Milestones</h3>
        </motion.div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch relative z-10 mb-16">
          {[
            { percentage: '40%', label: 'Advance', desc: 'Paid on project kickoff to begin discovery, planning, and initial development.', opacity: opacityMilestone1, y: yMilestone1, scale: scaleMilestone1, icon: Key, badge: 'STAGE 01' },
            { percentage: '30%', label: 'On Design Approval', desc: 'Due once the design mockups and system architecture are reviewed and approved.', opacity: opacityMilestone2, y: yMilestone2, scale: scaleMilestone2, icon: FileCode, badge: 'STAGE 02' },
            { percentage: '30%', label: 'On Final Delivery', desc: 'Paid upon project completion, testing, and full ownership transfer to you.', opacity: opacityMilestone3, y: yMilestone3, scale: scaleMilestone3, icon: Shield, badge: 'STAGE 03' }
          ].map((milestone, idx) => {
            const MilestoneIcon = milestone.icon;
            return (
              <motion.div
                key={idx}
                style={{ opacity: milestone.opacity, y: milestone.y, scale: milestone.scale }}
                className="relative p-8 rounded-3xl bg-surface border border-white/5 shadow-lg flex flex-col justify-between text-center hover:border-accent-electric/30 transition-all duration-500 hover:shadow-2xl group overflow-hidden"
              >
                <div className="absolute top-3 right-3 text-[9px] font-mono text-slate-500 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                  {milestone.badge}
                </div>
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 mx-auto flex items-center justify-center text-accent-electric mb-4 group-hover:scale-110 transition-transform">
                    <MilestoneIcon className="w-6 h-6" />
                  </div>
                  <div className="text-4xl font-bold text-accent-electric mb-2">{milestone.percentage}</div>
                  <h4 className="text-xl font-semibold mb-3 text-white">{milestone.label}</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">{milestone.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 text-[10px] font-mono text-emerald-400 flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3" /> Guaranteed Deliverable Handoff
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Milestone Escrow Timeline Pathway */}
        <PricingMilestoneVault />
      </section>

      {/* ─── 8. CONTACT SECTION (Zipper Scroll Effect & Global Relay) ─── */}
      <section ref={contactRef} id="contact" className="w-full max-w-[1200px] mx-auto px-5 md:px-10 py-28 flex flex-col lg:flex-row gap-16 relative z-10">
        <motion.div
          style={{ x: xContactLeft, opacity: opacityContactLeft }}
          className="w-full lg:w-1/2 flex flex-col justify-between"
        >
          <div>
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-accent-purple/30 bg-accent-purple/10 text-accent-purple text-xs font-semibold uppercase tracking-wider">
              <Headset className="w-3.5 h-3.5" />
              Direct Engineering Line
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white leading-tight">Contact Us</h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              We look forward to building your next custom software solution. Get in touch with us to start.
            </p>
          </div>

          {/* Interactive Global Communications Terminal Object */}
          <ContactRelayTerminal />
        </motion.div>

        <motion.div
          style={{ x: xContactRight, opacity: opacityContactRight }}
          className="w-full lg:w-1/2 bg-surface-container-lowest p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden"
        >
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/5">
            <span className="text-xs font-mono text-slate-400 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-[#38bdf8]" /> DIRECT DISPATCH
            </span>
            <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> LIVE ENCRYPTED
            </span>
          </div>

          <AnimatePresence>
            {isPending && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-surface-container-lowest/85 backdrop-blur-sm"
              >
                <Loader2 className="w-16 h-16 text-accent-electric animate-spin mb-4" />
                <p className="text-lg font-medium text-white animate-pulse">Sending your message...</p>
              </motion.div>
            )}
          </AnimatePresence>

          <form ref={formRef} className="space-y-6 relative z-0" action={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">First Name</label>
                <input name="firstName" required type="text" className="w-full h-12 px-4 rounded-xl bg-surface-container-low border border-white/5 focus:border-accent-electric focus:bg-surface-container-lowest outline-none transition-colors text-white" placeholder="Jane" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Last Name</label>
                <input name="lastName" required type="text" className="w-full h-12 px-4 rounded-xl bg-surface-container-low border border-white/5 focus:border-accent-electric focus:bg-surface-container-lowest outline-none transition-colors text-white" placeholder="Doe" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Work Email</label>
              <input name="email" required type="email" className="w-full h-12 px-4 rounded-xl bg-surface-container-low border border-white/5 focus:border-accent-electric focus:bg-surface-container-lowest outline-none transition-colors text-white" placeholder="jane@company.com" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white">How can we help?</label>
              <textarea name="message" required className="w-full h-32 p-4 rounded-xl bg-surface-container-low border border-white/5 focus:border-accent-electric focus:bg-surface-container-lowest outline-none transition-colors resize-none text-white" placeholder="Tell us about your project requirements or system goals..."></textarea>
            </div>

            <button disabled={isPending} className="w-full h-12 rounded-full bg-accent-electric text-white font-medium flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98] mt-4 disabled:opacity-70 disabled:hover:scale-100 cursor-none shadow-lg">
              {isPending ? (
                <>Sending...</>
              ) : (
                <>Send Message <Send className="w-4 h-4" /></>
              )}
            </button>
          </form>
        </motion.div>
      </section>

      {/* Bottom Progress Timeline Tracker */}
      <BottomTimeline />

    </div>
  );
}

/* ─── 3D Holographic Core Reactor Object for About Header ─── */
function AboutCoreObject() {
  return (
    <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] flex items-center justify-center">
      {/* Outer ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-electric/20 via-accent-purple/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Rotating 3D Gyro Rings */}
      <svg className="w-full h-full" viewBox="0 0 300 300">
        {/* Ring 1 - Tilt 45 */}
        <motion.ellipse
          cx="150" cy="150" rx="120" ry="45"
          fill="none" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1.5" strokeDasharray="8 6"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ originX: "150px", originY: "150px" }}
        />
        {/* Ring 2 - Tilt -45 */}
        <motion.ellipse
          cx="150" cy="150" rx="120" ry="45"
          fill="none" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="1.5" strokeDasharray="6 8"
          animate={{ rotate: -360 }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          style={{ originX: "150px", originY: "150px" }}
        />
        {/* Vertical ring */}
        <motion.ellipse
          cx="150" cy="150" rx="50" ry="125"
          fill="none" stroke="rgba(236, 72, 153, 0.3)" strokeWidth="1"
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          style={{ originX: "150px", originY: "150px" }}
        />
        {/* Central Core Tesseract Wireframe */}
        <motion.rect
          x="115" y="115" width="70" height="70" rx="16"
          fill="rgba(10, 15, 30, 0.85)" stroke="#38bdf8" strokeWidth="2"
          animate={{ rotate: [0, 90, 180, 270, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{ originX: "150px", originY: "150px" }}
        />
        <motion.rect
          x="125" y="125" width="50" height="50" rx="10"
          fill="rgba(59, 130, 246, 0.2)" stroke="#8b5cf6" strokeWidth="1.5"
          animate={{ rotate: [360, 270, 180, 90, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ originX: "150px", originY: "150px" }}
        />
        <circle cx="150" cy="150" r="10" fill="#38bdf8" className="animate-ping" />
        <circle cx="150" cy="150" r="6" fill="#ffffff" />
      </svg>

      {/* Orbiting Telemetry Chips */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-2 right-2 glass-panel px-3 py-1.5 rounded-xl border border-white/10 text-[9px] font-mono text-[#38bdf8] flex items-center gap-1.5 shadow-lg backdrop-blur-md"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
        BESPOKE ENGINE
      </motion.div>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-4 left-2 glass-panel px-3 py-1.5 rounded-xl border border-white/10 text-[9px] font-mono text-emerald-400 flex items-center gap-1.5 shadow-lg backdrop-blur-md"
      >
        <Shield className="w-3 h-3" />
        100% OWNERSHIP
      </motion.div>
    </div>
  );
}

/* ─── Vision Holographic Radar Scanner Object ─── */
function VisionScannerObject() {
  return (
    <div className="relative w-full h-[180px] sm:h-[210px] flex items-center justify-center overflow-hidden rounded-2xl bg-[#030612]/70 border border-white/5 my-4 group">
      {/* Background Radial Glow */}
      <div className="absolute w-[180px] h-[180px] bg-accent-electric/15 rounded-full blur-[40px] pointer-events-none" />
      
      <svg className="w-[170px] h-[170px]" viewBox="0 0 200 200">
        {/* Outer dashed orbital ring */}
        <motion.circle
          cx="100" cy="100" r="85"
          fill="none" stroke="rgba(56, 189, 248, 0.25)"
          strokeWidth="1.5" strokeDasharray="6 8"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ originX: "100px", originY: "100px" }}
        />
        {/* Mid orbital ring */}
        <motion.circle
          cx="100" cy="100" r="60"
          fill="none" stroke="rgba(139, 92, 246, 0.3)"
          strokeWidth="1.5" strokeDasharray="4 6"
          animate={{ rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          style={{ originX: "100px", originY: "100px" }}
        />
        {/* Inner solid ring */}
        <circle cx="100" cy="100" r="35" fill="none" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1" />
        <circle cx="100" cy="100" r="8" fill="rgba(56, 189, 248, 0.8)" className="animate-pulse" />
        
        {/* Radar Scanner Beam */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          style={{ originX: "100px", originY: "100px" }}
        >
          <path
            d="M 100 100 L 185 100 A 85 85 0 0 0 160 40 Z"
            fill="url(#radar-beam)"
            opacity="0.65"
          />
          <line x1="100" y1="100" x2="185" y2="100" stroke="#38bdf8" strokeWidth="1.5" />
        </motion.g>
        
        {/* Coordinate crosshairs */}
        <line x1="15" y1="100" x2="185" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="2 4" />
        <line x1="100" y1="15" x2="100" y2="185" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="2 4" />
        
        {/* Radar ping dots */}
        <motion.circle
          cx="140" cy="70" r="3.5"
          fill="#38bdf8"
          animate={{ scale: [1, 2, 1], opacity: [1, 0.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.circle
          cx="65" cy="135" r="3.5"
          fill="#8b5cf6"
          animate={{ scale: [1, 2, 1], opacity: [1, 0.2, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        />

        <defs>
          <radialGradient id="radar-beam" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(56, 189, 248, 0.6)" />
            <stop offset="100%" stopColor="rgba(56, 189, 248, 0)" />
          </radialGradient>
        </defs>
      </svg>

      {/* Floating HUD chips */}
      <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] text-[#38bdf8] font-mono">
        <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-ping" />
        <span>PAN-INDIA REACH</span>
      </div>
      <div className="absolute bottom-3 right-3 text-[9px] text-slate-400 font-mono bg-[#030612]/80 px-2 py-0.5 rounded border border-white/5">
        EXPANSION: ACTIVE
      </div>
    </div>
  );
}

/* ─── Mission Isometric Architecture Engine Object ─── */
function MissionCoreObject() {
  return (
    <div className="relative w-full h-[180px] sm:h-[210px] flex items-center justify-center overflow-hidden rounded-2xl bg-[#030612]/70 border border-white/5 my-4 group">
      {/* Background Radial Glow */}
      <div className="absolute w-[180px] h-[180px] bg-accent-purple/15 rounded-full blur-[40px] pointer-events-none" />

      {/* Isometric Engine SVG */}
      <svg className="w-[180px] h-[170px]" viewBox="0 0 200 180">
        {/* Layer 3 - Bottom Base */}
        <motion.g
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <polygon points="100,150 160,120 100,90 40,120" fill="rgba(15, 23, 42, 0.85)" stroke="#334155" strokeWidth="1.5" />
          <polygon points="40,120 100,150 100,165 40,135" fill="rgba(10, 15, 29, 0.95)" stroke="#1e293b" strokeWidth="1" />
          <polygon points="100,150 160,120 160,135 100,165" fill="rgba(6, 9, 19, 0.95)" stroke="#1e293b" strokeWidth="1" />
        </motion.g>

        {/* Layer 2 - Middle Engine */}
        <motion.g
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        >
          <polygon points="100,115 150,90 100,65 50,90" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="1.5" />
          <line x1="75" y1="78" x2="125" y2="103" stroke="rgba(56,189,248,0.6)" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="125" y1="78" x2="75" y2="103" stroke="rgba(139,92,246,0.6)" strokeWidth="1" strokeDasharray="3 3" />
        </motion.g>

        {/* Layer 1 - Top Core Cube */}
        <motion.g
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        >
          <polygon points="100,75 135,58 100,40 65,58" fill="rgba(139, 92, 246, 0.35)" stroke="#8b5cf6" strokeWidth="1.5" />
          <polygon points="65,58 100,75 100,90 65,73" fill="rgba(139, 92, 246, 0.25)" stroke="#8b5cf6" strokeWidth="1" />
          <polygon points="100,75 135,58 135,73 100,90" fill="rgba(139, 92, 246, 0.2)" stroke="#8b5cf6" strokeWidth="1" />
          <circle cx="100" cy="57" r="4" fill="#38bdf8" className="animate-ping" />
        </motion.g>

        {/* Connecting Vertical Energy Beams */}
        <motion.line
          x1="100" y1="40" x2="100" y2="150"
          stroke="url(#vertical-beam)" strokeWidth="2" strokeDasharray="4 4"
          animate={{ strokeDashoffset: [0, -20] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />

        <defs>
          <linearGradient id="vertical-beam" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating HUD chips */}
      <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] text-accent-purple font-mono">
        <span className="w-1.5 h-1.5 rounded-full bg-accent-purple animate-pulse" />
        <span>ZERO TEMPLATES</span>
      </div>
      <div className="absolute bottom-3 right-3 text-[9px] text-emerald-400 font-mono bg-[#030612]/80 px-2 py-0.5 rounded border border-white/5">
        ERROR REDUCTION: 99.4%
      </div>
    </div>
  );
}

/* ─── Interactive Off-The-Shelf vs Formatyk Architecture Comparison Object ─── */
function TemplateVsFormatykVisual() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 relative z-10">
      {/* Generic Templates Card */}
      <div className="bg-[#050811] p-6 sm:p-8 rounded-3xl border border-red-500/20 shadow-inner relative overflow-hidden">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-wider mb-6">
          <XCircle className="w-3.5 h-3.5" />
          Off-the-shelf software
        </div>
        <ul className="space-y-4 text-sm text-slate-400 leading-relaxed">
          <li className="flex items-start gap-3">
            <span className="text-red-400 font-bold text-base leading-none">✕</span>
            <span>Rigid, template workflows that force your team to change how you work.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-400 font-bold text-base leading-none">✕</span>
            <span>High recurring monthly per-seat licensing fees that grow as you hire.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-400 font-bold text-base leading-none">✕</span>
            <span>Vendor lock-in with zero ownership of underlying architecture or code.</span>
          </li>
        </ul>
      </div>

      {/* Formatyk Custom Engine Card */}
      <div className="bg-[#060b1e] p-6 sm:p-8 rounded-3xl border border-accent-electric/40 shadow-[0_0_35px_-5px_rgba(59,130,246,0.3)] relative overflow-hidden group">
        <div className="absolute -inset-1 bg-gradient-to-r from-accent-electric/20 via-accent-purple/20 to-transparent blur-lg opacity-50 pointer-events-none" />
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-electric/15 border border-accent-electric/30 text-[#38bdf8] text-xs font-semibold uppercase tracking-wider mb-6 relative z-10">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          The Formatyk Way
        </div>
        <ul className="space-y-4 text-sm text-slate-200 leading-relaxed relative z-10">
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold text-base leading-none">✓</span>
            <span>100% tailor-made to match your team's exact real-world business workflow.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold text-base leading-none">✓</span>
            <span>Predictable milestone-based pricing with zero hidden recurring seat fees.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-emerald-400 font-bold text-base leading-none">✓</span>
            <span>Full 100% ownership of source code and design transferred directly to you.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

/* ─── Interactive Custom Architecture Blueprint Engine ─── */
function CustomArchitectureEngine({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'erp', label: 'Custom ERP', icon: Database },
    { id: 'automation', label: 'Workflow Engine', icon: Zap },
    { id: 'ai', label: 'AI Endpoints', icon: Cpu },
    { id: 'ownership', label: 'Ownership Vault', icon: Shield },
  ];

  return (
    <div className="w-full bg-[#050814] rounded-3xl border border-white/10 p-6 sm:p-8 relative overflow-hidden my-10 shadow-2xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-white/5 gap-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#38bdf8] block mb-1">INTERACTIVE BLUEPRINT</span>
          <h4 className="text-xl font-bold text-white">How Your Custom System Connects</h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const TabIcon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                  isActive 
                    ? 'bg-accent-electric text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]' 
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <TabIcon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Blueprint Content Stage */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-2 space-y-4">
          {activeTab === 'erp' && (
            <div className="space-y-3">
              <h5 className="text-lg font-semibold text-white flex items-center gap-2">
                <Database className="w-5 h-5 text-[#38bdf8]" /> Modular Business Logic Engine
              </h5>
              <p className="text-slate-400 text-sm leading-relaxed">
                Rather than forcing your sales, inventory, and accounting into separate third-party subscriptions, Formatyk engineers a unified single-database solution tailored to your operational hierarchy.
              </p>
              <div className="grid grid-cols-3 gap-2 pt-2">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-center">
                  <span className="text-[9px] text-slate-500 block font-mono">DATABASE</span>
                  <span className="text-xs font-bold text-white">PostgreSQL / Redis</span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-center">
                  <span className="text-[9px] text-slate-500 block font-mono">LATENCY</span>
                  <span className="text-xs font-bold text-emerald-400">&lt; 20ms Query</span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-center">
                  <span className="text-[9px] text-slate-500 block font-mono">LICENSES</span>
                  <span className="text-xs font-bold text-[#38bdf8]">Zero Per-Seat</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'automation' && (
            <div className="space-y-3">
              <h5 className="text-lg font-semibold text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#ec4899]" /> Event-Driven Workflow Pipelines
              </h5>
              <p className="text-slate-400 text-sm leading-relaxed">
                Automate invoice generation, customer notification triggers, order dispatch sync, and CRM updates without manual human data entry.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-white/5 p-3 rounded-xl border border-white/5">
                <span className="text-emerald-400">Trigger: Order Placed</span> ➔ <span className="text-[#38bdf8]">ERP Updated</span> ➔ <span className="text-purple-400">WhatsApp Alert Sent</span>
              </div>
            </div>
          )}

          {activeTab === 'ai' && (
            <div className="space-y-3">
              <h5 className="text-lg font-semibold text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-purple-400" /> Embedded Autonomous AI Agents
              </h5>
              <p className="text-slate-400 text-sm leading-relaxed">
                Plug AI intelligence directly where it saves hours: automated document OCR parsing, customer support bots trained on your company knowledge, and predictive reporting.
              </p>
              <div className="grid grid-cols-2 gap-2 pt-2">
                <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20 text-xs font-mono text-purple-300">
                  ⚡ Smart Document Processing
                </div>
                <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 text-xs font-mono text-blue-300">
                  ⚡ 24/7 Context-Aware Chatbot
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ownership' && (
            <div className="space-y-3">
              <h5 className="text-lg font-semibold text-white flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-400" /> 100% Cryptographic Code Handoff
              </h5>
              <p className="text-slate-400 text-sm leading-relaxed">
                You receive full admin rights to your GitHub repo, database credentials, server deployments, and design assets upon milestone completion.
              </p>
              <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-xs font-mono text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Full IP Ownership + Deployment Keys Transferred
              </div>
            </div>
          )}
        </div>

        {/* Blueprint Visual Graphic */}
        <div className="h-44 rounded-2xl bg-[#030612] border border-white/5 p-4 flex flex-col justify-center items-center relative overflow-hidden group">
          <div className="absolute w-24 h-24 bg-accent-electric/20 rounded-full blur-2xl" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="w-24 h-24 rounded-full border border-dashed border-accent-electric/40 flex items-center justify-center"
          >
            <div className="w-16 h-16 rounded-full border border-accent-purple/50 flex items-center justify-center bg-surface">
              <Box className="w-6 h-6 text-[#38bdf8]" />
            </div>
          </motion.div>
          <span className="text-[10px] font-mono text-slate-400 mt-3">CUSTOM STACK ACTIVE</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Micro Interactive Visuals for each Service Card ─── */
function ServiceMicroVisual({ type }) {
  if (type === 'it-services') {
    return (
      <div className="w-full h-28 rounded-2xl bg-[#030612] border border-white/5 p-3 flex flex-col justify-between overflow-hidden relative font-mono text-[11px] my-3">
        <div className="flex items-center justify-between text-slate-500 pb-1.5 border-b border-white/5">
          <span className="flex items-center gap-1.5 text-slate-300"><Terminal className="w-3 h-3 text-[#38bdf8]" /> architecture.ts</span>
          <span className="text-[9px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">COMPILED</span>
        </div>
        <div className="space-y-1 text-slate-400">
          <p><span className="text-[#8b5cf6]">const</span> system = <span className="text-[#38bdf8]">buildCustomEngine</span>();</p>
          <p className="text-emerald-400/90">&gt; <span className="text-white">Architecture:</span> 100% bespoke stack</p>
        </div>
        <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#3b82f6] via-[#38bdf8] to-[#8b5cf6]"
            animate={{ width: ["0%", "100%", "0%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    );
  }
  if (type === 'automation') {
    return (
      <div className="w-full h-28 rounded-2xl bg-[#030612] border border-white/5 p-3 flex items-center justify-between overflow-hidden relative my-3">
        <div className="flex flex-col items-center gap-1">
          <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-inner">
            <Zap className="w-4 h-4" />
          </div>
          <span className="text-[9px] text-slate-400 font-mono">Trigger</span>
        </div>
        <div className="flex-1 px-2 flex items-center relative">
          <div className="w-full h-[2px] bg-white/10" />
          <motion.div
            className="absolute w-2.5 h-2.5 rounded-full bg-[#38bdf8] shadow-[0_0_10px_rgba(56,189,248,0.9)]"
            animate={{ left: ["0%", "90%", "0%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-inner">
            <Cpu className="w-4 h-4" />
          </div>
          <span className="text-[9px] text-slate-400 font-mono">AI Logic</span>
        </div>
        <div className="flex-1 px-2 flex items-center relative">
          <div className="w-full h-[2px] bg-white/10" />
          <motion.div
            className="absolute w-2.5 h-2.5 rounded-full bg-[#ec4899] shadow-[0_0_10px_rgba(236,72,153,0.9)]"
            animate={{ left: ["0%", "90%", "0%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-inner">
            <Database className="w-4 h-4" />
          </div>
          <span className="text-[9px] text-slate-400 font-mono">Auto Sync</span>
        </div>
      </div>
    );
  }
  if (type === 'custom-erp') {
    return (
      <div className="w-full h-28 rounded-2xl bg-[#030612] border border-white/5 p-3 flex flex-col justify-between overflow-hidden relative my-3">
        <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono pb-1 border-b border-white/5">
          <span>ERP MODULES</span>
          <span className="text-[#38bdf8] flex items-center gap-1"><Activity className="w-3 h-3" /> LIVE SYNC</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: 'Inventory', val: '99.8%', color: 'text-blue-400' },
            { label: 'Finance', val: 'Auto', color: 'text-purple-400' },
            { label: 'Orders', val: 'Active', color: 'text-emerald-400' },
          ].map((m, idx) => (
            <div key={idx} className="bg-white/5 rounded-lg p-1 text-center border border-white/5">
              <span className="text-[8px] text-slate-500 block font-mono">{m.label}</span>
              <span className={`text-[10px] font-bold ${m.color}`}>{m.val}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between text-[9px] text-slate-400 font-mono">
          <span className="text-emerald-400">● Zero Disconnected Silos</span>
          <span>100% Tailored</span>
        </div>
      </div>
    );
  }
  if (type === 'ai-solutions') {
    return (
      <div className="w-full h-28 rounded-2xl bg-[#030612] border border-white/5 p-3 flex items-center justify-between overflow-hidden relative my-3">
        <div className="relative w-full h-full flex items-center justify-around">
          <motion.div
            className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/40 flex items-center justify-center text-purple-400 shadow-[0_0_15px_rgba(139,92,246,0.3)]"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Bot className="w-5 h-5" />
          </motion.div>
          <div className="flex flex-col gap-1 text-[10px] font-mono">
            <div className="flex items-center gap-1.5 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-electric animate-ping" /> Smart Routing
            </div>
            <div className="flex items-center gap-1.5 text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Automated Extraction
            </div>
            <div className="flex items-center gap-1.5 text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" /> Real-time Agents
            </div>
          </div>
          <div className="px-2.5 py-1 rounded-full bg-accent-purple/10 border border-accent-purple/30 text-[9px] font-bold text-accent-purple font-mono">
            ACTIVE AI
          </div>
        </div>
      </div>
    );
  }
  return null;
}

/* ─── Interactive Milestone Escrow Pathway for Pricing ─── */
function PricingMilestoneVault() {
  return (
    <div className="w-full bg-[#050814] rounded-3xl border border-white/10 p-6 sm:p-8 relative overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/5">
        <div className="flex items-center gap-2">
          <LockKeyhole className="w-4 h-4 text-accent-electric" />
          <span className="text-xs font-mono uppercase tracking-widest text-white">ESCROW MILESTONE PIPELINE</span>
        </div>
        <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          ZERO VENDOR RISK
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        <div className="p-4 bg-white/5 rounded-2xl border border-white/5 space-y-2">
          <div className="text-xs font-mono text-[#38bdf8]">01. KICKOFF ADVANCE (40%)</div>
          <p className="text-xs text-slate-400">Funds architecture drafting, requirements documentation, database schemas & UI wireframes.</p>
        </div>
        <div className="p-4 bg-white/5 rounded-2xl border border-white/5 space-y-2">
          <div className="text-xs font-mono text-purple-400">02. DESIGN APPROVAL (30%)</div>
          <p className="text-xs text-slate-400">Triggered only once you inspect and approve the system design prototypes and live staging server.</p>
        </div>
        <div className="p-4 bg-white/5 rounded-2xl border border-white/5 space-y-2">
          <div className="text-xs font-mono text-emerald-400">03. FINAL DELIVERY (30%)</div>
          <p className="text-xs text-slate-400">Final payment on production deployment and 100% full source code ownership handoff to your team.</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Global Communications Terminal for Contact ─── */
function ContactRelayTerminal() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const istTime = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: true });
      setTime(istTime);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#050814] rounded-3xl border border-white/10 p-6 space-y-5 shadow-2xl relative overflow-hidden">
      <div className="flex items-center justify-between text-xs font-mono pb-3 border-b border-white/5">
        <span className="text-[#38bdf8] flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5" /> INDIA HQ RELAY
        </span>
        <span className="text-slate-400 flex items-center gap-1">
          <Clock className="w-3 h-3 text-emerald-400" /> {time || 'IST ACTIVE'}
        </span>
      </div>

      <div className="space-y-3">
        <a 
          href="https://wa.me/916351902265" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 hover:border-emerald-500/60 hover:bg-emerald-500/15 transition-all flex items-center justify-between group cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-emerald-400 block">INSTANT WHATSAPP</span>
              <span className="text-sm font-bold text-white">+91 6351 902 265</span>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
        </a>

        <a 
          href="tel:+916351902265" 
          className="w-full p-4 rounded-2xl bg-blue-500/10 border border-blue-500/30 hover:border-blue-500/60 hover:bg-blue-500/15 transition-all flex items-center justify-between group cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-blue-400 block">DIRECT PHONE</span>
              <span className="text-sm font-bold text-white">6351 902 265</span>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
        </a>

        <a 
          href="mailto:team.formatyk@gmail.com" 
          className="w-full p-4 rounded-2xl bg-purple-500/10 border border-purple-500/30 hover:border-purple-500/60 hover:bg-purple-500/15 transition-all flex items-center justify-between group cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
              <Send className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-purple-400 block">OFFICIAL EMAIL</span>
              <span className="text-sm font-bold text-white">team.formatyk@gmail.com</span>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-slate-500">
        <span>TYPICAL RESPONSE: &lt; 2 HOURS</span>
        <span className="text-emerald-400">● ENGINEERS ON STANDBY</span>
      </div>
    </div>
  );
}

/* ─── iOS / Instagram Dynamic Glass Pill Navigation Dock ─── */
function BottomTimeline() {
  const { scrollYProgress } = useScroll();
  const [activeSection, setActiveSection] = useState('home-section');

  useEffect(() => {
    const sections = ['home-section', 'about', 'services', 'overview', 'security', 'how-we-work', 'pricing', 'contact'];
    const handleScroll = () => {
      let current = 'home-section';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const timelineSteps = [
    { id: 'home-section', label: 'Home', href: '#', icon: Compass },
    { id: 'about', label: 'About', href: '#about', icon: Sparkles },
    { id: 'services', label: 'Services', href: '#services', icon: Layers },
    { id: 'overview', label: 'Dashboard', href: '#overview', icon: Activity },
    { id: 'security', label: 'Security', href: '#security', icon: Lock },
    { id: 'how-we-work', label: 'Process', href: '#how-we-work', icon: Workflow },
    { id: 'pricing', label: 'Pricing', href: '#pricing', icon: CreditCard },
    { id: 'contact', label: 'Contact', href: '#contact', icon: Send },
  ];

  return (
    <div className="fixed bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 max-w-[95vw]">
      {/* Outer Dock Container with iOS Blur */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative rounded-full p-1.5 sm:p-2 bg-[#030614]/85 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(59,130,246,0.15)] flex items-center gap-1 sm:gap-1.5 overflow-hidden"
      >
        {/* Real-time Smooth Progress Line on Top Border */}
        <div className="absolute top-0 left-4 right-4 h-[2px] bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            style={{ scaleX: scrollYProgress }}
            className="h-full bg-gradient-to-r from-[#3b82f6] via-[#38bdf8] to-[#8b5cf6] origin-left rounded-full shadow-[0_0_8px_rgba(56,189,248,0.8)]"
          />
        </div>

        {timelineSteps.map((step) => {
          const StepIcon = step.icon;
          const isActive = activeSection === step.id;

          return (
            <motion.a
              key={step.id}
              href={step.href}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              className={`relative px-3 sm:px-4 py-2 rounded-full text-xs font-semibold tracking-wider flex items-center gap-2 transition-colors duration-200 cursor-pointer select-none ${
                isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {/* iOS Animated Sliding Pill Background */}
              {isActive && (
                <motion.div
                  layoutId="active-ios-pill"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0059b5]/60 via-[#3b82f6]/50 to-[#8b5cf6]/60 border border-[#38bdf8]/50 shadow-[0_0_20px_rgba(59,130,246,0.5),inset_0_0_10px_rgba(255,255,255,0.15)]"
                />
              )}

              {/* Icon & Label */}
              <span className="relative z-10 flex items-center gap-1.5">
                <StepIcon className={`w-3.5 h-3.5 transition-transform duration-300 ${isActive ? 'text-[#38bdf8] scale-110' : 'text-slate-400'}`} />
                <span className="hidden md:inline uppercase text-[10px] tracking-widest">{step.label}</span>
              </span>

              {/* Active Indicator Pulse Dot */}
              {isActive && (
                <motion.span 
                  layoutId="active-dot"
                  className="relative z-10 w-1.5 h-1.5 rounded-full bg-[#38bdf8] shadow-[0_0_8px_rgba(56,189,248,1)] animate-pulse" 
                />
              )}
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}

/* ─── Vertical S-Curve Roadmap Timeline Component ─── */
function HowWeWorkTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const steps = [
    {
      num: '01',
      title: 'Discover & Propose',
      desc: 'We start with a discovery call to understand your business, current systems, and goals — then share a tailored proposal with clear scope, timeline, and pricing.',
      color: '#3b82f6',
      bgColor: 'rgba(59, 130, 246, 0.1)',
      icon: Search,
      isLeftArcColored: true,
      textSide: 'left',
    },
    {
      num: '02',
      title: 'Understand Requirements',
      desc: 'We dive deep into your workflows, pain points, and existing tools — documenting every requirement so nothing gets missed during development.',
      color: '#8b5cf6',
      bgColor: 'rgba(139, 92, 246, 0.1)',
      icon: ListChecks,
      isLeftArcColored: false,
      textSide: 'right',
    },
    {
      num: '03',
      title: 'System Design',
      desc: 'Our team architects the solution — database structure, UI wireframes, integrations, and user flows — all reviewed and approved by you before a single line of code is written.',
      color: '#06b6d4',
      bgColor: 'rgba(6, 182, 212, 0.1)',
      icon: PenTool,
      isLeftArcColored: true,
      textSide: 'left',
    },
    {
      num: '04',
      title: 'Development',
      desc: 'We build your solution in phases with regular demos and updates. You see progress in real time, give feedback, and steer the direction at every milestone.',
      color: '#ec4899',
      bgColor: 'rgba(236, 72, 153, 0.1)',
      icon: Code,
      isLeftArcColored: false,
      textSide: 'right',
    },
    {
      num: '05',
      title: 'Testing & Review',
      desc: "Rigorous QA across devices, performance testing, and a full walkthrough with you — we don't ship until everything works exactly as expected.",
      color: '#a78bfa',
      bgColor: 'rgba(167, 139, 250, 0.1)',
      icon: CheckCircle2,
      isLeftArcColored: true,
      textSide: 'left',
    },
    {
      num: '06',
      title: 'Deliver & Support',
      desc: 'We deploy to production, hand over full documentation and source code, and stay available for ongoing support — your project, your ownership.',
      color: '#10b981',
      bgColor: 'rgba(16, 185, 129, 0.1)',
      icon: Headset,
      isLeftArcColored: false,
      textSide: 'right',
    },
  ];

  return (
    <div className="relative">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-24"
      >
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-accent-purple/30 bg-accent-purple/10 text-accent-purple text-xs font-semibold uppercase tracking-wider">
          <Layers className="w-4 h-4" />
          Our Process
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">How We Work</h2>
        <p className="text-text-secondary text-sm md:text-base mt-4 max-w-xl mx-auto">
          A structured, transparent roadmap built to deliver high-quality custom systems on time.
        </p>
      </motion.div>

      {/* Roadmap Container */}
      <div ref={containerRef} className="relative">
        
        {/* Desktop S-Curve SVG */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[160px] pointer-events-none z-0">
          <svg className="w-full h-full" viewBox="0 0 160 1320" fill="none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="s-curve-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="25%" stopColor="#8b5cf6" />
                <stop offset="50%" stopColor="#06b6d4" />
                <stop offset="75%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
            <path
              d="M 80 110 C 10 165, 10 275, 80 330 C 150 385, 150 495, 80 550 C 10 605, 10 715, 80 770 C 150 825, 150 935, 80 990 C 10 1045, 10 1155, 80 1210"
              stroke="#1e293b"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <motion.path
              d="M 80 110 C 10 165, 10 275, 80 330 C 150 385, 150 495, 80 550 C 10 605, 10 715, 80 770 C 150 825, 150 935, 80 990 C 10 1045, 10 1155, 80 1210"
              stroke="url(#s-curve-gradient)"
              strokeWidth="4"
              strokeLinecap="round"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        </div>

        {/* Mobile vertical line */}
        <div className="md:hidden absolute left-8 top-0 bottom-0 w-[2px] pointer-events-none z-0">
          <div className="w-full h-full bg-[#1e293b] rounded" />
          <motion.div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#3b82f6] via-[#8b5cf6] to-[#10b981] rounded origin-top"
            style={{ scaleY: scrollYProgress, height: '100%' }}
          />
        </div>

        {/* Step items */}
        <div className="relative z-10 flex flex-col">
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            const isLeft = step.textSide === 'left';
            
            return (
              <div
                key={step.num}
                className="relative flex md:items-center justify-between min-h-[220px] md:h-[220px] mb-12 md:mb-0 last:mb-0 flex-row"
              >
                {/* Left Panel */}
                <div className="hidden md:flex w-[calc(50%-80px)] justify-end pr-8">
                  {isLeft && (
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="text-right max-w-md group"
                    >
                      <span className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: step.color }}>
                        Step {step.num}
                      </span>
                      <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-white/90 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* Circle */}
                <div className="w-[80px] md:w-[160px] flex-shrink-0 flex items-center justify-center relative">
                  <div className="w-[80px] h-[80px] md:w-[110px] md:h-[110px] relative z-10">
                    <svg className="w-full h-full rotate-90 md:rotate-0" viewBox="0 0 120 120" fill="none">
                      <motion.path
                        d="M 60 10 A 50 50 0 0 0 60 110"
                        stroke={step.isLeftArcColored ? step.color : '#1e293b'}
                        strokeWidth="4"
                        strokeLinecap="round"
                        initial={step.isLeftArcColored ? { pathLength: 0 } : {}}
                        whileInView={step.isLeftArcColored ? { pathLength: 1 } : {}}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      />
                      <motion.path
                        d="M 60 110 A 50 50 0 0 0 60 10"
                        stroke={!step.isLeftArcColored ? step.color : '#1e293b'}
                        strokeWidth="4"
                        strokeLinecap="round"
                        initial={!step.isLeftArcColored ? { pathLength: 0 } : {}}
                        whileInView={!step.isLeftArcColored ? { pathLength: 1 } : {}}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      />
                    </svg>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                        className="w-[48px] h-[48px] md:w-[70px] md:h-[70px] rounded-full flex items-center justify-center bg-[#060913] border border-white/5 shadow-inner"
                        style={{ boxShadow: `inset 0 0 12px ${step.bgColor}` }}
                      >
                        <StepIcon className="w-5 h-5 md:w-7 md:h-7" style={{ color: step.color }} />
                      </motion.div>
                    </div>

                    <div className="absolute inset-0 rounded-full blur-md opacity-25 pointer-events-none" style={{ boxShadow: `0 0 20px ${step.color}` }} />
                  </div>
                </div>

                {/* Right Panel */}
                <div className="w-[calc(100%-80px)] md:w-[calc(50%-80px)] pl-6 md:pl-8 flex justify-start">
                  {(!isLeft || typeof window !== 'undefined' && window.innerWidth < 768) && (
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="text-left max-w-md group"
                    >
                      <span className="text-xs font-bold uppercase tracking-wider mb-2 block md:hidden" style={{ color: step.color }}>
                        Step {step.num}
                      </span>
                      <h3 className="text-lg md:text-xl font-semibold mb-2 text-white group-hover:text-white/90 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
