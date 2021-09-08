import { Test, TestingModule } from '@nestjs/testing';
import { CarWasherService } from './car-washer.service';

describe('CarWasherService', () => {
  let service: CarWasherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarWasherService],
    }).compile();

    service = module.get<CarWasherService>(CarWasherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
