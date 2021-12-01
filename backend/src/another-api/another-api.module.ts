import { Module } from '@nestjs/common';
import { AnotherApiService } from './another-api.service';
import { AnotherApiController } from './another-api.controller';
import { FooController } from '../foo/foo.controller';

@Module({
  controllers: [AnotherApiController, FooController],
  providers: [AnotherApiService],
})
export class AnotherApiModule {}
