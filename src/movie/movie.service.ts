import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Movie } from "./schemas/movie.schema";

@Injectable()
export class MovieService {
  constructor(@InjectModel(Movie.name) private movieModel: Model<Movie>) {}

  async create(createMovieDto: CreateMovieDto):Promise<Movie>   {
    const createdMovie = new this.movieModel(createMovieDto);
    return createdMovie.save();
  }

  async findAll():Promise<Movie[]> {
    return this.movieModel.find().exec();
  }

  findOne(id: string) {
    return this.movieModel.findById(id).exec();
  }

  update(id: string, updateMovieDto: UpdateMovieDto) {
    return this.movieModel.updateOne({_id:id},updateMovieDto).exec();
  }

  remove(id: string) {
    return this.movieModel.deleteOne({_id:id}).exec();
  }
}
