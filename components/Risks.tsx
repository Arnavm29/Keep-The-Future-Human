import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Zap, Cpu } from 'lucide-react';

const risks = [
  {
    title: "Loss of Control",
    icon: <Cpu size={40} className="mb-4 text-caution" />,
    description: "Like a fern trying to control General Motors. Once an intelligence far surpasses our own, maintaining meaningful control becomes a mathematical impossibility.",
    quote: "The Fern Paradox"
  },
  {
    title: "Societal Disruption",
    icon: <Zap size={40} className="mb-4 text-caution" />,
    description: "Massive displacement of labor, truth decay through perfect fabrication, and the widening of inequality gaps to breaking points.",
    quote: "$100 Trillion Trap"
  },
  {
    title: "Geopolitical Instability",
    icon: <Globe size={40} className="mb-4 text-caution" />,
    description: "An uncontrollable arms race where speed trumps safety, leading to fragile systems deployed in critical infrastructure.",
    quote: "Race to the Bottom"
  }
];

const Risks: React.FC = () => {
  return (
    <section className="bg-navy text-paper py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
           <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
              The Price of <span className="text-caution">Inevitability</span>
           </h2>
           <div className="w-24 h-1 bg-caution mx-auto mb-8"></div>
           <p className="font-sans text-gray-300 text-xl italic leading-relaxed">
              "The notion that AGI and superintelligence are inevitable is a choice masquerading as fate."
           </p>
        </motion.div>

        {/* Cards Grid - Centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {risks.map((risk, i) => (
             <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="w-full max-w-md bg-off-black border border-gray-800 p-8 rounded-2xl flex flex-col hover:border-caution transition-colors duration-300 shadow-xl group h-full"
             >
                <div className="bg-navy/50 p-4 rounded-full w-fit mb-6 text-caution group-hover:scale-110 transition-transform duration-300">
                    {risk.icon}
                </div>
                <h3 className="font-serif text-2xl mb-4 text-white">{risk.title}</h3>
                <p className="font-sans text-gray-300 mb-8 flex-grow leading-relaxed">
                    {risk.description}
                </p>
                <div className="border-t border-gray-800 pt-4 mt-auto">
                    <span className="font-mono text-xs text-caution uppercase tracking-wider font-bold">
                        {risk.quote}
                    </span>
                </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Risks;