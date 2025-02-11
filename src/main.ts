import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '@assets/main.css';
import '@shared/styles/_index.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from '@router/index';
import ConsoleLogger from '@/shared/utils/ConsoleLogger';
import { VuetifyPlugin, I18nPlugin, LoggerPlugin } from '@/core/plugins/_index';

ConsoleLogger.displayWelcomeMessage();
const app = createApp(App);

app.use(await I18nPlugin.getI18n());

app.use(router);
app.use(createPinia());

app.use(VuetifyPlugin);
app.use(LoggerPlugin);

app.mount('#app');
