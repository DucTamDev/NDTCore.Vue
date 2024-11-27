import { LogLevel } from './LogLevel';

export interface LoggerOptions {
  logLevel: LogLevel;
  separator?: string;
  timestampFormat?: string;
}

export const LoggerColors = {
  [LogLevel.Trace]: '\x1b[34m', // Blue for Trace
  [LogLevel.Debug]: '\x1b[36m', // Cyan for Debug
  [LogLevel.Information]: '\x1b[32m', // Green for Information
  [LogLevel.Warning]: '\x1b[33m', // Yellow for Warning
  [LogLevel.Error]: '\x1b[31m', // Red for Error
  [LogLevel.Critical]: '\x1b[41m', // Red background for Critical
  [LogLevel.None]: '\x1b[0m' // Reset for None, no color
};

export const Bold = '\x1b[1m'; // ANSI escape code for bold
export const ResetBold = '\x1b[22m'; // ANSI escape code to reset bold
