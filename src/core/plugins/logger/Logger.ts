// src/logger/Logger.ts

import type { ILogger } from './ILogger';
import { Bold, LoggerColors, ResetBold, type LoggerOptions } from './LoggerOptions';
import { LogLevel } from './LogLevel';

export class Logger implements ILogger {
  private options: LoggerOptions;

  /**
   * Constructor for the Logger class, initializes log configuration.
   * @param options Optional configuration options for the logger.
   */
  constructor(options?: LoggerOptions) {
    this.options = this.initialize(options);
  }

  /**
   * Initializes the logger with custom options.
   * This method sets the default values and merges the provided options.
   * @param options The custom logger options to apply.
   * @returns The final logger configuration.
   */
  private initialize(options?: LoggerOptions): LoggerOptions {
    const defaultOptions = this.setDefaults();
    return this.mergeOptions(defaultOptions, options);
  }

  /**
   * Sets the default values for the logger options.
   * @returns The default configuration for the logger.
   */
  private setDefaults(): LoggerOptions {
    return {
      enable: true,
      logLevel: LogLevel.Debug,
      timestampFormat: 'yyyy-MM-dd HH:mm:ss',
      separator: ' | '
    };
  }

  /**
   * Merges the provided options with the default values.
   * @param defaultOptions The default configuration for the logger.
   * @param options The user-provided logger options.
   * @returns The final configuration with merged values.
   */
  private mergeOptions(defaultOptions: LoggerOptions, options?: LoggerOptions): LoggerOptions {
    return {
      enable: options?.enable ?? true,
      logLevel: options?.logLevel ?? defaultOptions.logLevel,
      timestampFormat: options?.timestampFormat ?? defaultOptions.timestampFormat,
      separator: options?.separator ?? defaultOptions.separator
    };
  }

  /**
   * Determines if the current log level should be logged.
   * @param level The log level of the message to log.
   */
  private shouldLog(level: LogLevel): boolean {
    return this.options.enable == true && level >= this.options.logLevel;
  }

  /**
   * Replaces placeholders in a string with values from the `args` array.
   * @param {string} message - The input string containing placeholders (e.g., `{0}`, `{Abc}`).
   * @param {unknown[]} args - An array of values to replace the placeholders.
   * @returns {string} - The string with placeholders replaced by values or left unchanged if no match is found.
   */
  private formatString(message: string, args: unknown[]): string {
    let matchIndex = 0;
    return message.replace(/{([^}]+)}/g, match => {
      const value = args[matchIndex];
      matchIndex++;
      return value !== undefined ? String(value) : match;
    });
  }

  /**
   * Formats the log message with the given log level and timestamp.
   * @param level The log level (e.g., 'Info', 'Error').
   * @param message The log message.
   */
  private formatLog(level: LogLevel, message: string, args: unknown[]): string {
    // const formattedMessage = this.formatString(message, args);
    const timestamp = new Date().toISOString();
    const levelName = `${Bold}${LogLevel[level].toString().toUpperCase()}${ResetBold}`;
    const color = LoggerColors[level] || LoggerColors[LogLevel.Trace];
    const colorReset = LoggerColors[LogLevel.None];

    return `${timestamp}${this.options.separator}${color}[${levelName}]${colorReset}${this.options.separator}${message}`;
  }

  /**
   * The generic log method that is used for all log levels.
   * @param level The log level of the message to log.
   * @param message The log message to log.
   * @param args Additional parameters to include in the log.
   */
  private log(level: LogLevel, message: string, ...args: unknown[]): void {
    if (this.shouldLog(level)) {
      const formattedMessage = this.formatLog(level, message, args);
      console.log(formattedMessage, ...args);
    }
  }

  trace(message: string, ...args: unknown[]): void {
    this.log(LogLevel.Trace, message, ...args);
  }

  debug(message: string, ...args: unknown[]): void {
    this.log(LogLevel.Debug, message, ...args);
  }

  info(message: string, ...args: unknown[]): void {
    this.log(LogLevel.Information, message, ...args);
  }

  warn(message: string, ...args: unknown[]): void {
    this.log(LogLevel.Warning, message, ...args);
  }

  error(message: string, ...args: unknown[]): void {
    this.log(LogLevel.Error, message, ...args);
  }

  critical(message: string, ...args: unknown[]): void {
    this.log(LogLevel.Critical, message, ...args);
  }
}
