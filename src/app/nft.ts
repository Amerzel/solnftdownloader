import * as async from 'async';
import * as chokidar from 'chokidar';
import FormData from 'form-data';
import * as fs from 'fs';
import * as path from 'path';
import axios, { AxiosResponse } from 'axios';

import { Logger } from './logger';

export interface NFTResponse {
  data: string;
  status: number;
  statusText: string;
}

export class NFT {
  public static async start() {
    Logger.info(`Start NFT`);
  }
}
