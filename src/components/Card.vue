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
      slot(name="image")
        img(:src="url", alt="Avatar", style="width:100%")      
      .container
        h4
          slot(name="title") 
            b title of test
        .content 
          slot(name="content") 
            p content of test

</template>
<script>
export default {
  name: "Card",
  components: {},
  props: [] /* {
    title: {
      default: "Title of test"
    },
    content: {
      default: "content of test"
    },
    url: {
      default:
        "https://www.sitepen.com/blog/wp-content/uploads/2018/05/mayhem19-600x315.png"
    } 
  },*/,
  data() {
    return {
      // dataAttributes: { title: "string", content: "string", url: "string" },
      dataAttributes: {
        slot: {
          image: "",
          title: "string",
          content: "string"
        }
      }
    };
  },
  methods: {
    getAttributes() {
      this.dataAttributes = JSON.stringify(this.dataAttributes);
    }
  },
  mounted() {
    this.getAttributes();
  }
};
</script>