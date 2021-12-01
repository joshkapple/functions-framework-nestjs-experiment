import { Test, TestingModule } from '@nestjs/testing';
import { AnotherApiService } from './another-api.service';

describe('AnotherApiService', () => {
  let service: AnotherApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnotherApiService],
    }).compile();

    service = module.get<AnotherApiService>(AnotherApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
