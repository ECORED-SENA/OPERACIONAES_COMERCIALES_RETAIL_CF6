<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Normativa del recaudo de caja
    .row.mt-5
      .col-12.col-lg-9
        p La necesidad de control, en los aspectos de recepción, custodia y despacho de bienes financieros en el Retail, han hecho sentir la necesidad de transformar procedimientos destinados a facilitar el cumplimiento con las normas de recaudo en la caja, así como la existencia de recursos físicos, materiales y humanos.
        .h4.mt-5 Controles de seguridad ambiental
        .row.mt-4
          .col-4.col-lg-3.align-self-center
            figure
              img(src="@/assets/template/tema-4-2.svg", alt="Texto que describa la imagen").floating.px-4.px-xl-5
          .col-8.col-lg-9.align-self-center
            p Son aquellos registros procedimentales, administrativos, financieros y/o documentales que instauran las reglas a seguir para la protección del ambiente en el Retail.
      .col-3.d-none.d-lg-flex.px-0.align-self-center
        figure
          img(src="@/assets/template/tema-4-1.svg", alt="Texto que describa la imagen").floating
    .row.mt-5
      .col-12.bg-rojo-claro.p-5
        .row
          .col-12.col-lg-8.align-self-center
            .h4 Riesgos
            p.mt-5 Citamos riesgo a la proximidad o evento de que suceda un desgaste o daño y sus posibles resultados. Este deterioro puede afectar a una persona o grupo y es el resultado de un suceso o una acción. Los riesgos se dan tanto en ámbitos domésticos como laborales, sociales, entre otros.
            .cajon.color-primario.p-4.mt-4.bg-azul-claro
              p El riesgo se mide asumiendo una determinada vulnerabilidad frente a cada tipo de peligro. Si bien no siempre se hace, debe distinguirse adecuadamente entre peligrosidad, vulnerable y riesgo.
          .col-4.offset-4.offset-lg-0.mt-3.mt-lg-0.align-self-center
            figure.px-xl-4
              img(src="@/assets/template/tema-4-3.svg", alt="Texto que describa la imagen").floating.px-lg-5
    .titulo-segundo.mt-5.color-acento-contenido
      #t_4_1.h2 4.1  Seguridad y salud en el trabajo 
    .row.mt-5
      .col-sm-3.col-lg-2.px-4.align-self-center.d-none.d-sm-flex
        figure
          img(src="@/assets/template/tema-4-4.svg", alt="Texto que describa la imagen").floating.px-4
      .col-12.col-sm-9.col-lg-10.px-4.px-sm-0.align-self-center
        p Determinada como aquella conducta que trata de la prevención de las lesiones y enfermedades causadas por las condiciones de trabajo, y de la protección y promoción de la salud de los trabajadores.
        p.mt-3 Veamos más sobre la seguridad y salud en el trabajo, a través del proceso mediante el cual se unifica todas las funciones de esta área, en un sistema de gestión:
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row
      .col-10.offset-1
        .tarjeta.color-acento-contenido.p-3.mt-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2.d-none.d-lg-flex
              figure.px-2
                img(src="@/assets/template/tema-4-5.svg").px-2.px-xl-4
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Cuida tu salud
                  p.text-small.text-amarillo Video ilustrativo: en él mismo podrá profundizar la información. ¡Consúltalo!  
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Enlace
                    i.fas.fa-link
    separador.mt-3
    
    .titulo-segundo.mt-5.color-acento-contenido
      #t_4_2.h2 4.2  Leyes de protección de datos 
    .row.mt-5
      .col-sm-3.col-lg-2.px-4.align-self-center.d-none.d-sm-flex
        figure
          img(src="@/assets/template/tema-4-6.svg", alt="Texto que describa la imagen").floating.px-4
      .col-12.col-sm-9.col-lg-10.px-4.px-sm-0.align-self-center
        p Cuando hablamos de datos personales nos referimos a toda aquella información asociada a una persona y que permite su identificación. Las leyes de protección de datos permite proteger dicha información como veremos a continuación: 
    .row.mt-4
      .col-12.p-5.fondo-img-2.text-white.rounded-15
        .h4 Leyes de protección de datos
        .row.mt-5
          .col-12.col-lg-8
            p Datos personales, toda aquella información asociada a una persona y que permita su identificación, como: 
            .row.mt-4
              .col-4.bg-blanco.px-5.rounded-20.w-31
                figure.mt-3.px-xl-4
                  img(src="@/assets/template/tema-4-8.svg", alt="Texto que describa la imagen")
                .h4.mt-3.text-morado.pb-4.text-center Documento de identidad
              .col-4.bg-blanco.px-5.rounded-20.ml-3.w-31.mt-3.mt-sm-0          
                figure.mt-3.px-xl-4
                  img(src="@/assets/template/tema-4-9.svg", alt="Texto que describa la imagen").px-1
                .h4.mt-3.text-morado.pb-4.text-center Lugar de nacimiento  
              .col-4.bg-blanco.px-5.rounded-20.ml-md-3.w-31.mt-3.mt-md-0         
                figure.mt-3.px-xl-4
                  img(src="@/assets/template/tema-4-10.svg", alt="Texto que describa la imagen").px-1
                .h4.mt-3.text-morado.pb-4.text-center Estado civil  
              .col-4.bg-blanco.px-5.rounded-20.w-31.ml-3.ml-md-0.mt-3
                figure.mt-3.px-xl-4
                  img(src="@/assets/template/tema-4-11.svg", alt="Texto que describa la imagen")
                .h4.mt-3.text-morado.pb-4.text-center Edad
              .col-4.bg-blanco.px-5.rounded-20.ml-md-3.w-31.mt-3             
                figure.mt-3.px-xl-4
                  img(src="@/assets/template/tema-4-12.svg", alt="Texto que describa la imagen").px-1
                .h4.mt-3.text-morado.pb-4.text-center Lugar de residencia 
              .col-4.bg-blanco.px-5.rounded-20.ml-3.w-31.mt-3             
                figure.mt-3.px-xl-4
                  img(src="@/assets/template/tema-4-13.svg", alt="Texto que describa la imagen").px-1
                .h4.mt-3.text-morado.pb-4.text-center Trayectoria académica, laboral.

          .col-4.d-none.d-lg-flex
            figure
              img(src="@/assets/template/tema-4-7.svg", alt="Texto que describa la imagen").floating
        p.mt-4 Existe también información más sensible como su estado de salud, sus características físicas, ideología política, vida sexual, entre otros. Es muy común en los Retail, por estrategia de Mercadeo, solicitar esta información, para el desarrollo de  estrategias de gusto por marcas, productos, olores, empaques, entre otros.
    .row.mt-4
      .col-10.col-lg-8.offset-1.offset-lg-2
        .cajon.color-primario.p-4.mt-4.bg-azul-claro
              p Para toda esta información se debe solicitar la autorización al cliente comprador, ya que la protección de datos trata principalmente de encontrar un difícil equilibrio entre aquello de nosotros que queremos mantener en un ámbito íntimo o privado y aquello que deseamos que sea conocido públicamente. 


</template>

<script>
export default {
  name: 'Tema4',
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

<style lang="sass">
@media (max-width:576px)
  .w-31
    width: 55% !important
  .ml-3
    margin-left: 0px !important
  .col-4.bg-blanco
    margin-left: 21% !important
@media (max-width:768px)
  .w-31
    width: 47%

@media (min-width:768px)
  .ml-md-3
    margin-left: 1rem !important
  .ml-md-0
    margin-left: 0px !important
</style>
