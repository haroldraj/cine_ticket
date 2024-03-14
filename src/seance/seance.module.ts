import { Module } from '@nestjs/common';
import { SeanceService } from './seance.service';
import { SeanceController } from './seance.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Seance, SeanceSchema } from "./schemas/seance.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Seance.name, schema: SeanceSchema }])],
  controllers: [SeanceController],
  providers: [SeanceService],
})
export class SeanceModule {}
