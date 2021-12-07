import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as Express from 'express';
import { INestApplication } from '@nestjs/common';

/** Note, bootstrapped from https://fireship.io/snippets/setup-nestjs-on-cloud-functions/ */

const serverApi = Express();

export const createNestServerApi = async (expressInstance) => {
  const app: INestApplication = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );

  return app.init();
};

createNestServerApi(serverApi)
  .then(() => console.log('Nest Ready'))
  .catch((err) => console.error('Nest broken', err));

switch (process.env.NODE_ENV) {
  case 'dev': {
    console.log(`NODE_ENV=${process.env.NODE_ENV} `);
    break;
  }
  case 'prod': {
    console.log(`NODE_ENV=${process.env.NODE_ENV} `);
    break;
  }
  default: {
    throw new Error(
      `Environment ${process.env.NODE_ENV} not handled. Please set NODE_ENV to a valid value.`,
    );
  }
}

export const api = serverApi;
