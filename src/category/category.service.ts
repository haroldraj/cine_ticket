import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Category } from "./schemas/category.schema";

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category.name) private userModel: Model<Category>) {}

  async create(createCategoryDto: CreateCategoryDto):Promise<Category>   {
    const createdCategory = new this.userModel(createCategoryDto);
    return createdCategory.save();
  }

  async findAll():Promise<Category[]> {
    return this.userModel.find().exec();
  }

  findOne(id: string) {
    return this.userModel.findById(id).exec();
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.userModel.updateOne({_id:id},updateCategoryDto).exec();
  }

  remove(id: string) {
    return this.userModel.deleteOne({_id:id}).exec();
  }
}
