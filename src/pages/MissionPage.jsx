import React, { useEffect } from 'react';
import { ArrowLeft, Target, Lightbulb } from 'lucide-react';
import Logo from '../assets/images/Logo.png';

const MissionPage = ({ onBack }) => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="bg-slate-900 min-h-screen pt-24 pb-12 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none z-0">
         <img src={Logo} alt="Marca de agua gigante" className="w-[80vw] md:w-[800px] object-contain grayscale" />
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors group font-medium">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Volver al Inicio
        </button>

        <div className="text-center max-w-3xl mx-auto mb-16">
           <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Misión y Visión</h1>
           <p className="text-xl text-slate-400">Los pilares fundamentales que guían nuestro camino educativo.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
           {/* Tarjeta Misión */}
           <div className="bg-slate-800/50 backdrop-blur-sm p-10 rounded-3xl border border-slate-700 hover:border-yellow-500 transition-all duration-500 group">
              <div className="w-20 h-20 bg-yellow-500 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(234,179,8,0.3)] group-hover:scale-110 transition-transform">
                 <Target className="text-black" size={40} />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">Nuestra Misión</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                 Formar técnicos profesionales altamente capacitados, íntegros y competitivos, mediante una enseñanza práctica y teórica de excelencia. Nos dedicamos a dotar a nuestros estudiantes de las herramientas, valores éticos y conocimientos necesarios para insertarse exitosamente en el mercado laboral y contribuir al desarrollo productivo de la sociedad.
              </p>
           </div>

           {/* Tarjeta Visión */}
           <div className="bg-slate-800/50 backdrop-blur-sm p-10 rounded-3xl border border-slate-700 hover:border-red-500 transition-all duration-500 group">
              <div className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(220,38,38,0.3)] group-hover:scale-110 transition-transform">
                 <Lightbulb className="text-white" size={40} />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">Nuestra Visión</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                 Ser reconocidos como la institución líder en educación técnica superior de la región y el país, distinguiéndonos por nuestra innovación tecnológica, infraestructura moderna y calidad humana. Aspiramos a ser el referente principal donde la industria busca a sus futuros líderes técnicos.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default MissionPage;