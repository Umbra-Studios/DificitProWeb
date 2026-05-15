/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { motion } from "motion/react";
import { HashRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { 
  Zap, 
  Droplets, 
  Trophy, 
  ChefHat, 
  Camera, 
  ChevronRight, 
  LayoutDashboard, 
  Scan, 
  MessageSquare, 
  User,
  CheckCircle2,
  Apple,
  Flame,
  Star,
  TrendingDown,
  TrendingUp,
  Calendar,
  ArrowDown,
  ArrowUp,
  Info,
  Settings,
  Brain,
  BookOpen,
  ChevronLeft,
  ChevronDown,
  Search,
  ArrowRight,
  Globe,
  Rocket,
  Lightbulb,
  Gift,
  Share2,
  Plus,
} from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'jue', consumido: 400, quemado: 200 },
  { day: 'vie', consumido: 2600, quemado: 1000 },
  { day: 'sáb', consumido: 1800, quemado: 200 },
  { day: 'dom', consumido: 1700, quemado: 600 },
  { day: 'lun', consumido: 1900, quemado: 850 },
  { day: 'mar', consumido: 3400, quemado: 1200 },
  { day: 'mié', consumido: 400, quemado: 200 },
];

const FeatureCard = ({ children, title, icon: Icon, className = "" }: any) => (
  <motion.div 
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    }}
    className={`glass-card p-6 shadow-xl hover:shadow-brand-emerald/5 transition-all duration-500 ${className}`}
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 rounded-lg bg-brand-emerald/10 text-brand-emerald">
        <Icon size={20} />
      </div>
      <h3 className="font-display font-medium text-lg tracking-tight uppercase">{title}</h3>
    </div>
    {children}
  </motion.div>
);

const ProgressBar = ({ label, value, max, color = "bg-brand-emerald" }: any) => (
  <div className="mb-4">
    <div className="flex justify-between text-xs font-display mb-1.5 uppercase tracking-wider opacity-70">
      <span>{label}</span>
      <span>{value}G / {max}G</span>
    </div>
    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${(value / max) * 100}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`h-full ${color}`}
      ></motion.div>
    </div>
  </div>
);

const DeficitPro = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Handle scrolling to sections when pathname matches
    const sectionId = pathname === "/features" ? "features" : pathname === "/pricing" ? "pricing" : null;
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else if (pathname === "/" || pathname === "/deficitpro") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return (
    <div className="min-h-screen selection:bg-brand-emerald selection:text-black font-sans relative">
      {/* Background Ambient Motion */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none opacity-50">
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-brand-emerald/10 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-[#00e5ff]/5 blur-[100px] rounded-full"
        />
        <motion.div 
          animate={{ 
            x: [0, 50, 0],
            y: [0, -100, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-purple-500/5 blur-[100px] rounded-full"
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 backdrop-blur-md bg-brand-dark/80 border-b border-brand-border">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 overflow-hidden rounded-xl shadow-lg shadow-[#00e5ff]/30 border border-white/10 group bg-[#020617] p-1.5 flex items-center justify-center relative">
                <div className="w-full h-full rounded-full border-2 border-brand-emerald flex items-center justify-center relative">
                   <div className="flex gap-0.5">
                     <div className="w-1.5 h-4 bg-brand-emerald/40 rounded-full rotate-[-45deg] transform translate-x-1"></div>
                     <div className="w-1.5 h-4 bg-brand-emerald rounded-full rotate-[45deg] transform -translate-x-1"></div>
                   </div>
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[120%] w-2 h-2 bg-[#00e5ff] rounded-full animate-pulse shadow-[0_0_8px_#00e5ff]"></div>
                </div>
                <div className="absolute inset-0 bg-brand-emerald/10 opacity-50 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </Link>
            <span className="brand-logo text-xl">
              Deficit <span className="text-[#00e5ff] glow-cyan lowercase">pro</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-10 text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em]">
            <Link to="/features" className="hover:text-brand-emerald transition-colors">Características</Link>
            <Link to="/pricing" className="hover:text-brand-emerald transition-colors">Planes</Link>
            <Link to="/Studio" className="hover:text-brand-emerald transition-colors">Studio</Link>
            <a 
              href="https://play.google.com/store/apps/details?id=com.deficitpro" 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-2 border border-[#00e5ff]/30 text-[#00e5ff] rounded-full text-[10px] font-bold hover:bg-[#00e5ff]/10 transition-all uppercase tracking-widest ml-4 shadow-[0_0_15px_rgba(0,229,255,0.1)] flex items-center gap-2"
            >
              Download App <ChevronRight size={10} />
            </a>
          </div>
          <div className="md:hidden flex gap-2">
             <Link to="/Studio" className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em] border border-white/10 px-4 py-2 rounded-full">Studio</Link>
             <Link to="/pricing" className="text-[10px] font-bold text-brand-emerald uppercase tracking-[0.2em] border border-brand-emerald/30 px-4 py-2 rounded-full">Planes</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-12 overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-emerald/5 blur-[120px] rounded-full -z-10"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block px-3 py-1 bg-brand-emerald/10 text-brand-emerald text-[10px] font-bold uppercase tracking-[0.2em] rounded border border-brand-emerald/20 mb-6">
                El nuevo estándar en apps de déficit calórico
              </span>
              <h1 className="text-5xl md:text-8xl leading-[1.1] mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                Lleva el control <br/>
                <span className="brand-logo italic text-[#00e5ff] glow-cyan">de manera simple.</span>
              </h1>
              <p className="text-lg text-neutral-400 max-w-md leading-relaxed font-light">
                Deficit PRO es desarrollada por un grupo pequeño de chilenos que busca traer minimalismo al conteo calórico. ¡Apóyate con escaneos IA y un Coach IA con todo el estilo chileno! 🇨🇱
              </p>
            </div>

            <div className="flex gap-10">
              <div className="flex flex-col">
                <span className="text-3xl font-bold tracking-tighter">10K+</span>
                <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold mt-1">Usuarios Activos</span>
              </div>
              <div className="w-[1px] h-12 bg-brand-border"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold tracking-tighter">4.9/5</span>
                <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold mt-1">App Store</span>
              </div>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <Link 
                to="/pricing"
                className="px-12 py-5 bg-[#00e5ff] text-black font-bold rounded-xl hover:bg-[#33ebff] shadow-xl shadow-[#00e5ff]/30 transition-all uppercase tracking-wider text-sm glow-cyan inline-block"
              >
                Planes
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="relative flex justify-center"
          >
            {/* iPhone Frame */}
            <div className="w-[300px] h-[600px] md:w-[340px] md:h-[680px] bg-[#0c0c0c] rounded-[3.5rem] p-3 border-[6px] border-[#1a1a1a] shadow-2xl relative">
              {/* Screen Content */}
              <div className="w-full h-full bg-[#020617] rounded-[2.8rem] overflow-hidden flex flex-col font-sans relative">
                {/* Apps Header */}
                <div className="px-6 pt-12 pb-4">
                  <div className="flex justify-between items-start">
                    <div className="space-y-0.5">
                      <span className="text-[11px] text-neutral-400 font-medium">Hola, Usuario</span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-lg font-black italic tracking-tighter uppercase text-white leading-none">Deficit <span className="text-[#00e5ff]">Pro</span></span>
                        <div className="flex items-center gap-1">
                          <Info size={12} className="text-neutral-500" />
                          <Settings size={12} className="text-neutral-500" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <div className="flex items-center gap-1.5">
                         <span className="text-base">🇨🇱</span>
                         <div className="bg-[#facc15] rounded-xl px-2 py-0.5 flex items-center gap-1 shadow-[0_0_15px_rgba(250,204,21,0.3)]">
                           <Star size={10} className="fill-black text-black" />
                           <span className="text-[10px] font-black text-black leading-tight">5</span>
                         </div>
                      </div>
                      <div className="bg-[#f97316] rounded-lg px-2.5 py-1 text-[8px] font-black text-white tracking-widest uppercase shadow-[0_2px_15px_rgba(249,115,22,0.4)]">
                        Hazte Pro
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center mt-6">
                    <div className="flex items-center gap-6">
                       <ChevronLeft size={14} className="text-[#0ea5e9]" />
                       <div className="bg-[#0f172a] px-6 py-1.5 rounded-2xl border border-white/5 text-[10px] font-black tracking-[0.2em] text-[#0ea5e9] shadow-inner">HOY</div>
                       <ChevronRight size={14} className="text-neutral-800" />
                    </div>
                  </div>
                </div>

                <div className="flex-1 px-6 flex flex-col items-center">
                  {/* Progress Circle container */}
                  <div className="relative mt-2">
                    <div className="relative w-36 h-36 flex items-center justify-center">
                       {/* SVG Progress */}
                       <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                         <circle cx="50" cy="50" r="44" fill="none" stroke="#0f172a" strokeWidth="6" />
                         <motion.circle 
                           cx="50" cy="50" r="44" fill="none" stroke="#10b981" strokeWidth="8"
                           strokeDasharray="276" initial={{ strokeDashoffset: 276 }} animate={{ strokeDashoffset: 70 }}
                           transition={{ duration: 2.5, ease: "easeOut" }} strokeLinecap="round"
                           className="drop-shadow-[0_0_15px_rgba(16,185,129,0.7)]"
                         />
                       </svg>
                       <div className="absolute inset-0 flex flex-col items-center justify-center pt-1">
                         <span className="text-4xl font-black italic tracking-tighter text-[#10b981] drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]">2541</span>
                         <span className="text-[9px] text-neutral-400 font-bold uppercase tracking-tight -mt-1">kcal restantes</span>
                       </div>
                    </div>

                    {/* Floating Icons */}
                    <motion.div 
                       initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }}
                       className="absolute top-1/2 -left-10 -translate-y-1/2 w-9 h-9 rounded-2xl bg-[#2563eb] border border-white/10 flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                    >
                       <BookOpen size={16} />
                    </motion.div>

                    <div className="absolute top-[35%] -right-10 flex flex-col gap-2.5">
                       <motion.div 
                          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6 }}
                          className="w-9 h-9 rounded-2xl bg-[#1e293b] border border-white/10 flex items-center justify-center text-[#f97316] shadow-xl shadow-orange-500/10"
                       >
                          <Flame size={16} className="fill-[#f97316]/20" />
                       </motion.div>
                       <motion.div 
                          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7 }}
                          className="w-9 h-9 rounded-2xl bg-[#a855f7] border border-white/10 flex items-center justify-center text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                       >
                          <Brain size={16} />
                       </motion.div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 w-full mt-8">
                    <div className="bg-[#0f172a] border border-white/5 p-3 rounded-2xl flex flex-col items-center shadow-lg">
                      <span className="text-[8px] text-neutral-500 uppercase font-black tracking-widest leading-none mb-1.5">CONSUMIDO</span>
                      <span className="text-lg font-black text-[#0ea5e9] tracking-tighter">0 <span className="text-[10px] text-neutral-500">kcal</span></span>
                    </div>
                    <div className="bg-[#0f172a] border border-white/5 p-3 rounded-2xl flex flex-col items-center shadow-lg">
                      <span className="text-[8px] text-neutral-500 uppercase font-black tracking-widest leading-none mb-1.5">QUEMADO</span>
                      <span className="text-lg font-black text-[#10b981] tracking-tighter">0 <span className="text-[10px] text-neutral-500">kcal</span></span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 w-full mt-4">
                    <button className="bg-[#0ea5e9] text-white py-3.5 rounded-2xl font-black tracking-[0.1em] flex items-center justify-center gap-2 text-[10px] uppercase shadow-lg shadow-[#0ea5e9]/20 hover:scale-105 transition-transform active:scale-95">
                      <Plus size={16} strokeWidth={3} />
                      COMIDA
                    </button>
                    <button className="bg-[#10b981] text-white py-3.5 rounded-2xl font-black tracking-[0.1em] flex items-center justify-center gap-2 text-[10px] uppercase shadow-lg shadow-[#10b981]/20 hover:scale-105 transition-transform active:scale-95">
                      <Plus size={16} strokeWidth={3} />
                      EJERCICIO
                    </button>
                  </div>

                  {/* Water Section */}
                  <div className="w-full mt-6 bg-[#0f172a]/40 border border-white/5 p-4.5 rounded-[2rem] relative group overflow-hidden">
                    <div className="flex justify-between items-start relative z-10">
                      <div>
                        <div className="flex items-center gap-2">
                           <span className="text-[9px] font-black text-neutral-400 uppercase tracking-widest">AGUA</span>
                           <span className="text-[8px] text-neutral-500 font-medium">* 1 vaso = 250cc</span>
                        </div>
                        <div className="flex items-baseline gap-1.5 mt-1">
                           <span className="text-3xl font-black text-white leading-none">0</span>
                           <span className="text-[11px] font-bold text-neutral-500 uppercase">/ 13</span>
                        </div>
                      </div>
                      <button className="w-12 h-12 rounded-2xl bg-[#0ea5e9] flex items-center justify-center text-white shadow-xl shadow-[#0ea5e9]/30 hover:scale-110 transition-transform active:rotate-90">
                         <Plus size={24} strokeWidth={3} />
                      </button>
                    </div>
                    
                    {/* Water Level Visualization */}
                    <div className="mt-5 w-full h-14 bg-[#020617] rounded-2xl border border-white/5 relative overflow-hidden flex items-center px-1.5">
                       <div className="w-full h-10 border-2 border-[#1e293b] rounded-xl flex items-center px-2">
                          <div className="flex gap-1.5 opacity-20">
                             {[1,2,3,4].map(i => <div key={i} className="w-1 h-6 bg-white/40 rounded-full"></div>)}
                          </div>
                       </div>
                       {/* Floating minus button hidden in reference image but good for UX */}
                       <div className="absolute right-4 w-10 h-10 bg-neutral-900/80 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-4 h-1 bg-neutral-600 rounded-full"></div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Dynamic Island */}
              <div className="absolute top-[2.5rem] left-1/2 -translate-x-1/2 w-28 h-8 bg-black rounded-full border border-white/5 flex items-center justify-center">
                 <div className="w-2 h-2 rounded-full bg-blue-500/40 animate-pulse"></div>
              </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute w-[500px] h-[500px] bg-[#10b981]/10 blur-[120px] rounded-full -bottom-20 -right-20 -z-10 animate-pulse"></div>
            <div className="absolute w-[400px] h-[400px] bg-[#0ea5e9]/10 blur-[100px] rounded-full -top-20 -left-20 -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* AI Scanner Showcase */}
      <section className="py-8 px-12 bg-[#0c0c0c] border-y border-brand-border overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 space-y-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 text-orange-500 text-[10px] font-bold uppercase tracking-[0.2em] rounded border border-orange-500/20">
              <Scan size={12} /> Visual Intelligence
            </div>
            <h2 className="text-5xl md:text-6xl font-light tracking-tighter leading-tight">
              Reconocimiento de <br/>
              <span className="font-bold italic text-orange-500 text-shadow-[0_0_15px_rgba(249,115,22,0.4)]">Sabor Local.</span>
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed font-light max-w-lg">
              Nuestra IA no solo identifica el plato! También te dice las calorías que contiene y los macros asociados a esta. Puedes agregar o modificar ingredientes.
            </p>
          </div>
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-orange-500/10 blur-[120px] rounded-full"></div>
            <div className="w-full aspect-[4/5] glass-card overflow-hidden relative border-orange-500/10 group">
              <img 
                src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Scanner Crema de zapallo" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 border border-orange-500/30 m-12 rounded-2xl overflow-hidden">
                <motion.div 
                  animate={{ y: [-150, 450] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-full h-0.5 bg-orange-500 shadow-[0_0_20px_rgba(249,115,22,1)]"
                ></motion.div>
              </div>
              <div className="absolute bottom-8 left-8 p-6 glass-card border-orange-500/20 backdrop-blur-xl">
                 <div className="text-[10px] font-bold text-orange-500 uppercase tracking-widest mb-1">Detected</div>
                 <div className="text-xl font-bold">Crema de zapallo</div>
                 <div className="grid grid-cols-2 gap-4 mt-3">
                   <div className="text-left">
                     <div className="text-[10px] text-neutral-500 uppercase font-bold text-[8px]">Calorías</div>
                     <div className="text-sm font-bold">210 kcal</div>
                   </div>
                   <div className="text-left">
                     <div className="text-[10px] text-neutral-500 uppercase font-bold text-[8px]">Proteína</div>
                     <div className="text-sm font-bold">4.5g</div>
                   </div>
                   <div className="text-left">
                     <div className="text-[10px] text-neutral-500 uppercase font-bold text-[8px]">Grasas</div>
                     <div className="text-sm font-bold">8g</div>
                   </div>
                   <div className="text-left">
                     <div className="text-[10px] text-neutral-500 uppercase font-bold text-[8px]">Carbohidratos</div>
                     <div className="text-sm font-bold">32g</div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coach Section */}
      <section className="py-2 px-12 relative">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-emerald/5 blur-[120px] rounded-full -translate-y-1/2 -z-10"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 text-purple-400 text-[10px] font-bold uppercase tracking-[0.2em] rounded border border-purple-500/20">
              <MessageSquare size={12} /> Exclusivo PRO
            </div>
            <h2 className="text-5xl md:text-6xl font-light tracking-tighter leading-tight">
              Tu Personal <br/>
              <span className="font-bold italic text-brand-emerald text-gradient">Coach IA Chileno.</span>
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed font-light max-w-lg">
              Conoce a tu Coach IA, integrado con una firme y chilena personalidad. Con su motivación te entregará consejos como. 
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm font-light text-neutral-300">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-emerald shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                Planes de entrenamiento personalizados.
              </div>
              <div className="flex items-center gap-4 text-sm font-light text-neutral-300">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-emerald shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                Sugerencias de almuerzos para la pega o menús completos! 
              </div>
              <div className="flex items-center gap-4 text-sm font-light text-neutral-300">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-emerald shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                Recetas para tu fin de semana, porciones faciles de manejar.
              </div>
            </div>
          </div>

          <div className="flex-1 w-full flex justify-center">
            {/* IA Coach Mockup Window */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full max-w-md bg-brand-dark border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative"
            >
              {/* Header */}
              <div className="p-6 border-b border-white/5 flex justify-between items-center bg-gradient-to-r from-brand-card to-brand-dark">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                     <ChefHat size={20} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                       <span className="font-bold text-sm tracking-tight">IA COACH <span className="text-purple-400">PRO</span></span>
                       <span className="text-[8px] bg-purple-500/20 text-purple-400 px-1.5 py-0.5 rounded font-black">24/7</span>
                    </div>
                    <span className="text-[9px] text-neutral-500 font-bold uppercase tracking-widest">Consultas hoy: 2/20</span>
                  </div>
                </div>
                <div className="text-neutral-500"><ChevronRight size={18} className="rotate-90" /></div>
              </div>

              {/* Chat Area */}
              <div className="h-[350px] p-6 space-y-6 overflow-hidden">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex-shrink-0 flex items-center justify-center border border-purple-500/20">
                    <ChefHat size={14} className="text-purple-400" />
                  </div>
                  <div className="p-4 bg-[#141d33] border border-white/5 rounded-2xl rounded-tl-none space-y-2">
                    <p className="text-sm font-light leading-relaxed">
                      Buena máquina! Estoy aquí para ayudarte con consejos y entrenamientos. Vamos con todo!
                    </p>
                    <span className="text-[9px] text-neutral-500 italic">12:20</span>
                  </div>
                </div>

                <div className="flex gap-3 flex-row-reverse">
                  <div className="w-8 h-8 rounded-full bg-brand-emerald/20 flex-shrink-0 flex items-center justify-center border border-brand-emerald/20">
                    <User size={14} className="text-brand-emerald" />
                  </div>
                  <div className="p-4 bg-brand-card border border-white/5 rounded-2xl rounded-tr-none">
                    <p className="text-sm font-light">Hola! Quiero una rutina ligera, me duele la muñeca. También quiero un plato para la cena de hoy.</p>
                  </div>
                </div>
              </div>

              {/* Input Area */}
              <div className="p-4 bg-brand-card/50 border-t border-white/5 flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-neutral-500">
                  <Camera size={18} />
                </div>
                <div className="flex-1 bg-[#141d33] border border-white/5 rounded-xl px-4 flex items-center text-xs text-neutral-500 font-light italic">
                  Pregunta sobre dietas, ejercicios...
                </div>
                <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center text-white shadow-lg shadow-purple-600/20">
                  <ChevronRight size={18} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Daily Challenges Section */}
      <section id="features" className="py-2 px-12 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 flex justify-center"
          >
            {/* Daily Challenges Mobile Mockup View */}
            <div className="w-[300px] h-[600px] md:w-[340px] md:h-[680px] border border-white/10 rounded-[3.5rem] overflow-hidden shadow-2xl bg-[#030712] relative scale-90 sm:scale-100 flex flex-col">
              <div className="p-8 pb-6 flex justify-between items-center bg-[#030712]">
                <h2 className="text-2xl font-black italic tracking-tighter uppercase leading-none">
                  <span className="text-orange-500">DESAFÍOS</span> <span className="text-purple-500">DIARIOS</span>
                </h2>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-neutral-600 text-xs hover:text-white transition-colors cursor-pointer">✕</div>
              </div>

              <div className="flex-1 overflow-y-auto px-6 pb-10 space-y-4">
                <div className="pt-2 pb-6 border-t border-white/5">
                  <p className="text-[10px] text-neutral-400 leading-relaxed font-light">
                    Completa estos objetivos diarios para ganar <span className="text-amber-500 font-bold">★</span> estrellas y canjearlas por acceso a funciones exclusivas. ¡Motívate y cumple tus metas cada día!
                  </p>
                </div>
                
                {/* Challenge Card 1: Hidratación */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="p-5 bg-brand-emerald/5 border border-brand-emerald/30 rounded-3xl relative overflow-hidden group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-emerald flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)] text-brand-dark">
                       <Droplets size={24} />
                    </div>
                    <div className="flex flex-col items-end">
                       <Star size={24} className="text-amber-500 fill-amber-500 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-black italic tracking-tighter mb-0.5">Hidratación Completa</h4>
                    <p className="text-[8px] font-black text-brand-emerald tracking-widest uppercase mb-4 opacity-80">BEBE TODOS TUS VASOS DE AGUA.</p>
                    <div className="h-2 w-full bg-neutral-900 rounded-full overflow-hidden mb-3 relative">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "55%" }}
                        transition={{ duration: 1.5, ease: "circOut" }}
                        className="h-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                      ></motion.div>
                    </div>
                    <div className="flex justify-between items-center text-[9px] font-black italic uppercase">
                       <span className="text-neutral-500 tracking-tighter">7 / 13 VASOS</span>
                       <span className="text-brand-emerald tracking-tighter flex items-center gap-1">¡COMPLETADO! +1 <Star size={10} className="fill-brand-emerald" /></span>
                    </div>
                  </div>
                </motion.div>

                {/* Challenge Card 2: Nutrición */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="p-5 bg-brand-emerald/5 border border-brand-emerald/30 rounded-3xl relative overflow-hidden group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-emerald flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)] text-brand-dark">
                       <Apple size={24} />
                    </div>
                    <Star size={24} className="text-amber-500 fill-amber-500 opacity-60" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black italic tracking-tighter mb-0.5">Nutrición Constante</h4>
                    <p className="text-[8px] font-black text-orange-500 tracking-widest uppercase mb-4 opacity-80">REGISTRA AL MENOS 3 COMIDAS.</p>
                    <div className="h-2 w-full bg-neutral-900 rounded-full overflow-hidden mb-3">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        className="h-full bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.6)]"
                      ></motion.div>
                    </div>
                    <div className="flex justify-between items-center text-[9px] font-black italic uppercase">
                       <span className="text-neutral-500 tracking-tighter">3 / 3 COMIDAS</span>
                       <span className="text-brand-emerald tracking-tighter flex items-center gap-1">¡COMPLETADO! +1 <Star size={10} className="fill-brand-emerald" /></span>
                    </div>
                  </div>
                </motion.div>

                {/* Challenge Card 3: Especial */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="p-5 bg-brand-emerald/5 border border-brand-emerald/30 rounded-3xl relative overflow-hidden group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-emerald flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)] text-brand-dark">
                       <Star size={24} />
                    </div>
                    <Star size={24} className="text-amber-500 fill-amber-500 opacity-60" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black italic tracking-tighter mb-0.5">Desafío Especial</h4>
                    <p className="text-[8px] font-black text-purple-500 tracking-widest uppercase mb-4 opacity-80">USA EL SCANNER IA.</p>
                    <div className="h-2 w-full bg-neutral-900 rounded-full overflow-hidden mb-3">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        className="h-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.6)]"
                      ></motion.div>
                    </div>
                    <div className="flex justify-between items-center text-[9px] font-black italic uppercase">
                       <span className="text-neutral-500 tracking-tighter">2 / 1</span>
                       <span className="text-brand-emerald tracking-tighter flex items-center gap-1">¡COMPLETADO! +1 <Star size={10} className="fill-brand-emerald" /></span>
                    </div>
                  </div>
                </motion.div>

                <button className="w-full bg-blue-500 text-black py-5 rounded-2xl font-black italic tracking-tighter uppercase text-sm mt-4 shadow-lg shadow-blue-500/20 active:scale-95 transition-transform">
                   Cerrar
                </button>
              </div>
            </div>
          </motion.div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 text-amber-500 text-[10px] font-bold uppercase tracking-[0.2em] rounded border border-amber-500/20">
              <Trophy size={12} /> Gamificación Inteligente
            </div>
            <h2 className="text-5xl md:text-6xl font-light tracking-tighter leading-tight">
              Gana Estrellas. <br/>
              <span className="font-bold italic text-brand-emerald">Desbloquea lo PRO.</span>
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed font-light max-w-lg">
              Queremos que el hábito sea divertido. Cumple tus objetivos diarios para ganar estrellas y desbloquear funciones Premium de forma totalmente gratuita. ¡Tu esfuerzo se premia!
            </p>
            
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-500">Funciones PRO</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-6 bg-brand-card border border-brand-border rounded-2xl group hover:border-brand-emerald/30 transition-all">
                   <div className="text-amber-500 font-bold mb-2 flex items-center gap-2 uppercase tracking-widest text-[10px]">★ Scan IA Premium</div>
                   <p className="text-xs text-neutral-500 leading-relaxed">Detección avanzada de platos complejos chilenos ilimitada.</p>
                </div>
                <div className="p-6 bg-brand-card border border-brand-border rounded-2xl group hover:border-brand-emerald/30 transition-all">
                   <div className="text-brand-emerald font-bold mb-2 flex items-center gap-2 uppercase tracking-widest text-[10px]">★ Coach ilimitado</div>
                   <p className="text-xs text-neutral-500 leading-relaxed">Habla con tu Coach IA sin restricciones de mensajes diarios.</p>
                </div>
                <div className="p-6 bg-brand-card border border-brand-border rounded-2xl group hover:border-brand-emerald/30 transition-all sm:col-span-2 lg:col-span-1">
                   <div className="text-blue-400 font-bold mb-2 flex items-center gap-2 uppercase tracking-widest text-[10px]">★ Búsqueda inteligente IA</div>
                   <p className="text-xs text-neutral-500 leading-relaxed">Escribe tu plato completo: "arroz con filete de pollo y ensalada de tomates. Un vaso de jugo de piña" y la IA reconocerá todo su contenido.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Food Registration Section */}
      <section className="py-24 px-12 bg-black relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full -translate-y-1/2 -z-10"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] rounded border border-blue-500/20">
              <Brain size={12} /> Scanner IA de Comida Completa
            </div>
            <h2 className="text-5xl md:text-6xl font-light tracking-tighter leading-tight">
              Dile lo que comiste, <br/>
              <span className="font-bold italic text-blue-400">Ella Entiende Todo.</span>
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed font-light max-w-lg">
              No pierdas tiempo buscando ingrediente por ingrediente. Nuestra IA descompone platos complejos como un completo o un sánguche de potito en segundos.
            </p>
            
            <div className="space-y-6">
              <div className="glass-card p-6 border-white/5 bg-white/2">
                <p className="text-xs font-bold text-neutral-500 mb-2 uppercase italic tracking-widest">Búsqueda Inteligente:</p>
                <div className="bg-neutral-900 border border-brand-emerald/30 rounded-xl p-4 flex items-center gap-4">
                  <motion.div 
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-brand-emerald"
                  ></motion.div>
                   <span className="text-sm font-medium italic">"sánguche de potito y un vaso de bebida"</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full flex justify-center"
          >
            {/* Food Log Mockup */}
            <div className="w-full max-w-[360px] bg-[#030712] rounded-[3.5rem] border-8 border-neutral-800 shadow-2xl relative overflow-hidden flex flex-col">
              <div className="p-8 pb-4 flex justify-between items-center bg-[#030712] border-b border-white/5">
                <h2 className="text-2xl font-black italic tracking-tighter uppercase leading-none">REGISTRAR COMIDA</h2>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-neutral-600 text-xs">✕</div>
              </div>

              <div className="flex-1 overflow-y-auto px-6 pt-6 space-y-8 scrollbar-hide">
                <div className="space-y-1">
                  <h3 className="text-3xl font-black italic tracking-tighter uppercase text-white leading-tight">SÁNGUCHE DE POTITO</h3>
                </div>

                <div className="flex justify-between items-center">
                  <h4 className="text-2xl font-black italic tracking-tighter uppercase">PORCIÓN(ES)</h4>
                  <div className="w-14 h-16 bg-[#111827] border border-white/10 rounded-2xl flex items-center justify-center text-2xl font-black italic">1</div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-neutral-500 italic">INGREDIENTES DETECTADOS POR IA</span>
                    <Info size={12} className="text-neutral-600" />
                  </div>
                  
                  {[
                    { name: 'Marraqueta', cal: 100 },
                    { name: 'Recto de vacuno (Potito)', cal: 150 },
                    { name: 'Longaniza', cal: 50 },
                    { name: 'Cebolla y pimentón salteado', cal: 50 },
                    { name: 'Mayonesa', cal: 20 },
                    { name: 'Mostaza', cal: 10 }
                  ].map((ing, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                         <Zap size={14} className="text-neutral-500 italic" />
                         <span className="text-sm font-black italic tracking-tighter uppercase text-neutral-300">{ing.name}</span>
                      </div>
                      <div className="w-20 h-10 bg-[#111827] border border-white/5 rounded-xl flex items-center justify-center text-xs font-black italic">{ing.cal} <span className="text-[10px] ml-1 opacity-40">g</span></div>
                    </motion.div>
                  ))}

                  <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-neutral-500 italic hover:text-white transition-colors pt-2">
                    <span className="text-lg">+</span> AGREGAR NUEVO INGREDIENTE
                  </button>
                </div>

                <div className="grid grid-cols-4 gap-2 pt-4">
                  {[
                    { label: 'KCAL', val: '870', color: 'blue' },
                    { label: 'PROTE', val: '42g', color: 'emerald' },
                    { label: 'CARB', val: '63g', color: 'orange' },
                    { label: 'GRASA', val: '49g', color: 'pink' }
                  ].map((macro, i) => (
                    <div key={i} className={`bg-${macro.color}-500/10 border border-${macro.color}-500/20 p-2 rounded-xl text-center`}>
                       <div className={`text-[7px] font-black text-${macro.color}-500 mb-1`}>{macro.label}</div>
                       <div className="text-sm font-black italic tracking-tighter">{macro.val}</div>
                    </div>
                  ))}
                </div>

                <div className="pb-10 pt-4 space-y-4">
                  <div className="flex gap-3">
                    <button className="flex-1 bg-neutral-900 py-5 rounded-2xl font-black italic uppercase tracking-tighter border border-white/10">Reintentar</button>
                    <button className="flex-1 bg-blue-500 text-black py-5 rounded-2xl font-black italic uppercase tracking-tighter shadow-lg shadow-blue-500/30">GUARDAR</button>
                  </div>
                  
                  <div className="space-y-3 pt-4">
                    <div className="flex items-center gap-2">
                       <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest italic">BUSCAR ALIMENTO</span>
                       <span className="text-[7px] text-neutral-500 uppercase font-bold italic">- por si no tienes internet</span>
                    </div>
                    <div className="bg-neutral-800/50 border border-white/5 rounded-2xl px-6 py-4 flex items-center gap-4">
                       <Search size={18} className="text-neutral-500" />
                       <div className="flex items-center gap-2 text-neutral-500 text-sm italic font-medium">
                          <span className="text-xl">📝</span> Escribir nombre del alimento
                       </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-neutral-900 py-5 rounded-2xl font-black italic uppercase tracking-tighter border border-white/10 text-neutral-500">Cancelar</button>
                    <button className="flex-1 bg-[#1e293b] py-5 rounded-2xl font-black italic uppercase tracking-tighter text-neutral-400">Guardar</button>
                  </div>
                </div>
              </div>

              {/* Notch detail */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-neutral-900 rounded-b-2xl"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Streak (Racha) Section */}
      <section className="py-20 px-12 bg-brand-dark relative overflow-hidden">
        {/* ... (same streak code) ... */}
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full -translate-y-1/2 -z-10"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 space-y-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/10 text-orange-500 text-[10px] font-bold uppercase tracking-[0.2em] rounded border border-orange-500/20">
              <Flame size={12} className="fill-orange-500" /> Sistema de Rachas
            </div>
            <h2 className="text-5xl md:text-6xl font-light tracking-tighter leading-tight">
              La Consistencia es <br/>
              <span className="font-bold italic text-orange-500 brightness-125">Tu Mejor Aliada.</span>
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed font-light max-w-lg">
              No rompas la cadena. Registra tus alimentos diariamente y mantén el fuego encendido. Cada semana de racha te acerca más a la experiencia completa.
            </p>
            
            <div className="grid gap-6">
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 p-6 glass-card border-orange-500/10 group bg-orange-500/5"
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center text-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                  <Flame size={32} className="fill-orange-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg leading-tight uppercase tracking-tight">Cada 7 Días de Racha</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-orange-500 text-sm font-bold uppercase tracking-widest">+5 ESTRELLAS</span>
                    <Star size={14} className="fill-amber-500 text-amber-500" />
                  </div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 p-6 glass-card border-amber-500/10 group bg-amber-500/5"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-500/20 flex items-center justify-center text-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                  <Star size={32} className="fill-amber-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg leading-tight uppercase tracking-tight">Canjea 50 Estrellas</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-amber-500 text-sm font-bold uppercase tracking-widest">5 DÍAS DE FUNCIONES PRO</span>
                    <Zap size={14} className="text-brand-emerald" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="flex-1 relative">
            {/* Streak Visual Mockup */}
            <div className="glass-card p-10 border-orange-500/20 relative group">
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-orange-500/10 blur-[60px] rounded-full group-hover:bg-orange-500/20 transition-all"></div>
              
              <div className="text-center space-y-8">
                <div className="relative inline-block">
                  <div className="w-32 h-32 rounded-full border-4 border-orange-500/20 flex items-center justify-center relative">
                    <Flame size={64} className="fill-orange-500 text-orange-500 drop-shadow-[0_0_25px_rgba(249,115,22,0.6)]" />
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-brand-emerald flex items-center justify-center border-4 border-brand-dark">
                      <CheckCircle2 size={16} className="text-black font-bold" strokeWidth={3} />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-center text-xs font-bold uppercase tracking-[0.4em] text-neutral-500 italic">Tu Racha Actual</h3>
                  <div className="text-6xl font-black italic tracking-tighter text-shadow-[0_0_30px_rgba(249,115,22,0.4)]">
                    9 <span className="text-2xl not-italic uppercase tracking-widest text-neutral-500">Días</span>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-3">
                  {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day, i) => (
                    <div key={i} className="space-y-3 flex flex-col items-center">
                      <div className={`w-10 h-12 rounded-2xl flex items-center justify-center border transition-all ${i < 6 ? 'bg-orange-500 border-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.5)]' : 'bg-neutral-900 border-white/5 opacity-30'}`}>
                        {i < 6 && <Flame size={16} className="fill-white text-white" />}
                      </div>
                      <span className="text-[10px] font-bold text-neutral-500">{day}</span>
                    </div>
                  ))}
                </div>

                <p className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold pt-4">Registra al menos 3 alimentos al día para mantener tu racha.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress History Section */}
      <section className="py-20 px-12 bg-[#0c0c0c] border-y border-brand-border overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-20">
          <div className="flex-1 space-y-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-emerald/10 text-brand-emerald text-[10px] font-bold uppercase tracking-[0.2em] rounded border border-brand-emerald/20">
              <TrendingUp size={12} /> Análisis de Déficit
            </div>
            <h2 className="text-5xl md:text-6xl font-light tracking-tighter leading-tight">
              Visualiza tu <br/>
              <span className="font-bold italic text-brand-emerald text-gradient">Éxito Diario.</span>
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed font-light max-w-lg">
              La app registra cada caloría consumida y quemada para calcular tu déficit real. Identifica qué días cumpliste tus metas y cuáles requieren más atención con nuestro historial inteligente.
            </p>
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-brand-emerald/10 flex items-center justify-center text-brand-emerald flex-shrink-0">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1">Déficit Logrado</h4>
                  <p className="text-[10px] text-neutral-500 font-light">Días marcados en verde cuando tu balance calórico es negativo según tu plan.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 flex-shrink-0">
                  <Flame size={16} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1">Exceso Detectado</h4>
                  <p className="text-[10px] text-neutral-500 font-light">Alertas en rojo cuando superas el límite calórico, permitiéndote ajustar el resto de tu semana.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 relative w-full overflow-hidden flex justify-center">
             {/* Progress Screen Mockup */}
             <div className="w-full max-w-[360px] bg-[#030712] rounded-[3rem] border-8 border-neutral-800 shadow-2xl relative overflow-hidden pb-10">
                {/* Apps Header */}
                <div className="p-8 pb-4 flex items-center justify-between">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center">
                         <ChevronRight size={16} className="rotate-180 text-neutral-400" />
                      </div>
                      <h3 className="text-xl font-display font-black tracking-tighter italic uppercase">Tu Progreso</h3>
                   </div>
                   <div className="text-[8px] font-bold text-neutral-500 uppercase tracking-widest border-l border-white/10 pl-3">7 Días Registrados</div>
                </div>

                <div className="px-6 space-y-6 mt-4">
                   {/* Tabs */}
                   <div className="flex bg-[#111827] rounded-xl p-1 gap-1">
                      <div className="flex-1 bg-brand-card p-2 rounded-lg flex items-center justify-center gap-2 border border-white/10">
                         <TrendingUp size={12} className="text-brand-emerald" />
                         <span className="text-[10px] font-bold uppercase tracking-widest">Calorías</span>
                      </div>
                      <div className="flex-1 p-2 rounded-lg flex items-center justify-center gap-2 opacity-40">
                         <Star size={12} />
                         <span className="text-[10px] font-bold uppercase tracking-widest">Peso</span>
                      </div>
                   </div>

                   {/* Stats Grid */}
                   <div className="grid grid-cols-2 gap-3">
                      <div className="glass-card p-4 border-blue-500/10">
                         <div className="flex items-center gap-2 mb-2">
                           <TrendingUp size={12} className="text-blue-400" />
                           <span className="text-[8px] font-bold text-neutral-500 uppercase tracking-tighter">Promedio Consumido</span>
                         </div>
                         <div className="text-2xl font-black italic tracking-tighter">1233 <span className="text-[10px] not-italic text-neutral-500">kcal</span></div>
                      </div>
                      <div className="glass-card p-4 border-brand-emerald/10">
                         <div className="flex items-center gap-2 mb-2">
                           <TrendingDown size={12} className="text-brand-emerald" />
                           <span className="text-[8px] font-bold text-neutral-500 uppercase tracking-tighter">Promedio Quemado</span>
                         </div>
                         <div className="text-2xl font-black italic tracking-tighter">428 <span className="text-[10px] not-italic text-neutral-500">kcal</span></div>
                      </div>
                   </div>

                   {/* Recharts Area Chart */}
                   <div className="glass-card p-4 border-white/5 relative overflow-hidden">
                      <div className="flex justify-between items-end mb-4">
                         <div>
                            <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-emerald italic">Balance Calórico</h4>
                            <p className="text-[8px] text-neutral-500 uppercase font-bold italic">Análisis Entrada vs Salida</p>
                         </div>
                      </div>
                      <div className="h-40 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                            <defs>
                              <linearGradient id="colorConsumido" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                              </linearGradient>
                              <linearGradient id="colorQuemado" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1f2937" />
                            <XAxis 
                              dataKey="day" 
                              axisLine={false} 
                              tickLine={false} 
                              tick={{ fontSize: 8, fill: '#6b7280', fontWeight: 'bold' }} 
                            />
                            <Tooltip 
                              contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }}
                              itemStyle={{ fontSize: 10, fontWeight: 'bold' }}
                            />
                            <Area 
                              type="monotone" 
                              dataKey="consumido" 
                              stroke="#3b82f6" 
                              strokeWidth={2}
                              fillOpacity={1} 
                              fill="url(#colorConsumido)" 
                            />
                            <Area 
                              type="monotone" 
                              dataKey="quemado" 
                              stroke="#10b981" 
                              strokeWidth={2}
                              fillOpacity={1} 
                              fill="url(#colorQuemado)" 
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                   </div>

                   {/* Daily Detail List */}
                   <div className="space-y-3 pb-8">
                      <h4 className="text-[10px] font-black uppercase tracking-widest mb-4">Detalle Diario</h4>
                      
                      {/* Day 1 (Exito) */}
                      <div className="flex items-center gap-4 bg-brand-card/50 p-4 rounded-2xl border border-white/5 relative overflow-hidden group">
                         <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-emerald"></div>
                         <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/5 flex flex-col items-center justify-center">
                            <span className="text-[8px] text-neutral-500 font-bold uppercase tracking-tighter">Abr</span>
                            <span className="text-base font-black italic tracking-tighter leading-none mt-1">29</span>
                         </div>
                         <div className="flex-1">
                            <h5 className="text-[10px] font-black uppercase tracking-tighter flex items-center gap-2">Miércoles <CheckCircle2 size={10} className="text-brand-emerald" /></h5>
                            <div className="flex gap-2 mt-1">
                               <span className="text-[8px] bg-blue-500/10 text-blue-400 px-1 py-0.5 rounded font-bold">+2630</span>
                               <span className="text-[8px] bg-brand-emerald/10 text-brand-emerald px-1 py-0.5 rounded font-bold">-1055</span>
                            </div>
                         </div>
                         <div className="text-right">
                            <div className="text-xs font-black text-brand-emerald italic leading-tight tracking-tighter">+1994</div>
                            <div className="text-[8px] text-neutral-500 font-bold uppercase tracking-widest">Margen</div>
                         </div>
                      </div>

                      {/* Day 2 (Fracaso - Rojo) */}
                      <div className="flex items-center gap-4 bg-red-500/5 p-4 rounded-2xl border border-red-500/10 relative overflow-hidden group">
                         <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
                         <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-red-500/10 flex flex-col items-center justify-center">
                            <span className="text-[8px] text-neutral-500 font-bold uppercase tracking-tighter">Abr</span>
                            <span className="text-base font-black italic tracking-tighter leading-none mt-1">28</span>
                         </div>
                         <div className="flex-1">
                            <h5 className="text-[10px] font-black uppercase tracking-tighter flex items-center gap-2 text-red-400">Martes <Flame size={10} /></h5>
                            <div className="flex gap-2 mt-1">
                               <span className="text-[8px] bg-red-400/20 text-red-400 px-1 py-0.5 rounded font-bold">+3100</span>
                               <span className="text-[8px] bg-brand-emerald/10 text-brand-emerald px-1 py-0.5 rounded font-bold">-250</span>
                            </div>
                         </div>
                         <div className="text-right">
                            <div className="text-xs font-black text-red-500 italic leading-tight tracking-tighter">-450</div>
                            <div className="text-[8px] text-neutral-500 font-bold uppercase tracking-widest leading-none">Exceso</div>
                         </div>
                      </div>
                   </div>
                </div>
                {/* Notch detail */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-neutral-900 rounded-b-2xl"></div>
             </div>
          </div>
        </div>
      </section>

      {/* Control Total Section */}
      <section className="py-12 px-12 max-w-7xl mx-auto border-t border-brand-border">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-20">
          <div>
            <span className="text-brand-emerald text-[10px] font-bold uppercase tracking-[0.3em]">Operational Precision</span>
            <h2 className="text-4xl font-light uppercase tracking-tighter mt-4">Control <span className="font-bold italic">Total</span></h2>
          </div>
          <p className="text-neutral-400 max-w-xs text-sm leading-relaxed font-light">
            Monitorea cada variable de tu saludo con herramientas diseñadas para el rigor científico.
          </p>
        </div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.15 }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          <FeatureCard title="Hidratación Avanzada" icon={Droplets}>
            <div className="flex justify-center mb-6">
              {/* Specialized Hydration Visualization */}
              <div className="relative w-16 h-28">
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-5 h-2 bg-neutral-700 rounded-sm"></div>
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-4 bg-neutral-800 rounded-sm"></div>
                <div className="absolute top-5 w-full h-24 bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-inner">
                   <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: "72%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="absolute bottom-0 w-full bg-gradient-to-t from-blue-600 to-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                   ></motion.div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black italic tracking-tighter">7/13 <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest ml-1">Vasos</span></p>
              <div className="mt-2 text-[8px] font-black text-blue-400 uppercase tracking-widest opacity-80">55% de la meta diaria</div>
            </div>
          </FeatureCard>

          <FeatureCard title="Distribución Macros" icon={Brain}>
            <div className="space-y-5">
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-black uppercase text-neutral-400 tracking-tighter italic">
                  <span>Proteína</span>
                  <span className="text-brand-emerald">125g / 150g</span>
                </div>
                <div className="h-1.5 w-full bg-neutral-800/50 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "83%" }}
                    className="h-full bg-brand-emerald shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                  ></motion.div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-black uppercase text-neutral-400 tracking-tighter italic">
                   <span>Carbos</span>
                   <span className="text-blue-400">180g / 220g</span>
                </div>
                <div className="h-1.5 w-full bg-neutral-800/50 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "81%" }}
                    className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                  ></motion.div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-black uppercase text-neutral-400 tracking-tighter italic">
                   <span>Grasas</span>
                   <span className="text-amber-500">45g / 65g</span>
                </div>
                <div className="h-1.5 w-full bg-neutral-800/50 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "69%" }}
                    className="h-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.3)]"
                  ></motion.div>
                </div>
              </div>
            </div>
          </FeatureCard>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section id="pricing" className="py-24 px-12 text-center relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-emerald/5 blur-[120px] rounded-full -z-10"></div>
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter uppercase italic leading-tight">
              Hazlo <span className="font-bold text-brand-emerald not-italic text-shadow-[0_0_20px_rgba(16,185,129,0.3)]">simple.</span> Hazlo <span className="font-bold text-brand-emerald not-italic text-shadow-[0_0_20px_rgba(16,185,129,0.3)]">real.</span> <br/>
              Hazlo con Déficit <span className="brand-logo lowercase text-[#00e5ff]">pro</span>
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed font-light italic">
              Made in Chile. 🇨🇱
            </p>
          </div>

          {/* Pricing Plans */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
            className="max-w-xl mx-auto space-y-4"
          >
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-center mb-8"
            >
              <h3 className="text-3xl font-display font-black tracking-tighter italic uppercase mb-4">Elige tu Plan Pro</h3>
              <p className="text-neutral-400 text-sm font-light leading-relaxed">Sin anuncios, 30 mensajes con IA, 5 fotografías scan diarias.</p>
            </motion.div>

            {/* Monthly */}
            <motion.div 
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
              whileHover={{ scale: 1.02, x: 5 }}
              className="glass-card p-6 border-brand-border flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="font-black text-lg tracking-tighter uppercase italic">Mensual</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400 font-bold text-lg leading-tight">$4.990 CLP</span>
                    <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest pl-2 border-l border-white/10">3 días gratis</span>
                  </div>
                </div>
              </div>
              <ChevronRight className="text-neutral-600 group-hover:text-white transition-colors" />
            </motion.div>

            {/* 3 Months */}
            <motion.div 
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
              whileHover={{ scale: 1.02, x: 5 }}
              className="glass-card p-6 border-brand-border flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400 border border-purple-500/30">
                  <Star size={24} className="fill-purple-400" />
                </div>
                <div>
                  <h4 className="font-black text-lg tracking-tighter uppercase italic">3 Meses</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400 font-bold text-lg leading-tight">$12.000 CLP</span>
                    <span className="text-[10px] text-brand-emerald font-bold uppercase tracking-widest pl-2 border-l border-white/10 italic">Ahorra 20%</span>
                  </div>
                </div>
              </div>
              <ChevronRight className="text-neutral-600 group-hover:text-white transition-colors" />
            </motion.div>

            {/* Annual */}
            <motion.div 
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
              whileHover={{ scale: 1.02, x: 5 }}
              className="glass-card p-6 border-[#00e5ff]/20 bg-[#00e5ff]/5 flex items-center justify-between group cursor-pointer relative"
            >
              <div className="absolute -top-3 right-8 bg-orange-500 text-black text-[8px] font-black uppercase px-3 py-1 rounded-full tracking-widest shadow-[0_0_15px_rgba(249,115,22,0.5)]">
                Mejor Valor
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center text-amber-500 border border-amber-500/30">
                  <Star size={24} className="fill-amber-500" />
                </div>
                <div>
                  <h4 className="font-black text-lg tracking-tighter uppercase italic">Anual</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400 font-bold text-lg leading-tight">$39.990 CLP</span>
                    <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest pl-2 border-l border-white/10">($3.332 / mes)</span>
                  </div>
                </div>
              </div>
              <ChevronRight className="text-neutral-600 group-hover:text-white transition-colors" />
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-8 pt-10">
            <span className="text-sm font-bold uppercase tracking-widest text-[#00e5ff] glow-cyan">Descarga deficit PRO ahora</span>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <a 
                  href="https://play.google.com/store/apps/details?id=com.deficitpro" 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-20 py-7 bg-[#00e5ff] text-black font-black rounded-2xl hover:bg-[#33ebff] shadow-[0_0_40px_rgba(0,229,255,0.4)] hover:shadow-[0_0_60px_rgba(0,229,255,0.6)] transition-all uppercase tracking-[0.15em] text-lg glow-cyan border-b-4 border-black/20 transform hover:-translate-y-1"
                >
                  Descargar
                </a>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">Disponible en Play Store</p>
              <p className="text-[9px] text-neutral-400 uppercase tracking-[0.3em] font-black italic opacity-50">Pronto en Appstore</p>
            </div>
          </div>
        </div>
      </section>

      {/* Referral / Promo Code Section */}
      <section className="py-24 px-12 bg-black/30">
        <div className="max-w-7xl mx-auto flex justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-brand-card border border-brand-border rounded-3xl max-w-xl w-full"
            >
               <div className="flex items-center gap-3 mb-6">
                 <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-500">
                    <Gift size={20} />
                 </div>
                 <h3 className="text-xl font-bold tracking-tight">¿Tienes un código?</h3>
               </div>

               <div className="flex gap-3 mb-8">
                 <input 
                   type="text" 
                   placeholder="CÓDIGO" 
                   className="flex-1 bg-neutral-900 border border-brand-border rounded-xl px-4 py-3 text-sm font-bold tracking-widest placeholder:text-neutral-600 focus:border-brand-emerald/50 outline-none transition-all uppercase"
                 />
                 <button className="bg-neutral-200 text-brand-dark px-6 py-3 rounded-xl font-bold text-sm hover:bg-white transition-colors">
                   Aplicar
                 </button>
               </div>

               <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
                 <div className="flex items-start gap-4 mb-6">
                   <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white shrink-0">
                     <Share2 size={18} />
                   </div>
                   <div>
                     <h4 className="font-bold text-blue-400">Comparte y Gana 1 Semana PRO</h4>
                     <p className="text-[11px] text-blue-300/70 mt-1">Pasa tu código a un amigo. Cuando lo use, ¡ambos ganan 7 días!</p>
                   </div>
                 </div>

                 <div className="flex items-center gap-3">
                   <div className="flex-1 bg-black/40 border border-white/5 rounded-xl px-4 py-3 font-mono font-bold tracking-widest text-lg flex items-center justify-center">
                     RUGT2U
                   </div>
                   <button className="text-blue-400 font-bold text-xs uppercase tracking-widest px-4 hover:text-blue-300 transition-colors">
                     Compartir
                   </button>
                 </div>
               </div>
               
               <p className="text-center text-[10px] text-neutral-500 mt-6 italic">
                 Cada alimento registrado es un compromiso con tu salud. 🍎
               </p>
            </motion.div>
        </div>
      </section>

      {/* Footer Accents */}
      <footer className="px-12 py-10 border-t border-brand-border">
        <div className="max-w-7xl mx-auto mb-10 text-center">
            <p className="brand-logo text-xl text-neutral-500 italic opacity-40">¡Que nos vaiga bien!</p>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 overflow-hidden rounded-lg border border-white/5 bg-[#111827] p-1.5 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                <div className="w-full h-full rounded-full border-2 border-brand-emerald flex items-center justify-center">
                   <div className="w-1.5 h-1.5 bg-brand-emerald rounded-full"></div>
                </div>
             </div>
             <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-500">© 2026 Deficit Pro</span>
          </div>
          <div className="flex gap-12 text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-600">
            <Link to="/Politicas" className="hover:text-brand-emerald cursor-pointer transition-all">Política de Privacidad</Link>
          </div>
          <div className="flex gap-6">
            <div className="w-8 h-8 rounded-full border border-brand-border flex items-center justify-center hover:border-brand-emerald/30 transition-colors cursor-pointer">
              <Zap size={14} className="text-neutral-600" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const UmbraLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <div className={`relative ${className} flex items-center justify-center`}>
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
      {/* Círculo de fondo crema suave */}
      <circle cx="50" cy="50" r="48" fill="#fcf8f0" />
      
      {/* Silueta Refinada de Perfil Humano (Mirando a la derecha) */}
      <defs>
        <clipPath id="humanProfileClip">
          <path d="
            M35,15 
            C48,15 62,16 72,22 
            C78,26 80,32 78,40 
            C77,44 82,46 84,48 
            C86,50 82,53 80,56 
            C78,59 81,61 82,64 
            C83,67 79,72 75,76 
            C70,82 60,86 45,88 
            L25,88 
            C18,88 15,70 15,50 
            C15,30 22,15 35,15 Z" 
          />
        </clipPath>
      </defs>
      
      {/* Mitad Izquierda (Verde azulado oscuro) */}
      <path 
        d="M50,0 L50,100 L0,100 L0,0 Z" 
        fill="#1e3a3a" 
        clipPath="url(#humanProfileClip)"
      />
      
      {/* Mitad Derecha (Ondas artísticas) */}
      <g clipPath="url(#humanProfileClip)">
        <path d="M50,15 Q65,25 55,45 T70,70 T55,88 L100,88 L100,15 Z" fill="#d1c4e9" />
        <path d="M55,15 Q75,35 60,55 T75,85 L100,85 L100,15 Z" fill="#c4e7cb" />
        <path d="M62,15 Q85,45 65,65 T85,88 L100,88 L100,15 Z" fill="#e1f5fe" />
      </g>

      {/* Texto UMBRA STUDIO (Sutil) */}
      <text x="36" y="52" fontSize="4.5" fontWeight="950" textAnchor="middle" fill="#fcf8f0" style={{ fontFamily: 'system-ui', letterSpacing: '0.05em' }}>UMBRA</text>
      <text x="36" y="58" fontSize="3" fontWeight="700" textAnchor="middle" fill="#fcf8f0" style={{ fontFamily: 'system-ui', letterSpacing: '0.2em' }}>STUDIO</text>
    </svg>
  </div>
);

const StudioPage = () => {
  return (
    <div className="min-h-screen selection:bg-purple-500 selection:text-white font-sans bg-[#020617] text-white overflow-hidden relative">
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-purple-500/10 blur-[150px] rounded-full"
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full"
        />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-8 backdrop-blur-sm bg-transparent">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
          <Link to="/" className="flex items-center gap-4 group">
             <UmbraLogo className="w-14 h-14 shadow-2xl shadow-purple-500/20 group-hover:scale-105 transition-transform" />
             <div className="flex flex-col leading-none">
                <span className="text-3xl font-black italic tracking-tighter uppercase">Umbra</span>
                <span className="text-xs font-black text-purple-500 tracking-[0.4em] uppercase">Studio</span>
             </div>
          </Link>
          <div className="hidden md:flex gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-neutral-500">
             <Link to="/" className="hover:text-white transition-colors">Deficit Pro App</Link>
             <Link to="/politicasyprivacidad" className="hover:text-white transition-colors">Políticas</Link>
             <a href="mailto:deficitpro.soporte@gmail.com" className="hover:text-white transition-colors">Soporte</a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-48 pb-32">
         <div className="max-w-7xl mx-auto px-12 text-center lg:text-left flex flex-col items-center">
            <div className="w-full space-y-12 flex flex-col items-center text-center">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
               >
                  <span className="inline-flex items-center gap-2 px-5 py-2 bg-purple-500/10 text-purple-400 text-[10px] font-black uppercase tracking-[0.4em] rounded-full border border-purple-500/20 shadow-lg shadow-purple-500/5">
                     <Rocket size={14} className="animate-bounce" /> Umbra Studios - Made in Chile
                  </span>
                  <h1 className="text-7xl md:text-[8rem] lg:text-[10rem] font-black italic tracking-tighter leading-[0.8] uppercase">
                     IA que <br/>
                     <span className="text-purple-500 underline decoration-white/10 underline-offset-8">Facilita</span> <br/>
                     tu vida.
                  </h1>
                  <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light pt-4 italic">
                     Inspirados en las nuevas fronteras de la inteligencia artificial, en Umbra Studio creamos herramientas extraordinarias que transforman la complejidad en simplicidad.
                  </p>
               </motion.div>

               <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="flex flex-col items-center gap-10 pt-12"
               >
                  <div className="flex flex-col items-center gap-4">
                    <span className="text-4xl md:text-5xl font-black uppercase tracking-[0.3em] text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,1)] animate-pulse flex flex-col items-center gap-8">
                      Nuestras Aplicaciones
                      <ChevronDown size={64} className="text-cyan-400/80 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
                    </span>
                  </div>

                  <Link 
                     to="/deficitpro"
                     className="group relative px-20 py-10 bg-cyan-400 text-black font-black rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(34,211,238,0.6)] hover:shadow-[0_0_100px_rgba(34,211,238,1)] transition-all duration-700 uppercase tracking-[0.2em] italic text-3xl"
                  >
                     <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                     <span className="relative z-10 flex items-center gap-6 group-hover:text-cyan-600 transition-colors">
                        Déficit PRO APP <ArrowRight size={40} className="group-hover:translate-x-4 transition-transform" />
                     </span>
                     {/* Dynamic Aura */}
                     <div className="absolute -inset-10 bg-cyan-400/25 blur-[100px] group-hover:bg-cyan-400/50 transition-all duration-500 -z-10 animate-pulse"></div>
                  </Link>
                  
                  <div className="flex flex-col text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 italic">
                     <span>Próximamente:</span>
                     <span className="text-neutral-300">Umbra Scan IA v2.0</span>
                  </div>
               </motion.div>
            </div>
         </div>

         <div className="max-w-7xl mx-auto px-12 pt-40">
            <div className="grid md:grid-cols-3 gap-12">
               {[
                  { icon: Brain, title: "ADN de Innovación", desc: "Desde el corazón de Chile, hackeamos el status quo tecnológico con elegancia y propósito." },
                  { icon: Lightbulb, title: "Diseño Radical", desc: "Creamos interfaces invisibles que potencian el flujo humano, eliminando distracciones para que te enfoques solo en tus metas." },
                  { icon: Globe, title: "Escalabilidad", desc: "Soluciones locales con visión cosmopolita. Si lo construimos aquí, funciona en cualquier parte del mundo." }
               ].map((item, i) => (
                  <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.15 }}
                     className="group glass-card p-12 space-y-6 bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-purple-500/40 transition-all duration-500"
                  >
                     <div className="w-16 h-16 rounded-3xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all">
                        <item.icon size={32} />
                     </div>
                     <h3 className="text-2xl font-black italic uppercase tracking-tighter">{item.title}</h3>
                     <p className="text-neutral-500 text-base leading-relaxed italic">{item.desc}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </main>

      <footer className="py-32 border-t border-white/5 text-center relative overflow-hidden">
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-purple-500/5 blur-[120px] rounded-full"></div>
         <div className="max-w-7xl mx-auto px-12 space-y-12 relative z-10">
            <div className="flex flex-col items-center gap-6">
                <span className="brand-logo text-3xl font-black italic lowercase opacity-40">Umbra Studio</span>
                <div className="flex flex-col items-center gap-6">
                   <Link to="/Politicas" className="text-[9px] font-black uppercase tracking-[0.4em] text-neutral-600 hover:text-purple-400 transition-colors cursor-pointer">Política privacidad</Link>
                   <div className="flex flex-col items-center gap-1 font-black text-neutral-500">
                      <span className="text-[8px] uppercase tracking-[0.3em] opacity-30">Contacto:</span>
                      <a href="mailto:deficitpro.soporte@gmail.com" className="text-purple-400 hover:text-white transition-colors lowercase tracking-normal font-bold text-xs">deficitpro.soporte@gmail.com</a>
                   </div>
                </div>
            </div>
            <div className="pt-6 border-t border-white/5 inline-block px-10">
               <span className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-700">© 2026 Chile — Digital Revolution</span>
            </div>
         </div>
      </footer>
    </div>
  );
};

const Policies = () => {
  return (
    <div className="min-h-screen selection:bg-purple-500 selection:text-white font-sans bg-[#020617] text-white overflow-hidden relative flex flex-col items-center py-24 px-8">
      {/* Background Accents */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[100px] rounded-full"></div>
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-8 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-4">
             <UmbraLogo className="w-10 h-10" />
             <span className="text-xl font-black italic tracking-tighter uppercase">Umbra <span className="text-purple-500">Studio</span></span>
          </Link>
          <Link to="/" className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 hover:text-white transition-colors">Volver</Link>
        </div>
      </nav>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl w-full glass-card p-10 md:p-20 space-y-16 mt-20 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-10 opacity-5">
           <UmbraLogo className="w-64 h-64 rotate-12" />
        </div>

        <div className="space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 text-purple-400 text-[8px] font-black uppercase tracking-[0.4em] rounded border border-purple-500/20">
             Deficit Pro • Privacy
          </div>
          <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-[0.9]">Políticas de <br/><span className="text-purple-500">Privacidad</span></h1>
          <div className="flex flex-col md:flex-row md:items-center gap-4 text-neutral-500 font-bold uppercase tracking-widest text-[9px]">
             <span>Última revisión: 02 de Mayo, 2026</span>
             <span className="hidden md:block opacity-30">•</span>
             <span>Región: Global</span>
          </div>
        </div>

        <div className="space-y-16 text-neutral-400 font-light leading-relaxed italic relative z-10">
          {/* Section: Introduction */}
          <section className="space-y-6">
            <p className="pl-7 text-lg text-white font-medium">
              En Deficit Pro, valoramos tu privacidad. Esta política describe cómo manejamos tus datos para brindarte la mejor experiencia en salud y bienestar.
            </p>
          </section>

          {/* Section: Datos que Recopilamos */}
          <section className="space-y-6">
            <h2 className="text-2xl font-black uppercase tracking-widest text-white border-l-4 border-purple-500 pl-6 italic">01. Datos que Recopilamos</h2>
            <p className="pl-7">
              Recopilamos información básica de tu perfil de Google (nombre, email, foto) para identificarte de forma única. También guardamos tus registros de alimentos, ejercicio y metas de salud en nuestra base de datos segura.
            </p>
          </section>

          {/* Section: Seguridad de Datos */}
          <section className="space-y-6">
            <h2 className="text-2xl font-black uppercase tracking-widest text-white border-l-4 border-cyan-400 pl-6 italic">02. Seguridad de Datos</h2>
            <p className="pl-7">
              Tus datos se almacenan en **Google Firebase**, utilizando encriptación y reglas de seguridad estrictas. No compartimos tu información personal con terceros bajo ninguna circunstancia comercial.
            </p>
          </section>

          {/* Section: Uso de la Información */}
          <section className="space-y-6">
            <h2 className="text-2xl font-black uppercase tracking-widest text-white border-l-4 border-amber-500 pl-6 italic">03. Uso de la Información</h2>
            <p className="pl-7">
              Usamos tus datos exclusivamente para calcular tu déficit calórico, mostrarte tu progreso y personalizar tu experiencia. Si eres usuario **PRO**, procesamos pagos a través de plataformas seguras como la App Store o Google Play.
            </p>
          </section>

          {/* Section: Tus Derechos */}
          <section className="space-y-6">
            <h2 className="text-2xl font-black uppercase tracking-widest text-white border-l-4 border-brand-emerald pl-6 italic">04. Tus Derechos</h2>
            <p className="pl-7">
              La transparencia es clave. Puedes eliminar tu cuenta y todos tus datos asociados en cualquier momento desde la configuración de la aplicación de forma instantánea.
            </p>
          </section>

          {/* Section: Aviso Importante (CRITICAL) */}
          <section className="space-y-6 pt-8">
            <div className="p-8 bg-red-500/5 border-2 border-red-500/20 rounded-3xl space-y-4">
               <div className="flex items-center gap-3 text-red-400">
                  <Zap size={20} className="animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-[0.4em]">Aviso importante de salud</span>
               </div>
               <p className="text-lg text-white font-bold leading-relaxed tracking-tight">
                 Deficit Pro no es un dispositivo médico ni reemplaza el consejo de un nutricionista o médico colegiado. Recomendamos encarecidamente consultar a un profesional antes de iniciar cambios drásticos en tu dieta o rutina de ejercicios.
               </p>
            </div>
          </section>

          {/* Section: Contacto */}
          <section className="space-y-6">
            <h2 className="text-xl font-black uppercase tracking-widest text-neutral-500 italic">¿Tienes dudas?</h2>
            <div className="pl-7">
              <p className="text-sm">Contáctanos directamente en nuestra línea de soporte oficial:</p>
              <a href="mailto:deficitpro.soporte@gmail.com" className="text-purple-400 font-black hover:text-purple-300 transition-colors block mt-2 text-xl">
                deficitpro.soporte@gmail.com
              </a>
            </div>
          </section>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
          <Link to="/" className="inline-flex items-center gap-4 px-10 py-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-purple-500/40 transition-all font-black uppercase tracking-[0.2em] text-[10px] group">
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Volver al Inicio
          </Link>
          <div className="flex items-center gap-4 text-neutral-600">
             <span className="text-[10px] font-black uppercase tracking-widest">Umbra Studio © 2026</span>
             <div className="w-1 h-1 rounded-full bg-neutral-800"></div>
             <span className="text-[10px] font-black uppercase tracking-widest">Santiago, Chile</span>
          </div>
        </div>
      </motion.div>

      <footer className="mt-20 py-10 opacity-20 hover:opacity-100 transition-opacity">
         <p className="text-[10px] font-black uppercase tracking-[0.6em] text-neutral-500">Innovation is the only way forward.</p>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DeficitPro />} />
        <Route path="/DeficitPro" element={<DeficitPro />} />
        <Route path="/deficitpro" element={<DeficitPro />} />
        <Route path="/pricing" element={<DeficitPro />} />
        <Route path="/features" element={<DeficitPro />} />
        <Route path="/Studio" element={<StudioPage />} />
        <Route path="/studio" element={<StudioPage />} />
        <Route path="/Politicas" element={<Policies />} />
        <Route path="/politicas" element={<Policies />} />
        <Route path="/politica" element={<Policies />} />
        <Route path="/politicasyprivacidad" element={<Policies />} />
      </Routes>
    </Router>
  );
}
