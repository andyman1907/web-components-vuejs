<style scoped>
.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.4s;
}
.active,
.accordion:hover {
  background-color: #ccc;
}
.accordion:after {
  content: "\002B";
  color: #777;
  font-weight: bold;
  float: right;
  margin-left: 5px;
}
.active:after {
  content: "\2212";
}
.panel {
  padding: 0 18px;
  background-color: white;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  display: none;
}
.in {
  display: block;
}
</style>

<template>
    <div>
        <h2>{{title}}</h2>
        <p>{{subtitle}}</p>
        <div class="content" v-for="panel in panels" v-bind:key="panel.id">
            <button  class="accordion" @click="toggle(panel.id)" >{{panel.title}}</button>
            <div class="panel" v-bind:class="{ in: panel.state }">
                <p>{{panel.content}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "Collapse",
  props: ["title", "subtitle", "content"],
  data() {
    return {
      panels: [],
      countries: [
        { name: "Argentina", value: "argentina" },
        { name: "Colombia", value: "colombia" },
        { name: "España", value: "spain" }
      ],
      selectedCountry: "argentina",
      loading: true
    };
  },
  methods: {
    /* refreshArtists() {
      const self = this;
      this.loading = true;
      this.artists = [];
      getArtists(this.selectedCountry).then(function(artists) {
        self.loading = false;
        self.artists = artists;
      });
    } */
    toggle(e) {
      //console.log(e);
      for (let i = 0; i < this.panels.length; i++) {
          const element = this.panels[i];
          if(element.id==e){
              element.state=true
          }else{
              element.state=false
          }
      }
    },
    getPanels() {
      //const self = this;
      this.loading = true;
      this.panels.push({
        id: 1,
        title: "titulo 1",
        content: "contenido 1",
        state: false
      });
      this.panels.push({
        id: 2,
        title: "titulo 2",
        content: "contenido 2",
        state: false
      });
      this.panels.push({
        id: 3,
        title: "titulo 3",
        content: "contenido 3",
        state: false
      });
    }
  },
  mounted() {
    this.getPanels();
  }
};
</script>