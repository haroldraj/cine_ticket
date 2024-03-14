import { Injectable } from '@nestjs/common';
import { CreateSeanceDto } from './dto/create-seance.dto';
import { UpdateSeanceDto } from './dto/update-seance.dto';
import { InjectModel } from "@nestjs/mongoose";
import { Seance } from "./schemas/seance.schema";
import { Model } from "mongoose";

@Injectable()
export class SeanceService {
  constructor(@InjectModel(Seance.name) private seanceModel: Model<Seance>) {}

  async create(createSeanceDto: CreateSeanceDto):Promise<Seance>   {
    const createdSeance = new this.seanceModel(createSeanceDto);
    return createdSeance.save();
  }

  async findAll():Promise<Seance[]> {
    return this.seanceModel.find().exec();
  }

  findOne(id: string) {
    return this.seanceModel.findById(id).exec();
  }

  update(id: string, updateSeanceDto: UpdateSeanceDto) {
    return this.seanceModel.updateOne({_id:id},updateSeanceDto).exec();
  }

  remove(id: string) {
    return this.seanceModel.deleteOne({_id:id}).exec();
  }
}
