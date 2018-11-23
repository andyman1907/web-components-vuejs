<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
  border-radius: 5px;
  background: white;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
img {
  border-radius: 5px 5px 0 0;
}
.container {
  padding: 2px 16px;
}
</style>

<template lang="pug">
    .card(:data-attributes="dataAttributes")
      img(:src="url", alt="Avatar", style="width:100%")
      .container
        h4
          b {{title}}
        p {{content}}    

</template>
<script>
export default {
  name: "Card",
  components: {},
  props: ["title", "content", "url"],
  data() {
    return {
      dataAttributes:'',
      perro: false
    };
  },
  methods: {
    getAttributes() {
      this.dataAttributes = JSON.stringify(this.$props);
    }
  },
  mounted() {
    this.getAttributes() 
  }
};
</script>