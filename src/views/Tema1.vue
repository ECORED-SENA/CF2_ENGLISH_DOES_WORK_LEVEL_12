<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 #[i Applied grammar] (Gramática aplicada)
    .row.mb-5
      .col-lg-7.mb-4.mb-lg-0
        traductor.color-primario
          div(slot="textoIngles")
            p.mb-0 #[i When using English, it is important to understand when to use and how to #[b.txt-c1 use the grammar] tenses in this language.  In this first part of the component, we will review and practice the most important characteristics of the grammar structures seen throughout the levels already studied in this course. Let’s take a look at them:]
          div(slot="textoEspanol")
            p.mb-0 A la hora de utilizar el inglés, es importante entender cuándo y cómo utilizar los tiempos gramaticales de esta lengua.  En esta primera parte del componente, revisaremos y practicaremos las características más importantes de las estructuras gramaticales vistas a lo largo de los niveles ya estudiados en este curso. Echemos un vistazo a cada una de ellas:
      .col-lg-5
        figure
          img(src="@/assets/curso/tema1/img1.png", style="width:450px").m-auto
    .row.p-5.bg-c4.mb-5
      .col-12
        .row.align-items-end
          .col-2.d-none.d-lg-block
            figure
              img(src="@/assets/curso/tema1/img2.svg", style="width:450px").m-auto
          .col-lg-10
            .tarjeta.tarjeta--blanca.shadow-lg.p-4
              SlyderA(tipo="b")
                .row.m-1
                  .col-12.p-4
                    h4.text-center.mb-5 #[i Simple Present]
                    .row.mb-4
                      .col-lg-2.mb-4.mb-lg-0
                        figure
                          img(src="@/assets/curso/tema1/img3.svg", style="width:150px").m-auto
                      .col-lg-10
                        traductor.color-primario
                          div(slot="textoIngles")
                            p.mb-0 #[i Simple present is used to talk about everyday activities and routines. There is a difference when working on sentences with I, you, we, they, and she, he, it. The structures are almost the same, but the verbs are conjugated in the affirmative sentences, and the auxiliary verbs in the negative and interrogative sentences. Let’s see some examples:]
                          div(slot="textoEspanol")
                            p.mb-0 El presente simple se utiliza para hablar de actividades y rutinas cotidianas. Hay una diferencia cuando se trabajan frases con I, you, we, they y she, he, it. Las estructuras son casi las mismas, pero los verbos se conjugan en las oraciones afirmativas, y los verbos auxiliares en las negativas e interrogativas. Veamos unos ejemplos:
                    .tabla-a.color-acento-botones.mb-4
                      table
                        thead
                          tr.borde1
                            th(style="width:15% !important") #[i Form]
                            th.borde1 #[i Sentences with “I, you, we, they”]
                            th #[i Sentences with “she, he, it”]
                        tbody
                          tr.borde1
                            td #[i Affirmative]
                            td.borde1
                              .row.align-items-center
                                .col-auto
                                  Audio.color-acento-botones.mx-auto(
                                    :audio="require('@/assets/curso/tema1/audio1.mp3')"
                                    @audio-hover="mostrarIndicadorAudio = false"
                                  )
                                .col
                                  p.mb-0 #[i Subject + verb + complement]
                                  p.mb-0 #[i #[b We study markets.]]
                            td
                              .row.align-items-center
                                .col-auto
                                  Audio.color-acento-botones.mx-auto(
                                    :audio="require('@/assets/curso/tema1/audio2.mp3')"
                                    @audio-hover="mostrarIndicadorAudio = false"
                                  )
                                .col
                                  p.mb-0 #[i Subject + conjugated verb + complement]
                                  p.mb-0 #[i #[b She studies markets.]]
                          tr.borde1
                            td #[i Negative]
                            td.borde1
                              .row.align-items-center
                                .col-auto
                                  Audio.color-acento-botones.mx-auto(
                                    :audio="require('@/assets/curso/tema1/audio3.mp3')"
                                    @audio-hover="mostrarIndicadorAudio = false"
                                  )
                                .col
                                  p.mb-0 #[i Subject + do not + verb + complement]
                                  p.mb-0 #[i #[b We don’t study markets.]]
                            td
                              .row.align-items-center
                                .col-auto
                                  Audio.color-acento-botones.mx-auto(
                                    :audio="require('@/assets/curso/tema1/audio4.mp3')"
                                    @audio-hover="mostrarIndicadorAudio = false"
                                  )
                                .col
                                  p.mb-0 #[i Subject + does not + verb + complement]
                                  p.mb-0 #[i #[b She doesn’t study markets.]]
                          tr.borde1
                            td #[i Interrogative]
                            td.borde1
                              .row.align-items-center
                                .col-auto
                                  Audio.color-acento-botones.mx-auto(
                                    :audio="require('@/assets/curso/tema1/audio5.mp3')"
                                    @audio-hover="mostrarIndicadorAudio = false"
                                  )
                                .col
                                  p.mb-0 #[i Do + subject + verb + complement?]
                                  p.mb-0 #[i #[b Do we study markets?]]
                            td
                              .row.align-items-center
                                .col-auto
                                  Audio.color-acento-botones.mx-auto(
                                    :audio="require('@/assets/curso/tema1/audio6.mp3')"
                                    @audio-hover="mostrarIndicadorAudio = false"
                                  )
                                .col
                                  p.mb-0 #[i Does + subject + verb + complement?]
                                  p.mb-0 #[i #[b Does she study markets?]]
                    .row.justify-content-center
                      .col-lg-8.p-4.bg-c3
                        .row.align-items-center
                          .col
                            p.txt-c3.mb-0 Aquí podrá repasar las reglas para conjugar los verbos en las oraciones afirmativas con #[i.txt-c2 #[b she, he, it]]:
                          .col-auto
                            a.boton.color-acento-botones.me-3(href="https://www.britannica.com/dictionary/eb/qa/third-person-singular-s-simple-present-tense" target="_blank" type="application/pdf")
                              span Ir al sitio
                              i.fas.fa-link
                .row.m-1
                  .col-12.p-4
                    h4.text-center.mb-5 #[i Simple Past]
                    .row.mb-4
                      .col-lg-2.mb-4.mb-lg-0
                        figure
                          img(src="@/assets/curso/tema1/img4.svg", style="width:150px").m-auto
                      .col-lg-10
                        traductor.color-primario
                          div(slot="textoIngles")
                            p.mb-0 #[i The simple past is used to talk about events that occurred in the past. The verbs only appear in the past in the affirmative sentences. Depending on the type of verb, verbs are conjugated in a different way. Regular verbs use rules (ied, ed, d), and the irregular verbs are found in the irregular verbs list. Let’s see some examples:]
                          div(slot="textoEspanol")
                            p.mb-0 El pasado simple se utiliza para hablar de hechos ocurridos en el pasado. Los verbos solo aparecen en pasado en las frases afirmativas. Según el tipo de verbo, los verbos se conjugan de forma diferente. Los verbos regulares utilizan las reglas (#[i ied, ed, d]), y los irregulares se encuentran en la lista de verbos irregulares. Veamos algunos ejemplos:
                    .tabla-a.color-acento-botones.mb-4
                      table
                        thead
                          tr.borde1
                            th(style="width:15% !important") #[i Form]
                            th.borde1 #[i Sentences with regular verbs]
                            th #[i Sentences with irregular verbs]
                        tbody
                          tr.borde1
                            td #[i Affirmative]
                            td.borde1
                              .row.align-items-center
                                .col-auto
                                  Audio.color-acento-botones.mx-auto(
                                    :audio="require('@/assets/curso/tema1/1_simple_past_izq_affirmative.mp3')"
                                    @audio-hover="mostrarIndicadorAudio = false"
                                  )
                                .col
                                  p.mb-0 #[i Subject + conjugated verb + complement]
                                  p.mb-0 #[i #[b We worked late.]]
                            td
                              .row.align-items-center
                                .col-auto
                                  Audio.color-acento-botones.mx-auto(
                                    :audio="require('@/assets/curso/tema1/1_simple_past_der_affirmative.mp3')"
                                    @audio-hover="mostrarIndicadorAudio = false"
                                  )
                                .col
                                  p.mb-0 #[i Subject + conjugated verb + complement]
                                  p.mb-0 #[i #[b She went to a meeting.]]
                          tr.borde1
                            td #[i Negative]
                            td.borde1
                              .row.align-items-center
                                .col-auto
                                  Audio.color-acento-botones.mx-auto(
                                    :audio="require('@/assets/curso/tema1/1_simple_past_izq_negative.mp3')"
                                    @audio-hover="mostrarIndicadorAudio = false"
                                  )
                                .col
                                  p.mb-0 #[i Subject + did not + verb + complement]
                                  p.mb-0 #[i #[b We didn’t work late.]]
                            td
                              .row.align-items-center
                                .col-auto
                                  Audio.color-acento-botones.mx-auto(
                                    :audio="require('@/assets/curso/tema1/1_simple_past_der_negative.mp3')"
                                    @audio-hover="mostrarIndicadorAudio = false"
                                  )
                                .col
                                  p.mb-0 #[i Subject + did not + verb + complement]
                                  p.mb-0 #[i #[b She didn’t go to a meeting.]]
                          tr.borde1
                            td #[i Interrogative]
                            td.borde1
                              .row.align-items-center
                                .col-auto
                                  Audio.color-acento-botones.mx-auto(
                                    :audio="require('@/assets/curso/tema1/1_simple_past_izq_interrogative.mp3')"
                                    @audio-hover="mostrarIndicadorAudio = false"
                                  )
                                .col
                                  p.mb-0 #[i Did + subject + verb + complement?]
                                  p.mb-0 #[i #[b Did we work late?]]
                            td
                              .row.align-items-center
                                .col-auto
                                  Audio.color-acento-botones.mx-auto(
                                    :audio="require('@/assets/curso/tema1/1_simple_past_der_interrogative.mp3')"
                                    @audio-hover="mostrarIndicadorAudio = false"
                                  )
                                .col
                                  p.mb-0 #[i Did + subject + verb + complement?]
                                  p.mb-0 #[i #[b Did she go to a meeting?]]
                    .row.justify-content-center
                      .col-lg-8.p-4.bg-c3
                        .row.align-items-center.mb-3
                          .col
                            p.txt-c3.mb-0 Aquí podrá repasar las reglas para conjugar los verbos regulares en pasado:
                          .col-auto
                            a.boton.color-acento-botones.me-3(href="https://www.britishcouncil.org.mx/blog/regular-verbs" target="_blank" type="application/pdf")
                              span Ir al sitio
                              i.fas.fa-link
                        .row.align-items-center
                          .col
                            p.txt-c3.mb-0  Y aquí una lista completa de verbos irregulares:
                          .col-auto
                            a.boton.color-acento-botones.me-3(href="https://www.academia.edu/22717813/List_of_616_English_Irregular_Verbs" target="_blank" type="application/pdf")
                              span Ir al sitio
                              i.fas.fa-link
                .row.m-1
                  .col-12.p-4
                    h4.text-center.mb-5 #[i Future Will]
                    .row.mb-4
                      .col-lg-2.mb-4.mb-lg-0
                        figure
                          img(src="@/assets/curso/tema1/img5.svg", style="width:150px").m-auto
                      .col-lg-10
                        traductor.color-primario
                          div(slot="textoIngles")
                            p.mb-0 #[i Will is used to talk about the future. The difference with other future tenses such as “be going to” and present continuous is that they have to talk about plans, but the future with “will” can show plans in the future, possibilities, and decisions made at the moment of speaking. The verbs are never conjugated. Let’s see some examples:]
                          div(slot="textoEspanol")
                            p.mb-0 #[i Will] se utiliza para hablar del futuro. La diferencia con otros tiempos de futuro como “be going to” y present continuous es que estos tienen que hablar de planes, pero el futuro con "will" puede mostrar planes en el futuro, posibilidades y decisiones tomadas en el momento de hablar. Los verbos nunca se conjugan. Veamos algunos ejemplos:
                    .row.justify-content-center
                      .col-lg-10
                        .tabla-a.color-acento-botones.mb-4
                          table
                            thead
                              tr.borde1
                                th(style="width:15% !important") #[i Form]
                                th.borde1 #[i Sentences in the future with “will”]
                            tbody
                              tr.borde1
                                td #[i Affirmative]
                                td.borde1
                                  .row.align-items-center
                                    .col-auto
                                      Audio.color-acento-botones.mx-auto(
                                        :audio="require('@/assets/curso/tema1/1_future_affirmative.mp3')"
                                        @audio-hover="mostrarIndicadorAudio = false"
                                      )
                                    .col
                                      p.mb-0 #[i Subject + will + verb + complement]
                                      p.mb-0 #[i #[b Dana will be promoted.]]
                              tr.borde1
                                td #[i Negative]
                                td.borde1
                                  .row.align-items-center
                                    .col-auto
                                      Audio.color-acento-botones.mx-auto(
                                        :audio="require('@/assets/curso/tema1/1_future_negative.mp3')"
                                        @audio-hover="mostrarIndicadorAudio = false"
                                      )
                                    .col
                                      p.mb-0 #[i Subject + will not + verb + complement]
                                      p.mb-0 #[i #[b Dana won’t be promoted.]]
                              tr.borde1
                                td #[i Interrogative]
                                td.borde1
                                  .row.align-items-center
                                    .col-auto
                                      Audio.color-acento-botones.mx-auto(
                                        :audio="require('@/assets/curso/tema1/1_future_interrogative.mp3')"
                                        @audio-hover="mostrarIndicadorAudio = false"
                                      )
                                    .col
                                      p.mb-0 #[i Will + subject + verb + complement?]
                                      p.mb-0 #[i #[b Will Dana be promoted?]]
                .row.m-1
                  .col-12.p-4
                    h4.text-center.mb-5 #[i Present Continuous]
                    .row.mb-4
                      .col-lg-2.mb-4.mb-lg-0
                        figure
                          img(src="@/assets/curso/tema1/img6.svg", style="width:150px").m-auto
                      .col-lg-10
                        traductor.color-primario
                          div(slot="textoIngles")
                            p.mb-0 #[i Present continuous is used to talk about actions that are happening at the moment. The verbs are always used in ING form and the verb “to be” in present (am, are, is) is used as an auxiliary verb. Let’s see some examples:]
                          div(slot="textoEspanol")
                            p.mb-0 El presente continuo se utiliza para hablar de acciones que están sucediendo en el momento. Los verbos se usan siempre en forma #[i ING] y el verbo #[i “to be”] en presente (#[i am, are, is]) se usa como verbo auxiliar. Veamos algunos ejemplos:
                    .row.justify-content-center
                      .col-lg-10
                        .tabla-a.color-acento-botones.mb-4
                          table
                            thead
                              tr.borde1
                                th(style="width:15% !important") #[i Form]
                                th.borde1 #[i Sentences with present continuous]
                            tbody
                              tr.borde1
                                td #[i Affirmative]
                                td.borde1
                                  .row.align-items-center
                                    .col-auto
                                      Audio.color-acento-botones.mx-auto(
                                        :audio="require('@/assets/curso/tema1/1_present_continuous_affirmative.mp3')"
                                        @audio-hover="mostrarIndicadorAudio = false"
                                      )
                                    .col
                                      p.mb-0 #[i Subject + be in present + verb in ING + complement]
                                      p.mb-0 #[i #[b Harry is leading the project.]]
                              tr.borde1
                                td #[i Negative]
                                td.borde1
                                  .row.align-items-center
                                    .col-auto
                                      Audio.color-acento-botones.mx-auto(
                                        :audio="require('@/assets/curso/tema1/1_present_continuous_negative.mp3')"
                                        @audio-hover="mostrarIndicadorAudio = false"
                                      )
                                    .col
                                      p.mb-0 #[i Subject + be in present + not + verb in ING + complement]
                                      p.mb-0 #[i #[b Harry is not leading the project.]]
                              tr.borde1
                                td #[i Interrogative]
                                td.borde1
                                  .row.align-items-center
                                    .col-auto
                                      Audio.color-acento-botones.mx-auto(
                                        :audio="require('@/assets/curso/tema1/1_present_continuous_interrogative.mp3')"
                                        @audio-hover="mostrarIndicadorAudio = false"
                                      )
                                    .col
                                      p.mb-0 #[i Be in present + subject + verb + complement?]
                                      p.mb-0 #[i #[b Is Harry leading the project?]]
                    .row.justify-content-center
                      .col-lg-8.p-4.bg-c3
                        .row.align-items-center
                          .col
                            p.txt-c3.mb-0 Aquí podrá repasar las reglas para agregar #[i ING] a los verbos:
                          .col-auto
                            a.boton.color-acento-botones.me-3(href="https://www.grammar.cl/Notes/Spelling_ING.htm" target="_blank" type="application/pdf")
                              span Ir al sitio
                              i.fas.fa-link
                .row.m-1
                  .col-12.p-4
                    h4.text-center.mb-5 #[i Past Continuous]
                    .row.mb-4
                      .col-lg-2.mb-4.mb-lg-0
                        figure
                          img(src="@/assets/curso/tema1/img5.svg", style="width:150px").m-auto
                      .col-lg-10
                        traductor.color-primario
                          div(slot="textoIngles")
                            p.mb-0 #[i Past continuous is used to talk about actions that are happening at the moment. The verbs are always used in ING form and the verb “to be” in past (was, were) is used as an auxiliary verb. Let’s see some examples:]
                          div(slot="textoEspanol")
                            p.mb-0 El pasado continuo se utiliza para hablar de acciones que están sucediendo en el momento. Los verbos se usan siempre en forma #[i ING] y el verbo #[i “to be”] en pasado (#[i was, were]) se usa como verbo auxiliar. Veamos algunos ejemplos:
                    .row.justify-content-center
                      .col-lg-10
                        .tabla-a.color-acento-botones.mb-4
                          table
                            thead
                              tr.borde1
                                th(style="width:15% !important") #[i Form]
                                th.borde1 #[i Sentences with past continuous]
                            tbody
                              tr.borde1
                                td #[i Affirmative]
                                td.borde1
                                  .row.align-items-center
                                    .col-auto
                                      Audio.color-acento-botones.mx-auto(
                                        :audio="require('@/assets/curso/tema1/1_past_continuous_affirmative.mp3')"
                                        @audio-hover="mostrarIndicadorAudio = false"
                                      )
                                    .col
                                      p.mb-0 #[i Subject + be in past + verb in ING + complement]
                                      p.mb-0 #[i #[b Harry was leading the project.]]
                              tr.borde1
                                td #[i Negative]
                                td.borde1
                                  .row.align-items-center
                                    .col-auto
                                      Audio.color-acento-botones.mx-auto(
                                        :audio="require('@/assets/curso/tema1/1_past_continuous_negative.mp3')"
                                        @audio-hover="mostrarIndicadorAudio = false"
                                      )
                                    .col
                                      p.mb-0 #[i Subject + be in past + not + verb in ING + complement]
                                      p.mb-0 #[i #[b Harry was not leading the project.]]
                              tr.borde1
                                td #[i Interrogative]
                                td.borde1
                                  .row.align-items-center
                                    .col-auto
                                      Audio.color-acento-botones.mx-auto(
                                        :audio="require('@/assets/curso/tema1/1_past_continuous_interrogative.mp3')"
                                        @audio-hover="mostrarIndicadorAudio = false"
                                      )
                                    .col
                                      p.mb-0 #[i Be in past + subject + verb + complement?]
                                      p.mb-0 #[i #[b Was Harry leading the project?]]
                    .row.justify-content-center
                      .col-lg-8.p-4.bg-c3
                        .row.align-items-center
                          .col
                            p.txt-c3.mb-0 Aquí podrá repasar las reglas para agregar #[i ING] a los verbos:
                          .col-auto
                            a.boton.color-acento-botones.me-3(href="https://www.grammar.cl/Notes/Spelling_ING.htm" target="_blank" type="application/pdf")
                              span Ir al sitio
                              i.fas.fa-link
                .row.m-1
                  .col-12.p-4
                    h4.text-center.mb-5 #[i Present Perfect]
                    .row.mb-4
                      .col-lg-2.mb-4.mb-lg-0
                        figure
                          img(src="@/assets/curso/tema1/img7.svg", style="width:150px").m-auto
                      .col-lg-10
                        traductor.color-primario
                          div(slot="textoIngles")
                            p.mb-0 #[i Present perfect is used to talk about events that started in the past and are still relevant in the present. They need the auxiliary verb “have” conjugated in present. The verbs are conjugated in the past participle. The regular verbs use the same rules as in the simple past (ied, ed, d) and the irregular verbs are found in the irregular verbs list. Let’s see some examples:]
                          div(slot="textoEspanol")
                            p.mb-0 El presente perfecto se utiliza para hablar de acontecimientos que empezaron en el pasado y siguen siendo relevantes en el presente. Necesitan el verbo auxiliar #[i "have"] conjugado en presente. Los verbos se conjugan en el participio pasado. Los verbos regulares utilizan las mismas reglas que en el pasado simple (#[i ied, ed, d]) y los verbos irregulares se encuentran en la lista de verbos irregulares. Veamos algunos ejemplos: 
                    .tabla-a.color-acento-botones.mb-4
                      table
                        thead
                          tr.borde1
                            th(style="width:15% !important") #[i Form]
                            th.borde1 #[i Sentences with “I, you, we, they”]
                            th #[i Sentences with “she, he, it”]
                        tbody
                          tr.borde1
                            td #[i Affirmative]
                            td.borde1
                              .row.align-items-center
                                .col-auto
                                  Audio.color-acento-botones.mx-auto(
                                    :audio="require('@/assets/curso/tema1/1_present_perfect_izq_affirmative.mp3')"
                                    @audio-hover="mostrarIndicadorAudio = false"
                                  )
                                .col
                                  p.mb-0 #[i Subject + have + verb in P.P + complement]
                                  p.mb-0 #[i #[b Managers have been promoted.]]
                            td
                              .row.align-items-center
                                .col-auto
                                  Audio.color-acento-botones.mx-auto(
                                    :audio="require('@/assets/curso/tema1/1_present_perfect_der_affirmative.mp3')"
                                    @audio-hover="mostrarIndicadorAudio = false"
                                  )
                                .col
                                  p.mb-0 #[i Subject + have + verb in P.P + complement]
                                  p.mb-0 #[i #[b Paula has been promoted.]]
                          tr.borde1
                            td #[i Negative]
                            td.borde1
                              .row.align-items-center
                                .col-auto
                                  Audio.color-acento-botones.mx-auto(
                                    :audio="require('@/assets/curso/tema1/1_present_perfect_izq_negative.mp3')"
                                    @audio-hover="mostrarIndicadorAudio = false"
                                  )
                                .col
                                  p.mb-0 #[i Subject + have not + verb in P.P + complement]
                                  p.mb-0 #[i #[b Managers haven’t been promoted.]]
                            td
                              .row.align-items-center
                                .col-auto
                                  Audio.color-acento-botones.mx-auto(
                                    :audio="require('@/assets/curso/tema1/1_present_perfect_der_negative.mp3')"
                                    @audio-hover="mostrarIndicadorAudio = false"
                                  )
                                .col
                                  p.mb-0 #[i Subject + have not + verb in P.P + complement]
                                  p.mb-0 #[i #[b Paula hasn’t been promoted.]]
                          tr.borde1
                            td #[i Interrogative]
                            td.borde1
                              .row.align-items-center
                                .col-auto
                                  Audio.color-acento-botones.mx-auto(
                                    :audio="require('@/assets/curso/tema1/1_present_perfect_izq_interrogative.mp3')"
                                    @audio-hover="mostrarIndicadorAudio = false"
                                  )
                                .col
                                  p.mb-0 #[i Have + subject + verb in P.P + complement?]
                                  p.mb-0 #[i #[b Have managers been promoted?]]
                            td
                              .row.align-items-center
                                .col-auto
                                  Audio.color-acento-botones.mx-auto(
                                    :audio="require('@/assets/curso/tema1/1_present_perfect_der_interrogative.mp3')"
                                    @audio-hover="mostrarIndicadorAudio = false"
                                  )
                                .col
                                  p.mb-0 #[i Have + subject + verb in P.P + complement?]
                                  p.mb-0 #[i #[b Has Paula been promoted?]]
                    p.text-center #[i P.P: Past Participle.]
                    .row.justify-content-center
                      .col-lg-8.p-4.bg-c3
                        .row.align-items-center.mb-3
                          .col
                            p.txt-c3.mb-0 Aquí podrá repasar las reglas para conjugar los verbos regulares en pasado:
                          .col-auto
                            a.boton.color-acento-botones.me-3(href="https://www.britishcouncil.org.mx/blog/regular-verbs" target="_blank" type="application/pdf")
                              span Ir al sitio
                              i.fas.fa-link
                        .row.align-items-center
                          .col
                            p.txt-c3.mb-0 Y aquí una lista completa de verbos irregulares:
                          .col-auto
                            a.boton.color-acento-botones.me-3(href="https://www.academia.edu/22717813/List_of_616_English_Irregular_Verbs" target="_blank" type="application/pdf")
                              span Ir al sitio
                              i.fas.fa-link
                .row.m-1
                  .col-12.p-4
                    h4.text-center.mb-5 #[i Past Perfect]
                    .row.mb-4
                      .col-lg-2.mb-4.mb-lg-0
                        figure
                          img(src="@/assets/curso/tema1/img8.svg", style="width:150px").m-auto
                      .col-lg-10
                        traductor.color-primario
                          div(slot="textoIngles")
                            p.mb-0 #[i Past perfect is used to talk about events that occurred in the past before another action in the past. They need the auxiliary verb “had”. The verbs are conjugated in the past participle. The regular verbs use the same rules as in the simple past (ied, ed, d) and the irregular verbs are found in the irregular verbs list. Let’s see some examples:]
                          div(slot="textoEspanol")
                            p.mb-0 El pasado perfecto se utiliza para hablar de eventos que ocurrieron en el pasado antes de otra acción en el pasado. Necesitan el verbo auxiliar #[i "had"]. Los verbos se conjugan en el participio pasado. Los verbos regulares utilizan las mismas reglas que en el pasado simple (#[i ied, ed, d]) y los verbos irregulares se encuentran en la lista de verbos irregulares. Veamos algunos ejemplos:
                    .row.justify-content-center
                      .col-lg-10
                        .tabla-a.color-acento-botones.mb-4
                          table
                            thead
                              tr.borde1
                                th(style="width:15% !important") #[i Form]
                                th.borde1 #[i Sentences in Past Perfect]
                            tbody
                              tr.borde1
                                td #[i Affirmative]
                                td.borde1
                                  .row.align-items-center
                                    .col-auto
                                      Audio.color-acento-botones.mx-auto(
                                        :audio="require('@/assets/curso/tema1/1_past_perfect_affirmative.mp3')"
                                        @audio-hover="mostrarIndicadorAudio = false"
                                      )
                                    .col
                                      p.mb-0 #[i Subject + had + verb in P.P + complement]
                                      p.mb-0 #[i #[b Daniela had been promoted.]]
                              tr.borde1
                                td #[i Negative]
                                td.borde1
                                  .row.align-items-center
                                    .col-auto
                                      Audio.color-acento-botones.mx-auto(
                                        :audio="require('@/assets/curso/tema1/1_past_perfect_negative.mp3')"
                                        @audio-hover="mostrarIndicadorAudio = false"
                                      )
                                    .col
                                      p.mb-0 #[i Subject + had not + verb in P.P + complement]
                                      p.mb-0 #[i #[b Daniela hadn’t been promoted.]]
                              tr.borde1
                                td #[i Interrogative]
                                td.borde1
                                  .row.align-items-center
                                    .col-auto
                                      Audio.color-acento-botones.mx-auto(
                                        :audio="require('@/assets/curso/tema1/1_past_perfect_interrogative.mp3')"
                                        @audio-hover="mostrarIndicadorAudio = false"
                                      )
                                    .col
                                      p.mb-0 #[i Had + subject + verb in P.P + complement?]
                                      p.mb-0 #[i #[b Had Daniela been promoted?]]
                    p.text-center #[i P.P: Past Participle.]
                    .row.justify-content-center
                      .col-lg-8.p-4.bg-c3
                        .row.align-items-center.mb-3
                          .col
                            p.txt-c3.mb-0 Aquí podrá repasar las reglas para conjugar los verbos regulares en pasado:
                          .col-auto
                            a.boton.color-acento-botones.me-3(href="https://www.britishcouncil.org.mx/blog/regular-verbs" target="_blank" type="application/pdf")
                              span Ir al sitio
                              i.fas.fa-link
                        .row.align-items-center
                          .col
                            p.txt-c3.mb-0 Y aquí una lista completa de verbos irregulares:
                          .col-auto
                            a.boton.color-acento-botones.me-3(href="https://www.academia.edu/22717813/List_of_616_English_Irregular_Verbs" target="_blank" type="application/pdf")
                              span Ir al sitio
                              i.fas.fa-link
                .row.m-1
                  .col-12.p-4
                    h4.text-center.mb-5 #[i Present Perfect Continuous]
                    .row.mb-4
                      .col-lg-2.mb-4.mb-lg-0
                        figure
                          img(src="@/assets/curso/tema1/img9.svg", style="width:150px").m-auto
                      .col-lg-10
                        traductor.color-primario
                          div(slot="textoIngles")
                            p.mb-0 #[i Present perfect continuous is used to talk about events that started in the past and have been occurring until present time. They need the auxiliary verb “have” conjugated in present, the verb “to be” conjugated in the past participle, and the verbs are used in ING form. Let’s see some examples:]
                          div(slot="textoEspanol")
                            p.mb-0 El presente perfecto continuo se utiliza para hablar de eventos que empezaron en el pasado y han estado ocurriendo hasta el presente. Necesitan el verbo auxiliar #[i "have"] conjugado en presente, el verbo #[i "to be"] conjugado en participio pasado y los verbos se usan en forma #[i ING]. Veamos algunos ejemplos:
                    .tabla-a.color-acento-botones.mb-4
                      table
                        thead
                          tr.borde1
                            th(style="width:15% !important") #[i Form]
                            th.borde1 #[i Sentences with “I, you, we, they”]
                            th #[i Sentences with “she, he, it”]
                        tbody
                          tr.borde1
                            td #[i Affirmative]
                            td.borde1
                              .row.align-items-center
                                .col-auto
                                  Audio.color-acento-botones.mx-auto(
                                    :audio="require('@/assets/curso/tema1/1_present_perfect_continuous_izq_affirmative.mp3')"
                                    @audio-hover="mostrarIndicadorAudio = false"
                                  )
                                .col
                                  p.mb-0 #[i Subject + have + be in P.P + verb (ING) + complement]
                                  p.mb-0 #[i #[b They have been doing reports.]]
                            td
                              .row.align-items-center
                                .col-auto
                                  Audio.color-acento-botones.mx-auto(
                                    :audio="require('@/assets/curso/tema1/1_present_perfect_continuous_der_affirmative.mp3')"
                                    @audio-hover="mostrarIndicadorAudio = false"
                                  )
                                .col
                                  p.mb-0 #[i Subject + has + be in P.P + verb (ING) + complement]
                                  p.mb-0 #[i #[b She has been doing reports.]]
                          tr.borde1
                            td #[i Negative]
                            td.borde1
                              .row.align-items-center
                                .col-auto
                                  Audio.color-acento-botones.mx-auto(
                                    :audio="require('@/assets/curso/tema1/1_present_perfect_continuous_izq_negative.mp3')"
                                    @audio-hover="mostrarIndicadorAudio = false"
                                  )
                                .col
                                  p.mb-0 #[i Subject + have not + be in P.P + verb (ING) + complement]
                                  p.mb-0 #[i #[b They haven’t been doing reports.]]
                            td
                              .row.align-items-center
                                .col-auto
                                  Audio.color-acento-botones.mx-auto(
                                    :audio="require('@/assets/curso/tema1/1_present_perfect_continuous_der_negative.mp3')"
                                    @audio-hover="mostrarIndicadorAudio = false"
                                  )
                                .col
                                  p.mb-0 #[i Subject + has not + be in P.P + verb (ING) + complement]
                                  p.mb-0 #[i #[b She hasn’t been doing reports.]]
                          tr.borde1
                            td #[i Interrogative]
                            td.borde1
                              .row.align-items-center
                                .col-auto
                                  Audio.color-acento-botones.mx-auto(
                                    :audio="require('@/assets/curso/tema1/1_present_perfect_continuous_izq_interrogative.mp3')"
                                    @audio-hover="mostrarIndicadorAudio = false"
                                  )
                                .col
                                  p.mb-0 #[i Have + subject + be in P.P + verb (ING) + complement?]
                                  p.mb-0 #[i #[b Have they been doing reports?]]
                            td
                              .row.align-items-center
                                .col-auto
                                  Audio.color-acento-botones.mx-auto(
                                    :audio="require('@/assets/curso/tema1/1_present_perfect_continuous_der_interrogative.mp3')"
                                    @audio-hover="mostrarIndicadorAudio = false"
                                  )
                                .col
                                  p.mb-0 #[i Has + subject + be in P.P + verb (ING) + complement?]
                                  p.mb-0 #[i #[b Has she been doing reports?]]
                    p.text-center #[i P.P: Past Participle.]
                    .row.justify-content-center
                      .col-lg-8.p-4.bg-c3
                        .row.align-items-center
                          .col
                            p.txt-c3.mb-0 Aquí podrá repasar las reglas para agregar #[i ING] a los verbos en:
                          .col-auto
                            a.boton.color-acento-botones.me-3(href="https://www.grammar.cl/Notes/Spelling_ING.htm" target="_blank" type="application/pdf")
                              span Ir al sitio
                              i.fas.fa-link
                .row.m-1
                  .col-12.p-4
                    h4.text-center.mb-5 #[i Past Perfect Continuous]
                    .row.mb-4
                      .col-lg-2.mb-4.mb-lg-0
                        figure
                          img(src="@/assets/curso/tema1/img10.svg", style="width:150px").m-auto
                      .col-lg-10
                        traductor.color-primario
                          div(slot="textoIngles")
                            p.mb-0 #[i Past perfect continuous is used to talk about events that started in the past and have been occurring until another event occurred in the past. They need the auxiliary verb “had” and the verb “to be” conjugated in the past participle, and the verbs are used in ING form. Let’s see some examples:]
                          div(slot="textoEspanol")
                            p.mb-0 El pretérito perfecto continuo se utiliza para hablar de eventos que comenzaron en el pasado y han estado ocurriendo hasta que otro evento ocurrió en el pasado. Necesitan el verbo auxiliar #[i "had"] y el verbo #[i "to be"] conjugado en el participio pasado, y los verbos se usan en forma #[i ING]. Veamos algunos ejemplos:
                    .row.justify-content-center
                      .col-lg-10
                        .tabla-a.color-acento-botones.mb-4
                          table
                            thead
                              tr.borde1
                                th(style="width:15% !important") #[i Form]
                                th.borde1 #[i Sentences in Past Perfect Continuous]
                            tbody
                              tr.borde1
                                td #[i Affirmative]
                                td.borde1
                                  .row.align-items-center
                                    .col-auto
                                      Audio.color-acento-botones.mx-auto(
                                        :audio="require('@/assets/curso/tema1/1_past_perfect_continuous_affirmative.mp3')"
                                        @audio-hover="mostrarIndicadorAudio = false"
                                      )
                                    .col
                                      p.mb-0 #[i Subject + had + be in P.P + verb (ING) + complement]
                                      p.mb-0 #[i #[b They had been  doing reports.]]
                              tr.borde1
                                td #[i Negative]
                                td.borde1
                                  .row.align-items-center
                                    .col-auto
                                      Audio.color-acento-botones.mx-auto(
                                        :audio="require('@/assets/curso/tema1/1_past_perfect_continuous_negative.mp3')"
                                        @audio-hover="mostrarIndicadorAudio = false"
                                      )
                                    .col
                                      p.mb-0 #[i Subject + had not + be in P.P + verb (ING) + complement]
                                      p.mb-0 #[i #[b They hadn’t been doing reports.]]
                              tr.borde1
                                td #[i Interrogative]
                                td.borde1
                                  .row.align-items-center
                                    .col-auto
                                      Audio.color-acento-botones.mx-auto(
                                        :audio="require('@/assets/curso/tema1/1_past_perfect_continuous_interrogative.mp3')"
                                        @audio-hover="mostrarIndicadorAudio = false"
                                      )
                                    .col
                                      p.mb-0 #[i Had + subject + be in P.P + verb (ING) + complement?]
                                      p.mb-0 #[i #[b Had they been doing reports?]]
                    p.text-center #[i P.P: Past Participle.]
                    .row.justify-content-center
                      .col-lg-8.p-4.bg-c3
                        .row.align-items-center.mb-3
                          .col
                            p.txt-c3.mb-0 Aquí podrá repasar las reglas para agregar #[i ING] a los verbos en:
                          .col-auto
                            a.boton.color-acento-botones.me-3(href="https://www.grammar.cl/Notes/Spelling_ING.htm" target="_blank" type="application/pdf")
                              span Ir al sitio
                              i.fas.fa-link
                        .row.align-items-center
                          .col
                            p.txt-c3.mb-0 Y aquí una lista completa de verbos irregulares:
                          .col-auto
                            a.boton.color-acento-botones.me-3(href="https://www.academia.edu/22717813/List_of_616_English_Irregular_Verbs" target="_blank" type="application/pdf")
                              span Ir al sitio
                              i.fas.fa-link
    .row.mb-5
      .col-12.p-4.bg-c5
        .row.align-items-center
          .col-lg-11.mb-4.mb-lg-0
            p.mb-0 #[i.txt-c7 Let’s see how they work in a real life situation in which it is necessary to use more than one tense to express the idea. Let’s have a little practice by completing the following part of the conversation:] #[span.txt-c5 / Veamos cómo funcionan en una situación de la vida real en la que es necesario utilizar más de un tiempo verbal para expresar la idea. Vamos a practicar un poco completando la siguiente parte de la conversación.]
          .col-lg-1
            figure
              img(src="@/assets/curso/tema1/img11.svg", style="width:150px").m-auto
    Dialogo.color-primario(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) #[i Applied grammar practice]
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.
  
</template>

<script>
import DialogoChat from '../components/DialogoChat.vue'
import traductor from '@/components/tarjetaTraductor.vue'
export default {
  name: 'Tema1',
  components: {
    traductor,
    DialogoChat,
  },
  data: () => ({
    dialogo: {
      personajes: [
        {
          nombre: 'Vivian',
          img: require('@/assets/curso/tema1/img12.svg'),
        },
        {
          nombre: 'Joe',
          img: require('@/assets/curso/tema1/img13.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Vivian',
          textoIng: '<i>Hey, Joe, I had</i> *** <i>trying to contact you.</i>',
          textoEsp: 'Hola, Joe, he estado intentando contactar contigo.',
          audio: require('@/assets/curso/tema1/Vivi1.mp3'),
          palabra: 'been',
        },
        {
          personaje: 'Joe',
          textoIng:
            '<i>Sorry, I</i> *** <i>my phone number because my phone stopped working.</i>',
          textoEsp:
            'Lo siento, he cambiado mi número de teléfono porque mi teléfono ha dejado de funcionar.',
          audio: require('@/assets/curso/tema1/Joe1.mp3'),
          palabra: 'changed',
        },
        {
          personaje: 'Vivian',
          textoIng: '<i>Are you still</i> *** <i>in sales?</i>',
          textoEsp: '¿Sigues trabajando en ventas?',
          audio: require('@/assets/curso/tema1/Vivi2.mp3'),
          palabra: 'working',
        },
        {
          personaje: 'Joe',
          textoIng:
            '<i>Well, I haven’t</i> *** <i>in sales since I left the company.</i>',
          textoEsp:
            'Bueno, no he trabajado en ventas desde que dejé la empresa.',
          audio: require('@/assets/curso/tema1/Joe2.mp3'),
          palabra: 'worked',
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
