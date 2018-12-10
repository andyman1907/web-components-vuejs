<style lang="scss" scoped>
@import "~materialize-css/sass/materialize.scss";
.Dashboard {
  background: #ccc;
  padding: 5px 20px;

  #main a {
    display: block;
  }

  #selected-items,
  #form-item {
    padding: 10px;
    border-radius: 5px;
    -webkit-animation: abs(2);
    background: white;
    margin-top:10px;
  }

  .item {
    margin-top: 10px;
  }

  #form-items {
    margin-top: 10px;
  }
}
</style>
<template lang="pug">
.Dashboard(:data-attributes="dataAttributes")
    #main.row
        .col.s6.m6(v-for="item in items")
            a.btn-small(v-bind:key="item.id" @click="select(item)" href="#")
                span {{item.name}}
        
    #selected-items
        .item(v-for="item in selectedItems" v-bind:key="item.id")
            .admin-menu
                a.btn-small(@click="editItem(item)") Editar
                a.btn-small(@click="deleteItem(item)") Eliminar
                a.btn-small(@click="cloneItem(item)") Duplicar
                .container(v-html="transformHtml(item.name)")
    #form-item
      .form-data(v-html="formData")
      
</template>
<script>
import data from "./data/components.json";
import Collapse from "./components/Collapse.vue";
import Card from "./components/Card.vue";
import Carousell from "./components/Carousell.vue";
import Modal from "./components/Modal.vue";
import Sidenav from "./components/Sidenav.vue";
import Tabs from "./components/Tabs.vue";
import Video from "./components/Video.vue";
import NavbarDropdown from "./components/NavbarDropdown.vue";
import Grid from "./components/Grid.vue";
// "./components/CardForm.html"

export default {
  name: "Dashboard",
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
  },
  data() {
    return {
      /**to use slots use this */
      dataAttributes: {
        slots: [
          { name: "one" },
          { name: "two" },
          { name: "three" },
          { name: "four" }
        ]
      },
      /**or to use attributes use this */
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
      selectedItems: [],
      items: [],
      formData: ""
    };
  },
  methods: {
    /**
     * method that turns the attributes of the component in JSON to have
     * the structure that the components needs to render correctly, this data
     * will be in the selector data-attributes
     */
    getAttributes() {
      this.dataAttributes = JSON.stringify(this.dataAttributes);
    },
    /**
     * method that turns the json of the selector structure to object to
     * render correctly it has all the validations to render, if the structure is
     * not valid it will generate a default structure
     * método que se encarga de convertir un atributo structure
     */
    getItems() {
      try {
        this.items = [];
        this.selectedItems = [];
        data.forEach(element => {
          this.items.push(element);
        });
      } catch (error) {
        //this.getDefaultItems();
        console.log(error);
      }
    },
    select(item) {
      try {
        this.selectedItems.push(item);
      } catch (error) {
        console.log(error);
      }
    },
    editItem(item) {
      console.log("editing");
      const form = require(`html-loader!./components/${item.vueName}Form.html`);
      this.formData = form;
    },
    deleteItem(item) {
      console.log("deleting");
      console.log(item);
    },
    cloneItem(item) {
      console.log("cloning");
      console.log(item);
      this.selectedItems.push(item);
    },
    /**
     * method to generate default render in case the structure that gives
     * in the structure selector is invalid
     */
    getDefaultItems() {
      /*
        this.items.push({ id: 1, href: "#1", title: "texto1" });
        this.items.push({ id: 2, href: "#2", title: "texto2" });
        this.items.push({ id: 3, href: "#3", title: "texto3" });
        this.items.push({ id: 4, href: "#4", title: "texto4" });
        this.buttonText = this.defaultButtonText;
        */
    },
    transformHtml(item) {
      return `<${item} test="hello" structure='{"structure":{"title":"hola dinámico","content":[{"id":"1","url":"https://picsum.photos/200/300/?random","text":"dinámico 1","state":"true"},{"id":"2","url":"https://picsum.photos/200/300/?random","text":"dinámico 2","state":"false"},{"id":"3","url":"https://picsum.photos/200/300/?random","text":"dinámico 3","state":"false"}]}}'></${item}>`;
    }
  },
  mounted() {
    //this.getAttributes();
    this.getItems();
  },
  filters: {}
};
</script>


