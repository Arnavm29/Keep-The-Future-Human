import React from 'react';
import { motion } from 'framer-motion';
import { Server, Lock, Scale, Activity } from 'lucide-react';

const steps = [
  {
    title: "Compute Accounting",
    icon: <Server className="w-6 h-6" />,
    description: "Track the flow of high-end GPU hardware like nuclear material. We need to know where the compute is.",
    stat: "Global Registry"
  },
  {
    title: "Hard Caps",
    icon: <Activity className="w-6 h-6" />,
    description: "Strict limits on model training size and inference speed. Speed limits for the AI race.",
    stat: "10²⁷ FLOPs Limit"
  },
  {
    title: "Strict Liability",
    icon: <Scale className="w-6 h-6" />,
    description: "Developers bear full legal responsibility for harms caused by their models. Incentivize safety over speed.",
    stat: "Legal Accountability"
  },
  {
    title: "Hardware Security",
    icon: <Lock className="w-6 h-6" />,
    description: "Physical and cryptographic locks on hardware to prevent unauthorized massive training runs.",
    stat: "Remote Kill-switches"
  }
];

const GovernanceTimeline: React.FC = () => {
  return (
    <div className="relative py-10 max-w-3xl mx-auto">
      {/* Central Line */}
      <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 md:-ml-0.5"></div>

      {steps.map((step, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`relative flex items-center mb-16 md:justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
        >
          {/* Node on Timeline */}
          <div className="absolute left-0 md:left-1/2 md:-ml-5 w-10 h-10 rounded-full bg-paper border-4 border-navy flex items-center justify-center z-10 text-navy">
            <div className="scale-75">{step.icon}</div>
          </div>

          {/* Content Card */}
          <div className="ml-16 md:ml-0 md:w-[42%] p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <span className="inline-block px-3 py-1 bg-navy/5 text-navy text-xs font-bold rounded-full mb-3">
              Step 0{index + 1}
            </span>
            <h3 className="font-serif text-xl font-bold mb-2 text-navy">{step.title}</h3>
            <p className="font-sans text-gray-600 text-sm mb-4 leading-relaxed">
              {step.description}
            </p>
             <div className="pt-3 border-t border-gray-100">
                <span className="font-mono text-xs text-caution font-bold uppercase">{step.stat}</span>
             </div>
          </div>
          
          {/* Empty Space for alignment on Desktop */}
          <div className="hidden md:block md:w-[42%]"></div>
        </motion.div>
      ))}
    </div>
  );
};

export default GovernanceTimeline;