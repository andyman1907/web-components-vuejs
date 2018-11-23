<style lang="stylus" scoped>
</style>
<template lang="pug">
.#componentName#(:data-attributes="dataAttributes")

</template>
<script>
export default {
  name: "#componentName#",
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
        if (this.structure != null) {
          const jsonify = JSON.parse(this.structure);
          /*
          if (jsonify != null && jsonify.content) {
            jsonify.content.forEach(element => {
              this.items.push(element);
            });
          }
          this.buttonText =
            jsonify != null && jsonify.buttonText
              ? jsonify.buttonText
              : this.defaultButtonText;
              */
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
      /*
        this.items.push({ id: 1, href: "#1", title: "texto1" });
        this.items.push({ id: 2, href: "#2", title: "texto2" });
        this.items.push({ id: 3, href: "#3", title: "texto3" });
        this.items.push({ id: 4, href: "#4", title: "texto4" });
        this.buttonText = this.defaultButtonText;
        */
    }
  },
  mounted() {
    this.getAttributes();
  }
};
</script>


