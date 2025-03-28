import { createApp } from 'vue';

// Import createApp from Vue 3
import VueCoolLightboxPlugin from '../src/index.js';
import App from './app.vue';

const app = createApp(App); // Create the app instance
app.use(VueCoolLightboxPlugin); // Use the plugin
app.mount('#app'); // Mount the app
