import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as express from 'express';
import * as functions from 'firebase-functions';
import { INestApplication } from '@nestjs/common';

/** Note, bootstrapped from https://fireship.io/snippets/setup-nestjs-on-cloud-functions/ */

const server = express();

export const createNestServer = async (expressInstance) => {
  const app: INestApplication = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );

  return app.init();
};

createNestServer(server)
  .then(() => console.log('Nest Ready'))
  .catch((err) => console.error('Nest broken', err));

export const api = functions.https.onRequest(server);
