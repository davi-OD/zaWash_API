/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWasherDto } from './dto/create-washer.dto';
import { UpdateWasherDto } from './dto/update-washer.dto';
import { Washer } from './entities/washer.entity';

@Injectable()
export class WasherService {
  constructor(@InjectRepository(Washer) private readonly repository: Repository<Washer>) {}
  
  create(createWasherDto: CreateWasherDto): Promise<Washer> {
    const washer = this.repository.create(createWasherDto);
    return this.repository.save(washer);
  }

  findAll(): Promise<Washer[]> {
    return this.repository.find();
  }

  findOne(id: string): Promise<Washer> {
    return this.repository.findOne(id);
  }

  async update(id: number, updateWasherDto: UpdateWasherDto): Promise<Washer> {
    const washer = await this.repository.preload({
      id: id,
      ...updateWasherDto,
    });
    if (!washer) {
      throw new NotFoundException(`Item ${id} not found`);
    }
    return this.repository.save(washer);
  }

  async remove(id: string) {
    const washer = await this.findOne(id);
    return this.repository.remove(washer);
  }
}
