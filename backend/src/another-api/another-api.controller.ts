import { Controller, Get } from '@nestjs/common';
import { AnotherApiService } from './another-api.service';

@Controller()
export class AnotherApiController {
  constructor(private readonly anotherApiService: AnotherApiService) {}

  @Get()
  get(): string {
    return this.anotherApiService.getHello();
  }
}
