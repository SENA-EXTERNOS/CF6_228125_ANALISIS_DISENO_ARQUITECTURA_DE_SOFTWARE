<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Metodologías de desarrollo de <em>software</em> ágiles

    p(data-aos="flip-down") Las metodologías de desarrollo de <em>software</em> ágiles tomaron mayor auge en el año 2001, pero se venían revisando y concretando desde los años noventa. En este nuevo siglo tuvo lugar una reunión de representantes de los modelos ágiles que dio origen a lo que hoy en día se conoce como el manifiesto ágil, donde se encuentra plasmado el espíritu de estas metodologías.

    p.mb-5(data-aos="flip-down") Una parte del Manifiesto por el Desarrollo Ágil de <em>Software</em>, dice:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-5.mb-md-0(data-aos="zoom-in-right")
        img.img-a(src='@/assets/curso/temas/tema_2/img_1.png', alt='Texto que describa la imagen')
      .col-lg-6(data-aos="zoom-in-left")
        .bloque-texto-e.color-secundario.bg_6.p-4
          .bloque-texto-e__texto
            i.fas.fa-quote-left
            br
            p.mb-3 Estamos descubriendo formas mejores de desarrollar <em>software</em> tanto por nuestra propia experiencia como ayudando a terceros. A través de este trabajo hemos aprendido a valorar:
            br
            br
            ul.lista-ul--color
              li
                i.fas.fa-play.m-2.tam_i.my-0
                |Individuos e interacciones sobre procesos y herramientas.
              li 
                i.fas.fa-play.m-2.tam_i.my-0 
                span <em>Software</em> funcionando sobre documentación extensiva.
              li 
                i.fas.fa-play.m-2.tam_i.my-0
                | Colaboración con el cliente sobre negociación contractual.
              li 
                i.fas.fa-play.m-2.tam_i.my-0
                | Respuesta ante el cambio sobre seguir en un plan.

            br
            p Esto es, aunque valoramos los elementos de la derecha, valoramos más los de la izquierda.
            
          .row.align-items-end
            .col
              .bloque-texto-e__autor 
                .h5.mb-0 (Beck, K., et al. 2001)
                br
                i.fas.fa-quote-right
        

    .row.justify-content-center.mb-5
      .col-lg-11
        .cajon.color-acento-botones.p-4.mb-4(data-aos="flip-down")
          p Como se pudo ver en el tema anterior, las metodologías tradicionales son estrictas y rígidas; las ágiles, en cambio, buscan la flexibilidad en el proceso, tratando de llegar a un equilibrio entre restricciones y el libre desarrollo.
          
          p.mb-0 Estas metodologías requieren comprensión y aceptación por parte del cliente y donde su papel cambia, se necesita una relación más estrecha. En este tipo de enfoques no existe el contrato permanente, es decir, no se fijan desde el inicio, costo, tiempo, recursos totales, ni alcance. El alcance debe variar de forma controlada para que, durante el proceso, el cliente defina sus requerimientos.

    p.mb-4(data-aos="flip-down") Existe una gran variedad de metodologías ágiles, las cuales son evolutivas, iterativas y tienen tiempos fijos en sus iteraciones.

    p.mb-5(data-aos="flip-down") A continuación, conozca cada una de ellas:

    .row.mb-5(data-aos="flip-down")
      .col-lg-12
        .cont_bg-1.p-5
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-5.mb-md-0
              ul.mb-5
                li
                  i.fas.fa-play.play_1.m-1
                  i.fas.fa-play.play_1.m-1
                  i.fas.fa-play.play_3.m-1
                  span.text_span Scrum

              p Esta metodología ágil está muy empoderada en la industria, su nombre viene del deporte #[i rugby], donde todos los miembros del equipo deben hacer estrategias, unir fuerzas y empujar sus obstáculos para llegar al éxito que, en el caso del juego, serían los jugadores del otro equipo.

              .cajon.color-primario.p-4.mb-4
                p.mb-0 Esta metodología tiene una serie de componentes que se pueden agrupar en las categorías roles, activos y flujo de trabajo.
            .col-lg-5.mb-5.mb-md-0
              img.img-a(src='@/assets/curso/temas/tema_2/img_2.png', alt='Texto que describa la imagen')

    ImagenInfografica.color-secundario.mb-5.my-5(data-aos="flip-down")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema_2/img_3.svg', alt='Texto que describa la imagen')

      .tarjeta.color-acento-contenido.p-4.mb-5(x="2%" y="47%" numero="+")
        .h5.mb-2 #[i Product Owner]
        p.mb-0 Es una persona definida por el cliente, tiene que conocer muy bien el negocio y estar en todo el proceso del proyecto como un involucrado encargado de definir el <em>software</em>.

      .tarjeta.color-acento-contenido.p-4(x="10%" y="41%" numero="+")
        .h5.mb-2 #[i Team]
        p.mb-0 Equipo de desarrolladores conformado por entre 3 y 7 personas.

      .tarjeta.color-acento-contenido.p-4(x="18%" y="47%" numero="+")
        .h5.mb-2 #[i Scrum Master]
        p.mb-0 Es el rol encargado de quitar todos los posibles obstáculos del proyecto y engranar todas las piezas para que funcionen bien; en otras palabras, es un facilitador, y junto con el <em>Product Owner</em>, se ocupa de definir la operatividad del  <em>software</em>.

      .tarjeta.color-acento-contenido.p-4(x="24%" y="47%" numero="+")
        .h5.mb-2 #[i Project Manager]
        p.mb-0 Integra el proyecto a la organización y es el encargado de los recursos y su aprobación.

      .tarjeta.color-acento-contenido.p-4(x="58%" y="28%" numero="+")
        .h5.mb-2 #[i Daily Scrum]
        p.mb-0 Reunión diaria que se lleva a cabo entre el <em>Scrum Master</em> y el equipo, para revisar las tareas del día.

      .tarjeta.color-acento-contenido.p-4(x="10%" y="75%" numero="+")
        .h5.mb-2 #[i Sprint Backlog]
        p.mb-0 Es el conjunto que se selecciona de requerimientos provenientes del <em>Product Backlog</em> y será desarrollado por el equipo en una iteración llamada <em>Sprint</em>.

      .tarjeta.color-acento-contenido.p-4(x="9%" y="105%" numero="+")
        .h5.mb-2 #[i Product Backlog]
        p.mb-0 Es un listado de requerimientos ya priorizados del sistema.

      .tarjeta.color-acento-contenido.p-4(x="20%" y="95%" numero="+")
        .h5.mb-2 #[i Project Planning]
        p.mb-0 Proceso donde se planifica todo el proyecto.

      .tarjeta.color-acento-contenido.p-4(x="34%" y="102%" numero="+")
        .h5.mb-2 #[i Sprint Planning]
        p.mb-0 Tarea donde se lleva a cabo la planificación de la iteración.

      .tarjeta.color-acento-contenido.p-4(x="49%" y="82%" numero="+")
        .h5.mb-2 #[i Burdown Char]
        p.mb-0 Modelo o diagrama que muestra el trabajo sin terminar. Se puede hacer para el <em>Sprint</em> como también para el proyecto completo.

      .tarjeta.color-acento-contenido.p-4(x="50%" y="62%" numero="+")
        .h5.mb-2 #[i Sprint]
        p.mb-0 Es una iteración de duración fija y dura entre 2 y 4 semanas.

      .tarjeta.color-acento-contenido.p-4(x="68%" y="89%" numero="+")
        .h5.mb-2 #[i Release]
        p.mb-0 Versión del código funcional entregado al cliente.

      .tarjeta.color-acento-contenido.p-4(x="91%" y="102%" numero="+")
        .h5.mb-2 #[i Sprint Retrospective]
        p.mb-0 Como su nombre lo indica, el equipo con el <em>Scrum Master</em> revisan el <em>Sprint</em> que acaban de terminar y establecen cuáles son las fallas que se tuvieron y cómo mejorar para los próximos.

      .tarjeta.color-acento-contenido.p-4(x="84%" y="37%" numero="+")
        .h5.mb-2 #[i Demo Meeting]
        p.mb-0 Reunión que se realiza al finalizar el <em>Sprint</em> con el objetivo de mostrarle al cliente la nueva funcionalidad.

    .row.justify-content-center.mb-5.mt-5.my-5(data-aos="flip-down")
      .col-lg-10
        .cajon.color-primario.p-4.mb-4.mt-5
          p.mb-0 La anterior imagen muestra todo lo que maneja la metodología SCRUM y si es la adecuada para la implementación en el proyecto.  

    ul.mb-5(data-aos="flip-down")
      li
        i.fas.fa-play.play_1.m-1
        i.fas.fa-play.play_1.m-1
        i.fas.fa-play.play_3.m-1
        span.text_span Kanban

    p.mb-5(data-aos="flip-down") Esta metodología tiene sus orígenes en los procesos de producción ideados por una reconocida empresa automotriz, donde se empezó con el uso de tarjetas para tener clara la cantidad de material que necesitaban en cada proceso de la cadena de producción.

    .row.justify-content-center.mb-5(data-aos="flip-down")
      .col-lg-11
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema_2/img_4.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Kanban significa en japonés, tarjetas visuales; la palabra <i>kan</i> es visual y la palabra <i>ban</i> es tarjeta. Hace parte de las metodologías ágiles cuyo objetivo es gestionar, de forma óptima, cómo se van completando las tareas y qué recursos tienen. Es así como Kanban es una metodología que busca apoyar a los equipos para encontrar un balance entre las tareas pendientes por realizar y la disponibilidad de cada integrante; su filosofía es la mejora continua a través de la técnica de extracción, es decir, se tiene un repositorio o lista de tareas, de la cual se van tomando y se van anexando al flujo de trabajo, apoyados en los tableros Kanban.

    .titulo-sexto.color-acento-contenido(data-aos="flip-down")
      h5 Figura 5
      p.mb-0 
       em Tablero Kanban

    img.img-a(data-aos="flip-down")(src='@/assets/curso/temas/tema_2/img_5.png', alt='Texto que describa la imagen')

    .row.justify-content-center.p-5(data-aos="zoom-in-down")
      .col-lg-10.cont_bg-2.p-4
        p.mb-0 La anterior gráfica es el tablero Kanban, el cual se utiliza para organizar el trabajo, cada tarjeta es una tarea y va avanzando en el tablero según su desarrollo.

    p.mb-5(data-aos="flip-down") Kanban tiene cuatro principios que son fundamentales para su implementación:

    .row.justify-content-center.mb-5(data-aos="flip-down")
      .col-lg-7.mb-5.mb-md-0
        LineaTiempoD.color-acento-contenido.especial
          p(numero="1" titulo="Empiece con lo que hace ahora") Esta metodología puede ser implementada en cualquier proceso de trabajo porque es lo suficientemente flexible para adaptarse.
          
          p(numero="2" titulo="Comprométase a buscar e implementar cambios progresivos y evolutivos<br>") Los cambios muy grandes pueden impactar negativamente el equipo, por la demora, el esfuerzo y los posibles arreglos que toque realizar; por eso se deben hacer pequeños cambios e ir evolucionando.

          p(numero="3" titulo="Respete los roles, los procesos y las responsabilidades actuales") Kanban no tiene roles integrados o definidos, puede integrarse y funcionar con la jerarquía de su equipo.

          p(numero="4" titulo="Impulse el liderazgo en todos los niveles") Se habla de un liderazgo horizontal, y no solo vertical, dentro del proyecto o equipo de trabajo.


      .col-lg-5.mb-5
        img.img-a(src='@/assets/curso/temas/tema_2/img_6.png', alt='Texto que describa la imagen')

    p.mb-5(data-aos="flip-down") Los principios dan una guía para el equipo al momento de comenzar el flujo de trabajo, pero se deben seguir las siguientes prácticas que usan grandes empresas para lograr una mejora continua y un crecimiento progresivo:

    SlyderF.mb-5(columnas="col-lg-5 col-xl-4").align-items-stretch.d-flex.h-100(data-aos="flip-down")
      .tarjeta-avatar.d-flex
        img(src='@/assets/curso/temas/tema_2/img_7.png' alt='AvatarTop')
        .tarjeta.tarj_bg-1.d-flex
          .text-center.p-4
            h4.text-center Visualizar el trabajo
            p Kanban es visualmente muy claro. Una tarjeta de trabajo viajará del lado izquierdo al lado derecho del tablero comenzando por cada una de las columnas que representan un estado, hasta que llegue a estar finalizada.

      .tarjeta-avatar.d-flex
        img(src='@/assets/curso/temas/tema_2/img_7.png' alt='AvatarTop')
        .tarjeta.tarj_bg-1.d-flex
          .text-center.p-4
            h4.text-center Limitar el trabajo en curso
            p Kanban se basa en un principio de movimiento rápido, es decir, que cada tarjeta o tarea avanza rápido en el tablero y no se queda mucho tiempo en “trabajo en progreso”; no hay una regla, pero se debe poner un indicador limitante para saber cuántas tareas al tiempo pueden estar en progreso.

      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema_2/img_7.png' alt='AvatarTop')
        .tarjeta.tarj_bg-1
          .text-center.p-4
            h4.text-center Gestionar el flujo de trabajo
            p Mejorar la gestión del flujo de trabajo ayudará a que se tenga control sobre el avance de las tareas y así se logre cumplir el principio anterior.

      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema_2/img_7.png' alt='AvatarTop')
        .tarjeta.tarj_bg-1
          .text-center.p-4
            h4.text-center Implementar políticas explícitas de procesos
            p Las políticas de las tareas y su sintaxis o reglas deben estar claras. Todo el equipo debe conocerlas.

      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema_2/img_7.png' alt='AvatarTop')
        .tarjeta.tarj_bg-1
          .text-center.p-4
            h4.text-center Implementar ciclos de comentarios
            p Se deben gestionar muy bien los comentarios, recopilarlos de ambas fuentes: del cliente y del equipo de desarrollo. Sean dudas, preguntas, soluciones y demás comentarios pertinentes.

      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema_2/img_7.png' alt='AvatarTop')
        .tarjeta.tarj_bg-1
          .text-center.p-4
            h4.text-center Mejorar colaborando y crecer experimentando
            p Indica que se pueden tener otras metodologías fomentando el trabajo junto con Kanban. Esta colaboración mejora los procesos.

    p.mb-5(data-aos="flip-down") Los anteriores son los conceptos y la información fundamental para saber si el equipo necesita esta metodología y si puede empezar a implementarla.    

    ul.mb-5(data-aos="flip-down")
      li
        i.fas.fa-play.play_1.m-1
        i.fas.fa-play.play_1.m-1
        i.fas.fa-play.play_3.m-1
        span.text_span Lean

    .row.align-items-stretch.justify-content-center.d-flex.mb-5(data-aos="flip-down")
      .col-lg-8.d-flex
        .row.align-items-center.d-flex
          .col-lg-12
            .bg_2.p-5
              p Esta metodología busca la mejora continua y la eliminación del desperdicio. El desperdicio se refiere a todo lo que no aporta o suma al desarrollo del proyecto y, en consecuencia, al cliente.

              p Lo anterior no se trata de eliminar, como lo indica la palabra, sino de generar valor durante el flujo de trabajo, optimizando así el esfuerzo realizado en cada tarea, para lo cual es necesario siempre estar de la mano del cliente, y escucharlo.
      .col-lg-4.d-flex
        .bg_3.p-4
          img.img-a(src='@/assets/curso/temas/tema_2/img_8.png', alt='Texto que describa la imagen')


    .row.mb-5(data-aos="flip-down")
      .col-lg-6.mb-5.mb-md-0
        img.img-a(src='@/assets/curso/temas/tema_2/img_9.png', alt='Texto que describa la imagen')
      .col-lg-6
        p Los fracasos se toman como aprendizajes; del error se aprende para no volverlo a cometer. Cuando una organización implementa Lean se caracteriza por ser metódica y buscar siempre el diferenciador con su competencia.

        p Fomenta la mentalidad de ensayo y error bajo su pilar de una gestión de riesgo e innovación eficiente.

        p Se debe respetar el equipo de trabajo sin importar su jerarquía; las ideas innovadoras siempre provienen de las personas que están directamente involucradas con el proceso de fabricación del producto. Este respeto fomenta un liderazgo horizontal y no vertical como las compañías comunes, y ese liderazgo Lean empodera a todos los empleados para la toma de decisiones, el aporte de nuevas ideas al proceso con el objetivo de ejecutar el trabajo siempre de la mejor forma y responder así ante cualquier situación.

    ul.mb-5(data-aos="flip-down")
      li
        i.fas.fa-play.play_1.m-1
        i.fas.fa-play.play_1.m-1
        i.fas.fa-play.play_3.m-1
        span.text_span Programación Extrema XP

    p.mb-3(data-aos="flip-down") Por sus siglas en ingles XP (#[i Extreme Programming]) fue desarrollada por Kent Beck y busca la disciplina extrema de las personas que conforman el equipo de desarrollo aplicando unas prácticas consideradas esenciales en el proceso. Se fundamenta en valores, principios y prácticas.

    p.mb-5(data-aos="flip-down") Los valores incluyen los de todo el grupo que conforma el proyecto, en este caso se refiere a la forma como toman las decisiones frente a una situación específica; son cinco y se describen a continuación:

    

    SlyderF.mb-5.d-flex.align-items-stretch.h-100(columnas="col-lg-5 col-xl-4 ")(data-aos="flip-down")
      .tarjeta-avatar.d-flex
        img(src='@/assets/curso/temas/tema_2/img_10.png' alt='AvatarTop')
        .tarjeta.tarj_bg-2.d-flex
          .text-center.p-4
            h4.text-center Comunicación
            p.mb-0 Es el valor clave en el proceso de desarrollo de <em>software</em> y más específicamente en cada equipo de trabajo; junto con este valor se promueven la colaboración y el aprendizaje en equipo.

      .tarjeta-avatar.d-flex
        img(src='@/assets/curso/temas/tema_2/img_11.png' alt='AvatarTop')
        .tarjeta.tarj_bg-2.d-flex
          .text-center.p-4
            h4.text-center Simplicidad
            p.mb-0 Debido a varias lecciones aprendidas en los proyectos, se pone la simplicidad como base para el diseño y la codificación del <em>software</em>. Esto indica que solo se debe hacer lo que se pida, nada más.

      .tarjeta-avatar.d-flex
        img(src='@/assets/curso/temas/tema_2/img_12.png' alt='AvatarTop')
        .tarjeta.tarj_bg-2
          .text-center.p-4
            h4.text-center Retroalimentación
            p.mb-0 Este valor indica aprender sobre lo ya realizado, es decir, sobre lo que ya se probó y se culminó. Aquí nace una práctica clave llamada refactorización.

      .tarjeta-avatar.d-flex
        img(src='@/assets/curso/temas/tema_2/img_13.png' alt='AvatarTop')
        .tarjeta.tarj_bg-2
          .text-center.p-4
            h4.text-center Coraje
            p.mb-0 Como su nombre lo indica, este valor crea e impulsa la actitud positiva frente a cualquier situación. Siempre se dice la verdad ante cualquier pregunta sobre el proyecto.

      .tarjeta-avatar.d-flex
        img(src='@/assets/curso/temas/tema_2/img_14.png' alt='AvatarTop')
        .tarjeta.tarj_bg-2
          .text-center.p-4
            h4.text-center Respeto
            p.mb-0 Para tener un grupo compenetrado la base de todo es el respeto entre las personas y sus interacciones.

    .cajon-b.color-acento-botones.p-3.mb-5(data-aos="flip-down")
      p.mb-0 Los valores que se acabaron de revisar no indican cómo se deben llevar a cabo las tareas del proyecto, son las prácticas las que muestran cómo se deben ejecutar en detalle. Pero como hay un espacio muy grande entre los valores y las prácticas, XP dispuso de unos principios que permiten la generación de prácticas concretas a partir de los valores.
      

    .row.justify-content-center.mb-5(data-aos="flip-down")
      .col-lg-7.mb-5.mb-md-0
        p.mb-5 En XP existen 15 principios que se describirán brevemente a continuación:

        ul.lista-ul--color
          li
            i.fas.fa-play.m-2.tam_i.my-0
            span #[b Beneficio mutuo:] todas las tareas o actividades realizadas deben beneficiar a todos los miembros del equipo.
          li
            i.fas.fa-play.m-2.tam_i.my-0
            span #[b Diversidad:] este principio indica que se debe ser diverso en el proceso de desarrollo de proyecto; todas las opiniones cuentan.
          li
            i.fas.fa-play.m-2.tam_i.my-0
            span #[b Humanidad:] se deben valorar las necesidades humanas en el ciclo de vida del proyecto.
          li
            i.fas.fa-play.m-2.tam_i.my-0
            span #[b Responsabilidad aceptada:] la responsabilidad no puede ser impuesta, debe aceptarse.
          li
            i.fas.fa-play.m-2.tam_i.my-0
            span #[b Economía:] todas las actividades que se realicen deben aportar valor al negocio.
          li
            i.fas.fa-play.m-2.tam_i.my-0
            span #[b Calidad:] el equipo debe trabajar con calidad y sentirse orgulloso de cada producto que desarrolle.
          li
            i.fas.fa-play.m-2.tam_i.my-0
            span #[b Mejora:] se debe velar siempre por una mejora continua en los procesos.
      .col-lg-5
        img.img-a(src='@/assets/curso/temas/tema_2/img_15.png', alt='Texto que describa la imagen')

    .row.justify-content-center.mb-5(data-aos="flip-down")
      .col-lg-5.mb-5.mb-md-0
        img.img-a(src='@/assets/curso/temas/tema_2/img_16.png', alt='Texto que describa la imagen')
      .col-lg-7.mb-5.mb-md-0
        .bloque-texto-b.color-acento-botones
          .bloque-texto-b__texto.mb-2.p-2
            ul.lista-ul--color
              li
                i.fas.fa-play.m-2.tam_i.my-0
                span #[b Flujo:] hay que asegurar el transcurrir normal de los flujos y la entrega de productos.
              li
                i.fas.fa-play.m-2.tam_i.my-0
                span #[b Reflexión:] siempre se debe tener un proceso de reflexión ante cada trabajo realizado. Cómo y por qué.
              li
                i.fas.fa-play.m-2.tam_i.my-0
                span #[b Pequeños pasos:] siempre se debe avanzar de manera constante y con pequeños pasos.
              li
                i.fas.fa-play.m-2.tam_i.my-0
                span #[b Autosemejanza:] aprender de las experiencias pasadas y lecciones aprendidas.
              li
                i.fas.fa-play.m-2.tam_i.my-0
                span #[b Falla:] no quebrarse ante una falla, sino utilizar ese caso como parte del aprendizaje.
              li
                i.fas.fa-play.m-2.tam_i.my-0
                span #[b Oportunidad:] los problemas que se presenten en el desarrollo del proyecto hay que  transformarlos en oportunidades de mejora.
              li
                i.fas.fa-play.m-2.tam_i.my-0
                span #[b Redundancia:] tomar los problemas, buscar las diferentes soluciones y probar varias al tiempo.

    .cajon.color-primario.p-4.mb-5(data-aos="flip-down")
      p.mb-0 XP, aparte de ofrecer valores y principios, tiene prácticas que proponen una mejor organización, planificación, comunicación y permiten generar una cultura de excelencia.

    p.mb-5(data-aos="flip-down") Las prácticas más relevantes son:

    .row.mb-5(data-aos="flip-down")
      .col-lg-8.mb-5.mb-md-0
        TabsA.color-acento-botones.mb-5
          .tarjeta.tarj_bg-3.p-4(titulo="El juego de la <br>planificación")
            h5 El juego de la planificación
            p Esta práctica es muy importante y requiere una participación activa del cliente en la planificación de los requerimientos junto con el equipo en busca de la cohesión entre el conocimiento del negocio y los requerimientos por parte del cliente, y el de costos y desarrollo del equipo.
          .tarjeta.tarj_bg-3.p-4.tb(titulo="Pequeños <em>releases</em>")
            h5 Pequeños <em>releases</em>
            p El equipo de desarrollo debe velar por entregar con frecuencia al cliente versiones de las iteraciones funcionales.
          .tarjeta.tarj_bg-3.p-4.tb_1(titulo="Metáforas")
            h5 Metáforas
            p Capacidad de explicar el sistema a personas nuevas con base en el concepto de metáforas con el fin de evitar el tiempo que gastarían leyendo la documentación.
          .tarjeta.tarj_bg-3.p-4.tb_2(titulo="Diseño simple")
            h5 Diseño simple
            p La idea es hacer solo lo que se solicita y mantener todo con simplicidad.
          .tarjeta.tarj_bg-3.p-4.tb_3(titulo="Desarrollo guiado<br> por pruebas")
            h5 Desarrollo guiado por pruebas
            p Es un enfoque evolutivo que permite el desarrollo de actividades con calidad. Para ello se crea primero la prueba con la cual se va a testear y después se hace la mejora.
          .tarjeta.tarj_bg-3.p-4.tb_4(titulo="Refactorización")
            h5 Refactorización
            p Consiste en mejorar el código ya realizado sin alterar su comportamiento.
          .tarjeta.tarj_bg-3.p-4.tb_5(titulo="Programación <br>en parejas")
            h5 Programación en parejas
            p Es una técnica de trabajo que reúne a un equipo de dos personas en un solo computador para que ambas trabajen resolviendo el mismo problema.
          .tarjeta.tarj_bg-3.p-4.tb_6(titulo="Propiedad <br>colectiva del código")
            h5 Propiedad colectiva del código
            p Esta práctica indica que el código no se privatiza o ciertas partes no son de equis desarrollador; cualquier desarrollador del equipo puede desarrollar o mejorar cualquier funcionalidad.
          .tarjeta.tarj_bg-3.p-4.tb_7(titulo="Integración continua")
            h5 Integración continua
            p Indica que se requiere que todo se vaya integrando y probando de forma continua, sin esperar hasta el final para unir todas las partes.
          .tarjeta.tarj_bg-3.p-4.tb_8(titulo="Historias de usuario")
            h5 Historias de usuario
            p Es un documento importante donde se describen las funcionalidades del proyecto.
          .tarjeta.tarj_bg-3.p-4.tb_9(titulo="Estándares de <br>codificación")
            h5 Estándares de codificación
            p Consiste en producir código con un estilo estandarizado para todo el proyecto y no que cada desarrollador lo haga a su estilo.


           
      .col-lg-4.mb-5.mb-md-0
        img.img-a(src='@/assets/curso/temas/tema_2/img_17.png', alt='Texto que describa la imagen')


    ul.mb-5(data-aos="flip-down")
      li
        i.fas.fa-play.play_1.m-1
        i.fas.fa-play.play_1.m-1
        i.fas.fa-play.play_3.m-1
        span.text_span RUP

    .row.justify-content-center.mb-5.d-none.d-lg-block(data-aos="flip-down")
      .col-lg-12
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.m-left.p-4(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema_2/img_18.png')})`}"
          )
          .bloque-texto-g__texto.txt-g.p-4.bloque-g-txt.cuadro_bloc
            p El Proceso Unificado de Rational o <em>Rational Unified Process</em> (RUP), es una metodología que combina buenas prácticas de gestión de proyectos ágiles y tradicionales. La política de RUP se basa en desarrollar el proyecto en iteraciones que van evolucionando gradualmente. Cada iteración se compone de cuatro fases que forman su ciclo de vida y son guiadas por casos de estudio. El inicio se da con requerimientos genéricos y se avanza, hasta finalizar en los más especializados.
              br
              br
              | Existe otro método llamado AUP (proceso unificado ágil), el cual es una versión simplificada de RUP. Se basa en el desarrollo de aplicaciones empresariales y en él se usan técnicas ágiles llamadas TDD (desarrollo basado en pruebas), MDD (desarrollo basado en modelos) y gestión de <em>software</em>.

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.d-block.d-lg-none.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema_2/img_18.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p  El Proceso Unificado de Rational o Rational Unified Process (RUP) es una metodología que combina buenas prácticas de gestión de proyectos ágiles y tradicionales. La política de RUP es desarrollar el proyecto en iteraciones que van evolucionando gradualmente. Cada iteración se compone de cuatro fases que son su ciclo de vida y son guiadas por casos de estudio. El inicio se da con requerimientos genéricos y se va avanzando hasta finalizar en los más especializados. 
        br
        br
        | Existe otro método llamado AUP (proceso unificado ágil), el cual es una versión simplificada de RUP. Se basa en el desarrollo de aplicaciones empresariales y en él se usan técnicas ágiles llamadas TDD (desarrollo basado en pruebas), MDD (desarrollo basado en modelos) y gestión de <em>software</em>.

    p.mb-5(data-aos="flip-down") Las cuatro fases en las que se divide esta metodología son:

    .row.mb-5(data-aos="flip-down")
      .col-lg-8.mb-5.mb-md-0
        TabsA.color-acento-botones.mb-5
          .tarjeta.tarj_bg-3.p-4(titulo="<em>Launch</em>")
            h5 <em>Launch</em>
            p Es el inicio del proyecto donde se identifica el alcance, la arquitectura a alto nivel, se vinculan todos los interesados del proyecto y se elabora el presupuesto.
          .tarjeta.tarj_bg-3.p-4.tb(titulo="<em>Design</em>")
            h5 <em>Design</em>
            p Se diseña todo el <em>software</em>, incluyendo la arquitectura detallada.
          .tarjeta.tarj_bg-3.p-4.tb_1(titulo="<em>Realization</em>")
            h5 <em>Realization</em>
            p Proceso de codificación del <em>software</em> que se hace de forma gradual con priorización de los requerimientos.
          .tarjeta.tarj_bg-3.p-4.tb_2(titulo="<em>Delivery</em>")
            h5 <em>Delivery</em>
            p Implementación y pruebas del <em>software</em>.
      .col-lg-4.mb-5.mb-md-0
        img.img-a(src='@/assets/curso/temas/tema_2/img_19.png', alt='Texto que describa la imagen')

    p.mb-5 Las metodologías ágiles tienen las siguientes características en común:
    .bg_2.p-5.mb-5
      .row.mb-5(data-aos="flip-down")
        .col-sm-6.col-xl-4.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema_2/img_20-.svg')})`}")
              .tarjeta-flip__contenido.p-4.p-xl-3
                h5.mb-4 Menos costos
                p.mb-5 Siempre se trata de mejorar la calidad del producto y que se haga solo lo que le aporte valor al cliente, con la finalidad de maximizar las ganancias.

        .col-sm-6.col-xl-4.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema_2/img_21.svg')})`}")
              .tarjeta-flip__contenido.p-4.p-xl-4 
                h5.mb-4 Mejores interacciones con el cliente
                p.mb-5 Se busca optimizar la interacción con el cliente, por este motivo la comunicación debe ser fluida y en ambas direcciones. Se deben tener unos tiempos eficientes de respuesta.

        .col-sm-6.col-xl-4.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema_2/img_22.svg')})`}")
              .tarjeta-flip__contenido.p-4.p-xl-3
                h5.mb-4 Mayor calidad
                p.mb-4 Lean indica que se debe optimizar cada uno de los procesos y tareas prestando mucha atención en las especificaciones y sus detalles con el objetivo de reducir los defectos y retrasos. Con esto se optimizan los costos y se impacta en una mejoría en tiempos durante el proyecto. 

      .row.mb-5.justify-content-center
        .col-sm-6.col-xl-4.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema_2/img_23.svg')})`}")
              .tarjeta-flip__contenido.p-5.p-xl-3
                h5 Crea cultura de mejora
                p En una empresa, un equipo de proyecto debe tener cultura de la comunicación, por dar un ejemplo; pero, en este caso, se contextualiza en la importancia de la calidad, que se vuelve cultura, al crear estrategias, prácticas y formas de trabajo, que se llevan a cabo, en cada tarea realizada, para que el trabajo sea más eficiente.

        .col-sm-6.col-xl-4.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema_2/img_24.svg')})`}")
              .tarjeta-flip__contenido.p-5.p-xl-3 
                h5 Mayor moral de los empleados
                p Esto se da gracias al liderazgo horizontal, donde los jefes toman en cuenta las opiniones de los trabajadores y sus ideas se valoran, se revisan, se analizan y, de ser necesario, se implementan.

    .bg_6.p-5(data-aos="flip-down")
      .row
        .col-lg-8.mb-5.mb-md-0
          .cajon-b.color-acento-botones.p-2
            p Para finalizar esta temática, encontramos las siguientes ventajas y desventajas de estas metodologías.
              h4 Ventajas
          .row.justify-content-center
            .col-lg-11
              ul.lista-ul--color
                li
                  i.fas.fa-play.m-2.tam_i.my-0
                  span Incentiva la creatividad.
                li
                  i.fas.fa-play.m-2.tam_i.my-0
                  span Entregas continuas.
                li
                  i.fas.fa-play.m-2.tam_i.my-0
                  span Mejora continua del flujo de trabajo.
                li
                  i.fas.fa-play.m-2.tam_i.my-0
                  span Flexibilidad ante los cambios.
                li
                  i.fas.fa-play.m-2.tam_i.my-0
                  span Se eliminan los cambios posteriores a los proyectos ya terminados.
                li
                  i.fas.fa-play.m-2.tam_i.my-0
                  span Mejora la comunicación del equipo e involucra más estrechamente al cliente.

          h4 Desventajas

          .row.justify-content-center
            .col-lg-11
              .bloque-texto-b.color-acento-contenido
                .bloque-texto-b__texto.mb-2.p-2
                  ul.lista-ul--color
                    li
                      i.fas.fa-play.m-2.tam_i.my-0
                      span La revisión excesiva, puede llevar a retrasos.
                    li
                      i.fas.fa-play.m-2.tam_i.my-0
                      span Sin un equipo de trabajo calificado, las entregas se pueden retardar.
                    li
                      i.fas.fa-play.m-2.tam_i.my-0
                      span Sin información detallada de los cambios, se puede llegar a operaciones improductivas.


        .col-lg-4.mb-5.mb-md-0
          img.img-a(src='@/assets/curso/temas/tema_2/img_25.png', alt='Texto que describa la imagen')




</template>

<script>
export default {
  name: 'Tema2',
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
