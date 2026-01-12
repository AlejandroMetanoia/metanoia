import React from "react";
import { GradientButton } from "./gradient-button";

export const LoopsPricingSlider: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Helper to render text with bold segments marked by asterisks
  const renderText = (text: string) => {
    return text.split('*').map((part, index) => {
      if (index % 2 === 1) {
        return <strong key={index} className="font-bold text-silver-900">{part}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="rounded-3xl bg-silver-50 p-8 md:p-12 border border-silver-100 shadow-sm relative overflow-hidden">
        
        {/* Subtle background decoration */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-lilac-100/50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-start">
            <h2 className="text-sm font-semibold text-lilac-500 uppercase tracking-widest mb-6">
            PRECIOS A MEDIDA
            </h2>
            
            <div className="text-lg text-silver-500 leading-relaxed space-y-6 mb-10">
            <p>
                Cada negocio es un mundo y la inteligencia artificial es una herramienta nueva. 
                Por eso, creamos sistemas a medida, facilitando su prueba gratuita, con el fin 
                de entender el potencial de la IA sin coste inicial.
            </p>
            <p>
                Una vez probada. Se establece:
            </p>
            <ul className="space-y-4 mt-2">
                <li className="flex items-start">
                <span className="mr-3 mt-2 w-1.5 h-1.5 bg-lilac-500 rounded-full shrink-0"></span>
                <span>{renderText("Un *primer* y *único* precio por la instalación del sistema.")}</span>
                </li>
                <li className="flex items-start">
                <span className="mr-3 mt-2 w-1.5 h-1.5 bg-lilac-500 rounded-full shrink-0"></span>
                <span>{renderText("Una suscripción mensual *sin permanencia*, que incluye soporte técnico y renovación constante, según novedades en el mercado.")}</span>
                </li>
            </ul>
            </div>
            
            <div className="w-full pt-2">
            <GradientButton onClick={scrollToContact} className="w-full md:w-auto px-10">
                Comenzar Ahora
            </GradientButton>
            </div>
        </div>
      </div>
    </div>
  );
};