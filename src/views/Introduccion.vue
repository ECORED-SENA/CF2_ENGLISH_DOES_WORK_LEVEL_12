<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.p-5.bg-c1
      .col-12
        .row.mb-5
          .col-lg-8.mb-4.mb-lg-0.bg-c2.p-5.shadow-lg(data-aos="fade-right")
            p.mb-0 Este nivel de formación bilingüe se enfoca en estudiar y repasar temas gramaticales. En primer lugar, se va a hacer una aplicación de los temas gramaticales vistos en componentes anteriores, con el fin de utilizarlos para argumentar y discutir sobre temas como medio ambiente, interacciones sociales y trabajo. Además, se trabajará el uso de la combinación de tiempos, conectores de contraste, expresiones coloquiales, verbos para reportar y verbos que expresan sentimientos. Sin embargo, la producción escrita no es lo único que se trabajará en este componente. Se darán tips de pronunciación que ayudarán a dar más contundencia a los argumentos presentados mediante los elementos gramaticales que serán estudiados. Partiendo de lo anterior, le damos la bienvenida al estudio de este componente formativo, y para comenzar, se le invita a explorar el video que se presenta a continuación:
          .col-lg-4(data-aos="fade-left")
            figure
              img(src="@/assets/curso/intro/img1.png", style="width:350px").m-auto
        figure.mb-5(data-aos="fade-down")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/Er_9eBed6P0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        .row.justify-content-center(data-aos="fade-right")
          .col-lg-10.p-4.bg-c3
            .row.align-items-center
              .col-lg-auto.mb-4.mb-lg-0
                figure
                  img(src="@/assets/curso/intro/img2.svg", style="width:230px").m-auto
              .col-lg
                .row.align-items-center
                  .col-lg-6.mb-4.mb-lg-0
                    p.text-white.mb-0 Si desea practicar, el siguiente PDF presenta los textos del video anterior, tanto en inglés como en español.
                  .col-lg-6
                    a.anexo(:href="obtenerLink('downloads/anexo1.pdf')" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/icono-pdf.svg")
                      .anexo__texto
                        p #[b Anexo]. Guion esp and ingl_Video introductorio

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
