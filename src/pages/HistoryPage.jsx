import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import logo from '../assets/images/logo.png';
import historiaImg from '../assets/images/Historia.webp';

const HistoryPage = ({ onBack }) => {
  useEffect(() => window.scrollTo(0, 0), []);
  
  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-12 relative overflow-hidden">
      {/* Marca de agua institucional */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none z-0">
         <img src={logo} alt="" className="w-[600px] grayscale" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-slate-900 mb-6 transition-colors group font-medium">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Volver al Inicio
        </button>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-yellow-600 font-bold uppercase tracking-wider text-sm">Nuestro Legado</span>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-6">Historia Institucional</h1>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden mb-12 border border-slate-100">
            <div className="h-64 relative overflow-hidden">
               {/* Placeholder para imagen histórica */}
               <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${historiaImg})` }}></div>
            </div>
            <div className="p-8 md:p-12 space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                El <strong>Instituto Técnico Sudamericano (C.C.T.S.A.)</strong> nació en el corazón de Montero con una visión clara: brindar educación técnica de calidad accesible para todos. Fundado hace más de una década, comenzamos como un pequeño centro de capacitación con un solo taller.
              </p>
              <p>
                A lo largo de los años, hemos crecido junto a nuestra comunidad. Lo que empezó con cursos básicos de mecánica se ha transformado en un instituto integral que abarca desde la electricidad domiciliaria hasta la soldadura industrial avanzada.
              </p>
              <p>
                Hoy en día, somos un referente en la educación técnica del norte cruceño, habiendo graduado a miles de estudiantes que ahora lideran sus propios talleres o trabajan en las empresas más importantes de la región. Nuestro compromiso sigue intacto: forjar el futuro técnico de Bolivia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;