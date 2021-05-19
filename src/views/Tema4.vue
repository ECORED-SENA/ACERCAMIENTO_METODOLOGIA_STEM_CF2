<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3
          | 4
      .h3 Planeación para la implementación de la educación STEM
    .row.mb-5 
      .col-lg-4
        figure.mb-5
          img(src='@/assets/curso/t4-i1.jpg', alt='Profesor explicando a su alumno en clase')
        //-- figcaption Leyenda de la imagen

      .col-lg-8
        p.mb-4 Para desarrollar la planeación de la educación STEM en la institución educativa es importante considerar: ¿a dónde se quiere llegar con esta forma de enseñar y aprender? Para iniciar, se debe considerar la misión y la visión de la institución, así como los proyectos que en la actualidad viene desarrollando, los recursos humanos con los que actualmente cuenta y la disponibilidad de los equipos de docentes para acometer esta nueva propuesta educativa. Uno de los grandes fenómenos que se presentan en el campo de la educación es la dificultad por parte de docentes y estudiantes de trabajar en equipo y de manera colaborativa.
        p.mb-4 El trabajo en equipo entre colegas es la clave para el éxito en docencia; además, la flexibilidad del docente a la hora de recibir u ofrecer apoyo de o hacia sus compañeros debe ser una constante para el desarrollo académico en las instituciones educativas. La educación STEM promueve que tanto docentes como estudiantes deben aprender a trabajar en equipo y saber explotar los beneficios de la colaboración.
        p.mb-4 Finalmente, otro aspecto a considerar en sus actividades de aprendizaje es: ¿por qué enseñar con base en la resolución de preguntas o problemas? La educación STEM responde a cuestionamientos que se plantean a lo largo de la vida; es de recordar que en los días de colegio y universidad lo único que se pedía era la memorización de información, lo único que se evaluaba era una gran cantidad de datos retenidos al momento de la misma, obteniendo buenas y malas notas, pero, ¿hoy en día se recuerda esa información? Puede que algunos lo recuerden, pero la gran mayoría no. 
    p.mb-5 En la actualidad la información se encuentra en internet y con solo un clic se puede tener la información de cualquier tema que se desee saber. Por eso es importante brindar a los nuevos ciudadanos del siglo XXI momentos educativos interdisciplinarios y para enseñar en forma innovadora se debe contar con herramientas adecuadas, pues el uso de herramientas tecnológicas hace más fácil la manera de enseñar de una forma significativa. Entonces, se puede concluir que las herramientas didácticas vistas, como fueron ABL y ABP, permiten iniciar un camino multidisciplinario o interdisciplinario con el fin de lograr el máximo de integración.
    p.mb-5 Con todo lo anterior, ahora es importante entender el alcance de la implementación de la educación STEM según el proyecto filosófico y proyecto educativo de las instituciones de educación, por lo que en la siguiente sección se presentan algunas reflexiones. 
    
    #t_4_1.titulo-segundo
      .h4 4.1 El alcance de la educación STEM y el PEI y el currículo
    .row
      .col-lg-4
        figure.mb-5
          img(src='@/assets/curso/t4-i2.jpg', alt='ilustración niños jugando al rededor de un globo mapamundi')
        //-- figcaption Leyenda de la imagen
      .col-lg-8
        p.mb-4 En todo establecimiento educativo el Proyecto Educativo Institucional y su currículo tienen un periodo de tiempo donde se pretenden alcanzar unos objetivos para un tiempo específico y al llegar el momento de su evaluación para ser actualizado, es posible que la visión y la misión de la institución sufran cambios al igual que los proyectos institucionales para que no pierdan vigencia.
        p.mb-5 Es en ese momento cuando el equipo encargado de esta actividad decide la intensidad horaria de cada una de las asignaturas y cómo transformar el Plan de Estudios para la vinculación de la educación STEM, garantizando que se cumplan los requerimientos mínimos exigidos por los entes nacionales, dado que los estudiantes deben recibir los temas exigidos y cumplir con las evaluaciones establecidas.
    .cajon.color-secundario.p-4.mb-5
        p Al incluir la educación STEM en el plan de estudio se debe considerar que se requiere mayor tiempo para ello; los docentes necesitan cambiar su forma de dictar la asignatura, pues no solo van a profundizar más en los conceptos, sino que deberán hacerlo de forma integrada con sus colegas, por lo tanto, se les recomienda los siguientes aspectos al momento de las modificaciones:
    .row.justify-content-center
      .col-lg-5
        .tarjeta-Avatar-b.mb-5.align-items-center
          img.h90(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
          .tarjeta.tarjeta-grayBlue.p-4
            p.text-bold Establecer el listado completo de asignaturas por cada grado.
      .col-lg-5
        .tarjeta-Avatar-b.mb-5.align-items-center
          img.h90(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
          .tarjeta.tarjeta-grayBlue.p-4
            p.text-bold Revisar los estándares curriculares y los planes de estudio actuales para determinar los contenidos que se van a dictar.
    .row.justify-content-center
      .col-lg-5
        .tarjeta-Avatar-b.mb-5.align-items-center
          img.h90(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
          .tarjeta.tarjeta-grayBlue.p-4
            p.text-bold Establecer el requerimiento de planta profesional docente para desarrollar las asignaturas.
      .col-lg-5
        .tarjeta-Avatar-b.mb-5.align-items-center
          img.h90(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
          .tarjeta.tarjeta-grayBlue.p-4
            p.text-bold La nueva forma de dictar las clases, así como el nuevo papel del docente, requerirá de un nuevo diseño de unidades didácticas y actividades académicas.
    
    .row.justify-content-center
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4
          p.text-bold  En la presente gráfica se observa la importancia de incluir en este proceso a los  agentes líderes administrativos y por los departamentos de las áreas con la intención de generar las condiciones para la implementación de la educación STEM.


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.h90 {height: 90px}
.tarjeta-grayBlue {background-color: #D6D6DF; min-height:150px}
</style>
