export class Logger {
  private static LOG_PREFIX = '[Import]';

  public static debug(message: string): void {
    if (process.env.LOG_DEBUG === 'true') {
      console.debug(`[${new Date().toISOString()}] ${this.LOG_PREFIX} (debug): ${message}`);
    }
  }

  public static info(message: string): void {
    if (process.env.LOG_INFO === 'true') {
      console.info(`[${new Date().toISOString()}] ${this.LOG_PREFIX} (info): ${message}`);
    }
  }

  public static warn(message: string): void {
    if (process.env.LOG_WARN === 'true') {
      console.warn(`[${new Date().toISOString()}] ${this.LOG_PREFIX} (warn): ${message}`);
    }
  }

  public static error(message: string): void {
    if (process.env.LOG_ERROR === 'true') {
      console.error(`[${new Date().toISOString()}] ${this.LOG_PREFIX} (error): ${message}`);
    }
  }

  public static validation(message: string): void {
    console.info(`[${new Date().toISOString()}] ${this.LOG_PREFIX} (validation): ${message}`);
  }
}
