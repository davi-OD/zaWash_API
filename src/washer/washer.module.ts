/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { WasherService } from './washer.service';
import { WasherController } from './washer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Washer } from './entities/washer.entity';

@Module({
  imports:  [TypeOrmModule.forFeature([Washer])],
  controllers: [WasherController],
  providers: [WasherService]
})
export class WasherModule {}
