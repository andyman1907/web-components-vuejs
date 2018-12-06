<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
}

/* The Modal (background) */
.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  border-radius: 5px;
}

/* Modal Content */
.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;  
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
  border-radius: 5px;
}

/* The Close Button */
.close {
  color: white;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.modal-header {
  padding: 2px 16px;
  background-color: #5cb85c;
  color: white;
  min-height: 30px;
}

.modal-body {
  padding: 10px;
}

.modal-footer {
  padding: 2px 16px;
  background-color: #5cb85c;
  color: white;
}

/* Add Animation */
@-webkit-keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}
</style>
<template lang="pug">
.content(:data-attributes="dataAttributes")
  .modal(v-show="state")
    .modal-content
      .modal-header
        span.close(@click="toggle(false)") &times;
        h2
          slot(name="title") title of test
      .modal-body
        .modal-body-content
          slot(name="content") content of test
      .modal-footer
        slot(name="footer") footer of test
  button.button(@click="toggle(true)") 
    slot(name="buttonText") open
</template>

<script>
export default {
  name: "Modal",
  props: [],
  data() {
    return {
      state: false,
      title: false,
      content: false,
      footer: false,
      dataAttributes: {
        slot: {
          title: "string",
          content: "string",
          footer: "string",
          buttonText: "string"
        }
      }
    };
  },
  methods: {
    toggle(state) {
      if (state == false) {
        this.state = false;
      } else {
        this.state = state;
      }
    },
    getAttributes() {
      this.dataAttributes = JSON.stringify(this.dataAttributes);
    },
    validSlots() {
      this.title = this.$slots["title"] ? true : false;
      this.content = this.$slots["content"] ? true : false;
      this.footer = this.$slots["footer"] ? true : false;
    },doSave(){
      console.log(123456)
    }
  },
  mounted() {
    this.validSlots();
    this.getAttributes();
  }
};
</script>


