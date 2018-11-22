import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import Collapse from './components/Collapse.vue';
import App from './App.vue';
import Card from './components/Card.vue';
import Carousell from './components/Carousell.vue';
import Modal from './components/Modal.vue';
import Sidenav from './components/Sidenav.vue';



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app');

const CollapseElement = wrap(Vue, Collapse);
window.customElements.define('my-custom-collapse', CollapseElement);

const CardElement = wrap(Vue, Card);
window.customElements.define('my-custom-card', CardElement);

const CarousellElement = wrap(Vue, Carousell);
window.customElements.define('my-custom-carousell', CarousellElement);

const ModalElement = wrap(Vue, Modal);
window.customElements.define('my-custom-modal', ModalElement);

const SidenavElement = wrap(Vue, Sidenav);
window.customElements.define('my-custom-sidenav', SidenavElement);