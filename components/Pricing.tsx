import React from 'react';
import { LoopsPricingSlider } from './ui/pricing-slider-loops';

const Pricing: React.FC = () => {
  return (
    <section id="precios" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-lilac-500 font-medium tracking-widest uppercase text-sm md:text-base mb-2 block">Inversión</span>
          <h2 className="text-4xl md:text-6xl font-serif text-silver-900 mb-6">
            Transparencia Radical
          </h2>
          <p className="text-silver-500 max-w-2xl mx-auto text-lg font-light">
            Sin costes ocultos. Escale su infraestructura de IA a medida que crece su organización.
          </p>
        </div>

        <LoopsPricingSlider />
      </div>
    </section>
  );
};

export default Pricing;