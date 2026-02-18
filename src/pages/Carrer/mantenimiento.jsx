import React, { useEffect, useState } from 'react';
import { Wrench, BookOpen, CheckCircle, ArrowLeft, GraduationCap, School, X } from 'lucide-react';
import Button from '../../component/Button';
import taller1 from '../../assets/images/Mantenimiento/Taller 1.webp';
import taller2 from '../../assets/images/Mantenimiento/Taller 2.webp';
import aula1 from '../../assets/images/Mantenimiento/Aula 1.webp';
import aula2 from '../../assets/images/Mantenimiento/Aula 2.webp';
import Logo from '../../assets/images/Logo.png';

const Mantenimiento = ({ career, onBack }) => {
   const [selectedImage, setSelectedImage] = useState(null);
   // Scroll al inicio al cargar el componente
   useEffect(() => {
      window.scrollTo(0, 0);
      let link = document.querySelector("link[rel*='icon']");
      if (!link) {
         link = document.createElement('link');
         link.rel = 'shortcut icon';
         document.head.appendChild(link);
      }
      link.href = Logo;
   }, []);

   if (!career) return null;

   return (
      <div className="bg-slate-50 min-h-screen">
         {/* Hero del Detalle */}
         <section className="relative h-[50vh] min-h-[400px] flex items-end pb-12 overflow-hidden">
            <div className="absolute inset-0">
               <img src={career.img} className="w-full h-full object-cover" alt={career.title} />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
            </div>
            <div className="container mx-auto px-6 relative z-10 text-white">
               <Button onClick={onBack} variant="ghost" className="flex items-center gap-2 mb-6 group px-0 justify-start hover:bg-transparent">
                  <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Volver al Inicio
               </Button>
               <div className={`inline-block px-3 py-1 rounded mb-4 font-bold text-xs uppercase tracking-wider ${career.color === 'red' ? 'bg-red-600' : 'bg-yellow-500 text-black'}`}>
                  {career.type}
               </div>
               <h1 className="text-4xl md:text-6xl font-black mb-4">{career.title}</h1>
            </div>
         </section>

         {/* Contenido Principal */}
         <section className="py-20">
            <div className="container mx-auto px-6">
               <div className="grid lg:grid-cols-3 gap-12">

                  {/* Columna Izquierda: Info + Módulos */}
                  <div className="lg:col-span-2 space-y-12">
                     <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                           <BookOpen className="text-yellow-500" /> Descripción de la Carrera
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                           {career.fullDesc}
                        </p>
                     </div>

                     <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                           <GraduationCap className="text-yellow-500" /> Lo que aprenderás (Malla Curricular)
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                           {career.modules.map((mod, idx) => (
                              <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 flex items-start gap-3">
                                 <CheckCircle className="text-green-500 shrink-0 mt-1" size={18} />
                                 <span className="font-medium text-slate-700">{mod}</span>
                              </div>
                           ))}
                        </div>
                     </div>

                     {/* Galería de Proyectos */}
                     <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                           <Wrench className="text-yellow-500" /> Proyectos Realizados
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                           {[taller1, taller2].map((img, idx) => (
                              <div key={idx} className="group overflow-hidden rounded-xl shadow-lg relative h-64 cursor-pointer" onClick={() => setSelectedImage(img)}>
                                 <img
                                    src={img}
                                    alt={`Proyecto ${idx}`}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                 />
                                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                                 <span className="absolute bottom-4 left-4 text-white font-bold text-sm bg-black/50 px-3 py-1 rounded backdrop-blur-sm">Proyecto Estudiantil</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>

                  {/* Columna Derecha: Aulas e Info Adicional */}
                  <div className="space-y-8">
                     <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                           <School className="text-yellow-500" /> Nuestras Aulas y Talleres
                        </h3>
                        <div className="space-y-4">
                           {[aula1, aula2].map((img, idx) => (
                              <div key={idx} className="rounded-lg overflow-hidden h-48 shadow-md cursor-pointer" onClick={() => setSelectedImage(img)}>
                                 <img
                                    src={img}
                                    alt={`Aula ${idx}`}
                                    className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                                 />
                              </div>
                           ))}
                        </div>
                        <p className="text-sm text-slate-500 mt-4 italic text-center">
                           Equipamiento moderno para prácticas reales.
                        </p>
                     </div>

                     <div className="bg-slate-900 p-8 rounded-xl text-white text-center shadow-2xl">
                        <h3 className="text-2xl font-bold mb-2">¡Inscríbete Hoy!</h3>
                        <p className="text-slate-400 mb-6 text-sm">Cupos limitados para la gestión 2026.</p>
                        <Button fullWidth className="py-3 tracking-wide" onClick={() => window.open("https://wa.me/59173654903", "_blank")}>
                           Reservar mi plaza
                        </Button>
                        <p className="text-xs text-slate-500 mt-4">¿Tienes dudas? Llámanos al 73654903</p>
                     </div>
                  </div>

               </div>
            </div>
         </section>

         {/* Modal de Imagen */}
         {selectedImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm" onClick={() => setSelectedImage(null)}>
               <style>{`
                @keyframes zoomIn {
                   from { transform: scale(0.8); opacity: 0; }
                   to { transform: scale(1); opacity: 1; }
                }
             `}</style>
               <button className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors">
                  <X size={40} />
               </button>
               <img src={selectedImage} alt="Vista ampliada" className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" style={{ animation: 'zoomIn 0.3s ease-out forwards' }} onClick={(e) => e.stopPropagation()} />
            </div>
         )}
      </div>
   );
};

export default Mantenimiento;