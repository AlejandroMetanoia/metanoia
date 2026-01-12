import React from 'react';
import { Brain, Cpu, LineChart, Network } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    title: "Consultoría Estratégica AI",
    description: "Evaluamos su infraestructura actual y diseñamos una hoja de ruta personalizada para la integración de IA que maximiza el ROI.",
    icon: <Brain size={32} className="text-lilac-500" />,
  },
  {
    id: 2,
    title: "Automatización Inteligente",
    description: "Transformamos procesos manuales en flujos de trabajo autónomos eficientes, reduciendo costos operativos hasta un 40%.",
    icon: <Cpu size={32} className="text-lilac-500" />,
  },
  {
    id: 3,
    title: "Análisis Predictivo",
    description: "Convertimos sus datos históricos en visiones del futuro. Anticípese a las tendencias del mercado con nuestros modelos de ML.",
    icon: <LineChart size={32} className="text-lilac-500" />,
  },
  {
    id: 4,
    title: "Integración de LLMs",
    description: "Implementación de modelos de lenguaje avanzados (GPT-4, Claude) adaptados a la voz y base de conocimiento de su marca.",
    icon: <Network size={32} className="text-lilac-500" />,
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-pearl relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <span className="text-lilac-500 font-medium tracking-widest uppercase text-sm mb-2 block">Nuestras Capacidades</span>
          <h2 className="text-4xl md:text-5xl font-serif text-silver-900 leading-tight">
            Ingeniería de lo intangible,<br />
            <span className="italic text-silver-400">resultados tangibles.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group p-10 rounded-3xl bg-white border border-silver-100 hover:border-lilac-200 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.1)]"
            >
              <div className="mb-6 p-4 bg-lilac-50 rounded-2xl w-fit group-hover:bg-lilac-100 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-silver-900 mb-4">{service.title}</h3>
              <p className="text-silver-500 leading-relaxed group-hover:text-silver-600 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;