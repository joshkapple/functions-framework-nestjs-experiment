import { Controller, Get } from '@nestjs/common';
import * as functions from 'firebase-functions';

@Controller('foo')
export class FooController {
  @Get()
  test(): string {
    return (
      "i'm a test! Here's the project id: " +
      functions.firebaseConfig().projectId
    );
  }
}
