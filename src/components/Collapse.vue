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

.active, .accordion:hover {
    background-color: #ccc;
}

.accordion:after {
    content: '\002B';
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
    border:1px solid #ccc;
    border-top:0px;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
    display: none;
    border-radius:0px 0px 3px 3px;
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
          .panel(v-bind:class="{ in: panel.state==true }")
            p {{panel.content}}            
</template>
<script>
export default {
  name: "Collapse",
  props: ["structure"],
  data() {
    return {
      panels: [],
      title: "",
      defaultTitle: "title of test",
      subtitle: "",
      defaultSubtitle: "subtitle of test",
      dataAttributes: {
        structure: {
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
        }
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
    /**
     * method that turns the json of the selector structure to object to
     * render correctly it has all the validations to render, if the structure is
     * not valid it will generate a default structure
     * método que se encarga de convertir un atributo structure
     */
    getItems() {
      try {
        //example json
        //{"structure":{"title":"carousell de test","content":[{"id":"1","title":"title 1","content":"lorem 1","state":true},{"id":"1","title":"title 2","content":"lorem 2","state":false},{"id":"1","title":"title 3","content":"lorem 3","state":false}]}}
        if (this.structure != null) {
          const jsonify = JSON.parse(this.structure);
          if (jsonify != null && jsonify.structure.content) {
            const arrData = jsonify.structure.content;
            for (let i = 0; i < arrData.length; i++) {
              const element = arrData[i];
              this.panels.push(element);
            }
          }
          this.title =
            jsonify != null && jsonify.structure.title
              ? jsonify.structure.title
              : this.defaultTitle;
          this.subtitle =
            jsonify != null && jsonify.structure.subtitle
              ? jsonify.structure.subtitle
              : this.defaultSubtitle;
        } else {
          /**
           * si no se definió una estrucutra correcta se genera una estructura inicial básica
           */
          this.getDefaultItems();
        }
      } catch (error) {
        console.log(error);
        this.getDefaultItems();
      }
    },
    /**
     * method that turns the json of the selector structure to object to
     * render correctly it has all the validations to render, if the structure is
     * not valid it will generate a default structure
     * método que se encarga de convertir un atributo structure
     */
    getDefaultItems() {
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
      this.title = this.defaultTitle;
      this.subtitle = this.defaultSubtitle;
    },
    /**
     * method that turns the attributes of the component in JSON to have
     * the structure that the components needs to render correctly, this data
     * will be in the selector data-attributes
     */
    getAttributes() {
      this.dataAttributes = JSON.stringify(this.dataAttributes);
    }
  },
  mounted() {
    this.getItems();
    this.getAttributes();
  }
};
</script>