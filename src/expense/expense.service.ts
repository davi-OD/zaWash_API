/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { Expense } from './entities/expense.entity';

@Injectable()
export class ExpenseService {
  constructor(@InjectRepository(Expense) private readonly repository: Repository<Expense>) {}
  
  create(createExpenseDto: CreateExpenseDto): Promise<Expense> {
    const expense = this.repository.create(createExpenseDto);
    return this.repository.save(expense);
  }

  findAll(): Promise<Expense[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<Expense> {
    return this.repository.findOne(id);
  }

  async update(id: number, updateExpenseDto: UpdateExpenseDto) {
    const expense = await this.repository.preload({
      id: id,
      ...updateExpenseDto,
    })
    if (!expense) {
      throw new NotFoundException(`Item ${id} not found`);
    }
    return this.repository.save(expense);
  }

  async remove(id: number) {
    const expense = await this.findOne(id)
    return this.repository.remove(expense);
  }
}
