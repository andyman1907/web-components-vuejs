<style lang="stylus" scoped>
* {
  box-sizing: border-box;
}

body {
  font-family: Verdana, sans-serif;
  margin: 0;
}

.mySlides {
  /* display: none; */
}

img {
  vertical-align: middle;
}

.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
}

.prev {
  left: 0;
}

.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.prev:hover, .next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {
    opacity: 0.4;
  }

  to {
    opacity: 1;
  }
}

@keyframes fade {
  from {
    opacity: 0.4;
  }

  to {
    opacity: 1;
  }
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .prev, .next, .text {
    font-size: 11px;
  }
}
</style>
<template lang="pug">
.carousell(:data-attributes="dataAttributes")
  h1 {{title}}
  .slideshow-container(v-for="slide in slides" v-bind:key="slide.id")
    .mySlides.fade(v-if="slide.state")
      .numbertext 1 / 3
      img(:src='slide.url', style='width:100%')
      .text {{slide.text}}
    a.prev(@click="plusSlides(-1)") ❮
    a.next(@click="plusSlides(1)") ❯
  br
  div(style='text-align:center')
    span.dot(v-for="slide in slides" v-bind:key="slide.id" @click='currentSlide(slide.id)')
</template>
<script>
export default {
  name: "Collapse",
  props: ["structure"],
  data() {
    return {
      slides: [],
      slideIndex: 1,
      dataAttributes: {
        structure: {
          title: "string",
          content: [
            { id: "number", url: "string", text: "string", state: "boolean" }
          ]
        }
      }
    };
  },
  methods: {
    /**
     * method to generate default render in case the structure that gives 
     * in the structure selector is invalid
     */
    getDefaultSlides() {
      this.slides.push({
        id: 1,
        url: "https://www.w3schools.com/howto/img_nature_wide.jpg",
        text: "lorem 1",
        state: true
      });
      this.slides.push({
        id: 2,
        url: "https://www.w3schools.com/howto/img_snow_wide.jpg",
        text: "lorem 2",
        state: false
      });
      this.slides.push({
        id: 3,
        url: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
        text: "lorem 3",
        state: false
      });
    },
    /**
     * method that change the slider to next item (rigth)
     */
    plusSlides(x) {
      this.showSlides((this.slideIndex += x));
    },
    /**
     * method that change the slider to specific item for bottom icons
     */
    currentSlide(x) {
      this.showSlides((this.slideIndex = x));
    },
    /**
     * method that
     */
    showSlides(n) {
      try {
        let i;
        if (n > this.slides.length) {
          this.slideIndex = 1;
        }
        if (n < 1) {
          this.slideIndex = this.slides.length;
        }
        for (i = 0; i < this.slides.length; i++) {
          this.slides[i].state = false;
        }
        this.slides[this.slideIndex - 1].state = true;
        //   dots[this.slideIndex - 1].className += " active";
      } catch (error) {
        console(error);
      }
    },
    getAttributes() {
      this.dataAttributes = JSON.stringify(this.dataAttributes);
    }
  },
  mounted() {
    this.getDefaultSlides();
    this.showSlides(this.slideIndex);
    this.getAttributes();
  }
};
</script>

