import React, { useEffect } from 'react';
import { ArrowLeft, Phone, Clock, MapPin } from 'lucide-react';
import Favicon from '../assets/images/CC.ico';

/* --- INICIO SECCIÓN CONTACTO (NUEVA PESTAÑA) --- */
const ContactPage = ({ onBack }) => {
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

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        
        {/* Encabezado */}
        <div className="mb-8">
           <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-slate-900 mb-4 transition-colors group font-medium">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Volver al Inicio
           </button>
           <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-2">Contáctanos</h1>
           <p className="text-lg text-slate-600">Estamos listos para atender tus consultas y ayudarte a formar tu futuro.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Columna Izquierda: Información de Contacto */}
          <div className="space-y-8">
             
             {/* Tarjeta de Información */}
             <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2 border-b pb-4">
                   <Phone className="text-yellow-500" /> Información de Contacto
                </h3>
                
                <div className="space-y-6">
                   <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center shrink-0">
                         <Phone className="text-yellow-600" size={20} />
                      </div>
                      <div>
                         <h4 className="font-bold text-slate-900">Teléfonos</h4>
                         <p className="text-slate-600">73654903</p>
                         <p className="text-slate-600">74350057</p>
                      </div>
                   </div>

                   <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                         <Clock className="text-blue-600" size={20} />
                      </div>
                      <div>
                         <h4 className="font-bold text-slate-900">Horarios de Atención</h4>
                         <p className="text-slate-600">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                         <p className="text-slate-600">Sábados: 8:00 AM - 12:00 PM</p>
                      </div>
                   </div>

                   <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                         <MapPin className="text-red-600" size={20} />
                      </div>
                      <div>
                         <h4 className="font-bold text-slate-900">Dirección</h4>
                         <p className="text-slate-600">Calle Arenales #189</p>
                         <p className="text-slate-600">Montero, Santa Cruz - Bolivia</p>
                      </div>
                   </div>
                </div>

                <div className="mt-8 space-y-4">
                   <a href="https://wa.me/59173654903" target="_blank" rel="noopener noreferrer" className="block w-full bg-green-500 hover:bg-green-600 text-white text-center font-bold py-3 rounded-lg transition-colors">
                      Escribir por WhatsApp
                   </a>
                </div>
             </div>

          </div>

          {/* Columna Derecha: Mapa GPS */}
          <div className="h-full min-h-[400px] bg-slate-200 rounded-2xl overflow-hidden shadow-xl border border-slate-300 relative group">
             {/* Etiqueta flotante */}
             <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                <MapPin size={14} className="text-red-500"/> Ubicación Satelital
             </div>
             
             {/* IFRAME DE GOOGLE MAPS */}
             {/* Usamos una búsqueda general para el instituto en Montero que coincida con las coordenadas aproximadas del link enviado */}
             <iframe 
               title="Ubicación Instituto Sudamericano"
               src="https://maps.google.com/maps?q=Instituto+Tecnico+Sudamericano+Montero&t=&z=15&ie=UTF8&iwloc=&output=embed" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen="" 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
             ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;