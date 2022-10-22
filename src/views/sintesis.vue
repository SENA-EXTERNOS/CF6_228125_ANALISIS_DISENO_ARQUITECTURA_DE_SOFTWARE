<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-5.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.color-adicional-1.mb-5
          h5 Desarrollo de aplicaciones web <em>full stack</em>
          br
          | Síntesis: análisis, diseño y arquitectura de <em>software</em>
      .col-lg-2
        img.img-a(src="@/assets/curso/temas/img_sin.png", alt="alt")

    p.mb-5 En la siguiente síntesis tendrá una mirada resumida de su ruta de conocimiento a través de este componente.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      

</template>

<script>
export default {
  name: 'Sintesis',
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
