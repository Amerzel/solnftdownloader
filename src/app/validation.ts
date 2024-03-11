import axios from 'axios';

import { Logger } from './logger';

export class Validation {
  public static async validate(): Promise<void> {
    try {
      this.validateEnvironmentVariables();
      await this.checkAPIStatus();
    } catch (error) {
      Logger.error(error);
      process.exit(1);
    }
  }

  private static async checkAPIStatus(): Promise<void> {
    try {
      const response = await axios({
        method: 'get',
        url: `${process.env.API_HOST}:${process.env.API_PORT}/api/health`
      });

      if (!response || response.status !== 200) {
        throw new Error(response.statusText);
      }
    } catch (error) {
      Logger.error(`Failed to connect to API, ${error.toString()}`);
      process.exit(1);
    }
  }

  private static validateEnvironmentVariables(): void {
    const requiredEnvironmentVariables = [
      'IMPORTS_TO_BE_IMPORTED_DIRECTORY',
      'IMPORTS_IMPORTED_DIRECTORY',
      'IMPORTS_FAILED_DIRECTORY',
      'API_HOST',
      'API_PORT',
      'API_AUTH_TOKEN',
    ];

    Logger.validation('Validating Required Enviornment Variables');

    for (const environmentVariable of requiredEnvironmentVariables) {
      const environmentVariableValue = process.env[environmentVariable];

      Logger.validation(`${environmentVariable}: ${environmentVariableValue}`);

      if (process.env[environmentVariable] === undefined) {
        throw new Error(`Missing required environment variable value: ${environmentVariable}.`);
      }
    }
  }
}
