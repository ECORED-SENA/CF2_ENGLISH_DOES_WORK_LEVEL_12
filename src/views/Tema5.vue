<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 #[i Reporting verbs] (verbos para reportar)
    .row.mb-5
      .col-lg-8.mb-4.mb-lg-0
        traductor.color-primario
          div(slot="textoIngles")
            p.mb-0 #[i When reporting what others have said, there are few verbs used in order to communicate the ideas expressed. However, not all the verbs are used in the same way. Some of them need to be used in a specific way, following a structure. Let’s see next:]
          div(slot="textoEspanol")
            p.mb-0 Cuando se informa de lo que otros han dicho, se utilizan algunos verbos para comunicar las ideas expresadas. Sin embargo, no todos los verbos se utilizan de la misma manera. Algunos de ellos deben utilizarse de forma específica, siguiendo una estructura. Veamos a continuación:
      .col-lg-4
        figure
          img(src="@/assets/curso/tema5/img1.svg", style="width:450px").m-auto
    .row.px-5.pt-5.bg-c10
      .col-12
        .row.align-items-end.mb-5
          .col-3.d-none.d-lg-block
            figure
              img(src="@/assets/curso/tema5/img3.svg", style="width:450px").m-auto
          .col-lg-9
            .tarjeta.tarjeta--blanca.shadow-lg.p-4
              SlyderA(tipo="b")
                .row.m-1
                  .col-12.p-4
                    h4.text-center.mb-5 #[i Say]
                    .row
                      .col-lg-6.mb-4.mb-lg-0.p-4.bg-c11
                        p #[i.txt-c7 #[b We use:]] #[i.txt-c1 #[b said + (that) + clause]]
                        TarjetaAudio.color-primario.mb-3(
                          texto="<em>She said (that) she had already left the office.</em>"
                          :audio="require('@/assets/curso/tema5/5_say.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.ms-3 Ella dijo que ya había salido de la oficina.
                        p.ms-3.mb-0 #[i.txt-c7 (#[span.txt-c1 That] is in parentheses because it is optional.)]
                        p.ms-3 (That está entre paréntesis porque es opcional.)
                        .row.justify-content-end
                          .col-auto
                            figure
                              img(src="@/assets/curso/tema5/img4.svg", style="width:80px").m-auto
                      .col-lg-6
                        figure
                          img(src="@/assets/curso/tema5/img1.png", style="width:350px").m-auto
                .row.m-1
                  .col-12.p-4
                    h4.text-center #[i Tell]
                    p.text-center.mb-5 #[i.txt-c7 With 'tell' we need to use an object, a person who we tell the information to.] #[span.txt-c5 / Con 'tell' tenemos que utilizar un objeto, una persona a la que le contamos la información.]
                    .row
                      .col-lg-6.mb-4.mb-lg-0
                        p #[i.txt-c7 #[b Tell + someone + (that) + clause]]
                        TarjetaAudio.color-primario.mb-3(
                          texto="<em>I told John (that) I had seen the report.</em>"
                          :audio="require('@/assets/curso/tema5/5_tell_1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.ms-3 Le dije a John que había visto el reporte.
                        p.ms-3.mb-4 #[i.txt-c7 When we report orders, we use another pattern with 'tell':] #[span.txt-c5 / Cuando informamos de órdenes, utilizamos otro patrón con #[i 'tell']:]
                        p #[i.txt-c7 #[b Tell + someone + to + infinitive]]
                        TarjetaAudio.color-primario.mb-3(
                          texto="<em>She told the employees to go home.</em>"
                          :audio="require('@/assets/curso/tema5/5_tell_2.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.ms-3 Les dijo a los empleados que se fueran a casa.
                      .col-lg-6
                        figure
                          img(src="@/assets/curso/tema5/img2.png", style="width:400px").m-auto
                .row.m-1
                  .col-12.p-4
                    h4.text-center #[i Ask]
                    p.text-center.mb-0 #[i.txt-c7 We use it to report questions or requests.] #[span.txt-c5 / Lo utilizamos para informar de preguntas o peticiones.]
                    p.text-center.mb-5 #[i.txt-c7 For questions, we use the pattern:] #[span.txt-c5 / Para las preguntas, utilizamos el patrón:]
                    .row
                      .col-lg-6.mb-4.mb-lg-0
                        p #[i.txt-c7 #[b Ask + someone + if / question word + clause]]
                        TarjetaAudio.color-primario.mb-3(
                          texto="<em>I asked my boss when I could start my presentation.</em>"
                          :audio="require('@/assets/curso/tema5/5_ask_1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.ms-3 Le pregunté a mi jefe cuándo podía empezar mi presentación.
                        p.ms-3.mb-4 #[i.txt-c7 For requests, we use the pattern:] #[span.txt-c5 / Para las peticiones, utilizamos el patrón:]
                        p #[i.txt-c7 #[b Ask + someone + to + infinitive]]
                        TarjetaAudio.color-primario.mb-3(
                          texto="<em>I asked Lucy to send me all the data she had.</em>"
                          :audio="require('@/assets/curso/tema5/5_ask_2.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.ms-3 Le pedí a Lucy que me enviara todos los datos que tenía.
                      .col-lg-6
                        figure
                          img(src="@/assets/curso/tema5/img3.png", style="width:400px").m-auto
                .row.m-1
                  .col-12.p-4
                    h4.text-center #[i Explain]
                    p.text-center.mb-5 #[i.txt-c7 For “explain”, we use the following patterns:] #[span.txt-c5 / Para #[i “explain”], utilizamos los siguientes patrones:]
                    .row
                      .col-lg-6.mb-4.mb-lg-0
                        p #[i.txt-c7 #[b Explain + (that) + clause]]
                        TarjetaAudio.color-primario.mb-3(
                          texto="<em>The supervisor explained that it wasn’t his responsibility.</em>"
                          :audio="require('@/assets/curso/tema5/5_explain_1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.ms-3.mb-4 El supervisor explicó que no era su responsabilidad.
                        p #[i.txt-c7 #[b Explain + noun + to + someone]]
                        TarjetaAudio.color-primario.mb-3(
                          texto="<em>She explained the rules to the new employees.</em>"
                          :audio="require('@/assets/curso/tema5/5_explain_2.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.ms-3 Explicó las normas a los nuevos empleados.
                      .col-lg-6
                        figure
                          img(src="@/assets/curso/tema5/img4.png", style="width:400px").m-auto
                .row.m-1
                  .col-12.p-4
                    h4.text-center #[i Insist]
                    p.text-center.mb-5 #[i.txt-c7 For “insist”, we use the following patterns:] #[span.txt-c5 / Para #[i “insist”], utilizamos los siguientes patrones:]
                    .row
                      .col-lg-6.mb-4.mb-lg-0
                        p #[i.txt-c7 #[b Insist + on + verb-ing]]
                        TarjetaAudio.color-primario.mb-3(
                          texto="<em>We insisted on presenting the new project.</em>"
                          :audio="require('@/assets/curso/tema5/5_insist_1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.ms-3.mb-4 Hemos insistido en presentar el nuevo proyecto.
                        p #[i.txt-c7 #[b Insist + (that) + clause]]
                        TarjetaAudio.color-primario.mb-3(
                          texto="<em>He insisted that we work late tonight.</em>"
                          :audio="require('@/assets/curso/tema5/5_insist_2.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.ms-3 Insistió en que trabajáramos hasta tarde esta noche.
                      .col-lg-6
                        figure
                          img(src="@/assets/curso/tema5/img5.png", style="width:400px").m-auto
                .row.m-1
                  .col-12.p-4
                    h4.text-center #[i Remind]
                    p.text-center.mb-5 #[i.txt-c7 For “remind”, we use the following patterns:] #[span.txt-c5 / Para #[i “remind”], utilizamos los siguientes patrones:]
                    .row
                      .col-lg-6.mb-4.mb-lg-0
                        p #[i.txt-c7 #[b Remind + someone + to + infinitive]]
                        TarjetaAudio.color-primario.mb-3(
                          texto="<em>She reminded him to take his vacation.</em>"
                          :audio="require('@/assets/curso/tema5/5_remind_1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.ms-3.mb-4 Le recordó que debía tomar sus vacaciones.
                        p #[i.txt-c7 #[b Remind + someone + (that) + clause]]
                        TarjetaAudio.color-primario.mb-3(
                          texto="<em>They reminded us that there is a meeting at noon.</em>"
                          :audio="require('@/assets/curso/tema5/5_remind_2.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.ms-3 Nos recordaron que hay una reunión a mediodía.
                      .col-lg-6
                        figure
                          img(src="@/assets/curso/tema5/img6.png", style="width:400px").m-auto
                .row.m-1
                  .col-12.p-4
                    h4.text-center #[i Suggest]
                    p.text-center.mb-5 #[i.txt-c7 For “suggest”, we use the following patterns:] #[span.txt-c5 / Para #[i “suggest”], utilizamos los siguientes patrones:]
                    .row
                      .col-lg-6.mb-4.mb-lg-0
                        p #[i.txt-c7 #[b Suggest + verb-ing]]
                        TarjetaAudio.color-primario.mb-3(
                          texto="<em>I suggest checking your mail.</em>"
                          :audio="require('@/assets/curso/tema5/5_suggest_1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.ms-3.mb-4 Te sugiero que revises tu correo.
                        p #[i.txt-c7 #[b Suggest + (that) + clause]]
                        TarjetaAudio.color-primario.mb-3(
                          texto="<em>I suggest that you start work early.</em>"
                          :audio="require('@/assets/curso/tema5/5_suggest_2.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.ms-3 Te sugiero que empieces a trabajar pronto.
                      .col-lg-6
                        figure
                          img(src="@/assets/curso/tema5/img7.png", style="width:400px").m-auto
                .row.m-1
                  .col-12.p-4
                    h4.text-center #[i Warn]
                    p.text-center.mb-5 #[i.txt-c7 For “warn”, we use the following patterns:] #[span.txt-c5 / Para #[i “warn”], utilizamos los siguientes patrones:]
                    .row
                      .col-lg-6.mb-4.mb-lg-0
                        p #[i.txt-c7 #[b Warn + someone + (not) + to + infinitive]]
                        TarjetaAudio.color-primario.mb-3(
                          texto="<em>I warned them not to use rude vocabulary with your coworkers.</em>"
                          :audio="require('@/assets/curso/tema5/5_warn_1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.ms-3.mb-4 Les advertí que no utilizaran un vocabulario grosero con tus compañeros de trabajo.
                        p #[i.txt-c7 #[b Warn + someone + about + something]]
                        TarjetaAudio.color-primario.mb-3(
                          texto="<em>She warned us about the new economic policies.</em>"
                          :audio="require('@/assets/curso/tema5/5_warn_2.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                        p.ms-3 Nos advirtió sobre las nuevas políticas económicas.
                      .col-lg-6
                        figure
                          img(src="@/assets/curso/tema5/img8.png", style="width:400px").m-auto
        .row.mb-5
          .col-12.p-4.bg-c7
            .row.align-items-center
              .col-lg-11.mb-4.mb-lg-0
                p.mb-0 #[i.txt-c7 Now that we know some reporting verbs, let’s see a real life situation in which they can be used. Complete the following conversation using the correct word to complete the sentences:] #[span.txt-c5 / Ahora que conocemos algunos verbos para reportar, veamos una situación de la vida real en la que se pueden utilizar. Complete la siguiente conversación utilizando la palabra correcta para completar las frases:]
              .col-lg-1
                figure
                  img(src="@/assets/curso/tema5/img5.svg", style="width:150px").m-auto
        Dialogo.color-primario(:dialogo="dialogo")
          template(#nombre-actividad) Arrastrar y Soltar
          template(#titulo-actividad) #[i Slang practice]
          template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.

</template>

<script>
import DialogoChat from '../components/DialogoChat.vue'
import traductor from '@/components/tarjetaTraductor.vue'
export default {
  name: 'Tema5',
  components: {
    traductor,
    DialogoChat,
  },
  data: () => ({
    dialogo: {
      personajes: [
        {
          nombre: 'Harry',
          img: require('@/assets/curso/tema5/img6.svg'),
        },
        {
          nombre: 'Karla',
          img: require('@/assets/curso/tema5/img7.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Harry',
          textoIng:
            '<i>Did you</i> *** <i>your manager to report the inconvenience?</i>',
          textoEsp: '¿Le pediste a tu gerente que informara del inconveniente?',
          audio: require('@/assets/curso/tema5/Harry1.mp3'),
          palabra: 'ask',
        },
        {
          personaje: 'Karla',
          textoIng:
            '<i>Yes, I</i> *** <i>him to report it as soon as possible.</i>',
          textoEsp: 'Sí, le dije que informara lo antes posible.',
          audio: require('@/assets/curso/tema5/Karla1.mp3'),
          palabra: 'told',
        },
        {
          personaje: 'Harry',
          textoIng:
            '<i>Remember I</i> *** <i>you about how forgetful he is.</i>',
          textoEsp: 'Recuerda que te advertí de lo olvidadizo que es.',
          audio: require('@/assets/curso/tema5/Harry2.mp3'),
          palabra: 'warned',
        },
        {
          personaje: 'Karla',
          textoIng: '<i>I know, I</i> *** <i>him to do it in the morning.</i>',
          textoEsp: 'Lo sé, le recordé que lo hiciera por la mañana.',
          audio: require('@/assets/curso/tema5/Karla2.mp3'),
          palabra: 'reminded',
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
