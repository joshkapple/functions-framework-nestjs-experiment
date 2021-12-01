import { Injectable } from '@nestjs/common';

@Injectable()
export class AnotherApiService {
  getHello(): string {
    return "I'm another api handled by a different function!";
  }
}
