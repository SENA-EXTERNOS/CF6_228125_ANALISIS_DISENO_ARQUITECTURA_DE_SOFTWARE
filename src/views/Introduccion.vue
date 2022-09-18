<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción


    p.mb-5(data-aos="zoom-in-down") Bienvenido a este componente formativo, donde el contenido a estudiar es muy importante para gestar las buenas prácticas de diseño de un producto <em>software</em>; por eso, se le invita a revisar ―antes de empezar― el video de introducción, así tendrá más claridad sobre la temática que estudiará. 

    figure.mb-5(data-aos="zoom-in-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
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
