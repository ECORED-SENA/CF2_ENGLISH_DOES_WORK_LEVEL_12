<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 #[i Pronunciation tips] (Tips de pronunciación)
    .row.mb-5
      .col-lg-9.mb-4.mb-lg-0
        traductor.color-primario
          div(slot="textoIngles")
            p.mb-0 #[i In this part, we are going to work on sentence stress. There are four types of stress in English that will help your emphasis or focus the listener’s attention on what you want them to concentrate. The four types of stress are: tonic, emphatic, contrastive, and new information stress. Let’s see how each of them work.]
          div(slot="textoEspanol")
            p.mb-0 En esta parte, vamos a trabajar el acento de las frases. Hay cuatro tipos de acento en inglés que le ayudarán a enfatizar o centrar la atención del oyente en lo que usted quiere que se concentre. Los cuatro tipos de acento son: tónico, enfático, contrastivo y de nueva información. Veamos cómo funciona cada uno de ellos.
      .col-lg-3
        figure
          img(src="@/assets/curso/tema7/img1.svg", style="width:250px").m-auto
    .row.align-items-end.mb-5
      .col-lg-4.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema7/img2.svg", style="width:450px").m-auto
      .col-lg-8
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="<em>Tonic Stress</em>")
            .col-12.px-4
              .row
                .col-12.p-4.bg-c2
                  p #[i.txt-c7 Tonic stress refers to emphasizing your intonation on the most relevant words of a sentence. The tonic stress is not only for one word of the sentence. It is necessary to have in mind what are the words you want your listener to focus on.] #[span.txt-c5 / El acento tónico se refiere a enfatizar su entonación en las palabras más relevantes de una frase. El acento tónico no es sólo para una palabra de la frase. Es necesario tener en cuenta cuáles son las palabras en las que quiere que se centre su oyente.]
                  .row
                    .col-12
                      p #[i #[b Examples:]]
                    .col-lg-8.mb-4.mb-lg-0
                      TarjetaAudio.color-primario.mb-3(
                        texto="He's <em>waiting</em> for his <em>friend</em> at the <em>station</em>."
                        :audio="require('@/assets/curso/tema7/7_example_tonic.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      p.ms-3.mb-4 Está esperando a su amigo en la estación.
                      p #[i.txt-c7 The final tonic stress in a sentence receives the most stress. In the previous example, 'station' receives the strongest stress.] #[span.txt-c5 / El acento tónico final de una frase es el que más se acentúa. En el ejemplo anterior, "station" recibe el acento más fuerte.]
                    .col-lg-4
                      figure
                        img(src="@/assets/curso/tema7/img1.png", style="width:250px").m-auto
          .row(titulo="<em>Emphatic Stress</em>")
            .col-12.px-4
              .row
                .col-12.p-4.bg-c2
                  p #[i.txt-c7 When you decide to emphasize something, you can change the stress from the principal noun to another content word, such as an adjective, intensifier.] #[span.txt-c5 / Cuando se decide enfatizar algo, se puede cambiar el acento del sustantivo principal a otra palabra de contenido, como un adjetivo, intensificador.]
                  .row
                    .col-12
                      p #[i #[b Examples:]]
                    .col-lg-8.mb-4.mb-lg-0
                      TarjetaAudio.color-primario.mb-3(
                        texto="That was a <em>difficult</em> test. - Emphasizes how difficult the test was."
                        :audio="require('@/assets/curso/tema7/7_example_emphatic.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      p.ms-3.mb-4 Fue una prueba difícil. - Destaca lo difícil que fue la prueba.
                      p #[i.txt-c7 Here are some adverbs and modifiers which tend to be used to emphasize in sentences that receive emphatic stress:] #[span.txt-c5 / Estos son algunos de los adverbios y modificadores que suelen utilizarse para enfatizar en las frases que reciben acento enfático:]
                      p #[i.txt-c1 #[b Extremely, terribly, completely ,utterly and especially.]]
                    .col-lg-4
                      figure
                        img(src="@/assets/curso/tema7/img2.png", style="width:250px").m-auto
          .row(titulo="<em>Contrastive Stress</em>")
            .col-12.px-4
              .row
                .col-12.p-4.bg-c2
                  p #[i.txt-c7 Contrastive stress is used to point out the difference between one object and another. Contrastive stress tends to be used with determiners such as 'this, that, these, and those'.] #[span.txt-c5 / El acento contrastivo se utiliza para señalar la diferencia entre un objeto y otro. El acento contrastivo suele utilizarse con determinantes como #[i "this, that, these y those"]. ]
                  .row
                    .col-12
                      p #[i #[b Examples:]]
                    .col-lg-8.mb-4.mb-lg-0
                      TarjetaAudio.color-primario.mb-3(
                        texto="<em>He</em> came to the meeting yesterday. (It was he, not someone else.)"
                        :audio="require('@/assets/curso/tema7/7_example_contrastive_1.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      p.ms-3.mb-4 Ayer vino a la reunión. (Fue él, no otra persona.)
                      TarjetaAudio.color-primario.mb-3(
                        texto="He <em>walked</em> to the meeting yesterday. (He walked, rather than drove.)"
                        :audio="require('@/assets/curso/tema7/7_example_contrastive_2.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      p.ms-3.mb-4 Llegó a la reunión ayer a pie. (A pie, en lugar de conduciendo.)
                      TarjetaAudio.color-primario.mb-3(
                        texto="He came to the <em>meeting</em> yesterday. (It was a meeting, not a class or something else.)"
                        :audio="require('@/assets/curso/tema7/7_example_contrastive_3.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      p.ms-3.mb-4 Vino a la reunión ayer. (Fue una reunión, no una clase o algo más.)
                      TarjetaAudio.color-primario.mb-3(
                        texto="He came to the meeting <em>yesterday</em>. (It was yesterday, not two weeks ago or some other time.)"
                        :audio="require('@/assets/curso/tema7/7_example_contrastive_4.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      p.ms-3 Vino a la reunión ayer. (Fue ayer, no hace dos semanas o alguna otra vez.)
                    .col-lg-4
                      figure
                        img(src="@/assets/curso/tema7/img3.png", style="width:250px").m-auto
          .row(titulo="<em>New Information Stress</em>")
            .col-12.px-4
              .row
                .col-12.p-4.bg-c2
                  p #[i.txt-c7 When asked a question, the requested information is naturally stressed more strongly.] #[span.txt-c5 / Cuando se hace una pregunta, naturalmente se insiste más en la información solicitada.]
                  .row
                    .col-12
                      p #[i #[b Examples:]]
                    .col-lg-8.mb-4.mb-lg-0
                      TarjetaAudio.color-primario.mb-3(
                        texto="Where do you work? - I work in <em>Seattle</em>, in the USA."
                        :audio="require('@/assets/curso/tema7/7_example_new.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                      p.ms-3 ¿Dónde trabajas? - Trabajo en Seattle, en Estados Unidos.
                    .col-lg-4
                      figure
                        img(src="@/assets/curso/tema7/img4.png", style="width:250px").m-auto
    .row.px-5.pt-5.bg-c13
      .col-12
        p.mb-5 #[i.txt-c7 English has fifteen vowel sounds represented by the letters a, e, i, o, and u. Vowel sounds are produced with a relatively open vocal tract. So we are going to practice the next video. Listen, repeat, and pay attention to the tips:] #[span.txt-c5 / El inglés tiene quince sonidos vocálicos representados por las letras a, e, i, o y u. Los sonidos de las vocales se producen con un tracto vocal relativamente abierto. Así que vamos a practicar con el siguiente video. Escuche, repita y preste atención a los consejos:]
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/Uy8LGEOSDHA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        .row.mb-5
          .col-lg-10.mb-4.mb-lg-0
            traductor.color-primario
              div(slot="textoIngles")
                p.mb-0 #[i We have learned some tips to improve your pronunciation. Now, let’s see a real life situation in which they can be used. Complete the following conversation using the correct word to complete the sentences:]
              div(slot="textoEspanol")
                p.mb-0 Hemos aprendido algunos consejos para mejorar su pronunciación. Ahora, veamos una situación de la vida real en la que se pueden utilizar. Complete la siguiente conversación utilizando la palabra correcta para completar las frases:
          .col-lg-2
            figure
              img(src="@/assets/curso/tema7/img3.svg", style="width:150px").m-auto
        Dialogo.color-primario(:dialogo="dialogo")
          template(#nombre-actividad) Arrastrar y Soltar
          template(#titulo-actividad) #[i Pronunciation tips practice]
          template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.

</template>

<script>
import DialogoChat from '../components/DialogoChat.vue'
import traductor from '@/components/tarjetaTraductor.vue'
export default {
  name: 'Tema7',
  components: {
    traductor,
    DialogoChat,
  },
  data: () => ({
    dialogo: {
      personajes: [
        {
          nombre: 'Paula',
          img: require('@/assets/curso/tema7/img4.svg'),
        },
        {
          nombre: 'Marcos',
          img: require('@/assets/curso/tema7/img5.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Paula',
          textoIng:
            '<i>Hi, Marcos, long time no see,</i> *** <i>are you working?</i>',
          textoEsp:
            'Hola Marcos, cuánto tiempo sin verte, ¿dónde estás trabajando?',
          audio: require('@/assets/curso/tema7/Paula1.mp3'),
          palabra: 'where',
        },
        {
          personaje: 'Marcos',
          textoIng:
            '<i>You are right, it’s because I</i> *** <i>and am now working in Texas.</i>',
          textoEsp:
            'Tienes razón, es porque me he mudado y ahora estoy trabajando en Texas.',
          audio: require('@/assets/curso/tema7/Marcos1.mp3'),
          palabra: 'moved',
        },
        {
          personaje: 'Paula',
          textoIng: '<i>I can’t believe you moved to</i> *** <i>.</i>',
          textoEsp: 'No puedo creer que te hayas mudado a Texas.',
          audio: require('@/assets/curso/tema7/Paula2.mp3'),
          palabra: 'Texas',
        },
        {
          personaje: 'Marcos',
          textoIng:
            '<i>I know, it is</i> *** <i>hot there and I hate the heat.</i>',
          textoEsp: 'Lo sé, allí hace mucho calor y lo odio.',
          audio: require('@/assets/curso/tema7/Marcos2.mp3'),
          palabra: 'extremely',
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
