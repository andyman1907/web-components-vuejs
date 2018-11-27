<style lang="stylus" scoped>
* {
  box-sizing: border-box;
}

/* Set height of body and the document to 100% */
body, html {
  height: 100%;
  margin: 0;
  font-family: Arial;
}

/* Style tab links */
.tablink {
  background-color: #555;
  color: white;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  font-size: 17px;
  width: 100%;
}

.tablink:hover {
  background-color: #777;
}

.tablink.active {
  background-color: #777;
}

/* Style the tab content (and add height:100% for full page content) */
.tabcontent {
  color: black;
  display: none;
  padding: 20px;
  height: 100%;
  border: solid 1px #ccc;
  border-radius: 0px 0px 3px 3px;
}

.tab-title-container {
  display: flex;
  overflow: auto;
}

.in {
  display: flex;
  align-items: center;
  vertical-align: center;
}
</style>
<template lang="pug">
.tabs(:data-attributes="dataAttributes")
  .content
      .tab-title-container
          .item(v-for="item in items" )
              button.tablink(
                @click="toggle(item)",v-bind:class="{active:item.state}"
                ) {{item.title}}
      .tab-content-container
          .item(v-for="item in items")
              .tabcontent(v-bind:class="{ in: item.state}") {{item.content}}
</template>
<script>
export default {
  name: "Tabs",
  props: ["structure"],
  data() {
    return {
      state: true,
      isActive: true,
      items: [],
      dataAttributes: [
        {
          id: "number",
          title: "string",
          content: "string",
          state: "boolean"
        }
      ]
    };
  },
  methods: {
    toggle(item) {
      for (let i = 0; i < this.items.length; i++) {
        const element = this.items[i];
        if (element.id == item.id) {
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
        if (this.structure != null) {
          const jsonify = JSON.parse(this.structure);
          if (jsonify != null && jsonify.structure) {
            const arrData = jsonify.structure;
            for (let i = 0; i < arrData.length; i++) {
              const element = arrData[i];
              element.state = false;
              this.items.push(element);
            }
            if (this.items.length > 0) {
              this.items[0].state = true;
            }
          }
        } else {
          /**
           * si no se definió una estrucutra correcta se genera una estructura inicial básica
           */
          this.getDefaultItems();
        }
      } catch (error) {
        this.getDefaultItems();
      }
    },
    /**
     * method to generate default render in case the structure that gives
     * in the structure selector is invalid
     */
    getDefaultItems() {
      this.items.push({
        id: 1,
        title: "Primera",
        content: "texto1",
        state: true
      });
      this.items.push({
        id: 2,
        title: "Segunda",
        content: "texto2",
        state: false
      });
      this.items.push({
        id: 3,
        title: "Tercera",
        content: "texto3",
        state: false
      });
      this.items.push({
        id: 4,
        title: "Cuarta",
        content: "texto4",
        state: false
      });
      this.items.push({
        id: 5,
        title: "Quinta",
        content: "texto5",
        state: false
      });
      this.items.push({
        id: 6,
        title: "Sexta",
        content: "texto6",
        state: false
      });
      this.items.push({
        id: 7,
        title: "Septima",
        content: "texto7",
        state: false
      });
      this.items.push({
        id: 8,
        title: "Octava",
        content: "texto8",
        state: false
      });
      this.items.push({
        id: 9,
        title: "Novena",
        content: "texto9",
        state: false
      });
      /*
        this.items.push({ id: 1, href: "#1", title: "texto1" });
        this.items.push({ id: 2, href: "#2", title: "texto2" });
        this.items.push({ id: 3, href: "#3", title: "texto3" });
        this.items.push({ id: 4, href: "#4", title: "texto4" });
        this.buttonText = this.defaultButtonText;
        */
    },
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


