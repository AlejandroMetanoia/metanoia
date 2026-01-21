import React from 'react';

const steps = [
  {
    number: "01",
    title: "Diagnóstico y Visión",
    text: "Realizamos una inmersión inicial gratuita para detectar fricciones operativas y oportunidades de crecimiento. Alineamos el potencial de la IA con tus metas para sentar las bases de una transformación real."
  },
  {
    number: "02",
    title: "Diseño de Solución y ROI",
    text: "Modelamos la arquitectura técnica y definimos una inversión adaptada estrictamente al retorno (ROI) esperado. Aseguramos que cada recurso destinado genere un impacto directo, tangible y medible en tu rentabilidad."
  },
  {
    number: "03",
    title: "Desarrollo y Arquitectura Inteligente",
    text: "Construimos sistemas escalables utilizando los stacks de IA más avanzados. Integramos soluciones personalizadas de forma orgánica en tus flujos de trabajo, transformando la visión estratégica en una herramienta operativa potente."
  },
  {
    number: "04",
    title: "Optimización e Iteración de Valor",
    text: "Refinamos la solución mediante pruebas de estrés y análisis de datos reales. Ajustamos cada parámetro para garantizar precisión máxima y un rendimiento óptimo antes del despliegue final en tu organización."
  },
  {
    number: "05",
    title: "Implementación y Escalado",
    text: "Lanzamos la solución y acompañamos a tu equipo en la adopción tecnológica. Diseñamos sistemas preparados para evolucionar, asegurando que tu ventaja competitiva crezca y se sostenga a largo plazo."
  }
];

const Process: React.FC = () => {
  const renderText = (text: string) => {
    return text.split('*').map((part, index) => {
      // Even indices are normal text, odd indices are bold text
      if (index % 2 === 1) {
        return <strong key={index} className="font-semibold text-black">{part}</strong>;
      }
      return part;
    });
  };

  return (
    <section id="proceso" className="bg-black relative h-screen pt-20 overflow-hidden flex flex-col md:flex-row">
      {/* Left Column: Content */}
      <div className="w-full md:w-1/2 px-6 h-full flex flex-col justify-center pb-8">
        <div className="max-w-xl mx-auto md:mx-0 md:ml-auto md:pr-12 w-full">
          <div className="text-left mb-4">
            <span className="text-lilac-500 font-medium tracking-widest uppercase text-xs md:text-sm mb-1 block">Metodología</span>
            <h2 className="text-2xl md:text-4xl font-serif text-white">
              ¿Cómo Trabajamos?
            </h2>
          </div>

          <div className="flex flex-col gap-2 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="w-full">
                <div className="bg-gray-200 border border-gray-300 p-2 md:p-3 px-4 flex flex-row items-center text-left shadow-lg hover:-translate-y-1 transition-all duration-300 gap-3">
                  <div className="min-w-[2rem] w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-purple-700 font-serif font-bold text-base md:text-lg shadow-sm">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-semibold text-purple-700 mb-0.5">{step.title}</h3>
                    <p className="text-[10px] md:text-xs text-black leading-snug">
                      {renderText(step.text)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="w-full md:w-1/2 h-[40vh] md:h-full relative text-right">
        <img
          src="/process-image.png"
          alt="Process"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent md:bg-gradient-to-r md:from-black md:via-transparent md:to-transparent"></div>
      </div>
    </section>
  );
};

export default Process;