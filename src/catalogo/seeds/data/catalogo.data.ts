import { typeTechnology } from "src/catalogo/entities/tecnologias.entity";


export const CATALOGO_SEED_DATA = [
  // =====================================================
  // 1. Ingeniería en Software
  // =====================================================
  {
    name: 'Ingeniería en Software',
    description: 'Catálogo con información académica, actividades, infraestructura y tecnologías usadas en Ingeniería en Software.',

    informacionGeneral: [
      {
        title: '¿Qué es la Ingeniería en Software?',
        content: 'Disciplina enfocada en el análisis, diseño, desarrollo y mantenimiento de sistemas de software.'
      },
      {
        title: 'Objetivo de la carrera',
        content: 'Formar profesionales capaces de desarrollar soluciones tecnológicas eficientes y escalables.'
      }
    ],

    actividadesAcademicas: [
      { name: 'Congreso de Desarrollo de Software' },
      { name: 'Semana de Ingeniería' }
    ],

    preguntasFrecuentes: [
      {
        question: '¿La carrera tiene prácticas profesionales?',
        answer: 'Sí, se realizan en empresas de desarrollo de software.'
      },
      {
        question: '¿Cuál es la duración de la carrera?',
        answer: '9 semestres.'
      }
    ],

    infraestructura: [
      {
        name: 'Laboratorio de Programación',
        description: 'Equipado con computadoras modernas y herramientas de desarrollo.'
      },
      {
        name: 'Sala de Innovación',
        description: 'Espacio para proyectos avanzados de software y prototipos.'
      }
    ],

    tecnologias: [
      { name: 'JavaScript', type: typeTechnology.LANGUAGE },
      { name: 'React', type: typeTechnology.FRONTEND_FRAMEWORK },
      { name: 'NestJS', type: typeTechnology.BACKEND_FRAMEWORK },
      { name: 'MySQL', type: typeTechnology.DATABASE },
      { name: 'GPT-4 API', type: typeTechnology.AI_PLATFORM },
      { name: 'Visual Studio Code', type: typeTechnology.IDE }
    ]
  },

  // =====================================================
  // 2. Ingeniería en Sistemas Computacionales
  // =====================================================
  {
    name: 'Ingeniería en Sistemas Computacionales',
    description: 'Catálogo con información de redes, hardware y desarrollo para Sistemas Computacionales.',

    informacionGeneral: [
      {
        title: '¿Qué estudia Sistemas Computacionales?',
        content: 'Se enfoca en software, hardware, sistemas operativos y redes.'
      },
      {
        title: 'Competencias principales',
        content: 'Administración de redes, seguridad informática y desarrollo de aplicaciones.'
      }
    ],

    actividadesAcademicas: [
      { name: 'Expo de Ciberseguridad' },
      { name: 'Competencia de Redes Cisco' }
    ],

    preguntasFrecuentes: [
      {
        question: '¿Se ve electrónica?',
        answer: 'Sí, en módulos básicos de hardware.'
      },
      {
        question: '¿Es compatible con certificaciones?',
        answer: 'Sí, como CCNA y Linux Essentials.'
      }
    ],

    infraestructura: [
      {
        name: 'Laboratorio de Redes',
        description: 'Routers, switches y herramientas de cableado.'
      },
      {
        name: 'Centro de Datos Universitario',
        description: 'Servidores para prácticas de virtualización.'
      }
    ],

    tecnologias: [
      { name: 'Python', type: typeTechnology.LANGUAGE },
      { name: 'Angular', type: typeTechnology.FRONTEND_FRAMEWORK },
      { name: 'Django', type: typeTechnology.BACKEND_FRAMEWORK },
      { name: 'PostgreSQL', type: typeTechnology.DATABASE },
      { name: 'TensorFlow', type: typeTechnology.AI_PLATFORM },
      { name: 'PyCharm', type: typeTechnology.IDE }
    ]
  },

  // =====================================================
  // 3. Ingeniería Mecatrónica
  // =====================================================
  {
    name: 'Ingeniería Mecatrónica',
    description: 'Catálogo sobre automatización, electrónica y robótica.',

    informacionGeneral: [
      {
        title: '¿Qué es Mecatrónica?',
        content: 'Integra electrónica, control, programación y mecánica.'
      },
      {
        title: 'Campo laboral',
        content: 'Automatización industrial, robótica, control de procesos.'
      }
    ],

    actividadesAcademicas: [
      { name: 'Competencia de Robots Seguidoras de Línea' },
      { name: 'Feria de Proyectos Automatizados' }
    ],

    preguntasFrecuentes: [
      {
        question: '¿Qué microcontroladores se usan?',
        answer: 'Principalmente Arduino, ESP32 y PIC.'
      },
      {
        question: '¿Se enseña impresión 3D?',
        answer: 'Sí, como parte de los prototipos mecánicos.'
      }
    ],

    infraestructura: [
      {
        name: 'Laboratorio de Robótica',
        description: 'Brazos robóticos y kits programables.'
      },
      {
        name: 'Taller de Electrónica',
        description: 'Osciloscopios, fuentes de poder y estaciones de soldadura.'
      }
    ],

    tecnologias: [
      { name: 'C++', type: typeTechnology.LANGUAGE },
      { name: 'Vue', type: typeTechnology.FRONTEND_FRAMEWORK },
      { name: 'Laravel', type: typeTechnology.BACKEND_FRAMEWORK },
      { name: 'SQLite', type: typeTechnology.DATABASE },
      { name: 'OpenCV', type: typeTechnology.AI_PLATFORM },
      { name: 'Arduino IDE', type: typeTechnology.IDE }
    ]
  },

  // =====================================================
  // 4. Ingeniería Industrial
  // =====================================================
  {
    name: 'Ingeniería Industrial',
    description: 'Catálogo enfocado en procesos, logística y optimización.',

    informacionGeneral: [
      {
        title: 'Enfoque de Industrial',
        content: 'Optimización de procesos, calidad y productividad.'
      },
      {
        title: 'Habilidades del egresado',
        content: 'Liderazgo, control de calidad, logística y análisis.'
      }
    ],

    actividadesAcademicas: [
      { name: 'Simulación de Procesos Industriales' },
      { name: 'Curso de Lean Manufacturing' }
    ],

    preguntasFrecuentes: [
      {
        question: '¿Se usa software especializado?',
        answer: 'Sí, como FlexSim y Minitab.'
      },
      {
        question: '¿Hay visitas a empresas?',
        answer: 'Sí, como parte del proceso formativo.'
      }
    ],

    infraestructura: [
      {
        name: 'Laboratorio de Procesos',
        description: 'Simulaciones y prácticas industriales.'
      },
      {
        name: 'Centro de Calidad',
        description: 'Equipos para pruebas de calidad y análisis.'
      }
    ],

    tecnologias: [
      { name: 'Python', type: typeTechnology.LANGUAGE },
      { name: 'Svelte', type: typeTechnology.FRONTEND_FRAMEWORK },
      { name: 'Spring Boot', type: typeTechnology.BACKEND_FRAMEWORK },
      { name: 'MariaDB', type: typeTechnology.DATABASE },
      { name: 'IBM Watson', type: typeTechnology.AI_PLATFORM },
      { name: 'IntelliJ IDEA', type: typeTechnology.IDE }
    ]
  },

  // =====================================================
  // 5. Ingeniería Civil
  // =====================================================
  {
    name: 'Ingeniería Civil',
    description: 'Catálogo sobre estructuras, obra y construcción.',

    informacionGeneral: [
      {
        title: 'Objetivo de Civil',
        content: 'Diseñar y construir infraestructura segura y funcional.'
      },
      {
        title: 'Conocimientos clave',
        content: 'Mecánica de suelos, estructuras, hidráulica.'
      }
    ],

    actividadesAcademicas: [
      { name: 'Concurso de Puentes de Palillos' },
      { name: 'Visitas a Construcciones Activas' }
    ],

    preguntasFrecuentes: [
      {
        question: '¿Qué software se utiliza?',
        answer: 'AutoCAD, SAP2000 y Civil 3D.'
      },
      {
        question: '¿Hay prácticas de campo?',
        answer: 'Sí, en obras reales.'
      }
    ],

    infraestructura: [
      {
        name: 'Laboratorio de Materiales',
        description: 'Pruebas de resistencia y calidad de materiales.'
      },
      {
        name: 'Taller de Construcción',
        description: 'Modelos y experimentos de estructuras.'
      }
    ],

    tecnologias: [
      { name: 'MATLAB', type: typeTechnology.LANGUAGE },
      { name: 'None', type: typeTechnology.FRONTEND_FRAMEWORK },
      { name: 'Node.js', type: typeTechnology.BACKEND_FRAMEWORK },
      { name: 'OracleDB', type: typeTechnology.DATABASE },
      { name: 'AutoCAD AI Tools', type: typeTechnology.AI_PLATFORM },
      { name: 'AutoCAD', type: typeTechnology.IDE }
    ]
  },

  // =====================================================
  // 6. Arquitectura
  // =====================================================
  {
    name: 'Arquitectura',
    description: 'Catálogo sobre diseño arquitectónico y desarrollo urbano.',

    informacionGeneral: [
      {
        title: '¿Qué es Arquitectura?',
        content: 'Estudio y diseño de espacios habitables y funcionales.'
      },
      {
        title: 'Perfil del arquitecto',
        content: 'Creatividad, diseño asistido por computadora y planificación urbana.'
      }
    ],

    actividadesAcademicas: [
      { name: 'Expo de Maquetas' },
      { name: 'Concurso de Diseño Urbano' }
    ],

    preguntasFrecuentes: [
      {
        question: '¿Qué herramientas se utilizan?',
        answer: 'SketchUp, Revit y AutoCAD.'
      },
      {
        question: '¿Hay talleres de maquetas?',
        answer: 'Sí, durante toda la carrera.'
      }
    ],

    infraestructura: [
      {
        name: 'Taller de Maquetas',
        description: 'Espacio con herramientas para modelos arquitectónicos.'
      },
      {
        name: 'Laboratorio de Diseño Digital',
        description: 'Computadoras con software de diseño.'
      }
    ],

    tecnologias: [
      { name: 'JavaScript', type: typeTechnology.LANGUAGE },
      { name: 'Next.js', type: typeTechnology.FRONTEND_FRAMEWORK },
      { name: 'ExpressJS', type: typeTechnology.BACKEND_FRAMEWORK },
      { name: 'MongoDB', type: typeTechnology.DATABASE },
      { name: 'Adobe Sensei', type: typeTechnology.AI_PLATFORM },
      { name: 'Revit', type: typeTechnology.IDE }
    ]
  },

  // =====================================================
  // 7. Enfermería
  // =====================================================
  {
    name: 'Enfermería',
    description: 'Catálogo sobre prácticas clínicas, salud y atención médica.',

    informacionGeneral: [
      {
        title: 'Objetivo de Enfermería',
        content: 'Formar profesionales en el cuidado integral del paciente.'
      },
      {
        title: 'Competencias',
        content: 'Primeros auxilios, farmacología, cuidados clínicos.'
      }
    ],

    actividadesAcademicas: [
      { name: 'Simulaciones Clínicas' },
      { name: 'Campañas de Salud Pública' }
    ],

    preguntasFrecuentes: [
      {
        question: '¿Hay prácticas en hospitales?',
        answer: 'Sí, desde los primeros semestres.'
      },
      {
        question: '¿Se enseña manejo de medicamentos?',
        answer: 'Sí, de acuerdo con normativas.'
      }
    ],

    infraestructura: [
      {
        name: 'Sala de Simulación Médica',
        description: 'Muñecos clínicos y equipos médicos.'
      },
      {
        name: 'Laboratorio de Anatomía',
        description: 'Modelos anatómicos y material de estudio.'
      }
    ],

    tecnologias: [
      { name: 'R', type: typeTechnology.LANGUAGE },
      { name: 'None', type: typeTechnology.FRONTEND_FRAMEWORK },
      { name: 'Flask', type: typeTechnology.BACKEND_FRAMEWORK },
      { name: 'PostgreSQL', type: typeTechnology.DATABASE },
      { name: 'IBM Watson Health', type: typeTechnology.AI_PLATFORM },
      { name: 'Visual Studio Code', type: typeTechnology.IDE }
    ]
  },

  // =====================================================
  // 8. Administración de Empresas
  // =====================================================
  {
    name: 'Administración de Empresas',
    description: 'Catálogo sobre gestión empresarial, negocios y liderazgo.',

    informacionGeneral: [
      {
        title: '¿Qué es Administración?',
        content: 'Planificación, organización y dirección de empresas.'
      },
      {
        title: 'Perfil del egresado',
        content: 'Liderazgo, finanzas, gestión de operaciones.'
      }
    ],

    actividadesAcademicas: [
      { name: 'Simulación de Negocios' },
      { name: 'Semana del Emprendimiento' }
    ],

    preguntasFrecuentes: [
      {
        question: '¿Se enseña contabilidad?',
        answer: 'Sí, desde los primeros semestres.'
      },
      {
        question: '¿Hay incubadora de empresas?',
        answer: 'Sí, para proyectos emprendedores.'
      }
    ],

    infraestructura: [
      {
        name: 'Sala de Negocios',
        description: 'Espacio para simuladores y análisis financieros.'
      },
      {
        name: 'Centro de Emprendimiento',
        description: 'Asesoría para planes de negocio.'
      }
    ],

    tecnologias: [
      { name: 'Python', type: typeTechnology.LANGUAGE },
      { name: 'React', type: typeTechnology.FRONTEND_FRAMEWORK },
      { name: 'Django', type: typeTechnology.BACKEND_FRAMEWORK },
      { name: 'MySQL', type: typeTechnology.DATABASE },
      { name: 'Azure AI', type: typeTechnology.AI_PLATFORM },
      { name: 'VS Code', type: typeTechnology.IDE }
    ]
  },

  // =====================================================
  // 9. Contaduría Pública
  // =====================================================
  {
    name: 'Contaduría Pública',
    description: 'Catálogo especializado en finanzas, auditorías y tributación.',

    informacionGeneral: [
      {
        title: 'Enfoque de Contaduría',
        content: 'Gestión de finanzas, auditoría y cumplimiento fiscal.'
      },
      {
        title: 'Perfil del egresado',
        content: 'Profesional ético con dominio en normas contables.'
      }
    ],

    actividadesAcademicas: [
      { name: 'Simulación de Auditorías' },
      { name: 'Curso de Normas Internacionales de Información Financiera' }
    ],

    preguntasFrecuentes: [
      {
        question: '¿Se ve mucho cálculo?',
        answer: 'Sí, principalmente financiero y fiscal.'
      },
      {
        question: '¿Qué software se usa?',
        answer: 'COI, NOI, Excel Avanzado.'
      }
    ],

    infraestructura: [
      {
        name: 'Laboratorio Contable',
        description: 'Software financiero y herramientas de análisis.'
      },
      {
        name: 'Sala de Proyecciones',
        description: 'Espacio para simulaciones financieras.'
      }
    ],

    tecnologias: [
      { name: 'R', type: typeTechnology.LANGUAGE },
      { name: 'None', type: typeTechnology.FRONTEND_FRAMEWORK },
      { name: 'Laravel', type: typeTechnology.BACKEND_FRAMEWORK },
      { name: 'SQL Server', type: typeTechnology.DATABASE },
      { name: 'Azure AI Finance', type: typeTechnology.AI_PLATFORM },
      { name: 'Visual Studio Code', type: typeTechnology.IDE }
    ]
  },

  // =====================================================
  // 10. Mercadotecnia
  // =====================================================
  {
    name: 'Mercadotecnia',
    description: 'Catálogo enfocado en publicidad, estrategias comerciales y análisis de consumidores.',

    informacionGeneral: [
      {
        title: '¿Qué es Mercadotecnia?',
        content: 'Estudio del mercado, publicidad, ventas y comportamiento del consumidor.'
      },
      {
        title: 'Perfil del egresado',
        content: 'Creativo, comunicador y analista de datos del mercado.'
      }
    ],

    actividadesAcademicas: [
      { name: 'Concurso de Spots Publicitarios' },
      { name: 'Feria de Emprendedores' }
    ],

    preguntasFrecuentes: [
      {
        question: '¿Qué herramientas digitales se ven?',
        answer: 'Google Ads, Meta Ads, analítica digital.'
      },
      {
        question: '¿Se realizan estudios de mercado reales?',
        answer: 'Sí, con participación de empresas.'
      }
    ],

    infraestructura: [
      {
        name: 'Laboratorio de Medios Digitales',
        description: 'Equipado para diseño multimedia y estrategias de marketing.'
      },
      {
        name: 'Aula Creativa',
        description: 'Espacio para proyectos de publicidad.'
      }
    ],

    tecnologias: [
      { name: 'JavaScript', type: typeTechnology.LANGUAGE },
      { name: 'Next.js', type: typeTechnology.FRONTEND_FRAMEWORK },
      { name: 'Express', type: typeTechnology.BACKEND_FRAMEWORK },
      { name: 'MongoDB', type: typeTechnology.DATABASE },
      { name: 'Google AI Marketing', type: typeTechnology.AI_PLATFORM },
      { name: 'Adobe Illustrator', type: typeTechnology.IDE }
    ]
  }
];
