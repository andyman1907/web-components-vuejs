<style lang="stylus" scoped>
.navbar {
    overflow: hidden;
    background-color: #333;
    font-family: Arial, Helvetica, sans-serif;
}

.navbar a {
    float: left;
    font-size: 16px;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

.dropdown {
    float: left;
    overflow: hidden;
}

.dropdown .dropbtn {
    font-size: 16px;
    border: none;
    outline: none;
    color: white;
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
}

.navbar a:hover, .dropdown:hover .dropbtn {
    background-color: red;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    margin-left -17px;
    margin-top:15px;
}

.dropdown-content a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
}

.dropdown-content a:hover {
    background-color: #ddd;
}

.dropdown:hover .dropdown-content {
    display: block;
}
</style>
<template lang="pug">
.navbar
    .items
        a.item(
            v-for="item in items", 
            v-bind:class="{dropdown: item.children.length>0}",
            :href="item.href"
        ) {{item.name}}
            i.fa.fa-caret-down(v-if="item.children.length>0")                
            .dropdown-content(v-if="item.children.length>0")
                a(
                    v-for="children in item.children",
                    :href="children.href"
                ) {{children.name}}
</template>
<script>
export default {
  name: "NavbarDropdown",
  props: ["title", "src", "description"],
  data() {
    return {
      state: true,
      isActive: true,
      items: []
    };
  },
  methods: {
    toggle() {},
    getData() {
      this.items.push(
        { id: 1, name: "Inicio", href: "#", children: [] },
        { id: 2, name: "Contacto", href: "#", children: [
            { id: 1, name: "Proyecto 0", href: "#proyecto0" },
        ] },
        {
          id: 3,
          name: "Portafolio",
          href: "#",
          children: [
            { id: 1, name: "Proyecto 1", href: "#proyecto1" },
            { id: 2, name: "Proyecto 2", href: "#proyecto2" },
            { id: 3, name: "Proyecto 3", href: "#proyecto3" }
          ]
        }
      );
    }
  },
  mounted() {
    this.getData();
  }
};
</script>


