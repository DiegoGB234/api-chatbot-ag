import { title } from "process";
import { typeStateSchool } from "src/catalogo/entities/calendario-escolar.entity";
import { typeTechnology } from "src/catalogo/entities/tecnologias.entity";


export const CATALOGO_SEED_DATA = [
  // =====================================================
  // 1. Informacion general
  // =====================================================
 {
  name: 'Información general de la carrera',
  description:
    'Es la actualización del programa de Ingeniería en Software y consiste en la aplicación práctica del conocimiento científico al diseño y construcción de programas de computadora, así como la documentación necesaria para desarrollarlos, operarlos y mantenerlos.',

  informacionGeneral: [
    {
      title: '¿Ingeniería en Tecnologías de la Información e Innovación Digital?',
      content:
        'Carrera orientada al diseño, desarrollo, implementación y mantenimiento de soluciones tecnológicas innovadoras mediante software, hardware e inteligencia artificial.'
    },
    {
      title: 'Objetivo de la carrera',
      content:
        'Formar profesionales capaces de crear soluciones tecnológicas eficientes, escalables e innovadoras para resolver problemas del sector productivo.'
    },
    {
      title: 'Técnico Superior Universitario en Inteligencia Artificial',
      content:
        'El estudiante desarrolla aplicaciones con algoritmos y funciones de Inteligencia Artificial que optimizan procesos y permiten resolver problemáticas del sector productivo.'
    },
    {
      title: 'Áreas de énfasis en Inteligencia Artificial',
      content:
        'Aprendizaje profundo, sistemas inteligentes, minería de datos, aprendizaje automático, visión por computadora y procesamiento de lenguaje natural.'
    },
    {
      title: 'Desarrollo de Software Multiplataforma',
      content:
        'Formación enfocada en la creación de aplicaciones web y móviles mediante programación orientada a objetos, frameworks modernos, bases de datos y estándares de calidad.'
    },
    {
      title: 'Áreas de énfasis en Desarrollo Multiplataforma',
      content:
        'Aplicaciones web tradicionales, servicios web, aplicaciones móviles, bases de datos, Internet de las cosas, ciencia de datos y métricas de software.'
    },
    {
      title: 'Campo laboral',
      content:
        'El profesional puede desempeñarse en sectores gubernamentales, industriales, comerciales, de servicios, académicos y empresas de desarrollo de software, análisis de datos y administración de proyectos tecnológicos.'
    },
    {
      title: 'Lenguajes de programación utilizados',
      content:
        'Java, Python, JavaScript, HTML, CSS y PHP.'
    },
    {
      title: 'Frameworks y herramientas por área',
      content:
        'Frontend: React, Vue, Angular. Backend: Django, CodeIgniter, Java. Móviles: Flutter, Kotlin, Android Studio.'
    },
    {
      title: 'Tecnologías de bases de datos que se enseñan',
      content:
        'Relacionales: MySQL, PostgreSQL. No relacionales: MongoDB, MariaDB.'
    },
    {
      title: 'Plataformas de nube y ciencia de datos',
      content:
        'Google Colab, OpenRefine, Weka, Kaggle, Figma y Adobe Dreamweaver.'
    },
    {
      title: 'Entornos de desarrollo utilizados',
      content:
        'Visual Studio Code, Eclipse, NetBeans y Spring Tools Suite.'
    }
  ],

  actividadesAcademicas: [
    { name: 'Proyectos Integradores' },
    { name: 'Certificaciones Profesionales mediante Academias CISCO, Networking Academy y ORACLE Academy' },
    { name: 'Seminario de Ingeniería de Software y Tecnologías de la Información' },
    { name: 'Becas de estancias nacionales para desarrollo de proyectos de investigación y desarrollo tecnológico' }
  ],

  preguntasFrecuentes: [
    {
      question: '¿La carrera incluye prácticas profesionales?',
      answer: 'Sí, se realizan en empresas con las que se mantienen convenios.'
    },
    {
      question: '¿Cuál es la duración de la carrera?',
      answer: '10 cuatrimestres.'
    },
    {
      question: '¿Qué es un cuatrimestre?',
      answer:
        'El término “cuatrimestre” se refiere a un período académico de cuatro meses de duración.'
    },
    {
      question: '¿Existe algún tipo de beca?',
      answer:
        'Sí. Se otorga la beca de aprovechamiento a los tres primeros lugares: primer lugar 100%, segundo lugar 50% y tercer lugar 30% en el pago de inscripción.'
    },
    {
      question: '¿Qué debo estudiar para ser backend?',
      answer:
        'Primero familiarízate con un lenguaje de programación, aprende su sintaxis y fundamentos. Luego investiga frameworks, bases de datos y arquitectura de software.'
    },
    {
      question: '¿Qué debo estudiar para ser frontend?',
      answer:
        'Debes aprender HTML, CSS y JavaScript. Después estudia un framework como React, Vue o Angular y conceptos de diseño y usabilidad.'
    },
    {
      question: '¿Qué se ve al inicio del cuatrimestre?',
      answer:
        'Se estudian conceptos básicos de programación, procesos, POO, herencia, encapsulamiento y sus aplicaciones en el desarrollo de software.'
    }
  ],

  infraestructura: [
    {
      name: 'Cómputo y Redes',
      description:
        'Laboratorio equipado con computadoras modernas, herramientas de desarrollo y dispositivos CISCO como routers y switches.'
    },
    {
      name: 'Sala de Cómputo',
      description:
        'Espacio destinado para proyectos avanzados, simulaciones y prototipos de software.'
    }
  ],

  tecnologias: [
    {
      name: 'JavaScript',
      description:
        'Lenguaje de programación esencial para el desarrollo web dinámico tanto en frontend como backend.',
      type: typeTechnology.LANGUAGE
    },
    {
      name: 'React',
      description:
        'Biblioteca de JavaScript para construir interfaces de usuario rápidas, modulares y reactivas.',
      type: typeTechnology.FRONTEND_FRAMEWORK
    },
    {
      name: 'NestJS',
      description:
        'Framework backend de Node.js basado en TypeScript y arquitectura modular para crear APIs escalables.',
      type: typeTechnology.BACKEND_FRAMEWORK
    },
    {
      name: 'MySQL',
      description:
        'Sistema de gestión de bases de datos relacional reconocido por su estabilidad y velocidad.',
      type: typeTechnology.DATABASE
    },
    {
      name: 'GPT-4 API',
      description:
        'Plataforma de inteligencia artificial avanzada para procesamiento de lenguaje natural y automatización.',
      type: typeTechnology.AI_PLATFORM
    },
    {
      name: 'Visual Studio Code',
      description:
        'Editor de código extensible, ligero y compatible con múltiples lenguajes de programación.',
      type: typeTechnology.IDE
    }
  ],
  calendarioEscolar: [
    // SEPTIEMBRE - DICIEMBRE 2025 -------------------------------
    {
      title: "Reinscripción",
      type: typeStateSchool.REINSCRIPTION,
      startDate: "2025-08-27",
      endDate: "2025-08-28",
      color: "rojo",
      ciclo: "2025-2026",
      cuatrimestre: "Septiembre-Diciembre"
    },
    {
      title: "Inscripción a Primer Cuatrimestre",
      type: typeStateSchool.INSCRIPTION,
      startDate: "2025-08-29",
      endDate: "2025-08-29",
      color: "rosa",
      ciclo: "2025-2026",
      cuatrimestre: "Septiembre-Diciembre"
    },
    {
      title: "Reinscripción Tardía",
      type:typeStateSchool.LATE_RE_ENROLLMENT,
      startDate: "2025-09-01",
      endDate: "2025-09-02",
      color: "morado",
      ciclo: "2025-2026",
      cuatrimestre: "Septiembre-Diciembre"
    },
    {
      title: "Inicio de Cuatrimestre",
      type:typeStateSchool.START_CLASSES,
      startDate: "2025-09-03",
      endDate: null,
      color: "verde",
      ciclo: "2025-2026",
      cuatrimestre: "Septiembre-Diciembre"
    },
    {
      title: "Suspensión de Labores",
      type: typeStateSchool.SUSPENSION,
      startDate: "2025-09-16",
      endDate: null,
      color: "gris",
      ciclo: "2025-2026",
      cuatrimestre: "Septiembre-Diciembre"
    },
    {
      title: "Evaluación Docente",
      type: typeStateSchool.TECHAER_EVALUATION,
      startDate: "2025-10-13",
      endDate: "2025-10-17",
      color: "amarillo",
      ciclo: "2025-2026",
      cuatrimestre: "Septiembre-Diciembre"
    },
    {
      title: "Fin de Cuatrimestre",
      type: typeStateSchool.END_CLASSES,
      startDate: "2025-12-19",
      endDate: null,
      color: "naranja",
      ciclo: "2025-2026",
      cuatrimestre: "Septiembre-Diciembre"
    },

    // ENERO - ABRIL 2026 ---------------------------------------
    {
      title: "Reinscripción",
      type: typeStateSchool.REINSCRIPTION,
      startDate: "2026-01-05",
      endDate: "2026-01-06",
      color: "rojo",
      ciclo: "2025-2026",
      cuatrimestre: "Enero-Abril"
    },
    {
      title: "Inscripción a Primer Cuatrimestre",
      type: typeStateSchool.INSCRIPTION,
      startDate: "2026-01-07",
      endDate: "2026-01-07",
      color: "rosa",
      ciclo: "2025-2026",
      cuatrimestre: "Enero-Abril"
    },
    {
      title: "Reinscripción Tardía",
      type: typeStateSchool.LATE_RE_ENROLLMENT,
      startDate: "2026-01-08",
      endDate: "2026-01-09",
      color: "morado",
      ciclo: "2025-2026",
      cuatrimestre: "Enero-Abril"
    },
    {
      title: "Inicio de Cuatrimestre",
      type: typeStateSchool.START_CLASSES,
      startDate: "2026-01-12",
      endDate: null,
      color: "verde",
      ciclo: "2025-2026",
      cuatrimestre: "Enero-Abril"
    },
    {
      title: "Evaluación Docente",
      type: typeStateSchool.TECHAER_EVALUATION,
      startDate: "2026-03-16",
      endDate: "2026-03-20",
      color: "amarillo",
      ciclo: "2025-2026",
      cuatrimestre: "Enero-Abril"
    },
    {
      title: "Fin de Cuatrimestre",
      type: typeStateSchool.END_CLASSES,
      startDate: "2026-04-24",
      endDate: null,
      color: "naranja",
      ciclo: "2025-2026",
      cuatrimestre: "Enero-Abril"
    },

    // MAYO - AGOSTO 2026 --------------------------------------
    {
      title: "Reinscripción",
      type: typeStateSchool.REINSCRIPTION,
      startDate: "2026-05-04",
      endDate: "2026-05-05",
      color: "rojo",
      ciclo: "2025-2026",
      cuatrimestre: "Mayo-Agosto"
    },
    {
      title: "Inscripción a Primer Cuatrimestre",
      type: typeStateSchool.INSCRIPTION,
      startDate: "2026-05-06",
      endDate: "2026-05-06",
      color: "rosa",
      ciclo: "2025-2026",
      cuatrimestre: "Mayo-Agosto"
    },
    {
      title: "Reinscripción Tardía",
      type: typeStateSchool.LATE_RE_ENROLLMENT,
      startDate: "2026-05-07",
      endDate: "2026-05-08",
      color: "morado",
      ciclo: "2025-2026",
      cuatrimestre: "Mayo-Agosto"
    },
    {
      title: "Inicio de Cuatrimestre",
      type: typeStateSchool.START_CLASSES,
      startDate: "2026-05-11",
      endDate: null,
      color: "verde",
      ciclo: "2025-2026",
      cuatrimestre: "Mayo-Agosto"
    },
    {
      title: "Semana de Aniversario UPTap",
      type: typeStateSchool.HOLIDAY,
      startDate: "2026-06-22",
      endDate: "2026-06-26",
      color: "morado_claro",
      ciclo: "2025-2026",
      cuatrimestre: "Mayo-Agosto"
    },
    {
      title: "Evaluación Docente",
      type: typeStateSchool.TECHAER_EVALUATION,
      startDate: "2026-07-13",
      endDate: "2026-07-17",
      color: "amarillo",
      ciclo: "2025-2026",
      cuatrimestre: "Mayo-Agosto"
    },
    {
      title: "Fin de Cuatrimestre",
      type: typeStateSchool.END_CLASSES,
      startDate: "2026-08-21",
      endDate: null,
      color: "naranja",
      ciclo: "2025-2026",
      cuatrimestre: "Mayo-Agosto"
    }
  ]


}

]
