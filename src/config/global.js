export default {
  global: {
    componenteFormativo: 'Diseño de actividades con educación STEM',
    descripcionCurso:
      'La educación STEM surge ante la oportunidad de transformar las formas de enseñar-aprender. En el momento de su implementación se deben considerar diferentes condiciones presentadas en el entorno escolar. Inicialmente aspectos por considerar son el proceso direccionado a construir un pensamiento científico, las herramientas didácticas, la planeación y el trabajo colaborativo en el marco de su currículo escolar.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: '¿Por qué enseñar educación STEM en el mundo?',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Estilos tipográficos',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '¿Cómo construir un pensamiento científico?',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Herramientas Didácticas para el pensamiento científico con STEM',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Aprendizaje Basado en Lecciones (ABL)',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Aprendizaje Basado en Proyectos (ABP)',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Planeación para la implementación de la educación STEM',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'El alcance de la educación STEM y el PEI y el currículo',
            hash: 't_4_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Astrid Lili Puerta',
        cargo: 'Experta temática',
        centro: 'Centro Agropecuario de Buga',
        regional: 'Regional valle',
      },
      {
        nombre: 'Javier Enrique Santana',
        cargo: 'Experto temático',
        centro: 'Centro de Gestión Industrial',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Michael Andrés Cortés Caro',
        cargo: 'Experto temático',
        centro: 'Ministerio de Ambiente y Desarrollo Sostenible',
      },
      {
        nombre: 'Mauricio Jiménez Fajardo',
        cargo: 'Experto temático',
        centro: 'Ministerio de Ambiente y Desarrollo Sostenible',
      },
      {
        nombre: 'Manuel Alejandro Garzón Cárdenas',
        cargo: 'Experto temático',
        centro: 'Deutsche Gesellschaft für',
        regional: 'Internationale Zusammenarbeit (GIZ)',
      },
      {
        nombre: 'Liliana Victoria Morales Gualdrón',
        cargo: 'Diseñador instruccional',
        centro: 'Centro para la Industria y la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Carlos Andrés Rodríguez',
        cargo: 'Evaluador instruccional',
        centro: 'Centro de Diseño y Metrología',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Julieth Paola Vital López',
        cargo: 'Revisora de estilo',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
      },
      {
        nombre: ['Adriana Rincón Avendaño', 'Eulises Orduz Amezquita'],
        cargo: 'Diseño web y Producción Audiovisual',
      },
      {
        nombre: 'Luis Mendez',
        cargo: 'Desarrollo Front-End',
      },
      {
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Brayan Stiven Pinto Diaz',
        cargo: ['Desarrollo front-end', 'Validación de recursos'],
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Dobson, I. (2013). MADRE; Comparaciones de países: Europa. Un examen crítico de las soluciones existentes para la escasez de habilidades STEM en países comparables. Consejo Australiano de Academias Eruditas. Melbourne. ',
    },
    {
      referencia:
        'Hughes, A. (2007). Vínculos universidad-industria y políticas sobre ciencia e innovación. Reino Unido.',
    },
    {
      referencia:
        'Marginson, S. T. (2013). Comparaciones de países: comparaciones internacionales de educación en ciencia, tecnología, ingeniería y matemáticas (STEM). Servicio de Investigación del Congreso.',
    },
    {
      referencia:
        'Oppenheimer, A. (2018). ¡Sálvese quien pueda! El futuro del trabajo en la era de la automatización. Debate.',
    },
  ],
  glosario: [
    {
      termino: 'ACOLA',
      significado: 'Consejo Australiano de Academias Eruditas.',
    },
    {
      termino: 'Monozukuri',
      significado:
        'Filosofía japonesa de trabajo que es interpretada por cada organización donde entrenan a sus ciudadanos en ambientes simulados y usando nuevas tecnologías, la mejora de sus destrezas, así como habilidades en oficios específicos para aumentar su competitividad.',
    },
    {
      termino: 'PISA',
      significado: 'Programa para la Evaluación Internacional de Alumnos.',
    },
    {
      termino: 'MINT',
      significado:
        'Se utiliza para denominar a los países emergentes en los que se brindan oportunidades de negocio y educación en Ciencias, Ingeniería y Tecnología avanzadas.',
    },
    {
      termino: 'ABP',
      significado: 'Aprendizaje Basado en Proyectos.',
    },
  ],
  complementario: [
    {
      texto:
        'El cambio de mentalidad: Barbe, N. B. (2019). ¡Sálvese quien pueda! Nueva ruta libertadora por la paz y la educación. Universidad Nacional, Arauca.',
      tipo: 'Síntesis del libro: ¡Sálvese quien pueda! Norbert-Bertrand Barbe',
      link: 'https://hal.archives-ouvertes.fr/hal-03080875/document',
    },
    {
      texto:
        'Educación STEM: Thunberg, G. (2019). Nadie es demasiado pequeño para marcar la diferencia. Penguin.',
      tipo: 'PDF',
      descarga:
        'https://cursos.fundaciontejerideas.org/asset-v1:tejerideas+STEM101_A+2021_C1+type@asset+block/Six_Months_on_a_Planet_in_Crisis_Greta_Thunberg_s_Travel_Diary_from_the_U.S._to_Davos.pdf ',
    },
    {
      texto:
        'Educación y trabajo: willrobotstakemyjob.com. (2021). ¿Los robots harán mi trabajo?  ',
      tipo: 'Sitio web',
      link: 'https://willrobotstakemyjob.com/',
    },
  ],
}
