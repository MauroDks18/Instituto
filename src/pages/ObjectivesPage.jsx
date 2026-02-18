import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import Favicon from '../assets/images/CC.ico';
import ObjetivosImg from '../assets/images/Objetivos.webp';

const ObjectivesPage = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    let link = document.querySelector("link[rel*='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'shortcut icon';
      document.head.appendChild(link);
    }
    link.href = Favicon;
  }, []);
  
  const objectives = [
    "Promover la excelencia académica a través de planes de estudio actualizados constantemente según las demandas del mercado.",
    "Fomentar el emprendimiento en nuestros estudiantes, brindándoles las herramientas para crear sus propios negocios.",
    "Establecer alianzas estratégicas con empresas del sector industrial para garantizar prácticas profesionales reales.",
    "Inculcar valores éticos y de responsabilidad social en cada uno de nuestros futuros profesionales.",
    "Mantener una infraestructura y equipamiento de vanguardia para el aprendizaje práctico."
  ];

  return (
    <div className="bg-white min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-slate-900 mb-8 transition-colors group font-medium">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Volver al Inicio
        </button>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start">
             
             <div className="flex-1">
                <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 font-bold rounded-full text-sm mb-4">Metas Institucionales</div>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Nuestros Objetivos</h1>
                <p className="text-xl text-slate-600 mb-8">
                   Trabajamos día a día con metas claras para garantizar el éxito de nuestra comunidad educativa.
                </p>
                <img 
                  src={ObjetivosImg} 
                  alt="Estudiantes trabajando" 
                  className="rounded-2xl shadow-2xl w-full object-cover h-64 md:h-80"
                />
             </div>

             <div className="flex-1 space-y-6 mt-8 md:mt-0">
                {objectives.map((obj, index) => (
                   <div key={index} className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                      <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center shrink-0 font-bold text-black shadow-lg">
                         {index + 1}
                      </div>
                      <p className="text-slate-700 font-medium text-lg pt-1">{obj}</p>
                   </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectivesPage;