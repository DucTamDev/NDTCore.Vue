import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from '@router/index';
import i18n from '@core/plugins/i18n.plugin';
import VuetifyPlugin from '@core/plugins/vuetify.plugin';
import LoggerPlugin from '@core/plugins/logger/LoggerPlugin';
import WelcomeMessagePlugin from '@shared/utils/console.utils';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '@assets/main.css';
import '@shared/styles/index.scss';

const app = createApp(App);

app.use(WelcomeMessagePlugin);

app.use(LoggerPlugin);
app.use(i18n);

app.use(createPinia());
app.use(router);

app.use(VuetifyPlugin);

app.mount('#app');
