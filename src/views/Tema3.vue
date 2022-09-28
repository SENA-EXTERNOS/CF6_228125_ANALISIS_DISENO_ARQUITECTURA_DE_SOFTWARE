<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Elementos del modelo objetos

    .row.align-items-stretch.justify-content-center.d-flex(data-aos="flip-down")
      .col-lg-8.d-flex
        .row
          .col-lg-12
            .bg_5.p-5
              p Cuando se habla del modelo de objetos se hace referencia a los modelos del paradigma de programación orientado a objetos; es decir, los conceptos, sintaxis, fundamentos y pilares que lo componen.
              p El paradigma de programación orientado a objetos es un estándar en la industria del #[em software] y es implementado en diferentes lenguajes de programación como Java, Net, PHP, C#, entre otros. La programación orientada a objetos se centra en las clases y en los objetos como su core de programación.
      .col-lg-3.d-flex
        .bg_3.p-2
          img.img-a(src='@/assets/curso/temas/tema_3/img_1.png', alt='Texto que describa la imagen')

    separador

    #encabezados.titulo-segundo.color-acento-contenido(data-aos="flip-down")
      h3 Objeto

    p.mb-5(data-aos="flip-down") Primero se debe definir qué es un objeto. En diferentes libros hay definiciones de este concepto, pero se dirá lo siguiente:

    .row(data-aos="flip-down")
      .col-lg-6.mb-5.mb-md-0
        .cajon.color-acento-botones.p-4.mb-4
          p.mb-0 Un objeto es una entidad del mundo real según el contexto - problema que se esté trabajando. Tiene características (atributos) y comportamientos (métodos) específicos. 
        p Por ejemplo, si se está trabajando un <em>software</em> para una universidad, el universo de dominio del problema trae varios objetos: los docentes, los estudiantes, los administrativos, etc.

        p Si se analiza, el estudiante tiene características que lo definen; lo que se llama atributos: código, nombre, dirección, número de documento, teléfono, etc.; y tendrá un comportamiento específico dentro del problema, como ver notas, matricularse, materias, etc.
      .col-lg-6.mb-5.mb-md-0
        img.img-d(src='@/assets/curso/temas/tema_3/img_2.png', alt='Texto que describa la imagen')

    separador

    .bg_6.p-4
      #encabezados.titulo-segundo.color-acento-contenido(data-aos="flip-down")
        h3 Clase
      .cajon-b.color-acento-botones.p-4.mb-0(data-aos="flip-down")
        p.mb-0 Después de tener clara la idea de un objeto se debe revisar qué es una clase en este paradigma. La clase es como una plantilla. Si se hace una analogía, es como el plano de una casa, de ese plano se pueden crear muchas casas. En este caso, se podrían crear muchos objetos con ese plano llamado clase.
      .bloque-texto-b.color-acento-contenido.mb-5.mt-0
        .bloque-texto-b__texto.mb-2.p-4
          p La clase es una entidad que reúne los objetos con atributos y métodos en común, y de la cual van a crearse los objetos. Un objeto es una instancia de una clase: vive y muere en memoria, en tiempo de ejecución del programa o <em>software</em>.
          br
          br
          p Más adelante se revisará cómo es una clase visualmente en los diagramas UML que se realizan en el diseño del <em>software</em>.

      .row.justify-content-center.mb-0
        .col-lg-10(data-aos="flip-down")
          .tarjeta.color-primario.rec_bg-1.p-4.mb-5
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/tema_3/img_3.png")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0.text-white 
                    h3.mb-1 Pilares de la programación orientada a objetos
                    p.text-small A continuación se muestran los pilares de la programación orientada a objetos: 
                  .col-sm-auto
                    a.boton.color-acento-botones(:href="obtenerLink('downloads/Infografia_pilares_de_la_programacion_orientada_a_objetos.pdf')" target="_blank")
                      span Descargar
                      i.fas.fa-file-download


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
