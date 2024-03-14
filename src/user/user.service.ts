import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from "@nestjs/mongoose";
import { User } from './schemas/user.schema';
import { Model } from "mongoose";

@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto):Promise<User>   {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll():Promise<User[]> {
    return this.userModel.find().exec();
  }

  findOne(id: string) {
    return this.userModel.findById(id).exec();
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.updateOne({_id:id},updateUserDto).exec();
  }

  remove(id: string) {
    return this.userModel.deleteOne({_id:id}).exec();
  }
}
