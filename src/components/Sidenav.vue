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
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
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
    text-align left;
}

.sidenav a:hover {
    color: #f1f1f1;
}

.sidenav.active {
    width: 250px;
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
.temp
    .overlay(v-bind:class="{ active: isActive }" @click='toggle(false)')
    .sidenav(v-bind:class="{ active: isActive }")
        a.closebtn(href='javascript:void(0)', @click='toggle(false)') ×        
        a(:href='item.href' v-for="item in items" v-bind:key="item.id" ) {{item.text}}    
    .main
    h2 Sidenav Push Example
    p
        | Click on the element below to open the side navigation menu, and push this content to the right. Notice that we add a black see-through background-color to body when the sidenav is opened.
    span(style='font-size:30px;cursor:pointer', @click='toggle(true)') ☰ open

</template>

<script>
export default {
  name: "Sidenav",
  props: ["title", "content", "footer"],
  data() {
    return {
      state: true,
      isActive: true,
      items: []
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
    getItems() {
      this.items.push({ id: 1, href: "#1", text: "texto1" });
      this.items.push({ id: 2, href: "#2", text: "texto2" });
      this.items.push({ id: 3, href: "#3", text: "texto3" });
      this.items.push({ id: 4, href: "#4", text: "texto4" });
      console(this.items)
    }
  },
  mounted() {
    this.getItems();
  }
};
</script>


