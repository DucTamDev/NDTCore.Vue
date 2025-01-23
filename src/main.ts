import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from '@router/index';
import WelcomeMessage from '@shared/utils/console.utils';
import { VuetifyPlugin, I18nPlugin, LoggerPlugin } from '@core/plugins/index';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '@assets/main.css';
import '@shared/styles/index.scss';

WelcomeMessage.displayMessages();
const app = createApp(App);

app.use(await I18nPlugin.getI18n());

app.use(router);
app.use(createPinia());

app.use(VuetifyPlugin);
app.use(LoggerPlugin);

app.mount('#app');
