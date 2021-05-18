<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 Introducción
    p.mb-5 Apreciado participante bienvenido a la experiencia de aprendizaje del presente componente de formación enfocada a la educación STEM, una forma de enseñar y aprender que surge en los años 90 en los Estados Unidos como una respuesta a la formación más acorde con la forma como se ve que vemos nuestra realidad actual en relación con la Ciencia-Tecnología-Ingeniería-Matemáticas. Se invita a observar el siguiente recurso de aprendizaje para considerar algunas condiciones de contexto y metodológicas con miras a iniciar y finalizar este componente de formación.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      //- figcaption Video: Leyenda del video

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
