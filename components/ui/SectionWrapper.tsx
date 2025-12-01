import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  dark?: boolean;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className = "", id, delay = 0.1, dark = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section 
      id={id} 
      ref={ref} 
      className={`min-h-screen flex flex-col justify-center py-20 px-6 md:px-12 lg:px-24 transition-colors duration-700 ${dark ? 'bg-navy text-paper' : 'bg-paper text-off-black'} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;