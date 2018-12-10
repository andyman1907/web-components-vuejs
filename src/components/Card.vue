<style lang="scss" scoped>
@import "~materialize-css/sass/materialize.scss";
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
  width: 100%;
}
.container {
  padding: 2px 16px;
}
</style>

<template lang="pug">
    .card
      slot(name="img")
        img(:src="dataAttributes.slot.img", alt="img")      
      .container
        h4
          slot(name="title")
            b {{dataAttributes.slot.title}}
        .content
          slot(name="content")
            p {{dataAttributes.slot.content}}
</template>
<script>
import * as form from "html-loader!./CardForm.html";
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
          img:
            "https://www.sitepen.com/blog/wp-content/uploads/2018/05/mayhem19-600x315.png",
          title: "title of test",
          content: "content of test"
        }
      }
    };
  },
  methods: {
    showForm() {
      return form;
    },
    showDummy() {
      return JSON.stringify(this.dataAttributes);
    }
  },
  mounted() {
  }
};
</script>