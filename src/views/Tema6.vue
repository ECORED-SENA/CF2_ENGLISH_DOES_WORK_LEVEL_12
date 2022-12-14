<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span 6
      h1 #[i Feeling verbs] (Verbos que expresan sentimientos)
    .row.px-5.pt-5.bg-c12
      .col-12
        .row.align-items-start.mb-5
          .col-lg-4.mb-4.mb-lg-0
            traductor.color-primario
              div(slot="textoIngles")
                p.mb-0 #[i Being able to express feelings is an important skill no matter the language you are learning. However, people tend to use the same basic verbs; therefore, it is a good idea to start learning some alternatives that will allow you to show your feelings in a more complex way. Let’s see some other ways to express your feelings:]
              div(slot="textoEspanol")
                p.mb-0 Ser capaz de expresar los sentimientos es una habilidad importante, independientemente del idioma que se aprenda. Sin embargo, la gente tiende a utilizar los mismos verbos básicos; por lo tanto, es una buena idea empezar a aprender algunas alternativas que le permitirán mostrar sus sentimientos de una manera más compleja. Veamos otras formas de expresar sus sentimientos:
          .col-lg-8
            .tarjeta.tarjeta--azul.shadow-lg.p-4
              SlyderF(columnas="col-12 col-md-6")
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/tema6/img1.png' alt='AvatarTop')
                    .col-12.p-4
                      p.text-center.mb-0.txt-c7.mb-4 #[i #[b Bottle up]]
                      p.text-center.mb-4 #[i When people repress their feelings and don’t want to talk about them or show them.]
                      TarjetaAudio.color-primario(
                        texto="If you feel sad, you should cry instead of <em>bottle up</em> your feelings."
                        :audio="require('@/assets/curso/tema6/6_bottle.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/tema6/img2.png' alt='AvatarTop')
                    .col-12.p-4
                      p.text-center.mb-0.txt-c7.mb-4 #[i #[b Calm down]]
                      p.text-center.mb-4 #[i You make yourself calm and relaxed. Besides, you can also tell someone to #[b.txt-c1 calm down] or #[b.txt-c1 calm] them #[b.txt-c1 down].]
                      TarjetaAudio.color-primario(
                        texto="The manager was so upset that it took his boss a while to <em>calm</em> him <em>down</em>."
                        :audio="require('@/assets/curso/tema6/6_calm.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/tema6/img3.png' alt='AvatarTop')
                    .col-12.p-4
                      p.text-center.mb-0.txt-c7.mb-4 #[i #[b Cheer up]]
                      p.text-center.mb-4 #[i To cheer up means to start feeling happier. You can #[b.txt-c1 cheer up] or #[b.txt-c1 cheer] someone #[b.txt-c1 up].]
                      TarjetaAudio.color-primario(
                        texto="After Martin lost his job, his friends threw him a party to <em>cheer</em> him <em>up</em>."
                        :audio="require('@/assets/curso/tema6/6_cheer.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/tema6/img4.png' alt='AvatarTop')
                    .col-12.p-4
                      p.text-center.mb-0.txt-c7.mb-4 #[i #[b Crack up]]
                      p.text-center.mb-4 #[i Someone who cracks up is unable to think and behave sensibly because of too many problems.]
                      TarjetaAudio.color-primario(
                        texto="Everyone who works as much as you do will <em>crack up</em> sooner or later."
                        :audio="require('@/assets/curso/tema6/6_crack.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/tema6/img5.png' alt='AvatarTop')
                    .col-12.p-4
                      p.text-center.mb-0.txt-c7.mb-4 #[i #[b Freak out]]
                      p.text-center.mb-4 #[i To freak out means to become afraid, excited or anxious.]
                      TarjetaAudio.color-primario(
                        texto="David totally <em>freaked out</em> when he got a memo."
                        :audio="require('@/assets/curso/tema6/6_freak.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/tema6/img6.png' alt='AvatarTop')
                    .col-12.p-4
                      p.text-center.mb-0.txt-c7.mb-4 #[i #[b Let down]]
                      p.text-center.mb-4 #[i If you let someone down, you disappoint them.]
                      TarjetaAudio.color-primario(
                        texto="Brenda really felt she <em>let</em> her coworkers <em>down</em> when she quit her job."
                        :audio="require('@/assets/curso/tema6/6_let.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/tema6/img7.png' alt='AvatarTop')
                    .col-12.p-4
                      p.text-center.mb-0.txt-c7.mb-4 #[i #[b Light up]]
                      p.text-center.mb-4 #[i If your eyes or face light up, you express happiness.]
                      TarjetaAudio.color-primario(
                        texto="His face <em>lit up</em> when they told him that he got a raise."
                        :audio="require('@/assets/curso/tema6/6_light.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/tema6/img8.png' alt='AvatarTop')
                    .col-12.p-4
                      p.text-center.mb-0.txt-c7.mb-4 #[i #[b Take out on]]
                      p.text-center.mb-4 #[i When you unjustly treat someone badly because you’re angry at someone else.]
                      TarjetaAudio.color-primario(
                        texto="I understand you have problems, but you shouldn’t <em>take</em> them <em>out on</em> me."
                        :audio="require('@/assets/curso/tema6/6_take.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/tema6/img9.png' alt='AvatarTop')
                    .col-12.p-4
                      p.text-center.mb-0.txt-c7.mb-4 #[i #[b Tear up]]
                      p.text-center.mb-4 #[i To #[b.txt-c1 tear up] means to have tears in your eyes, to begin to cry.]
                      TarjetaAudio.color-primario(
                        texto="Frank was fired and his eyes started to <em>tear up</em>."
                        :audio="require('@/assets/curso/tema6/6_tear.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/tema6/img10.png' alt='AvatarTop')
                    .col-12.p-4
                      p.text-center.mb-0.txt-c7.mb-4 #[i #[b Tell off]]
                      p.text-center.mb-4 #[i If you #[b.txt-c1 tell] someone #[b.txt-c1 off], you speak to them angrily for doing something wrong.]
                      TarjetaAudio.color-primario(
                        texto="If she arrives late again, he’s going to <em>tell</em> her <em>off</em>."
                        :audio="require('@/assets/curso/tema6/6_tell.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .row.mb-5
          .col-12.p-4.bg-c7
            .row.align-items-center
              .col-lg-11.mb-4.mb-lg-0
                p.mb-0 #[i.txt-c7 Now that we have learned some different verbs to express feelings, let’s see a real life situation in which they can be used. Complete the following conversation using the correct word to complete the sentences:] #[span.txt-c5 / Ahora que hemos aprendido algunos verbos diferentes para expresar sentimientos, veamos una situación de la vida real en la que se pueden utilizar. Complete la siguiente conversación utilizando la palabra correcta para completar las frases:]
              .col-lg-1
                figure
                  img(src="@/assets/curso/tema6/img2.svg", style="width:150px").m-auto
        Dialogo.color-primario(:dialogo="dialogo")
          template(#nombre-actividad) Arrastrar y Soltar
          template(#titulo-actividad) #[i Feeling verbs practice]
          template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.

</template>

<script>
import DialogoChat from '../components/DialogoChat.vue'
import traductor from '@/components/tarjetaTraductor.vue'
export default {
  name: 'Tema6',
  components: {
    traductor,
    DialogoChat,
  },
  data: () => ({
    dialogo: {
      personajes: [
        {
          nombre: 'Victor',
          img: require('@/assets/curso/tema6/img3.svg'),
        },
        {
          nombre: 'Lina',
          img: require('@/assets/curso/tema6/img4.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Victor',
          textoIng: '<i>Is it true your boss</i> *** <i>it out on you?</i>',
          textoEsp: '¿Es cierto que tu jefe se desquitó contigo?',
          audio: require('@/assets/curso/tema6/Victor1.mp3'),
          palabra: 'took',
        },
        {
          personaje: 'Lina',
          textoIng: '<i>Yes, and I started to</i> ***<i>.</i>',
          textoEsp: 'Sí, y empecé a llorar.',
          audio: require('@/assets/curso/tema6/Lina1.mp3'),
          palabra: 'tear up',
        },
        {
          personaje: 'Victor',
          textoIng:
            '<i>That’s really unfair! Anyone would</i> *** <i>up if they had a boss like yours.</i>',
          textoEsp:
            '¡Eso es muy injusto! Cualquiera se derrumbaría si tuviera un jefe como el tuyo.',
          audio: require('@/assets/curso/tema6/Victor2.mp3'),
          palabra: 'crack',
        },
        {
          personaje: 'Lina',
          textoIng:
            '*** <i>down! It is not that bad, it was a one-time thing.</i>',
          textoEsp: '¡Cálmate! No es tan grave, fue algo de una sola vez.',
          audio: require('@/assets/curso/tema6/Lina2.mp3'),
          palabra: 'Calm',
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
