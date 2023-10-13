export default {
  global: {
    componenteFormativo: 'Análisis, diseño y arquitectura de <em>software</em>',
    descripcionCurso:
      'En este componente formativo se tratarán los temas de metodologías de desarrollo de <em>software</em> tradicional, ágil y elementos de estructura arquitectónica.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      /*{
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },*/
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.png'),
      },
      /*{
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-6.png'),
      },*/
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-7.png'),
      },
      /*{
        clases: ['banner-principal-decorativo-8'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-8.png'),
      },*/
      {
        clases: ['banner-principal-decorativo-9'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-9.png'),
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
        titulo: 'Metodologías de desarrollo de <em>software</em> tradicionales',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Metodologías de desarrollo de <em>software</em> ágiles',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Elementos del modelo objetos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Elementos de la estructura arquitectónica',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
  complementario: [
    {
      tema: 'Elementos de la estructura arquitectónica',
      referencia:
        'Lucid Software Español. (4 Febrero de 2019). <em>Tutorial – Diagrama de Clases UML</em> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Z0yLerU0g-Q',
    },
  ],
  glosario: [
    {
      termino: 'API',
      significado: 'interfaz de programación de aplicaciones.',
    },
    {
      termino: 'Atributo',
      significado: 'característica relevante de un objeto.',
    },
    {
      termino: 'Clase',
      significado:
        'entidad principal del mundo real que agrupa varios objetos con atributos en común y métodos en común.',
    },
    {
      termino: 'Método',
      significado:
        'es una función de código que realiza un comportamiento especifico de un objeto.',
    },
    {
      termino: 'Objeto',
      significado:
        'entidad del mundo real que representa la instancia de una clase.',
    },
    {
      termino: 'Parámetro',
      significado: 'especifica el tipo de dato que recibirá un método.',
    },
    { termino: 'UML', significado: 'lenguaje unificado de modelado.' },
    {
      termino: 'Visibilidad',
      significado:
        'valor que tendrá un atributo para conocer quién puede alcanzarlo en el sistema.',
    },
  ],
  referencias: [
    {
      referencia:
        'Beck, K., et al. (2001).<em> Manifiesto por el Desarrollo Ágil de Software.</em>',
      link: 'https://agilemanifesto.org/iso/es/manifesto.html',
    },

    {
      referencia:
        'Carrizo, D., & Alfaro, A. (2018). Método de aseguramiento de la calidad en una metodología de desarrollo de software: un enfoque práctico. <i>Ingeniare. Revista chilena de ingeniería, 26(1)</i>, p. 114-129.',
    },
    {
      referencia:
        'Guedes, G. T. (2018). UML 2-Uma abordagem prática. Novatec Editora.',
    },
    {
      referencia:
        'Jabangwe, R., Edison, H. & Duc, A. N. (2018). Software engineering process models for mobile app development: A systematic literature review.<i> Journal of Systems and Software,</i> 145, p. 98-111.',
    },
    {
      referencia:
        'Montero, B. M., Cevallos, H. V., & Cuesta, J. D. (2018). Metodologías ágiles frente a las tradicionales en el proceso de desarrollo de software. <i>Espirales revista multidisciplinaria de investigación, 2(17)</i>, p. 114-121.',
    },
    {
      referencia:
        'Silva, A., Ledezma, E., Castorena, J., Domínguez, A. & Riojas, A. (2018). Utilidad del Lenguaje Unificado de Modelado (UML) en el desarrollo de software profesional dentro del sector empresarial y educativo.<i> Ciencia Cierta revista de divulgación científica, 56.</i>',
    },
    {
      referencia:
        'Velásquez, S. M., Montoya, J. D. V., Adasme, M. E. G., Zapata, E. J. R., Pino, A. A. & Marín, S. L. (2019). Una revisión comparativa de la literatura acerca de metodologías tradicionales y modernas de desarrollo de software. <i>Revista Cintex, 24(2)</i>, p. 13-23.',
    },
    {
      referencia:
        'Zumba, J. (2018). Evolución de las Metodologías y Modelos utilizados en el Desarrollo de Software.<i> INNOVA Research Journal, 3(10)</i>, p. 20-33.',
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
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
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
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
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
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
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
