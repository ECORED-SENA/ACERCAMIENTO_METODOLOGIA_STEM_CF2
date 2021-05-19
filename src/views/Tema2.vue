<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3
          | 2
      .h3 ¿Cómo construir un pensamiento científico?
    .row.mb-5 
      .col-lg-7
        p.mb-4 Desde la educación inicial y a lo largo de la formación de los futuros ciudadanos es necesario prepararlos para desenvolverse en contextos cada vez más complejos que requieren respuestas rápidas a la solución de problemas que se presentan en el entorno más cercano en la cotidianidad, por ello se hace necesario desmitificar la idea de que la ciencia es ajena a la sociedad, desde las instituciones educativas se pueden generar procesos que fortalezcan las prácticas formativas incentivando en los estudiantes procesos mentales que les ayuden a solucionar problemas de su entorno.
        p.mb-4 La educación STEM invita a los docentes e instructores a incentivar en sus estudiantes la curiosidad por lo que ocurre en su entorno, en su ciudad, su región su país y a profundizar sus conocimientos, conceptos, principios, leyes y teorías de las disciplinas de las ciencias, buscando que realicen conexiones entre los conocimientos de las ciencias, las otras disciplinas y las experiencias prácticas de aula en Ciencia e Ingeniería, motivando las conexiones para que, de manera crítica, formulen la resolución de problemas de su vida cotidiana. 
        p.mb-4 A continuación, se recuerda el método científico utilizado en el desarrollo de investigaciones formativas para la educación superior, pero que debe ser utilizado desde la educación inicial para la construcción de un pensamiento científico y contribuir a la gestión del cambio e implementación de la educación STEM. La pregunta que debe hacerse para la lectura del siguiente recurso de aprendizaje es: 
         span.etiqueta.text-bold ¿Qué es y para qué sirve el método científico?

      .col-lg-5
        figure.mb-5
          img(src='@/assets/curso/t2-i1.jpg', alt='ilustración niños en salon de clase explorando un dispositivo electronico')
        //-- figcaption Leyenda de la imagen

    
    #t_2_1.titulo-segundo
      .h4 2.1 Método científico
    figure.mb-5
      img(src='@/assets/curso/t2-i2.svg', alt='infografía del método científico')
    

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.etiqueta {background-color: #FFE5EB; color:#000}
</style>
