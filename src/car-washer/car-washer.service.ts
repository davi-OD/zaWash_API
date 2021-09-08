import { Injectable } from '@nestjs/common';
import { CreateCarWasherDto } from './dto/create-car-washer.dto';
import { UpdateCarWasherDto } from './dto/update-car-washer.dto';

@Injectable()
export class CarWasherService {
  create(createCarWasherDto: CreateCarWasherDto) {
    return 'This action adds a new carWasher';
  }

  findAll() {
    return `This action returns all carWasher`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carWasher`;
  }

  update(id: number, updateCarWasherDto: UpdateCarWasherDto) {
    return `This action updates a #${id} carWasher`;
  }

  remove(id: number) {
    return `This action removes a #${id} carWasher`;
  }
}
