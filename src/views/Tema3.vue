<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Medios de pago

    .row.mt-5
      .col-12.bg-rojo-claro.p-5
        .row
          .col-12.col-lg-8.align-self-center
            p Hoy en día existen multitud de medios de pago para que todo cliente pueda efectuar su deseo de compra. Por eso vamos a contextualizarnos con relación a los mismos.
            .h4.mt-4 Concepto y tipos  
            p.mt-4 Son elementos o instrumentos que permiten comprar, contratar o cancelar todo tipo de deudas. Por medio físico o electrónico.
          .col-4.offset-4.offset-lg-0.mt-3.mt-lg-0.align-self-center
            figure.px-xl-4
              img(src="@/assets/template/tema-3-1.svg", alt="Texto que describa la imagen").floating.px-lg-5
    .h4.mt-5 Tipos
    .row.mt-5
      .col-12.col-lg-8
        .row
          .col-12.box-shadow.rounded-20(data-aos="slide-up")
            .row.p-4
              .col-2.d-none.d-lg-flex.align-items-center
                figure
                  img(src="@/assets/template/tema-3-3.svg", alt="Texto que describa la imagen").px-lg-2.px-xl-4
              .col-12.col-lg-10.px-0
                ol.lista-ol--cuadro.mb-0
                  li.mb-0
                    .lista-ol--cuadro__vineta.mt-1
                      span 1
                    | Pago en efectivo: radica en pagar un bien o servicio con dinero físico, con un cheque bancario al portador o con algún otro medio físico similar.
        .row.mt-3
          .col-12.box-shadow.rounded-20(data-aos="slide-up")
            .row.p-4
              .col-2.d-none.d-lg-flex.align-items-center
                figure
                  img(src="@/assets/template/tema-3-4.svg", alt="Texto que describa la imagen").px-lg-2.px-xl-4
              .col-12.col-lg-10.px-0.align-items-center.d-flex
                ol.lista-ol--cuadro.mb-0
                  li.mb-0
                    .lista-ol--cuadro__vineta.mt-1
                      span 2
                    | Pago con tarjeta de crédito o débito.
        .row.mt-3
          .col-12.box-shadow.rounded-20(data-aos="slide-up")
            .row.p-4
              .col-2.d-none.d-lg-flex.align-items-center
                figure
                  img(src="@/assets/template/tema-3-5.svg", alt="Texto que describa la imagen").px-lg-2.px-xl-4
              .col-12.col-lg-10.px-0.align-items-center.d-flex
                ol.lista-ol--cuadro.mb-0
                  li.mb-0
                    .lista-ol--cuadro__vineta.mt-1
                      span 3
                    | Pago por Paypal.
          .row.mt-3
          .col-12.box-shadow.rounded-20(data-aos="slide-up")
            .row.p-4
              .col-2.d-none.d-lg-flex.align-items-center
                figure
                  img(src="@/assets/template/tema-3-6.svg", alt="Texto que describa la imagen").px-lg-2.px-xl-4
              .col-12.col-lg-10.px-0.align-items-center.d-flex
                ol.lista-ol--cuadro.mb-0
                  li.mb-0
                    .lista-ol--cuadro__vineta.mt-1
                      span 4
                    | Pago por el móvil
          .row.mt-3
          .col-12.box-shadow.rounded-20(data-aos="slide-up")
            .row.p-4
              .col-2.d-none.d-lg-flex.align-items-center
                figure
                  img(src="@/assets/template/tema-3-7.svg", alt="Texto que describa la imagen").px-lg-2.px-xl-4
              .col-12.col-lg-10.px-0.align-items-center.d-flex
                ol.lista-ol--cuadro.mb-0
                  li.mb-0
                    .lista-ol--cuadro__vineta.mt-1
                      span 5
                    | Bonos.
          .row.mt-3
          .col-12.box-shadow.rounded-20(data-aos="slide-up")
            .row.p-4
              .col-2.d-none.d-lg-flex.align-items-center
                figure
                  img(src="@/assets/template/tema-3-8.svg", alt="Texto que describa la imagen").px-lg-2.px-xl-4
              .col-12.col-lg-10.px-0.align-items-center.d-flex
                ol.lista-ol--cuadro.mb-0
                  li.mb-0
                    .lista-ol--cuadro__vineta.mt-1
                      span 6
                    | Pagos en línea.
      
      .col-4.d-none.d-lg-flex.align-self-center
        figure
          img(src="@/assets/template/tema-3-2.svg", alt="Texto que describa la imagen").floating
    .row.mt-5.border-gris.rounded-20
      .col-3.px-0.align-self-center.d-none.d-lg-flex
        figure
          img(src="@/assets/template/tema-3-9.png", alt="Texto que describa la imagen")
      .col-12.col-lg-9.px-5.align-self-center
        .h4.pt-4 Tarjetas débito y crédito
        p.mt-4 Las tarjetas de crédito admiten financiar: pagar a plazos y hacer tus compras sin necesidad de desembolsar el total del pago siempre que no se exceda el límite concedido por el banco.
        p.mt-3 De la misma forma las tarjetas de débito el importe se carga directamente en la cuenta del titular y se descuenta directamente del saldo.
    .row.mt-5.border-gris.rounded-20
      .col-3.px-0.align-self-center.d-none.d-lg-flex
        figure
          img(src="@/assets/template/tema-3-10.png", alt="Texto que describa la imagen")
      .col-12.col-lg-9.px-5.align-self-center
        .h4.pt-4 Códigos de pago
        p.mt-4 Es un número de varios dígitos que te aprueba abonar a facturas a través de un medio de pago electrónico como puede ser gana, baloto, su chance y los mismos Retail o un cajero automático. Por lo general el código de pago electrónico se encuentra en el extremo superior derecho de la primera hoja de tu factura.
    .h4.mt-5 Otros medios de pago
    .row.mt-5
      .col-sm-3.col-lg-2.px-4.align-self-center.d-none.d-sm-flex
        figure
          img(src="@/assets/template/tema-3-11.svg", alt="Texto que describa la imagen").floating.px-4
      .col-12.col-sm-9.col-lg-10.px-4.px-sm-0.align-self-center
        p Se entiende por medio de pago al instrumento o bien que accede comprar un producto, contratar servicios o cancelar todo tipo de deudas, hay muchos que son alternativos a los tradicionales. Los conocidos en el Retail son: 
    .row.justify-content-center(data-aos="fade-down").mt-5.text-white
      .col-10.col-lg-4
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.px-0
            figure
              img(src="@/assets/template/tema-3-12.png", alt="Texto que describa la imagen")
            .text.p-lg-3.p-4
              .row.text-center.px-1.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xl-4
                .h4.small-text.mt-sm-3.mt-md-0 Portafolios físicos
                p.mt-3.small-text Es un título que constituye el derecho a pagos periódicos a cambio de entregar, en el momento de su interés, una cantidad de dinero. Dicho título puede ser emitido por el Estado o una empresa, con la finalidad de endeudarse.

      .col-10.col-lg-4
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.px-0
            figure
              img(src="@/assets/template/tema-3-13.png", alt="Texto que describa la imagen")
            .text.p-lg-3.p-4
              .row.text-center.px-1.pt-1.mt-1.mt-md-4.mt-lg-3.mt-xl-4.pt-md-0
                .h4.small-text.mt-1.mt-md-0 Portafolios digitales 
                p.mt-3.small-text Son una forma de recolectar al comprar en una red determinada. Con los mismos se puede adquirir productos como alimentos, viajes, recreación, ropa, calzado, accesorios, entre otros en los Retail aliados o en las tiendas online.
      .col-10.col-lg-4
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.px-0
            figure
              img(src="@/assets/template/tema-3-14.png", alt="Texto que describa la imagen")
            .text.p-lg-3.p-4
              .row.text-center.px-1.pt-1.mt-1.mt-md-4.mt-lg-3.mt-xl-4.pt-md-0
                .h4.small-text.mt-1.mt-md-0 Portafolios digitales 
                p.mt-3.small-text Moneda virtual, contra reembolso, en línea sin necesidad directa de tarjeta, a través de dispositivos móviles (eWallet y contactless)
    p.mt-5 Le invitamos a ver el siguiente contenido que muestra ventajas en el uso de pagos en línea:
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    



</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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

<style lang="sass"></style>
