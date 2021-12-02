import { Controller, Get } from '@nestjs/common';

@Controller('foo')
export class FooController {
  @Get()
  test(): string {
    return "i'm a test of foo!";
  }
}
