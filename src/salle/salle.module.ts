import { Module } from '@nestjs/common';
import { SalleService } from './salle.service';
import { SalleController } from './salle.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Salle, SalleSchema } from "./schemas/salle.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Salle.name, schema: SalleSchema }])],
  controllers: [SalleController],
  providers: [SalleService],
})
export class SalleModule {}
