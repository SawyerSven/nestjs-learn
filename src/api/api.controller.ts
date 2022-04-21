import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { AppService } from 'src/app.service';
import { CreateCatDto } from './api.dto';

@Controller('api')
export default class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test')
  getHello(@Req() request: Request): string {
    return 'asdasdf';
  }

  @Get('/get/:id')
  findOne(@Param() params): string {
    console.log(params);
    return `This action returns a #${params.id} cat`;
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto): Promise<string> {
    console.log(createCatDto);
    return `This action adds a new cat ${createCatDto.name}`;
  }

  @Get('forbidden')
  sendForbidden() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }
}
