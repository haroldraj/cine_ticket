import { Test, TestingModule } from '@nestjs/testing';
import { SeanceService } from './seance.service';

describe('SeanceService', () => {
  let service: SeanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeanceService],
    }).compile();

    service = module.get<SeanceService>(SeanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
