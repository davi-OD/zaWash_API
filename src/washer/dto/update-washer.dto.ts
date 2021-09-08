import { PartialType } from '@nestjs/mapped-types';
import { CreateWasherDto } from './create-washer.dto';

export class UpdateWasherDto extends PartialType(CreateWasherDto) {}
