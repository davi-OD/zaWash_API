import { PartialType } from '@nestjs/mapped-types';
import { CreateCarWasherDto } from './create-car-washer.dto';

export class UpdateCarWasherDto extends PartialType(CreateCarWasherDto) {}
