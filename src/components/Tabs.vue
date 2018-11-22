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

/* Style the tab content (and add height:100% for full page content) */
.tabcontent {
    color: black;
    display: none;
    padding: 100px 20px;
    height: 100%;
}

.tab-title-container{
    display flex;
    overflow auto
}

.in {
    display: block;
}
</style>
<template lang="pug">
.content
    .tab-title-container
        .item(v-for="item in items" )
            button.tablink(@click="toggle(item)") {{item.title}}
    .tab-content-container
        .item(v-for="item in items")
            .tabcontent(v-bind:class="{ in: item.state}") {{item.content}}
</template>
<script>
export default {
  name: "Tabs",
  props: ["title", "content", "footer"],
  data() {
    return {
      state: true,
      isActive: true,
      items: []
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
    getItems() {
      this.items.push({ id: 1, title: "Primera", content: "texto1", state: true });
      this.items.push({ id: 2, title: "Segunda", content: "texto2", state: false });
      this.items.push({ id: 3, title: "Tercera", content: "texto3", state: false });
      this.items.push({ id: 4, title: "Cuarta", content: "texto4", state: false });
      this.items.push({ id: 5, title: "Quinta", content: "texto5", state: false });
      this.items.push({ id: 6, title: "Sexta", content: "texto6", state: false });
      this.items.push({ id: 7, title: "Septima", content: "texto7", state: false });
      this.items.push({ id: 8, title: "Octava", content: "texto8", state: false });
      this.items.push({ id: 9, title: "Novena", content: "texto9", state: false });
    }
  },
  mounted() {
    this.getItems();
  }
};
</script>


