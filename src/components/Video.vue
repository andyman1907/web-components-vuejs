<style lang="stylus" scoped>
.container {
    height: 100%;
}

iframe {
    width: 100%;
    height: 100% !important;
    min-height: 400px;
}
.description
    max-height 300px
    overflow auto
</style>
<template lang="pug">
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
  props: ["title", "src", "description"],
  data() {
    return {
      state: true,
      isActive: true,
      items: []
    };
  },
  methods: {
    toggle() {}
  }
};
</script>



