import { Test, TestingModule } from '@nestjs/testing';
import { CarWasherController } from './car-washer.controller';
import { CarWasherService } from './car-washer.service';

describe('CarWasherController', () => {
  let controller: CarWasherController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarWasherController],
      providers: [CarWasherService],
    }).compile();

    controller = module.get<CarWasherController>(CarWasherController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
