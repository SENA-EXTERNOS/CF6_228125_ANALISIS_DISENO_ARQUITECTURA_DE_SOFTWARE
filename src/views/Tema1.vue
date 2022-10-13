<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Metodologías de desarrollo de <em>software</em> tradicionales

    .row.justify-content-center.mb-5
      .col-lg-11
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(data-aos="fade-down-right")(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema_1/img_1.png')})`}"
          )
          .bloque-texto-g__texto.p-4(data-aos="fade-down-left")
            p.mb-0 Antes de hablar de metodologías de desarrollo de <em>software</em> tradicionales, conozca qué es metodología. Una metodología es un marco de trabajo que se puede aplicar como guía para el desarrollo de las actividades que se van a llevar a cabo. Por tanto, una metodología de desarrollo de <em>software</em> especifica las tareas que se deben seguir, los artefactos que se tienen que construir y las relaciones de los objetos.

    .row.mb-5.justify-content-evenly.align-items-center
      .col-lg-7(data-aos="flip-left")
        p Desarrollar un <em>software</em> de calidad depende de un proceso que contiene actividades y etapas donde la elección de la metodología a seguir genera un impacto trascendental en el éxito del proyecto.

        p Las metodologías de <em>software</em> tradicionales son aquellas que siguen un proceso lineal donde cada una de las etapas del proceso debe ejecutarse secuencialmente, seguida una de la otra. Estas metodologías se caracterizan por ser rígidas; al tener que definir todos los requerimientos desde el inicio del proyecto, no son flexibles ni permiten los cambios.

      .col-lg-5(data-aos="flip-right")
        img.img-a(src='@/assets/curso/temas/tema_1/img_2.png', alt='Texto que describa la imagen')

  
    .row.justify-content-center.fondo-1
      .col-lg-12(data-aos="zoom-in-left")
        separador
        
        #encabezados.titulo-segundo.color-acento-contenido
          h2 Tipos y características

        p.mb-5 Los tipos de metodologías de <em>software</em> tradicionales son:

        ul.mb-5
          li
            i.fas.fa-play.play_1.m-1
            i.fas.fa-play.play_1.m-1
            i.fas.fa-play.play_3.m-1
            span.text_span Cascada

        p Esta metodología de <em>software</em> divide el proceso de desarrollo en etapas que se organizan y recorren de arriba a abajo en estricto orden; de ahí se deriva su nombre.

        p.mb-5 El proceso incluye una serie de etapas, como se presenta en la siguiente figura.

        .row.mb-5
          .col-lg-6.mb-5
            .titulo-sexto.color-acento-contenido
              h5 Figura 1. 
              | #[i Modelo de cascada]
            .row.justify-content-center
              .col-lg-10
                img.img-a(src='@/assets/curso/temas/tema_1/img_4.svg', alt='Texto que describa la imagen')
          .col-lg-5.mb-5
            img.img-a(src='@/assets/curso/temas/tema_1/img_5.png', alt='Texto que describa la imagen')
  

    .row.mb-5.justify-content-center
      .col-lg-8(data-aos="zoom-in-left")
        h5 Amplíe la información sobre cada una de las fases o etapas. 

    PasosA.color-primario.mb-5(tipo="n")(data-aos="zoom-in-left")
      .row.align-items-center
        .col-md-7.mb-4.mb-md-0
          h3 Definición del <em>software</em>
          p En esta fase se define el producto desde una visión a alto nivel con los diferentes aspectos importantes que se deben tener en cuenta.
        .col-md-5
          figure
            img.img-a(src='@/assets/curso/temas/tema_1/img_6.png', alt='Texto que describa la imagen')

      .row
        .col-md-5.mb-4.mb-md-0
          figure
            img.img-a(src='@/assets/curso/temas/tema_1/img_7.png', alt='Texto que describa la imagen')
        .col-md-7.text-left
          h3 Análisis de requerimientos
          p Esta fase comprende las tareas de entender el negocio en su totalidad, de conocer el producto que se quiere desarrollar, sus funciones, sus características, quiénes lo usarán y las relaciones con los sistemas externos.
          

      .row
        .col-md-7.mb-4.mb-md-0
          h3 Diseño de la arquitectura
          p Se realiza el diseño de la arquitectura de la solución que se implementará.
      
        .col-md-5
          figure
            img.img-a(src='@/assets/curso/temas/tema_1/img_8.png', alt='Texto que describa la imagen')
      .row
        .col-md-5.mb-4.mb-md-0
          figure
            img.img-a(src='@/assets/curso/temas/tema_1/img_9.png', alt='Texto que describa la imagen')
        .col-md-7
          h3 Codificación.
          p En esta etapa se ejecuta el código de la aplicación de acuerdo a lo estipulado en las fases anteriores para cumplir todo lo pactado.
      
      .row
        .col-md-7.mb-4.mb-md-0
          h3 Pruebas
          p Fase donde se asegura la calidad del producto de <em>software</em>, se revisa que se satisfagan los requerimientos y se reduzcan los riesgos en la implementación en el entorno real.
      
        .col-md-5
          figure
            img.img-a(src='@/assets/curso/temas/tema_1/img_10.png', alt='Texto que describa la imagen')  

    .row.justify-content-center.mb-5.d-none.d-lg-block
      .col-lg-12
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.m-left(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema_1/img_11.png')})`}"
          )
          .bloque-texto-g__texto.txt-g.p-4.bloque-g-txt
            p.mb-0  Para poder aplicar esta metodología es necesario que los requerimientos del cliente sean conocidos de antemano o se tengan claros, también se recomienda que sea para un número reducido de requerimientos, teniendo presente que las pruebas se hacen cuando se encuentre desarrollado todo el producto <em>software</em>.

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.d-block.d-lg-none.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema_1/img_11.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0  Para poder aplicar esta metodología es necesario que los requerimientos del cliente sean conocidos de antemano o se tengan claros, también se recomienda que sea para un número reducido de requerimientos, teniendo presente que las pruebas se hacen cuando se encuentre desarrollado todo el producto <em>software</em>.

    .fondo-2
      .row.mb-5(data-aos="zoom-in-left")
        .col-lg-5
          img.img-a(src='@/assets/curso/temas/tema_1/img_12.png', alt='Texto que describa la imagen')

        .col-lg-7
          p Una vez plasmados los requisitos quedan en un estado congelados, lo que dificulta que se cambien o que se incorpore otro requisito al producto; un ejemplo de esto sería que al final de todo el desarrollo, cuando se está probando la calidad del producto en la fase de pruebas, el cliente solicite un nuevo requerimiento por un cambio en su negocio o simplemente porque se le había olvidado. La magnitud de este impacto en el proyecto genera caos porque la fase de requisitos es prácticamente la primera, lo que hace imposible satisfacer esta nueva necesidad.

          p Las fases no se pueden solapar, solo se inicia una fase cuando la etapa o fase anterior esté totalmente finalizada y probada. Tampoco son aconsejables el reproceso o la revisión de fases anteriores.

      ul.mb-5
        li
          i.fas.fa-play.play_1.m-1
          i.fas.fa-play.play_1.m-1
          i.fas.fa-play.play_3.m-1
          span.text_span Prototipado

      p El prototipado es una metodología de desarrollo iterativa en la cual se desarrolla una maqueta de la solución. Este prototipo se produce con el fin de mostrarle al cliente si se entendieron los requerimientos iniciales a alto nivel que se hicieron, y si van por buen camino, es decir, se hace el refinamiento junto al cliente.
      p En este proceso, el cliente estará probando cada uno de los prototipos que se desarrollen desde el equipo de proyecto y emitirá su juicio valorativo, de acuerdo con él, el equipo desecha el prototipo la gran mayoría de veces, o lo termina para evolucionando.

      p El objetivo principal en esta metodología es poder disminuir el riesgo asociado a los requerimientos y su falta de comprensión.

      p.mb-5 Gráficamente, el modelo se presenta así:

    .row.mb-5.justify-content-evenly.align-items-center(data-aos="zoom-in-left")
      .col-lg-6.mb-5
        .titulo-sexto.color-acento-contenido
          h5 Figura 2. 
          | #[i Modelo de prototipado]
        img.img-a(src='@/assets/curso/temas/tema_1/img_14.svg', alt='Texto que describa la imagen')
      .col-lg-5.mb-5
        .cajon.color-acento-botones.p-4.mb-4
          p.mb-0 Una de las características que tiene esta metodología, la cual puede ser desfavorable, es que al presentarle un prototipo funcional al cliente, este tenga la idea errada de que ya está listo el <em>software</em> y solo falten detalles menores.

        p El usuario / cliente al estar involucrado en el proceso de desarrollo aumenta la aceptación del producto final que será implementado. 

        p Es importante en esta metodología un entendimiento esencial del problema del negocio para evitar generar prototipos y así solucionar problemas incorrectos que provocan gasto de esfuerzo y tiempo de proyecto en prototipos sin fundamento.

    ul.mb-5(data-aos="zoom-in-left")
      li
        i.fas.fa-play.play_1.m-1
        i.fas.fa-play.play_1.m-1
        i.fas.fa-play.play_3.m-1
        span.text_span Espiral

    .cajon-b.color-acento-botones.p-3.mb-5(data-aos="zoom-in-left")
      p.mb-0 Esta metodología tiene la combinación de los modelos iterativos en su esencia, como el prototipado y el cascada, por lo tanto, es una metodología de carácter incremental.
        br
        br
        | El modelo cascada ofrece un proceso ordenado estricta y estructuralmente para el proyecto, pero las demandas de la industria de tiempos acelerados o reducidos hace que sus fases sean inapropiadas. Este modelo se basa en ese orden de la cascada volviéndolo iterativo o incremental, teniendo presente que, al ser evolutivo, se aprovechan mejor las funcionalidades del equipo.

    .row.mb-5.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-5.mb-5.mb-lg-0
        img.img-a(src='@/assets/curso/temas/tema_1/img_15.png', alt='Texto que describa la imagen')
      .col-lg-7
        .bloque-texto-b.color-acento-contenido
          .bloque-texto-b__texto.mb-2.p-2
            p En este modelo se divide el <em>software</em> en mini proyectos que evoluciona cada uno de acuerdo a las fases que sigue el espiral, comenzando con la comunicación con el cliente para determinar los requisitos iniciales; luego se pasa a la planificación de esos requerimientos donde se incluye la estimación del coste en tiempo y recursos, continuando con el análisis de riesgo, luego empieza la ingeniería del proyecto donde se diseñan las posibles alternativas de prototipo, se presentan al cliente para su evaluación, después se construye, se entrega y se hace la retroalimentación; siempre de la mano del cliente. Si es aceptado, o se va por buen camino, se sigue evolucionando; de lo contrario, se descarta y se comienza de cero nuevamente.

    h4.mb-5 La siguiente imagen presenta una explicación gráfica de este proceso.

    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-left")
      h5 Figura 3. 
      | #[i Modelo espiral]
    img.img-a.mb-4(data-aos="zoom-in-left")(src='@/assets/curso/temas/tema_1/img_16.svg', alt='Texto que describa la imagen')
    .row.justify-content-center.mb-5
      .col-lg-8
        figcaption.bg_1  Nota: tomado y adaptado de Deloitte (2020).


    .row.align-items-stretch.justify-content-center.d-flex.mb-5(data-aos="zoom-in-left")
      .col-lg-8.d-flex
        .row.align-items-center
          .col-lg-12
            .bg_2.p-5
              P La metodología o modelo en espiral es un enfoque de desarrollo de <em>software</em> que surgió como respuesta a los inconvenientes presentados por el modelo cascada. El espiral basa todas sus fases, como se ve en el gráfico, a través de espirales que se van repitiendo hasta entregar un producto final.

              p Este modelo es global y se usa junto con otros modelos de desarrollo de <em>software</em> tanto tradicionales como ágiles.
      .col-lg-4.d-flex
        .bg_3.p-4
          img.img-a(src='@/assets/curso/temas/tema_1/img_17.png', alt='Texto que describa la imagen')

    .row.mb-5(data-aos="zoom-in-left")
      .col-lg-5
        img.img-a(src='@/assets/curso/temas/tema_1/img_18.png', alt='Texto que describa la imagen')
      .col-lg-7
        p La característica principal es el control de riesgos que se puede llevar en este modelo porque, como es evolutivo, a medida que se avanza los riesgos se reducen.

        p Permite una estimación fácil debido a que se hace con mini proyectos donde los requisitos son muy pocos. También, como se evoluciona, hay espacio para atender las retroalimentaciones del cliente.

    ul.mb-5(data-aos="zoom-in-left")
      li
        i.fas.fa-play.play_1.m-1
        i.fas.fa-play.play_1.m-1
        i.fas.fa-play.play_3.m-1
        span.text_span Incremental

    p(data-aos="zoom-in-left") Esta metodología es otro modelo que tiene en cuenta la evolución del producto en el tiempo, iterando la funcionalidad del proyecto. La base fundamental de este modelo es el cascada que se irá iterando repetidamente e incrementando en cada iteración la funcionalidad del producto hasta completar así todos los requerimientos del proyecto.

    p.mb-5(data-aos="zoom-in-left") Es bueno recalcar que de esta metodología, en cada iteración, se obtiene un producto operacional y no un prototipo como en el modelo de prototipado. El siguiente gráfico presenta el esquema del modelo.

    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-left")
      h5 Figura 4. 
      | #[i Modelo incremental]
    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-lg-10
        img.img-a(src='@/assets/curso/temas/tema_1/img_19.svg', alt='Texto que describa la imagen')

    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-lg-11
        .cajon.color-primario.p-4.mb-4
          p Una de las características de este modelo de desarrollo es que el <em>software</em> se puede empezar a utilizar incluso antes de que se complete totalmente y, en general, es mucho más flexible que las demás metodologías.
          
          p.mb-0 Es importante tener claro que cada iteración debe dar como resultado un producto funcional; encargarse de implementar esto puede requerir de un trabajo extra en cada iteración, lo cual es un tiempo y un costo representativos y adicionales al proyecto.

    ul.mb-5(data-aos="zoom-in-left")
      li
        i.fas.fa-play.play_1.m-1
        i.fas.fa-play.play_1.m-1
        i.fas.fa-play.play_3.m-1
        span.text_span RDA

    .row.mb-5.justify-content-center(data-aos="zoom-in-left")
      .col-lg-5.mb-5.mb-lg-0
        img.img-a(src='@/assets/curso/temas/tema_1/img_20.png', alt='Texto que describa la imagen')
      .col-lg-7
        p Esta metodología, llamada así por sus siglas (RDA – Desarrollo Rápido de Aplicaciones) y también RAD por su origen en inglés (#[i Rapid Application Development]), consiste en tener un desarrollo de <em>software</em> lineal secuencial como se estudió en el modelo en cascada, pero llevándolo a un proceso en paralelo con distintos equipos de trabajo.

        p Estos equipos serán responsables ―cada uno― de una parte de los requerimientos del proyecto. El objetivo de esta metodología es tener en un periodo corto el producto final completo.

        p Este modelo se caracteriza por sus equipos formados por más o menos seis personas, dentro de las cuales se incluyen desarrolladores y usuarios del sistema de tiempo completo, así como las demás personas involucradas de acuerdo con los requisitos.

    

    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-lg-7.mb-5.mb-md-0
        h4.mb-5 El esquema de fases o etapas para esta metodología es el siguiente:
        LineaTiempoD.color-acento-contenido.especial
          p.text-small(numero="1" titulo="Modelado de gestión") En esta etapa se modela la información que gestiona el negocio, la información que el propio negocio genera y el responsable de esta, a dónde se lleva y el responsable de su procesamiento.
          
          p.text-small(numero="2" titulo="Modelado de datos") En este proceso de modelado se deben tener presente los objetos de datos que el <em>software</em> va a manejar, cuáles son los atributos de esos datos, cómo se componen y se relacionan entre sí y cuáles procesos de negocio impactan. Lo que se busca como objetivo final es modelar una abstracción muy clara del dominio total de los datos relevantes al problema o producto en cuestión.
          
          p.text-small(numero="3" titulo="Modelado de proceso") Lo que busca este modelado es diseñar el proceso de manipulación de los datos del paso anterior, cómo se agregan, eliminan, modifican o se recuperan.
          
          p.text-small(numero="4" titulo="Generación de aplicaciones") En esta etapa es donde se desarrolla el código, de acuerdo con el lenguaje de programación seleccionado previamente en los requerimientos, y se tratan de reutilizar, siempre que se pueda, los componentes existentes de los procesos anteriores.

          p.text-small(numero="5" titulo="Prueba y entrega") Fase donde se realizan las pruebas de lo desarrollado; sin embargo, si se reutilizan componentes, se supone que ya fueron probados en los procesos anteriores y solo falta probar la integración con los nuevos componentes.
      .col-lg-5.mb-5
        img.img-a(src='@/assets/curso/temas/tema_1/img_21.png', alt='Texto que describa la imagen')

    .row.align-items-evenly.justify-content-center.d-flex.mb-0(data-aos="zoom-in-left")
      .col-lg-5.d-flex.d-none.d-lg-block
        .bg_4.p-5
          img.img-b(src='@/assets/curso/temas/tema_1/img_22.png', alt='Texto que describa la imagen')
      .col-lg-7.d-flex.d-none.d-lg-block
        .bg_3.p-4
          .bg_5.p-4.mb-4.mgr_left
            p #[strong Tenga en cuenta:] las etapas anteriores se pueden modificar o variar según los libros, el autor o la página web consultada.
          p La característica más importante es que se necesita involucrar al cliente. Esta cooperación es necesaria para resolver dudas y poder avanzar.
          p.mb-0 También se requiere un gran volumen de recursos para poder realizar el trabajo en varios equipos de manera simultánea, además, se requiere que el <em>software</em> a desarrollar pueda ser modularizado.

    .row.justify-content-center.d-block.d-lg-none(data-aos="zoom-in-left")
      .col-lg-12
        .row
          .col-lg-12.bg_3_1.p-5
            .bg_5.p-4.mb-3
              p #[strong Tenga en cuenta:] las etapas anteriores se pueden modificar o variar según los libros, el autor o la página web consultada.
            p La característica más importante es que se necesita involucrar al cliente. Esta cooperación es necesaria para resolver dudas y poder avanzar.
            p.mb-3 También se requiere un gran volumen de recursos para poder realizar el trabajo en varios equipos de manera simultánea, además, se requiere que el <em>software</em> a desarrollar pueda ser modularizado.
        .bg_4_1.p-5
          img.img-a(src='@/assets/curso/temas/tema_1/img_22.png', alt='Texto que describa la imagen')




</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
