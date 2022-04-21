import { PartialType } from '@nestjs/mapped-types';
import { CreateLibaryDto } from './create-libary.dto';

export class UpdateLibaryDto extends PartialType(CreateLibaryDto) {}
