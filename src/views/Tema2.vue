<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Recursos del puesto de pago
    .row.mt-5(data-aos="fade-left")
      .col-12.col-lg-9
        p Son la Terminal POS (registradora) es la máquina ubicada en cada puesto de pago, su función es permitir registrar los productos, brindar información al cliente y obtener información de ventas para el almacén.
        p.mt-4 La terminal POS la componen las siguientes partes:
        ul.lista-ul.mt-4
          li 
            i.fas.fa-angle-right
            | La CPU o unidad de memoria.
          li.mt-2 
            i.fas.fa-angle-right
            | La gaveta para guardar los dineros, cheques u otros documentos.
          li.mt-2 
            i.fas.fa-angle-right
            | La impresora para obtener los tiquetes de compra, que debe ser entregado al cliente.
          li.mt-2 
            i.fas.fa-angle-right
            |  El visor para brindar información al cliente.
          li.mt-2
            i.fas.fa-angle-right
            | El teclado para ingresar los datos.
      .col-3.d-none.d-lg-flex.px-0.align-self-center
        figure
          img(src="@/assets/template/tema-2-1.png", alt="Texto que describa la imagen").floating

    .titulo-segundo.mt-5.color-acento-contenido
      #t_2_1.h2 2.1  Administrar dinero y documentos
    .row.mt-5
      .col-12.col-lg-7.align-self-center
        p Al preparar la jornada laboral, de acuerdo con las instrucciones del Retail y su política de apertura de caja, debemos de cumplir con el siguiente procedimiento:
        ul.lista-ul.mt-3
          li 
            i.fas.fa-angle-right
            | El dinero es entregado, ordenado y guardado de acuerdo con los procedimientos operacionales.
          li.mt-2 
            i.fas.fa-angle-right
            | El puesto de trabajo debe permanecer, según los procedimientos y normativas de higiene y aseo del área de trabajo.
          li.mt-2 
            i.fas.fa-angle-right
            | La caja registradora es abierta, de acuerdo con controles administrativos y de seguridad establecidos. 
          li.mt-2 
            i.fas.fa-angle-right
            | Los comprobantes impresos de apertura de caja son almacenados, de acuerdo con controles administrativos y de seguridad establecidos.
          li.mt-2 
            i.fas.fa-angle-right
            | La apertura y cierre de la caja es registrada de acuerdo con controles administrativos y de seguridad establecidos.
      .col-6.col-lg-5.offset-3.offset-lg-0.mt-3.mt-lg-0.align-self-center
        figure
          img(src="@/assets/template/tema-2-2.png", alt="Texto que describa la imagen")

    separador.mt-3
    .titulo-segundo.mt-5.color-acento-contenido
      #t_2_2.h2 2.2  Equipos tecnológicos
    p.mt-4 La tecnología va de la mano del cajero, por lo cual conozcamos algunos de los equipos que están a disposición para ejecución de su rol:
    TabsB.color-acento-contenido.mt-5(data-aos="zoom-in")
      .py-4.py-md-5(titulo="El Scanner balanza" :icono="require('@/assets/template/tema-2-3.svg')")
        .row
          .col-12.col-lg-7
            .h4 El Scanner balanza      
            p.mt-3 Es el equipo conformado por el lector de códigos de barras y la balanza para pesar las frutas y verduras, conectado a la terminal Pos tiene como función brindar la información de ventas con agilidad y exactitud.
            .h4.mt-3 El uso del Scanner balanza te permite:
            ul.lista-ul.mt-3
              li 
                i.fas.fa-angle-right
                | Brindar al cliente mayor seguridad, rapidez y exactitud en el registro.
              li.mt-2 
                i.fas.fa-angle-right
                | Aumentar la productividad en el puesto de pago.
              li.mt-2 
                i.fas.fa-angle-right
                | Mayor confiabilidad en la información de ventas.
          .col-6.col-lg-5.offset-3.offset-lg-0.mt-3.mt-lg-0.align-self-center
            figure
              img(src="@/assets/template/tema-2-7.png", alt="Texto que describa la imagen")
      .py-4.py-md-5(titulo="El Datáfono" :icono="require('@/assets/template/tema-2-4.svg')")
        .row
          .col-12.col-lg-7
            .h4  El Datáfono     
            p.mt-3 Es el equipo que te permite obtener los recibos de pago cuando los clientes realizan el pago con las tarjetas débito o crédito, su función es la comunicación con los bancos y las entidades financieras. Algunos datáfonos traen separado el teclado o PIN PAD para que los clientes digiten su clave personal. 
          .col-6.col-lg-5.offset-3.offset-lg-0.mt-3.mt-lg-0.align-self-center
            figure
              img(src="@/assets/template/tema-2-8.png", alt="Texto que describa la imagen")
      .py-4.py-md-5(titulo="El desactivador de TAG’S " :icono="require('@/assets/template/tema-2-5.svg')")
        .row
          .col-12.col-lg-7
            .h4 El desactivador de TAG’S      
            p.mt-3 Es el equipo para que desactives los TAG’s o dispositivo de seguridad que le colocan en el almacén a los productos para evitar que salgan sin ser registrados, la mayoría de ellos son de textiles, variedades y licores.
            p.mt-3 Los puestos de pago también tienen incorporado un desactivador para los TAG’S que traen internamente en el empaque algunos cosméticos y medicamentos, estos dispositivos son colocados por el fabricante y no son reutilizables.
            p.mt-3 Debes retirar el TAG del producto para evitar que activen las alarmas en las salidas del almacén incomodando al cliente.
          .col-6.col-lg-5.offset-3.offset-lg-0.mt-3.mt-lg-0.align-self-center
            figure
              img(src="@/assets/template/tema-2-9.png", alt="Texto que describa la imagen")
      .py-4.py-md-5(titulo="El sistema neumático (Shut)" :icono="require('@/assets/template/tema-2-6.svg')").red
        .row
          .col-12.col-lg-7
            .h4   El sistema neumático (Shut)    
            p.mt-3 Es el sistema de conductos que va desde el puesto de pago hasta la caja general o tesorería, su función es transportar una cápsula donde envías el dinero de las ventas que has realizado. En los Retail que no poseen el Shut el dinero lo envías con el directivo que realiza la recogida.
          .col-6.col-lg-5.offset-3.offset-lg-0.mt-3.mt-lg-0.align-self-center
            figure
              img(src="@/assets/template/tema-2-10.png", alt="Texto que describa la imagen")
    .row.mt-5
      .col-12.bg-rojo-claro.p-5
        .row
          .col-12.col-lg-8
            .h4 Teclados
            p.mt-4 La distribución del teclado y su correcto uso te permite operar fácilmente la terminal, brindar un mejor servicio a los clientes compradores con las teclas especiales y diferenciar los medios de pago para cumplir con lo establecido por la Dirección Nacional de Impuestos DIAN.
            .cajon.color-primario.p-4.mt-4.bg-azul-claro
              p En los siguientes videos, vamos a observar el proceso de registro, cobro y otros servicios ofrecidos, independiente de los teclados, utilizados según cada Retail:
              P.mt-3 #[strong Nota:] ten en cuenta que no hay un estándar único, para este tipo de operaciones
            .row(data-aos="slide-up")
              .col-12
                .tarjeta.color-acento-contenido.p-3.mt-3
                  .row.justify-content-around.align-items-center
                    .col-3.d-none.d-lg-flex
                      img(src="@/assets/template/tema-2-12.svg").px-2.px-xl-4
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0
                          h3.mb-1 Registro de productos
                          p.text-small.text-amarillo Registro y escaneo de productos para el cálculo del total de la compra y continuar con el proceso de venta. #[strong.text-amarillo ¡Ingresa!] 
                        .col-sm-auto
                          a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                            span Enlace
                            i.fas.fa-link
                      .row.justify-content-between.align-items-center.mt-3
                        .col.mb-3.mb-sm-0
                          h3.mb-1 Cobro
                          p.text-small.text-amarillo Procedimiento para el cobro de los productos a adquirir por el cliente #[strong.text-amarillo ¡Ingresa!]  
                        .col-sm-auto
                          a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                            span Enlace
                            i.fas.fa-link
                      .row.justify-content-between.align-items-center.mt-3
                        .col.mb-3.mb-sm-0
                          h3.mb-1 Servicios adicionales
                          p.text-small.text-amarillo Servicios adicionales disponibles para el cliente y a realizar en caja. #[strong.text-amarillo ¡Ingresa!]  
                        .col-sm-auto
                          a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                            span Enlace
                            i.fas.fa-link
                      
            .col-12
          .col-4.offset-4.offset-lg-0.mt-3.mt-lg-0.align-self-center
            figure
              img(src="@/assets/template/tema-2-11.png", alt="Texto que describa la imagen").floating
    .h4.mt-5 Sistema transaccional
    .row.mt-5
      .col-12.col-lg-9
        p Según Angulo & Maldonado (2016): “Se entiende por sistema de información transaccional aquel diseñado para recolectar, modificar, almacenar y recuperar información generada por las transacciones en una organización”
        p.mt-3 En el Retail se puede señalar como sistema transaccional al conjunto organizado de personas, procedimientos, software, base de datos y dispositivos para registrar transacciones comerciales consumadas.
        .cajon.color-primario.p-4.mt-3.bg-azul-claro
          p No se trata de solo comprar y vender, ya que el secreto en el negocio radica en dejar clientes satisfechos y para lograrlo necesitas aprender cómo brindar la mejor experiencia, es decir en el momento actual la relación entre las tiendas físicas de Retail y sus clientes son básicamente transaccional, lugares para satisfacer la oferta, la demanda, nuevos canales, segmentaciones a la medida e integración de procesos tecnológicos.
      .col-3.d-none.d-lg-flex.px-0.align-self-center
        figure
          img(src="@/assets/template/tema-2-13.svg", alt="Texto que describa la imagen").floating
    separador.mt-3 

    .titulo-segundo.mt-5.color-acento-contenido
      #t_2_3.h2 2.3  Elementos en el puesto de trabajo 
    .row.mt-5
      .col-sm-3.col-lg-2.px-4.align-self-center.d-none.d-sm-flex
        figure
          img(src="@/assets/template/tema-2-14.svg", alt="Texto que describa la imagen").floating
      .col-12.col-sm-9.col-lg-10.px-4.px-sm-0
        p El cargo de cajero se ubica en un sitio cerrado y/o abierto, normalmente en cubículos, además está sometido al riesgo de la pérdida de dinero, ya sea por dar mal un vuelto, por cobrar mal un producto o que realicen un registro de transacción de forma incorrecta de la misma forma al estar manejando valores de la organización el cajero o cajera requiere de mucha atención y la mayor parte del horario laboral lo realiza parado, no pudiendo abandonar la caja sin antes avisar a su superior, dejando constancia del hecho. De la misma forma para su mejor desempeño se debe tener en cuenta: 
    .row.mt-5
      .col-11.col-md-5.rounded-15.border-azul.ml-5(data-aos="flip-left")
        .row.h-100
          .col-lg-4.px-0.align-items-center.d-none.d-lg-flex.bg-azul.rounded-15-izq.justify-content-center
            .row.hover-display-flex.align-items-center(v-show="showImage1 === false")(v-on:mouseover="showImage1 = true")
              .col-12.text-center.font-5-rem
                .h4.text-white 1
            .row(v-show="showImage1 === true")(v-on:mouseleave="showImage1 = false")
              figure
                img(src="@/assets/template/tema-2-15.svg", alt="Texto que describa la imagen")
          .col-12.col-lg-8.px-4.bg-blanco.py-5.rounded-15
            .h4.mt-5 Escritorio
            p.mt-3.mb-5 Escritorio pequeño donde se asienta la caja y se pueda ordenar adecuadamente los utensilios de trabajo.
      .col-11.col-md-5.rounded-15.border-azul.ml-5.mt-3.mt-md-0(data-aos="flip-right")
        .row.h-100
          .col-lg-4.px-0.align-items-center.d-none.d-lg-flex.bg-azul.rounded-15-izq.justify-content-center
            .row.hover-display-flex.align-items-center(v-show="showImage2 === false")(v-on:mouseover="showImage2 = true")
              .col-12.text-center.font-5-rem
                .h4.text-white 2
            .row(v-show="showImage2 === true")(v-on:mouseleave="showImage2 = false")
              figure
                img(src="@/assets/template/tema-2-16.svg", alt="Texto que describa la imagen")
          .col-12.col-lg-8.px-4.bg-blanco.py-5.rounded-15
            .h4.mt-5 Comunicación
            p.mt-3 Elemento de comunicación con supervisores, en caso de que la caja quede lejos de estos.  

      .col-11.col-md-5.rounded-15.border-azul.ml-5.mt-3(data-aos="flip-right")
        .row.h-100
          .col-lg-4.px-0.align-items-center.d-none.d-lg-flex.bg-azul.rounded-15-izq.justify-content-center
            .row.hover-display-flex.align-items-center(v-show="showImage3 === false")(v-on:mouseover="showImage3 = true")
              .col-12.text-center.font-5-rem
                .h4.text-white 3
            .row(v-show="showImage3 === true")(v-on:mouseleave="showImage3 = false")
              figure
                img(src="@/assets/template/tema-2-17.svg", alt="Texto que describa la imagen")
          .col-12.col-lg-8.px-4.bg-blanco.py-5.rounded-15
            .h4 Cajonera
            p.mt-3 Cajonera donde se introduzca el dinero, propiamente ubicada en la caja, con sus divisiones para los billetes y monedas de diferentes denominaciones.
      .col-11.col-md-5.rounded-15.border-azul.ml-5.mt-3(data-aos="flip-left")
        .row.h-100
          .col-lg-4.px-0.align-items-center.d-none.d-lg-flex.bg-azul.rounded-15-izq.justify-content-center
            .row.hover-display-flex.align-items-center(v-show="showImage4 === false")(v-on:mouseover="showImage4 = true")
              .col-12.text-center.font-5-rem
                .h4.text-white 4
            .row(v-show="showImage4 === true")(v-on:mouseleave="showImage4 = false")
              figure
                img(src="@/assets/template/tema-2-18.svg", alt="Texto que describa la imagen")
          .col-12.col-lg-8.px-4.bg-blanco.py-3.rounded-15
            .h4 Stock
            p.mt-3 Stock apropiado (el cual debe ser manejado por propio el cajero) de todos los útiles y provisiones que se requieran para el desempeño de la tarea: plumas, grapas, engrapadora, clips, facturas, notas de venta, bolsas de diferentes tamaños para envolver los productos, toallas o trapos para limpiar, cuando se vendan comestibles, separadores de papeles, publicidad en caso de recibir orden para repartirla.
      
      .col-11.col-md-5.rounded-15.border-azul.ml-5.mt-3(data-aos="flip-left")
        .row.h-100
          .col-lg-4.px-0.align-items-center.d-none.d-lg-flex.bg-azul.rounded-15-izq.justify-content-center
            .row.hover-display-flex.align-items-center(v-show="showImage5 === false")(v-on:mouseover="showImage5 = true")
              .col-12.text-center.font-5-rem
                .h4.text-white 5
            .row(v-show="showImage5 === true")(v-on:mouseleave="showImage5 = false")
              figure
                img(src="@/assets/template/tema-2-19.svg", alt="Texto que describa la imagen")
          .col-12.col-lg-8.px-4.bg-blanco.py-5.rounded-15
            .h4.mt-5 Silla
            p.mt-3.mb-5 Silla cómoda, alta y con ruedas. 
      .col-11.col-md-5.rounded-15.border-azul.ml-5.mt-3(data-aos="flip-right")
        .row.h-100
          .col-lg-4.px-0.align-items-center.d-none.d-lg-flex.bg-azul.rounded-15-izq.justify-content-center
            .row.hover-display-flex.align-items-center(v-show="showImage6 === false")(v-on:mouseover="showImage6 = true")
              .col-12.text-center.font-5-rem
                .h4.text-white 6
            .row(v-show="showImage6 === true")(v-on:mouseleave="showImage6 = false")
              figure
                img(src="@/assets/template/tema-2-20.svg", alt="Texto que describa la imagen")
          .col-12.col-lg-8.px-4.bg-blanco.py-5.rounded-15
            .h4.mt-5 Precios
            p.mt-3 Listado de precios de artículos en caso de no contar con códigos de barra. Aún si se cuenta con ellos, es preciso que los cajeros estén preparados para cualquier contingencia.

      .col-11.col-md-5.rounded-15.border-azul.ml-5.mt-3(data-aos="flip-left")
        .row.h-100
          .col-lg-4.px-0.align-items-center.d-none.d-lg-flex.bg-azul.rounded-15-izq.justify-content-center
            .row.hover-display-flex.align-items-center(v-show="showImage7 === false")(v-on:mouseover="showImage7 = true")
              .col-12.text-center.font-5-rem
                .h4.text-white 7
            .row(v-show="showImage7 === true")(v-on:mouseleave="showImage7 = false")
              figure
                img(src="@/assets/template/tema-2-21.svg", alt="Texto que describa la imagen")
          .col-12.col-lg-8.px-4.bg-blanco.py-5.rounded-15
            .h4.mt-5 Ventanilla
            p.mt-3.mb-5 Si existe una ventanilla, el canal de comunicación no debe obligar a cajero y cliente a agacharse para poder comunicarse. Deben evitarse los micrófonos. Los demás clientes no deben enterarse de la transacción.
      .col-11.col-md-5.rounded-15.border-azul.ml-5.mt-3(data-aos="flip-right")
        .row.h-100
          .col-lg-4.px-0.align-items-center.d-none.d-lg-flex.bg-azul.rounded-15-izq.justify-content-center
            .row.hover-display-flex.align-items-center(v-show="showImage8 === false")(v-on:mouseover="showImage8 = true")
              .col-12.text-center.font-5-rem
                .h4.text-white 8
            .row(v-show="showImage8 === true")(v-on:mouseleave="showImage8 = false")
              figure
                img(src="@/assets/template/tema-2-22.svg", alt="Texto que describa la imagen")
          .col-12.col-lg-8.px-4.bg-blanco.py-5.rounded-15
            .h4.mt-5 Efectivo
            p.mt-3 Efectivo y monedas suficiente tanto en cantidad como en denominaciones. 

      .col-11.col-md-5.rounded-15.border-azul.ml-5.mt-3(data-aos="flip-left")
        .row.h-100
          .col-lg-4.px-0.align-items-center.d-none.d-lg-flex.bg-azul.rounded-15-izq.justify-content-center
            .row.hover-display-flex.align-items-center(v-show="showImage9 === false")(v-on:mouseover="showImage9 = true")
              .col-12.text-center.font-5-rem
                .h4.text-white 9
            .row(v-show="showImage9 === true")(v-on:mouseleave="showImage9 = false")
              figure
                img(src="@/assets/template/tema-2-23.svg", alt="Texto que describa la imagen")
          .col-12.col-lg-8.px-4.bg-blanco.py-5.rounded-15
            .h4.mt-5 Visibilidad
            p.mt-3.mb-5 Deben así mismo evitarse las ventanillas en que el cliente comprador no pueda ver el cajero y no pueda observar el manejo de su dinero.
      .col-11.col-md-5.rounded-15.border-azul.ml-5.mt-3(data-aos="flip-right")
        .row.h-100
          .col-lg-4.px-0.align-items-center.d-none.d-lg-flex.bg-azul.rounded-15-izq.justify-content-center
            .row.hover-display-flex.align-items-center(v-show="showImage10 === false")(v-on:mouseover="showImage10 = true")
              .col-12.text-center.font-5-rem
                .h4.text-white 10
            .row(v-show="showImage10 === true")(v-on:mouseleave="showImage10 = false")
              figure
                img(src="@/assets/template/tema-2-24.svg", alt="Texto que describa la imagen")
          .col-12.col-lg-8.px-4.bg-blanco.py-5.rounded-15
            .h4.mt-5 No se recomienda
            p.mt-3 En el punto de pago es recomendable no manejar teléfonos convencionales, ni celulares, tampoco faxes y escaner
    separador.mt-3 

    .titulo-segundo.mt-5.color-acento-contenido
      #t_2_4.h2  2.4  Manejo de valores
    .row.mt-5
      .col-12.col-lg-7.align-self-center
        p La pandemia del año 2020 ha acelerado el movimiento hacia una economía más online y los retailer necesitan adaptarse para poder avanzar en un momento de profundos cambios. La primera tendencia que prevemos en el mundo post pandémico es la consolidación de los procesos de pago online y offline. Durante la pandemia, muchos Retail pusieron más énfasis en los canales online.
        p.mt-3 La aparición de una experiencia de compra offline más “conectada” implica la necesidad de conciliar las soluciones de pago para mejorar la experiencia del cliente comprador, no obstante, entendemos por manejo de valores en el Retail, al conjunto de operaciones y registros en el punto de pago, en igual forma la administración de efectivo y en otros medios de pago en manos de personas que tengan buenas relaciones éticas y profesionales con los clientes compradores.
      .col-6.col-lg-5.offset-3.offset-lg-0.mt-3.mt-lg-0.align-self-center
        figure
          img(src="@/assets/template/tema-2-25.png", alt="Texto que describa la imagen")


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    showImage1: false,
    showImage2: false,
    showImage3: false,
    showImage4: false,
    showImage5: false,
    showImage6: false,
    showImage7: false,
    showImage8: false,
    showImage9: false,
    showImage10: false,
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
.tabs-b .tabs-b__header .tabs-b__tab:nth-child(1) .tabs-b__tab__icon
  width: 60px
.tabs-b .tabs-b__header .tabs-b__tab:nth-child(4) img
  width: 60%
.rounded-15-izq
  border: 3px solid #64B5F6

.hover-display-flex
  display: flex
.hover-display-flex:hover
  display: none

.hover-display-none
  display: none
.hover-display-flex:hover
  display: flex

.font-5-rem
  font-size: 5rem
</style>
