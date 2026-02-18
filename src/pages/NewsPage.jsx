import React, { useEffect, useState } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import publicidad1 from '../assets/images/Publicidad 1.png';
import publicidad2 from '../assets/images/Publicidad 2.png';

const NewsPage = ({ onBack }) => {
  useEffect(() => window.scrollTo(0, 0), []);
  const [selectedImage, setSelectedImage] = useState(null);

  const newsItems = [
    {
      src: publicidad1,
      title: "Inscripciones Tecnico Superior Mecanica Automotriz",
      date: "10 de Febrero, 2026"
    },
    {
      src: publicidad2,
      title: "Inscripciones Tecnico Superior Mecanica Automotriz",
      date: "12 de Febrero, 2026"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-slate-900 mb-8 transition-colors group font-medium">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Volver al Inicio
        </button>

        <div className="text-center max-w-3xl mx-auto mb-12">
           <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Noticias CCTSA</h1>
           <p className="text-xl text-slate-600">Mantente informado sobre las últimas novedades y eventos de nuestra institución.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
           {newsItems.map((item, index) => (
              <div key={index} className="flex flex-col group cursor-pointer" onClick={() => setSelectedImage(item)}>
                 {/* Título Arriba */}
                 <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-yellow-600 transition-colors px-1">
                    {item.title}
                 </h3>
                 
                 {/* Imagen */}
                 <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1 mb-3">
                    <img 
                       src={item.src} 
                       alt={item.title} 
                       className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                    />
                 </div>

                 {/* Fecha Abajo */}
                 <p className="text-sm text-slate-500 font-medium px-1 flex items-center gap-2">
                    📅 {item.date}
                 </p>
              </div>
           ))}
        </div>
      </div>

      {/* Modal de Imagen Completa */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all"
          >
            <X size={32} />
          </button>
          
          <div 
            className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={e => e.stopPropagation()}
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title} 
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-6 text-center text-white">
               <h2 className="text-3xl font-bold mb-2">{selectedImage.title}</h2>
               <p className="text-slate-400 text-lg">{selectedImage.date}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsPage;