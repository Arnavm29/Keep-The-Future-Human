import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-paper text-navy px-6">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
         {/* Abstract background grid */}
         <svg width="100%" height="100%">
            <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
         </svg>
      </div>

      <div className="z-10 text-center max-w-5xl mx-auto mt-12">
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-8"
        >
            {/* The Gate Visual */}
            <svg width="120" height="120" viewBox="0 0 100 100" className="mx-auto text-navy">
                <motion.rect 
                    x="10" y="10" width="35" height="80" 
                    stroke="currentColor" strokeWidth="2" fill="none"
                    initial={{ x: -20 }}
                    animate={{ x: 10 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                />
                <motion.rect 
                    x="55" y="10" width="35" height="80" 
                    stroke="currentColor" strokeWidth="2" fill="none"
                    initial={{ x: 80 }}
                    animate={{ x: 55 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                />
                {/* Light spill from slight opening */}
                <motion.path
                    d="M 48 10 L 52 10 L 52 90 L 48 90 Z"
                    fill="currentColor"
                    className="text-caution"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 1.8 }}
                />
            </svg>
        </motion.div>

        <motion.h1 
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          We Are Building Our Own Replacement.<br/>
          <span className="text-caution italic">We Don't Have To.</span>
        </motion.h1>

        <motion.p 
          className="font-sans text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Why humanity must close the gates to Superintelligence and build powerful <span className="text-calm font-semibold">Tool AI</span> instead.
        </motion.p>

        <motion.button 
          onClick={() => document.getElementById('governance')?.scrollIntoView({ behavior: 'smooth' })}
          className="group relative px-8 py-4 bg-navy text-paper font-sans font-medium text-sm tracking-widest uppercase transition-all hover:bg-caution hover:text-navy"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          Read the Plan
          <span className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-navy">
             <ArrowDown size={20} className="animate-bounce"/>
          </span>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;