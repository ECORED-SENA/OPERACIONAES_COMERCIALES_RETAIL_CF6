<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mt-5 El cajero es una figura fundamental en el proceso de compra, por lo que el objetivo de toda organización debe ser desarrollar las competencias técnicas, humanas y personales para dicho puesto. Esta posición es de las de mayor representatividad en el <em>Retail</em>; por lo cual, conoceremos sobre los recursos que tiene a disponibilidad el cajero, a través del siguiente video:
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/essRRulWTx0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
