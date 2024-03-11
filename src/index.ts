import { NFT } from './app/nft';
import { Logger } from './app/logger';
import { Validation } from './app/validation';

function setupProcessHandlers() {
  function cleanUp(eventType: string) {
    Logger.info(`NFT ended with eventType ${eventType}`);
    process.exit(1);
  }

  [
    'exit',
    'SIGINT',
    'SIGUSR1',
    'SIGUSR2',
    'uncaughtException',
    'SIGTERM',
  ].forEach((eventType: any) => {
    process.on(eventType, cleanUp.bind(null, eventType));
  });
}

async function main() {
  Logger.info('NFT started');

  Validation.validate();

  await NFT.start();
}

setupProcessHandlers();
main();
