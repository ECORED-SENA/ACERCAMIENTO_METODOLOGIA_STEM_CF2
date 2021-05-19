<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3
          | 3
      .h3 Herramientas Didácticas para el pensamiento científico con STEM
    p.mb-5 A continuación, se presentan dos herramientas didácticas que pueden ser utilizadas por los docentes al momento de diseñar una actividad STEM para sus estudiantes, se mostrarán claramente las diferencias que existen entre cada una de ellas. Estas herramientas son:  
     //-- Aprendizaje basado en lecciones
    #t_3_1.titulo-segundo
      .h4 3.1 Aprendizaje Basado en Lecciones (ABL)
    .row
      .col-lg-2

      .col-lg-10
        p.mb-5 Este tipo de actividades para desarrollar en el aula permite un aprendizaje más profundo e interdisciplinar, utilizando el diseño como herramienta, permite un aprendizaje más duradero en los estudiantes.
        p.text-bold.mb-5 Recomendaciones para estructurar una actividad de tipo ABL:


    .h6 Explicación clara

    p.mb-5.text-bold A continuación, se ha diseñado un ejemplo de una actividad desde el APL. Observa el siguiente video.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      //--figcaption Video: Leyenda del video

    //-- Aprendizaje basado en proyectos
    #t_3_2.titulo-segundo
      .h4 3.2 Aprendizaje Basado en Proyectos (ABP)
    p.mb-5 Considerada la herramienta pedagógica más poderosa  actualmente para desarrollar una enseñanza interdisciplinaria, ya que brinda excelentes resultados, para la educación STEM se convierte en una herramienta fundamental.  A continuación, se presentan las ventajas de esta herramienta:
    .row.mb-5
      .col-lg-5

      .col-lg-7
        ul.lista-ul
          li 
            i.fas.fa-check 
            p.mb-3 
              span.text-bold El docente no es la fuente principal de conocimiento: 
              | Los estudiantes perciben la Ciencia como demasiado abstracta, porque se pretende enseñar ideas fundamentales sin el suficiente respaldo experimental, observacional e interpretativo y sin mostrar, adecuadamente, sus implicaciones y sin darles la oportunidad de un desarrollo acumulativo de su comprensión e importancia.
          li
            i.fas.fa-check 
            p.mb-3 
              span.text-bold Autogestión y autodesarrollo: 
              | brinda la posibilidad al estudiante de escoger los temas de profundización que sean importantes para él y tendrá la posibilidad de tomar decisiones para el desarrollo de la actividad.
          li 
            i.fas.fa-check 
            p.mb-3 
              span.text-bold Motivación:  
              | el estudiante se interesa más y despierta su curiosidad por ahondar en la investigación y el aprendizaje de nuevos conceptos, lo que le brinda autonomía, pensamiento crítico y solución de problemas entre pares.
          li 
            i.fas.fa-check 
            p.mb-3 
              span.text-bold Aprendizaje continuo:  
              | estudiantes y docentes en el desarrollo de la investigación descubren los  conocimientos previos que se requieren y cuáles les hacen falta y por ellos ambos toman una actitud activa en el proceso de aprendizaje.
    p.mb-5.text-bold Recomendaciones para estructurar una actividad de tipo ABP:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      //--figcaption Video: Leyenda del video
    .row.justify-content-center
      .col-lg-8
        .cajon.color-secundario.p-4.mb-4
          p Considerando los elementos presentados desde las herramientas didácticas, debemos resolver algunos retos en el contexto escolar y uno de ellos es 
            span.text-bold ¿cómo trabajar en equipo? y ¿por qué es importante promover el trabajo colaborativo y en equipo?
   

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
