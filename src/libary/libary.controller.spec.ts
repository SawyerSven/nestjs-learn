import { Test, TestingModule } from '@nestjs/testing';
import { LibaryController } from './libary.controller';
import { LibaryService } from './libary.service';

describe('LibaryController', () => {
  let controller: LibaryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LibaryController],
      providers: [LibaryService],
    }).compile();

    controller = module.get<LibaryController>(LibaryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
