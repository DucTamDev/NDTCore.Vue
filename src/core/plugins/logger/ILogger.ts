export interface ILogger {
  /**
   * Logs a trace message (lowest log level).
   * @param message The log format message.
   * @param args Additional parameters to be logged.
   */
  trace(message: string, ...args: unknown[]): void;

  /**
   * Logs a debug message.
   * @param message The log format message.
   * @param args Additional parameters to be logged.
   */
  debug(message: string, ...args: unknown[]): void;

  /**
   * Logs an information message.
   * @param message The log format message.
   * @param args Additional parameters to be logged.
   */
  info(message: string, ...args: unknown[]): void;

  /**
   * Logs a warning message.
   * @param message The log format message.
   * @param args Additional parameters to be logged.
   */
  warn(message: string, ...args: unknown[]): void;

  /**
   * Logs an error message.
   * @param message The log format message.
   * @param args Additional parameters to be logged.
   */
  error(message: string, ...args: unknown[]): void;

  /**
   * Logs a critical error message (highest severity).
   * @param message The log format message.
   * @param args Additional parameters to be logged.
   */
  critical(message: string, ...args: unknown[]): void;
}
