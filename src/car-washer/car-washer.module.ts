import { Module } from '@nestjs/common';
import { CarWasherService } from './car-washer.service';
import { CarWasherController } from './car-washer.controller';

@Module({
  controllers: [CarWasherController],
  providers: [CarWasherService]
})
export class CarWasherModule {}
