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
        figure.mb-5
          img(src='@/assets/curso/t3-i1.svg', alt='ilustración niños jugando al rededor de un globo mapamundi')
      //-- figcaption Leyenda de la imagen

      .col-lg-10
        p.mb-5 Este tipo de actividades para desarrollar en el aula permite un aprendizaje más profundo e interdisciplinar, utilizando el diseño como herramienta, permite un aprendizaje más duradero en los estudiantes.
        p.text-bold.mb-5 Recomendaciones para estructurar una actividad de tipo ABL:


    SlyderB.mb-5(:datos="datosSliderAbl")

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
        figure.mb-5
          img(src='@/assets/curso/t3-i6.jpg', alt='ilustración tablero con post-it pegados')
        //-- figcaption Leyenda de la imagen

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
    SlyderB.mb-5(:datos="datosSliderAbp")
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      //--figcaption Video: Leyenda del video
    .row.justify-content-center
      .col-lg-8
        .cajon.color-secundario.p-4.mb-4.bg-sec-color
          p Considerando los elementos presentados desde las herramientas didácticas, debemos resolver algunos retos en el contexto escolar y uno de ellos es 
            span.text-bold ¿cómo trabajar en equipo? y ¿por qué es importante promover el trabajo colaborativo y en equipo?
   

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSliderAbl: [
      {
        titulo: 'Explicación clara',
        texto:
          'Brinde información clara a los estudiantes acerca del alcance de la lección, de esta manera los estudiantes se sentirán más motivados, porque tendrán claridad de los pasos que deben seguir y lo que se espera de ellos.  Recuerde siempre la razón de la pregunta inicial y los objetivos de aprendizaje que se desean alcanzar.',
        imagen: require('@/assets/curso/t3-i2.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Estimular el trabajo en equipo',
        texto:
          'Trate, en la medida de lo posible, distribuir los estudiantes de diferentes aptitudes en los equipos que se conforman, no es forzoso tener siempre los mismos integrantes en los equipos, se pueden realizar cambios, así los estudiantes aprenderán los beneficios de la colaboración.',
        imagen: require('@/assets/curso/t3-i3.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Control de flujo de trabajo',
        texto:
          'Es necesario que el docente controle los diversos puntos de vista de la actividad, dejando claro que se deben esforzar para cumplir la actividad en un tiempo específico, logrando hacer más eficiente la misma.',
        imagen: require('@/assets/curso/t3-i4.jpg'),
        //--leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Establecer roles',
        texto:
          'Divida a los estudiantes por roles durante la actividad, esto les permite siempre tener una responsabilidad específica durante a la actividad, evitando que se aíslen o sientan que no son parte del proceso; se debe buscar que la actitud del estudiante siempre sea activa y propositiva.',
        imagen: require('@/assets/curso/t3-i4.jpg'),
        //-- leyendaImagen: 'Leyenda de la imagen',
      },
    ],
    datosSliderAbp: [
      {
        titulo: 'Docente líder de proyecto',
        texto:
          'El proyecto lo lidera el profesor de la asignatura que tenga involucrado el mayor número de objetivos de aprendizaje involucrados y su rol será el docente “Líder de proyecto” acompañados de los docentes de las otras áreas integradas.',
        imagen: require('@/assets/curso/t3-i7.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Criterios de evaluación claros',
        texto:
          'Los estudiantes deben conocer de manera clara la forma cómo serán evaluados y qué criterios se tendrán en cuenta para calificar el desempeño, de esta manera, el proyecto se convierte en el centro de la enseñanza.',
        imagen: require('@/assets/curso/t3-i8.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Planificación del proyecto',
        texto:
          'Para lograr un buen desarrollo del proyecto es importante establecer entre el docente y los estudiantes la pregunta inicial que establece el objetivo general del proyecto, y las preguntas auxiliares que darán origen a los objetivos específicos, con el fin mostrar evidencias parciales del avance del modelo, producto o desempeño.',
        imagen: require('@/assets/curso/t3-i9.jpg'),
        //--leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Temas de la vida cotidiana',
        texto:
          'El abanico de opciones para escoger los estudiantes para desarrollar el proyecto deben ser los más cercanos a su vida cotidiana, con el fin de incorporar los temas de Ciencias y Matemáticas de manera que se derrumben estereotipos que estos temas no tienen relación con el mundo real.',
        imagen: require('@/assets/curso/t3-i10.jpg'),
        //-- leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Establecer roles',
        texto:
          'Al igual que en el ABL, en el ABP se propone dividir a los estudiantes por roles durante la actividad, esto permite a los estudiantes siempre tener una responsabilidad específica durante a la actividad, evitando que se aíslen o sientan que no son parte del proceso, se debe buscar que la actitud del estudiante siempre sea activa y propositiva.',
        imagen: require('@/assets/curso/t3-i11.jpg'),
        //-- leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Control de flujo de trabajo',
        texto:
          'El docente con un cronograma general presentará las etapas del proyecto a los estudiantes, al igual que en el ABL en el ABP es necesario que el docente controle los diversos puntos de vista de la actividad, dejando claro que se deben esforzar para cumplir la actividad en un tiempo específico, logrando hacer más eficiente la actividad.',
        imagen: require('@/assets/curso/t3-i12.jpg'),
        //-- leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Asesoría del proyecto',
        texto:
          'Los estudiantes contarán con la asesoría de los docentes de las áreas integradas que contribuyen con conocimientos y prácticas, se debe mantener, por parte del docente, una actitud de colaboración, pero no resolutiva para resolverles los problemas que surjan en el equipo, de manera tal que sean los estudiantes quienes concluyan y tomen decisiones.',
        imagen: require('@/assets/curso/t3-i13.jpg'),
        //-- leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped>
.bg-sec-color{background-color: #EEFBF8}
.fa{color: #9ddfd3}
</style>
