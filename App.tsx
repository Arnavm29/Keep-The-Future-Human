import React from 'react';
import Hero from './components/Hero';
import VennDiagram from './components/VennDiagram';
import Risks from './components/Risks';
import GovernanceTimeline from './components/GovernanceTimeline';
import Comparison from './components/Comparison';
import AppendixExplorer from './components/AppendixExplorer';
import Footer from './components/Footer';
import SectionWrapper from './components/ui/SectionWrapper';

const App: React.FC = () => {
  return (
    <main className="bg-paper w-full overflow-hidden">
      {/* SECTION A: Hero */}
      <Hero />

      {/* SECTION B: The Problem (Venn) */}
      <SectionWrapper id="problem" className="min-h-screen">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl mb-4 text-navy">The Problem of Convergence</h2>
          <p className="font-sans text-gray-600 max-w-xl mx-auto">
            Software becomes a species-level threat when three distinct properties overlap.
          </p>
        </div>
        <VennDiagram />
      </SectionWrapper>

      {/* SECTION C: The Risks (Static Grid) */}
      <Risks />

      {/* SECTION D: The Solution (Governance) */}
      <SectionWrapper id="governance">
        <div className="text-center mb-16">
            <span className="font-mono text-caution uppercase tracking-widest text-sm font-bold mb-2 block">The Blueprint</span>
            <h2 className="font-serif text-4xl md:text-5xl text-navy mb-6">How to Keep the Future Human</h2>
            <p className="font-sans text-gray-600 max-w-2xl mx-auto text-lg">
                We need a governance regime as robust as nuclear non-proliferation. <br className="hidden md:block" />It starts with closing the gates.
            </p>
        </div>
        <GovernanceTimeline />
      </SectionWrapper>

      {/* SECTION E: The Alternative (Tool AI) */}
      <section id="alternative">
        <div className="bg-paper py-20 text-center border-b border-gray-100">
            <h2 className="font-serif text-4xl text-navy mb-4">The Third Path</h2>
            <p className="font-sans text-gray-500">There is another way.</p>
        </div>
        <Comparison />
      </section>

      {/* NEW SECTION: Technical Appendix */}
      <AppendixExplorer />

      {/* SECTION F: Footer */}
      <Footer />
    </main>
  );
};

export default App;