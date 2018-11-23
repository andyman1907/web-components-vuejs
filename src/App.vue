<style lang="stylus" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

hr {
  padding: 10px;
  background: #ccc;
  margin-bottom: 10px;
  border: none;
}

body {
  margin: 0px;
}
</style>

<template lang="pug">
#app
  //- Collapse(
  //-   title="titulo con información",
  //-   subtitle="subtitulo con información" 
  //-   )
  //- hr
  //- Card(
  //-   title="titulo con información", 
  //-   subtitle="subtitulo con información",
  //-   url="https://www.sitepen.com/blog/wp-content/uploads/2018/05/mayhem19-600x315.png"
  //-   )
  //- hr
  Carousell(

  )
  //- hr
  //- Modal
  //-   div(slot="title") titulo de prueba
  //-   div(slot="buttonText") Abrir modal
  //-   div(slot="content") Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti temporibus placeat magni magnam nisi hic sunt tempore rerum, voluptatum aliquam illo consectetur dolor! Provident, voluptatem soluta ut eum consectetur molestiae?
  //-   div(slot="footer")
  //-     p Ipsum molestias accusantium nam maxime ipsa commodi nostrum corporis ex suscipit accusamus aliquam tempora quasi non quos, fugiat aliquid pariatur aspernatur aperiam. Hic ea quod voluptates vero placeat eaque labore.
  //- hr
  //- Sidenav(
  //-   structure="{\"buttonText\":\"abrir menú lateral\",\"content\":[{\"id\":1,\"title\":\"titulo de prueba 1\",\"href\":\"link de prueba 1\"},{\"id\":2,\"title\":\"titulo de prueba 2\",\"href\":\"link de prueba 2\"}]}"
  //- )
  //- hr
  //- Tabs(title="titulo de prueba")
  //- Video(
  //-   title="Titulo de prueba",
  //-   src="https://www.youtube.com/embed/zbycB-Yetb0",
  //-   description=`<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti temporibus placeat magni magnam nisi hic sunt tempore rerum, voluptatum aliquam illo consectetur dolor! Provident, voluptatem soluta ut eum consectetur molestiae?</p>
  //-               <p>Doloribus odio consequuntur nemo, eaque odit provident fugiat aliquam laudantium. Omnis soluta quo voluptatibus quaerat corrupti dolorem exercitationem numquam neque a sint suscipit, deserunt, dolorum ducimus possimus harum minus mollitia.</p>
  //-               <p>Quasi accusantium officia molestias asperiores voluptatibus iure dolorum alias veritatis recusandae excepturi odit fugiat ab suscipit libero fugit at repellat impedit modi cum porro illum, voluptas laborum dicta neque. Quod.</p>
  //-               <p>Ipsum molestias accusantium nam maxime ipsa commodi nostrum corporis ex suscipit accusamus aliquam tempora quasi non quos, fugiat aliquid pariatur aspernatur aperiam. Hic ea quod voluptates vero placeat eaque labore.</p>
  //-               <p>Libero nisi aliquid, molestiae porro architecto voluptatum molestias quisquam ducimus doloremque minima dolorum quo, laborum ipsa minus et omnis maxime vero iure? Quis soluta aliquid eos. Possimus officia accusamus autem.</p>
  //-               <p>Minima reprehenderit distinctio nobis iusto iure, accusamus impedit molestias perspiciatis dicta, numquam quod libero! Earum perferendis rerum doloremque nihil quo temporibus. Autem expedita laborum, itaque esse delectus ab voluptatibus cum?</p>
  //-               <p>Asperiores eum enim impedit commodi architecto tempora, reiciendis, doloremque repellat quibusdam voluptate dolore ipsam deserunt corrupti nesciunt animi magni minus aut modi temporibus, perspiciatis est. Sapiente soluta libero incidunt ipsum?</p>
  //-               <p>Omnis repudiandae, eos consequuntur quia, aperiam vitae tenetur dignissimos nam itaque adipisci velit iusto animi pariatur ab vel incidunt delectus totam quod consectetur laborum nostrum sequi facere. Qui, itaque sunt.</p>
  //-               <p>Doloremque velit laboriosam, sunt perferendis culpa nesciunt placeat animi impedit, quas id nisi ducimus rerum ratione ea quae quia optio quod fugiat explicabo nostrum similique. Nobis tempore dolor voluptatem aspernatur.</p>`
  //- )
  //- NavbarDropdown
  //- Grid
  //-   div(slot="one")     
  //-     Card(
  //-     title="titulo con información", 
  //-     subtitle="subtitulo con información",
  //-     url="https://www.sitepen.com/blog/wp-content/uploads/2018/05/mayhem19-600x315.png"
  //-     )
  //-   div(slot="two") 
  //-     Card(
  //-       title="titulo con información", 
  //-       subtitle="subtitulo con información",
  //-       url="https://www.sitepen.com/blog/wp-content/uploads/2018/05/mayhem19-600x315.png"
  //-       )
  //-   div(slot="three") 
  //-     Card(
  //-       title="titulo con información", 
  //-       subtitle="subtitulo con información",
  //-       url="https://www.sitepen.com/blog/wp-content/uploads/2018/05/mayhem19-600x315.png"
  //-     )
  //-   div(slot="four") 
  //-     Card(
  //-       title="titulo con información", 
  //-       subtitle="subtitulo con información",
  //-       url="https://www.sitepen.com/blog/wp-content/uploads/2018/05/mayhem19-600x315.png"
  //-     )
</template>


<script>
import Collapse from "./components/Collapse.vue";
import Card from "./components/Card.vue";
import Carousell from "./components/Carousell.vue";
import Modal from "./components/Modal.vue";
import Sidenav from "./components/Sidenav.vue";
import Tabs from "./components/Tabs.vue";
import Video from "./components/Video.vue";
import NavbarDropdown from "./components/NavbarDropdown.vue";
import Grid from "./components/Grid.vue";

export default {
  name: "app",
  components: {
    Modal,
    Collapse,
    Card,
    Carousell,
    Sidenav,
    Tabs,
    Video,
    NavbarDropdown,
    Grid
  }
};
</script>



