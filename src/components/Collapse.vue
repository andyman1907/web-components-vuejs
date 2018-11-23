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

<template lang="pug">
    .collapsex(:data-attributes="dataAttributes")
        h2 {{title}}
        p {{subtitle}}
        .content(v-for="panel in panels" v-bind:key="panel.id")
          button.accordion(@click="toggle(panel.id)") {{panel.title}}
            .panel(v-bind:class="{ in: panel.state }")
              p {{panel.content}}            
</template>
<script>
export default {
  name: "Collapse",
  props: ["title", "subtitle", "content"],
  data() {
    return {
      panels: [],
      dataAttributes: {
        title: "string",
        subtitle: "string",
        content: [
          {
            id: "number",
            title: "string",
            content: "string",
            state: "boolean"
          }
        ]
      },
      loading: true
    };
  },
  methods: {
    toggle(e) {
      for (let i = 0; i < this.panels.length; i++) {
        const element = this.panels[i];
        if (element.id == e) {
          element.state = true;
        } else {
          element.state = false;
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
    },
    getAttributes() {
      this.dataAttributes = JSON.stringify(this.dataAttributes);
    }
  },
  mounted() {
    this.getPanels();
    this.getAttributes();
  }
};
</script>