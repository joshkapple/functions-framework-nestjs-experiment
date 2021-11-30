import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FooController } from './foo/foo.controller';

@Module({
  imports: [],
  controllers: [AppController, FooController],
  providers: [AppService],
})
export class AppModule {}
