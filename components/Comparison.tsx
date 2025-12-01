import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertOctagon, CheckCircle, Terminal, PenTool, Cpu, Users, Search } from 'lucide-react';

const Comparison: React.FC = () => {
  const [activeSide, setActiveSide] = useState<'agi' | 'tool' | null>(null);

  const isAgiCompressed = activeSide === 'tool';
  const isToolCompressed = activeSide === 'agi';

  const handleInteraction = (side: 'agi' | 'tool') => {
      setActiveSide(side);
  };

  const clearInteraction = () => {
      setActiveSide(null);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-[90vh] w-full overflow-hidden font-sans border-t border-gray-200">
        
        {/* === AGI SIDE (Left/Top) === */}
        <motion.div
            onHoverStart={() => handleInteraction('agi')}
            onHoverEnd={clearInteraction}
            onClick={() => activeSide === 'agi' ? clearInteraction() : handleInteraction('agi')}
            className="relative flex-1 bg-off-black text-gray-300 overflow-hidden group cursor-default border-b md:border-b-0 md:border-r border-gray-800"
            animate={{
                flex: activeSide === 'agi' ? 2 : activeSide === 'tool' ? 0.5 : 1
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            {/* Background Atmosphere */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-900 via-transparent to-transparent"></div>
            
            <div className={`relative z-10 p-8 md:p-12 h-full flex flex-col justify-center max-w-2xl mx-auto transition-all ${isAgiCompressed ? 'items-center' : ''}`}>
                
                {/* Header Icon & Label */}
                <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                        layout
                        className="p-3 bg-red-900/20 rounded-lg text-red-500 group-hover:text-red-400 group-hover:scale-110 transition-all duration-300"
                    >
                        <Cpu size={32} />
                    </motion.div>
                    <motion.span 
                        animate={{ opacity: isAgiCompressed ? 0 : 1, width: isAgiCompressed ? 0 : 'auto' }}
                        className="font-mono text-xs text-red-500 uppercase tracking-widest overflow-hidden whitespace-nowrap"
                    >
                        The Threat
                    </motion.span>
                </div>

                {/* Main Title & Quote - Hidden when compressed */}
                <motion.div
                    animate={{ 
                        opacity: isAgiCompressed ? 0 : 1, 
                        height: isAgiCompressed ? 0 : 'auto',
                        marginBottom: isAgiCompressed ? 0 : 48 // mb-12 = 48px roughly
                    }}
                    className="overflow-hidden origin-top"
                >
                    <h3 className="font-serif text-4xl md:text-5xl text-white mb-4 group-hover:text-red-500 transition-colors duration-300 whitespace-nowrap">
                        Agentic AGI
                    </h3>
                    
                    <div className="border-l-2 border-red-900 pl-6">
                        <p className="text-xl font-light italic text-gray-500 group-hover:text-gray-200 transition-colors whitespace-nowrap">
                            "Replaces the human."
                        </p>
                    </div>
                </motion.div>

                <motion.ul 
                    className="space-y-8"
                    initial="hidden"
                    whileInView="show"
                    key="agi-list"
                >
                    <ListItem 
                        icon={<AlertOctagon size={24} />}
                        color="text-red-500"
                        title="Autonomous Goals"
                        desc="Sets its own objectives, leading to inevitable misalignment."
                        compact={isAgiCompressed}
                    />
                    <ListItem 
                        icon={<Terminal size={24} />}
                        color="text-red-500"
                        title="Black-Box Reasoning"
                        desc="Decision making is opaque and unexplainable."
                        compact={isAgiCompressed}
                    />
                    <ListItem 
                        icon={<Users size={24} />}
                        color="text-red-500"
                        title="Cognitive Replacement"
                        desc="Erodes human judgment and agency."
                        compact={isAgiCompressed}
                    />
                </motion.ul>
            </div>
            
            {/* Hover overlay hint */}
            <div className={`absolute bottom-0 left-0 w-full h-2 bg-red-600 transform origin-left transition-transform duration-500 ${activeSide === 'agi' ? 'scale-x-100' : 'scale-x-0'}`}></div>
        </motion.div>


        {/* === TOOL AI SIDE (Right/Bottom) === */}
        <motion.div
            onHoverStart={() => handleInteraction('tool')}
            onHoverEnd={clearInteraction}
            onClick={() => activeSide === 'tool' ? clearInteraction() : handleInteraction('tool')}
            className="relative flex-1 bg-paper text-navy overflow-hidden group cursor-default"
            animate={{
                flex: activeSide === 'tool' ? 2 : activeSide === 'agi' ? 0.5 : 1
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
             {/* Background Atmosphere */}
             <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                  style={{ 
                      backgroundImage: `linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(to right, #0f172a 1px, transparent 1px)`, 
                      backgroundSize: '40px 40px' 
                  }}>
             </div>
             <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-calm via-transparent to-transparent"></div>

            <div className={`relative z-10 p-8 md:p-12 h-full flex flex-col justify-center max-w-2xl mx-auto transition-all ${isToolCompressed ? 'items-center' : ''}`}>
                 <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                        layout
                        className="p-3 bg-calm/10 rounded-lg text-calm group-hover:text-teal-600 group-hover:scale-110 transition-all duration-300"
                    >
                        <PenTool size={32} />
                    </motion.div>
                    <motion.span 
                        animate={{ opacity: isToolCompressed ? 0 : 1, width: isToolCompressed ? 0 : 'auto' }}
                        className="font-mono text-xs text-calm uppercase tracking-widest overflow-hidden whitespace-nowrap"
                    >
                        The Goal
                    </motion.span>
                </div>

                <motion.div
                    animate={{ 
                        opacity: isToolCompressed ? 0 : 1, 
                        height: isToolCompressed ? 0 : 'auto',
                        marginBottom: isToolCompressed ? 0 : 48 
                    }}
                    className="overflow-hidden origin-top"
                >
                    <h3 className="font-serif text-4xl md:text-5xl text-navy mb-4 group-hover:text-calm transition-colors duration-300 whitespace-nowrap">
                        Tool AI
                    </h3>

                    <div className="border-l-2 border-calm pl-6">
                        <p className="text-xl font-light italic text-gray-400 group-hover:text-navy transition-colors whitespace-nowrap">
                            "Empowers the human."
                        </p>
                    </div>
                </motion.div>

                <motion.ul 
                    className="space-y-8"
                    initial="hidden"
                    whileInView="show"
                    key="tool-list"
                >
                    <ListItem 
                        icon={<CheckCircle size={24} />}
                        color="text-calm"
                        title="Human Direction"
                        desc="Solves problems under explicit human command."
                        compact={isToolCompressed}
                    />
                     <ListItem 
                        icon={<Search size={24} />}
                        color="text-calm"
                        title="Transparent Logic"
                        desc="Reasoning steps are visible and interpretable."
                        compact={isToolCompressed}
                    />
                     <ListItem 
                        icon={<Users size={24} />}
                        color="text-calm"
                        title="Augmentation"
                        desc="Extends capability without claiming agency."
                        compact={isToolCompressed}
                    />
                </motion.ul>
            </div>

            {/* Hover overlay hint */}
            <div className={`absolute bottom-0 right-0 w-full h-2 bg-calm transform origin-right transition-transform duration-500 ${activeSide === 'tool' ? 'scale-x-100' : 'scale-x-0'}`}></div>
        </motion.div>
    </div>
  );
};

const ListItem = ({ icon, color, title, desc, compact }: { icon: any, color: string, title: string, desc: string, compact: boolean }) => (
    <motion.li 
        className="flex items-center group/item"
        layout
    >
        <motion.div 
            layout
            className={`mt-1 ${compact ? 'mr-0' : 'mr-4'} ${color} opacity-80 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all`}
        >
            {icon}
        </motion.div>
        
        <motion.div 
            animate={{ 
                opacity: compact ? 0 : 1, 
                width: compact ? 0 : 'auto',
                height: compact ? 0 : 'auto'
            }}
            className="overflow-hidden"
        >
            <h4 className={`font-serif text-lg font-bold mb-1 ${color === 'text-red-500' ? 'text-white' : 'text-navy'} group-hover/item:underline decoration-1 underline-offset-4 whitespace-nowrap`}>
                {title}
            </h4>
            <span className="leading-relaxed text-sm opacity-70 group-hover/item:opacity-100 transition-opacity whitespace-nowrap block">
                {desc}
            </span>
        </motion.div>
    </motion.li>
);

export default Comparison;