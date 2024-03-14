import { Injectable } from '@nestjs/common';
import { CreateSalleDto } from './dto/create-salle.dto';
import { UpdateSalleDto } from './dto/update-salle.dto';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Salle } from "./schemas/salle.schema";

@Injectable()
export class SalleService {
  constructor(@InjectModel(Salle.name) private userModel: Model<Salle>) {}

  async create(createSalleDto: CreateSalleDto):Promise<Salle>   {
    const createdSalle = new this.userModel(createSalleDto);
    return createdSalle.save();
  }

  async findAll():Promise<Salle[]> {
    return this.userModel.find().exec();
  }

  findOne(id: string) {
    return this.userModel.findById(id).exec();
  }

  update(id: string, updateSalleDto: UpdateSalleDto) {
    return this.userModel.updateOne({_id:id},updateSalleDto).exec();
  }

  remove(id: string) {
    return this.userModel.deleteOne({_id:id}).exec();
  }
}
