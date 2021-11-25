export default {
  global: {
    componenteFormativo: 'Recursos del cajero',
    descripcionCurso:
      'El objetivo de este componente de formación en recaudo es desarrollar competencias técnicas, humanas y personales en el puesto de pago. Se entiende que esta posición es la de mayor representatividad en el Retail, con el cliente comprador.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
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
        titulo: 'El cajero',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Recursos del puesto de pago',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Administrar dinero y documentos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Equipos tecnológicos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Elementos en el puesto de trabajo',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Manejo de valores',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Medios de pago',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Normativa del recaudo de caja',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Seguridad y salud en el trabajo',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Leyes de protección de datos',
            hash: 't_4_2',
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
  referencias: [
    {
      referencia:
        'Blanco, L. A. (2013). Ética integral. Bogotá, Colombia: Ecoe Ediciones.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/69262?page=59',
    },
    {
      referencia:
        'Block, S. (2013). Fundamentos de administración financiera. McGraw Hill Interamericana.',
      link: '',
    },
    {
      referencia:
        'Calleja, F. (2014). Contabilidad Administrativa. México: Editorial Pearson.',
      link: '',
    },
    {
      referencia:
        'Krugman, O. (2008). Fundamentos de Economía. Barcelona. Editorial Reverté.',
      link: '',
    },
    {
      referencia:
        'Oró, R. (2015). La protección de datos. Barcelona, Spain: Editorial UOC.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/57741?page=12',
    },
    {
      referencia:
        'Pérez, L. (2007). Negociación Asertiva, una visión diferente de la cobranza. México. ICM División editorial.',
      link: '',
    },
    {
      referencia:
        'Raju, J. (2010). Fijando Precios para Ganar Competitividad. Barcelona. Profit Editorial.',
      link: '',
    },
    {
      referencia:
        'Angulo Novoa, J. C., & Maldonado Piracon, W. A. (2016). SISTEMAS DE INFORMACIÓN GERENCIAL TIPO TRANSACCIONAL PARA PYMES. Ágora, 3(3), 60–75.',
      link: 'https://ojs.tdea.edu.co/index.php/agora/article/view/242',
    },
  ],
  glosario: [
    {
      termino: 'Caja registradora',
      significado:
        'Máquina sumadora para uso de comerciantes, que llena diversos cometidos, pues indica el importe de la compra al cliente, imprime un cupón justificativo del gasto, inscribe y suma el importe de las ventas, dificulta los desfalcos y permite guardar momentáneamente el dinero.',
    },
    {
      termino: 'Cajero automático',
      significado:
        'Máquina sumadora para uso de comerciantes, que llena diversos cometidos, pues indica el importe de la compra al cliente, imprime un cupón justificativo del gasto, inscribe y suma el importe de las ventas, dificulta los desfalcos y permite guardar momentáneamente el dinero',
    },
    {
      termino: 'Crédito',
      significado:
        'Cuando una transacción se acredita en su cuenta, aparece como una transacción positiva (+) y se agrega a su saldo (a diferencia de un débito, que aparece como una transacción negativa (-) y se resta de su saldo). Un ejemplo de crédito sería el dinero en efectivo que usted depositó.',
    },
    {
      termino: 'Débito',
      significado:
        'Cuando una transacción se debita en su cuenta, aparece como una transacción negativa (–) y se resta del saldo de su cuenta corriente vinculada, a diferencia de un crédito, que aparece como una transacción positiva (+) y se agrega a su saldo. Un ejemplo de débito en su cuenta corriente es una compra con tarjeta de débito en un comercio.',
    },
    {
      termino: 'Legalización',
      significado:
        'Documento mediante el cual se formaliza los gastos realizados con cargo al anticipo concedido y se reintegran los recursos no gastados.',
    },
    {
      termino: 'Pagos por aplicación móvil',
      significado:
        'Esta es una aplicación (app) que te permite pagar desde tu celular sin llevar las tarjetas contigo, de forma más fácil y segura, en comercios con datafonos habilitados. Para hacer uso de esta tecnología debes descargar la aplicación en tu Smartphone, crear una cuenta e inscribir las tarjetas',
    },
    {
      termino: 'Reembolso de caja menor',
      significado:
        'Es el soporte del pago de los gastos que se han efectuado en pequeñas cantidades por conceptos tales como: comidas, pasajes, papelería, fotocopias, etc., estos pagos deben contar con las facturas o documentos equivalentes para su verificación.',
    },
    {
      termino: 'Saldo disponible',
      significado:
        'Su saldo disponible es el dinero en su cuenta de ahorros o cuenta corriente que está actualmente a su disposición para hacer compras, extracciones, etc. Este saldo se actualiza durante el día con las transacciones que haga',
    },
    {
      termino: 'Tarjeta de crédito',
      significado:
        'Instrumento que permite realizar pagos sin tener dinero en efectivo. El cargo en la cuenta se produce, por lo general, al final del mes. También se puede trasladar el pago más allá de ese momento, pero esta operación conlleva el pago de intereses. Estas tarjetas también permiten retirar dinero en efectivo en los cajeros automáticos, aunque hay que pagar comisiones.',
    },
    {
      termino: 'Tarjeta de débito',
      significado:
        'Al igual que la tarjeta de crédito, es un medio que permite realizar pagos sin tener dinero en efectivo. La diferencia es que con la tarjeta de débito el cargo en la cuenta se produce inmediatamente, con lo que si no existe disponible el pago no se podrá realizar. Estas tarjetas también permiten retirar dinero en efectivo en los cajeros automáticos, aunque normalmente con comisiones si no se utiliza la red propia de la tarjeta',
    },
    {
      termino: 'Transacción efectiva',
      significado:
        'Una transacción se hace efectiva una vez que se ha acreditado o debitado de una cuenta con éxito',
    },
    {
      termino: 'Transacción rechazada',
      significado:
        'Usted deposita un cheque emitido para usted, pero la persona que lo libró no tiene fondos suficientes para cubrirlo. En este caso, si ya se le acreditó el depósito, se lo debitaremos de su cuenta, ya que no había fondos suficientes',
    },
  ],
  complementario: [
    {
      texto:
        'Blanco, L. A. (2013). Ética integral. Bogotá, Colombia: Ecoe Ediciones',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/69262?page=59',
    },
    {
      texto: 'Oró, R. (2015). La protección de datos.',
      tipo: 'Libro',
      link: 'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/',
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
      {
        nombre: 'Jaime Alberto Pérez Posada',
        cargo: 'Instructor',
        centro: 'Centro de Comercio - Regional Antioquia ',
      },
      {
        nombre: 'Zvi Daniel Grosman',
        cargo: 'Diseñador instruccional',
        centro: 'Centro Agropecuario La Granja - Regional Tolima ',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Distrito capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Luis Fernando Sarmiento Betancourth',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Arnulfo Beltrán Mojica ',
        cargo: 'Producción audiovisual',
        centro: 'Regional Tolima - Centro de Comercio y Servicios',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Lizeth Karina Manchego Suárez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Veimar Celis Melendez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
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
