import { Test, TestingModule } from '@nestjs/testing';
import { WasherService } from './washer.service';

describe('WasherService', () => {
  let service: WasherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WasherService],
    }).compile();

    service = module.get<WasherService>(WasherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
