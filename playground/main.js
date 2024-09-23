import Vue from 'vue';
import VueCoolLightboxPlugin from '../src/index.js';
import App from './app.vue';

Vue.use(VueCoolLightboxPlugin);

Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
}).$mount('#app');
