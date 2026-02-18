import React, { useState, useEffect } from 'react';
import Navbar from './component/Navbar.jsx';
import Footer from './component/Footer.jsx';
import Home from './pages/Home.jsx';
import Seguridad from './pages/Carrer/seguridad.jsx';
import Mantenimiento from './pages/Carrer/mantenimiento.jsx';
import Mecanica from './pages/Carrer/mecanica.jsx';
import Conduccion from './pages/Carrer/conduccion.jsx';
import Electricidad from './pages/Carrer/electricidad.jsx';
import ContactPage from './pages/contac.jsx';
import HistoryPage from './pages/HistoryPage.jsx';
import MissionPage from './pages/MissionPage.jsx';
import ObjectivesPage from './pages/ObjectivesPage.jsx';
import NewsPage from './pages/NewsPage.jsx';
import CoursesPage from './pages/CoursesPage.jsx';

// --- MAIN APP COMPONENT ---
const App = () => {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'detail'
  const [selectedCareer, setSelectedCareer] = useState(null);

  // Manejar el botón "Atrás" del navegador
  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state) {
        setCurrentView(event.state.view);
        setSelectedCareer(event.state.career || null);
      } else {
        // Fallback al inicio si se llega al estado inicial (historial vacío para esta app)
        setCurrentView('home');
        setSelectedCareer(null);
      }
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (view, careerData = null) => {
    // Guardar estado en el historial antes de navegar
    const newState = { view, career: careerData };
    const url = view === 'home' ? '/' : `#${view}`;
    window.history.pushState(newState, '', url);

    setCurrentView(view);
    if (careerData) setSelectedCareer(careerData);
    window.scrollTo(0, 0);
  };

  return (
    <div className="font-sans antialiased text-slate-800 bg-white">
      {/* Navbar siempre visible */}
      <Navbar onNavigate={(view) => handleNavigate(view)} />

      {/* Router Condicional */}
      {currentView === 'home' ? (
        <>
          <Home onSelectCareer={(career) => handleNavigate('detail', career)} />
          <section id="contacto" className="py-20 bg-yellow-500 relative overflow-hidden">
            {/* Banner de contacto (simplificado para no repetir código) */}
            <div className="container mx-auto px-6 relative z-10 text-center">
              <h3 className="text-3xl font-black text-black mb-4">¿Listo para ser un profesional?</h3>
              <div className="flex justify-center gap-4 text-black font-bold">
                <span>📞 73654903</span>
                <span>📍 Montero, C/Arenales #189</span>
              </div>
            </div>
          </section>
        </>
      ) : currentView === 'contact' ? (
        <ContactPage onBack={() => handleNavigate('home')} />
      ) : currentView === 'history' ? (
        <HistoryPage onBack={() => handleNavigate('home')} />
      ) : currentView === 'mission' ? (
        <MissionPage onBack={() => handleNavigate('home')} />
      ) : currentView === 'objectives' ? (
        <ObjectivesPage onBack={() => handleNavigate('home')} />
      ) : currentView === 'news' ? (
        <NewsPage onBack={() => handleNavigate('home')} />
      ) : currentView === 'courses' ? (
        <CoursesPage
          onBack={() => handleNavigate('home')}
          onSelectCareer={(career) => handleNavigate('detail', career)}
        />
      ) : selectedCareer && selectedCareer.id === 'soldadura' ? (
        <Seguridad
          career={selectedCareer}
          onBack={() => handleNavigate('home')}
        />
      ) : selectedCareer && selectedCareer.id === 'automotriz' ? (
        <Mantenimiento
          career={selectedCareer}
          onBack={() => handleNavigate('home')}
        />
      ) : selectedCareer && selectedCareer.id === 'motos' ? (
        <Mecanica
          career={selectedCareer}
          onBack={() => handleNavigate('home')}
        />
      ) : selectedCareer && selectedCareer.id === 'conduccion' ? (
        <Conduccion
          career={selectedCareer}
          onBack={() => handleNavigate('home')}
        />
      ) : selectedCareer && selectedCareer.id === 'electricidad' ? (
        <Electricidad
          career={selectedCareer}
          onBack={() => handleNavigate('home')}
        />
      ) : (
        null
      )}

      {/* Footer siempre visible */}
      <Footer />
    </div>
  );
};

export default App;