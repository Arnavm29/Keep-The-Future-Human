import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-paper border-t border-gray-200 py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl mb-6 text-navy">Dive Deeper</h2>
        <p className="font-sans text-gray-600 mb-10 max-w-2xl mx-auto">
            "We can cure diseases and solve physics with AI that remains under meaningful human control. We don't need to build a new species to solve our problems."
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
            <a href="#" className="px-6 py-3 bg-navy text-white font-sans font-medium rounded hover:bg-opacity-90 transition-colors">
                Download Full PDF
            </a>
            <a href="#" className="px-6 py-3 border border-navy text-navy font-sans font-medium rounded hover:bg-navy hover:text-white transition-colors">
                Technical Appendix
            </a>
        </div>

        <div className="text-xs font-sans text-gray-400">
            <p>Based on "Keep the Future Human" by Anthony Aguirre.</p>
            <p className="mt-2">© {new Date().getFullYear()} Tool AI Initiative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;