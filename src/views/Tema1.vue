<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 El cajero
    .row.mt-5(data-aos="fade-left")
      .col-12.col-lg-9
        p El cajero o cajera es la primera y última persona con la que el cliente tiene contacto en los puntos de venta; del correcto registro, la esmerada atención y el excelente servicio que le brinde depende el regreso de nuestro cliente. 
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/template/tema-1-1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El cajero debe recepcionar, empacar, entregar la mercancía o productos y custodiar el dinero en efectivo, cheques, giros y demás documentos de valor, a fin de lograr la recaudación de ingresos a la organización y la cancelación de pagos que correspondan a través de caja, conforme al rubro de cada empresa.
      .col-3.d-none.d-lg-flex.align-self-center
        figure
          img(src="@/assets/template/tema-1-2.png", alt="Texto que describa la imagen").px-3.floating
    p.mt-5 Se puede señalar que el cajero tiene unas funciones importantes, las cuales se enlistan a continuación: 

    .row.mt-5(data-aos="fade-right")
      .col-12.col-xl-10.offset-xl-1.position-relative.d-none.d-lg-flex
        figure.position-absolute
          img(src="@/assets/template/tema-1-3.png", alt="Texto que describa la imagen")
      .col-12.bg-gris-claro
        .tarjeta.p-4.mb-5.pb-5
          SlyderA(tipo="b")
            .row.offset-xl-1.pt-xl-4.mt-5.mt-xl-4
              .col-2.align-self-center.d-none.d-lg-flex.ml-5
                figure.ml-3
                  img(src="@/assets/template/tema-1-4.svg", alt="Texto que describa la imagen")
              .col-12.col-lg-4
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    | Recibe y entrega cheques, dinero en efectivo, depósitos bancarios y otros documentos de valor. No tener en cuenta salidas de dinero para compras u otros gastos del negocio. 
            .row.offset-xl-1.pt-xl-4.mt-4.mt-xl-4
              .col-2.align-self-center.d-none.d-lg-flex.ml-5
                figure.ml-3
                  img(src="@/assets/template/tema-1-5.svg", alt="Texto que describa la imagen")
              .col-12.col-lg-4
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    | Registra directamente operando una computadora o caja los movimientos de entrada y salida de dinero. No se registran algunos descuentos concedidos a los clientes. 
            .row.offset-xl-1.pt-xl-4.mt-5.mt-xl-5
              .col-2.align-self-center.d-none.d-lg-flex.ml-5
                figure.ml-3
                  img(src="@/assets/template/tema-1-6.svg", alt="Texto que describa la imagen")
              .col-12.col-lg-4
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    |     Realiza arqueos de caja. 
            .row.offset-xl-1.pt-xl-4.mt-5.mt-xl-5
              .col-2.align-self-center.d-none.d-lg-flex.ml-5
                figure.ml-3
                  img(src="@/assets/template/tema-1-7.svg", alt="Texto que describa la imagen")
              .col-12.col-lg-4
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    |     Suministra a su superior los movimientos diarios de caja. 
            .row.offset-xl-1.pt-xl-4.mt-5.mt-xl-5
              .col-2.align-self-center.d-none.d-lg-flex.ml-5
                figure.ml-3
                  img(src="@/assets/template/tema-1-8.svg", alt="Texto que describa la imagen")
              .col-12.col-lg-4
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    |     Sellar, estampar recibos de ingresos por caja, planillas y otros documentos. 
            .row.offset-xl-1.pt-xl-4.mt-5.mt-xl-4
              .col-2.align-self-center.d-none.d-lg-flex.ml-5
                figure.ml-3
                  img(src="@/assets/template/tema-1-9.svg", alt="Texto que describa la imagen")
              .col-12.col-lg-4
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    |     Cumple con las normas y procedimientos en materia de seguridad integral, establecidos por la empresa. 
            .row.offset-xl-1.pt-xl-4.mt-5.mt-xl-4
              .col-2.align-self-center.d-none.d-lg-flex.ml-5
                figure.ml-3
                  img(src="@/assets/template/tema-1-10.svg", alt="Texto que describa la imagen")
              .col-12.col-lg-4
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    |     Mantiene en orden equipo y sitio de trabajo, reportando cualquier anomalía. 
            .row.offset-xl-1.pt-xl-4.mt-5.mt-xl-4
              .col-2.align-self-center.d-none.d-lg-flex.ml-5
                figure.ml-3
                  img(src="@/assets/template/tema-1-11.svg", alt="Texto que describa la imagen")
              .col-12.col-lg-4
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    |     Realiza cualquier otra tarea a fin de que le sea asignada.
    
    p.mt-5 Además de las funciones que se vieron anteriormente existe una fundamental y es organizar el puesto de trabajo, que detallaremos a continuación por su importancia:    
    .row.mt-5
      .col-12.bg-rojo-claro.p-5
        .row
          .col-12.col-lg-8
            .h4 Organizar puesto de pago
            p.mt-4 El propósito del puesto de pago es desear al cliente comprador bienestar, seguridad y ligereza al momento de registrar sus productos; por otra parte, es el mueble donde te ubicas para registrar los productos y atender a los clientes, el diseño del puesto de pago y la distribución de los equipos facilitan la realización de tus labores como cajero. Siempre debes tenerlo limpio y descongestionado de mercancía. 
          .col-4.offset-4.offset-lg-0.mt-3.mt-lg-0
            figure
              img(src="@/assets/template/tema-1-12.svg", alt="Texto que describa la imagen").floating
    p.mt-5 Se puede señalar que, para el puesto de pago, podemos revisar los siguientes pasos o funcionamiento de este: 
    SlyderC.mt-5(:datos="datosSlyder")(data-aos="flip-up")
    .row(data-aos="slide-up")
      .col-10.offset-1
        .tarjeta.color-acento-contenido.p-3.mt-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2.d-none.d-lg-flex
              img(src="@/assets/template/tema-1-25.svg").px-2.px-xl-4
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Proceso general del cajero
                  p.text-small.text-amarillo Video ilustrativo: en él mismo podrá profundizar la información. ¡Consúltalo!  
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=nYWj9Tru7mc" target="_blank")
                    span Enlace
                    i.fas.fa-link
    .row.mt-5.border-gris.rounded-20(data-aos="zoom-in-left")
      .col-4.px-0.align-self-center.d-none.d-lg-flex
        figure
          img(src="@/assets/template/tema-1-26.png", alt="Texto que describa la imagen")
      .col-12.col-lg-8.px-5
        .h4.pt-4 Ética del Cajero
        p.mt-4 La ética empresarial promueve los valores de una sociedad. Muchas empresas crean un código de ética para sus empleados a seguir que asegurarse de que los clientes son tratados con respeto.
        p.mt-3 Los cajeros en los <em>Retail</em> están obligados a seguir las normas éticas que deben asegurarse de que los empleados no toman ventaja de su posición en la sociedad y el uso de sus conocimientos para beneficio personal; por otra parte, el operario en el puesto de pago debe ser una persona íntegra, honrada y responsable, identificada con los ejes centrales en el buen manejo de equipos y materiales, responsable directo de dinero en efectivo, cheques y otros documentos de valor con un alto nivel de confidencialidad frente a la organización.
    .row.mt-5(data-aos="zoom-in-right")
      .col-10.offset-1.border-gris.rounded-20.px-5.py-4
        .row
          .col-3.border-right-gris.d-flex.align-items-center.d-none.d-lg-flex
            figure.px-4.px-xl-5
              img(src="@/assets/template/tema-1-27.svg", alt="Texto que describa la imagen").floating
          .col-12.col-lg-9
            .h4 Protocolo institucional
            p.mt-3 Se entiende en el <em>Retail</em> el protocolo, como aquel conjunto de normas, hábitos y costumbres institucionales que nos permite desenvolvernos adecuadamente en las diferentes áreas de la organización y cada organización maneja uno según sus políticas. 



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: '1. Revisar ',
        texto:
          'Que se encuentre conectada a una toma de corriente y que  funcione perfectamente.',
        imagen: require('@/assets/template/tema-1-13.png'),
      },
      {
        titulo: '2. Verificar ',
        texto:
          'Si tiene papel  suficiente para la impresión de facturas debe tener los bordes rectos para introducirse con mayor facilidad en el carrete.',
        imagen: require('@/assets/template/tema-1-14.png'),
      },
      {
        titulo: '3. Abrir y cerrar',
        texto:
          'El cajón de la caja registradora y revisar que se encuentre vacía, verificar el contenido de la base que entrega el supervisor.',
        imagen: require('@/assets/template/tema-1-15.png'),
      },
      {
        titulo: '4. Validar',
        texto:
          'El buen funcionamiento del <em>software</em> y los botones del tablero de control, ingresar usuario y contraseña, en muchas ocasiones se ingresan el código del supervisor.',
        imagen: require('@/assets/template/tema-1-16.png'),
      },
      {
        titulo: '5. Preguntarle al cliente',
        texto:
          'El documento de identidad para fidelización ya que se acumulan puntos o tienen bonos de descuento, el almacén debe tener un registro de clientes en base de datos.',
        imagen: require('@/assets/template/tema-1-17.png'),
      },
      {
        titulo: '6. Registrar los productos',
        texto:
          'Uno a uno, se deben pasar los códigos de barras por los escáneres o lectores ópticos que leen la información del producto. Si no es posible, realizarlo manualmente.',
        imagen: require('@/assets/template/tema-1-18.png'),
      },
      {
        titulo: '7. En algunos casos se debe oprimir botón para',
        texto:
          'Tipo de moneda, impuestos, descuentos, departamento, código del vendedor.',
        imagen: require('@/assets/template/tema-1-19.png'),
      },
      {
        titulo: '8. Luego de pasar todos los productos',
        texto:
          'Totalizan e informan la forma de pago del cliente: Efectivo, tarjeta, bonos, puntos, si es en efectivo la caja informa el valor a devolver.',
        imagen: require('@/assets/template/tema-1-20.png'),
      },
      {
        titulo: '9. Es importante',
        texto:
          'Mantener la caja registradora cerrada después de la transacción para evitar hurtos y robos.',
        imagen: require('@/assets/template/tema-1-21.png'),
      },
      {
        titulo: '10. Corregir errores',
        texto:
          'Al anular una venta, cambiar el código de un producto, reembolsar una venta, muchas veces es necesario llamar al supervisor. ',
        imagen: require('@/assets/template/tema-1-22.png'),
      },
      {
        titulo: '11. Obtener',
        texto:
          'Reportes de ventas y hacer balance de la caja registradora, al finalizar la jornada para verificar los montos a entregar al supervisor.',
        imagen: require('@/assets/template/tema-1-23.png'),
      },
      {
        titulo:
          '12. Imprime la información del balance de caja para verificar con lo que tiene físicamente',
        texto:
          'Efectivo, cupones, <em>Boucher</em> de tarjetas, puntos, etc. Todo debe coincidir para entregar informe al supervisor.',
        imagen: require('@/assets/template/tema-1-24.png'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
@media (max-width: 576px)
  .slyder-a__btn--atrs
    margin-left: -1rem !important
  .slyder-a__btn--sigt
    margin-left: 2rem !important
@media (max-width: 992px)
  .bg-gris-claro
    background-color: #f4f4f4
    border-radius: 2rem
  .slyder-a__btn--atrs
    margin-left: 2rem
  .slyder-a__btn--sigt
    margin-left: 3rem
  .slyder-a__tipo-b
    padding-top: 4rem
@media (min-width: 1200px)
  .slyder-a__btn--atrs
    margin-left: 2rem
  .slyder-a__btn--sigt
    left: 46% !important
  .slyder-a__tipo-b
    padding-top: 3.5rem

.slyder-a__tipo-b .slyder-a__bullets
  display: none
.slyder-a__btn--atrs
  position: absolute
  left: 27% !important
  background-color: #5C22C3
  background-image: url(../assets/template/fecha-izq.svg)
  transform: rotate(180deg) !important
.slyder-a__btn--sigt
  position: absolute
  left: 43%
  background-color: #5C22C3
  background-image: url(../assets/template/fecha-izq.svg)
  transform: rotate(0deg) !important
.slyder-a__tipo-b
  margin-top: -2% !important
</style>
