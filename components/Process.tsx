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
    <section id="proceso" className="bg-black relative min-h-screen flex flex-col md:flex-row">
      {/* Left Column: Content */}
      <div className="w-full md:w-1/2 px-6 py-24 flex flex-col justify-center">
        <div className="max-w-xl mx-auto md:mx-0 md:ml-auto md:pr-12">
          <div className="text-left mb-16">
            <span className="text-lilac-500 font-medium tracking-widest uppercase text-sm md:text-base mb-2 block">Metodología</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white">
              ¿Cómo Trabajamos?
            </h2>
          </div>

          <div className="flex flex-col gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="w-full">
                <div className="bg-gray-200 border border-gray-300 p-8 flex flex-row items-start text-left shadow-2xl hover:-translate-y-2 transition-all duration-300 gap-6">
                  <div className="min-w-[4rem] w-16 h-16 rounded-full bg-white border border-gray-300 flex items-center justify-center text-purple-700 font-serif font-bold text-xl md:text-2xl shadow-sm">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-purple-700 mb-2">{step.title}</h3>
                    <p className="text-sm md:text-base text-black leading-relaxed">
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
      <div className="w-full md:w-1/2 h-[50vh] md:h-auto sticky top-0 md:relative">
        <img
          src="/process-image.png"
          alt="Process"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent md:bg-gradient-to-r md:from-black md:via-transparent md:to-transparent"></div>
      </div>
    </section>
  );
};

export default Process;