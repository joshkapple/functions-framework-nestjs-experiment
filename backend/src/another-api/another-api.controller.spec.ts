import { Test, TestingModule } from '@nestjs/testing';
import { AnotherApiController } from './another-api.controller';
import { AnotherApiService } from './another-api.service';

describe('AnotherApiController', () => {
  let controller: AnotherApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnotherApiController],
      providers: [AnotherApiService],
    }).compile();

    controller = module.get<AnotherApiController>(AnotherApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
