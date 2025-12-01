import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Zap, Brain, Activity, Circle, ShieldAlert } from 'lucide-react';

const VennDiagram: React.FC = () => {
  const [hoverState, setHoverState] = useState<'none' | 'narrow' | 'autonomy' | 'generality' | 'danger'>('none');

  // Circle centers and radius for Desktop SVG
  const r = 100;
  const cx1 = 200, cy1 = 150; // Top (High Intelligence)
  const cx2 = 140, cy2 = 250; // Bottom Left (Autonomy)
  const cx3 = 260, cy3 = 250; // Bottom Right (Generality)

  const handleMouseEnter = (zone: 'narrow' | 'autonomy' | 'generality' | 'danger') => {
    setHoverState(zone);
  };

  const handleMouseLeave = () => {
    setHoverState('none');
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      {/* MOBILE: Vertical Stack View */}
      <div className="md:hidden flex flex-col gap-6">
        <div className="bg-white border border-calm/30 p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-3 mb-3 text-calm">
            <Brain size={24} />
            <h3 className="font-serif text-xl font-bold">Narrow AI</h3>
          </div>
          <p className="text-sm font-sans text-gray-600">
            High Intelligence without general autonomy. Powerful, safe, and useful tools like AlphaFold or Calculators.
          </p>
        </div>

        <div className="flex flex-col gap-4">
           <div className="bg-paper border border-orange-200 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-2 text-orange-600">
                <Zap size={20} />
                <h4 className="font-serif text-lg font-bold">Autonomy</h4>
              </div>
              <p className="text-sm text-gray-500">The ability to set goals and act alone. Without alignment, this leads to unpredictable behavior.</p>
           </div>
           <div className="bg-paper border border-orange-200 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-2 text-orange-600">
                <Activity size={20} />
                <h4 className="font-serif text-lg font-bold">Generality</h4>
              </div>
              <p className="text-sm text-gray-500">The ability to learn any task. Unlike specialized software, it can adapt to new domains.</p>
           </div>
        </div>

        <div className="bg-navy text-paper border-2 border-caution p-6 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
             <AlertTriangle size={64} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3 text-caution">
              <AlertTriangle size={24} />
              <h3 className="font-serif text-xl font-bold">The Danger Zone</h3>
            </div>
            <p className="text-sm font-sans opacity-90 leading-relaxed">
              When Autonomy, Generality, and High Intelligence intersect. This creates AGI & Superintelligence: potentially uncontrollable, capable of displacing humans, and posing extinction risks.
            </p>
          </div>
        </div>
      </div>

      {/* DESKTOP: Interactive SVG */}
      <div className="hidden md:flex flex-col items-center justify-center relative">
        {/* Background Darkening Effect */}
        <AnimatePresence>
            {hoverState === 'danger' && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 -m-20 bg-navy/5 rounded-full blur-3xl z-0 pointer-events-none"
                />
            )}
        </AnimatePresence>

        <div className="relative w-full max-w-[600px] aspect-square z-10">
          <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
            <defs>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <clipPath id="clip-c1">
                  <circle cx={cx1} cy={cy1} r={r} />
              </clipPath>
              <clipPath id="clip-c2">
                  <circle cx={cx2} cy={cy2} r={r} />
              </clipPath>
              <clipPath id="clip-c3">
                  <circle cx={cx3} cy={cy3} r={r} />
              </clipPath>
            </defs>

            {/* --- Autonomy (Bottom Left) --- */}
            <motion.circle
              cx={cx2}
              cy={cy2}
              r={r}
              fill={hoverState === 'autonomy' ? 'rgba(249, 115, 22, 0.2)' : 'rgba(249, 115, 22, 0.05)'}
              stroke="#f97316"
              strokeWidth="1.5"
              className="transition-colors duration-500 cursor-pointer"
              onMouseEnter={() => handleMouseEnter('autonomy')}
              onMouseLeave={handleMouseLeave}
              animate={{ scale: hoverState === 'autonomy' ? 1.02 : 1 }}
            />

            {/* --- Generality (Bottom Right) --- */}
            <motion.circle
              cx={cx3}
              cy={cy3}
              r={r}
              fill={hoverState === 'generality' ? 'rgba(249, 115, 22, 0.2)' : 'rgba(249, 115, 22, 0.05)'}
              stroke="#f97316"
              strokeWidth="1.5"
              className="transition-colors duration-500 cursor-pointer"
              onMouseEnter={() => handleMouseEnter('generality')}
              onMouseLeave={handleMouseLeave}
              animate={{ scale: hoverState === 'generality' ? 1.02 : 1 }}
            />

            {/* --- Intelligence (Top) --- */}
            <motion.circle
              cx={cx1}
              cy={cy1}
              r={r}
              fill={hoverState === 'narrow' ? 'rgba(20, 184, 166, 0.2)' : 'rgba(20, 184, 166, 0.05)'}
              stroke="#14b8a6"
              strokeWidth="2"
              className="transition-colors duration-500 cursor-pointer"
              onMouseEnter={() => handleMouseEnter('narrow')}
              onMouseLeave={handleMouseLeave}
              animate={{ scale: hoverState === 'narrow' ? 1.02 : 1 }}
            />

            {/* --- LABELS --- */}
            <text x={cx1} y={cy1 - 120} textAnchor="middle" className="pointer-events-none fill-current text-xs font-serif tracking-widest uppercase opacity-70">High Intelligence</text>
            <text x={cx2 - 90} y={cy2 + 80} textAnchor="middle" className="pointer-events-none fill-current text-xs font-serif tracking-widest uppercase opacity-70">Autonomy</text>
            <text x={cx3 + 90} y={cy3 + 80} textAnchor="middle" className="pointer-events-none fill-current text-xs font-serif tracking-widest uppercase opacity-70">Generality</text>

            {/* --- THE DANGER ZONE (Intersection) --- */}
            {/* Logic: We render Circle 3, but clipped by Circle 1 AND Circle 2. The result is the overlap of all three. */}
            <g clipPath="url(#clip-c1)">
                <g clipPath="url(#clip-c2)">
                    <motion.circle
                        cx={cx3} 
                        cy={cy3} 
                        r={r} 
                        fill={hoverState === 'danger' ? '#f97316' : 'transparent'}
                        stroke={hoverState === 'danger' ? '#f97316' : 'transparent'}
                        className="cursor-pointer"
                        onMouseEnter={() => handleMouseEnter('danger')}
                        onMouseLeave={handleMouseLeave}
                        animate={{ opacity: hoverState === 'danger' ? 1 : 0 }}
                    />
                    {/* Pulsing effect when not actively hovered to indicate hidden zone */}
                     {hoverState !== 'danger' && (
                        <circle 
                            cx={cx3} cy={cy3} r={r} 
                            fill="#f97316" 
                            className="opacity-20 pointer-events-none animate-pulse" 
                        />
                     )}
                </g>
            </g>

          </svg>

          {/* Interactive Tooltip / Label Overlay */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none z-20 w-80">
            <AnimatePresence mode="wait">
                {hoverState === 'danger' && (
                <motion.div
                    key="danger-tooltip"
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-navy text-paper p-6 rounded-xl shadow-2xl border border-caution backdrop-blur-md bg-opacity-95"
                >
                    <div className="flex items-center justify-center mb-2 text-caution">
                        <AlertTriangle size={24} className="mr-2"/>
                        <h3 className="font-serif text-xl">The Danger Zone</h3>
                    </div>
                    <p className="text-sm font-sans leading-relaxed">
                    AGI & Superintelligence: Uncontrollable, displacement of humans, potential extinction risk.
                    </p>
                </motion.div>
                )}

                {hoverState === 'narrow' && (
                <motion.div
                    key="narrow-tooltip"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: -50 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-paper text-navy p-4 rounded-xl shadow-xl border border-calm"
                >
                    <div className="flex items-center justify-center gap-2 mb-1">
                        <Brain size={18} className="text-calm"/>
                        <h3 className="font-serif text-lg text-calm">Narrow AI</h3>
                    </div>
                    <p className="text-xs font-sans text-gray-600">
                    High Intelligence without general autonomy. Powerful, safe, and useful tools.
                    </p>
                </motion.div>
                )}

                {hoverState === 'autonomy' && (
                <motion.div
                    key="autonomy-tooltip"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-paper text-navy p-4 rounded-xl shadow-xl border border-orange-200"
                >
                    <div className="flex items-center justify-center gap-2 mb-1">
                        <Zap size={18} className="text-orange-500"/>
                        <h3 className="font-serif text-lg text-orange-600">Autonomy</h3>
                    </div>
                    <p className="text-xs font-sans text-gray-600">
                    The ability to set goals and act alone. Essential for agents, but creates risk without alignment.
                    </p>
                </motion.div>
                )}

                {hoverState === 'generality' && (
                <motion.div
                    key="generality-tooltip"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="bg-paper text-navy p-4 rounded-xl shadow-xl border border-orange-200"
                >
                    <div className="flex items-center justify-center gap-2 mb-1">
                        <Activity size={18} className="text-orange-500"/>
                        <h3 className="font-serif text-lg text-orange-600">Generality</h3>
                    </div>
                    <p className="text-xs font-sans text-gray-600">
                    The ability to learn any task. The difference between a calculator and a human mind.
                    </p>
                </motion.div>
                )}
                
                {hoverState === 'none' && (
                    <motion.div
                        key="default-tooltip"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="mt-40"
                    >
                         <p className="text-xs text-center font-sans uppercase tracking-widest text-gray-400 bg-white/50 px-3 py-1 rounded-full backdrop-blur-sm">
                             Explore the Intersection
                         </p>
                    </motion.div>
                )}
            </AnimatePresence>
          </div>
        </div>
        
        <div className="mt-8 text-center max-w-2xl">
            <h3 className="font-serif text-2xl mb-2">The Triple Intersection</h3>
            <p className="font-sans text-gray-600">
            The convergence of <span className="font-bold text-orange-600">Autonomy</span>, <span className="font-bold text-orange-600">Generality</span>, and <span className="font-bold text-teal-600">High Intelligence</span> creates a distinct class of risk.
            </p>
        </div>
      </div>
    </div>
  );
};

export default VennDiagram;