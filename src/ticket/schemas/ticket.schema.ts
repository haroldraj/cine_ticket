import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TicketDocument = HydratedDocument<Ticket>;
@Schema()
export class Ticket {
  @Prop()
  user_id: string;

  @Prop()
  seance_id: string;

  @Prop()
  code_barre: string;

  @Prop()
  seat: string;

}

export const TicketSchema = SchemaFactory.createForClass(Ticket);