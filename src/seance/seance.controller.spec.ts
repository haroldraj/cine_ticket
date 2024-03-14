import { Test, TestingModule } from '@nestjs/testing';
import { SeanceController } from './seance.controller';
import { SeanceService } from './seance.service';

describe('SeanceController', () => {
  let controller: SeanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeanceController],
      providers: [SeanceService],
    }).compile();

    controller = module.get<SeanceController>(SeanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
