import { Body, Delete, Get, Injectable, Param, Patch, Post } from "@nestjs/common";
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Ticket } from "./schemas/ticket.schema";
import { CreateTicketDto } from "./dto/create-ticket.dto";

@Injectable()
export class TicketService {
  constructor(@InjectModel(Ticket.name) private userModel: Model<Ticket>) {}

  async create(createTicketDto: CreateTicketDto):Promise<Ticket>   {
    const createdTicket = new this.userModel(createTicketDto);
    return createdTicket.save();
  }

  async findAll():Promise<Ticket[]> {
    return this.userModel.find().exec();
  }

  findOne(id: string) {
    return this.userModel.findById(id).exec();
  }

  update(id: string, updateTicketDto: UpdateTicketDto) {
    return this.userModel.updateOne({_id:id},updateTicketDto).exec();
  }

  remove(id: string) {
    return this.userModel.deleteOne({_id:id}).exec();
  }
}
