import { Module } from '@nestjs/common';
import { LibaryService } from './libary.service';
import { LibaryController } from './libary.controller';

@Module({
  controllers: [LibaryController],
  providers: [LibaryService],
})
export class LibaryModule {}
