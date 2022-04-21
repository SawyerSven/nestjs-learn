import { Injectable } from '@nestjs/common';
import { CreateLibaryDto } from './dto/create-libary.dto';
import { UpdateLibaryDto } from './dto/update-libary.dto';

@Injectable()
export class LibaryService {
  create(createLibaryDto: CreateLibaryDto) {
    return 'This action adds a new libary';
  }

  findAll() {
    return `This action returns all libary`;
  }

  findOne(id: number) {
    return `This action returns a #${id} libary`;
  }

  update(id: number, updateLibaryDto: UpdateLibaryDto) {
    return `This action updates a #${id} libary`;
  }

  remove(id: number) {
    return `This action removes a #${id} libary`;
  }
}
