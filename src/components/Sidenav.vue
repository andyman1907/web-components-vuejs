<style lang="stylus" scoped>
body {
    font-family: 'Lato', sans-serif;
    transition: background-color 0.5s;
}

.overlay {
    width: 100%;
    left: 0px;
    height: 100%;
    position: fixed;
    background-color: rgb(0, 0, 0, 0.2);
    top: 0px;
    display: none;
    opacity: 0.3;
}

.overlay.active {
    display: block;
}

.sidenav {
    height: 100%;
    width: 250px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: -100%;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
}

.sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
    text-align: left;
}

.sidenav a:hover {
    color: #f1f1f1;
}

.sidenav.active {
    left: 0px;
}

.sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
}

.main {
    transition: margin-left 0.5s;
    padding: 16px;
}

.main.active {
    margin-left: 250px;
}

@media screen and (max-height: 450px) {
    .sidenav {
        padding-top: 15px;
    }

    .sidenav a {
        font-size: 18px;
    }
}
</style>

<template lang="pug">
.sidenav-parent(:data-attributes="dataAttributes")
    .overlay(v-bind:class="{ active: isActive }" @click='toggle(false)')
    .sidenav(v-bind:class="{ active: isActive }")
        a.closebtn(href='javascript:void(0)', @click='toggle(false)') ×
        a(:href='item.href' v-for="item in items" v-bind:key="item.id" ) {{item.title}}
    .main
    p
        span(style='font-size:30px;cursor:pointer', @click='toggle(true)') ☰ {{buttonText}}
</template>

<script>
export default {
  name: "Sidenav",
  props: ["structure"],
  data() {
    return {
      isActive: false,
      defaultButtonText: "Open sidenav",
      buttonText:"",
      items: [],
      dataAttributes: {
        structure: {
          buttonText: "string",
          content: [
            {
              id: "number",
              title: "string",
              href: "string"
            }
          ]
        }
      }
    };
  },
  methods: {
    toggle(state) {
      if (state == false) {
        this.isActive = false;
      } else {
        this.isActive = true;
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
          console.log(jsonify);
          const arrData=jsonify.structure.content;
          if (jsonify != null && arrData) {
            arrData.forEach(element => {
              this.items.push(element);
            });
          }
          this.buttonText =
            jsonify != null && jsonify.buttonText
              ? jsonify.buttonText
              : this.defaultButtonText;
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
    getAttributes() {
      this.dataAttributes = JSON.stringify(this.dataAttributes);
    },
    /**
     * método que retorna el componente default (muestra)
     */
    getDefaultItems() {
      this.items.push({ id: 1, href: "#1", title: "texto1" });
      this.items.push({ id: 2, href: "#2", title: "texto2" });
      this.items.push({ id: 3, href: "#3", title: "texto3" });
      this.items.push({ id: 4, href: "#4", title: "texto4" });
      this.buttonText = this.defaultButtonText;
    }
  },
  mounted() {
    this.getItems();
    this.getAttributes();
  }
};
</script>


