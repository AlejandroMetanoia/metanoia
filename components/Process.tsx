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
    <section id="proceso" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-lilac-500 font-medium tracking-widest uppercase text-sm md:text-base mb-2 block">Metodología</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white">
            ¿Cómo Trabajamos?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
          {steps.map((step, idx) => (
            <div key={idx} className="h-full">
              <div className="h-full bg-gray-200 border border-gray-300 p-6 flex flex-col items-center text-center shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-white border border-gray-300 flex items-center justify-center text-purple-700 font-serif font-bold text-xl md:text-2xl mb-6 shadow-sm">
                  {step.number}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-purple-700 mb-3">{step.title}</h3>
                <p className="text-sm md:text-base text-black leading-relaxed">
                  {renderText(step.text)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;