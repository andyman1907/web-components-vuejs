<style lang="stylus" scoped>
.container {
  height: 100%;
}

iframe {
  width: 100%;
  height: 100% !important;
  min-height: 400px;
}

.description {
  max-height: 300px;
  overflow: auto;
}
</style>
<template lang="pug">
.video(:data-attributes="dataAttributes")
    .container
        h1 {{title}}
        iframe(
            :src="src",
            frameborder="0", 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="true"
        )
        .description {{description}}    
</div>
</template>

<script>
export default {
  name: "Video",
  props: {
    title: { default: "Title of test" },
    src: { default: "https://www.youtube.com/embed/zbycB-Yetb0" },
    description: { default: "Description of test" }
  },
  data() {
    return {
      state: true,
      isActive: true,
      items: [],
      dataAttributes: {
        title: "string",
        src: "string",
        description: "string"
      }
    };
  },
  methods: {
    toggle() {},
    getAttributes() {
      this.dataAttributes = JSON.stringify(this.dataAttributes);
    }
  },
  mounted() {
    this.getAttributes();
  }
};
</script>



