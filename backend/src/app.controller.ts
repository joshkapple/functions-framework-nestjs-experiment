import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller('')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService,
  ) {
    console.log(this.configService.get<string>('ENVIRONMENT'));
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
