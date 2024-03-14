import { Injectable } from '@nestjs/common';
import { CreateCinemaDto } from './dto/create-cinema.dto';
import { UpdateCinemaDto } from './dto/update-cinema.dto';
import { InjectModel } from "@nestjs/mongoose";
import { User } from "../user/schemas/user.schema";
import { Model } from "mongoose";
import { Cinema } from "./schemas/cinema.shema";

@Injectable()
export class CinemaService {

  constructor(@InjectModel(Cinema.name) private cinemaModel: Model<Cinema>) {}
  create(createCinemaDto: CreateCinemaDto) {
    const createdCinema = new this.cinemaModel(createCinemaDto);
    return createdCinema.save();
  }

  findAll() {
    return this.cinemaModel.find().exec();
  }

  findOne(id: string) {
    return this.cinemaModel.findById(id).exec();
  }

  update(id: string, updateCinemaDto: UpdateCinemaDto) {
    return this.cinemaModel.updateOne({_id:id},updateCinemaDto).exec();
  }

  remove(id: string) {
    return this.cinemaModel.deleteOne({_id:id}).exec();
  }
}
