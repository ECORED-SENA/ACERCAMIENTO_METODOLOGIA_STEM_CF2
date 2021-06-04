<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 Introducción
    p.mb-5 Apreciado participante bienvenido a esta experiencia de aprendizaje enfocada en la educación STEM, la cual surge en los años 90 en los Estados Unidos como otra forma de enseñar en el contexto de las competencias del siglo XXI y en marco de los avances de la ciencia y la tecnología. En este sentido, se invita a observar el siguiente recurso de aprendizaje para obtener información sobre algunas condiciones conceptuales y metodológicas con miras a iniciar y finalizar este componente de formación.
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
