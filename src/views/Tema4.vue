<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Elementos de la estructura arquitectónica

    .row.justify-content-center
      .col-lg-10(data-aos="flip-down")
        .cajon.color-acento-botones.p-4
          p.mb-0 Los elementos de la estructura arquitectónica son los elementos de diseño del proceso de desarrollo de <em>software</em>. Para empezar se debe indicar que un artefacto es un producto que resulta del mismo proceso de desarrollo y puede ser un documento, un modelo o un elemento en particular.

    separador
    
    #encabezados.titulo-segundo.color-acento-contenido(data-aos="flip-down")
      h2 Diagrama de base de datos

    .row.mb-5(data-aos="flip-down")
      .col-lg-8.mb-5.mb-md-0
        p El diagrama de base de datos se refiere al modelo entidad relación, también llamado modelo conceptual de datos. Fue desarrollado por Peter Chen en 1976 y consiste en una práctica dinámica que se caracteriza por una representación gráfica que incorpora información relativa a los datos y sus respectivas relaciones, usado como una vista general de los datos a implementar y la estructura en la organización.

        p El modelo entidad / relación sirve como guía para el paso siguiente que es la construcción de la base de datos en un sistema gestor de bases de datos.

      .col-lg-3
        img.img-a(src='@/assets/curso/temas/tema_4/img_1.png', alt='Texto que describa la imagen')
    p.mb-5(data-aos="flip-down") El diseño del modelo entidad-relación, corresponde a la segunda fase de la creación de una base de datos, que se realiza una vez se ha recopilado toda la información por parte del cliente. Los elementos básicos de un modelo entidad-relación son: las entidades, las relaciones, los atributos y las cardinalidades, que pueden observarse en la siguiente gráfica, y que se explican seguidamente.



    .row.justify-content-center.mb-5(data-aos="flip-down")
      .col-lg-10
        .titulo-sexto.mb-5.color-acento-contenido(data-aos="flip-down")
          h5 Figura 6
          p.mb-0 
            em Elementos de un modelo de entidad / relación
          
        img.img-a(src='@/assets/curso/temas/tema_4/img_2.svg', alt='Texto que describa la imagen')

    .row.mb-5(data-aos="flip-down")
      .col-lg-6.mb-5.mb-md-0
        img.img-a(src='@/assets/curso/temas/tema_4/img_3.png', alt='Texto que describa la imagen')
      .col-lg-6.mb-5.mb-md-0
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Entidades")
            p Las entidades se representan gráficamente mediante un rectángulo que en el interior lleva el nombre correspondiente. El nombre de la entidad no se debe repetir, cada entidad lleva su nombre.

            p <b>Ejemplos de entidades:</b> profesores, empleados, estudiantes, clientes, proveedores, etc. 

          div(titulo="Relaciones")
            p Las relaciones son las asociaciones que se describen entre dos atributos (campos) de dos tablas para compartir información. Esas respectivas relaciones entre las entidades se representan por medio de un rombo y describiendo en el interior la acción de la relación. 

          div(titulo="Atributos")
            p Una entidad está representada por un grupo de atributos, los cuales son los encargados de describir una entidad específica. Como los atributos se encargan de describir cada una de las características o propiedades de la entidad, se representan por medio de una elipse o un círculo con su nombre correspondiente en el interior.

            p <b>Por ejemplo,</b> la entidad vehículo se puede describir con los atributos marca, modelo, color, placa, número de pasajeros, etc. 

          div(titulo="Cardinalidad")
            p Esta cardinalidad dentro del modelo se representa en los extremos de cada relación. La cardinalidad expresa cuántas entidades de un extremo de la relación están relacionadas con cuántas entidades del otro extremo. Pueden ser “uno a uno”, “uno a varios” o “varios a varios”. 

          div(titulo="Clave en una entidad")
            p Dentro del modelo entidad / relación están representadas:

            ul.lista-ul--color
              li
                i.fas.fa-play.m-2.tam_i.my-0
                | La clave primaria: es aquel atributo único para cada registro. Se representa por medio de una línea continua que subraya el nombre del atributo correspondiente. 
              li
                i.fas.fa-play.m-2.tam_i.my-0
                | La clave foránea: es la encargada de demostrar la respectiva relación que se tiene en dos entidades; se representa marcando una línea subrayada de forma punteada debajo del nombre del atributo - candidato de la relación.

    separador

    .bg_6.p-5
      #encabezados.titulo-segundo.color-acento-contenido(data-aos="flip-down")
        h3 Diagrama de clases

      .row.mb-5(data-aos="flip-down")
        .col-lg-8.mb-5.mb-md-0
          p Antes de iniciar a hablar sobre el diagrama de clases ―que muestra la estructura estática del sistema, sus clases y sus relaciones― se debe revisar qué es una clase y cómo se ve. 

          p.mb-5 Una clase es una descripción de un conjunto de objetos que comparten los mismos atributos, operaciones, relaciones y semántica.

          h4 La siguiente imagen presenta un modelo de una clase.

        .col-lg-4.mb-5.mb-md-0
          img.img-a(src='@/assets/curso/temas/tema_4/img_4.png', alt='Texto que describa la imagen')

      .titulo-sexto.color-acento-contenido(data-aos="flip-down")
        h5 Figura 7
        p.mb-0
          i Modelo de una clase

      .row.justify-content-center.mb-5(data-aos="flip-down")
        .col-lg-5.mb-5.mb-md-0
          img.img-a(src='@/assets/curso/temas/tema_4/img_5.svg', alt='Texto que describa la imagen')
        .col-lg-7.mb-5.mb-md-0
          p Los diagramas de clases son los más utilizados en el modelado de sistemas orientados a objetos. Es un tipo de diagrama estático que describe la estructura de un sistema mostrando sus clases, atributos y las relaciones entre ellas. 

          p Son utilizados durante el proceso de análisis y diseño de los sistemas, donde se crea el diseño conceptual de la información que se manejará en el sistema, los componentes que se encargarán del funcionamiento y la relación entre uno y otro.
          p Describe gráficamente las especificaciones de las clases de <em>software</em> y de las interfaces (por ejemplo, las de Java) en una aplicación.

          p Contiene la siguiente información:

          ul.lista-ul--color
            li
              i.fas.fa-play.m-2.tam_i.my-0
              | Clases, asociaciones y atributos.
            li
              i.fas.fa-play.m-2.tam_i.my-0
              | Interfaces, con sus operaciones y constantes.
            li
              i.fas.fa-play.m-2.tam_i.my-0
              | Métodos
            li
              i.fas.fa-play.m-2.tam_i.my-0
              | Información sobre los tipos de los atributos.
            li
              i.fas.fa-play.m-2.tam_i.my-0
              | Navegabilidad.
            li
              i.fas.fa-play.m-2.tam_i.my-0
              | Dependencias.

      .row.justify-content-center.mb-5(data-aos="flip-down")
        .col-lg-7.mb-5.mb-md-0
          p Para elaborar un diagrama de clases orientado al diseño se debe tener en cuenta lo siguiente:

          ul.lista-ul--color.lista-ul--separador
            li
              i.fas.fa-play.m-2.tam_i.my-0
              | Identifique todas las clases que participan en la solución del #[.mar #[i software.]]

            li
              i.fas.fa-play.m-2.tam_i.my-0
              | Dibújelas en un diagrama de clases.

            li
              i.fas.fa-play.m-2.tam_i.my-0
              | Identifique los atributos provenientes de los conceptos asociados del modelo conceptual.

            li
              i.fas.fa-play.m-2.tam_i.my-0
              | Agregue los nombres de los métodos.

            li
              i.fas.fa-play.m-2.tam_i.my-0
              | Incorpore la información sobre los tipos a los atributos y los métodos.

            li
              i.fas.fa-play.m-2.tam_i.my-0
              | Agregue las asociaciones necesarias para dar soporte a la visibilidad requerida de los atributos.

            li
              i.fas.fa-play.m-2.tam_i.my-0
              | Agregue flechas de navegabilidad a las asociaciones para indicar la dirección de la visibilidad de los atributos.

        .col-lg-5.mb-5.mb-md-0
          img.img-a(src='@/assets/curso/temas/tema_4/img_6.png', alt='Texto que describa la imagen')

    separador

    #encabezados.titulo-segundo.color-acento-contenido(data-aos="flip-down")
      h3 Diagrama de clases

    p.mb-5(data-aos="flip-down") Los datos que componen la clase son:

    .row.mb-5(data-aos="flip-down")
      .col-lg-6.mb-5.mb-md-0
        img.img-a(src='@/assets/curso/temas/tema_4/img_7.png', alt='Texto que describa la imagen')
      .col-lg-6.mb-5.mb-md-0
        LineaTiempoD.color-acento-contenido.especial
          p.text-small(numero="1" titulo="Atributo") Son valores que corresponden a un objeto; como color, material, cantidad, ubicación. Generalmente se conoce como la información detallada del objeto. Suponiendo que el objeto es una persona, sus propiedades serían: nombre, edad, sexo, etc. 

            br
            br
            span.color_txt Tipo: 
            | puede llegar a depender del lenguaje de programación a utilizar (#[i public, protected, private]).

            br
            br
            span.color_txt Valor inicial: 
            | valor que poseerá el atributo al crear un objeto.

            br
            br
            span.color_txt Visibilidad: 
            | está relacionada con el encapsulamiento.

            br
            br
            span.color_txt Multiplicidad: 
            | determina si un atributo debe estar o no y si posee un único valor o una lista de valores.

            br
            br
            span.color_txt 1-> 
            | El atributo debe tener un único valor.
            br
            br
            span.color_txt 0…1-> 
            | El atributo puede o no tener un valor.
            br
            br
            span.color_txt 0…* -> 
            |  El atributo puede tener varios valores o ninguno.
            br
            br
            span.color_txt 1…*-> 
            | El atributo puede tener varios valores, pero debe tener al menos uno.
            br
            br
            span.color_txt * -> 
            | El atributo puede tener varios valores.
            br
            br
            span.color_txt m…n -> 
            | El atributo puede tener entre m y n valores.

          p.text-small(numero="2" titulo="Visibilidad") El encapsulamiento presenta las siguientes ventajas básicas:
            br
            br
            ul.lista-ul--color
              li
                i.fas.fa-play.m-2.tam_i.my-0
                | Se protegen los datos de accesos indebidos.
              li
                i.fas.fa-play.m-2.tam_i.my-0
                | Favorece la modularidad y el mantenimiento.
            | Los atributos de una clase no deberían ser manipulables directamente por el resto de los objetos.

          p.text-small(numero="3" titulo="Niveles de encapsulamiento")
            span.color_txt (-) Privado: 
            | es el más fuerte. Esta parte es totalmente invisible desde fuera de la clase.
            br
            br
            span.color_txt (~) #[i Package]: 
            | solo es visible dentro del mismo #[i package].
            br
            br
            span.color_txt (#) Los atributos / 
            | métodos protegidos están visibles para las clases amigas y para las clases derivadas de la original.
            br
            br
            span.color_txt (+) Los atributos / 
            | métodos públicos son visibles a otras clases.
            
          p.text-small(numero="4" titulo="Método") Una operación (método) es la implementación de un servicio que puede ser requerido a cualquier objeto de la clase para que muestre un comportamiento. Es una abstracción de algo que se puede hacer a un objeto y que es compartido por todos los objetos de la clase.
            br
            br
            | Para cada operación debe especificarse:
            br
            br
            ul.lista-ul--color
              li
                i.fas.fa-play.m-2.tam_i.my-0
                | Tipo retornado: puede llegar a depender del lenguaje de programación a utilizar.
              li
                i.fas.fa-play.m-2.tam_i.my-0
                | Parámetros: especificación del tipo de datos y la información que determina el funcionamiento de la clase.
              li
                i.fas.fa-play.m-2.tam_i.my-0
                | Visibilidad: está relacionada con el encapsulamiento (-, #, +).

    separador

    #encabezados.titulo-segundo.color-acento-contenido(data-aos="flip-down")
      h3 Diagrama de casos de uso

    p.mb-5(data-aos="flip-down") El diagrama de casos de uso se utiliza para modelar todas las funcionalidades del sistema. Se basa en casos de uso y utiliza tres elementos básicos:

    .row.mb-5(data-aos="flip-down")
      .col-lg-6.mb-5.mb-md-0
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul acor_1")
          div(titulo="Actores")
            p Representa los diferentes papeles que una persona u otro sistema pueden tener en la interacción con el sistema en construcción.
          div(titulo="Casos de uso")
            p Es el elemento que representa la funcionalidad que el actor puede realizar con el sistema.
          div(titulo="Relaciones")
            p Son las formas como se asocian los casos de usos, los actores y casos de uso y actores.
      .col-lg-6.mb-5.mb-md-0
        img.img-a(src='@/assets/curso/temas/tema_4/img_8-.svg', alt='Texto que describa la imagen')

    .bg_6.p-5
      ul.mb-5(data-aos="flip-down")
        li
          i.fas.fa-play.play_1.m-1
          i.fas.fa-play.play_1.m-1
          i.fas.fa-play.play_3.m-1
          span.text_span Caso de uso

      .row.mb-5(data-aos="flip-down")
        .col-lg-8.mb-5.mb-md-0
          p Un caso de uso es una secuencia de acciones que ejecuta un actor que dan un resultado de valor y observable ―incluyendo sus variantes―y que el sistema puede realizar.

          p Los casos de uso son  para modelar las funcionalidades del sistema, el qué hace el actor con el sistema y no el cómo. El nombre de un caso de uso debe comenzar con un verbo para especificar que se trata de un proceso. 

          p Los requerimientos funcionales están naturalmente estructurados como casos de uso.

          p ¿Cómo identificar casos de uso? Hay que preguntarse:

          ol.lista-ol--cuadro.lista-ol--separador
            li 
              .lista-ol--cuadro__vineta
                span 1
              | ¿Cuáles son las tareas y responsabilidades de cada actor con el sistema?

            li 
              .lista-ol--cuadro__vineta
                span 2
              | ¿Algún actor creará, almacenará, cambiará, borrará o leerá información del sistema?

            li 
              .lista-ol--cuadro__vineta
                span 3
              | ¿Qué casos de uso crearán, almacenarán, cambiarán, borrarán o leerán información?
        .col-lg-4.mb-5.mb-md-0
          img.img-a(src='@/assets/curso/temas/tema_4/img_9.png', alt='Texto que describa la imagen')

      ul.mb-5(data-aos="flip-down")
        li
          i.fas.fa-play.play_1.m-1
          i.fas.fa-play.play_1.m-1
          i.fas.fa-play.play_3.m-1
          span.text_span Actores

      .row.mb-5(data-aos="flip-down")
        .col-lg-9
          p Especifica un conjunto de roles que los usuarios de los casos de uso representan al interactuar con estos.
          p Un actor puede ser el rol que desempeña una persona o un sistema externo que interactúa con nuestro <em>software</em>.
          p Los actores son los que ejecutan los casos de uso.

          p Para complementar el tema se le invita a ver el siguiente video.

      figure(data-aos="flip-down")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/RuIPx_fWYsU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    separador

    #encabezados.titulo-segundo.color-acento-contenido(data-aos="flip-down")
      h3 Diagrama de componentes

    p(data-aos="flip-down") El diagrama de componentes modela los artefactos físicos o lógicos del sistema, en UML representa los módulos.

    p(data-aos="flip-down") Los componentes encapsulan clases del sistema y por eso se les conoce como subclases, tienen estructura compuesta y define los mismos contenidos de la clase.

    p.mb-5(data-aos="flip-down") La siguiente imagen presenta un ejemplo de un diagrama de componentes de correo electrónico.

    .row.justify-content-center.mb-5(data-aos="flip-down")
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 8
          p.mb-0
            em Ejemplo diagrama de componentes de correo electrónico

    img.img-a.mb-3(data-aos="flip-down")(src='@/assets/curso/temas/tema_4/img_10.svg', alt='Texto que describa la imagen')

    .row.justify-content-center.mb-5(data-aos="flip-down")
      .col-lg-8
        figcaption 
          | Nota. Tomado y adaptado de IONOS (2020).

    h4 API
    .row.mb-5.justify-content-center.align-items-stretch.d-flex(data-aos="flip-down")
      .col-lg-10.h-100.d-none.d-lg-block
        .row.align-items-stretch.justify-content-center.d-flex.mb-0.h-100
          .col-lg-6.d-flex.d-none.d-lg-block.h-100
            .p-0.h-100
              img.img-a(src='@/assets/curso/temas/tema_4/img_11.png', alt='Texto que describa la imagen')
          .col-lg-6.d-flex.d-none.d-lg-block
            .bg_4.p-3.text-small
              .bg_5.p-3.mb-3.mgr_left-1
                p.mb-0 Las API son componentes que permiten que dos <em>software</em> se comuniquen entre sí a través de un protocolo de comunicación; tiene diferentes definiciones y restricciones. Por ejemplo, un <em>software</em> puede crear una API para compartir la información de sus productos a otro servicio de <em>software</em> para su insumo y trabajo.
              p.p-2.mb-0 Su sigla significa interfaz de programación de aplicaciones. En este caso la palabra aplicación hace referencia a cualquier sistema y la interfaz sería el protocolo de comunicación entre dos servicios de dos sistemas.

    
    .row.justify-content-center.d-block.d-lg-none.mb-5(data-aos="flip-down")
      .col-lg-12
        img.img-a.my-0(src='@/assets/curso/temas/tema_4/img_11.png', alt='Texto que describa la imagen')
        .row.mt-0
          .col-lg-12
            .bg_4_1.p-4
              .bg_5.mb-2.p-3
                p.mb-0 Las API son componentes que permiten que dos <em>software</em> se comuniquen entre sí a través de un protocolo de comunicación; tiene diferentes definiciones y restricciones. Por ejemplo, un <em>software</em> puede crear una API para compartir la información de sus productos a otro servicio de <em>software</em> para su insumo y trabajo.
              p.p-2.mb-0 Su sigla significa interfaz de programación de aplicaciones. En este caso la palabra aplicación hace referencia a cualquier sistema y la interfaz sería el protocolo de comunicación entre dos servicios de dos sistemas.

    .row.justify-content-center.mb-5(data-aos="flip-down")
      .col-lg-7.mb-5.mb-md-0
        p La arquitectura de una API normalmente es cliente – servidor. La solicitud es enviada por el cliente hacia la API que se encuentra en el servidor y puede funcionar de cuatro formas diferentes:

        ul.lista-ul--color.lista-ul--separador
          li
            i.fas.fa-play.m-2.tam_i.my-0
            | API SOAP
          li
            i.fas.fa-play.m-2.tam_i.my-0
            | API RPC
          li
            i.fas.fa-play.m-2.tam_i.my-0
            | API WebSocket
          li
            i.fas.fa-play.m-2.tam_i.my-0
            | API Rest
          li

        p Actualmente en la industria las API están cargadas en la nube, por ejemplo, en la nube de Amazon, Azure o cualquier otro servicio en donde el usuario hace las peticiones. Tenerlas en la nube hace que la empresa solo se preocupe por el desarrollo de la API y la comunicación, la seguridad y el control de tráfico.

      .col-lg-5.mb-5.mb-md-0
        img.img-a(src='@/assets/curso/temas/tema_4/img_12.png', alt='Texto que describa la imagen')

    .row.justify-content-center.mb-5(data-aos="flip-down")
      .col-lg-10
        .cajon.color-acento-botones.p-4
          p Los diagramas UML se caracterizan porque permiten una comunicación fluida con el cliente, comunican visualmente las ideas y, sobre todo, son precisos y eliminan la ambigüedad.

          p.mb-0 Existen diagramas que modelan la estructura y otros que modelan el comportamiento del <em>software</em>. A través de este modelamiento se comunican las ideas de forma certera; el cliente aprueba y se puede avanzar de forma correcta en el proyecto.

    .bg_7.p-5
      .bg_8.p-4
        p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.
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
