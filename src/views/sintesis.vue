<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.align-items-center.mb-5.p-4.bg-c14
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/sinte/img1.png", style="width:350px").m-auto
      .col-lg-8.p-4.bg-c2.shadow-lg
        p #[i.txt-c7 Up to this point, we have been able to appreciate everything that has to do with the mixed tenses, contrast connectors, slang, reporting verbs, feeling verbs, and pronunciation tips, which is why we invite you to consider the following conceptual scheme that summarizes the subject treated:]
        p.mb-0 Hasta aquí hemos podido apreciar todo lo que tiene que ver con los tiempos mezclados, los conectores de contraste, expresiones idiomáticas, los verbos de reporte, los verbos de sentimiento y los consejos de pronunciación, por lo que lo invitamos a considerar el siguiente esquema conceptual que resume el tema tratado:
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sinte/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/anexo2.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
