import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarWasherService } from './car-washer.service';
import { CreateCarWasherDto } from './dto/create-car-washer.dto';
import { UpdateCarWasherDto } from './dto/update-car-washer.dto';

@Controller('car-washer')
export class CarWasherController {
  constructor(private readonly carWasherService: CarWasherService) {}

  @Post()
  create(@Body() createCarWasherDto: CreateCarWasherDto) {
    return this.carWasherService.create(createCarWasherDto);
  }

  @Get()
  findAll() {
    return this.carWasherService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carWasherService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarWasherDto: UpdateCarWasherDto) {
    return this.carWasherService.update(+id, updateCarWasherDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carWasherService.remove(+id);
  }
}
