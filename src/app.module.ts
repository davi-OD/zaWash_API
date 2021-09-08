/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './orm.config';
// import { WasherModule } from './washer/washer.module';
import { CarModule } from './car/car.module';
import { ExpenseModule } from './expense/expense.module';
import { WasherModule } from './washer/washer.module';
import { CarWasherModule } from './car-washer/car-washer.module';



@Module({
  imports: [TypeOrmModule.forRoot(config), WasherModule, CarModule, ExpenseModule, CarWasherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
