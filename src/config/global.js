export default {
  global: {
    componenteFormativo:
      '<span1><em>Oh wow! You agreed on a point!</em></span1><br><span>¡Increíble! ¡Se pusieron de acuerdo en algo!</span> ',
    descripcionCurso:
      'Este componente se centrará en cómo utilizar la gramática que ya hemos estudiado para argumentar y discutir sobre temas como el medio ambiente, el trabajo y las interacciones sociales. Para ello, pondremos en práctica la gramática, trabajaremos los tiempos mezclados, los conectores de contraste, los verbos de información, los verbos de sentimiento y algunas expresiones comunes. Además, practicaremos algunos consejos de pronunciación que nos permitirán mejorar la forma de enunciar las ideas al hablar.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
    ],
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
        titulo: '<em>Applied grammar</em> (Gramática aplicada)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<em>Mixed tenses</em> (Combinación de tiempos)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '<em>Contrast connectors</em> (conectores de contraste)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: '<em>Slang</em> (Expresiones coloquiales)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: '<em>Reporting verbs</em> (verbos para reportar)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: '<em>Feeling verbs</em> (Verbos que expresan sentimientos)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: '<em>Pronunciation tips</em> (Tips de pronunciación)',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
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
  referencias: [
    {
      referencia:
        'Academic Skills Kit. (s. f.). <em>Reporting Verbs. Explore different ways of referring to literature and foregrounding your voice</em>. Newcastle University ',
      link:
        'https://www.ncl.ac.uk/academic-skills-kit/writing/academic-writing/reporting-verbs/',
    },
    {
      referencia:
        'BBC Learning English Teens. (s. f.). <em>Unit 14: Towards Advanced. Grammar, news, vocabulary and pronunciation</em>. BBC. ',
      link:
        'https://www.bbc.co.uk/learningenglish/course/towards-advanced/unit-14/session-5#:~:text=Catenation%20%2D%20linking%20sounds%20together,had%20to%20give%20up%20jogging',
    },
    {
      referencia:
        'Equipo académico. (2021). <em>Verbos regulares en inglés: estas son todas sus características</em>. BBC. ',
      link: 'https://www.britishcouncil.org.mx/blog/regular-verbs',
    },
    {
      referencia:
        'Learn English. (s. f.). <em>Reported speech 3 - reporting verbs</em>. British Council. ',
      link:
        'https://learnenglish.britishcouncil.org/es/grammar/b1-b2-grammar/reported-speech-3-reporting-verbs',
    },
    {
      referencia:
        'Steele, V. (s. f.). <em>Connected speech 2</em>. TeachingEnglish. ',
      link: 'https://www.teachingenglish.org.uk/article/connected-speech-2',
    },
  ],
  glosario: [
    {
      termino: '<em>Mixed tenses</em> / Tiempos combinados',
      significado:
        'son un recurso utilizado en las lenguas para complementar ideas o expresar ideas complejas que requieren más de una estructura gramatical.',
    },
    {
      termino: '<em>Slang</em> / Expresiones idiomáticas',
      significado:
        'es un tipo de lenguaje que consiste en palabras y frases que se consideran muy informales, son más comunes en el habla que en la escritura y suelen estar restringidas a un contexto o grupo de personas concreto.',
    },
    {
      termino: '<em>Reporting verbs</em> / Verbos para reportar',
      significado:
        'verbos usados para presentar la información que alguien más ya dijo y que se va a reportar o retransmitir. Por ejemplo <em>“say”</em> (decir), <em>“tell”</em> (contar), <em>“ask”</em> (preguntar), <em>“explain”</em> (explicar), <em>“comment”</em> (comentar), etc.',
    },
    {
      termino: '<em>Verb tenses</em> / Tiempos verbales',
      significado: 'indican cuándo ocurrió la acción o condición del verbo.',
    },
  ],
  complementario: [
    {
      tema: '<em>Applied grammar</em> (Gramática aplicada)',
      referencia:
        'BBC Learning English. (2017). <em>Present Simple and Present Continuous: The Grammar Gameshow Episode 1 [Video]</em>. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=OsW5sV3GMDM&ab_channel=BBCLearningEnglish',
    },
    {
      tema: '<em>Applied grammar</em> (Gramática aplicada)',
      referencia:
        'BBC Learning English. (2017). <em>Tense: The Grammar Gameshow Episode 13 [Video]</em>. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=05HXVE05vjg&t=2s&ab_channel=BBCLearningEnglish',
    },
    {
      tema: '<em>Pronunciation tips</em>',
      referencia:
        'Billie English. (2022). <em>The 4 Types of Sentence Stress | Pronunciation | Part ¼ [Video]</em>. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=Eq4w52XdoP0&ab_channel=BillieEnglish',
    },
    {
      tema: '<em>Pronunciation tips</em>',
      referencia:
        'BBC Learning English ¿Quieres aprender a hablar inglés? (2020). <em>Mini English Lessons: Connected Speech (part 2) [Video]</em>. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=uzlIcTJyJ1s',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable equipo de desarrollo curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jesus Edgardo Contreras Ramirez',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Edith Grande',
        cargo: 'Experta temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Óscar Absalón Guevara',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - CIES - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Fabian Zarate',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Erika Viviana Sandoval Rojas',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo Front-End',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
