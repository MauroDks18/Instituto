import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/images/Logo.png';

const Navbar = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isInstitutionOpen, setIsInstitutionOpen] = useState(false); // Para móvil

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md py-3 shadow-lg border-b border-yellow-500/20' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo e Identidad */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('home')}>
          {/* LOGO REAL */}
          <div className="relative group">
            <img
              src={logo}
              alt="Logo CCTSA"
              className="w-14 h-14 object-contain drop-shadow-md group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black text-white leading-none tracking-tight drop-shadow-sm">C.C.T.S.A.</span>
            <span className="text-[10px] font-bold text-yellow-500 tracking-wider uppercase">Centro De Capacitacion Tecnica  Sud Americano</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <button onClick={() => onNavigate('home')} className="text-slate-300 hover:text-yellow-400 transition-colors text-sm font-bold uppercase tracking-wide">Inicio</button>

          {/* MENU DESPLEGABLE INSTITUCIÓN */}
          <div className="relative group">
            <button className="text-slate-300 group-hover:text-yellow-400 transition-colors text-sm font-bold uppercase tracking-wide flex items-center gap-1 py-4">
              La institución <ChevronDown size={14} />
            </button>
            {/* Dropdown Content */}
            <div className="absolute top-full left-0 w-48 bg-slate-900 border border-slate-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 overflow-hidden">
              <button onClick={() => onNavigate('history')} className="block w-full text-left px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-yellow-400 text-sm font-medium border-b border-slate-800 transition-colors">
                Historia
              </button>
              <button onClick={() => onNavigate('mission')} className="block w-full text-left px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-yellow-400 text-sm font-medium border-b border-slate-800 transition-colors">
                La Misión y Visión
              </button>
              <button onClick={() => onNavigate('objectives')} className="block w-full text-left px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-yellow-400 text-sm font-medium transition-colors">
                Los Objetivos
              </button>
            </div>
          </div>

          <button onClick={() => onNavigate('courses')} className="text-slate-300 hover:text-yellow-400 transition-colors text-sm font-bold uppercase tracking-wide">Cursos</button>

          <button onClick={() => onNavigate('contact')} className="text-slate-300 hover:text-yellow-400 transition-colors text-sm font-bold uppercase tracking-wide">Contactos</button>

          {/* Botón Principal Actualizado: Noticias CCTSA */}
          <button onClick={() => onNavigate('news')} className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-2.5 rounded-sm font-bold transition-all shadow-[0_0_15px_rgba(234,179,8,0.4)] hover:shadow-[0_0_25px_rgba(234,179,8,0.6)] text-sm uppercase transform hover:-translate-y-0.5">
            Noticias CCTSA
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 p-4 flex flex-col gap-4 shadow-2xl h-screen overflow-y-auto pb-20">
          <button onClick={() => { onNavigate('home'); setMobileMenuOpen(false) }} className="text-slate-300 font-medium block p-2 hover:bg-slate-800 rounded text-left">Inicio</button>

          {/* Mobile Dropdown Institution */}
          <div>
            <button onClick={() => setIsInstitutionOpen(!isInstitutionOpen)} className="w-full flex justify-between items-center text-slate-300 font-medium p-2 hover:bg-slate-800 rounded text-left">
              La institución <ChevronDown size={16} className={`transform transition-transform ${isInstitutionOpen ? 'rotate-180' : ''}`} />
            </button>
            {isInstitutionOpen && (
              <div className="pl-6 space-y-2 mt-2 border-l-2 border-slate-700 ml-2">
                <button onClick={() => { onNavigate('history'); setMobileMenuOpen(false) }} className="block text-slate-400 hover:text-yellow-400 text-sm py-1">Historia</button>
                <button onClick={() => { onNavigate('mission'); setMobileMenuOpen(false) }} className="block text-slate-400 hover:text-yellow-400 text-sm py-1">Misión y Visión</button>
                <button onClick={() => { onNavigate('objectives'); setMobileMenuOpen(false) }} className="block text-slate-400 hover:text-yellow-400 text-sm py-1">Objetivos</button>
              </div>
            )}
          </div>

          <button onClick={() => { onNavigate('courses'); setMobileMenuOpen(false) }} className="text-slate-300 font-medium block p-2 hover:bg-slate-800 rounded text-left">Cursos</button>

          <button onClick={() => { onNavigate('contact'); setMobileMenuOpen(false) }} className="text-slate-300 font-medium block p-2 hover:bg-slate-800 rounded text-left">Contactos</button>

          <button onClick={() => { onNavigate('news'); setMobileMenuOpen(false) }} className="bg-yellow-500 text-black font-bold px-4 py-3 rounded w-full">Noticias CCTSA</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;