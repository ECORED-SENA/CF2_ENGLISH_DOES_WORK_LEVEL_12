<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 #[i Slang] (Expresiones coloquiales)
    .row.mb-5
      .col-lg-7.mb-4.mb-lg-0
        traductor.color-primario
          div(slot="textoIngles")
            p.mb-0 #[i Slang refers to expressions understood by native speakers of a language that may not be understood by non-native speakers. These expressions cannot be translated word by word in order to understand them. They have to be understood as a whole and in a context. One of these expressions used in a different context may have a completely different meaning. Let’s study some of them.]
          div(slot="textoEspanol")
            p.mb-0 #[i Slang] se refiere a las expresiones que entienden los hablantes nativos de una lengua y que pueden no ser comprendidas por los no nativos. Estas expresiones no pueden traducirse palabra por palabra para entenderlas. Hay que entenderlas en su conjunto y en un contexto. Una de estas expresiones utilizada en un contexto diferente puede tener un significado completamente distinto. Estudiemos algunas de ellas:
      .col-lg-5
        figure
          img(src="@/assets/curso/tema4/img1.png", style="width:450px").m-auto
    .row.px-5.pt-5.bg-c9
      .col-12
        .row.align-items-end.mb-5
          .col-4.d-none.d-lg-block
            figure
              img(src="@/assets/curso/tema4/img2.svg", style="width:450px").m-auto
          .col-lg-8
            .tarjeta.tarjeta--azul.shadow-lg.p-4
              SlyderF(columnas="col-12 col-md-6")
                .tarjeta.color-acento-botones.p-3.p-lg-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema4/img3.svg' alt='AvatarTop')
                  p.text-center.mb-0.txt-c7 #[i #[b To axe someone]]
                  p.text-center.mb-4 Despedir a alguien
                  p.text-center.txt-c1 #[i #[b Example]]
                  TarjetaAudio.color-primario.mb-3(
                    texto="Gina had to <em>axe</em> the new accountant."
                    :audio="require('@/assets/curso/tema4/4_slang_1.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  p.ms-3 Gina tuvo que despedir al contador nuevo.
                .tarjeta.color-acento-botones.p-3.p-lg-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema4/img2.png' alt='AvatarTop')
                  p.text-center.mb-0.txt-c7 #[i #[b Back to the drawing board]]
                  p.text-center.mb-4 Empezar de nuevo
                  p.text-center.txt-c1 #[i #[b Example]]
                  TarjetaAudio.color-primario.mb-3(
                    texto="We had to go <em>back to the drawing board</em> since the project was a failure."
                    :audio="require('@/assets/curso/tema4/4_slang_2.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  p.ms-3 Tuvimos que empezar de nuevo, ya que el proyecto fue un fallo.
                .tarjeta.color-acento-botones.p-3.p-lg-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema4/img5.svg' alt='AvatarTop')
                  p.text-center.mb-0.txt-c7 #[i #[b Back to the salt mines]]
                  p.text-center.mb-4 Volver a trabajar
                  p.text-center.txt-c1 #[i #[b Example]]
                  TarjetaAudio.color-primario.mb-3(
                    texto="Let’s go <em>back to the salt mines</em>, it’s late."
                    :audio="require('@/assets/curso/tema4/4_slang_3.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  p.ms-3 Volvamos a trabajar, es tarde.
                .tarjeta.color-acento-botones.p-3.p-lg-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema4/img6.svg' alt='AvatarTop')
                  p.text-center.mb-0.txt-c7 #[i #[b Blue collar worker]]
                  p.text-center.mb-4 Obrero
                  p.text-center.txt-c1 #[i #[b Example]]
                  TarjetaAudio.color-primario.mb-3(
                    texto="This city is full of <em>blue collar workers</em>."
                    :audio="require('@/assets/curso/tema4/4_slang_4.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  p.ms-3 Esta ciudad está llena de obreros.
                .tarjeta.color-acento-botones.p-3.p-lg-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema4/img7.svg' alt='AvatarTop')
                  p.text-center.mb-0.txt-c7 #[i #[b Deadwood]]
                  p.text-center.mb-4 Trabajador ineficiente
                  p.text-center.txt-c1 #[i #[b Example]]
                  TarjetaAudio.color-primario.mb-3(
                    texto="George is a <em>deadwood</em>, he doesn’t do anything."
                    :audio="require('@/assets/curso/tema4/4_slang_5.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  p.ms-3 George es un trabajador ineficiente, él no hace nada.
                .tarjeta.color-acento-botones.p-3.p-lg-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema4/img8.svg' alt='AvatarTop')
                  p.text-center.mb-0.txt-c7 #[i #[b Bust one’s buns]]
                  p.text-center.mb-4 Trabajar duro
                  p.text-center.txt-c1 #[i #[b Example]]
                  TarjetaAudio.color-primario.mb-3(
                    texto="We <em>busted our buns</em> the whole week."
                    :audio="require('@/assets/curso/tema4/4_slang_6.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  p.ms-3 Trabajamos muy duro toda la semana.
                .tarjeta.color-acento-botones.p-3.p-lg-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema4/img9.svg' alt='AvatarTop')
                  p.text-center.mb-0.txt-c7 #[i #[b Bumped up]]
                  p.text-center.mb-4 Recibir aumento o ser ascendido
                  p.text-center.txt-c1 #[i #[b Example]]
                  TarjetaAudio.color-primario.mb-3(
                    texto="Ivan got <em>bumped up</em> to vice president."
                    :audio="require('@/assets/curso/tema4/4_slang_7.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  p.ms-3 Iván fue promovido a vicepresidente.
                .tarjeta.color-acento-botones.p-3.p-lg-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema4/img10.svg' alt='AvatarTop')
                  p.text-center.mb-0.txt-c7 #[i #[b Carve out a niche]]
                  p.text-center.mb-4 Enfocarse en un nicho
                  p.text-center.txt-c1 #[i #[b Example]]
                  TarjetaAudio.color-primario.mb-3(
                    texto="I had to <em>carve out a niche</em> when I started my project."
                    :audio="require('@/assets/curso/tema4/4_slang_8.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  p.ms-3 Tuve que enfocarme en un nicho cuando empecé mi proyecto.
                .tarjeta.color-acento-botones.p-3.p-lg-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema4/img11.svg' alt='AvatarTop')
                  p.text-center.mb-0.txt-c7 #[i #[b Desk jockey]]
                  p.text-center.mb-4 Oficinista sedentaria
                  p.text-center.txt-c1 #[i #[b Example]]
                  TarjetaAudio.color-primario.mb-3(
                    texto="Dana is a <em>desk jockey</em>, she never leaves her cubicle."
                    :audio="require('@/assets/curso/tema4/4_slang_9.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  p.ms-3 Dana es una oficinista sedentaria, nunca sale de su cubículo.
                .tarjeta.color-acento-botones.p-3.p-lg-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema4/img12.svg' alt='AvatarTop')
                  p.text-center.mb-0.txt-c7 #[i #[b Dog eat dog world]]
                  p.text-center.mb-4 Un mundo cruel
                  p.text-center.txt-c1 #[i #[b Example]]
                  TarjetaAudio.color-primario.mb-3(
                    texto="Don’t trust anyone, this is a <em>dog eat dog world</em>."
                    :audio="require('@/assets/curso/tema4/4_slang_10.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  p.ms-3 No te fíes de nadie, este es un mundo cruel.
                .tarjeta.color-acento-botones.p-3.p-lg-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema4/img13.svg' alt='AvatarTop')
                  p.text-center.mb-0.txt-c7 #[i #[b Game changer]]
                  p.text-center.mb-4 Iniciativa única
                  p.text-center.txt-c1 #[i #[b Example]]
                  TarjetaAudio.color-primario.mb-3(
                    texto="This new deal is a <em>game changer</em>!"
                    :audio="require('@/assets/curso/tema4/4_slang_11.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  p.ms-3 ¡Este nuevo trato es una iniciativa única!
                .tarjeta.color-acento-botones.p-3.p-lg-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema4/img14.svg' alt='AvatarTop')
                  p.text-center.mb-0.txt-c7 #[i #[b Win-win scenario]]
                  p.text-center.mb-4 Algo bueno para todos
                  p.text-center.txt-c1 #[i #[b Example]]
                  TarjetaAudio.color-primario.mb-3(
                    texto="This is a <em>win-win scenario</em>, just sign."
                    :audio="require('@/assets/curso/tema4/4_slang_12.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  p.ms-3 Esto es algo bueno para todos, solo firma.
        .row.mb-5
          .col-12.p-4.bg-c7
            .row.align-items-center
              .col-lg-11.mb-4.mb-lg-0
                p.mb-0 #[i.txt-c7 Now that we know some slang, let’s see a real life situation in which it can be used. Complete the following conversation using the correct word to complete the sentences:] #[span.txt-c5 / Ahora que conocemos algunas expresiones coloquiales, veamos una situación de la vida real en la que se pueden utilizar. Complete la siguiente conversación utilizando la palabra correcta para completar las frases:]
              .col-lg-1
                figure
                  img(src="@/assets/curso/tema1/img11.svg", style="width:150px").m-auto
        Dialogo.color-primario(:dialogo="dialogo")
          template(#nombre-actividad) Arrastrar y Soltar
          template(#titulo-actividad) #[i Slang practice]
          template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.

</template>

<script>
import DialogoChat from '../components/DialogoChat.vue'
import traductor from '@/components/tarjetaTraductor.vue'
export default {
  name: 'Tema4',
  components: {
    traductor,
    DialogoChat,
  },
  data: () => ({
    dialogo: {
      personajes: [
        {
          nombre: 'Robert',
          img: require('@/assets/curso/tema4/img15.svg'),
        },
        {
          nombre: 'Sara',
          img: require('@/assets/curso/tema4/img16.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Robert',
          textoIng:
            '<i>Hey, Sara, is it time to go</i> *** <i>to the salt mines?</i>',
          textoEsp: 'Oye, Sara, ¿es hora de volver al trabajo?',
          audio: require('@/assets/curso/tema4/Robert1.mp3'),
          palabra: 'back',
        },
        {
          personaje: 'Sara',
          textoIng: '<i>No, we</i> *** <i>have half an hour.</i>',
          textoEsp: 'No, todavía tenemos media hora.',
          audio: require('@/assets/curso/tema4/Sara1.mp3'),
          palabra: 'still',
        },
        {
          personaje: 'Robert',
          textoIng:
            '<i>I heard Danny is going to be</i> *** <i>up, is it true?</i>',
          textoEsp: 'He oído que Danny va a ser ascendido, ¿es verdad?',
          audio: require('@/assets/curso/tema4/Robert2.mp3'),
          palabra: 'bumped',
        },
        {
          personaje: 'Sara',
          textoIng: '<i>I don’t think so; he is such a</i> ***<i>!</i>',
          textoEsp: 'No lo creo, ¡él es muy ineficiente!',
          audio: require('@/assets/curso/tema4/Sara2.mp3'),
          palabra: 'deadwood',
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
