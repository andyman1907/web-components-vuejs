
<template lang="pug">
//- .carousell(:data-attributes="dataAttributes")
//-   h1 {{title}}
//-   .slideshow-container(v-for="slide in slides" v-bind:key="slide.id")
//-     .mySlides.fade(v-if="slide.state")
//-       .numbertext 1 / 3
//-       img(:src='slide.url', style='width:100%')
//-       .text {{slide.text}}
//-     a.prev(@click="plusSlides(-1)") ❮
//-     a.next(@click="plusSlides(1)") ❯
//-   br
//-   div(style='text-align:center')
//-     span.dot(v-for="slide in slides" v-bind:key="slide.id" @click='currentSlide(slide.id)')
div
  v-btn(color='success') Success
  v-btn(color='error') Error
  v-btn(color='warning') Warning
  v-btn(color='info') Info

</template>
<script>
export default {
  name: "Collapse",
  props: ["structure"],
  data() {
    return {
      slides: [],
      titleDefault: "Title of test",
      title: "",
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
     * method that turns the json of the selector structure to object to
     * render correctly it has all the validations to render, if the structure is
     * not valid it will generate a default structure
     * método que se encarga de convertir un atributo structure
     */
    getSlides() {
      try {
        if (this.structure != null) {
          const jsonify = JSON.parse(this.structure);
          if (jsonify != null && jsonify.structure.content) {
            const arrData = jsonify.structure.content;
            for (let i = 0; i < arrData.length; i++) {
              const element = arrData[i];
              this.slides.push(element);
            }
          }
          this.title =
            jsonify != null && jsonify.structure.title
              ? jsonify.structure.title
              : this.titleDefault;
        } else {
          /**
           * si no se definió una estrucutra correcta se genera una estructura inicial básica
           */
          this.getDefaultSlides();
        }
      } catch (error) {
        this.getDefaultSlides();
      }
    },
    /**
     * method to generate default render in case the structure that gives
     * in the structure selector is invalid
     */
    getDefaultSlides() {
      //example json
      //{"title":"carousell de test","content":[{"id":"1","url":"https://www.w3schools.com/howto/img_nature_wide.jpg","text":"lorem 1","state":"true"},{"id":"1","url":"https://www.w3schools.com/howto/img_snow_wide.jpg","text":"lorem 2","state":"true"},{"id":"1","url":"https://www.w3schools.com/howto/img_mountains_wide.jpg","text":"lorem 3","state":"true"}]}
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
      this.title = this.titleDefault;
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
     * method that show the slider that is active
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
        const actual = this.slides[this.slideIndex - 1];
        if (actual != null) {
          actual.state = true;
        }
        //   dots[this.slideIndex - 1].className += " active";
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * method that turns the attributes of the component in JSON to have
     * the structure that the components needs to render correctly, this data
     * will be in the selector data-attributes
     */
    getAttributes() {
      this.dataAttributes = JSON.stringify(this.dataAttributes);
    }
  },
  mounted() {
    // this.getSlides();
    // this.showSlides(this.slideIndex);
    // this.getAttributes();
     M.AutoInit(); 
     //M.Carousel.AutoInit()
  }
};
</script>

