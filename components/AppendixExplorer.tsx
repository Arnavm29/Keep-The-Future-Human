import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Shield, Scale, Layers, Check, AlertTriangle, Lock, Server, Gavel, Zap, Activity, Brain, XCircle } from 'lucide-react';

const tabs = [
  { id: 'A', title: 'Compute Scale', subtitle: 'Appendix A', icon: <Calculator size={20} /> },
  { id: 'B', title: 'The Gate', subtitle: 'Appendix B', icon: <Shield size={20} /> },
  { id: 'C', title: 'Liability Judge', subtitle: 'Appendix C', icon: <Scale size={20} /> },
  { id: 'D', title: 'Risk Classifier', subtitle: 'Appendix D', icon: <Layers size={20} /> },
];

const AppendixExplorer: React.FC = () => {
  const [activeTab, setActiveTab] = useState('A');

  return (
    <section className="bg-paper py-24 px-6 md:px-12 lg:px-24 border-t border-gray-200" id="appendix">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <span className="font-mono text-xs text-navy/60 uppercase tracking-widest font-bold mb-3 block">Technical Deep Dive</span>
            <h2 className="font-serif text-3xl md:text-4xl text-navy mb-4">Interactive Appendices</h2>
            <p className="font-sans text-gray-600 max-w-2xl mx-auto">
                Explore the technical specifications, legal frameworks, and governance mechanisms proposed to close the Gates.
            </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Navigation Tabs */}
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 lg:w-64 flex-shrink-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 min-w-[200px] lg:min-w-0 border-2 ${
                  activeTab === tab.id 
                    ? 'bg-navy border-navy text-white shadow-lg lg:translate-x-2' 
                    : 'bg-white border-transparent text-gray-500 hover:bg-gray-50 hover:text-navy hover:border-gray-200'
                }`}
              >
                <div className={`${activeTab === tab.id ? 'text-caution' : 'text-gray-400'}`}>
                  {tab.icon}
                </div>
                <div>
                  <div className="font-serif font-bold text-lg leading-tight">{tab.title}</div>
                  <div className="font-mono text-[10px] opacity-70 uppercase tracking-wider">{tab.subtitle}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="flex-1 bg-white rounded-3xl border border-gray-100 shadow-xl p-6 md:p-10 relative overflow-hidden min-h-[600px]">
             <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  {activeTab === 'A' && <ComputeSimulator />}
                  {activeTab === 'B' && <GateSimulator />}
                  {activeTab === 'C' && <LiabilitySimulator />}
                  {activeTab === 'D' && <RiskClassifier />}
                </motion.div>
             </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// APPENDIX A: COMPUTE SIMULATOR
// ==========================================
const ComputeSimulator = () => {
  const [exponent, setExponent] = useState(25); // 10^25 default

  const landmarks = [
    { exp: 23, label: "GPT-3 (2020)", color: "text-gray-400" },
    { exp: 24, label: "GPT-4 (Est.)", color: "text-calm" },
    { exp: 25, label: "THE GATE THRESHOLD", color: "text-caution" },
    { exp: 26, label: "Gemini Ultra / GPT-5?", color: "text-orange-500" },
    { exp: 29, label: "Human Brain Equivalent?", color: "text-red-600" }
  ];

  const currentLandmark = landmarks.reduce((prev, curr) => 
    Math.abs(curr.exp - exponent) < Math.abs(prev.exp - exponent) ? curr : prev
  );

  return (
    <div className="h-full flex flex-col">
      <div className="mb-8">
        <h3 className="font-serif text-3xl text-navy mb-2">Appendix A: Compute Accounting</h3>
        <p className="text-gray-600">
            Regulation relies on "Ground Truth" metrics. The proposal sets a hard limit at <strong>10<sup>25</sup> FLOP</strong> for training compute. 
            Adjust the slider to visualize the scale of operations.
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center bg-gray-50 rounded-2xl p-8 border border-gray-100">
          
          {/* Big Number Display */}
          <div className="text-center mb-12">
            <div className="font-mono text-xl text-gray-400 mb-2">Training Operations</div>
            <div className="flex items-baseline justify-center gap-2">
                <span className="text-6xl md:text-8xl font-bold text-navy">10</span>
                <span className={`text-4xl md:text-6xl font-bold -mt-8 ${exponent >= 25 ? 'text-caution' : 'text-calm'}`}>
                    {exponent}
                </span>
                <span className="text-xl md:text-2xl text-gray-400 font-bold ml-2">FLOP</span>
            </div>
          </div>

          {/* Slider */}
          <div className="w-full max-w-lg relative mb-12">
            <input 
                type="range" 
                min="20" 
                max="30" 
                step="0.1" 
                value={exponent} 
                onChange={(e) => setExponent(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-navy"
            />
            {/* Markers on Slider */}
            <div className="absolute top-4 left-0 w-full flex justify-between text-xs font-mono text-gray-400 px-1">
                <span>10²⁰</span>
                <span>10²⁵</span>
                <span>10³⁰</span>
            </div>
            {/* Threshold Line */}
            <div className="absolute -top-2 left-1/2 w-0.5 h-6 bg-caution transform -translate-x-1/2"></div>
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-bold text-caution uppercase tracking-wider whitespace-nowrap">
                Regulation Line
            </div>
          </div>

          {/* Context Card */}
          <motion.div 
             key={currentLandmark.label}
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             className={`p-6 rounded-xl border-l-4 bg-white shadow-sm max-w-md w-full ${exponent >= 25 ? 'border-caution' : 'border-calm'}`}
          >
             <h4 className={`font-bold uppercase tracking-widest text-sm mb-1 ${currentLandmark.color}`}>
                Scale Reference
             </h4>
             <div className="text-xl font-serif text-navy">
                {Math.abs(currentLandmark.exp - exponent) < 0.5 ? (
                    <span>Matches: {currentLandmark.label}</span>
                ) : (
                    <span>Approaching: {currentLandmark.label}</span>
                )}
             </div>
             <p className="text-sm text-gray-500 mt-2">
                {exponent >= 25 
                    ? "Above the threshold. Requires strict registration, oversight, and hardware verification." 
                    : "Below the threshold. Permitted for general development with standard safeguards."}
             </p>
          </motion.div>
      </div>
    </div>
  );
};

// ==========================================
// APPENDIX B: GATE SIMULATOR
// ==========================================
const GateSimulator = () => {
  const [step, setStep] = useState(0);

  const steps = [
    { title: "Current State", desc: "Unrestricted Race", action: "Initiate Pause" },
    { title: "The Pause", desc: "US Executive Order halts runs > 10²⁷ FLOP", action: "Establish Oversight" },
    { title: "Oversight", desc: "Hardware reporting & verification active", action: "Sign Treaty" },
    { title: "International Treaty", desc: "US & China agree on limits", action: "Enforce Limits" },
    { title: "Gate Closed", desc: "Global Verification Regime", action: "Reset Simulation" }
  ];

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
    else setStep(0);
  };

  return (
    <div className="h-full flex flex-col">
       <div className="mb-6">
        <h3 className="font-serif text-3xl text-navy mb-2">Appendix B: Closing the Gate</h3>
        <p className="text-gray-600">
            A step-by-step implementation plan. Interact with the timeline to see how we move from an arms race to a stable governance regime.
        </p>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-8 items-center justify-center">
        
        {/* Visual Representation */}
        <div className="relative w-64 h-64 flex-shrink-0 flex items-center justify-center bg-gray-50 rounded-full border border-gray-100 shadow-inner overflow-hidden">
             {/* The Gate Doors */}
             <motion.div 
                className="absolute w-1/2 h-full bg-navy/90 left-0 border-r-2 border-caution z-10"
                initial={{ x: "-100%" }}
                animate={{ x: step === 4 ? "0%" : step === 3 ? "-20%" : step === 2 ? "-40%" : step === 1 ? "-60%" : "-90%" }}
                transition={{ duration: 0.5, type: "spring" }}
             />
             <motion.div 
                className="absolute w-1/2 h-full bg-navy/90 right-0 border-l-2 border-caution z-10"
                initial={{ x: "100%" }}
                animate={{ x: step === 4 ? "0%" : step === 3 ? "20%" : step === 2 ? "40%" : step === 1 ? "60%" : "90%" }}
                transition={{ duration: 0.5, type: "spring" }}
             />
             
             {/* Center Content */}
             <div className="z-0 text-center opacity-50">
                <Server size={48} className="mx-auto mb-2 text-gray-400" />
                <div className="font-mono text-xs uppercase">Superintelligence</div>
             </div>

             {/* Lock Icon when closed */}
             <AnimatePresence>
                {step === 4 && (
                    <motion.div 
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="absolute z-20 bg-caution text-white p-4 rounded-full shadow-lg"
                    >
                        <Lock size={32} />
                    </motion.div>
                )}
             </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex-1 w-full max-w-sm">
            <div className="space-y-3">
                {steps.map((s, i) => (
                    <div 
                        key={i} 
                        className={`p-3 rounded-lg border transition-all duration-300 flex items-center justify-between ${
                            i === step ? 'bg-navy text-white border-navy shadow-lg scale-105' : 
                            i < step ? 'bg-gray-100 text-gray-400 border-gray-100' : 'bg-white text-gray-400 border-gray-100 opacity-50'
                        }`}
                    >
                        <div>
                            <div className="font-bold font-serif">{s.title}</div>
                            <div className="text-xs opacity-80">{s.desc}</div>
                        </div>
                        {i < step && <Check size={18} />}
                    </div>
                ))}
            </div>

            <button 
                onClick={handleNext}
                className="mt-8 w-full py-4 bg-caution text-navy font-bold uppercase tracking-widest rounded-lg hover:bg-orange-500 transition-colors flex items-center justify-center gap-2"
            >
                {steps[step].action} <Zap size={18} />
            </button>
        </div>

      </div>
    </div>
  );
};

// ==========================================
// APPENDIX C: LIABILITY SIMULATOR
// ==========================================
const LiabilitySimulator = () => {
  const [autonomous, setAutonomous] = useState(false);
  const [general, setGeneral] = useState(false);
  const [harm, setHarm] = useState<'minor' | 'major'>('minor');

  const isStrictLiability = autonomous && general && harm === 'major';
  
  return (
    <div className="h-full flex flex-col">
       <div className="mb-6">
        <h3 className="font-serif text-3xl text-navy mb-2">Appendix C: The Liability Judge</h3>
        <p className="text-gray-600">
            Current laws are insufficient. The proposal introduces "Strict Liability" for dangerous AI. 
            Configure the scenario below to see the legal verdict.
        </p>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-8">
          {/* Inputs */}
          <div className="flex-1 space-y-6 bg-gray-50 p-6 rounded-2xl border border-gray-100">
             <h4 className="font-bold text-navy uppercase tracking-widest text-sm border-b border-gray-200 pb-2">System Properties</h4>
             
             <Toggle label="High Autonomy" active={autonomous} onClick={() => setAutonomous(!autonomous)} icon={<Zap size={18}/>} />
             <Toggle label="High Generality" active={general} onClick={() => setGeneral(!general)} icon={<Activity size={18}/>} />
             
             <div className="pt-4">
                <h4 className="font-bold text-navy uppercase tracking-widest text-sm border-b border-gray-200 pb-2 mb-4">Outcome Severity</h4>
                <div className="flex gap-2">
                    <button 
                        onClick={() => setHarm('minor')}
                        className={`flex-1 py-2 px-4 rounded-lg text-sm font-bold transition-colors ${harm === 'minor' ? 'bg-calm text-white' : 'bg-white text-gray-500 border border-gray-200'}`}
                    >
                        Minor Harm
                    </button>
                    <button 
                         onClick={() => setHarm('major')}
                         className={`flex-1 py-2 px-4 rounded-lg text-sm font-bold transition-colors ${harm === 'major' ? 'bg-red-500 text-white' : 'bg-white text-gray-500 border border-gray-200'}`}
                    >
                        Catastrophic
                    </button>
                </div>
             </div>
          </div>

          {/* Verdict Output */}
          <div className="flex-1 flex items-center justify-center">
             <motion.div 
                key={isStrictLiability ? 'strict' : 'safe'}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring" }}
                className={`w-full max-w-sm p-8 rounded-2xl border-2 text-center shadow-xl ${
                    isStrictLiability ? 'bg-red-50 border-red-500' : 'bg-teal-50 border-calm'
                }`}
             >
                <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                    isStrictLiability ? 'bg-red-100 text-red-600' : 'bg-teal-100 text-teal-600'
                }`}>
                    {isStrictLiability ? <Gavel size={32} /> : <Shield size={32} />}
                </div>
                
                <h2 className={`font-serif text-3xl font-bold mb-2 ${
                    isStrictLiability ? 'text-red-800' : 'text-teal-800'
                }`}>
                    {isStrictLiability ? "Strict Liability" : "Safe Harbor"}
                </h2>
                
                <p className={`text-sm ${isStrictLiability ? 'text-red-700' : 'text-teal-700'}`}>
                    {isStrictLiability 
                        ? "The developer is fully liable for damages. No 'negligence' defense allowed. Executives may face criminal penalties."
                        : "Standard negligence rules apply. Innovation is encouraged as long as safety cases are maintained."}
                </p>
             </motion.div>
          </div>
      </div>
    </div>
  );
};

const Toggle = ({ label, active, onClick, icon }: { label: string, active: boolean, onClick: () => void, icon: any }) => (
    <div 
        onClick={onClick}
        className={`flex items-center justify-between p-4 rounded-xl cursor-pointer border-2 transition-all ${
            active ? 'border-navy bg-white shadow-md' : 'border-transparent bg-gray-200 text-gray-500'
        }`}
    >
        <div className="flex items-center gap-3 font-bold text-navy">
            {icon} {label}
        </div>
        <div className={`w-12 h-6 rounded-full p-1 transition-colors ${active ? 'bg-navy' : 'bg-gray-400'}`}>
            <div className={`w-4 h-4 rounded-full bg-white transition-transform ${active ? 'translate-x-6' : 'translate-x-0'}`} />
        </div>
    </div>
);

// ==========================================
// APPENDIX D: RISK CLASSIFIER
// ==========================================
const RiskClassifier = () => {
  const [autonomy, setAutonomy] = useState(false);
  const [generality, setGenerality] = useState(false);
  const [intelligence, setIntelligence] = useState(false);
  const [computeExceeded, setComputeExceeded] = useState(false);

  // Logic from PDF p. 61
  let tier = "RT-0";
  let color = "bg-calm";
  let desc = "Weak/Narrow AI. Minimal regulation.";

  const strongCount = [autonomy, generality, intelligence].filter(Boolean).length;

  if (computeExceeded) {
    tier = "RT-4";
    color = "bg-red-600";
    desc = "Superintelligence Candidate. Development PROHIBITED.";
  } else if (strongCount === 3) {
    tier = "RT-3";
    color = "bg-orange-500";
    desc = "AGI. Requires National Security Plan & Kill-switch.";
  } else if (strongCount === 2) {
    tier = "RT-2";
    color = "bg-yellow-500";
    desc = "Strong Capability. Requires Registration & Audits.";
  } else if (strongCount === 1) {
    tier = "RT-1";
    color = "bg-teal-500";
    desc = "Enhanced Capability. Standard safety cases.";
  }

  return (
    <div className="h-full flex flex-col">
       <div className="mb-6">
        <h3 className="font-serif text-3xl text-navy mb-2">Appendix D: Risk Tiers</h3>
        <p className="text-gray-600">
            Determine the regulatory tier for an AI model based on its capabilities.
        </p>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-10">
          
          {/* Controls */}
          <div className="flex-1 space-y-4">
             <div className="grid grid-cols-1 gap-4">
                <OptionButton 
                    active={autonomy} 
                    onClick={() => setAutonomy(!autonomy)} 
                    title="Strong Autonomy" 
                    subtitle="Can act independently in real world"
                    icon={<Zap size={20} />}
                />
                <OptionButton 
                    active={generality} 
                    onClick={() => setGenerality(!generality)} 
                    title="Strong Generality" 
                    subtitle="Wide scope of tasks & learning"
                    icon={<Activity size={20} />}
                />
                <OptionButton 
                    active={intelligence} 
                    onClick={() => setIntelligence(!intelligence)} 
                    title="Strong Intelligence" 
                    subtitle="Expert-level performance"
                    icon={<Brain size={20} />}
                />
                 <OptionButton 
                    active={computeExceeded} 
                    onClick={() => setComputeExceeded(!computeExceeded)} 
                    title="Exceeds Compute Cap" 
                    subtitle="> 10^27 FLOP"
                    icon={<Server size={20} />}
                    danger
                />
             </div>
          </div>

          {/* Result Card */}
          <div className="flex-1 flex items-center justify-center">
             <motion.div 
                layout
                className={`w-full max-w-sm rounded-2xl p-8 text-white shadow-2xl flex flex-col items-center text-center transition-colors duration-500 ${color}`}
             >
                <div className="text-6xl font-mono font-bold mb-4 bg-white/20 p-4 rounded-xl w-full">
                    {tier}
                </div>
                <h4 className="font-serif text-2xl font-bold mb-2">
                    {tier === 'RT-4' ? "Prohibited" : tier === 'RT-3' ? "Restricted AGI" : "Permitted"}
                </h4>
                <p className="text-white/90 font-sans leading-relaxed">
                    {desc}
                </p>

                <div className="mt-6 pt-6 border-t border-white/20 w-full text-left space-y-2">
                    <div className="text-xs uppercase font-bold opacity-70">Requirements</div>
                    {tier === 'RT-4' && <li className="text-sm list-none flex gap-2"><XCircle size={16}/> Immediate Cessation</li>}
                    {tier === 'RT-3' && <li className="text-sm list-none flex gap-2"><Lock size={16}/> Non-removable Kill-switch</li>}
                    {tier === 'RT-3' && <li className="text-sm list-none flex gap-2"><Shield size={16}/> Pre-approval Plan</li>}
                    {tier === 'RT-2' && <li className="text-sm list-none flex gap-2"><Check size={16}/> National Registration</li>}
                    {(tier === 'RT-1' || tier === 'RT-0') && <li className="text-sm list-none flex gap-2"><Check size={16}/> Standard Safety Case</li>}
                </div>
             </motion.div>
          </div>

      </div>
    </div>
  );
};

const OptionButton = ({ active, onClick, title, subtitle, icon, danger }: any) => (
    <button 
        onClick={onClick}
        className={`flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all ${
            active 
                ? (danger ? 'border-red-500 bg-red-50 text-red-900' : 'border-navy bg-navy text-white')
                : 'border-gray-100 bg-white text-gray-500 hover:border-gray-200'
        }`}
    >
        <div className={`p-2 rounded-lg ${active ? 'bg-white/20' : 'bg-gray-100'}`}>
            {icon}
        </div>
        <div>
            <div className="font-bold text-sm">{title}</div>
            <div className={`text-xs ${active ? 'opacity-80' : 'opacity-60'}`}>{subtitle}</div>
        </div>
        <div className={`ml-auto w-5 h-5 rounded-full border-2 flex items-center justify-center ${
            active ? 'border-white bg-white' : 'border-gray-300'
        }`}>
            {active && <Check size={12} className={danger ? 'text-red-600' : 'text-navy'} />}
        </div>
    </button>
);

export default AppendixExplorer;