/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
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
  Apple
} from "lucide-react";

const FeatureCard = ({ children, title, icon: Icon, className = "" }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`glass-card p-6 ${className}`}
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

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-emerald selection:text-black font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 backdrop-blur-md bg-brand-dark/80 border-b border-brand-border">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
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
            <span className="brand-logo text-xl">
              Deficit <span className="text-[#00e5ff] glow-cyan lowercase">pro</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-10 text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em]">
            <a href="#features" className="hover:text-brand-emerald transition-colors">Características</a>
            <a href="#pricing" className="hover:text-brand-emerald transition-colors">Planes</a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.deficitpro" 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-2 border border-[#00e5ff]/30 text-[#00e5ff] rounded-full text-[10px] font-bold hover:bg-[#00e5ff]/10 transition-all uppercase tracking-widest ml-4 shadow-[0_0_15px_rgba(0,229,255,0.1)] flex items-center gap-2"
            >
              Download App <ChevronRight size={10} />
            </a>
          </div>
          <div className="md:hidden">
             <a href="#pricing" className="text-[10px] font-bold text-brand-emerald uppercase tracking-[0.2em] border border-brand-emerald/30 px-4 py-2 rounded-full">Planes</a>
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
              <a 
                href="#pricing"
                className="px-12 py-5 bg-[#00e5ff] text-black font-bold rounded-xl hover:bg-[#33ebff] shadow-xl shadow-[#00e5ff]/30 transition-all uppercase tracking-wider text-sm glow-cyan inline-block"
              >
                Planes
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="relative flex justify-center"
          >
            {/* iPhone Frame */}
            <div className="w-[280px] h-[560px] md:w-[320px] md:h-[640px] bg-[#1a1a1a] rounded-[3.5rem] p-3 border-[6px] border-neutral-800 shadow-2xl relative">
              {/* Screen Content */}
              <div className="w-full h-full bg-[#030712] rounded-[2.8rem] overflow-hidden flex flex-col font-sans">
                {/* Status Bar */}
                  <div className="px-8 pt-10 pb-4 flex justify-between items-center bg-brand-dark/50">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-neutral-400">Hola, Usuario</span>
                    <div className="flex items-center gap-1">
                      <span className="text-base brand-logo">Deficit <span className="text-[#00e5ff]">Pro</span></span>
                      <div className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center text-[8px]">i</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-[10px] font-bold">CL</div>
                    <div className="bg-amber-500 rounded-full px-2 py-0.5 flex items-center gap-1">
                      <Trophy size={10} className="fill-black text-black" />
                      <span className="text-[10px] font-bold text-black">8</span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 p-6 flex flex-col items-center">
                  <div className="text-[10px] uppercase tracking-widest text-brand-emerald font-bold mb-8">HOY</div>
                  
                  {/* Progress Circle */}
                  <div className="relative w-48 h-48 mb-8">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="#111827" strokeWidth="6" />
                      <motion.circle 
                        cx="50" cy="50" r="45" fill="none" stroke="#10b981" strokeWidth="6"
                        strokeDasharray="283" initial={{ strokeDashoffset: 283 }} animate={{ strokeDashoffset: 80 }}
                        transition={{ duration: 2, ease: "circOut" }} strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-5xl font-bold tracking-tighter">1776</span>
                      <span className="text-[10px] text-neutral-400">kcal restantes</span>
                    </div>
                    {/* Floating Side Icons */}
                    <div className="absolute top-[45%] -left-8 -translate-y-1/2 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/30 border-2 border-white/10">
                       <ChefHat size={12} className="text-white" />
                    </div>
                    <div className="absolute top-[34%] -right-8 w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/30 border-2 border-white/20">
                       <Zap size={10} className="text-white" />
                    </div>
                    <div className="absolute top-[44%] -right-8 w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center shadow-lg shadow-purple-600/30 border-2 border-white/10">
                       <ChefHat size={10} className="text-white" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 w-full mb-6">
                    <div className="bg-brand-card/80 border border-white/5 p-4 rounded-2xl flex flex-col items-center">
                      <span className="text-[8px] text-neutral-500 uppercase font-bold">CONSUMIDO</span>
                      <span className="text-lg font-bold text-blue-400">261 kcal</span>
                    </div>
                    <div className="bg-brand-card/80 border border-white/5 p-4 rounded-2xl flex flex-col items-center">
                      <span className="text-[8px] text-neutral-500 uppercase font-bold">QUEMADO</span>
                      <span className="text-lg font-bold text-brand-emerald">0 kcal</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 w-full mb-8">
                    <button className="bg-blue-400 text-black py-3 rounded-2xl font-bold flex items-center justify-center gap-2 text-sm">
                      <span className="w-5 h-5 rounded-full border-2 border-black flex items-center justify-center font-bold">+</span>
                      COMIDA
                    </button>
                    <button className="bg-brand-emerald text-black py-3 rounded-2xl font-bold flex items-center justify-center gap-2 text-sm">
                      <span className="w-5 h-5 rounded-full border-2 border-black flex items-center justify-center font-bold">+</span>
                      EJERCICIO
                    </button>
                  </div>

                  <div className="w-full space-y-4">
                    <div className="flex justify-between items-center px-2">
                      <span className="text-[10px] font-bold text-neutral-400 italic">AGUA <span className="opacity-50 text-[8px] font-light italic ml-1">- 1 vaso = 250cc</span></span>
                    </div>
                    <div className="bg-[#111827]/40 border border-white/5 p-5 rounded-[2.5rem] flex items-center justify-between">
                       <button className="w-12 h-12 rounded-2xl bg-[#1e293b] flex items-center justify-center text-neutral-400 border border-white/5 shadow-inner">
                          <div className="w-5 h-0.5 bg-neutral-400"></div>
                       </button>
                       <div className="flex flex-col items-center">
                          <div className="relative w-28 h-10 bg-neutral-900 border border-white/5 rounded-xl overflow-hidden flex items-center">
                             <div className="absolute inset-y-0 left-0 w-[40%] bg-blue-500/80 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                             <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-12 h-1 bg-white/5 rounded-full"></div>
                             </div>
                             {/* Small bottle cap detail */}
                             <div className="absolute right-1 w-2 h-6 border-l border-white/10 flex flex-col gap-0.5 justify-center py-1">
                                <div className="h-0.5 w-full bg-white/5"></div>
                                <div className="h-0.5 w-full bg-white/5"></div>
                             </div>
                          </div>
                          <div className="mt-2 text-lg font-bold">4 <span className="text-[10px] text-neutral-500 uppercase tracking-tighter">/ 10</span></div>
                       </div>
                       <button className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/40 border border-white/20">
                          <div className="text-2xl font-light transform -translate-y-0.5">+</div>
                       </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-neutral-800 rounded-b-2xl"></div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute w-[450px] h-[450px] bg-brand-emerald/10 blur-[100px] rounded-full -bottom-20 -right-20 -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* AI Scanner Showcase */}
      <section className="py-12 px-12 bg-[#0c0c0c] border-y border-brand-border overflow-hidden">
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
              Nuestra IA no solo cuenta calorías. Identifica platos específicos chilenos: desde una Cazuela hasta un Completo, ajustando los macros según la preparación local.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="glass-card p-6 flex flex-col gap-2 hover:border-orange-500/30">
                <span className="text-2xl font-bold flex items-center gap-2 font-display">98.4% <span className="text-[10px] text-orange-500 font-bold uppercase">Accuracy</span></span>
                <span className="text-xs text-neutral-500 leading-tight">Garantía en gastronomía nacional.</span>
              </div>
              <div className="glass-card p-6 flex flex-col gap-2 hover:border-orange-500/30">
                <span className="text-2xl font-bold flex items-center gap-2 font-display">&lt; 0.5s <span className="text-[10px] text-orange-500 font-bold uppercase">Latency</span></span>
                <span className="text-xs text-neutral-500 leading-tight">Procesamiento visual en tiempo real.</span>
              </div>
            </div>
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
      <section className="py-12 px-12 relative">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-emerald/5 blur-[120px] rounded-full -translate-y-1/2 -z-10"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 text-purple-400 text-[10px] font-bold uppercase tracking-[0.2em] rounded border border-purple-500/20">
              <MessageSquare size={12} /> Exclusivo PRO
            </div>
            <h2 className="text-5xl md:text-6xl font-light tracking-tighter leading-tight">
              Tu Personal <br/>
              <span className="font-bold italic text-brand-emerald text-gradient">Coach IA Chileno.</span>
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed font-light max-w-lg">
              No es solo una IA, es tu compañero que entiende de asados, cazuelas y porotos con riendas. Consultas ilimitadas 24/7 con el modismo que te hace sentir en casa.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm font-light text-neutral-300">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-emerald shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                Planes de entrenamiento personalizados.
              </div>
              <div className="flex items-center gap-4 text-sm font-light text-neutral-300">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-emerald shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                Sugerencias de colación para la pega.
              </div>
              <div className="flex items-center gap-4 text-sm font-light text-neutral-300">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-emerald shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                Recetas para el fin de semana largo.
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
                      ¡Wena! Soy tu Couch IA. Estoy aqui para ayudarte con tu plan nutricional y entrenamiento. ¿En qué te puedo apoyar hoy?
                    </p>
                    <span className="text-[9px] text-neutral-500 italic">12:10</span>
                  </div>
                </div>

                <div className="flex gap-3 flex-row-reverse">
                  <div className="w-8 h-8 rounded-full bg-brand-emerald/20 flex-shrink-0 flex items-center justify-center border border-brand-emerald/20">
                    <User size={14} className="text-brand-emerald" />
                  </div>
                  <div className="p-4 bg-brand-card border border-white/5 rounded-2xl rounded-tr-none">
                    <p className="text-sm font-light">¿Qué puedo almorzar hoy con 500 kcal que sea chileno?</p>
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
      <section id="features" className="py-20 px-12 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 flex justify-center"
          >
            {/* Daily Challenges Mobile Mockup View */}
            <div className="w-[280px] h-[560px] md:w-[320px] md:h-[640px] border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl bg-[#030712] relative scale-90 sm:scale-100">
              <div className="p-8 border-b border-white/5 flex justify-between items-center bg-brand-dark/50">
                <h2 className="text-xl font-display font-black tracking-tight italic">
                  <span className="text-orange-500 uppercase">DESAFÍOS</span> <span className="text-purple-400 uppercase">DIARIOS</span>
                </h2>
                <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-[10px] opacity-30">✕</div>
              </div>
              <div className="p-8 space-y-6">
                <p className="text-[10px] text-neutral-400 leading-relaxed font-light">
                  Completa estos objetivos diarios para ganar <span className="text-amber-500 font-bold">★</span> estrellas y canjearlas por acceso a funciones exclusivas. ¡Motívate y cumple tus metas cada día!
                </p>
                
                {/* Challenge Card 1 */}
                <div className="p-6 bg-[#061e1b] border border-brand-emerald/30 rounded-[2rem] relative overflow-hidden group">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-brand-emerald flex items-center justify-center shadow-lg shadow-brand-emerald/20 text-brand-dark">
                       <Droplets size={28} />
                    </div>
                    <div className="text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]">
                      <Trophy size={20} className="fill-amber-500" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold tracking-tight mb-1">Hidratación Completa</h4>
                    <p className="text-[8px] font-black text-brand-emerald tracking-[0.2em] uppercase mb-4 italic">BEBE TODOS TUS VASOS DE AGUA.</p>
                    <div className="h-2 w-full bg-[#111827] rounded-full overflow-hidden mb-3">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1.5 }}
                        className="h-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.5)]"
                      ></motion.div>
                    </div>
                    <div className="flex justify-between items-center text-[9px] font-bold">
                       <span className="text-neutral-500 uppercase italic tracking-tighter">10 / 10 VASOS</span>
                       <span className="text-brand-emerald uppercase tracking-tighter">¡COMPLETADO! +1 ★</span>
                    </div>
                  </div>
                </div>

                {/* Challenge Card 2 */}
                <div className="p-6 bg-[#061e1b] border border-brand-emerald/30 rounded-[2rem] relative opacity-60">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-brand-emerald flex items-center justify-center text-brand-dark">
                       <div className="w-7 h-7 rounded-full border-4 border-brand-dark flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-brand-dark"></div>
                       </div>
                    </div>
                    <div className="text-amber-500 opacity-40">
                      <Trophy size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold tracking-tight mb-1 flex items-center gap-2">Nutrición Constante</h4>
                    <p className="text-[8px] font-black text-neutral-500 tracking-[0.2em] uppercase mb-4 italic">REGISTRA AL MENOS 3 COMIDAS.</p>
                    <div className="h-2 w-full bg-[#111827] rounded-full overflow-hidden mb-3">
                      <div className="h-full w-0 bg-orange-500"></div>
                    </div>
                  </div>
                </div>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="p-6 bg-brand-card border border-brand-border rounded-2xl group hover:border-brand-emerald/30 transition-all">
                  <div className="text-amber-500 font-bold mb-2 flex items-center gap-2 uppercase tracking-widest text-[10px]">★ Scan IA Premium</div>
                  <p className="text-xs text-neutral-500 leading-relaxed">Detección avanzada de platos complejos chilenos ilimitada.</p>
               </div>
               <div className="p-6 bg-brand-card border border-brand-border rounded-2xl group hover:border-brand-emerald/30 transition-all">
                  <div className="text-brand-emerald font-bold mb-2 flex items-center gap-2 uppercase tracking-widest text-[10px]">★ Coach ilimitado</div>
                  <p className="text-xs text-neutral-500 leading-relaxed">Habla con tu Coach IA sin restricciones de mensajes diarios.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Control Total Section */}
      <section className="py-20 px-12 max-w-7xl mx-auto border-t border-brand-border">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-20">
          <div>
            <span className="text-brand-emerald text-[10px] font-bold uppercase tracking-[0.3em]">Operational Precision</span>
            <h2 className="text-4xl font-light uppercase tracking-tighter mt-4">Control <span className="font-bold italic">Total</span></h2>
          </div>
          <p className="text-neutral-400 max-w-xs text-sm leading-relaxed font-light">
            Monitorea cada variable de tu saludo con herramientas diseñadas para el rigor científico.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard title="Hidratación Diaria" icon={Droplets}>
            <div className="flex justify-center mb-6">
              {/* Water Bottle Visualization */}
              <div className="relative w-12 h-24">
                {/* Cap */}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-2 bg-neutral-700 rounded-sm"></div>
                {/* Neck */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-6 h-3 bg-neutral-800 rounded-sm"></div>
                {/* Body */}
                <div className="absolute top-4 w-full h-20 bg-neutral-900 border border-white/10 rounded-lg overflow-hidden">
                   {/* Water Fill */}
                   <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: "50%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="absolute bottom-0 w-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.4)]"
                   ></motion.div>
                </div>
              </div>
            </div>
            <p className="text-4xl font-bold tracking-tighter text-center">2.4 <span className="text-sm font-normal text-neutral-500 uppercase tracking-widest ml-1">Litros</span></p>
          </FeatureCard>


          <FeatureCard title="Desafíos Elite" icon={Trophy}>
            <div className="flex gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand-emerald/10 border border-brand-emerald/20 flex items-center justify-center text-brand-emerald">
                <CheckCircle2 size={20} />
              </div>
              <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-brand-border flex items-center justify-center text-neutral-700">
                <Trophy size={20} />
              </div>
            </div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-brand-emerald mb-2">Current XP</div>
            <p className="text-4xl font-bold tracking-tighter">4,850</p>
          </FeatureCard>

          <FeatureCard title="Nivel Macro" icon={CheckCircle2}>
            <div className="space-y-4">
              <div className="space-y-1.5">
                <div className="flex justify-between text-[10px] font-bold uppercase text-neutral-500 tracking-tighter italic">
                  <span>Protein</span>
                  <span className="text-brand-emerald">75%</span>
                </div>
                <div className="h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
                  <div className="h-full w-[75%] bg-brand-emerald"></div>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between text-[10px] font-bold uppercase text-neutral-500 tracking-tighter italic">
                   <span>Carbs</span>
                   <span className="text-white">40%</span>
                </div>
                <div className="h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
                  <div className="h-full w-[40%] bg-neutral-400"></div>
                </div>
              </div>
            </div>
          </FeatureCard>
        </div>
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
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="glass-card p-8 border-brand-border">
              <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-4 block">Plan Initial</span>
              <h4 className="text-2xl font-bold mb-2 italic">Gratis <span className="text-xs font-normal opacity-40 italic">con anuncios</span></h4>
              <ul className="space-y-3 mt-6">
                <li className="flex items-center gap-3 text-xs text-neutral-400">
                  <CheckCircle2 size={14} className="text-brand-emerald" /> 1 Escaneo diario gratis
                </li>
                <li className="flex items-center gap-3 text-xs text-neutral-400">
                  <CheckCircle2 size={14} className="text-brand-emerald" /> Registro manual ilimitado
                </li>
              </ul>
            </div>

            <div className="glass-card p-8 border-brand-emerald/30 bg-brand-emerald/5 scale-105 shadow-2xl shadow-brand-emerald/10">
              <span className="text-[10px] font-bold text-brand-emerald uppercase tracking-widest mb-4 block">Recommended</span>
              <h4 className="text-2xl font-bold mb-2 italic">Pro 1 Mes</h4>
              <p className="text-3xl font-bold italic mb-6">$4.990 <span className="text-xs font-normal opacity-40">/ mes</span></p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-xs text-neutral-300">
                  <CheckCircle2 size={14} className="text-brand-emerald" /> 5 Escaneos diarios IA
                </li>
                <li className="flex items-center gap-3 text-xs text-neutral-300 font-bold italic">
                  <CheckCircle2 size={14} className="text-brand-emerald" /> IA Coach Chileno 24/7
                </li>
              </ul>
            </div>

            <div className="glass-card p-8 border-brand-border">
              <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-4 block">Best Value</span>
              <h4 className="text-2xl font-bold mb-2 italic">Pro 1 Año</h4>
              <p className="text-3xl font-bold italic mb-6">$29.990 <span className="text-xs font-normal opacity-40">/ año</span></p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-xs text-neutral-400">
                  <CheckCircle2 size={14} className="text-brand-emerald" /> Todo lo de PRO
                </li>
                <li className="flex items-center gap-3 text-xs text-brand-emerald font-bold">
                  <CheckCircle2 size={14} /> Ahorra 50% vs mensual
                </li>
              </ul>
            </div>
          </div>

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
            <p className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">Disponible en Play Store</p>
          </div>
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
            <span className="hover:text-brand-emerald cursor-pointer transition-all">Política de Privacidad</span>
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
}
