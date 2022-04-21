import { Controller, Get, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export default class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Redirect('/api/test/')
  getHello(): any {
    console.log(123);
  }
}
