import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class ApiController {
  @Get()
  test(): string {
    return "i'm a test of api!";
  }
}
