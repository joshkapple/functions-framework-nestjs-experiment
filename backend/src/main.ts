import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as express from 'express';
import * as functions from 'firebase-functions';
import { INestApplication } from '@nestjs/common';
import { AnotherApiModule } from './another-api/another-api.module';

/** Note, bootstrapped from https://fireship.io/snippets/setup-nestjs-on-cloud-functions/ */

const serverApi = express();

const anotherServerApi = express();

export const createNestServerApi = async (expressInstance) => {
  const app: INestApplication = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );

  return app.init();
};

// Creating another "api" to represent a different set of discrete services handled by a separate cloud function
export const createAnotherNestServerApi = async (expressInstance) => {
  const app: INestApplication = await NestFactory.create(
    AnotherApiModule,
    new ExpressAdapter(expressInstance),
  );

  return app.init();
};

createNestServerApi(serverApi)
  .then(() => console.log('Nest Ready'))
  .catch((err) => console.error('Nest broken', err));

createAnotherNestServerApi(anotherServerApi)
  .then(() => console.log('assessment server ready'))
  .catch((err) => console.log(console.error('assessment server broken')));

// these exports translate to paths `/api` and `/anotherApi`.
export const api = functions.https.onRequest(serverApi);
export const anotherApi = functions.https.onRequest(anotherServerApi);
