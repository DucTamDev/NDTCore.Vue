import { inject, type App } from 'vue';
import { Logger } from './Logger';
import type { LoggerOptions } from './LoggerOptions';
import { LogLevel } from './LogLevel';

const loggerSymbol = Symbol('ndtcore-logger-plugin');

/**
 * Vue Plugin for NDTCore Logger
 *
 * This plugin provides a Logger instance globally across the Vue app.
 * You can access the logger via `useLogger()` or directly from the global properties.
 */
const LoggerPlugin = {
  /**
   * Install the Logger Plugin into the Vue app.
   *
   * @param app - The Vue app instance.
   * @param options - Configuration options for the logger (optional).
   * Default options are set to enable logging with LogLevel.Trace.
   */
  install(app: App, options: LoggerOptions = { enable: true, logLevel: LogLevel.Trace }) {
    const logger = new Logger(options);

    // Provide the logger for dependency injection throughout the app
    // This allows you to inject the logger using `inject(loggerSymbol)`
    app.provide(loggerSymbol, logger);

    // Attach the logger to the global properties of Vue
    // This allows you to access the logger as `this.$logger` in your components
    app.config.globalProperties.$logger = logger;
  }
};

/**
 * Use the global Logger instance in your Vue components.
 *
 * This function is used to inject the logger into a component using Vue's inject mechanism.
 *
 * @returns The Logger instance injected into the component.
 * @throws A warning if the logger is not found (ensure the plugin is installed).
 */
export function useLogger(): Logger {
  const logger = inject<Logger>(loggerSymbol);
  if (!logger) {
    throw new Error('useLogger missing logger. Ensure the plugin is installed.');
  }

  return logger;
}

export default LoggerPlugin;
