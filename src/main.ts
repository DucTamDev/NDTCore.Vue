import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from '@/router';
import I18nPlugin from '@/core/plugins/i18n.plugin';
import VuetifyPlugin from '@/core/plugins/vuetify.plugin';
import LoggerPlugin from '@/core/plugins/logger/LoggerPlugin';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(LoggerPlugin);
app.use(I18nPlugin);
app.use(VuetifyPlugin);

app.mount('#app');
