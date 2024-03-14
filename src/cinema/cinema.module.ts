import { Module } from '@nestjs/common';
import { CinemaService } from './cinema.service';
import { CinemaController } from './cinema.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Cinema, CinemaSchema } from "./schemas/cinema.shema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Cinema.name, schema: CinemaSchema }])],
  controllers: [CinemaController],
  providers: [CinemaService],
})
export class CinemaModule {}
