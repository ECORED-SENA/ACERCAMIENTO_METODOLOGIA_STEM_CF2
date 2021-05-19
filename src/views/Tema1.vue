<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3
          | 1
      .h3 ¿Por qué enseñar educación STEM en el mundo?
    p.mb-5 La educación STEM es relativamente nueva a nivel mundial. Al dar una mirada a los países con mejor desempeño en los resultados de las pruebas PISA: China, Taiwán, Japón, Singapur, Corea del Sur, Canadá, Alemania, Finlandia, Francia, Reino Unido, Brasil, Australia se puede ver cómo sus propuestas educativas nacionales tienen una relación directa entre la Ciencia, la Tecnología, la Ingeniería y las Matemáticas.
    p.mb-5 En este sentido, la educación STEM tiene pertenencia en su implementación porque: 
    .row.mb-5
      .col-lg-5

      .col-lg-7
        ul.lista-ul
          li 
            i.fas.fa-check 
            | A nivel mundial se considera a la Ciencia y la Tecnología como pilares de una economía sostenible y próspera.
          li
            li 
              i.fas.fa-check 
              | La educación STEM, con énfasis en la integración de las áreas, brinda una vía sólida para potencializar a los futuros ciudadanos hacia un desarrollo sostenible y próspero a todos los países.
          li 
            i.fas.fa-check 
            | Se presenta una tendencia a la disminución del número de profesionales en las áreas de Ciencias, Tecnología e Ingeniería.
          li 
            i.fas.fa-check 
            | Es fundamental aumentar la participación de la mujer en las áreas de desarrollo de los países, ya que su participación en los puestos de trabajo de liderazgo en Ciencia y Tecnología es muy baja.
          li
            i.fas.fa-check
            | La educación STEM debe atraer mayor interés por parte de los estudiantes, pero en especial de las niñas a quienes se les debe impulsar su liderazgo en ciencia y tecnología.
    
    p.mb-5 Además, se puede tomar como referencia a estas justificaciones de por qué enseñar desde la educación STEM, el informe de ACOLA (Dobson, 2013), que es un foro anual que se realiza en Australia mediante el cual las academias y sus miembros asociados se unen para contribuir con el asesoramiento de expertos para informar la política nacional y desarrollar soluciones innovadoras a problemas globales complejos y necesidades nacionales emergentes. Este informe brinda un panorama actual de los países de Europa a partir de las siguientes afirmaciones: 
    .row.mb-5
      .col-lg-5

      .col-lg-7
        ul.lista-ul
          li 
            i.fas.fa-check 
            | Puede decirse que la política y la práctica de la educación escolar en la ciencia viven en su propio mundo. A pesar de que existe la investigación europea sobre la enseñanza de la Ciencia, la educación en la Ciencia sigue teniendo una base empírica.
          li
            i.fas.fa-check 
            | Los estudiantes perciben la Ciencia como demasiado abstracta, porque se pretende enseñar ideas fundamentales sin el suficiente respaldo experimental, observacional e interpretativo y sin mostrar, adecuadamente, sus implicaciones y sin darles la oportunidad de un desarrollo acumulativo de su comprensión e importancia.
          li 
            i.fas.fa-check 
            | Los programas de ciencias, son en su mayoría, excesivamente fácticos, en parte por el crecimiento vertiginoso del conocimiento científico y la continua adición de temas a una extensa gama de ellos.
          li 
            i.fas.fa-check 
            | Es fundamental aumentar la participación de la mujer en las áreas de desarrollo de los países, ya que su participación en los puestos de trabajo de liderazgo en Ciencia y Tecnología es muy baja.
          li
            i.fas.fa-check
            | Los contenidos y la forma de transmisión de enseñanza tradicionalmente establecida, tiende a distorsionar la comprensión del estudiante sobre la naturaleza de la Ciencia y del conocimiento, al ignorar los aspectos metodológicos de razonamiento y culturales de la Ciencia.
    .row.mb-5
      .col-lg-2.col-md-2
      .col-lg-10.col-md-10
        p.mb-4 En la actualidad, la implementación de la educación STEM tiene mayor interés por parte de algunos países, pero ¿cómo se viene desarrollando la educación STEM en el mundo? El desarrollo de planes en educación en cada país están sujetos a sus necesidades, su visión propia del futuro, su cultura y sus procesos sociopolíticos. 
        p.mb-4 A continuación, se presenta el estudio realizado por el Gobierno de Australia denominado STEM, Technology, Engineering and Mathematics (STEM) Education (Marginson, 2013) de los países con mejores resultados en las pruebas PISA y los esfuerzos que vienen adelantando para la incorporación de la enseñanza STEM en su sistema educativo.
    
    p.mb-5 Se puede concluir, entonces, que los planes de educación en el mundo están sujetos a sus propias necesidades y visión del mundo, su cultura y los procesos sociopolíticos que desarrollan; se observa la necesidad de dar un cambio en la forma de enseñar en la educación que permita la mejora sustancial en cómo llevar el conocimiento a los estudiantes del siglo XXI, así, la educación STEM ofrece una solución importante al ámbito mundial.

    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite 
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    Muestras
  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
