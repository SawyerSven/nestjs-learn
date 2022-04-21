import { Module } from '@nestjs/common';
import AppController from './app.controller';
import ApiController from './api/api.controller';
import { AppService } from './app.service';
import { LibaryModule } from './libary/libary.module';

@Module({
  imports: [LibaryModule],
  controllers: [AppController, ApiController],
  providers: [AppService],
})
export class AppModule {}
