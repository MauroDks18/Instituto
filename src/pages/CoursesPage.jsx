import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { CAREERS_DATA } from '../careers';
import Wallpaper4 from '../assets/images/Wallpaper 4.webp';

/* --- INICIO PESTAÑA CURSOS (CATÁLOGO) --- */
const CoursesPage = ({ onBack, onSelectCareer }) => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="bg-slate-900 min-h-screen pt-24 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40 pointer-events-none">
         <img src={Wallpaper4} alt="Fondo Logo" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors group font-medium">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Volver al Inicio
        </button>

        <div className="text-center max-w-4xl mx-auto mb-16">
           <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
              Cursos Técnicos <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700">Especializados</span>
           </h1>
           <p className="text-xl text-slate-300">
              Descubre nuestra oferta académica diseñada para formarte como un experto en tiempo récord. Elige tu camino hacia el éxito profesional.
           </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {CAREERS_DATA.map((career) => (
              <div key={career.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-slate-700 hover:shadow-2xl hover:border-yellow-500 transition-all duration-300 group flex flex-col h-full">
                 <div className="h-56 overflow-hidden relative">
                    <div className={`absolute top-4 right-4 ${career.color === 'red' ? 'bg-red-600' : 'bg-yellow-500'} text-white font-bold text-xs px-3 py-1 rounded-full shadow-lg z-10`}>
                       {career.type}
                    </div>
                    <img src={career.img} alt={career.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                       <career.icon size={40} className={`mb-2 ${career.color === 'red' ? 'text-red-400' : 'text-yellow-400'}`} />
                    </div>
                 </div>
                 
                 <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-yellow-500 transition-colors">
                       {career.title}
                    </h3>
                    <p className="text-slate-300 mb-6 flex-1 text-sm leading-relaxed">
                       {career.shortDesc}
                    </p>
                    
                    <button 
                       onClick={() => onSelectCareer(career)}
                       className={`w-full py-3 font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${career.color === 'red' ? 'bg-red-100 text-red-700 hover:bg-red-600 hover:text-white' : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-500 hover:text-black'}`}
                    >
                       Ver Detalles <ArrowRight size={18} />
                    </button>
                 </div>
              </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;