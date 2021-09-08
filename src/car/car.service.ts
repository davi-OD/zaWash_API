/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';

@Injectable()
export class CarService {
  constructor(@InjectRepository(Car) private readonly repository: Repository<Car>) {}

  create(createCarDto: CreateCarDto): Promise<Car> {
    const car = this.repository.create(createCarDto);
    return this.repository.save(car);
  }

  findAll(): Promise<Car[]> {
    return this.repository.find();
  }

  findOne(numberPlate: string): Promise<Car> {
    return this.repository.findOne(numberPlate);
  }

  async update(numberPlate: string, updateCarDto: UpdateCarDto): Promise<Car> {
    const car = await this.repository.preload({
      numberPlate: numberPlate,
      ...updateCarDto
    });
    if (!car) {
      throw new NotFoundException(`Item ${numberPlate} not found`);
    }
    return this.repository.save(car);
  }

  async remove(numberPlate: string) {
    const car = await this.findOne(numberPlate);
    return this.repository.remove(car);
  }
}
