<style lang="stylus" scoped>
* {
    box-sizing: border-box;
}

/* Create four equal columns that floats next to each other */
.column {
    float: left;
    width: 25%;
    padding: 10px;
}

.column-triple {
    width: 33.33%;
}

.column-double {
    width: 50%;
}

.column-single {
    width: 100%;
}

/* Clear floats after the columns */
.row:after {
    content: '';
    display: table;
    clear: both;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 900px) {
    .column {
        width: 50%;
    }

    .column-single {
        width: 100%;
    }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
    .column {
        width: 100%;
    }
}
</style>

<template lang="pug">
    .grid(:data-attributes="dataAttributes")
        .row(v-if="isActive")
            .column(v-bind:class="{'column-single':oneColumn,'column-double':twoColumn,'column-triple':threeColumn}")
                slot(name="one")   
            .column(v-if="!oneColumn",v-bind:class="{'column-double':twoColumn,'column-triple':threeColumn}")
                slot(name="two") 
            .column(v-if="!twoColumn",v-bind:class="{'column-triple':threeColumn}")
                slot(name="three") 
            .column(v-if="!threeColumn",v-bind:class="{}")
                slot(name="four") 
            button(@click="getAttributes") hola
</template>
<script>
export default {
  name: "Grid",
  data() {
    return {
      isActive: true,
      oneColumn: false,
      twoColumn: false,
      threeColumn: false,
      fourColumn: true,
      dataAttributes: {
        slots: [
          { name: "one" },
          { name: "two" },
          { name: "three" },
          { name: "four" }
        ]
      }
    };
  },
  methods: {
    validQuantity() {
      if (!this.$slots["one"]) {
        this.isActive = false;
      } else {
        this.isActive = true;
      }
      if (!this.$slots["two"]) {
        this.oneColumn = true;
      } else {
        this.oneColumn = false;
      }
      if (!this.$slots["three"]) {
        this.twoColumn = true;
      } else {
        this.twoColumn = false;
      }
      if (!this.$slots["four"]) {
        this.threeColumn = true;
      } else {
        this.threeColumn = false;
      }
    },
    getAttributes() {
      const jsonify = JSON.stringify(this.dataAttributes);
      return jsonify;
    }
  },
  mounted() {    
    this.getAttributes();
    this.validQuantity();
  }
};
</script>
