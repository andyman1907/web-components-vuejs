<style lang="stylus" scoped>
#app 
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px


hr 
  padding 10px
  background #ccc
  margin-bottom 10px
  border none

</style>

<template lang="pug">
#app
    Collapse(
      title="titulo con información",
      subtitle="subtitulo con información" 
      )
    hr
    Card(
      title="titulo con información", 
      subtitle="subtitulo con información",
      url="https://www.sitepen.com/blog/wp-content/uploads/2018/05/mayhem19-600x315.png"
      )
    hr
    Carousell(

    )
    hr
    Modal(
      title="titulo de prueba",
      content="contenido de prueba"
      footer="footer de prueba"
      state="true"
    )
    hr
    Sidenav(
      title="abc"
    )
    hr
</template>


<script>

import Collapse from "./components/Collapse.vue";
import Card from "./components/Card.vue";
import Carousell from "./components/Carousell.vue";
import Modal from "./components/Modal.vue";
import Sidenav from "./components/Sidenav.vue";


export default {
  name: "app",
  components: {
    Modal,
    Collapse,
    Card,
    Carousell,
    Sidenav
  }
};
</script>



