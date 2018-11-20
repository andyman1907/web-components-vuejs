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
</template>


<script>
import HelloWorld from "./components/HelloWorld.vue";
import Collapse from "./components/Collapse.vue";
import Card from "./components/Card.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    Collapse,
    Card
  }
};
</script>

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

