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
}

/* Modal Content */
.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
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
}

.modal-body {
  padding: 2px 16px;
}

.modal-footer {
  padding: 2px 16px;
  background-color: #5cb85c;
  color: white;
}
</style>
<template lang="pug">
.content(:data-attributes="dataAttributes")
  .modal(v-show="state")
    .modal-content
      .modal-header
        span.close(@click="toggle(false)") &times;
        h2 
          slot(name="title")
      .modal-body
        .modal-body-content
          slot(name="content")
      .modal-footer(v-if="footer")
        slot(name="footer")
  button.button(@click="toggle(true)") 
    slot(name="buttonText")
</template>

<script>
export default {
  name: "Modal",
  props: ["title", "content", "footer"],
  data() {
    return {
      state: false,
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
      console.log(JSON.stringify(this.dataAttributes));
      this.dataAttributes = JSON.stringify({name:"string",content:"string"});
    }
  },
  mount() {
    this.getAttributes();
  }
};
</script>


