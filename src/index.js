/* global global */
import CoolLightBox from './components/cool-light-box.vue';

const install = (Vue) => {
	if (install.installed) return;
	install.installed = true;
	Vue.component('CoolLightBox', CoolLightBox);
};

const plugin = {
	install,
};

let GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.vue;
}

if (GlobalVue) {
	GlobalVue.use(plugin);
}

CoolLightBox.install = install;

export default CoolLightBox;
