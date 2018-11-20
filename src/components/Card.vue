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

<template >
    <div class="card">
    <img :src="url" alt="Avatar" style="width:100%">
    <div class="container">
        <h4><b>{{title}}</b></h4>
        <p>{{content}}</p>
    </div>
</div>
</template>
<script>
export default {
  name: "Card",
  components: {},
  props: ["title", "content","url"],
  methods: {},
  mounted(){

  }
};
</script>