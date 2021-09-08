import { Test, TestingModule } from '@nestjs/testing';
import { WasherController } from './washer.controller';
import { WasherService } from './washer.service';

describe('WasherController', () => {
  let controller: WasherController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WasherController],
      providers: [WasherService],
    }).compile();

    controller = module.get<WasherController>(WasherController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
