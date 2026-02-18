import React from 'react';
import { ShieldCheck, Car, Wrench } from 'lucide-react';
import * as Images from './assets/images/index';
import PortadaElectricidad from './assets/images/Electricidad/Portada.webp';
import PortadaAutomotriz from './assets/images/Mantenimiento/Portada.webp';
import PortadaSoldadura from './assets/images/Soldadura/Portada.webp';
import PortadaMotos from './assets/images/Moto/Portada.webp';
import Logo from './assets/images/Logo.png';
import Radio from './assets/images/Radio.png';

const LogoIcon = ({ size, className }) => {
  return React.createElement('img', {
    src: Logo,
    alt: "Logo",
    style: { width: size, height: size, objectFit: 'contain' },
    className: className
  });
};

export const RadioIcon = ({ size, className }) => {
  return React.createElement('img', {
    src: Radio,
    alt: "Radio Turbo Mix",
    style: { width: size, height: size, objectFit: 'contain' },
    className: className
  });
};

export const HERO_BG = Images.HERO_BG;

export const CAREERS_DATA = [
  {
    id: 'soldadura',
    title: "Seguridad en Trabajos de Soldadura",
    type: "Curso de Capacitacion",
    icon: ShieldCheck,
    color: "yellow",
    shortDesc: "Domina los protocolos esenciales para realizar trabajos de soldadura minimizando riesgos.",
    fullDesc: "Este curso está diseñado para formar especialistas en la seguridad industrial aplicada a la soldadura. Aprenderás a identificar riesgos, manejar equipos de alta potencia y aplicar normativas internacionales para evitar accidentes en entornos de alto riesgo.",
    img: PortadaSoldadura,
    modules: ["Normativas ISO de seguridad", "Manejo de extintores y primeros auxilios", "Equipos de Protección Personal (EPP)", "Soldadura en espacios confinados"],
    projects: [
      Images.SOLDADURA_PROJECT_1,
      Images.SOLDADURA_PROJECT_2
    ],
    classrooms: [
      Images.SOLDADURA_CLASSROOM_1,
      Images.SOLDADURA_CLASSROOM_2
    ]
  },
  {
    id: 'automotriz',
    title: "Mantenimiento de Mecánica Automotriz",
    type: "Curso de Capacitacion",
    icon: Car,
    color: "yellow",
    shortDesc: "Formación integral en el cuidado preventivo y correctivo de vehículos modernos.",
    fullDesc: "Conviértete en un experto en la industria automotriz. Nuestro programa cubre desde la mecánica básica hasta los sistemas de inyección electrónica más modernos. Saldrás capacitado para diagnosticar fallas complejas y gestionar tu propio taller.",
    img: PortadaAutomotriz,
    modules: ["Motores a Gasolina y Diésel", "Sistemas de Transmisión", "Suspensión y Frenos ABS", "Electrónica Automotriz"],
    projects: [
      Images.AUTOMOTRIZ_PROJECT_1,
      Images.AUTOMOTRIZ_PROJECT_2
    ],
    classrooms: [
      Images.AUTOMOTRIZ_CLASSROOM_1,
      Images.AUTOMOTRIZ_CLASSROOM_2
    ]
  },
  {
    id: 'motos',
    title: "Mecánica de Motocicletas",
    type: "Curso de Capacitacion",
    icon: Wrench,
    color: "yellow",
    shortDesc: "Aprende a diagnosticar y reparar motocicletas de todo tipo.",
    fullDesc: "El parque automotor de motocicletas crece cada día. En este curso aprenderás a desarmar y armar motores de 2 y 4 tiempos, solucionar problemas eléctricos y realizar el mantenimiento completo de motocicletas de trabajo y alta gama.",
    img: PortadaMotos,
    modules: ["Motores 2T y 4T", "Carburación e Inyección", "Sistema Eléctrico de Motos", "Chasis y Suspensión"],
    projects: [
      Images.MOTOS_PROJECT_1,
      Images.MOTOS_PROJECT_2
    ],
    classrooms: [
      Images.MOTOS_CLASSROOM_1,
      Images.MOTOS_CLASSROOM_2
    ]
  },
  {
    id: 'conduccion',
    title: "Conducción de Vehículos Motorizados Terrestres",
    type: "Curso de Capacitacion",
    icon: Car,
    color: "yellow",
    shortDesc: "Habilidades prácticas y teóricas para conducir con responsabilidad.",
    fullDesc: "Más que solo manejar, formamos conductores responsables. Aprenderás técnicas de conducción defensiva, mecánica básica para emergencias en ruta y todas las normas de tránsito vigentes para obtener tu licencia.",
    img: Images.CONDUCCION_MAIN,
    modules: ["Educación Vial y Señalización", "Mecánica Básica de Emergencia", "Prácticas en Pista Cerrada", "Conducción en Tráfico Real"],
    projects: [
      Images.CONDUCCION_PROJECT_1,
      Images.CONDUCCION_PROJECT_2
    ],
    classrooms: [
      Images.CONDUCCION_CLASSROOM_1,
      Images.CONDUCCION_CLASSROOM_2
    ]
  },
  {
    id: 'electricidad',
    title: "Instalacion y Mantenimiento de Electricidad Domiciliaria",
    type: "Curso de Capacitacion",
    icon: LogoIcon,
    color: "yellow",
    shortDesc: "Experto en instalaciones eléctricas seguras para viviendas.",
    fullDesc: "Domina la energía eléctrica. Aprenderás a diseñar, instalar y reparar sistemas eléctricos residenciales. Desde la lectura de planos hasta la instalación de domótica básica, cumpliendo siempre con las normas de seguridad NB 777.",
    img: PortadaElectricidad,
    modules: ["Circuitos en Serie y Paralelo", "Lectura de Planos Eléctricos", "Instalaciones Residenciales", "Tableros de Distribución"],
    projects: [
      Images.ELECTRICIDAD_PROJECT_1,
      Images.ELECTRICIDAD_PROJECT_2
    ],
    classrooms: [
      Images.ELECTRICIDAD_CLASSROOM_1,
      Images.ELECTRICIDAD_CLASSROOM_2
    ]
  }
];