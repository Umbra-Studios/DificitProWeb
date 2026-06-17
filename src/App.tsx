/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
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
  Newspaper,
  ShieldCheck,
  Heart,
  Mail,
  Trash2,
  Sparkles,
  Ban,
  Download,
  Play
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
      hidden: { opacity: 0.8, y: 10 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } }
    }}
    className={`glass-card p-6 shadow-xl hover:shadow-brand-emerald/5 transition-all duration-150 ${className}`}
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
  const [activeScreen, setActiveScreen] = useState<"home" | "news">("home");
  const [preRegEmail, setPreRegEmail] = useState("");
  const [preRegSubmitted, setPreRegSubmitted] = useState(false);
  const [preRegCode, setPreRegCode] = useState("");
  const [preRegError, setPreRegError] = useState("");
  const [preRegSending, setPreRegSending] = useState(false);

  const [ingredients, setIngredients] = useState([
    { id: 1, name: 'Pan Marraqueta', cal: 270, weight: 100, p: 8, c: 56, g: 1 },
    { id: 2, name: 'Potito (Recto de vacuno)', cal: 160, weight: 100, p: 18, c: 0, g: 10 },
    { id: 3, name: 'Longaniza (Vienesa/Salc)', cal: 290, weight: 50, p: 12, c: 3, g: 25 },
    { id: 4, name: 'Cebolla y Pebre', cal: 20, weight: 50, p: 0.5, c: 4.5, g: 0.1 },
    { id: 5, name: 'Aceite de Oliva (Cocción)', cal: 44, weight: 5, p: 0, c: 0, g: 5 }
  ]);

  const handleDeleteIngredient = (id: number) => {
    setIngredients(prev => prev.filter(ing => ing.id !== id));
  };

  const handleAddIngredient = () => {
    const names = ['Huevo Frito', 'Queso Mantecoso', 'Palta Molida', 'Tomate Picado', 'Mayonesa Casera'];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const newId = Date.now();
    setIngredients(prev => [
      ...prev,
      {
        id: newId,
        name: randomName,
        cal: Math.floor(Math.random() * 150) + 50,
        weight: Math.floor(Math.random() * 80) + 20,
        p: Math.floor(Math.random() * 10),
        c: Math.floor(Math.random() * 15),
        g: Math.floor(Math.random() * 12)
      }
    ]);
  };

  const totalCal = ingredients.reduce((sum, ing) => sum + ing.cal, 0);
  const totalP = Math.round(ingredients.reduce((sum, ing) => sum + ing.p, 0) * 10) / 10;
  const totalC = Math.round(ingredients.reduce((sum, ing) => sum + ing.c, 0) * 10) / 10;
  const totalG = Math.round(ingredients.reduce((sum, ing) => sum + ing.g, 0) * 10) / 10;

  // Let page reload reset pre-registration view so users can always see the cyan pre-registration form again if they refresh
  useEffect(() => {
    // Only fetch saved code if needed but don't force show success screen on reload
    const savedCode = localStorage.getItem("deficit_pro_code");
    if (savedCode) {
      setPreRegCode(savedCode);
    }
  }, []);

  const handlePreRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!preRegEmail.trim()) {
      setPreRegError("Por favor ingresa un correo electrónico.");
      return;
    }
    if (!preRegEmail.includes("@") || !preRegEmail.includes(".")) {
      setPreRegError("Por favor ingresa un correo electrónico válido.");
      return;
    }
    
    setPreRegError("");
    setPreRegSending(true);

    const randomSuffix = Math.random().toString(36).substring(2, 7).toUpperCase();
    const code = `DP7-${randomSuffix}`;

    // Standard Formspree ID config or fallback
    const formspreeId = (import.meta as any).env.VITE_FORMSPREE_FORM_ID || "mzdwlepb"; // Default configurable Formspree ID or configured in .env

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          email: preRegEmail,
          code: code,
          message: `Nuevo Pre-registro de Deficit PRO! Código exclusivo de 7 días PRO asignado: ${code}`
        })
      });

      // Whether Formspree works or we hitting local environment limits, we proceed
      setPreRegCode(code);
      setPreRegSubmitted(true);
      localStorage.setItem("deficit_pro_preregistered", "true");
      localStorage.setItem("deficit_pro_code", code);
    } catch (err) {
      console.warn("Formspree submission has a client fallback:", err);
      // Fallback guarantees that user still receives their 7-day Pro code successfully in the UI
      setPreRegCode(code);
      setPreRegSubmitted(true);
      localStorage.setItem("deficit_pro_preregistered", "true");
      localStorage.setItem("deficit_pro_code", code);
    } finally {
      setPreRegSending(false);
    }
  };

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
        <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-brand-emerald/10 blur-[120px] rounded-full" />
        <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-[#00e5ff]/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-purple-400/5 blur-[100px] rounded-full" />
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
            <a 
              href="https://play.google.com/store/apps/details?id=app.deficitpro.android"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#39ff14] transition-colors cursor-pointer text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 font-sans"
            >
              Descargar
            </a>
            <Link to="/Studio" className="hover:text-brand-emerald transition-colors">Studio</Link>
          </div>
          <div className="md:hidden flex gap-2">
             <Link to="/Studio" className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em] border border-white/10 px-4 py-2 rounded-full">Studio</Link>
             <a 
               href="https://play.google.com/store/apps/details?id=app.deficitpro.android"
               target="_blank"
               rel="noopener noreferrer"
               className="text-[10px] font-bold text-[#39ff14] uppercase tracking-[0.2em] border border-[#39ff14]/30 bg-[#39ff14]/5 px-4 py-2 rounded-full cursor-pointer font-sans"
             >
               descargar
             </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-12 overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-emerald/5 blur-[120px] rounded-full -z-10"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
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

            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
              <div className="flex flex-col">
                <span className="text-3xl font-bold tracking-tighter text-[#00e5ff] glow-cyan">10.000</span>
                <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold mt-1">proyectamos en 6 meses!</span>
              </div>
              <div className="hidden sm:block w-[1px] h-12 bg-brand-border"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold tracking-tighter">4.9/5</span>
                <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold mt-1">en usuarios testers</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a 
                href="https://play.google.com/store/apps/details?id=app.deficitpro.android"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-5 bg-[#39ff14] text-black font-black rounded-xl hover:bg-[#5aff3d] shadow-[0_0_30px_rgba(57,255,20,0.55)] hover:shadow-[0_0_50px_rgba(57,255,20,0.9)] transition-all duration-300 uppercase tracking-wider text-[11px] md:text-xs inline-flex items-center justify-center gap-2 border-b-4 border-black/25 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer font-sans text-center"
              >
                <Download size={16} className="stroke-[3px] animate-bounce" />
                <span>DESCARGA EN PLAYSTORE AHORA</span>
              </a>
              
              <button 
                onClick={() => {
                  const el = document.getElementById("pre-register");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-5 bg-[#00e5ff]/10 hover:bg-[#00e5ff]/20 text-[#00e5ff] border border-[#00e5ff]/30 font-bold rounded-xl transition-all uppercase tracking-wider text-[11px] md:text-xs cursor-pointer font-sans"
              >
                deja tu correo y gana 7 días gratis PRO
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="relative flex justify-center"
          >
            {/* iPhone Frame */}
            <div className="w-[300px] h-[600px] md:w-[340px] md:h-[680px] bg-[#0c0c0c] rounded-[3.5rem] p-3 border-[6px] border-[#1a1a1a] shadow-2xl relative">
              {/* Screen Content */}
              <div className="w-full h-full bg-[#020617] rounded-[2.8rem] overflow-hidden flex flex-col font-sans relative">
                {activeScreen === "home" ? (
                  <>
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
                    <div className="absolute top-[35%] -left-10 flex flex-col gap-2.5">
                       <motion.div 
                          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }}
                          className="w-9 h-9 rounded-2xl bg-[#facc15] border border-white/10 flex items-center justify-center text-black shadow-[0_0_20px_rgba(250,204,21,0.4)] cursor-pointer hover:scale-110 active:scale-95 transition-transform"
                          onClick={() => setActiveScreen("news")}
                       >
                          <BookOpen size={16} />
                       </motion.div>
                       <motion.div 
                          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.55 }}
                          className="w-9 h-9 rounded-2xl bg-[#ef4444] border border-white/10 flex items-center justify-center text-white shadow-[0_0_20px_rgba(239,68,68,0.4)] cursor-pointer hover:scale-110 active:scale-95 transition-transform"
                          onClick={() => setActiveScreen("news")}
                       >
                          <Newspaper size={16} />
                       </motion.div>
                    </div>

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
                  </>
                ) : (
                  <div className="flex-1 flex flex-col overflow-y-auto px-5 pt-12 pb-6 bg-[#030712] scrollbar-hide text-white relative">
                    {/* Header */}
                    <div className="flex justify-between items-center bg-[#030712] pb-3 border-b border-white/5 sticky top-0 z-20">
                      <h2 className="text-[12px] font-black italic tracking-tighter uppercase leading-none text-white max-w-[170px] truncate">
                        NOTICIAS DE SALUD DE ALTA REL...
                      </h2>
                      <div className="flex items-center gap-1.5">
                        <button className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-bold text-neutral-400 hover:text-white transition-colors bg-white/5">
                          Aa
                        </button>
                        <button 
                          onClick={() => setActiveScreen("home")}
                          className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-[10px] text-neutral-400 hover:text-white transition-colors bg-white/5 cursor-pointer"
                        >
                          ✕
                        </button>
                      </div>
                    </div>

                    <div className="mt-4 space-y-4">
                      {/* Subtitle */}
                      <p className="text-[11px] font-semibold text-[#00e5ff] leading-normal tracking-tight">
                        Artículos reales, estudios de rigor clínico y soporte científico para potenciar tu disciplina.
                      </p>

                      {/* Card 1 */}
                      <div className="bg-[#0a0f1d]/90 border border-white/5 p-3.5 rounded-2xl space-y-3 shadow-lg">
                        <div className="flex items-center justify-between">
                          <span className="text-[7.5px] font-bold uppercase tracking-wider text-[#0ea5e9]">
                            BALANCE CALÓRICO • MECANISMOS
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="mt-0.5 p-1 rounded bg-[#ef4444]/15 text-[#ef4444] shrink-0 border border-[#ef4444]/30">
                            <ShieldCheck size={11} />
                          </div>
                          <h3 className="text-xs font-bold text-white leading-tight">
                            Deficit calórico, la importancia de la moderación y la constancia
                          </h3>
                        </div>
                        <div className="border-l-2 border-dashed border-neutral-700/80 pl-2.5 py-0.5">
                          <p className="text-[9.5px] text-neutral-400 font-light leading-relaxed italic">
                            "Desde estos estudios nace nuestra motivación: comprender que la restricción absurda solo enferma, mientras que el déficit constante modela el cuerpo de verdad."
                          </p>
                        </div>
                        <div className="text-[8px] font-bold text-[#00e5ff] tracking-wider uppercase hover:underline cursor-pointer flex items-center gap-1">
                          &gt; EXPANDIR ANÁLISIS CLINICO
                        </div>
                      </div>

                      {/* Card 2 */}
                      <div className="bg-[#0a0f1d]/90 border border-[#ef4444]/15 p-3.5 rounded-2xl space-y-3 shadow-lg">
                        <div className="flex items-center justify-between">
                          <span className="text-[7.5px] font-bold uppercase tracking-wider text-[#0ea5e9]">
                            GLUCOSA • NUTRICIÓN
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="mt-0.5 p-1 rounded bg-[#ef4444]/15 text-[#ef4444] shrink-0 border border-[#ef4444]/30">
                            <ShieldCheck size={11} />
                          </div>
                          <h3 className="text-xs font-bold text-white leading-tight">
                            La respuesta glucémica del pan
                          </h3>
                        </div>
                        <div className="border-l-2 border-dashed border-neutral-700/80 pl-2.5 py-0.5">
                          <p className="text-[9.5px] text-neutral-400 font-light leading-relaxed italic">
                            "Recuerda reducir el consumo de pan, este suele ser denso en energía y carbohidratos simples, afectando la saciedad y el microbioma."
                          </p>
                        </div>
                        <div className="text-[8px] font-bold text-[#00e5ff] tracking-wider uppercase hover:underline cursor-pointer flex items-center gap-1">
                          &gt; EXPANDIR ANÁLISIS CLINICO
                        </div>
                      </div>
                    </div>
                  </div>
                )}
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
            
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="h-[2px] w-8 bg-[#00e5ff] shadow-[0_0_8px_#00e5ff]"></div>
                <h3 className="text-xl font-black uppercase tracking-[0.13em] text-[#00e5ff] glow-cyan italic">★ FUNCIONES PRO ★</h3>
                <div className="h-[2px] flex-1 bg-neutral-800"></div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Card 1: Scan IA */}
                <div className="p-6 bg-[#040813]/60 border border-white/5 rounded-2xl group hover:border-[#00e5ff]/35 transition-all shadow-xl hover:shadow-[#00e5ff]/5 flex flex-col justify-between">
                   <div>
                     <div className="text-[#00e5ff] font-black mb-2.5 flex items-center gap-2 uppercase tracking-widest text-xs">
                        <Sparkles size={14} className="animate-pulse" /> SCAN IA
                     </div>
                     <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                        Tómale una foto a tu alimento o sube una foto de la galería.
                     </p>
                   </div>
                   <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px]">
                      <span className="text-neutral-500 font-bold uppercase tracking-wider">Límites diarios</span>
                      <span className="text-[#00e5ff] font-black uppercase tracking-wider bg-[#00e5ff]/5 px-2.5 py-1 rounded border border-[#00e5ff]/20">5 Intentos Diarios</span>
                   </div>
                </div>

                {/* Card 2: Coach IA */}
                <div className="p-6 bg-[#040813]/60 border border-white/5 rounded-2xl group hover:border-purple-500/30 transition-all shadow-xl hover:shadow-purple-500/5 flex flex-col justify-between">
                   <div>
                     <div className="text-purple-400 font-black mb-2.5 flex items-center gap-2 uppercase tracking-widest text-xs">
                        <MessageSquare size={14} /> COACH IA
                     </div>
                     <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                        Disfruta del mejor entrenador, elige su estilo <span className="text-purple-300 underline underline-offset-2">chileno-neutro</span> para guiar tus metas.
                     </p>
                   </div>
                   <div className="mt-4 pt-3 border-t border-white/5 flex flex-col gap-1.5 text-[10px]">
                      <div className="flex justify-between items-center text-neutral-500">
                        <span className="uppercase tracking-wider font-bold">Gratuita</span>
                        <span className="font-bold">2 Intentos</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-purple-400 uppercase tracking-widest font-black">Versión PRO</span>
                        <span className="text-purple-400 font-black uppercase tracking-wider bg-purple-500/10 px-2.5 py-1 rounded border border-purple-500/20">50 Intentos</span>
                      </div>
                   </div>
                </div>

                {/* Card 3: Búsqueda IA inteligente */}
                <div className="p-6 bg-[#040813]/60 border border-white/5 rounded-2xl group hover:border-amber-400/30 transition-all shadow-xl hover:shadow-amber-500/5 flex flex-col justify-between">
                   <div>
                     <div className="text-amber-500 font-black mb-2.5 flex items-center gap-2 uppercase tracking-widest text-xs">
                        <Zap size={14} /> Búsqueda IA Inteligente
                     </div>
                     <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                        Nuestra novedad: escríbele a la IA todo lo que comiste y lo desglosará, además puedes quitar o agregar ingredientes de forma simple.
                     </p>
                   </div>
                   <div className="mt-4 pt-3 border-t border-white/5 flex flex-col gap-1.5 text-[10px]">
                      <div className="flex justify-between items-center text-neutral-500">
                        <span className="uppercase tracking-wider font-bold">Gratuita</span>
                        <span className="font-bold">2 Intentos</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-amber-400 uppercase tracking-widest font-black">Versión PRO</span>
                        <span className="text-amber-400 font-black uppercase tracking-wider bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">10 Intentos</span>
                      </div>
                   </div>
                </div>

                {/* Card 4: Cero Publicidad */}
                <div className="p-6 bg-[#040813]/60 border border-white/5 rounded-2xl group hover:border-brand-emerald/30 transition-all shadow-xl hover:shadow-emerald-500/5 flex flex-col justify-between">
                   <div>
                     <div className="text-brand-emerald font-black mb-2.5 flex items-center gap-2 uppercase tracking-widest text-xs">
                        <Ban size={14} /> Cero Publicidad
                     </div>
                     <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                        Elimina por completo las publicidades de la aplicación y todos los molestos mensajes en pantalla solicitando suscribirte o de apoyo al equipo.
                     </p>
                   </div>
                   <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px]">
                      <span className="text-neutral-500 font-bold uppercase tracking-wider">Experiencia PRO</span>
                      <span className="text-brand-emerald font-black uppercase tracking-wider bg-brand-emerald/5 px-2.5 py-1 rounded border border-brand-emerald/20">100% Ininterrumpido</span>
                   </div>
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
                   <span className="text-sm font-medium italic">"sánguche de potito"</span>
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
                  
                  {ingredients.length === 0 ? (
                    <div className="text-center py-6 border-2 border-dashed border-white/5 rounded-2xl">
                      <p className="text-neutral-500 text-xs uppercase tracking-widest font-bold">Sin ingredientes</p>
                      <p className="text-[10px] text-neutral-600 mt-1">Agrega un ingrediente para comenzar</p>
                    </div>
                  ) : (
                    ingredients.map((ing) => (
                      <motion.div 
                        key={ing.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-2 group relative border border-transparent hover:border-white/5 p-1 rounded-xl transition-all"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                             <Zap size={16} className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                             <span className="text-base font-bold text-white tracking-tight">{ing.name}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex items-baseline gap-1">
                              <span className="text-lg font-bold text-[#38bdf8]">{ing.cal}</span>
                              <span className="text-[10px] font-bold text-neutral-500 uppercase">KCAL</span>
                            </div>
                            
                            {/* Trash button */}
                            <button 
                              onClick={() => handleDeleteIngredient(ing.id)}
                              className="text-neutral-500 hover:text-red-400 p-1.5 rounded-lg hover:bg-red-500/10 transition-colors cursor-pointer bg-transparent border-none flex items-center justify-center"
                              title="Eliminar ingrediente"
                            >
                              <Trash2 size={13} />
                            </button>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 pl-7">
                          <div className="bg-[#1e293b]/50 border border-white/5 rounded-lg px-4 py-1.5 flex items-center justify-center text-xs font-bold text-white shadow-inner">
                            {ing.weight} <span className="text-[10px] ml-1 opacity-50 font-normal">g</span>
                          </div>
                          <div className="flex gap-1">
                            {[
                              { label: 'P', val: ing.p },
                              { label: 'C', val: ing.c },
                              { label: 'G', val: ing.g }
                            ].map(macro => (
                              <div key={macro.label} className="bg-[#1e293b]/30 border border-white/5 rounded-lg px-2 py-1 flex items-center gap-1 text-[10px] font-bold text-neutral-400">
                                <span className="opacity-50">{macro.label}:</span> {macro.val}g
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))
                  )}

                  <button 
                    onClick={handleAddIngredient}
                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-neutral-500 italic hover:text-white transition-colors pt-2 cursor-pointer bg-transparent border-none"
                  >
                    <span className="text-sm">+</span> AGREGAR NUEVO INGREDIENTE
                  </button>
                </div>

                <div className="grid grid-cols-4 gap-2 pt-6">
                  {[
                    { label: 'KCAL', val: `${totalCal}`, glow: 'rgba(56,189,248,0.2)', bg: '#082f49' },
                    { label: 'PROTE', val: `${totalP} g`, glow: 'rgba(16,185,129,0.2)', bg: '#064e3b' },
                    { label: 'CARB', val: `${totalC} g`, glow: 'rgba(245,158,11,0.2)', bg: '#451a03' },
                    { label: 'GRASA', val: `${totalG} g`, glow: 'rgba(157,23,77,0.2)', bg: '#500724' }
                  ].map((macro, i) => (
                    <div 
                      key={i} 
                      className="rounded-2xl p-2.5 flex flex-col items-center justify-center border border-white/5 relative overflow-hidden group shadow-xl"
                      style={{ backgroundColor: macro.bg }}
                    >
                       <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity" style={{ boxShadow: `inset 0 0 20px ${macro.glow}` }}></div>
                       <div className="text-[8px] font-black text-neutral-400 mb-1 tracking-widest relative z-10">{macro.label}</div>
                       <div className="text-[13px] font-black text-white relative z-10">{macro.val}</div>
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

      {/* Clinically Rigorous Health News Showcase */}
      <section className="py-24 px-12 bg-[#020617] border-b border-brand-border relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-sky-500/5 blur-[150px] rounded-full -translate-y-1/2 -z-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ef4444]/15 text-[#ef4444] text-[10px] font-bold uppercase tracking-[0.2em] rounded border border-[#ef4444]/25">
              <Newspaper size={12} /> Evidencia & Rigor Científico
            </div>
            <h2 className="text-5xl md:text-6xl font-light tracking-tighter leading-tight text-white">
              Noticias de Salud de <br/>
              <span className="font-bold italic text-[#00e5ff] glow-cyan">Alta Relevancia.</span>
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed font-light max-w-lg">
              Estudios clínicos, mecanismos biológicos y artículos reales de rigor para potenciar tu disciplina de déficit calórico sin mitos ni falsedades.
            </p>
            
            <div className="flex gap-4 pt-2">
              <div className="bg-[#0a0f1d] border border-white/5 p-4 py-3.5 rounded-2xl flex items-center gap-4 shadow-xl">
                <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase text-neutral-400 tracking-wider">Sin fake news</h4>
                  <p className="text-sm text-white font-medium mt-1">Soporte científico verificado</p>
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
            {/* Screen Content as a Showcase Dashboard Card */}
            <div className="w-full max-w-[380px] bg-[#030712] rounded-[3rem] border-[6px] border-neutral-800 shadow-2xl relative overflow-hidden p-6 flex flex-col gap-6">
              
              {/* Header inside mockup */}
              <div className="flex justify-between items-center bg-[#030712] pb-3 border-b border-white/5">
                <h2 className="text-[12px] font-black italic tracking-tighter uppercase leading-none text-white">
                  NOTICIAS DE SALUD DE ALTA REL...
                </h2>
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-bold text-neutral-400 bg-white/5">
                    Aa
                  </div>
                  <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-[10px] text-neutral-500 bg-white/5">
                    ✕
                  </div>
                </div>
              </div>

              {/* Subheading text */}
              <p className="text-[12px] font-semibold text-[#00e5ff] leading-normal tracking-tight">
                Artículos reales, estudios de rigor clínico y soporte científico para potenciar tu disciplina.
              </p>

              {/* News cards stack */}
              <div className="space-y-4">
                {/* News Card 1 */}
                <div className="bg-[#0a0f1d] border border-white/5 p-4 rounded-2xl space-y-3 shadow-lg hover:border-white/10 transition-colors text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-bold uppercase tracking-wider text-[#0ea5e9]">
                      BALANCE CALÓRICO • MECANISMOS
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5 p-1 rounded bg-[#ef4444]/15 text-[#ef4444] shrink-0 border border-[#ef4444]/30">
                      <ShieldCheck size={11} />
                    </div>
                    <h3 className="text-xs font-bold text-white leading-tight">
                      Deficit calórico, la importancia de la moderación y la constancia
                    </h3>
                  </div>
                  <div className="border-l-2 border-dashed border-neutral-700/80 pl-2.5 py-0.5">
                    <p className="text-[10px] text-neutral-400 font-light leading-relaxed italic">
                      "Desde estos estudios nace nuestra motivación: comprender que la restricción absurda solo enferma, mientras que el déficit constante modela el cuerpo de verdad."
                    </p>
                  </div>
                  <div className="text-[8.5px] font-bold text-[#00e5ff] tracking-wider uppercase hover:underline cursor-pointer">
                    &gt; EXPANDIR ANÁLISIS CLÍNICO
                  </div>
                </div>

                {/* News Card 2 */}
                <div className="bg-[#0a0f1d] border border-white/5 p-4 rounded-2xl space-y-3 shadow-lg hover:border-white/10 transition-colors text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-bold uppercase tracking-wider text-[#0ea5e9]">
                      GLUCOSA • NUTRICIÓN
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5 p-1 rounded bg-[#ef4444]/15 text-[#ef4444] shrink-0 border border-[#ef4444]/30">
                      <ShieldCheck size={11} />
                    </div>
                    <h3 className="text-xs font-bold text-white leading-tight">
                      La respuesta glucémica del pan
                    </h3>
                  </div>
                  <div className="border-l-2 border-dashed border-neutral-700/80 pl-2.5 py-0.5">
                    <p className="text-[10px] text-neutral-400 font-light leading-relaxed italic">
                      "Recuerda reducir el consumo de pan, este suele ser denso en energía y carbohidratos simples, afectando la saciedad y el microbioma."
                    </p>
                  </div>
                  <div className="text-[8.5px] font-bold text-[#00e5ff] tracking-wider uppercase hover:underline cursor-pointer">
                    &gt; EXPANDIR ANÁLISIS CLÍNICO
                  </div>
                </div>
              </div>

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
              <p className="text-neutral-400 text-sm font-light leading-relaxed">
                Sin anuncios, sin alertas solicitando suscribirte o apoyo al equipo, con hasta 50 consultas de Coach IA y 10 de búsqueda inteligente.
              </p>
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
              className="glass-card p-6 border-[#00e5ff]/35 bg-[#00e5ff]/5 flex items-center justify-between group cursor-pointer relative"
            >
              <div className="absolute -top-3 right-8 bg-orange-500 text-black text-[8px] font-black uppercase px-3 py-1 rounded-full tracking-widest shadow-[0_0_15px_rgba(249,115,22,0.5)]">
                Mejor Valor
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center text-amber-500 border border-amber-500/30">
                  <Star size={24} className="fill-amber-500" />
                </div>
                <div className="text-left">
                  <h4 className="font-black text-lg tracking-tighter uppercase italic">Anual</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400 font-bold text-lg leading-tight">$39.990 CLP</span>
                    <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest pl-2 border-l border-white/10">($3.332 / mes)</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-1.5 text-[9px] font-black uppercase tracking-wider text-brand-emerald">
                     <Gift size={11} className="text-brand-emerald" />
                     <span>¡Regala 12 meses GRATIS a un amigo/a! 🎁</span>
                  </div>
                </div>
              </div>
              <ChevronRight className="text-neutral-600 group-hover:text-white transition-colors" />
            </motion.div>
          </motion.div>

          {/* Pre-Register Section */}
          <div id="pre-register" className="flex flex-col items-center gap-8 pt-10 scroll-mt-28">
            {!preRegSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-xl bg-brand-card/80 border border-brand-border rounded-[2.5rem] p-8 md:p-10 shadow-2xl space-y-8 backdrop-blur-xl relative overflow-hidden"
              >
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00e5ff]/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-brand-emerald/10 rounded-full blur-3xl pointer-events-none"></div>

                <div className="text-center space-y-3">
                  <span className="px-3 py-1 bg-[#00e5ff]/10 text-[#00e5ff] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full border border-[#00e5ff]/20">
                    Lanzamiento Exclusivo
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-black tracking-tight uppercase italic leading-[1.1]">
                    envíanos tu correo <br/>
                    <span className="text-[#00e5ff] glow-cyan">y recibe 7 días PRO</span>
                  </h3>
                  <p className="text-neutral-400 text-xs font-light max-w-md mx-auto">
                    Déjanos tu correo. Una vez validado tu pre-registro, te contactaremos y enviaremos tu acceso exclusivo de cortesía de forma 100% personalizada.
                  </p>
                </div>

                <form onSubmit={handlePreRegister} className="space-y-4">
                  {preRegError && (
                    <motion.div 
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-xs text-red-400 font-bold bg-red-500/10 border border-red-500/20 px-4 py-3 rounded-xl text-center"
                    >
                      {preRegError}
                    </motion.div>
                  )}

                  <div className="space-y-4">
                    {/* Email Input */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block ml-1">E-mail</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                          <Mail size={16} />
                        </div>
                        <input 
                          type="email" 
                          required
                          disabled={preRegSending}
                          value={preRegEmail}
                          onChange={(e) => setPreRegEmail(e.target.value)}
                          placeholder="usuario@tuemail.com" 
                          className="w-full bg-[#030712] border border-white/5 rounded-2xl pl-10 pr-4 py-4 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#00e5ff] transition-all disabled:opacity-50"
                        />
                      </div>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={preRegSending}
                    className="w-full py-4 bg-[#00e5ff] text-black font-black rounded-2xl hover:bg-[#33ebff] shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:shadow-[0_0_50px_rgba(0,229,255,0.5)] transition-all uppercase tracking-[0.1em] text-sm glow-cyan border-b-4 border-black/20 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex flex-col items-center justify-center gap-0.5"
                  >
                    {preRegSending ? (
                      <span>Registrando...</span>
                    ) : (
                      <>
                        <span className="text-base font-black">solicitar código</span>
                        <span className="text-[10px] lowercase font-medium tracking-normal opacity-80">(promoción por tiempo limitado)</span>
                      </>
                    )}
                  </button>
                </form>

                <div className="text-center space-y-2">
                  <p className="text-[9px] text-neutral-500 uppercase tracking-widest font-black italic">Únete a los chilenos que dominan su déficit calórico con IA 🇨🇱</p>
                  <p className="text-[9px] text-neutral-600 block">Tus datos serán procesados con total confidencialidad. Soporte y consultas: <a href="mailto:deficitpro.soporte@gmail.com" className="text-[#00e5ff] hover:underline">deficitpro.soporte@gmail.com</a></p>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-xl bg-gradient-to-br from-[#0c0f1e] to-[#040815] border-2 border-brand-emerald/30 rounded-[2.5rem] p-8 md:p-10 shadow-3xl text-center space-y-6 relative overflow-hidden"
              >
                {/* Decorative background stripes like a VIP Ticket */}
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]"></div>
                
                {/* Checked Badge */}
                <div className="inline-flex w-16 h-16 rounded-full bg-brand-emerald/10 text-brand-emerald items-center justify-center border-2 border-brand-emerald/30 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  <Gift size={32} />
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-display font-black tracking-tight text-white uppercase italic leading-none">
                    ¡Pre-registro Exitoso! 🎉
                  </h3>
                  <p className="text-brand-emerald text-xs font-black uppercase tracking-widest italic">
                    Acceso Premium Asegurado
                  </p>
                  
                  <div className="bg-[#1e293b]/50 border border-white/5 rounded-2xl p-6 text-center space-y-3 max-w-md mx-auto">
                    <p className="text-xs text-neutral-300 font-medium leading-relaxed">
                      Hemos recibido tus datos con éxito. Revisaremos tu información y te enviaremos el código de activación de 7 días PRO gratis directamente de forma 100% personalizada.
                    </p>
                  </div>
                  
                  <p className="text-[10px] text-neutral-500 italic pt-2">
                    ¡Mantente atento/a a tus notificaciones para recibir tu regalo de lanzamiento! 🎁
                  </p>
                </div>

                <div className="pt-4 flex flex-col gap-2 max-w-md mx-auto">
                  <button 
                    type="button"
                    onClick={() => {
                      localStorage.removeItem("deficit_pro_preregistered");
                      localStorage.removeItem("deficit_pro_code");
                      setPreRegEmail("");
                      setPreRegSubmitted(false);
                      setTimeout(() => {
                        const section = document.getElementById("pre-register");
                        if (section) {
                          section.scrollIntoView({ behavior: "smooth" });
                        }
                      }, 80);
                    }}
                    className="w-full py-4 bg-brand-emerald text-black font-black rounded-2xl hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] transition-all uppercase tracking-[0.12em] text-xs border-b-4 border-black/20 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>+ Registrar otro usuario / amigo</span>
                  </button>
                  <p className="text-[9px] text-neutral-500 italic mt-1">
                    Puedes registrar tantas personas o amigos como necesites.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Soon on Play Store Indicators & Google Play Download Button */}
            <div className="flex flex-col items-center gap-6 pt-8 text-center border-t border-white/5 mt-8">
              <p className="text-xs text-[#39ff14] uppercase tracking-widest font-black animate-pulse">¡Ya disponible en Android! 🤖</p>
              
              <a 
                href="https://play.google.com/store/apps/details?id=app.deficitpro.android"
                target="_blank"
                rel="noopener noreferrer"
                className="px-14 py-6 sm:px-16 sm:py-7 md:px-20 md:py-8 bg-[#39ff14] text-black font-black rounded-2xl hover:bg-[#5aff3d] shadow-[0_0_40px_rgba(57,255,20,0.65)] hover:shadow-[0_0_65px_rgba(57,255,20,1)] transition-all duration-300 uppercase tracking-widest text-xs md:text-sm lg:text-base inline-flex items-center justify-center gap-3 border-b-4 border-black/25 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer font-sans text-center"
              >
                <Download size={22} className="stroke-[3.5px] animate-bounce" />
                <span>DESCARGA EN PLAYSTORE AHORA</span>
              </a>

              <p className="text-[10px] text-neutral-500 uppercase tracking-[0.3em] font-black italic opacity-60">Y pronto en App Store 🍏</p>
            </div>
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
        <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-purple-500/10 blur-[150px] rounded-full" />
        <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full" />
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

          {/* Section: Uso de Cámara y Reconocimiento por IA */}
          <section className="space-y-6">
            <h2 className="text-2xl font-black uppercase tracking-widest text-white border-l-4 border-purple-500 pl-6 italic">05. Acceso a Cámara para Registro de Comidas</h2>
            <p className="pl-7">
              Para brindarte un registro ágil y cómodo, Deficit Pro solicitará acceso a la **cámara** de tu dispositivo. El permiso de cámara se utiliza exclusivamente para capturar fotos de tus comidas o alimentos. Nuestra Inteligencia Artificial procesa estas imágenes de manera segura y confidencial únicamente para desglosar el plato en sus ingredientes individuales y calcular la información nutricional (calorías, raciones, proteínas, grasas y carbohidratos) correspondiente de manera automatizada.
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
