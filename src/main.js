import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import Collapse from './components/Collapse.vue';
import App from './App.vue';
import Card from './components/Card.vue';
import Carousell from './components/Carousell.vue';
import Modal from './components/Modal.vue';
import Sidenav from './components/Sidenav.vue';
import Tabs from './components/Tabs.vue';
import Video from './components/Video.vue';
import NavbarDropdown from './components/NavbarDropdown.vue';
import Grid from './components/Grid.vue';
import 'materialize-css/dist/js/materialize.min'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import Dashboard from './Dashboard.vue';

//import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader

Vue.use(Vuetify)
Vue.config.productionTip = false

// new Vue({
//   render: h => h(Dashboard),
// }).$mount('#app');

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

const TabsElement = wrap(Vue, Tabs);
window.customElements.define('my-custom-tabs', TabsElement);

const VideoElement = wrap(Vue, Video);
window.customElements.define('my-custom-video', VideoElement);

const NavbarDropdownElement = wrap(Vue, NavbarDropdown);
window.customElements.define('my-custom-navbar-dropdown', NavbarDropdownElement);

const GridElement = wrap(Vue, Grid);
window.customElements.define('my-custom-grid', GridElement);

const DashboardElement = wrap(Vue, Dashboard);
window.customElements.define('my-custom-dashboard', DashboardElement);