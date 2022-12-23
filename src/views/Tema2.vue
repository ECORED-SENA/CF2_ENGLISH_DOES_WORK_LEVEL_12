<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 #[i Mixed tenses] (Combinación de tiempos)
    .row.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        traductor.color-primario
          div(slot="textoIngles")
            p.mb-0 #[i Mixed tenses is a resource used in languages in order to complement ideas or express complex ideas that require more than one grammar structure. They may be mixed in a paragraph or even in the same sentence by using conjunctions. Depending on what the writer or speaker wants to communicate, she or he will combine certain grammar structures. There are no specific rules when mixing tenses. It will only depend on the writer’s or speaker’s intention. Let’s see:]
          div(slot="textoEspanol")
            p.mb-0 Los tiempos combinados son un recurso utilizado en las lenguas para complementar ideas o expresar ideas complejas que requieren más de una estructura gramatical. Pueden mezclarse en un párrafo o incluso en la misma frase mediante el uso de conjunciones. Dependiendo de lo que el escritor o el hablante quiera comunicar, combinará determinadas estructuras gramaticales. No hay reglas específicas a la hora de mezclar los tiempos verbales, solo dependerá de la intención del escritor o del hablante. Veamos: 
      .col-lg-5(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/img1.png", style="width:450px").m-auto
    .row.p-5.bg-c4
      .col-12
        .row.align-items-end
          .col-3.d-none.d-lg-block(data-aos="fade-right")
            figure
              img(src="@/assets/curso/tema2/img1.svg", style="width:450px").m-auto
          .col-lg-9(data-aos="fade-left")
            .tarjeta.tarjeta--blanca.shadow-lg.p-4
              SlyderA(tipo="b")
                .row.m-1
                  .col-12.p-4
                    p.text-center #[i.txt-c6 #[b Simple and continuous tenses]] #[span.txt-c5 / Tiempos simples y continuos]
                    traductor.color-primario
                      div(slot="textoIngles")
                        p.mb-0 #[i This type of mix is used when giving a context to the main action. The continuous tense is added in order to let the reader or listener know what events were occurring while the main action happened. In order to show them, the conjunctions “when” and “while” are used. Both of them transmit the sense of simultaneity; however, “when” mostly refers to brief actions in the middle of a longer one, and “while” mostly refers to long period actions being done simultaneously. Let’s see some examples:]
                      div(slot="textoEspanol")
                        p.mb-0 Este tipo de mezcla se utiliza para dar contexto a la acción principal. El tiempo continuo se añade para que el lector o el oyente sepan qué acontecimientos estaban ocurriendo mientras sucedía la acción principal. Para mostrarlos, se utilizan las conjunciones #[i "when"] y #[i "while"]. Ambas transmiten el sentido de simultaneidad; sin embargo, #[i "when"] se refiere sobre todo a acciones breves en medio de una más larga, y #[i "while"] se refiere sobre todo a acciones de larga duración que se realizan simultáneamente. Veamos algunos ejemplos:
                    p #[i.txt-c1 #[b Examples.]]
                    .row
                      .col-lg-6.mb-4.mb-lg-0
                        TarjetaAudio.color-primario.mb-3(
                          texto="I walk around the office <em>while</em> my engineers are developing new projects."
                          :audio="require('@/assets/curso/tema2/2_example_1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.ms-3.mb-4 Yo camino por la oficina #[b.txt-c1 mientras] mis ingenieros están desarrollando nuevos proyectos.
                        TarjetaAudio.color-primario.mb-3(
                          texto="My supervisor is always looking at me <em>when</em> I use the computer."
                          :audio="require('@/assets/curso/tema2/2_example_2.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.ms-3 Mi supervisor siempre me está mirando #[b.txt-c1 cuando] uso la computadora.
                      .col-lg-6
                        figure
                          img(src="@/assets/curso/tema2/img2.png", style="width:450px").m-auto
                .row.m-1
                  .col-12.p-4
                    p.text-center #[i.txt-c1 #[b Simple and Perfect tenses]] #[span.txt-c5 / Tiempos simples y perfectos]
                    traductor.color-primario
                      div(slot="textoIngles")
                        p.mb-0 #[i Perfect tenses are good when telling experiences in a general way. However, it is not possible to give details about specific events that happened in the past. That is why simple tenses are useful when specifying what happened in the event mentioned using the present perfect. Let’s see some examples:]
                      div(slot="textoEspanol")
                        p.mb-0 Los tiempos perfectos son buenos para contar experiencias de forma general. Sin embargo, no es posible dar detalles sobre eventos específicos que ocurrieron en el pasado. Por eso, los tiempos simples son útiles a la hora de especificar lo que ocurrió en el evento mencionado utilizando el presente perfecto. Veamos algunos ejemplos:
                    p #[i.txt-c1 #[b Examples.]]
                    .row
                      .col-lg-6.mb-4.mb-lg-0
                        TarjetaAudio.color-primario.mb-3(
                          texto="I have worked in environmental projects since I learned about global warming."
                          :audio="require('@/assets/curso/tema2/2_example_3.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.ms-3.mb-4 He trabajado en proyectos ambientales desde que aprendí sobre el calentamiento global.
                        TarjetaAudio.color-primario.mb-3(
                          texto="My parents have worked in social sciences since they finished their studies."
                          :audio="require('@/assets/curso/tema2/2_example_4.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.ms-3 Mis papás han trabajado en ciencias sociales desde que terminaron sus estudios.
                      .col-lg-6
                        figure
                          img(src="@/assets/curso/tema2/img3.png", style="width:450px").m-auto
                .row.m-1
                  .col-12.p-4
                    p.text-center #[i.txt-c1 #[b Non-equivalent tenses]] #[span.txt-c5 / Tiempos no equivalentes]
                    traductor.color-primario
                      div(slot="textoIngles")
                        p.mb-0 #[i There are some situations in which complementing an idea requires to use not only a complementary sentence that matches the contextual tense, but a non-equivalent one in order to add extra information related to a different period of time. In these kinds of cases, interjections play an important role in matching these ideas.]
                      div(slot="textoEspanol")
                        p.mb-0 Hay algunas situaciones en las que complementar una idea requiere utilizar no solo una frase complementaria que coincida con el tiempo contextual, sino una no equivalente para añadir información extra relacionada con un periodo de tiempo diferente. En este tipo de casos, las interjecciones desempeñan un papel importante en la adecuación de estas ideas.
                    p #[i.txt-c1 #[b Examples.]]
                    .row
                      .col-lg-6.mb-4.mb-lg-0
                        TarjetaAudio.color-primario.mb-3(
                          texto="My coworker damaged the printer, so he will have to buy a new one."
                          :audio="require('@/assets/curso/tema2/2_example_5.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.ms-3.mb-4 Mi compañero de trabajo dañó la impresora, por lo tanto, tendrá que comprar una nueva.
                        TarjetaAudio.color-primario.mb-3(
                          texto="By next month, I will have visited 7 countries, because I saved enough money to travel on my next vacation."
                          :audio="require('@/assets/curso/tema2/2_example_6.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.ms-3 Para el próximo mes, yo habré visitado 7 países, porque ahorré suficiente dinero para viajar en mis próximas vacaciones.
                      .col-lg-6
                        figure
                          img(src="@/assets/curso/tema2/img4.png", style="width:450px").m-auto
    .row.px-5.pt-5.bg-c6
      .col-12
        .row.mb-5(data-aos="fade-right")
          .col-12.p-4.bg-c7
            .row.align-items-center
              .col-lg-11.mb-4.mb-lg-0
                p.mb-0 #[i.txt-c7 Let’s see how this works in a real life situation in which it is necessary to use more than one tense to express the idea. Let’s have a little practice by completing the following part of the conversation.] #[span.txt-c5 / Veamos cómo funciona esto en una situación de la vida real en la que es necesario utilizar más de un tiempo verbal para expresar la idea. Vamos a practicar un poco completando la siguiente parte de la conversación:]
              .col-lg-1
                figure
                  img(src="@/assets/curso/tema1/img11.svg", style="width:150px").m-auto
        Dialogo.color-primario(:dialogo="dialogo")(data-aos="fade-left")
          template(#nombre-actividad) Arrastrar y Soltar
          template(#titulo-actividad) #[i Mixed tenses practice]
          template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.


</template>

<script>
import DialogoChat from '../components/DialogoChat.vue'
import traductor from '@/components/tarjetaTraductor.vue'
export default {
  name: 'Tema2',
  components: {
    traductor,
    DialogoChat,
  },
  data: () => ({
    dialogo: {
      personajes: [
        {
          nombre: 'Harold',
          img: require('@/assets/curso/tema2/img3.svg'),
        },
        {
          nombre: 'Dana',
          img: require('@/assets/curso/tema2/img2.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Harold',
          textoIng:
            '<i>Have you heard about Joe</i> *** <i>he was transferred to Ohio?</i>',
          textoEsp: '¿Has sabido algo de Joe desde que lo trasladaron a Ohio?',
          audio: require('@/assets/curso/tema2/Harold1.mp3'),
          palabra: 'since',
        },
        {
          personaje: 'Dana',
          textoIng:
            '<i>I was texting to him yesterday</i> *** <i>he entered a meeting.</i>',
          textoEsp: 'Ayer le mandé un mensaje, pero entró en una reunión.',
          audio: require('@/assets/curso/tema2/Dana1.mp3'),
          palabra: 'but',
        },
        {
          personaje: 'Harold',
          textoIng:
            '<i>We haven’t</i> *** <i>since he left, but we will meet on Christmas.</i>',
          textoEsp:
            'No hemos hablado desde que se fue, pero nos veremos en Navidad.',
          audio: require('@/assets/curso/tema2/Harold2.mp3'),
          palabra: 'talked',
        },
        {
          personaje: 'Dana',
          textoIng:
            '<i>You were really good friends</i> *** <i>he was working here.</i>',
          textoEsp: 'Ustedes eran muy buenos amigos cuando él trabajaba aquí.',
          audio: require('@/assets/curso/tema2/Dana2.mp3'),
          palabra: 'when',
        },
      ],
    },
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
