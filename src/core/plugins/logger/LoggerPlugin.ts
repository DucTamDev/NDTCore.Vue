import type { App } from 'vue';
import { Logger } from './Logger';

export default {
  install(app: App, options: any = {}) {
    const logger = new Logger(options);

    // Provide the logger for injection
    app.provide('$logger', logger);

    // Attach logger to the global properties
    app.config.globalProperties.$logger = logger;
  }
};
