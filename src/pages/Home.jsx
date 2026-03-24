import React from 'react';
import { ArrowRight, Target, Lightbulb, Facebook } from 'lucide-react';
import { CAREERS_DATA, HERO_BG } from '../careers';
import Button from '../component/Button';
import Radio from '../assets/images/Radio.png';

const Home = ({ onSelectCareer }) => {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={HERO_BG} alt="Taller" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/90"></div>
        </div>
        <div className="absolute inset-0 opacity-10 z-0" style={{ backgroundImage: 'linear-gradient(#EAB308 1px, transparent 1px), linear-gradient(to right, #EAB308 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                Matrículas 2026 Disponibles
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6 leading-[1.1]">
                FORJA TU <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">FUTURO TÉCNICO</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-light">
                Conviértete en un experto en <strong className="text-white">Mecánica</strong>, <strong className="text-white">Soldadura</strong>, <strong className="text-white">Electricidad</strong> y más.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <a href="#carreras" className="bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded font-bold text-lg transition-all shadow-[0_10px_20px_rgba(220,38,38,0.3)] flex items-center justify-center gap-2 hover:-translate-y-1">
                  Ver Cursos <ArrowRight size={20} />
                </a>
              </div>

              <div className="flex flex-col items-center lg:items-start gap-4">
                <span className="text-yellow-500 font-bold uppercase tracking-widest text-sm">Redes Sociales</span>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a href="https://www.facebook.com/sudamericano1972?locale=es_LA" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded font-bold text-base transition-all shadow-[0_10px_20px_rgba(37,99,235,0.3)] flex items-center justify-center gap-2 hover:-translate-y-1">
                    <Facebook size={20} /> Facebook
                  </a>
                  <a href="http://www.radioturbomixmontero.com/" target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-400 text-white px-6 py-3 rounded font-bold text-base transition-all shadow-[0_10px_20px_rgba(249,115,22,0.3)] flex items-center justify-center gap-2 hover:-translate-y-1">
                    <img src={Radio} alt="Radio" className="w-6 h-6 object-contain" /> Radio Turbo Mix
                  </a>
                </div>
              </div>
            </div>
            {/* Visual Grid */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none relative hidden md:block">
               <div className="relative z-10 grid grid-cols-2 gap-4">
                  <div className="space-y-4 translate-y-8">
                     <div className="bg-slate-800 p-2 rounded-lg transform rotate-3 shadow-2xl border border-slate-700">
                        <img src={CAREERS_DATA[0].img} alt="Soldadura" className="rounded h-36 w-full object-cover" />
                     </div>
                     <div className="bg-slate-800 p-2 rounded-lg transform rotate-1 shadow-2xl border border-slate-700">
                        <img src={CAREERS_DATA[1].img} alt="Automotriz" className="rounded h-36 w-full object-cover" />
                     </div>
                  </div>
                  <div className="space-y-4">
                     <div className="bg-slate-800 p-2 rounded-lg transform -rotate-3 shadow-2xl border border-slate-700">
                        <img src={CAREERS_DATA[2].img} alt="Motos" className="rounded h-36 w-full object-cover" />
                     </div>
                     <div className="bg-slate-800 p-2 rounded-lg transform -rotate-1 shadow-2xl border border-slate-700">
                        <img src={CAREERS_DATA[4].img} alt="Electricidad" className="rounded h-36 w-full object-cover" />
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision (REDISEÑADA PARA SOBRESALIR) */}
      <section id="mision" className="py-24 bg-slate-900 relative overflow-hidden">
         {/* Decoraciones de fondo */}
         <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
         <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>

         <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
               <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                  Nuestra <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Identidad</span>
               </h2>
               <p className="text-lg text-slate-400">
                  En C.C.T.S.A., formamos el carácter y las habilidades necesarias para liderar en el mundo industrial.
               </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
               
               {/* --- AQUÍ SE ENCUENTRA LA MISIÓN --- */}
               <div className="group relative bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-yellow-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(234,179,8,0.2)]">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                     <Target size={120} className="text-yellow-500" />
                  </div>
                  <div className="relative z-10">
                     <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Target className="text-yellow-400" size={32}/>
                     </div>
                     <h3 className="text-2xl font-black text-white mb-4">Nuestra Misión</h3>
                     <p className="text-slate-300 leading-relaxed">
                        Formar técnicos profesionales altamente capacitados, con valores éticos y sólidos conocimientos prácticos, listos para enfrentar los desafíos del mercado laboral actual.
                     </p>
                  </div>
               </div>

               {/* --- AQUÍ SE ENCUENTRA LA VISIÓN --- */}
               <div className="group relative bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-red-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                     <Lightbulb size={120} className="text-red-500" />
                  </div>
                  <div className="relative z-10">
                     <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Lightbulb className="text-red-400" size={32}/>
                     </div>
                     <h3 className="text-2xl font-black text-white mb-4">Nuestra Visión</h3>
                     <p className="text-slate-300 leading-relaxed">
                        Ser la institución líder en educación técnica superior de la región, reconocida por nuestra innovación tecnológica y la calidad humana de nuestros egresados.
                     </p>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* Features List (Careers) */}
      <section id="carreras" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Cursos Técnicos <span className="underline decoration-yellow-400 decoration-4 underline-offset-4">Especializados</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {CAREERS_DATA.map((career) => (
              <div key={career.id} className="group bg-white rounded-xl overflow-hidden shadow-xl border border-slate-200 hover:shadow-2xl transition-all hover:-translate-y-2 flex flex-col h-full">
                <div className="h-48 overflow-hidden relative shrink-0">
                  <div className={`absolute top-4 left-4 ${career.color === 'red' ? 'bg-red-600 text-white' : 'bg-yellow-500 text-black'} font-bold text-xs px-3 py-1 rounded shadow z-10 uppercase`}>{career.type}</div>
                  <img src={career.img} alt={career.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-duration-700 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <career.icon size={32} className={`mb-2 ${career.color === 'red' ? 'text-red-400' : 'text-yellow-400'}`} />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-black text-slate-900 mb-3 leading-tight">{career.title}</h3>
                  <p className="text-slate-600 mb-6 text-sm flex-1">{career.shortDesc}</p>
                  <Button 
                    onClick={() => onSelectCareer(career)}
                    variant={career.color === 'red' ? 'danger' : 'dark'}
                    fullWidth
                    className="py-2.5 text-sm">
                    Más Información
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;