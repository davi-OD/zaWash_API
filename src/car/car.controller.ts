/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post()
  create(@Body() createCarDto: CreateCarDto) {
    return this.carService.create(createCarDto);
  }

  @Get()
  findAll() {
    return this.carService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') numberPlate: string) {
    return this.carService.findOne(numberPlate);
  }

  @Patch(':id')
  update(@Param('id') numberPlate: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carService.update(numberPlate, updateCarDto);
  }

  @Delete(':id')
  remove(@Param('id') numberPlate: string) {
    return this.carService.remove(numberPlate);
  }
}
