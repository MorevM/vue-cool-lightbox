import CoolLightBox from './components/cool-light-box.vue';

// Define the install method for Vue 3 plugins
const install = (app) => {
    if (install.installed) return;
    install.installed = true;
    app.component('CoolLightBox', CoolLightBox); // Register the component globally
};

const plugin = {
    install,
};

export default CoolLightBox;

// Auto-install if Vue is detected globally
let GlobalVue = null;
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
}

if (GlobalVue) {
    GlobalVue.use(plugin);
}