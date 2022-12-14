<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 #[i Contrast connectors] (conectores de contraste)
    .row.mb-5
      .col-lg-7.mb-4.mb-lg-0
        traductor.color-primario
          div(slot="textoIngles")
            p.mb-0 #[i Contrast connectors are expressions and words that allow you to show that you do not agree on the idea that was expressed. There are different connectors that can be used and they are going to be shown next:]
          div(slot="textoEspanol")
            p.mb-0 Los conectores de contraste son expresiones y palabras que permiten mostrar que no se está de acuerdo con la idea expresada. Hay diferentes conectores que se pueden utilizar y se van a mostrar a continuación:
      .col-lg-5
        figure
          img(src="@/assets/curso/tema3/img1.png", style="width:450px").m-auto
    .row.px-5.pt-5.bg-c8
      .col-12
        .row.align-items-end.mb-5
          .col-3.d-none.d-lg-block
            figure
              img(src="@/assets/curso/tema3/img2.svg", style="width:450px").m-auto
          .col-lg-9
            .tarjeta.tarjeta--blanca.shadow-lg.p-4
              SlyderA(tipo="b")
                .row.m-1
                  .col-12.p-4
                    h4 #[i.txt-c7 Nevertheless]
                    p #[i.txt-c7 This connector is used to present an idea to contrast the previous one presented. It is a more formal version of HOWEVER.] #[span.txt-c5 / Este conector se utiliza para presentar una idea que contraste con la anterior presentada. Es una versión más formal de #[i HOWEVER].]
                    p #[i.txt-c7 #[b Examples:]]
                    .row
                      .col-lg-3.mb-4.mb-lg-0
                        figure
                          img(src="@/assets/curso/tema3/img3.svg", style="width:200px").m-auto
                      .col-lg-9
                        TarjetaAudio.color-primario.mb-3(
                          texto="<em>Companies have become more conscious on environmental problems. Nevertheless, they keep on contaminating a lot.</em>"
                          :audio="require('@/assets/curso/tema3/3_nevertheless_1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.ms-3.mb-4 Las empresas se han vuelto más conscientes de los problemas medioambientales. Sin embargo, siguen contaminando mucho.
                        TarjetaAudio.color-primario.mb-3(
                          texto="<em>Social programs have helped a lot of people in vulnerable conditions. Nevertheless, they are not enough to cover the global demand.</em>"
                          :audio="require('@/assets/curso/tema3/3_nevertheless_2.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.ms-3 Los programas sociales han ayudado a muchas personas en condiciones vulnerables. Sin embargo, no son suficientes para cubrir la demanda global.
                .row.m-1
                  .col-12.p-4
                    h4 #[i.txt-c7 In spite of]
                    p #[i.txt-c7 This connector is used to talk about something that happens even when it is not logical for this to happen. Its synonym “despite” has the same meaning and use. After “despite” or “in spite of”, you have to use a noun, gerund or a pronoun.] #[span.txt-c5 / Este conector se utiliza para hablar de algo que sucede incluso cuando no es lógico que esto ocurra. Su sinónimo #[i "despite"] tiene el mismo significado y uso. Después de #[i "despite"] o #[i "in spite of"], hay que utilizar un sustantivo, un gerundio o un pronombre.]
                    p #[i.txt-c7 #[b Examples:]]
                    .row
                      .col-lg-3.mb-4.mb-lg-0
                        figure
                          img(src="@/assets/curso/tema3/img4.svg", style="width:200px").m-auto
                      .col-lg-9
                        TarjetaAudio.color-primario.mb-3(
                          texto="<em>In spite of his bad performance, he was promoted.</em>"
                          :audio="require('@/assets/curso/tema3/3_inspiteof_1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.ms-3.mb-4 A pesar de su mal desempeño, fue ascendido.
                        TarjetaAudio.color-primario.mb-3(
                          texto="<em>In spite of all efforts made by scientists, the environment keeps on getting worse.</em>"
                          :audio="require('@/assets/curso/tema3/3_inspiteof_2.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.ms-3 A pesar de todos los esfuerzos realizados por los científicos, el medio ambiente sigue empeorando.
                .row.m-1
                  .col-12.p-4
                    h4 #[i.txt-c7 Nonetheless]
                    p #[i.txt-c7 This connector is used to present an idea to contrast the previous one presented. It can be understood as a synonym of “nevertheless”.] #[span.txt-c5 / Este conector se utiliza para presentar una idea que contraste con la anterior presentada. Puede entenderse como un sinónimo de #[i "nevertheless"].]
                    p #[i.txt-c7 #[b Examples:]]
                    .row
                      .col-lg-3.mb-4.mb-lg-0
                        figure
                          img(src="@/assets/curso/tema3/img5.svg", style="width:200px").m-auto
                      .col-lg-9
                        TarjetaAudio.color-primario.mb-3(
                          texto="<em>The office has presented a series of problems; nonetheless, the supervisors haven’t implemented any new strategies.</em>"
                          :audio="require('@/assets/curso/tema3/3_nonetheless_1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.ms-3.mb-4 La oficina ha presentado una serie de problemas; sin embargo, los supervisores no han aplicado ninguna estrategia nueva.
                        TarjetaAudio.color-primario.mb-3(
                          texto="<em>Efforts to fight global warming have increased in recent years. Nonetheless, big companies are still using toxic materials in their productions.</em>"
                          :audio="require('@/assets/curso/tema3/3_nonetheless_2.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.ms-3 Los esfuerzos para luchar contra el calentamiento global han aumentado en los últimos años. Sin embargo, las grandes empresas siguen utilizando materiales tóxicos en sus producciones.
                .row.m-1
                  .col-12.p-4
                    h4 #[i.txt-c7 However]
                    p #[i.txt-c7 This connector is used to present a contrasting idea and is followed by a comma. It is usually placed at the beginning of a sentence.] #[span.txt-c5 / Este conector se utiliza para presentar una idea contrastada y va seguido de una coma. Suele colocarse al principio de la frase.]
                    p #[i.txt-c7 #[b Examples:]]
                    .row
                      .col-lg-3.mb-4.mb-lg-0
                        figure
                          img(src="@/assets/curso/tema3/img6.svg", style="width:200px").m-auto
                      .col-lg-9
                        TarjetaAudio.color-primario.mb-3(
                          texto="<em>My boss has always brought brilliant ideas; however, he has never been recognized for this.</em>"
                          :audio="require('@/assets/curso/tema3/3_however_1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.ms-3.mb-4 Mi jefe siempre ha aportado ideas brillantes; sin embargo, nunca se le ha reconocido por ello.
                        TarjetaAudio.color-primario.mb-3(
                          texto="<em>No one in the office used to separate trash. However, I started a campaign and everybody supported it.</em>"
                          :audio="require('@/assets/curso/tema3/3_however_2.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.ms-3 Nadie en la oficina solía separar la basura. Sin embargo, inicié una campaña y todos la apoyaron.
                .row.m-1
                  .col-12.p-4
                    h4 #[i.txt-c7 But]
                    p #[i.txt-c7 This is one of the most common contrast connectors. It shows distinction between two or more ideas expressed in a text. It can be also used to show that there is an exception to the idea expressed.] #[span.txt-c5 / Es uno de los conectores de contraste más comunes. Muestra la distinción entre dos o más ideas expresadas en un texto. También puede utilizarse para mostrar que hay una excepción a la idea expresada.]
                    p #[i.txt-c7 #[b Examples:]]
                    .row
                      .col-lg-3.mb-4.mb-lg-0
                        figure
                          img(src="@/assets/curso/tema3/img7.svg", style="width:200px").m-auto
                      .col-lg-9
                        TarjetaAudio.color-primario.mb-3(
                          texto="<em>Everyone, but the accounting area, participated in the last recycling campaign.</em>"
                          :audio="require('@/assets/curso/tema3/3_but_1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.ms-3.mb-4 Todos, excepto el área de contabilidad, participaron en la última campaña de reciclaje.
                        TarjetaAudio.color-primario.mb-3(
                          texto="<em>Marcos had never arrived late to work, but he did it today.</em>"
                          :audio="require('@/assets/curso/tema3/3_but_2.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.ms-3 Marcos nunca había llegado tarde al trabajo, pero hoy lo ha hecho.
        p.mb-5 #[i.txt-c7 Now that we know the contrast connectors, let’s see a real life situation in which they can be used. Complete the following conversation using the correct word to complete the sentences:] #[span.txt-c5 / Ahora que conocemos los conectores de contraste, veamos una situación de la vida real en la que se pueden utilizar. Complete la siguiente conversación utilizando la palabra correcta para completar las frases:]
        Dialogo.color-primario(:dialogo="dialogo")
          template(#nombre-actividad) Arrastrar y Soltar
          template(#titulo-actividad) #[i Mixed tenses practice]
          template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.

</template>

<script>
import DialogoChat from '../components/DialogoChat.vue'
import traductor from '@/components/tarjetaTraductor.vue'
export default {
  name: 'Tema3',
  components: {
    traductor,
    DialogoChat,
  },
  data: () => ({
    dialogo: {
      personajes: [
        {
          nombre: 'Lucas',
          img: require('@/assets/curso/tema3/img8.svg'),
        },
        {
          nombre: 'Andrea',
          img: require('@/assets/curso/tema3/img9.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Lucas',
          textoIng:
            '<i>***</i> <i>all the good work that I have done here, I haven’t been promoted.</i>',
          textoEsp:
            'A pesar de todo el buen trabajo que he hecho aquí, no me han ascendido.',
          audio: require('@/assets/curso/tema3/Lucas1.mp3'),
          palabra: 'In spite of',
        },
        {
          personaje: 'Andrea',
          textoIng:
            '<i>You are a good employee,</i> *** <i>you have been here less than a year.</i>',
          textoEsp: 'Eres un buen empleado, pero llevas menos de un año.',
          audio: require('@/assets/curso/tema3/Andrea1.mp3'),
          palabra: 'but',
        },
        {
          personaje: 'Lucas',
          textoIng:
            '<i>I know;</i> ***<i>, David already got his promotion. And we started working here the same month.</i>',
          textoEsp:
            'Lo sé; sin embargo, David ya ha conseguido su ascenso. Y empezamos a trabajar aquí el mismo mes.',
          audio: require('@/assets/curso/tema3/Lucas2.mp3'),
          palabra: 'however',
        },
        {
          personaje: 'Andrea',
          textoIng:
            '<i>He worked for a branch</i> *** <i>this company for 5 years before coming here.</i>',
          textoEsp:
            'Él trabajó para una sucursal de esta empresa durante 5 años antes de venir aquí.',
          audio: require('@/assets/curso/tema3/Andrea2.mp3'),
          palabra: 'of',
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
