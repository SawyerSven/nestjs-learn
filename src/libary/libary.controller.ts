import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LibaryService } from './libary.service';
import { CreateLibaryDto } from './dto/create-libary.dto';
import { UpdateLibaryDto } from './dto/update-libary.dto';

@Controller('libary')
export class LibaryController {
  constructor(private readonly libaryService: LibaryService) {}

  @Post()
  create(@Body() createLibaryDto: CreateLibaryDto) {
    return this.libaryService.create(createLibaryDto);
  }

  @Get()
  findAll() {
    return this.libaryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.libaryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLibaryDto: UpdateLibaryDto) {
    return this.libaryService.update(+id, updateLibaryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.libaryService.remove(+id);
  }
}
