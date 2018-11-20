// import Vue from 'vue'
// import App from './App.vue'



import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import Collapse from './components/Collapse.vue';
import App from './App.vue';
import Card from './components/Card.vue';



// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app');

const CollapseElement = wrap(Vue, Collapse);
window.customElements.define('my-custom-collapse', CollapseElement);

const CardElement = wrap(Vue, Card);
window.customElements.define('my-custom-card', CardElement);