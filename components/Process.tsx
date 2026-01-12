import React from 'react';

const steps = [
  {
    number: "01",
    title: "Estudio",
    text: "Analizaremos tus procesos actuales *de forma gratuita* y entenderemos en qué áreas la IA te ahorraría *dinero* y *horas* de trabajo."
  },
  {
    number: "02",
    title: "Honestidad",
    text: "Si, por el contrario su empresa *no necesita* IA ahora mismo (o creemos que no podemos ayudarle), *se informará* con total honestidad."
  },
  {
    number: "03",
    title: "Demostración",
    text: "Diseñamos la infraestructura. La prueba en su empresa, *sin compromiso*. Si no resulta productivo o no ve el valor, quedará en una *experiencia gratuita*."
  },
  {
    number: "04",
    title: "Implementación",
    text: "Si funciona, definimos detalles, precios, e integramos el *sistema final*."
  },
  {
    number: "05",
    title: "Evolución",
    text: "La IA se encuentra en constante evolución. *Nosotros* nos encargamos de integrar las *últimas novedades* para asegurar una *mejora* constante."
  }
];

const Process: React.FC = () => {
  // Helper function to parse text with asterisks into bold elements
  const renderText = (text: string) => {
    return text.split('*').map((part, index) => {
      // Even indices are normal text, odd indices are bold text
      if (index % 2 === 1) {
        return <strong key={index} className="font-semibold text-silver-900">{part}</strong>;
      }
      return part;
    });
  };

  return (
    <section id="proceso" className="py-24 bg-silver-50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-lilac-500 font-medium tracking-widest uppercase text-sm md:text-base mb-2 block">Metodología</span>
          <h2 className="text-4xl md:text-6xl font-serif text-silver-900">
            ¿Cómo Trabajamos?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
          {steps.map((step, idx) => (
            <div key={idx} className="relative pt-8 md:pt-0">
               {/* Connecting Line (Desktop) - Behind circles */}
               {idx !== steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-[1px] bg-silver-200 -z-10"></div>
              )}
              
              {/* Vertical Separator (Desktop) - Between texts with floating effect */}
              {idx !== steps.length - 1 && (
                <div className="hidden md:block absolute top-28 -right-4 w-[1px] h-32 bg-gradient-to-b from-transparent via-lilac-300 to-transparent shadow-[0_0_10px_rgba(168,85,247,0.6)] opacity-80"></div>
              )}

              <div className="flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 rounded-full bg-white border border-silver-200 flex items-center justify-center text-lilac-900 font-serif font-bold text-xl md:text-2xl mb-6 shadow-sm z-10 relative">
                  {step.number}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-silver-900 mb-3">{step.title}</h3>
                {/* Updated: Changed md:text-justify to md:text-left */}
                <p className="text-sm md:text-base text-silver-500 leading-relaxed px-2 md:text-left md:hyphens-none">
                  {renderText(step.text)}
                </p>
              </div>

               {/* Horizontal Separator (Mobile) - Between steps with floating effect */}
               {idx !== steps.length - 1 && (
                <div className="md:hidden w-32 h-[1px] bg-gradient-to-r from-transparent via-lilac-300 to-transparent mx-auto mt-8 shadow-[0_0_10px_rgba(168,85,247,0.6)] opacity-80"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;